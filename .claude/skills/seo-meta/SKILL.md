---
name: seo-meta
description: "Use when: neue Seite angelegt oder Inhalt geändert wird – Title, Description, Canonical, Open Graph und Twitter-Tags pflegen und prüfen."
---

# Meta-Tags pflegen

Basis-URL: `https://silentcrouwd.github.io/cb-codes/`

## Pflicht pro Seite

- `<html lang="de">`
- genau **ein** `<title>`, ≤ 60 Zeichen
- `meta description`, 120–160 Zeichen
- `link rel="canonical"` = tatsächliche URL der Seite (z. B. `…/cb-codes/gewerbeDossier.html`)
- Favicon: `<link rel="icon" type="image/svg+xml" href="/favicon.svg" />`
- `og:type`, `og:url` (= canonical), `og:title`, `og:description`, `og:image`, `og:locale="de_DE"`
- `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`

## Prüfen

```bash
grep -c '<title' *.html                       # muss überall 1 sein
grep -n -A1 'og:url\|canonical' *.html         # URLs korrekt?
ls public/                                    # og:image vorhanden?
```

## Fertig, wenn

Alle Pflicht-Tags vorhanden, URLs zeigen auf die echte Seite, referenzierte Bilder existieren.
