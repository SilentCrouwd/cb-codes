---
name: token-check
description: "Use when: Styles, Farben oder Tailwind-Klassen geändert werden – Design-Tokens aus src/style.css einhalten, Darkmode und Kontrast prüfen."
---

# Design-Tokens einhalten

## Regeln

- Keine Hex-/RGB-Farben direkt im HTML – nur Klassen aus `@theme` in `src/style.css`
- Neuer Token:
  1. in `:root` definieren
  2. im Block `@media (prefers-color-scheme: dark)` überschreiben (falls abweichend)
  3. in `@theme` an Tailwind binden
- Tailwind-v4-Syntax (`bg-linear-to-r`, `shrink-0`, nicht v3 `bg-gradient-to-r`, `flex-shrink-0`)
- Darkmode nur über `prefers-color-scheme`, keine `dark:`-Klassen

## Prüfen

```bash
# Hartkodierte Farben im HTML
grep -n -E '#[0-9a-fA-F]{3,6}\b|rgb\(' *.html | grep -v -E 'theme-color|href="#'

# Tailwind-v3-Reste
grep -n -E 'bg-gradient-to-|flex-shrink-|flex-grow-' *.html
```

- Kontrast in beiden Modi: Text auf `bg-box` und auf `bg-brand-gradient`
- Ungenutzte Tokens: Token-Name im HTML suchen, bei 0 Treffern entfernen

## Fertig, wenn

Keine hartkodierten Farben, keine v3-Klassen, beide Modi lesbar.
