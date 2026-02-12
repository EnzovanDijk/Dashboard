# Kunst-Keuzehulp: Implementatieplan

## Overzicht
Een interactieve art-buyer-guide die in 5–10 minuten een smaakprofiel opbouwt en twee shortlists genereert: "Voor je muur" (woon-lens) en "Voor je hoofd" (denk-lens).

---

## 1. Bestandsstructuur

```
art-buyer-guide/
├── index.html          ← Hoofdpagina (SPA shell + layout)
├── css/
│   └── styles.css      ← Volledige styling (dark theme, responsive)
├── js/
│   ├── app.js          ← State machine / flow controller
│   ├── i18n.js         ← Vertalingen NL + EN
│   ├── questions.js    ← 16 stellingen + 10 A/B paren + bridges data
│   ├── catalog.js      ← Kunstwerk-catalogus (dummy, ~30 werken)
│   ├── scoring.js      ← As-berekening + matching-algoritme
│   └── ui.js           ← DOM-rendering per stap + animaties
└── PLAN.md             ← Dit bestand
```

Geen build-tooling, geen npm — puur vanilla HTML/CSS/JS, consistent met het bestaande Dashboard-project.

---

## 2. User Flow (6 stappen)

```
[Start]  →  [Stellingen]  →  [A/B Keuzes]  →  [Bridges]  →  [Filters]  →  [Resultaat]
  S0           S1               S2              S3            S4            S5
```

### S0 — Welkom + Taalkeuze
- Korte uitleg: "In 5–10 minuten ontdek je welke kunst bij je past"
- Taalwissel NL / EN (persistent via localStorage)
- Start-knop

### S1 — 16 Stellingen (waarden + kijkhouding)
- Likert 1–5 (helemaal oneens → helemaal eens)
- Per stelling: korte tekst, slider of 5 knoppen
- Progressbalk bovenin
- Mapping per stelling naar assen (zie §4)

### S2 — 10 A/B Beeldkeuzes (esthetiek-calibratie)
- Links vs Rechts, met placeholder-visuals (CSS-gegenereerde composities)
- Optie "beide even sterk" / "geen van beide"
- Elke keuze calibreert een specifieke as of tag
- Visueel aantrekkelijk: kaart-flip of slide animatie

### S3 — Interesse-Bridges
- Grid van ~12 domeinen (muziek, architectuur, filosofie, wetenschap, schaken, mode, natuur, etc.)
- Kies max 3 domeinen
- Per domein: 6 trefwoorden waaruit je er 3 kiest (melancholie, discipline, humor, strategie, ritueel, chaos, etc.)
- Bridge-logica: domein+trefwoord → verrassende kunstmatch-hints

### S4 — Praktische Filters
- Budget: vrij tekstveld of ranges (€0–250 / €250–1000 / €1000–5000 / €5000+)
- Formaat: klein (<50cm) / middel (50–100cm) / groot (>100cm)
- Medium: multi-select (schilderij, print, fotografie, tekening, mixed media, sculptuur)
- Oplage: uniek / kleine oplage / open editie / maakt niet uit

### S5 — Resultaat
- **Smaakprofiel**: radar/spider chart van de 9 assen + tags
- **Voor je muur** (Woon-lens):
  - 5 "safe" matches (dichtst bij profiel)
  - 5 "stretch" matches (net buiten comfortzone)
  - 2 "wildcard" matches (verrassend via bridges)
- **Voor je hoofd** (Denk-lens):
  - 2–5 "respect-first" keuzes
  - Per werk uitleg: "waarom dit past" + "kijkinstructie"
- Exporteer profiel (JSON / print-versie)
- Opnieuw beginnen knop

---

## 3. De 9 Assen (scores –10 tot +10)

| # | As | Plus-pool (+10) | Min-pool (–10) |
|---|-----|-----------------|----------------|
| 1 | Engagement | Maatschappelijk | Poëtisch/persoonlijk |
| 2 | Toon | Confronterend | Troostend |
| 3 | Modus | Conceptueel | Zintuiglijk/materieel |
| 4 | Beeldtaal | Figuratief | Abstract |
| 5 | Dichtheid | Minimal/helder | Expressief/gelaagd |
| 6 | Tempo | Direct | Langzaam/meerlagig |
| 7 | Openheid | Ambiguïteit | Eenduidigheid |
| 8 | Houdbaarheid | Tijdstest | Zeitgeist/actualiteit |
| 9 | Vrijheid | Autonomie | Instrumenteel/boodschap |

