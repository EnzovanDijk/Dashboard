// ============================================================
// catalog.js — Dummy art catalog (~30 works with axis scores)
// ============================================================
// Each work has scores on all 9 axes (-10 to +10), tags, and bridge keywords.
// Replace with real data later.

const ART_CATALOG = [
  // ── 1–5: Maatschappelijk / Confronterend ──
  {
    id: 'w01',
    title: { nl: 'Stille Getuige', en: 'Silent Witness' },
    artist: 'Anna de Vries',
    year: 2023,
    medium: 'mixed-media',
    dimensions: '80×60 cm',
    priceRange: '1000-5000',
    edition: 'uniek',
    placeholder: 'dark-figure',
    axes: { engagement: 7, toon: 4, modus: -2, beeldtaal: 6, dichtheid: -1, tempo: -5, openheid: 7, houdbaarheid: 8, vrijheid: 6 },
    tags: ['kleur:mono', 'toon:plechtig', 'medium:schilder'],
    bridges: ['melancholie', 'ritueel', 'stilte'],
    description: {
      nl: { why: 'Combineert maatschappelijk bewustzijn met poëtische ambiguïteit. Sterk figuratief maar met ruimte voor eigen interpretatie.', tip: 'Kijk eerst naar het silhouet, dan naar wat er ontbreekt.' },
      en: { why: 'Combines social awareness with poetic ambiguity. Strongly figurative yet leaves room for interpretation.', tip: 'Look at the silhouette first, then at what\'s missing.' }
    }
  },
  {
    id: 'w02',
    title: { nl: 'Grensgebied', en: 'Border Zone' },
    artist: 'Kwame Asante',
    year: 2022,
    medium: 'fotografie',
    dimensions: '120×80 cm',
    priceRange: '1000-5000',
    edition: 'kleine-oplage',
    placeholder: 'documentary-grid',
    axes: { engagement: 9, toon: 6, modus: 2, beeldtaal: 8, dichtheid: -4, tempo: 3, openheid: 4, houdbaarheid: 5, vrijheid: 3 },
    tags: ['kleur:kleur', 'toon:plechtig', 'medium:foto'],
    bridges: ['kracht', 'contrast', 'verhaal'],
    description: {
      nl: { why: 'Documentaire fotografie die politiek en poëtisch tegelijk is. De gelaagdheid ontvouwt zich bij langer kijken.', tip: 'Let op de blikrichting van de personen — en waar ze níet naar kijken.' },
      en: { why: 'Documentary photography that is both political and poetic. Layers unfold with extended viewing.', tip: 'Notice where the subjects look — and what they don\'t look at.' }
    }
  },
  {
    id: 'w03',
    title: { nl: 'Schreeuw in Rood', en: 'Scream in Red' },
    artist: 'Lena Bauer',
    year: 2024,
    medium: 'schilderij',
    dimensions: '150×120 cm',
    priceRange: '5000+',
    edition: 'uniek',
    placeholder: 'expressive-red',
    axes: { engagement: 3, toon: 8, modus: -5, beeldtaal: 3, dichtheid: -7, tempo: 8, openheid: 2, houdbaarheid: 6, vrijheid: 5 },
    tags: ['kleur:kleur', 'toon:plechtig', 'medium:schilder'],
    bridges: ['emotie', 'chaos', 'kracht'],
    description: {
      nl: { why: 'Puur expressieve kracht — dit werk grijpt je direct bij de keel. Materieel en zintuiglijk intens.', tip: 'Sta er minstens 2 meter van af. Laat het op je inwerken als kleur en energie, niet als afbeelding.' },
      en: { why: 'Pure expressive power — this work grabs you immediately. Materially and sensorially intense.', tip: 'Stand at least 2 metres away. Let it work on you as colour and energy, not as an image.' }
    }
  },
  {
    id: 'w04',
    title: { nl: 'Protocol #7', en: 'Protocol #7' },
    artist: 'Daan Hofstra',
    year: 2023,
    medium: 'mixed-media',
    dimensions: '60×60 cm',
    priceRange: '250-1000',
    edition: 'uniek',
    placeholder: 'conceptual-grid',
    axes: { engagement: 6, toon: 5, modus: 8, beeldtaal: -3, dichtheid: 4, tempo: -3, openheid: 6, houdbaarheid: 4, vrijheid: 7 },
    tags: ['kleur:mono', 'toon:ironie', 'medium:schilder'],
    bridges: ['strategie', 'ironie', 'complexiteit'],
    description: {
      nl: { why: 'Conceptueel sterk met een ondertoon van maatschappijkritiek. De ironie zit in de details.', tip: 'Lees alle tekstelementen — de betekenis zit in de tegenstelling.' },
      en: { why: 'Conceptually strong with an undercurrent of social critique. The irony is in the details.', tip: 'Read all text elements — the meaning lies in the contradictions.' }
    }
  },
  {
    id: 'w05',
    title: { nl: 'Wat Overblijft', en: 'What Remains' },
    artist: 'Sara Lindqvist',
    year: 2021,
    medium: 'mixed-media',
    dimensions: '90×70 cm',
    priceRange: '1000-5000',
    edition: 'uniek',
    placeholder: 'layered-dark',
    axes: { engagement: 5, toon: 3, modus: -1, beeldtaal: 4, dichtheid: -5, tempo: -7, openheid: 8, houdbaarheid: 9, vrijheid: 8 },
    tags: ['kleur:kleur', 'toon:plechtig', 'medium:schilder'],
    bridges: ['melancholie', 'stilte', 'textuur'],
    description: {
      nl: { why: 'Een langzaam werk dat rijker wordt naarmate je langer kijkt. Ambigue en tijdloos — groeit met je mee.', tip: 'Bekijk het op verschillende momenten van de dag. Het licht verandert het werk.' },
      en: { why: 'A slow work that grows richer the longer you look. Ambiguous and timeless — it grows with you.', tip: 'View it at different times of day. Light changes the work.' }
    }
  },

  // ── 6–10: Troostend / Poëtisch ──
  {
    id: 'w06',
    title: { nl: 'Ochtendlicht', en: 'Morning Light' },
    artist: 'Maren Visser',
    year: 2023,
    medium: 'schilderij',
    dimensions: '70×50 cm',
    priceRange: '250-1000',
    edition: 'uniek',
    placeholder: 'warm-abstract',
    axes: { engagement: -6, toon: -7, modus: -6, beeldtaal: -3, dichtheid: 5, tempo: 2, openheid: -2, houdbaarheid: 6, vrijheid: 3 },
    tags: ['kleur:kleur', 'toon:plechtig', 'medium:schilder'],
    bridges: ['stilte', 'intimiteit', 'textuur'],
    description: {
      nl: { why: 'Warm, troostend en zintuiglijk. Geeft precies die rust die je thuis wilt voelen.', tip: 'Hang het waar ochtendlicht binnenvalt — het gesprek tussen verf en daglicht is het werk.' },
      en: { why: 'Warm, comforting, and sensory. Provides exactly the calm you want to feel at home.', tip: 'Hang it where morning light enters — the conversation between paint and daylight is the work.' }
    }
  },
  {
    id: 'w07',
    title: { nl: 'Ademruimte', en: 'Breathing Room' },
    artist: 'Pieter Mol',
    year: 2022,
    medium: 'tekening',
    dimensions: '50×40 cm',
    priceRange: '0-250',
    edition: 'uniek',
    placeholder: 'minimal-line',
    axes: { engagement: -4, toon: -5, modus: -3, beeldtaal: -2, dichtheid: 8, tempo: 1, openheid: 1, houdbaarheid: 7, vrijheid: 5 },
    tags: ['kleur:mono', 'toon:plechtig', 'medium:schilder'],
    bridges: ['stilte', 'minimalisme', 'precisie'],
    description: {
      nl: { why: 'Minimalistisch en helder. Elke lijn is doelbewust — niets teveel. Geeft rust in elke ruimte.', tip: 'Let op de verhouding tussen lijn en lege ruimte. De stilte ís het werk.' },
      en: { why: 'Minimalist and clear. Every line is deliberate — nothing superfluous. Brings calm to any space.', tip: 'Notice the ratio of line to empty space. The silence is the work.' }
    }
  },
  {
    id: 'w08',
    title: { nl: 'Tuin der Gedachten', en: 'Garden of Thoughts' },
    artist: 'Yuki Tanaka',
    year: 2023,
    medium: 'print',
    dimensions: '60×45 cm',
    priceRange: '0-250',
    edition: 'open',
    placeholder: 'botanical-soft',
    axes: { engagement: -5, toon: -6, modus: -4, beeldtaal: 5, dichtheid: -3, tempo: -2, openheid: 3, houdbaarheid: 5, vrijheid: 2 },
    tags: ['kleur:kleur', 'toon:plechtig', 'medium:schilder'],
    bridges: ['ritme', 'intimiteit', 'textuur'],
    description: {
      nl: { why: 'Organisch, warm en uitnodigend. Figuratief genoeg om herkenbaar te zijn, vrij genoeg om te dromen.', tip: 'Volg de plantvormen als een visueel pad — er zit een verborgen ritme in.' },
      en: { why: 'Organic, warm, and inviting. Figurative enough to recognise, free enough to dream.', tip: 'Follow the plant forms as a visual path — there\'s a hidden rhythm.' }
    }
  },
  {
    id: 'w09',
    title: { nl: 'Horizon #3', en: 'Horizon #3' },
    artist: 'Lars Eriksen',
    year: 2024,
    medium: 'schilderij',
    dimensions: '100×40 cm',
    priceRange: '250-1000',
    edition: 'uniek',
    placeholder: 'horizon-calm',
    axes: { engagement: -7, toon: -8, modus: -5, beeldtaal: -5, dichtheid: 7, tempo: -1, openheid: 0, houdbaarheid: 8, vrijheid: 4 },
    tags: ['kleur:kleur', 'toon:plechtig', 'medium:schilder'],
    bridges: ['stilte', 'minimalisme', 'melancholie'],
    description: {
      nl: { why: 'Bijna abstract landschap dat diep troost biedt. Tijdloos, sereen, en oneindig rustgevend.', tip: 'Laat je ogen langs de horizon dwalen zonder te focussen. Het werk ademt vanzelf.' },
      en: { why: 'Near-abstract landscape offering deep comfort. Timeless, serene, and infinitely calming.', tip: 'Let your eyes wander along the horizon without focusing. The work breathes on its own.' }
    }
  },
  {
    id: 'w10',
    title: { nl: 'Zacht Geweld', en: 'Gentle Violence' },
    artist: 'Rosa Fernandez',
    year: 2022,
    medium: 'mixed-media',
    dimensions: '85×65 cm',
    priceRange: '1000-5000',
    edition: 'uniek',
    placeholder: 'tension-soft',
    axes: { engagement: 1, toon: 1, modus: -2, beeldtaal: 2, dichtheid: -2, tempo: -4, openheid: 6, houdbaarheid: 7, vrijheid: 6 },
    tags: ['kleur:kleur', 'toon:plechtig', 'medium:schilder'],
    bridges: ['contrast', 'intimiteit', 'textuur'],
    description: {
      nl: { why: 'Precies op het snijvlak van troost en spanning. Een werk dat nooit verveelt omdat het steeds iets anders laat zien.', tip: 'Kijk eerst naar het geheel, dan naar de randen — daar zit de spanning.' },
      en: { why: 'Right at the intersection of comfort and tension. A work that never bores because it keeps revealing something new.', tip: 'Look at the whole first, then at the edges — that\'s where the tension lives.' }
    }
  },

  // ── 11–15: Conceptueel / Abstract ──
  {
    id: 'w11',
    title: { nl: 'Systeem 44', en: 'System 44' },
    artist: 'Thomas Brink',
    year: 2024,
    medium: 'print',
    dimensions: '70×70 cm',
    priceRange: '250-1000',
    edition: 'kleine-oplage',
    placeholder: 'systematic-grid',
    axes: { engagement: 2, toon: 1, modus: 9, beeldtaal: -8, dichtheid: 6, tempo: -4, openheid: 5, houdbaarheid: 6, vrijheid: 8 },
    tags: ['kleur:mono', 'toon:ironie', 'medium:schilder'],
    bridges: ['precisie', 'strategie', 'minimalisme'],
    description: {
      nl: { why: 'Puur conceptueel en abstract. Het systeem ís het werk. Voor wie het denken boven het voelen stelt.', tip: 'Zoek de regels van het systeem — en dan de plek waar het systeem breekt.' },
      en: { why: 'Purely conceptual and abstract. The system is the work. For those who value thinking over feeling.', tip: 'Find the rules of the system — then the place where the system breaks.' }
    }
  },
  {
    id: 'w12',
    title: { nl: 'Ongezien Alfabet', en: 'Unseen Alphabet' },
    artist: 'Noor El-Amin',
    year: 2023,
    medium: 'mixed-media',
    dimensions: '45×35 cm',
    priceRange: '250-1000',
    edition: 'uniek',
    placeholder: 'text-pattern',
    axes: { engagement: 4, toon: 2, modus: 7, beeldtaal: -2, dichtheid: -3, tempo: -6, openheid: 9, houdbaarheid: 7, vrijheid: 9 },
    tags: ['kleur:mono', 'toon:plechtig', 'medium:schilder'],
    bridges: ['complexiteit', 'ritueel', 'stilte'],
    description: {
      nl: { why: 'Taal als visueel materiaal — conceptueel maar zintuiglijk rijk. Ambigu en autonoom: weigert simpele lezing.', tip: 'Probeer niet te "lezen". Kijk naar de tekens als vormen, niet als letters.' },
      en: { why: 'Language as visual material — conceptual yet sensorially rich. Ambiguous and autonomous: resists simple reading.', tip: 'Don\'t try to "read" it. Look at the signs as shapes, not letters.' }
    }
  },
  {
    id: 'w13',
    title: { nl: 'Frequentie', en: 'Frequency' },
    artist: 'Julian Voss',
    year: 2024,
    medium: 'schilderij',
    dimensions: '100×100 cm',
    priceRange: '1000-5000',
    edition: 'uniek',
    placeholder: 'rhythm-abstract',
    axes: { engagement: -3, toon: -1, modus: -3, beeldtaal: -9, dichtheid: 3, tempo: -3, openheid: 4, houdbaarheid: 7, vrijheid: 7 },
    tags: ['kleur:kleur', 'toon:plechtig', 'medium:schilder'],
    bridges: ['ritme', 'minimalisme', 'precisie'],
    description: {
      nl: { why: 'Abstractie als muziek: ritme, herhaling, variatie. Puur visueel genot voor wie van patronen houdt.', tip: 'Ogen half dichtknijpen — het ritme wordt dan voelbaar als een trilling.' },
      en: { why: 'Abstraction as music: rhythm, repetition, variation. Pure visual pleasure for pattern lovers.', tip: 'Squint your eyes — the rhythm becomes palpable like a vibration.' }
    }
  },
  {
    id: 'w14',
    title: { nl: 'De Lege Stoel', en: 'The Empty Chair' },
    artist: 'Claire Dupont',
    year: 2021,
    medium: 'fotografie',
    dimensions: '50×50 cm',
    priceRange: '250-1000',
    edition: 'kleine-oplage',
    placeholder: 'minimal-photo',
    axes: { engagement: 2, toon: -2, modus: 4, beeldtaal: 7, dichtheid: 8, tempo: -2, openheid: 7, houdbaarheid: 8, vrijheid: 7 },
    tags: ['kleur:mono', 'toon:plechtig', 'medium:foto'],
    bridges: ['stilte', 'melancholie', 'verhaal'],
    description: {
      nl: { why: 'Eén beeld, oneindig verhaal. Figuratief maar conceptueel geladen. De afwezigheid ís de aanwezigheid.', tip: 'Stel je voor wie er net is opgestaan. Het verhaal begint buiten het kader.' },
      en: { why: 'One image, infinite story. Figurative yet conceptually charged. Absence is the presence.', tip: 'Imagine who just stood up. The story starts outside the frame.' }
    }
  },
  {
    id: 'w15',
    title: { nl: 'Ander Licht', en: 'Other Light' },
    artist: 'Ingrid Holm',
    year: 2023,
    medium: 'schilderij',
    dimensions: '90×90 cm',
    priceRange: '1000-5000',
    edition: 'uniek',
    placeholder: 'color-field',
    axes: { engagement: -6, toon: -3, modus: -7, beeldtaal: -7, dichtheid: 5, tempo: -5, openheid: 3, houdbaarheid: 7, vrijheid: 5 },
    tags: ['kleur:kleur', 'toon:plechtig', 'medium:schilder'],
    bridges: ['emotie', 'stilte', 'textuur'],
    description: {
      nl: { why: 'Kleurveld-schilderij dat puur zintuiglijk werkt. Geen verhaal, geen boodschap — alleen licht en kleur en gevoel.', tip: 'Ga heel dichtbij staan en dan weer ver weg. Het werk verandert compleet met afstand.' },
      en: { why: 'Colour-field painting that works purely through the senses. No story, no message — just light, colour, and feeling.', tip: 'Stand very close, then far away. The work changes completely with distance.' }
    }
  },

  // ── 16–20: Figuratief / Direct ──
  {
    id: 'w16',
    title: { nl: 'Portret van Niemand', en: 'Portrait of Nobody' },
    artist: 'Marco Ricci',
    year: 2023,
    medium: 'schilderij',
    dimensions: '60×80 cm',
    priceRange: '1000-5000',
    edition: 'uniek',
    placeholder: 'portrait-blur',
    axes: { engagement: 1, toon: 2, modus: -1, beeldtaal: 7, dichtheid: 2, tempo: 1, openheid: 5, houdbaarheid: 6, vrijheid: 5 },
    tags: ['kleur:kleur', 'toon:plechtig', 'medium:schilder'],
    bridges: ['emotie', 'intimiteit', 'melancholie'],
    description: {
      nl: { why: 'Figuratief portret dat herkenning oproept zonder iemand specifiek af te beelden. Universeel en persoonlijk tegelijk.', tip: 'Kijk het gezicht in de ogen — ook al zijn ze vaag, er ís contact.' },
      en: { why: 'Figurative portrait that evokes recognition without depicting anyone specific. Universal and personal at once.', tip: 'Look the face in the eyes — even if they\'re vague, there is contact.' }
    }
  },
  {
    id: 'w17',
    title: { nl: 'Straatscène #12', en: 'Street Scene #12' },
    artist: 'Carmen Diaz',
    year: 2024,
    medium: 'fotografie',
    dimensions: '80×55 cm',
    priceRange: '250-1000',
    edition: 'kleine-oplage',
    placeholder: 'street-dynamic',
    axes: { engagement: 5, toon: 1, modus: 0, beeldtaal: 9, dichtheid: -4, tempo: 7, openheid: 2, houdbaarheid: 3, vrijheid: 2 },
    tags: ['kleur:kleur', 'toon:ironie', 'medium:foto'],
    bridges: ['verhaal', 'contrast', 'ritme'],
    description: {
      nl: { why: 'Direct, levendig, vol energie. Straatfotografie die een heel verhaal vertelt in één beeld.', tip: 'Begin bij het opvallendste figuur en ontdek dan laag voor laag de rest van de scène.' },
      en: { why: 'Direct, lively, full of energy. Street photography telling a whole story in one frame.', tip: 'Start at the most prominent figure and discover the rest of the scene layer by layer.' }
    }
  },
  {
    id: 'w18',
    title: { nl: 'Lichaam in Rust', en: 'Body at Rest' },
    artist: 'Elise Johansson',
    year: 2022,
    medium: 'tekening',
    dimensions: '45×60 cm',
    priceRange: '250-1000',
    edition: 'uniek',
    placeholder: 'figure-drawing',
    axes: { engagement: -2, toon: -4, modus: -5, beeldtaal: 8, dichtheid: 4, tempo: 0, openheid: 1, houdbaarheid: 7, vrijheid: 4 },
    tags: ['kleur:mono', 'toon:plechtig', 'medium:schilder'],
    bridges: ['intimiteit', 'stilte', 'textuur'],
    description: {
      nl: { why: 'Klassiek vakmanschap in een hedendaagse tekening. Figuratief, eerlijk, en troostend door zijn eenvoud.', tip: 'Volg de lijn zonder te stoppen — de hand van de kunstenaar wordt zichtbaar in het gebaar.' },
      en: { why: 'Classic craftsmanship in a contemporary drawing. Figurative, honest, and comforting in its simplicity.', tip: 'Follow the line without stopping — the artist\'s hand becomes visible in the gesture.' }
    }
  },
  {
    id: 'w19',
    title: { nl: 'Wachtend Glas', en: 'Waiting Glass' },
    artist: 'Hiro Nakamura',
    year: 2024,
    medium: 'fotografie',
    dimensions: '40×40 cm',
    priceRange: '0-250',
    edition: 'open',
    placeholder: 'still-life-minimal',
    axes: { engagement: -3, toon: -3, modus: 1, beeldtaal: 8, dichtheid: 9, tempo: -1, openheid: 4, houdbaarheid: 6, vrijheid: 5 },
    tags: ['kleur:mono', 'toon:plechtig', 'medium:foto'],
    bridges: ['stilte', 'precisie', 'minimalisme'],
    description: {
      nl: { why: 'Stilleven-fotografie die het alledaagse verheft. Minimaal, figuratief, en meditatief.', tip: 'Kijk naar de lichtval op het glas — het licht is het eigenlijke onderwerp.' },
      en: { why: 'Still life photography that elevates the everyday. Minimal, figurative, and meditative.', tip: 'Look at how light falls on the glass — light is the real subject.' }
    }
  },
  {
    id: 'w20',
    title: { nl: 'Dans in Drie Delen', en: 'Dance in Three Parts' },
    artist: 'Aisha Okafor',
    year: 2023,
    medium: 'print',
    dimensions: '3× 30×40 cm',
    priceRange: '250-1000',
    edition: 'kleine-oplage',
    placeholder: 'triptych-movement',
    axes: { engagement: -1, toon: -2, modus: -3, beeldtaal: 6, dichtheid: 1, tempo: 5, openheid: 1, houdbaarheid: 5, vrijheid: 3 },
    tags: ['kleur:kleur', 'toon:plechtig', 'medium:schilder'],
    bridges: ['ritme', 'emotie', 'beweging'],
    description: {
      nl: { why: 'Drieluik dat beweging vangt in stilstand. Figuratief, energiek, en direct toegankelijk.', tip: 'Lees het als een strip: van links naar rechts ontvouwt zich het gebaar.' },
      en: { why: 'Triptych that captures movement in stillness. Figurative, energetic, and immediately accessible.', tip: 'Read it like a comic: from left to right the gesture unfolds.' }
    }
  },

  // ── 21–25: Gelaagd / Ironisch / Zeitgeist ──
  {
    id: 'w21',
    title: { nl: 'Scroll I', en: 'Scroll I' },
    artist: 'Bram van Dijk',
    year: 2024,
    medium: 'mixed-media',
    dimensions: '100×70 cm',
    priceRange: '1000-5000',
    edition: 'uniek',
    placeholder: 'digital-collage',
    axes: { engagement: 7, toon: 4, modus: 6, beeldtaal: 2, dichtheid: -8, tempo: 5, openheid: 3, houdbaarheid: -3, vrijheid: 2 },
    tags: ['kleur:kleur', 'toon:ironie', 'medium:schilder'],
    bridges: ['ironie', 'complexiteit', 'chaos'],
    description: {
      nl: { why: 'Actueel, gelaagd en ironisch. Reflecteert de beeldcultuur van nu. Druk maar doelbewust.', tip: 'Zoom mentaal in op de details — elk fragment is een micro-commentaar.' },
      en: { why: 'Current, layered, and ironic. Reflects today\'s image culture. Busy but deliberate.', tip: 'Mentally zoom into the details — each fragment is a micro-commentary.' }
    }
  },
  {
    id: 'w22',
    title: { nl: 'Lachend Verzet', en: 'Laughing Resistance' },
    artist: 'Felix Krüger',
    year: 2023,
    medium: 'print',
    dimensions: '50×70 cm',
    priceRange: '0-250',
    edition: 'open',
    placeholder: 'pop-text',
    axes: { engagement: 6, toon: 5, modus: 7, beeldtaal: 3, dichtheid: -2, tempo: 8, openheid: -2, houdbaarheid: -2, vrijheid: 3 },
    tags: ['kleur:kleur', 'toon:ironie', 'medium:schilder'],
    bridges: ['humor', 'ironie', 'kracht'],
    description: {
      nl: { why: 'Activistisch maar met humor. Direct leesbaar, conceptueel scherp. Een poster die kunst is.', tip: 'Lees de tekst hardop — het ritme van de woorden is onderdeel van het werk.' },
      en: { why: 'Activist but with humour. Immediately readable, conceptually sharp. A poster that is art.', tip: 'Read the text aloud — the rhythm of the words is part of the work.' }
    }
  },
  {
    id: 'w23',
    title: { nl: 'Spiegelzaal', en: 'Hall of Mirrors' },
    artist: 'Nina Petrova',
    year: 2022,
    medium: 'fotografie',
    dimensions: '75×100 cm',
    priceRange: '1000-5000',
    edition: 'kleine-oplage',
    placeholder: 'mirror-recursive',
    axes: { engagement: 3, toon: 2, modus: 5, beeldtaal: 5, dichtheid: -6, tempo: -5, openheid: 8, houdbaarheid: 6, vrijheid: 7 },
    tags: ['kleur:kleur', 'toon:ironie', 'medium:foto'],
    bridges: ['complexiteit', 'strategie', 'contrast'],
    description: {
      nl: { why: 'Conceptuele fotografie die zichzelf spiegelt. Figuratief maar met een conceptuele twist die steeds dieper gaat.', tip: 'Tel de lagen van reflectie. Elke laag voegt een nieuwe lezing toe.' },
      en: { why: 'Conceptual photography that mirrors itself. Figurative but with a conceptual twist that goes ever deeper.', tip: 'Count the layers of reflection. Each layer adds a new reading.' }
    }
  },
  {
    id: 'w24',
    title: { nl: 'Vandaag Vergeten', en: 'Forgotten Today' },
    artist: 'Omar Hassan',
    year: 2024,
    medium: 'mixed-media',
    dimensions: '60×80 cm',
    priceRange: '250-1000',
    edition: 'uniek',
    placeholder: 'collage-news',
    axes: { engagement: 8, toon: 6, modus: 5, beeldtaal: 4, dichtheid: -7, tempo: 6, openheid: 1, houdbaarheid: -5, vrijheid: 1 },
    tags: ['kleur:kleur', 'toon:ironie', 'medium:schilder'],
    bridges: ['kracht', 'chaos', 'verhaal'],
    description: {
      nl: { why: 'Urgent en actueel — een collage van het nu. Direct confronterend, maatschappelijk geladen.', tip: 'Kijk welke beeldfragmenten je herkent en welke niet. De selectie ís het statement.' },
      en: { why: 'Urgent and current — a collage of the now. Directly confronting, socially charged.', tip: 'See which image fragments you recognise and which you don\'t. The selection is the statement.' }
    }
  },
  {
    id: 'w25',
    title: { nl: 'Fata Morgana', en: 'Fata Morgana' },
    artist: 'Lila Johansson',
    year: 2023,
    medium: 'schilderij',
    dimensions: '120×80 cm',
    priceRange: '5000+',
    edition: 'uniek',
    placeholder: 'dreamy-landscape',
    axes: { engagement: -4, toon: -3, modus: -4, beeldtaal: 1, dichtheid: -3, tempo: -6, openheid: 6, houdbaarheid: 7, vrijheid: 6 },
    tags: ['kleur:kleur', 'toon:plechtig', 'medium:schilder'],
    bridges: ['melancholie', 'emotie', 'intimiteit'],
    description: {
      nl: { why: 'Dromerig landschap op de grens van figuratief en abstract. Poëtisch, ambigu, en eindeloos rijk.', tip: 'Kijk met onscherpe blik — het beeld wordt dan een gevoel in plaats van een plek.' },
      en: { why: 'Dreamy landscape on the border of figurative and abstract. Poetic, ambiguous, and endlessly rich.', tip: 'Look with an unfocused gaze — the image becomes a feeling instead of a place.' }
    }
  },

  // ── 26–30: Uitersten / Wildcard-materiaal ──
  {
    id: 'w26',
    title: { nl: 'Muur van Woorden', en: 'Wall of Words' },
    artist: 'Eve Laurent',
    year: 2024,
    medium: 'mixed-media',
    dimensions: '200×150 cm',
    priceRange: '5000+',
    edition: 'uniek',
    placeholder: 'text-wall-large',
    axes: { engagement: 8, toon: 7, modus: 9, beeldtaal: -4, dichtheid: -9, tempo: 3, openheid: 5, houdbaarheid: 3, vrijheid: 4 },
    tags: ['kleur:mono', 'toon:plechtig', 'medium:schilder'],
    bridges: ['kracht', 'complexiteit', 'verhaal'],
    description: {
      nl: { why: 'Monumentaal en conceptueel: taal als architectuur. Confronterend, overweldigend, onvermijdelijk.', tip: 'Laat de massa op je inwerken. Lees dan één willekeurige zin. Die zin is jouw ingang.' },
      en: { why: 'Monumental and conceptual: language as architecture. Confronting, overwhelming, inevitable.', tip: 'Let the mass work on you. Then read one random sentence. That sentence is your entry point.' }
    }
  },
  {
    id: 'w27',
    title: { nl: 'Stilte na de Storm', en: 'Silence After the Storm' },
    artist: 'Jan de Groot',
    year: 2022,
    medium: 'schilderij',
    dimensions: '80×60 cm',
    priceRange: '1000-5000',
    edition: 'uniek',
    placeholder: 'abstract-calm-after',
    axes: { engagement: -1, toon: -6, modus: -6, beeldtaal: -4, dichtheid: 3, tempo: -4, openheid: 2, houdbaarheid: 8, vrijheid: 6 },
    tags: ['kleur:kleur', 'toon:plechtig', 'medium:schilder'],
    bridges: ['stilte', 'melancholie', 'textuur'],
    description: {
      nl: { why: 'Diep troostend maar niet sentimenteel. De materiële rijkdom en het kleurgevoel maken dit tijdloos.', tip: 'Kijk naar de verfdikte — sommige plekken zijn opgebouwd in lagen. Dat is de "storm" die er nog in zit.' },
      en: { why: 'Deeply comforting but not sentimental. Material richness and colour sense make this timeless.', tip: 'Look at the paint thickness — some areas are built up in layers. That\'s the "storm" still inside.' }
    }
  },
  {
    id: 'w28',
    title: { nl: 'Pixel Elegie', en: 'Pixel Elegy' },
    artist: 'Kim Seo-yun',
    year: 2024,
    medium: 'print',
    dimensions: '70×70 cm',
    priceRange: '250-1000',
    edition: 'kleine-oplage',
    placeholder: 'pixel-glitch',
    axes: { engagement: 4, toon: 1, modus: 6, beeldtaal: -3, dichtheid: -1, tempo: 2, openheid: 4, houdbaarheid: -4, vrijheid: 5 },
    tags: ['kleur:kleur', 'toon:ironie', 'medium:schilder'],
    bridges: ['ironie', 'precisie', 'complexiteit'],
    description: {
      nl: { why: 'Digitale esthetiek met analoge warmte. Speelt met de grens tussen fout en schoonheid.', tip: 'Kijk naar de "fouten" — de glitches zijn de eerlijkste momenten van het beeld.' },
      en: { why: 'Digital aesthetics with analogue warmth. Plays with the boundary between error and beauty.', tip: 'Look at the "errors" — the glitches are the most honest moments of the image.' }
    }
  },
  {
    id: 'w29',
    title: { nl: 'Onzichtbaar Monument', en: 'Invisible Monument' },
    artist: 'Vera Jansen',
    year: 2023,
    medium: 'sculptuur',
    dimensions: '35×25×25 cm',
    priceRange: '1000-5000',
    edition: 'uniek',
    placeholder: 'sculptural-form',
    axes: { engagement: 5, toon: 3, modus: 4, beeldtaal: -1, dichtheid: 5, tempo: -3, openheid: 7, houdbaarheid: 9, vrijheid: 9 },
    tags: ['kleur:mono', 'toon:plechtig', 'medium:sculptuur'],
    bridges: ['ritueel', 'discipline', 'kracht'],
    description: {
      nl: { why: 'Een sculptuur die het onzichtbare tastbaar maakt. Conceptueel én materieel sterk. Maximale autonomie.', tip: 'Loop eromheen. Elk perspectief onthult een ander werk. Er is geen "voorkant".' },
      en: { why: 'A sculpture that makes the invisible tangible. Both conceptually and materially strong. Maximum autonomy.', tip: 'Walk around it. Each perspective reveals a different work. There is no "front".' }
    }
  },
  {
    id: 'w30',
    title: { nl: 'Vlinder Effect', en: 'Butterfly Effect' },
    artist: 'Lucas Moreau',
    year: 2024,
    medium: 'tekening',
    dimensions: '30×30 cm',
    priceRange: '0-250',
    edition: 'uniek',
    placeholder: 'intricate-small',
    axes: { engagement: -2, toon: -1, modus: -4, beeldtaal: 2, dichtheid: -8, tempo: -8, openheid: 5, houdbaarheid: 6, vrijheid: 4 },
    tags: ['kleur:mono', 'toon:plechtig', 'medium:schilder'],
    bridges: ['precisie', 'complexiteit', 'ritme'],
    description: {
      nl: { why: 'Klein maar oneindig gedetailleerd. Een langzaam werk dat beloont bij herhaald kijken. Handwerk als meditatie.', tip: 'Gebruik een loep of ga heel dichtbij. Elk detail opent een nieuw universum.' },
      en: { why: 'Small but infinitely detailed. A slow work that rewards repeated viewing. Craft as meditation.', tip: 'Use a magnifying glass or get very close. Each detail opens a new universe.' }
    }
  }
];
