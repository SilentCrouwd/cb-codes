# DESIGN.md – Grundstil cb.codes

Status: **Freigegeben (vorläufig) – umgesetzt auf `index.html`**, Christian schaut es sich an

## Entscheidungen

- 2026-11-01 – Waldgrün als Akzentfarbe: ja, vorerst
- 2026-11-01 – **DSGVO-Konformität ist Pflicht:** Schriften nur selbst gehostet (Fontsource), keine externen Ressourcen (CDNs, Google Fonts, eingebettete Fremdinhalte)
- 2026-11-01 – Keine neuen Grafiken. Die Service-Grafiken entfallen, der Service-Bereich ist jetzt eine Textliste
- 2026-11-01 – Hero-Hintergrund: Linien wie Schreibpapier (`.hero-textur`, nur CSS, Farbe aus `--cb-linie`), laufen nach unten aus. Kein Foto
- 2026-11-01 – Dossiers: nummerierte Listen (`01`, `02` … in Wald) statt Icon-Kacheln, Kurzfassung als Moos-Fläche, Abschnitte mit `border-t border-linie py-16` wie auf der Startseite
Grundlage: Skill [frontend-design](.claude/skills/frontend-design/SKILL.md)

## Brief

- **Wer:** Christian Buchholz, Webentwickler aus dem Weserbergland, arbeitet allein und persönlich
- **Für wen:** Inhaber kleiner Betriebe (Handwerk, Gastro, Dienstleister), meist keine Technik-Profis, regional
- **Hauptaufgabe der Seite:** Vertrauen aufbauen → Anfrage per Mail/Telefon
- **Was die Marke ausmacht:** handgemacht statt Baukasten. Das Logo ist eine **handschriftliche Signatur** in schwarzer Tinte mit einer schlichten Grotesk darunter.

## Bestandsaufnahme (was heute generisch wirkt)

| Heute | Problem laut Skill |
| --- | --- |
| Alles in gleichen abgerundeten Karten mit `shadow-glow`, Cyan-Verlauf als Hintergrund | „SaaS-card kit“ – austauschbar |
| Ein Wort in der Headline eingefärbt („digitalen Auftritt“) | typisches Merkmal generierter Seiten |
| 15× Labels in Großbuchstaben mit Sperrung | Template-Chrome |
| Hover-Anheben auf jeder Karte, Pfeil an jedem Button | generische Bewegung |
| 3 Schriftfamilien (Inter, Montserrat, Playwrite) | Skill: eine oder zwei, klar unterscheidbar |
| Blaue Stock-Grafiken (Service-Bilder) | passen nicht zum Logo |

## Plan

### Farbe

Die Farben kommen vom Logo (Tinte auf Papier) plus **einer** Markenfarbe. Das heutige Teal entwickle ich zu einem tieferen Waldgrün weiter (Weserbergland/Ith).

| Name | Hell | Dunkel | Rolle |
| --- | --- | --- | --- |
| Papier | `#F7F8F6` | `#121A22` | Hintergrund |
| Tinte | `#16202B` | `#EEF1EE` | Text, Signatur |
| Schiefer | `#5B6672` | `#9AA5B0` | Sekundärtext |
| Wald | `#0F6B5F` | `#4FB8A6` | CTA, Links, die eine Akzentfarbe |
| Moos | `#E4ECE8` | `#1C2A2C` | ruhige Flächen (Preise, Kontakt) |
| Linie | `#16202B` 12 % | `#EEF1EE` 14 % | Rahmen, Trenner |

Keine Verläufe, keine Glows. Abgesetzte Flächen entstehen durch Moos und Linie, nicht durch Schatten.

### Typografie

- **Grotesk für alles** (Überschriften + Fließtext): *Bricolage Grotesque* (Fontsource, variabel, hat Charakter in großen Größen und ist neutral im Fließtext). Ersetzt Inter und Montserrat.
- **Handschrift nur als Signatur:** *Playwrite DK Loopet* bleibt, weil sie zum Logo passt, wird aber nur an 1–2 Stellen genutzt (Hero, Gruß im Kontakt), **nicht** mehr für alle `h2`.
- Schriftgrößen-Skala (1.25): 14 / 16 / 20 / 25 / 31 / 39 / 49 px, Fließtext 17–18 px, Zeilenlänge ≤ 70 Zeichen, linksbündig.

### Layout

