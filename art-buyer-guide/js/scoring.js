// ============================================================
// scoring.js — Axis calculation + matching algorithm
// ============================================================

const AXIS_NAMES = [
  'engagement', 'toon', 'modus', 'beeldtaal',
  'dichtheid', 'tempo', 'openheid', 'houdbaarheid', 'vrijheid'
];

// ── Step 1: Calculate axis scores from statement answers ──

function calcStatementScores(answers) {
  // answers: array of 16 values (1–5)
  const scores = {};
  AXIS_NAMES.forEach(a => scores[a] = 0);

  STATEMENTS.forEach((stmt, i) => {
    const raw = answers[i];
    if (raw == null) return;
    const normalized = (raw - 3) / 2; // -1 .. +1
    stmt.mappings.forEach(m => {
      if (m.direction === 0) return;
      scores[m.axis] += normalized * m.direction * m.weight * 5;
    });
  });

  return scores;
}

// ── Step 2: Apply A/B choice corrections ──

function applyABCorrections(scores, abChoices) {
  // abChoices: array of 10 values: 'a', 'b', 'both', 'neither'
  AB_PAIRS.forEach((pair, i) => {
    const choice = abChoices[i];
    if (!choice || choice === 'both' || choice === 'neither') return;
    const t = pair.target;
    if (t.type === 'axis') {
      const dir = choice === 'a' ? t.aDirection : t.bDirection;
      scores[t.axis] += dir * t.weight;
    }
    // tag-type targets handled separately
  });
  return scores;
}

// ── Step 3: Extract tags from A/B choices ──

function extractABTags(abChoices) {
  const tags = [];
  AB_PAIRS.forEach((pair, i) => {
    const choice = abChoices[i];
    if (!choice || choice === 'both' || choice === 'neither') return;
    const t = pair.target;
    if (t.type === 'tag') {
      const val = choice === 'a' ? t.aValue : t.bValue;
      tags.push(`${t.tag}:${val}`);
    }
  });
  return tags;
}

// ── Step 4: Extract bridge tags ──

function extractBridgeTags(bridgeSelections) {
  // bridgeSelections: { domainId: [keywordKey, ...], ... }
  const tags = new Set();
  Object.values(bridgeSelections).forEach(keywords => {
    keywords.forEach(kw => {
      const bridgeTags = BRIDGE_KEYWORD_TAGS[kw] || [];
      bridgeTags.forEach(tag => tags.add(tag));
    });
  });
  return Array.from(tags);
}

// ── Step 5: Clamp scores to -10..+10 ──

function clampScores(scores) {
  const clamped = {};
  AXIS_NAMES.forEach(a => {
    clamped[a] = Math.max(-10, Math.min(10, Math.round(scores[a] * 10) / 10));
  });
  return clamped;
}

// ── Step 6: Build full profile ──

function buildProfile(statementAnswers, abChoices, bridgeSelections, filters) {
  let scores = calcStatementScores(statementAnswers);
  scores = applyABCorrections(scores, abChoices);
  scores = clampScores(scores);

  const abTags = extractABTags(abChoices);
  const bridgeTags = extractBridgeTags(bridgeSelections);

  return {
    axes: scores,
    tags: abTags,
    bridgeTags: bridgeTags,
    filters: filters || {},
    bridgeSelections: bridgeSelections
  };
}

// ── Matching: Euclidean distance ──

function euclideanDistance(profileAxes, workAxes) {
  let sum = 0;
  AXIS_NAMES.forEach(a => {
    const diff = (profileAxes[a] || 0) - (workAxes[a] || 0);
    sum += diff * diff;
  });
  return Math.sqrt(sum);
}

// ── Matching: Tag overlap bonus ──

function tagOverlap(profileTags, workTags) {
  let count = 0;
  profileTags.forEach(pt => {
    if (workTags.includes(pt)) count++;
  });
  return count;
}

// ── Matching: Bridge overlap ──

