// ============================================================
// ui.js — DOM rendering for all 6 screens + radar chart
// ============================================================

// ── Utility ──

function $(sel, ctx) { return (ctx || document).querySelector(sel); }
function $$(sel, ctx) { return Array.from((ctx || document).querySelectorAll(sel)); }

function el(tag, attrs, children) {
  const e = document.createElement(tag);
  if (attrs) Object.entries(attrs).forEach(([k, v]) => {
    if (k === 'class') e.className = v;
    else if (k.startsWith('data-')) e.setAttribute(k, v);
    else if (k === 'html') e.innerHTML = v;
    else e[k] = v;
  });
  if (children) {
    if (typeof children === 'string') e.textContent = children;
    else if (Array.isArray(children)) children.forEach(c => { if (c) e.appendChild(c); });
    else e.appendChild(children);
  }
  return e;
}

// ── Render: S0 Welcome ──

function renderWelcome(container) {
  container.innerHTML = '';
  const div = el('div', { class: 'welcome' }, [
    el('h1', {}, t('welcomeTitle')),
    el('p', { class: 'subtitle' }, t('welcomeSubtitle')),
    el('p', { class: 'note' }, t('welcomeExplain')),
    el('div', {}, [el('span', { class: 'time-badge' }, t('welcomeTime'))]),
    el('div', { class: 'welcome-actions' }, [
      el('button', {
        class: 'btn btn-primary',
        onclick: () => app.nextStep()
      }, t('start'))
    ])
  ]);
  container.appendChild(div);
}

// ── Render: S1 Statements ──

function renderStatements(container, answers) {
  container.innerHTML = '';
  container.appendChild(el('h2', { class: 'section-title' }, t('statementsTitle')));
  container.appendChild(el('p', { class: 'section-intro' }, t('statementsIntro')));

  const likertLabels = [t('likert1'), t('likert2'), t('likert3'), t('likert4'), t('likert5')];

  STATEMENTS.forEach((stmt, i) => {
    const card = el('div', {
      class: 'statement-card' + (answers[i] != null ? ' answered' : ''),
      'data-index': String(i)
    });

    card.appendChild(el('div', { class: 'statement-number' }, `${i + 1} / ${STATEMENTS.length}`));
    card.appendChild(el('p', { class: 'statement-text' }, stmt.text[getLang()]));

    const group = el('div', { class: 'likert-group' });
    for (let v = 1; v <= 5; v++) {
      const btn = el('button', {
        class: 'likert-btn' + (answers[i] === v ? ' selected' : ''),
        'data-value': String(v)
      }, likertLabels[v - 1]);

      btn.onclick = () => {
        answers[i] = v;
        // Update UI
        $$('.likert-btn', card).forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        card.classList.add('answered');
        app.saveState();
      };
      group.appendChild(btn);
    }
    card.appendChild(group);
    container.appendChild(card);
  });

  container.appendChild(createNav(true));
}

// ── Render: S2 A/B Choices ──

