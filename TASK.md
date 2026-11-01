# TASK.md – Refactoring cb.codes

Status: `[ ]` offen · `[~]` in Arbeit · `[x]` erledigt
Nach jeder Phase: `npm run build` + Sichtprüfung (Light/Dark, mobil/Desktop).

## Phase 0 – Bestandsaufnahme ✅

- [x] Projekt eingelesen, `CLAUDE.md`, `SKILLS.md`, `TASK.md` angelegt
- [x] Build läuft fehlerfrei (Stand 2026-11-01)
- [x] Skill-Struktur unter `.claude/skills/` aufgebaut
- [x] Grundstil festgelegt → [DESIGN.md](DESIGN.md), `src/style.css` + `index.html` umgesetzt
- [x] Dossiers + Impressum auf den Grundstil umbauen (DESIGN.md → Umsetzung 4–6) – Wunsch aus WUENSCHE.md
  - [x] `applicationDossier.html` als Muster (von Christian freigegeben)
  - [x] `restaurantDossier.html`
  - [x] `gewerbeDossier.html`
  - [x] `impressum.html`
  - [x] Übergangs-Klassen aus `src/style.css` entfernt

## Phase 1 – Bugs & kaputte Referenzen (zuerst, kleines Risiko)

- [x] **Toter Anker:** Dossier-Seiten verlinken `index.html#projects`, die Section heißt `id="projekte"` → beim Dossier-Umbau auf `#projekte` umgestellt
- [x] **Favicon fehlt auf Dossier-Seiten:** `src/assets/img/favicon.svg` existiert nicht (liegt in `public/`) → `/favicon.svg` (beim Dossier-Umbau)
- [x] **Doppelte Tags in `index.html`:** zwei `<title>`, Favicon-Link doppelt (beim Umbau behoben)
- [x] Footer-Links in `index.html` relativ statt `/cb-codes/…`
- [ ] **`npm audit`:** 6 Schwachstellen (1 moderate, 5 high) in Dev-Abhängigkeiten – prüfen
- [ ] Ungenutzte Bilder löschen: `serviceWebsite.webp`, `serviceSEO.webp`, `ServiceDomain.webp`, `servicePersoenlich.webp`
- [ ] **`og-image.jpg` fehlt** in `public/` – wird in allen OG/Twitter-Tags referenziert → *zurückgestellt, wird später entschieden*
- [x] **Falsche `og:url`** in den Dossiers (z. B. `/dossier-hr-bento`) → echte Seiten-URLs eintragen, `canonical` ergänzen (beim Dossier-Umbau)
- [x] **Falscher alt-Text:** Gewerbe-Vorschau hatte `alt="Preview Restaurant Page"` (beim Umbau behoben)
- [x] **`impressum.html`:** keine Meta-Description, kein Favicon, kein `bg-brand-gradient`/Body-Styling wie Rest (beim Umbau behoben)
- [x] Darkmode prüfen: `--color-text` ist im Darkmode `#00013d` (fast schwarz) → hat sich mit den neuen Tokens erledigt

## Phase 2 – CSS / Tailwind aufräumen

- [ ] Tailwind-v3-Klassen auf v4 umstellen (`bg-gradient-to-r` → `bg-linear-to-r`, `flex-shrink-0` → `shrink-0`, Arbitrary-Werte wie `min-h-[15rem]` prüfen)
- [x] Token-Namen konsolidieren → alte Namen entfernt, nur noch `--cb-*` / Tailwind-Klassen laut CLAUDE.md
- [x] Ungenutzte Tokens entfernen (mit den Übergangs-Klassen erledigt)
- [ ] Wiederkehrende Klassen-Bündel als Komponenten-Klassen in `@layer components` (`.card`, `.tag`, `.btn-primary`, `.section-title`) – nur wo es Wiederholung wirklich reduziert
- [ ] Font-Imports prüfen: nur benötigte Gewichte/Subsets laden (aktuell latin + latin-ext, woff + woff2)

## Phase 3 – HTML-Duplikate reduzieren

Problem: Projektkarten (3×), Tech-Tags (~20×), Pfeil-SVG (~10×), Kontakt-Kacheln (5×), Nav/Footer auf jeder Seite kopiert.

- [ ] **Entscheidung treffen (zurückgestellt):** Partials über Vite-Plugin (z. B. `vite-plugin-handlebars`) vs. reine CSS-Komponenten-Klassen vs. so lassen
- [ ] Gemeinsamen `<head>` (Meta, Favicon, CSS) als Partial
- [ ] Gemeinsame Dossier-Navigation + Footer als Partial
- [ ] Projektkarte + Preiskarte als Partial mit Parametern
- [ ] Wiederholte Icons als SVG-Sprite (`<symbol>` + `<use>`) oder Partial

