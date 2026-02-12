// ============================================================
// questions.js — Statements, A/B pairs, bridge domains/keywords
// ============================================================

// ── 16 Statements ──
// Each maps to one or more axes with direction (+1 or -1) and weight.
// Axes: engagement(1), toon(2), modus(3), beeldtaal(4), dichtheid(5),
//       tempo(6), openheid(7), houdbaarheid(8), vrijheid(9)

const STATEMENTS = [
  {
    text: {
      nl: 'Ik word vooral geraakt als kunst iets zegt over maatschappij, macht of geschiedenis.',
      en: 'I am most moved when art says something about society, power, or history.'
    },
    mappings: [{ axis: 'engagement', direction: 1, weight: 1.0 }]
  },
  {
    text: {
      nl: 'Ik zoek liever poëzie en ambiguïteit dan een duidelijke boodschap.',
      en: 'I prefer poetry and ambiguity over a clear message.'
    },
    mappings: [
      { axis: 'engagement', direction: -1, weight: 0.6 },
      { axis: 'openheid', direction: 1, weight: 0.4 }
    ]
  },
  {
    text: {
      nl: 'Ik vind het belangrijk dat een werk ook zonder actuele context blijft werken.',
      en: 'I think it\'s important that a work still holds up without current context.'
    },
    mappings: [{ axis: 'houdbaarheid', direction: 1, weight: 1.0 }]
  },
  {
    text: {
      nl: 'Kunst mag politiek zijn, maar moet ook formeel en poëtisch overeind blijven.',
      en: 'Art can be political, but must also stand on its formal and poetic merits.'
    },
    mappings: [
      { axis: 'vrijheid', direction: 1, weight: 0.7 },
      { axis: 'engagement', direction: 0, weight: 0.3 }
    ]
  },
  {
    text: {
      nl: 'Ik vind het goed als kunst een beetje schuurt of ongemakkelijk maakt.',
      en: 'I appreciate it when art is a little uncomfortable or abrasive.'
    },
    mappings: [{ axis: 'toon', direction: 1, weight: 1.0 }]
  },
  {
    text: {
      nl: 'Ik wil dat kunst in huis vooral rust, warmte of troost geeft.',
      en: 'I want art at home to mainly provide calm, warmth, or comfort.'
    },
    mappings: [{ axis: 'toon', direction: -1, weight: 1.0 }]
  },
  {
    text: {
      nl: 'Een sterk idee of concept is voor mij belangrijker dan puur \'mooi\'.',
      en: 'A strong idea or concept matters more to me than pure beauty.'
    },
    mappings: [{ axis: 'modus', direction: 1, weight: 1.0 }]
  },
  {
    text: {
      nl: 'Materiaal, handwerk en textuur maken voor mij het verschil.',
      en: 'Material, craftsmanship, and texture make the difference for me.'
    },
    mappings: [{ axis: 'modus', direction: -1, weight: 1.0 }]
  },
  {
    text: {
      nl: 'Ik haak af als ik eerst veel uitleg nodig heb om het te \'snappen\'.',
      en: 'I lose interest if I need a lot of explanation to "get it".'
    },
    mappings: [{ axis: 'tempo', direction: 1, weight: 1.0 }]
  },
  {
    text: {
      nl: 'Mijn favoriete werken worden beter naarmate je er langer naar kijkt.',
      en: 'My favourite works get better the longer you look at them.'
    },
    mappings: [{ axis: 'tempo', direction: -1, weight: 1.0 }]
  },
  {
    text: {
      nl: 'Goede kunst is voor mij ambigu: niet één duidelijke betekenis.',
      en: 'Good art is ambiguous to me: not one clear meaning.'
    },
    mappings: [{ axis: 'openheid', direction: 1, weight: 1.0 }]
  },
  {
    text: {
      nl: 'Ik word vaak het snelst geraakt door mensen, lichamen of herkenbare scènes.',
      en: 'I\'m most quickly moved by people, bodies, or recognisable scenes.'
    },
    mappings: [{ axis: 'beeldtaal', direction: 1, weight: 1.0 }]
  },
  {
    text: {
      nl: 'Ik hou van abstractie: structuur, ritme, vorm, patroon.',
      en: 'I love abstraction: structure, rhythm, form, pattern.'
    },
    mappings: [{ axis: 'beeldtaal', direction: -1, weight: 1.0 }]
  },
  {
    text: {
      nl: 'Ik hou van helder en spaarzaam: liever minder elementen.',
      en: 'I prefer clear and sparse: fewer elements.'
    },
    mappings: [{ axis: 'dichtheid', direction: 1, weight: 1.0 }]
  },
  {
    text: {
      nl: 'Ik hou van gelaagd of \'druk\': veel te ontdekken in het beeld.',
      en: 'I love layered or "busy": lots to discover in the image.'
    },
    mappings: [{ axis: 'dichtheid', direction: -1, weight: 1.0 }]
  },
  {
    text: {
      nl: 'Ik kan een werk \'goed\' of \'sterk\' vinden zonder het mooi te vinden.',
      en: 'I can find a work "good" or "strong" without finding it beautiful.'
    },
    mappings: [
      { axis: 'vrijheid', direction: 1, weight: 0.7 },
      { axis: 'openheid', direction: 1, weight: 0.3 }
    ]
  }
];