function renderABChoices(container, abAnswers) {
  container.innerHTML = '';
  container.appendChild(el('h2', { class: 'section-title' }, t('abTitle')));
  container.appendChild(el('p', { class: 'section-intro' }, t('abIntro')));

  AB_PAIRS.forEach((pair, i) => {
    const pairDiv = el('div', { class: 'ab-pair', 'data-index': String(i) });
    pairDiv.appendChild(el('div', { class: 'ab-pair-number' }, `${i + 1} / ${AB_PAIRS.length}`));

    const options = el('div', { class: 'ab-options' });

    ['a', 'b'].forEach(side => {
      const opt = pair[side === 'a' ? 'optionA' : 'optionB'];
      const card = el('div', {
        class: 'ab-card' + (abAnswers[i] === side ? ' selected' : ''),
        'data-side': side
      });

      const visual = el('div', { class: 'ab-visual ' + opt.css });
      const label = el('div', { class: 'ab-label' }, opt.label[getLang()]);

      card.appendChild(visual);
      card.appendChild(label);

      card.onclick = () => {
        abAnswers[i] = side;
        updateABSelection(pairDiv, i, abAnswers);
        app.saveState();
      };

      options.appendChild(card);
    });

    pairDiv.appendChild(options);

    // "Both" / "Neither" buttons
    const neutral = el('div', { class: 'ab-neutral' });
    ['both', 'neither'].forEach(val => {
      const btn = el('button', {
        class: 'ab-neutral-btn' + (abAnswers[i] === val ? ' selected' : ''),
        'data-value': val
      }, t(val === 'both' ? 'abBoth' : 'abNeither'));

      btn.onclick = () => {
        abAnswers[i] = val;
        updateABSelection(pairDiv, i, abAnswers);
        app.saveState();
      };
      neutral.appendChild(btn);
    });

    pairDiv.appendChild(neutral);
    container.appendChild(pairDiv);
  });

  container.appendChild(createNav(true));
}

function updateABSelection(pairDiv, index, abAnswers) {
  const val = abAnswers[index];
  $$('.ab-card', pairDiv).forEach(c => {
    c.classList.toggle('selected', c.dataset.side === val);
  });
  $$('.ab-neutral-btn', pairDiv).forEach(b => {
    b.classList.toggle('selected', b.dataset.value === val);
  });
}

// ── Render: S3 Bridges ──

function renderBridges(container, bridgeSelections) {
  container.innerHTML = '';
  container.appendChild(el('h2', { class: 'section-title' }, t('bridgesTitle')));
  container.appendChild(el('p', { class: 'section-intro' }, t('bridgesIntro')));

  const selectedDomains = Object.keys(bridgeSelections);

  // Domain grid
  const domainHint = el('div', { class: 'filter-label', style: 'margin-bottom: 0.5rem' }, t('bridgesMaxDomains'));
  container.appendChild(domainHint);

  const grid = el('div', { class: 'domain-grid' });

  BRIDGE_DOMAINS.forEach(domain => {
    const isSel = selectedDomains.includes(domain.id);
    const isDisabled = !isSel && selectedDomains.length >= 3;

    const chip = el('div', {
      class: 'domain-chip' + (isSel ? ' selected' : '') + (isDisabled ? ' disabled' : '')
    }, [
      el('span', { class: 'domain-icon' }, domain.icon),
      el('span', {}, t(domain.nameKey))
    ]);

    chip.onclick = () => {
      if (isDisabled) return;
      if (isSel) {
        delete bridgeSelections[domain.id];
      } else {
        bridgeSelections[domain.id] = [];
      }
      renderBridges(container, bridgeSelections);
      app.saveState();
    };

    grid.appendChild(chip);
  });
  container.appendChild(grid);

  // Keyword sections for selected domains
  selectedDomains.forEach(domId => {
    const domain = BRIDGE_DOMAINS.find(d => d.id === domId);
    if (!domain) return;

    const section = el('div', { class: 'keyword-section' });
    section.appendChild(el('div', { class: 'keyword-section-title' },
      t(domain.nameKey) + ' — ' + t('bridgesMaxKeywords')));

    const chips = el('div', { class: 'keyword-chips' });
    const selectedKws = bridgeSelections[domId] || [];

    domain.keywords.forEach(kwKey => {
      const isSel = selectedKws.includes(kwKey);
      const isDisabled = !isSel && selectedKws.length >= 3;

      const chip = el('button', {
        class: 'keyword-chip' + (isSel ? ' selected' : '') + (isDisabled ? ' disabled' : '')
      }, t(kwKey));

      chip.onclick = () => {
        if (isDisabled) return;
        if (isSel) {
          bridgeSelections[domId] = selectedKws.filter(k => k !== kwKey);
        } else {
          bridgeSelections[domId] = [...selectedKws, kwKey];
        }
        renderBridges(container, bridgeSelections);
        app.saveState();
      };

      chips.appendChild(chip);
    });

    section.appendChild(chips);
    container.appendChild(section);
  });

  container.appendChild(createNav(true));
}

