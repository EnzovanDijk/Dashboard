// ============================================================
// i18n.js — Translation system (NL + EN)
// ============================================================

const TRANSLATIONS = {
  // ── General UI ──
  langToggle:    { nl: 'EN', en: 'NL' },
  appTitle:      { nl: 'Kunst-Keuzehulp', en: 'Art Buyer Guide' },
  stepOf:        { nl: 'Stap {current} van {total}', en: 'Step {current} of {total}' },
  next:          { nl: 'Volgende', en: 'Next' },
  previous:      { nl: 'Vorige', en: 'Previous' },
  start:         { nl: 'Start', en: 'Start' },
  restart:       { nl: 'Opnieuw beginnen', en: 'Start over' },
  exportProfile: { nl: 'Exporteer profiel', en: 'Export profile' },
  showResults:   { nl: 'Bekijk resultaat', en: 'See results' },

  // ── S0 Welcome ──
  welcomeTitle:    { nl: 'Ontdek welke kunst bij jou past', en: 'Discover which art suits you' },
  welcomeSubtitle: {
    nl: 'In 5–10 minuten bouwen we samen jouw smaakprofiel op. Je krijgt twee routes: kunst voor aan je muur én kunst voor in je hoofd.',
    en: 'In 5–10 minutes we\'ll build your taste profile together. You\'ll get two routes: art for your wall and art for your mind.'
  },
  welcomeExplain: {
    nl: 'Geen goed of fout — het gaat om jouw kijk, niet om kennis.',
    en: 'No right or wrong — it\'s about your perspective, not expertise.'
  },
  welcomeTime: { nl: '± 8 minuten', en: '± 8 minutes' },
  chooseLang:  { nl: 'Kies je taal', en: 'Choose your language' },

  // ── S1 Statements ──
  statementsTitle: { nl: 'Jouw kijk op kunst', en: 'Your view on art' },
  statementsIntro: {
    nl: 'Geef aan in hoeverre je het eens bent met elke stelling.',
    en: 'Indicate how much you agree with each statement.'
  },
  likert1: { nl: 'Helemaal oneens', en: 'Strongly disagree' },
  likert2: { nl: 'Oneens', en: 'Disagree' },
  likert3: { nl: 'Neutraal', en: 'Neutral' },
  likert4: { nl: 'Eens', en: 'Agree' },
  likert5: { nl: 'Helemaal eens', en: 'Strongly agree' },

  // ── S2 A/B Choices ──
  abTitle: { nl: 'Wat trekt je aan?', en: 'What appeals to you?' },
  abIntro: {
    nl: 'Kies steeds het beeld dat je het meest aanspreekt. Je mag ook "beide" of "geen" kiezen.',
    en: 'Pick the image that appeals to you most. You can also choose "both" or "neither".'
  },
  abBoth:    { nl: 'Beide', en: 'Both' },
  abNeither: { nl: 'Geen van beide', en: 'Neither' },

  // ── S3 Bridges ──
  bridgesTitle: { nl: 'Jouw interesses', en: 'Your interests' },
  bridgesIntro: {
    nl: 'Kies maximaal 3 domeinen die je aanspreken. Kies daarna per domein maximaal 3 trefwoorden.',
    en: 'Pick up to 3 domains that interest you. Then pick up to 3 keywords per domain.'
  },
  bridgesMaxDomains:  { nl: 'Maximaal 3 domeinen', en: 'Max 3 domains' },
  bridgesMaxKeywords: { nl: 'Maximaal 3 trefwoorden per domein', en: 'Max 3 keywords per domain' },

  // ── S4 Filters ──
  filtersTitle: { nl: 'Praktische voorkeuren', en: 'Practical preferences' },
  filtersIntro: {
    nl: 'Help ons de selectie af te stemmen op jouw situatie.',
    en: 'Help us tailor the selection to your situation.'
  },
  budgetLabel:  { nl: 'Budget', en: 'Budget' },
  formatLabel:  { nl: 'Formaat', en: 'Format' },
  mediumLabel:  { nl: 'Medium', en: 'Medium' },
  editionLabel: { nl: 'Oplage', en: 'Edition' },

  budgetAny:    { nl: 'Maakt niet uit', en: 'Any' },
  budget0:      { nl: '€ 0 – 250', en: '€ 0 – 250' },
  budget1:      { nl: '€ 250 – 1.000', en: '€ 250 – 1,000' },
  budget2:      { nl: '€ 1.000 – 5.000', en: '€ 1,000 – 5,000' },
  budget3:      { nl: '€ 5.000+', en: '€ 5,000+' },

  formatAny:   { nl: 'Maakt niet uit', en: 'Any' },
  formatSmall: { nl: 'Klein (< 50 cm)', en: 'Small (< 50 cm)' },
  formatMed:   { nl: 'Middel (50–100 cm)', en: 'Medium (50–100 cm)' },
  formatLarge: { nl: 'Groot (> 100 cm)', en: 'Large (> 100 cm)' },

  mediumAny:       { nl: 'Maakt niet uit', en: 'Any' },
  mediumPainting:  { nl: 'Schilderij', en: 'Painting' },
  mediumPrint:     { nl: 'Print / Grafiek', en: 'Print' },
  mediumPhoto:     { nl: 'Fotografie', en: 'Photography' },
  mediumDrawing:   { nl: 'Tekening', en: 'Drawing' },
  mediumMixed:     { nl: 'Mixed media', en: 'Mixed media' },
  mediumSculpture: { nl: 'Sculptuur', en: 'Sculpture' },

  editionAny:     { nl: 'Maakt niet uit', en: 'Any' },
  editionUnique:  { nl: 'Uniek', en: 'Unique' },
  editionLimited: { nl: 'Kleine oplage', en: 'Limited edition' },
  editionOpen:    { nl: 'Open editie', en: 'Open edition' },

  // ── S5 Results ──
  resultsTitle:   { nl: 'Jouw kunstprofiel', en: 'Your art profile' },
  wallTitle:      { nl: 'Voor je muur', en: 'For your wall' },
  wallSubtitle:   { nl: 'Kunst die past bij je ruimte én je smaak', en: 'Art that fits your space and taste' },
  headTitle:      { nl: 'Voor je hoofd', en: 'For your mind' },
  headSubtitle:   { nl: 'Kunst die je uitdaagt en fascineert', en: 'Art that challenges and fascinates you' },
  safeLabel:      { nl: 'Past bij je', en: 'Suits you' },
  stretchLabel:   { nl: 'Net buiten je comfortzone', en: 'Just outside your comfort zone' },
  wildcardLabel:  { nl: 'Verrassend', en: 'Surprise' },
  respectLabel:   { nl: 'Respect-first', en: 'Respect-first' },
  whyThisFits:    { nl: 'Waarom dit past', en: 'Why this fits' },
  viewingTip:     { nl: 'Kijkinstructie', en: 'Viewing tip' },
  profileExport:  { nl: 'Bewaar je profiel', en: 'Save your profile' },

  // ── Axis names ──
  axisEngagement:   { nl: 'Engagement', en: 'Engagement' },
  axisToon:         { nl: 'Toon', en: 'Tone' },
  axisModus:        { nl: 'Modus', en: 'Mode' },
  axisBeeldtaal:    { nl: 'Beeldtaal', en: 'Visual language' },
  axisDichtheid:    { nl: 'Dichtheid', en: 'Density' },
  axisTempo:        { nl: 'Tempo', en: 'Pace' },
  axisOpenheid:     { nl: 'Openheid', en: 'Openness' },
  axisHoudbaarheid: { nl: 'Houdbaarheid', en: 'Durability' },
  axisVrijheid:     { nl: 'Vrijheid', en: 'Freedom' },

  // ── Axis pole labels ──
  poleSocietal:      { nl: 'Maatschappelijk', en: 'Societal' },
  polePoetic:        { nl: 'Poëtisch', en: 'Poetic' },
  poleConfronting:   { nl: 'Confronterend', en: 'Confronting' },
  poleComforting:    { nl: 'Troostend', en: 'Comforting' },
  poleConceptual:    { nl: 'Conceptueel', en: 'Conceptual' },
  poleSensory:       { nl: 'Zintuiglijk', en: 'Sensory' },
  poleFigurative:    { nl: 'Figuratief', en: 'Figurative' },
  poleAbstract:      { nl: 'Abstract', en: 'Abstract' },
  poleMinimal:       { nl: 'Minimaal', en: 'Minimal' },
  poleExpressive:    { nl: 'Expressief', en: 'Expressive' },
  poleDirect:        { nl: 'Direct', en: 'Direct' },
  poleSlow:          { nl: 'Langzaam', en: 'Slow' },
  poleAmbiguity:     { nl: 'Ambigu', en: 'Ambiguous' },
  poleUnambiguous:   { nl: 'Eenduidig', en: 'Unambiguous' },
  poleTimeless:      { nl: 'Tijdloos', en: 'Timeless' },
  poleZeitgeist:     { nl: 'Zeitgeist', en: 'Zeitgeist' },
  poleAutonomous:    { nl: 'Autonoom', en: 'Autonomous' },
  poleInstrumental:  { nl: 'Instrumenteel', en: 'Instrumental' },

  // ── Bridge domain names ──
  domainMusic:        { nl: 'Muziek', en: 'Music' },
  domainArchitecture: { nl: 'Architectuur', en: 'Architecture' },
  domainPhilosophy:   { nl: 'Filosofie', en: 'Philosophy' },
  domainScience:      { nl: 'Wetenschap', en: 'Science' },
  domainChess:        { nl: 'Schaken / Strategie', en: 'Chess / Strategy' },
  domainFashion:      { nl: 'Mode / Design', en: 'Fashion / Design' },
  domainNature:       { nl: 'Natuur', en: 'Nature' },
  domainLiterature:   { nl: 'Literatuur', en: 'Literature' },
  domainFilm:         { nl: 'Film / Theater', en: 'Film / Theatre' },
  domainSports:       { nl: 'Sport / Beweging', en: 'Sports / Movement' },
  domainTech:         { nl: 'Technologie', en: 'Technology' },
  domainFood:         { nl: 'Eten / Culinair', en: 'Food / Culinary' },

  // ── Bridge keywords ──
  kwMelancholy:  { nl: 'Melancholie', en: 'Melancholy' },
  kwDiscipline:  { nl: 'Discipline', en: 'Discipline' },
  kwHumor:       { nl: 'Humor', en: 'Humour' },
  kwStrategy:    { nl: 'Strategie', en: 'Strategy' },
  kwRitual:      { nl: 'Ritueel', en: 'Ritual' },
  kwChaos:       { nl: 'Chaos', en: 'Chaos' },
  kwSilence:     { nl: 'Stilte', en: 'Silence' },
  kwRhythm:      { nl: 'Ritme', en: 'Rhythm' },
  kwPrecision:   { nl: 'Precisie', en: 'Precision' },
  kwEmotion:     { nl: 'Emotie', en: 'Emotion' },
  kwNarrative:   { nl: 'Verhaal', en: 'Narrative' },
  kwTexture:     { nl: 'Textuur', en: 'Texture' },
  kwContrast:    { nl: 'Contrast', en: 'Contrast' },
  kwMinimalism:  { nl: 'Minimalisme', en: 'Minimalism' },
  kwComplexity:  { nl: 'Complexiteit', en: 'Complexity' },
  kwIrony:       { nl: 'Ironie', en: 'Irony' },
  kwIntimacy:    { nl: 'Intimiteit', en: 'Intimacy' },
  kwPower:       { nl: 'Kracht', en: 'Power' },
};

// ── i18n engine ──
let currentLang = localStorage.getItem('abg-lang') || 'nl';

function t(key, replacements) {
  const entry = TRANSLATIONS[key];
  if (!entry) return `[${key}]`;
  let text = entry[currentLang] || entry.nl || `[${key}]`;
  if (replacements) {
    Object.keys(replacements).forEach(k => {
      text = text.replace(`{${k}}`, replacements[k]);
    });
  }
  return text;
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('abg-lang', lang);
}

function getLang() {
  return currentLang;
}

function toggleLang() {
  setLang(currentLang === 'nl' ? 'en' : 'nl');
}
