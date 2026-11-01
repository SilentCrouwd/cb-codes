---
name: new-dossier
description: "Use when: ein neues Muster-Projekt hinzukommt – neue Produktdossier-Seite anlegen, in Vite registrieren und auf der Startseite verlinken."
---

# Neue Produktdossier-Seite anlegen

## Ablauf

1. Bestehendes Dossier (z. B. `gewerbeDossier.html`) als Vorlage kopieren, Name `<thema>Dossier.html`
2. `<head>` anpassen (Skill `seo-meta`): `title`, `description`, `og:*`, `twitter:*`, `canonical` mit echter URL
3. Seite in `vite.config.ts` unter `build.rollupOptions.input` eintragen – sonst fehlt sie im Build
4. Projektkarte in `index.html` unter `#projekte` ergänzen
   - Vorschaubild als `.webp` nach `src/assets/img/`
   - passender `alt`-Text
5. Links prüfen:
   - „mehr Infos“ → neues Dossier
   - „zur Seite“ → Live-URL
   - Zurück-Link im Dossier → `index.html#projekte`
   - Anfrage-Button → `index.html#contact`
6. `npm run build` und prüfen, dass die Seite in `dist/` liegt
7. Skill `link-check` ausführen

## Fertig, wenn

- Seite ist im Build vorhanden und von der Startseite erreichbar
- Meta-Tags sind vollständig und korrekt