function bridgeOverlap(profileBridgeTags, workBridges) {
  let count = 0;
  const workBridgeTagSet = new Set();
  workBridges.forEach(b => {
    // Map bridge keywords to their tags
    Object.entries(BRIDGE_KEYWORD_TAGS).forEach(([key, tags]) => {
      const kwLower = key.replace('kw', '').toLowerCase();
      if (b.toLowerCase() === kwLower) {
        tags.forEach(t => workBridgeTagSet.add(t));
      }
    });
  });
  profileBridgeTags.forEach(t => {
    if (workBridgeTagSet.has(t)) count++;
  });
  return count;
}

// ── Filter check ──

function passesFilters(work, filters) {
  if (!filters) return true;

  if (filters.budget && filters.budget !== 'any') {
    if (work.priceRange !== filters.budget) return false;
  }

  if (filters.format && filters.format !== 'any') {
    // Parse first dimension number from work
    const dimMatch = work.dimensions.match(/(\d+)/);
    if (dimMatch) {
      const size = parseInt(dimMatch[1]);
      if (filters.format === 'small' && size >= 50) return false;
      if (filters.format === 'medium' && (size < 50 || size > 100)) return false;
      if (filters.format === 'large' && size <= 100) return false;
    }
  }

  if (filters.medium && filters.medium.length > 0 && !filters.medium.includes('any')) {
    const mediumMap = {
      'schilderij': 'painting', 'print': 'print', 'fotografie': 'photography',
      'tekening': 'drawing', 'mixed-media': 'mixed', 'sculptuur': 'sculpture'
    };
    const workMed = work.medium.toLowerCase();
    const match = filters.medium.some(fm => {
      return workMed === fm || workMed === mediumMap[fm] || fm === mediumMap[workMed];
    });
    if (!match) return false;
  }

  if (filters.edition && filters.edition !== 'any') {
    const edMap = { 'uniek': 'uniek', 'kleine-oplage': 'kleine-oplage', 'open': 'open' };
    if (work.edition !== filters.edition && work.edition !== edMap[filters.edition]) return false;
  }

  return true;
}

// ── Generate shortlists ──

function generateShortlists(profile) {
  const allWorks = ART_CATALOG;
  const TAG_BONUS = 2.0;
  const BRIDGE_BONUS = 1.5;

  // Score all works
  const scored = allWorks.map(work => {
    const dist = euclideanDistance(profile.axes, work.axes);
    const tBonus = tagOverlap(profile.tags, work.tags) * TAG_BONUS;
    const bBonus = bridgeOverlap(profile.bridgeTags, work.bridges) * BRIDGE_BONUS;
    const passes = passesFilters(work, profile.filters);

    // "Respect score" = high on openheid + houdbaarheid + vrijheid
    const respectScore = (work.axes.openheid + work.axes.houdbaarheid + work.axes.vrijheid) / 3;

    return {
      work,
      distance: dist,
      tagBonus: tBonus,
      bridgeBonus: bBonus,
      finalScore: dist - tBonus - bBonus,
      respectScore,
      passesFilters: passes
    };
  });

  // Sort by finalScore (lower = better match)
  const filtered = scored.filter(s => s.passesFilters);
  const unfiltered = scored.slice();

  filtered.sort((a, b) => a.finalScore - b.finalScore);
  unfiltered.sort((a, b) => a.finalScore - b.finalScore);

  // "Voor je muur" — use filtered list
  const wallSource = filtered.length >= 5 ? filtered : unfiltered;
  const safe = wallSource.slice(0, 5);
  const stretch = wallSource.slice(5, 10);

  // Wildcards: works with highest bridge bonus not already in safe/stretch
  const usedIds = new Set([...safe, ...stretch].map(s => s.work.id));
  const bridgeSorted = scored
    .filter(s => !usedIds.has(s.work.id))
    .sort((a, b) => b.bridgeBonus - a.bridgeBonus);
  const wildcard = bridgeSorted.slice(0, 2);

  // "Voor je hoofd" — sort by respect score
  const headSorted = unfiltered
    .slice()
    .sort((a, b) => b.respectScore - a.respectScore);
  const head = headSorted.slice(0, 5);

  return {
    wall: {
      safe: safe.map(s => s.work),
      stretch: stretch.map(s => s.work),
      wildcard: wildcard.map(s => s.work)
    },
    head: head.map(s => s.work)
  };
}