// ── Render: S4 Filters ──

function renderFilters(container, filters) {
  container.innerHTML = '';
  container.appendChild(el('h2', { class: 'section-title' }, t('filtersTitle')));
  container.appendChild(el('p', { class: 'section-intro' }, t('filtersIntro')));

  // Budget
  renderFilterGroup(container, t('budgetLabel'), 'budget', [
    { value: 'any', label: t('budgetAny') },
    { value: '0-250', label: t('budget0') },
    { value: '250-1000', label: t('budget1') },
    { value: '1000-5000', label: t('budget2') },
    { value: '5000+', label: t('budget3') }
  ], filters, false);

  // Format
  renderFilterGroup(container, t('formatLabel'), 'format', [
    { value: 'any', label: t('formatAny') },
    { value: 'small', label: t('formatSmall') },
    { value: 'medium', label: t('formatMed') },
    { value: 'large', label: t('formatLarge') }
  ], filters, false);

  // Medium (multi-select)
  renderFilterGroup(container, t('mediumLabel'), 'medium', [
    { value: 'any', label: t('mediumAny') },
    { value: 'schilderij', label: t('mediumPainting') },
    { value: 'print', label: t('mediumPrint') },
    { value: 'fotografie', label: t('mediumPhoto') },
    { value: 'tekening', label: t('mediumDrawing') },
    { value: 'mixed-media', label: t('mediumMixed') },
    { value: 'sculptuur', label: t('mediumSculpture') }
  ], filters, true);

  // Edition
  renderFilterGroup(container, t('editionLabel'), 'edition', [
    { value: 'any', label: t('editionAny') },
    { value: 'uniek', label: t('editionUnique') },
    { value: 'kleine-oplage', label: t('editionLimited') },
    { value: 'open', label: t('editionOpen') }
  ], filters, false);

  // Custom nav with "See results" button
  const nav = el('div', { class: 'btn-nav' });
  nav.appendChild(el('button', {
    class: 'btn btn-secondary',
    onclick: () => app.prevStep()
  }, t('previous')));
  nav.appendChild(el('button', {
    class: 'btn btn-primary',
    onclick: () => app.nextStep()
  }, t('showResults')));
  container.appendChild(nav);
}

function renderFilterGroup(container, label, key, options, filters, multi) {
  const group = el('div', { class: 'filter-group' });
  group.appendChild(el('div', { class: 'filter-label' }, label));
  const optContainer = el('div', { class: 'filter-options' });

  options.forEach(opt => {
    let isSel;
    if (multi) {
      const arr = filters[key] || [];
      isSel = arr.includes(opt.value);
    } else {
      isSel = (filters[key] || 'any') === opt.value;
    }

    const chip = el('button', {
      class: 'filter-chip' + (isSel ? ' selected' : '')
    }, opt.label);

    chip.onclick = () => {
      if (multi) {
        let arr = filters[key] || [];
        if (opt.value === 'any') {
          filters[key] = ['any'];
        } else {
          arr = arr.filter(v => v !== 'any');
          if (arr.includes(opt.value)) {
            arr = arr.filter(v => v !== opt.value);
          } else {
            arr.push(opt.value);
          }
          filters[key] = arr.length ? arr : ['any'];
        }
      } else {
        filters[key] = opt.value;
      }
      renderFilters($('#screen-filters'), filters);
      app.saveState();
    };

    optContainer.appendChild(chip);
  });

  group.appendChild(optContainer);
  container.appendChild(group);
}

// ── Render: S5 Results ──