---

## 4. Stelling → As Mapping

| # | Stelling (verkort) | As | Richting | Gewicht |
|---|--------------------|----|----------|---------|
| 1 | Maatschappij/macht/geschiedenis raakt mij | As1 | + | 1.0 |
| 2 | Liever poëzie/ambiguïteit dan boodschap | As1 | – | 0.6, As7 | + | 0.4 |
| 3 | Werk moet zonder actuele context werken | As8 | + | 1.0 |
| 4 | Politiek OK maar formeel/poëtisch overeind | As9 | + | 0.7, As1 | 0 | 0.3 |
| 5 | Mag schuren/ongemakkelijk | As2 | + | 1.0 |
| 6 | Kunst in huis = rust/warmte/troost | As2 | – | 1.0 |
| 7 | Sterk idee > puur 'mooi' | As3 | + | 1.0 |
| 8 | Materiaal/handwerk/textuur = verschil | As3 | – | 1.0 |
| 9 | Haak af als ik uitleg nodig heb | As6 | + | 1.0 |
| 10 | Favorieten worden beter bij langer kijken | As6 | – | 1.0 |
| 11 | Goede kunst = ambigu | As7 | + | 1.0 |
| 12 | Geraakt door mensen/lichamen/scènes | As4 | + | 1.0 |
| 13 | Hou van abstractie/ritme/patroon | As4 | – | 1.0 |
| 14 | Helder en spaarzaam: minder elementen | As5 | + | 1.0 |
| 15 | Gelaagd/druk: veel te ontdekken | As5 | – | 1.0 |
| 16 | Kan 'goed/sterk' vinden ≠ mooi | As9 | + | 0.7, As7 | + | 0.3 |

---

## 5. A/B Paren → As/Tag Mapping

| # | Optie A | Optie B | Target | A→ | B→ |
|---|---------|---------|--------|-----|-----|
| 1 | Geometrie | Expressief | As5 | + | – |
| 2 | Figuur | Abstract | As4 | + | – |
| 3 | Tekst/taal | Zintuiglijk | As3 | + | – |
| 4 | Rust | Collage | As5 | + | – |
| 5 | Direct emotioneel | Analytisch | As6 | + | – |
| 6 | Sociaal/documentair | Droom/poëzie | As1 | + | – |
| 7 | Confronterend | Troostend | As2 | + | – |
| 8 | Monochroom | Kleur | tag | kleur:mono | kleur:kleur |
| 9 | Ironie | Plechtig | tag | toon:ironie | toon:plechtig |
| 10 | Fotografie | Schilder/tekening | tag | medium:foto | medium:schilder |

---

## 6. Placeholder A/B Visuals (CSS-gegenereerd)

Elke A/B kaart krijgt een CSS-compositie die het contrast visueel maakt:

| Paar | A (CSS) | B (CSS) |
|------|---------|---------|
| 1 | Strakke geometrische grid, monochroom | Losse penseelstreken, warme kleuren |
| 2 | Gestileerd silhouet/portret | Abstracte vormen/cirkels |
| 3 | Typografie-compositie | Kleurgradiënt/textuur |
| 4 | Enkel element, veel witruimte | Overlappende lagen/collage |
| 5 | Felle kleurblok, hoog contrast | Subtiel raster, koele tinten |
| 6 | Zwart-wit "foto"-stijl raster | Dromerige pasteltinten |
| 7 | Scherpe hoeken, donkere tinten | Zachte rondingen, warme tinten |
| 8 | Grijswaarden compositie | Kleurrijke compositie |
| 9 | Scheve tekst + pop-art stijl | Symmetrische, klassieke compositie |
| 10 | Scherp raster (foto-feel) | Organische penseelstreek-textuur |

---

## 7. Scoring-Algoritme

### Stap 1: Stellingen → ruwe as-scores
```
Per stelling (antwoord 1–5, genormaliseerd naar –1..+1):
  normalized = (antwoord - 3) / 2  // –1, –0.5, 0, +0.5, +1

Per as:
  raw_score = Σ (normalized × richting × gewicht)

Schaal naar –10..+10:
  axis_score = clamp(raw_score × scaling_factor, –10, +10)
```

### Stap 2: A/B keuzes → correctie
```
Per A/B keuze:
  als A gekozen: axis += correction (b.v. +1.5)
  als B gekozen: axis -= correction
  als "beide"/"geen": axis += 0
```