// ── 10 A/B Pairs ──
// Each pair has two visual options (CSS-generated placeholders).
// Choosing A pushes the target axis/tag in one direction, B the other.
// "both" and "neither" = no change.

const AB_PAIRS = [
  {
    id: 'ab1',
    optionA: {
      label: { nl: 'Geometrie', en: 'Geometry' },
      css: 'placeholder-geometric'
    },
    optionB: {
      label: { nl: 'Expressief', en: 'Expressive' },
      css: 'placeholder-expressive'
    },
    target: { type: 'axis', axis: 'dichtheid', aDirection: 1, bDirection: -1, weight: 1.5 }
  },
  {
    id: 'ab2',
    optionA: {
      label: { nl: 'Figuur', en: 'Figure' },
      css: 'placeholder-figure'
    },
    optionB: {
      label: { nl: 'Abstract', en: 'Abstract' },
      css: 'placeholder-abstract'
    },
    target: { type: 'axis', axis: 'beeldtaal', aDirection: 1, bDirection: -1, weight: 1.5 }
  },
  {
    id: 'ab3',
    optionA: {
      label: { nl: 'Tekst / Taal', en: 'Text / Language' },
      css: 'placeholder-text'
    },
    optionB: {
      label: { nl: 'Zintuiglijk', en: 'Sensory' },
      css: 'placeholder-sensory'
    },
    target: { type: 'axis', axis: 'modus', aDirection: 1, bDirection: -1, weight: 1.5 }
  },
  {
    id: 'ab4',
    optionA: {
      label: { nl: 'Rust', en: 'Calm' },
      css: 'placeholder-calm'
    },
    optionB: {
      label: { nl: 'Collage', en: 'Collage' },
      css: 'placeholder-collage'
    },
    target: { type: 'axis', axis: 'dichtheid', aDirection: 1, bDirection: -1, weight: 1.0 }
  },
  {
    id: 'ab5',
    optionA: {
      label: { nl: 'Direct emotioneel', en: 'Directly emotional' },
      css: 'placeholder-emotional'
    },
    optionB: {
      label: { nl: 'Analytisch', en: 'Analytical' },
      css: 'placeholder-analytical'
    },
    target: { type: 'axis', axis: 'tempo', aDirection: 1, bDirection: -1, weight: 1.5 }
  },
  {
    id: 'ab6',
    optionA: {
      label: { nl: 'Sociaal / Documentair', en: 'Social / Documentary' },
      css: 'placeholder-documentary'
    },
    optionB: {
      label: { nl: 'Droom / Poëzie', en: 'Dream / Poetry' },
      css: 'placeholder-dreamy'
    },
    target: { type: 'axis', axis: 'engagement', aDirection: 1, bDirection: -1, weight: 1.5 }
  },
  {
    id: 'ab7',
    optionA: {
      label: { nl: 'Confronterend', en: 'Confronting' },
      css: 'placeholder-confronting'
    },
    optionB: {
      label: { nl: 'Troostend', en: 'Comforting' },
      css: 'placeholder-comforting'
    },
    target: { type: 'axis', axis: 'toon', aDirection: 1, bDirection: -1, weight: 1.5 }
  },
  {
    id: 'ab8',
    optionA: {
      label: { nl: 'Monochroom', en: 'Monochrome' },
      css: 'placeholder-monochrome'
    },
    optionB: {
      label: { nl: 'Kleurrijk', en: 'Colourful' },
      css: 'placeholder-colourful'
    },
    target: { type: 'tag', tag: 'kleur', aValue: 'mono', bValue: 'kleur' }
  },
  {
    id: 'ab9',
    optionA: {
      label: { nl: 'Ironie', en: 'Irony' },
      css: 'placeholder-ironic'
    },
    optionB: {
      label: { nl: 'Plechtig', en: 'Solemn' },
      css: 'placeholder-solemn'
    },
    target: { type: 'tag', tag: 'toon', aValue: 'ironie', bValue: 'plechtig' }
  },
  {
    id: 'ab10',
    optionA: {
      label: { nl: 'Fotografie', en: 'Photography' },
      css: 'placeholder-photo'
    },
    optionB: {
      label: { nl: 'Schilder / Tekening', en: 'Painting / Drawing' },
      css: 'placeholder-painting'
    },
    target: { type: 'tag', tag: 'medium', aValue: 'foto', bValue: 'schilder' }
  }
];