## Phase 4 – Build & Performance

- [ ] `vite-plugin-image-optimizer`, `sharp`, `svgo` sind installiert, aber **nicht** in `vite.config.ts` eingebunden → einbinden oder entfernen
- [ ] `vite.config.ts`: Inputs automatisch aus `*.html` erzeugen statt manuell pflegen
- [ ] Bilder: `width`/`height` setzen (CLS), `loading="lazy"` unterhalb des Folds
- [ ] Lighthouse-Lauf vorher/nachher dokumentieren

## Phase 5 – Inhalt, SEO, Barrierefreiheit

- [ ] Hauptnavigation auf `index.html` (fehlt aktuell komplett)
- [ ] Überschriften-Hierarchie je Seite prüfen (Impressum: erledigt, nur noch ein `h1`)
- [ ] Fokus-Styles für Links/Buttons (`focus-visible:`)
- [ ] Strukturierte Daten (JSON-LD `LocalBusiness` / `Person`)
- [ ] `sitemap.xml` + `robots.txt` in `public/`
- [ ] Copy-Pass mit Skill *site-polish* (siehe [SKILLS.md](SKILLS.md))

## Offene Fragen an Christian

- Partials/Template-Engine erlaubt oder soll es reines HTML bleiben? → **später klären** (vor Phase 3)
- Gibt es ein OG-Bild oder soll eins erstellt werden? → **später klären**

## Entscheidungen

- 2026-11-01 – Nur Claude Code im Projekt, keine anderen AI-Tools. Skills liegen in `.claude/skills/`, `.github/skills/` entfernt.

- 2026-11-01 – Dossier-Umbau: Grundstil übernehmen, Inhalte bleiben. Icon-Kacheln entfallen, stattdessen Nummern (01–05). Erst eine Seite als Muster, dann die anderen.
- 2026-11-01 – Hero-Hintergrund: ruhige Linien-Textur statt Foto (passt zu „Tinte auf Papier“).

## Log

- 2026-11-01 – Bestandsaufnahme, Dateien angelegt
- 2026-11-01 – Skill-Struktur `.claude/skills/` aufgebaut (6 Skills), `site-polish` von `.github/skills/` verschoben
- 2026-11-01 – Skill `frontend-design` von anthropics/skills übernommen, Designentwurf in DESIGN.md
- 2026-11-01 – Grundstil umgesetzt: neue Tokens, Bricolage Grotesque (lokal), `index.html` neu (47 kB → 17 kB HTML, CSS 48 kB → 30 kB). DSGVO-Regel in CLAUDE.md
- 2026-11-01 – Wunsch: Hero ab `sm` auf volle Viewport-Höhe (`sm:min-h-svh`), Build grün
- 2026-11-01 – Hero: Linien-Textur über volle Breite (`main` ohne Container, Hero in `.hero-textur`, Rest wieder in `max-w-5xl`)
- 2026-11-01 – `applicationDossier.html` auf Grundstil umgebaut: nur neue Tokens, nummerierte USP-Liste statt Icon-Karten, Zielgruppen als Liste, Footer mit Impressum-/Datenschutz-Links wie `index.html`, Live-Link im Kopf. Nebenbei auf dieser Seite: Anker `#projekte`, Favicon `/favicon.svg`, `og:url`, `canonical`, `theme-color`, Tippfehler „schnellen“. Build grün
- 2026-11-01 – `restaurantDossier.html` + `gewerbeDossier.html` nach dem Muster umgebaut (gleiche Struktur, Inhalte unverändert, Restaurant-Seitenaufbau als Liste mit Dateinamen). Tippfehler „starker mobiler Nutzbarkeit“. Build grün, keine alten Klassen mehr in den Dossiers. Offen: Impressum, danach Übergangs-Klassen entfernen
- 2026-11-01 – `impressum.html` auf Grundstil umgebaut: Rechtstexte unverändert, Impressum als Liste, Datenschutz als Fließtext (max. 70 Zeichen), ein `h1`, Meta-Description, Canonical, Favicon, Footer. Zurück-Link relativ (`index.html`). Danach Übergangs-Klassen + `--color-bg` aus `src/style.css` entfernt (CSS 30 kB → 22,6 kB). Build grün