### Stap 3: Interesse-bridges → bonus tags
```
Per gekozen domein+trefwoord:
  voeg bridge-tags toe aan profiel
  (b.v. muziek+melancholie → tag:emotioneel-diep)
```

### Stap 4: Matching
```
Per kunstwerk in catalogus:
  distance = √(Σ (user_axis[i] - werk_axis[i])²)  // Euclidische afstand

  tag_bonus = aantal overlappende tags × bonus_factor

  final_score = distance - tag_bonus  // lager = betere match

Sorteer:
  "Voor je muur" safe = top 5 laagste distance (+ filter op praktische criteria)
  "Voor je muur" stretch = rank 6–10
  "Voor je muur" wildcard = 2 random uit bridge-matches
  "Voor je hoofd" = top 5 op "respect-score" (hoog op As7+As8+As9)
```

---

## 8. Dummy Catalogus Structuur

```javascript
{
  id: "werk-001",
  title: { nl: "Stille Getuige", en: "Silent Witness" },
  artist: "Anna de Vries",
  year: 2023,
  medium: "mixed-media",
  dimensions: "80×60 cm",
  price_range: "1000-5000",  // budget categorie
  edition: "uniek",
  image_placeholder: "geometric-dark",  // CSS class voor placeholder
  axes: {
    engagement: 6,      // As1: maatschappelijk
    toon: 3,             // As2: licht confronterend
    modus: -4,           // As3: meer zintuiglijk
    beeldtaal: 5,        // As4: figuratief
    dichtheid: -2,       // As5: licht expressief
    tempo: -5,           // As6: langzaam
    openheid: 7,         // As7: ambigu
    houdbaarheid: 8,     // As8: tijdstest
    vrijheid: 6          // As9: autonoom
  },
  tags: ["kleur:kleur", "toon:plechtig", "medium:schilder"],
  bridges: ["melancholie", "ritueel", "stilte"],
  description: {
    nl: { why: "...", kijkinstructie: "..." },
    en: { why: "...", viewingInstruction: "..." }
  }
}
```

~30 dummy werken met gevarieerde profielen over alle assen.

---

## 9. UI/UX Design

### Visueel
- Donker thema (consistent met Dashboard) + licht thema toggle
- Grote, rustige typografie (serif voor titels, sans voor body)
- Veel witruimte — de tool moet zelf als een "galerie-ervaring" aanvoelen
- Subtiele animaties (fade, slide) tussen stappen
- Progressindicator (stap 1/5 + percentage)

### Responsief
- Mobile-first: stellingen als swipeable kaarten
- Desktop: twee-koloms layout voor A/B keuzes
- Resultaat: responsive grid voor shortlists

### Interactie
- Stellingen: 5 knoppen of klikbare schaal (geen HTML range slider)
- A/B: klik op kaart, visuele selectie-feedback
- Bridges: toggle-chips/tags
- Filters: klikbare opties (niet dropdowns)

---

## 10. Tweetaligheid (i18n)

- Alle UI-teksten in `i18n.js` als object `{ nl: {...}, en: {...} }`
- Stellingen, A/B labels, bridge-labels, resultaat-teksten: allemaal tweetalig
- Taalwissel-knop altijd zichtbaar in header
- Voorkeur opgeslagen in localStorage

---

## 11. Bouwvolgorde (implementatie-stappen)

1. **Skelet**: `index.html` met SPA-structuur, CSS basis, state machine in `app.js`
2. **i18n**: Vertalingssysteem + taalwissel
3. **S0 Welkom**: Startscherm met uitleg + taalwissel
4. **S1 Stellingen**: 16 stellingen UI + scoring
5. **S2 A/B Keuzes**: 10 paren met CSS-placeholders + scoring
6. **S3 Bridges**: Domein/trefwoord-selectie
7. **S4 Filters**: Praktische criteria
8. **S5 Resultaat**: Smaakprofiel (radar chart) + shortlists
9. **Catalogus**: 30 dummy werken met scores
10. **Matching**: Scoring-algoritme + shortlist-generatie
11. **Polish**: Animaties, responsive, edge cases
12. **Test**: Doorloop volledige flow, check alle paden

---

## 12. Buiten scope MVP (later)

- Echte kunstwerken/afbeeldingen
- Backend/API voor catalogus
- Opslaan/delen van profiel via URL
- Admin-interface voor kunstwerken toevoegen
- A/B test data analytics
- PDF-export van advies