function renderResults(container, profile, shortlists) {
  container.innerHTML = '';
  container.appendChild(el('h2', { class: 'section-title' }, t('resultsTitle')));

  // Radar chart
  const profileSection = el('div', { class: 'profile-section' });
  const radarWrap = el('div', { class: 'radar-container' });
  const canvas = el('canvas', { width: 360, height: 360 });
  radarWrap.appendChild(canvas);
  profileSection.appendChild(radarWrap);
  container.appendChild(profileSection);

  // Draw radar after DOM insertion
  requestAnimationFrame(() => drawRadar(canvas, profile.axes));

  // Wall shortlist
  const wallSection = el('div', { class: 'shortlist-section' });
  wallSection.appendChild(el('h3', { class: 'shortlist-title' }, t('wallTitle')));
  wallSection.appendChild(el('p', { class: 'shortlist-subtitle' }, t('wallSubtitle')));

  if (shortlists.wall.safe.length) {
    wallSection.appendChild(el('div', { class: 'shortlist-category' }, t('safeLabel')));
    shortlists.wall.safe.forEach(w => wallSection.appendChild(renderWorkCard(w, 'safe')));
  }
  if (shortlists.wall.stretch.length) {
    wallSection.appendChild(el('div', { class: 'shortlist-category' }, t('stretchLabel')));
    shortlists.wall.stretch.forEach(w => wallSection.appendChild(renderWorkCard(w, 'stretch')));
  }
  if (shortlists.wall.wildcard.length) {
    wallSection.appendChild(el('div', { class: 'shortlist-category' }, t('wildcardLabel')));
    shortlists.wall.wildcard.forEach(w => wallSection.appendChild(renderWorkCard(w, 'wildcard')));
  }
  container.appendChild(wallSection);

  // Head shortlist
  const headSection = el('div', { class: 'shortlist-section' });
  headSection.appendChild(el('h3', { class: 'shortlist-title' }, t('headTitle')));
  headSection.appendChild(el('p', { class: 'shortlist-subtitle' }, t('headSubtitle')));
  headSection.appendChild(el('div', { class: 'shortlist-category' }, t('respectLabel')));
  shortlists.head.forEach(w => headSection.appendChild(renderWorkCard(w, 'respect')));
  container.appendChild(headSection);

  // Actions
  const actions = el('div', { class: 'result-actions' });
  actions.appendChild(el('button', {
    class: 'btn btn-secondary',
    onclick: () => exportProfile(profile)
  }, t('exportProfile')));
  actions.appendChild(el('button', {
    class: 'btn btn-secondary',
    onclick: () => app.restart()
  }, t('restart')));
  container.appendChild(actions);
}

function renderWorkCard(work, badge) {
  const lang = getLang();
  const card = el('div', { class: 'work-card' });

  const header = el('div', { class: 'work-header' });
  const info = el('div');
  info.appendChild(el('div', { class: 'work-title' }, work.title[lang]));
  info.appendChild(el('div', { class: 'work-artist' }, work.artist + ', ' + work.year));
  info.appendChild(el('div', { class: 'work-meta' }, work.medium + ' — ' + work.dimensions));
  header.appendChild(info);

  const badgeKey = {
    safe: 'safeLabel', stretch: 'stretchLabel',
    wildcard: 'wildcardLabel', respect: 'respectLabel'
  }[badge];
  header.appendChild(el('span', { class: 'work-badge' }, t(badgeKey)));
  card.appendChild(header);

  const desc = work.description[lang];
  if (desc) {
    const dl = el('dl', { class: 'work-description' });
    dl.appendChild(el('dt', {}, t('whyThisFits')));
    dl.appendChild(el('dd', {}, desc.why));
    dl.appendChild(el('dt', {}, t('viewingTip')));
    dl.appendChild(el('dd', {}, desc.tip));
    card.appendChild(dl);
  }

  return card;
}

// ── Radar Chart (Canvas) ──