Linksbündig, ruhig, viel Luft. Karten nur dort, wo Inhalte wirklich getrennte Objekte sind (Projekte, Preise).

```
HERO                                     SERVICE (Liste statt 4 Karten)
┌──────────────────────────────────┐     ┌──────────────────────────────────┐
│ Websites für Betriebe aus der    │     │ Was du bekommst                  │
│ Region – schnell, ehrlich,       │     │ ─────────────────────────────── │
│ von Hand gebaut.                 │     │ Website      Schlanker Code, …   │
│                                  │     │ Google       Lokal gefunden …    │
│ [Projekt anfragen]  Preise ansehen│     │ Domain       Einrichtung …       │
│                                  │     │ Persönlich   Kein Callcenter …   │
│            ~ cb.codes (Signatur) │     └──────────────────────────────────┘
└──────────────────────────────────┘
PROJEKTE (groß, abwechselnd)             KONTAKT (ein Ziel statt 6 Kacheln)
┌───────────────┬──────────────────┐     ┌──────────────────────────────────┐
│ Vorschau      │ Titel, 2 Sätze,  │     │ Schreib mir – Antwort in 24 h    │
│               │ Infos · Live     │     │ cb.codes.design@gmail.com  [groß]│
├──────────────────┬───────────────┤     │ Telefon · LinkedIn · Instagram · │
│ Titel …          │ Vorschau      │     │ GitHub (schlichte Zeile)         │
└──────────────────┴───────────────┘     │            ~ Christian (Signatur)│
                                         └──────────────────────────────────┘
```

### Form

- Radius nach Hierarchie: 4 px (Buttons, Tags), 12 px (Bilder, Projekt-/Preiskarten), sonst eckig
- Rahmen 1 px „Linie“ statt Schatten
- Fokus sichtbar: 2 px Wald-Outline mit Abstand

### Bewegung

**Ein einziger Moment:** Die Signatur im Hero „schreibt sich“ beim Laden (SVG-Strich, ca. 1,2 s). Bei `prefers-reduced-motion` erscheint sie sofort. Sonst nur Rückmeldung auf Interaktion (Hover-Farbe, Fokus), kein Anheben und keine Einblend-Animationen.

### Prinzipien

1. **Die Handschrift ist das Besondere.** Sie ist das eine mutige Element, alles andere bleibt ruhig.
2. **Ehrlich statt Hochglanz.** Echte Projekte, echte Preise, klare Sätze ohne Werbefloskeln.
3. **Struktur trägt Information.** Rahmen, Flächen und Nummern nur, wenn der Inhalt es verlangt.
4. **Schnell ist Teil des Designs.** Zwei Schriftfamilien, keine Effekte, die Ladezeit kosten.

## Prüfung gegen den Brief

- *Wirkt das generisch?* Papier, Tinte und Grün ist nicht die Creme-Terrakotta- und nicht die Schwarz-Neon-Kombination. Das Besondere ist die Logo-Handschrift, die keine andere Seite hat. ✔
- *Geändert gegenüber dem ersten Gedanken:* Die Handschrift sollte zuerst alle Überschriften tragen. Das habe ich auf 1–2 Stellen reduziert, weil sie sich sonst abnutzt und schwer lesbar ist.
- *Offen:* Die blauen Service-Grafiken passen nicht. Sie würden entfallen (Liste ohne Bilder) oder müssten neu erstellt werden.

## Umsetzung

1. [x] Tokens in `src/style.css` ersetzt. Die alten Klassennamen zeigen übergangsweise auf die neuen Farben.
2. [x] Fonts getauscht (`@fontsource-variable/bricolage-grotesque` rein, Inter + Montserrat raus)
3. [x] `index.html` umgebaut
4. [x] Dossiers umbauen (Großbuchstaben-Labels, Nummerierung, Karten-Raster laut Bestandsaufnahme)
5. [x] Impressum umbauen
6. [x] Danach die Übergangs-Klassen aus `src/style.css` entfernen
7. Signatur: kein eigenes SVG, das Logo-Bild wird per `clip-path` von links nach rechts aufgedeckt (`.signatur-animiert`), bei reduzierter Bewegung erscheint es sofort

## Komponenten (`@layer components` in src/style.css)

| Klasse | Einsatz |
| --- | --- |
| `.btn-primary` | Hauptaktion (Wald-Fläche), max. eine pro Bereich |
| `.btn-secondary` | Nebenaktion (Rahmen) |
| `.tag` | Technik-Schlagworte |