// ── Bridge Domains + Keywords ──

const BRIDGE_DOMAINS = [
  {
    id: 'music',
    nameKey: 'domainMusic',
    icon: '♪',
    keywords: ['kwMelancholy', 'kwRhythm', 'kwSilence', 'kwChaos', 'kwEmotion', 'kwMinimalism']
  },
  {
    id: 'architecture',
    nameKey: 'domainArchitecture',
    icon: '⌂',
    keywords: ['kwPrecision', 'kwMinimalism', 'kwTexture', 'kwContrast', 'kwDiscipline', 'kwComplexity']
  },
  {
    id: 'philosophy',
    nameKey: 'domainPhilosophy',
    icon: '◎',
    keywords: ['kwComplexity', 'kwSilence', 'kwIrony', 'kwPower', 'kwIntimacy', 'kwChaos']
  },
  {
    id: 'science',
    nameKey: 'domainScience',
    icon: '◇',
    keywords: ['kwPrecision', 'kwComplexity', 'kwContrast', 'kwStrategy', 'kwRhythm', 'kwDiscipline']
  },
  {
    id: 'chess',
    nameKey: 'domainChess',
    icon: '♟',
    keywords: ['kwStrategy', 'kwDiscipline', 'kwSilence', 'kwContrast', 'kwPrecision', 'kwPower']
  },
  {
    id: 'fashion',
    nameKey: 'domainFashion',
    icon: '✦',
    keywords: ['kwTexture', 'kwContrast', 'kwMinimalism', 'kwIrony', 'kwRhythm', 'kwIntimacy']
  },
  {
    id: 'nature',
    nameKey: 'domainNature',
    icon: '❋',
    keywords: ['kwSilence', 'kwRhythm', 'kwTexture', 'kwMelancholy', 'kwChaos', 'kwIntimacy']
  },
  {
    id: 'literature',
    nameKey: 'domainLiterature',
    icon: '¶',
    keywords: ['kwNarrative', 'kwMelancholy', 'kwIrony', 'kwIntimacy', 'kwComplexity', 'kwEmotion']
  },
  {
    id: 'film',
    nameKey: 'domainFilm',
    icon: '▶',
    keywords: ['kwNarrative', 'kwEmotion', 'kwContrast', 'kwRhythm', 'kwHumor', 'kwPower']
  },
  {
    id: 'sports',
    nameKey: 'domainSports',
    icon: '◈',
    keywords: ['kwDiscipline', 'kwRhythm', 'kwPower', 'kwStrategy', 'kwEmotion', 'kwContrast']
  },
  {
    id: 'tech',
    nameKey: 'domainTech',
    icon: '⬡',
    keywords: ['kwPrecision', 'kwComplexity', 'kwMinimalism', 'kwStrategy', 'kwChaos', 'kwRitual']
  },
  {
    id: 'food',
    nameKey: 'domainFood',
    icon: '◐',
    keywords: ['kwTexture', 'kwRitual', 'kwIntimacy', 'kwHumor', 'kwPrecision', 'kwEmotion']
  }
];

// Bridge keyword → art-relevant tags for matching
const BRIDGE_KEYWORD_TAGS = {
  kwMelancholy:  ['emotioneel-diep', 'langzaam', 'troostend-poëtisch'],
  kwDiscipline:  ['gestructureerd', 'minimaal', 'precisie'],
  kwHumor:       ['ironisch', 'licht', 'speels'],
  kwStrategy:    ['gelaagd', 'conceptueel', 'analytisch'],
  kwRitual:      ['langzaam', 'materieel', 'symbolisch'],
  kwChaos:       ['expressief', 'gelaagd', 'confronterend'],
  kwSilence:     ['minimaal', 'contemplatief', 'ruimte'],
  kwRhythm:      ['patroon', 'herhaling', 'beweging'],
  kwPrecision:   ['minimaal', 'gestructureerd', 'technisch'],
  kwEmotion:     ['emotioneel-diep', 'figuratief', 'direct'],
  kwNarrative:   ['verhalend', 'figuratief', 'gelaagd'],
  kwTexture:     ['materieel', 'zintuiglijk', 'handwerk'],
  kwContrast:    ['spanning', 'confronterend', 'dynamisch'],
  kwMinimalism:  ['minimaal', 'ruimte', 'helder'],
  kwComplexity:  ['gelaagd', 'conceptueel', 'meerlagig'],
  kwIrony:       ['ironisch', 'conceptueel', 'dubbelzinnig'],
  kwIntimacy:    ['intiem', 'persoonlijk', 'kwetsbaar'],
  kwPower:       ['krachtig', 'confronterend', 'monumentaal']
};