function drawRadar(canvas, axes) {
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;
  const cx = w / 2;
  const cy = h / 2;
  const r = Math.min(cx, cy) - 50;
  const labels = AXIS_NAMES;
  const n = labels.length;
  const step = (2 * Math.PI) / n;
  const startAngle = -Math.PI / 2;

  // Resolve CSS colors
  const styles = getComputedStyle(document.documentElement);
  const borderColor = styles.getPropertyValue('--border').trim();
  const textColor = styles.getPropertyValue('--text-muted').trim();
  const accentColor = styles.getPropertyValue('--accent').trim();

  ctx.clearRect(0, 0, w, h);

  // Grid rings
  [0.2, 0.4, 0.6, 0.8, 1.0].forEach(frac => {
    ctx.beginPath();
    for (let i = 0; i <= n; i++) {
      const angle = startAngle + i * step;
      const x = cx + Math.cos(angle) * r * frac;
      const y = cy + Math.sin(angle) * r * frac;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.strokeStyle = borderColor;
    ctx.lineWidth = 0.5;
    ctx.stroke();
  });

  // Spokes
  for (let i = 0; i < n; i++) {
    const angle = startAngle + i * step;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + Math.cos(angle) * r, cy + Math.sin(angle) * r);
    ctx.strokeStyle = borderColor;
    ctx.lineWidth = 0.5;
    ctx.stroke();
  }

  // Data polygon
  ctx.beginPath();
  labels.forEach((label, i) => {
    const val = (axes[label] || 0) / 10; // -1..+1
    const frac = (val + 1) / 2; // 0..1
    const angle = startAngle + i * step;
    const x = cx + Math.cos(angle) * r * frac;
    const y = cy + Math.sin(angle) * r * frac;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.closePath();
  ctx.fillStyle = accentColor + '33';
  ctx.fill();
  ctx.strokeStyle = accentColor;
  ctx.lineWidth = 2;
  ctx.stroke();

  // Data points
  labels.forEach((label, i) => {
    const val = (axes[label] || 0) / 10;
    const frac = (val + 1) / 2;
    const angle = startAngle + i * step;
    const x = cx + Math.cos(angle) * r * frac;
    const y = cy + Math.sin(angle) * r * frac;
    ctx.beginPath();
    ctx.arc(x, y, 3.5, 0, 2 * Math.PI);
    ctx.fillStyle = accentColor;
    ctx.fill();
  });

  // Axis labels
  ctx.font = '11px -apple-system, sans-serif';
  ctx.fillStyle = textColor;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  const axisLabelKeys = [
    'axisEngagement', 'axisToon', 'axisModus', 'axisBeeldtaal',
    'axisDichtheid', 'axisTempo', 'axisOpenheid', 'axisHoudbaarheid', 'axisVrijheid'
  ];

  labels.forEach((label, i) => {
    const angle = startAngle + i * step;
    const labelR = r + 28;
    const x = cx + Math.cos(angle) * labelR;
    const y = cy + Math.sin(angle) * labelR;
    ctx.fillText(t(axisLabelKeys[i]), x, y);
  });
}

// ── Export profile ──

function exportProfile(profile) {
  const data = JSON.stringify(profile, null, 2);
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'kunstprofiel.json';
  a.click();
  URL.revokeObjectURL(url);
}

// ── Navigation helper ──

function createNav(showPrev) {
  const nav = el('div', { class: 'btn-nav' });
  if (showPrev) {
    nav.appendChild(el('button', {
      class: 'btn btn-secondary',
      onclick: () => app.prevStep()
    }, t('previous')));
  } else {
    nav.appendChild(el('div')); // spacer
  }
  nav.appendChild(el('button', {
    class: 'btn btn-primary',
    onclick: () => app.nextStep()
  }, t('next')));
  return nav;
}

// ── Progress bar ──

function updateProgress(current, total) {
  const pct = (current / total) * 100;
  const bar = $('.progress-bar');
  const text = $('.progress-text');
  if (bar) bar.style.width = pct + '%';
  if (text) text.textContent = t('stepOf', { current, total });
}
