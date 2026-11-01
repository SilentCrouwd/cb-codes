# CLAUDE.md

Projektkontext für Claude Code. Sprache im Projekt: **Deutsch** (Inhalte, Kommentare, Commits dürfen deutsch/englisch gemischt sein – Conventional-Commit-Präfixe wie `feat:` bleiben englisch).

## Was ist das?

`cb.codes` – Portfolio- und Angebotsseite von Christian Buchholz (Webdesign für kleine Unternehmen, Handwerk, Gastro).
Statische Multi-Page-Site, gehostet auf GitHub Pages unter `https://silentcrouwd.github.io/cb-codes/`.

## Stack

- **Vite 8** (Multi-Page, `base: "/cb-codes"`), kein Framework, kein JavaScript im Frontend
- **Tailwind CSS v4** über `@tailwindcss/vite` – Konfiguration ausschließlich in [src/style.css](src/style.css) (`@theme`, kein `tailwind.config.js`)
- **Fonts** lokal via Fontsource: Bricolage Grotesque Variable (`font-sans`, alles), Playwrite DK Loopet (`font-signatur`, nur Signatur)

## DSGVO – Pflicht

- **Keine externen Ressourcen**: keine CDNs, kein Google Fonts, keine eingebetteten Fremdinhalte (YouTube, Maps, Analytics, Social-Widgets) ohne Zwei-Klick-Lösung und Absprache
- Schriften und Bibliotheken nur als npm-Paket, sodass sie mitgebaut und selbst ausgeliefert werden
- Kein Tracking, keine Cookies. Falls sich das ändert, Datenschutzerklärung in `impressum.html` mitpflegen
- Prüfen: `grep -n -E '<(link|script|img|iframe|source)[^>]*(href|src|srcset)="https?://' *.html` darf nur `canonical` finden
- Deploy: [.github/workflows/deploy.yml](.github/workflows/deploy.yml) – Push auf `master` → `npm ci && npm run build` → `dist/` auf Pages

## Befehle

```bash
npm run dev       # Dev-Server
npm run build     # Produktions-Build nach dist/ – muss fehlerfrei durchlaufen
npm run preview   # Build lokal ansehen (inkl. /cb-codes-Base)
```

Es gibt keine Tests und keinen Linter. Validierung = `npm run build` + Sichtprüfung in Light- und Darkmode, mobil und Desktop.

## Struktur

| Datei | Inhalt |
| --- | --- |
| [index.html](index.html) | Landingpage: Hero, Service, Muster (Projekte), Preise, Kontakt (Bento), Footer |
| [applicationDossier.html](applicationDossier.html) | Produktdossier Bewerbungs-/HR-Bento-Landingpage |
| [restaurantDossier.html](restaurantDossier.html) | Produktdossier Gastro (Bistro 0511Bites) |
| [gewerbeDossier.html](gewerbeDossier.html) | Produktdossier Handwerk/Gewerbe |
| [impressum.html](impressum.html) | Impressum + Datenschutz (`#datenschutz`) |
| [src/style.css](src/style.css) | Tailwind-Import, Fonts, Design-Tokens, Darkmode, Base-Layer |
| `src/assets/img/` | Bilder (webp), werden von Vite gehasht |
| `public/` | Unveränderte Dateien (Favicon, Apple-Touch-Icon) |

**Neue HTML-Seite?** Muss in [vite.config.ts](vite.config.ts) unter `build.rollupOptions.input` eingetragen werden, sonst fehlt sie im Build.

## Design-System

Verbindlich ist [DESIGN.md](DESIGN.md) (Grundlage: Skill `frontend-design`).

Die Rohwerte stehen als `--cb-*` in `:root`, werden im `@media (prefers-color-scheme: dark)` überschrieben und per `@theme inline` an Tailwind gebunden. **Nur diese Klassen nutzen, keine Hex-Farben in HTML.**

| Tailwind-Klasse | Zweck |
| --- | --- |
| `bg-papier` | Seitenhintergrund (ist schon auf `body` gesetzt) |
| `text-tinte` | Text (ist schon auf `body` gesetzt) |
| `text-schiefer` | Sekundärtext |
| `text-wald` / `bg-wald` / `border-wald` | die eine Akzentfarbe: CTA, Links, Hervorhebung |
| `text-auf-wald` | Text auf `bg-wald` |
| `bg-moos` | ruhige Flächen (Bildrahmen, empfohlenes Paket) |
| `border-linie` / `divide-linie` | Rahmen und Trenner |
| `font-signatur` | Handschrift, nur für Signatur-Momente |
| `.btn-primary` / `.btn-secondary` / `.tag` | Komponenten |

Die alten Klassen (`text-primary`, `text-muted`, `bg-box`, `shadow-glow` …) gibt es nicht mehr – sie würden still ohne Wirkung bleiben.

Darkmode läuft **nur** über `prefers-color-scheme` (kein Toggle, keine `dark:`-Klassen nötig).

## Konventionen

- Tailwind v4-Syntax verwenden (`bg-linear-to-r`, `shrink-0`, statt v3 `bg-gradient-to-r`, `flex-shrink-0`)
- Bildpfade relativ als `src/assets/img/...` (Vite löst auf); Dateien aus `public/` mit führendem `/` referenzieren
- Interne Links zwischen Seiten: relativ (`index.html#contact`) – absolute Links müssen `/cb-codes/` enthalten
- Semantisches HTML (`section`, `article`, `header`, `nav`), sinnvolle `alt`-Texte
- Mobile-first, Breakpoints `sm` / `md` / `lg` / `xl`
- Kleinstmögliche Änderung, die das Ziel erreicht – keine neuen Frameworks ohne Absprache

## Arbeitsweise

- In diesem Projekt arbeitet nur Claude Code – keine Copilot-/Cursor-Konfigurationen anlegen
- Laufender Refactor: Stand, offene Punkte, Reihenfolge und Log in [TASK.md](TASK.md) – nach jedem Schritt aktualisieren
- Skills in `.claude/skills/<name>/SKILL.md`, Übersicht in [SKILLS.md](SKILLS.md)
- Für jeden TASK-Punkt den Skill `refactor-step` befolgen
- **[WUENSCHE.md](WUENSCHE.md)** ist Christians Notizzettel für Änderungswünsche. Bei „Wünsche abarbeiten“:
  1. Alle Punkte unter „Offen“ lesen, `!` zuerst
  2. `?`-Punkte nicht umsetzen, sondern im Chat Rückfragen bzw. Vorschläge machen
  3. Kleine Wünsche direkt umsetzen, größere als Punkt in TASK.md übernehmen
  4. Erledigtes nach „Erledigt“ verschieben: `- 2026-11-01 – <Wunsch> → <was gemacht wurde>`
  5. Wünsche gegen DESIGN.md und die DSGVO-Regel prüfen; bei Widerspruch nachfragen statt umsetzen

```
.claude/skills/      Projekt-Skills (refactor-step, link-check, token-check, seo-meta, new-dossier, site-polish)
CLAUDE.md            dieser Kontext
TASK.md              Refactor-Plan + Log
WUENSCHE.md          Änderungswünsche von Christian (Eingang)
DESIGN.md            verbindlicher Grundstil
SKILLS.md            Skill-Übersicht
```
