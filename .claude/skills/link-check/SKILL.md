---
name: link-check
description: "Use when: nach Umbenennungen, neuen Seiten oder vor einem Deploy – alle lokalen Links, Anker und Asset-Pfade im Quellcode und im Build prüfen."
---

# Referenzen & Assets prüfen

## Befehle

```bash
# Alle lokalen href/src im Quellcode
grep -n -o -E '(href|src)="[^"]*"' *.html | grep -v -E 'https?://|mailto:|tel:'

# Anker-Ziele, auf die verlinkt wird
grep -o -h -E 'href="[^"]*#[^"]+"' *.html | sort | uniq -c

# Vorhandene IDs pro Seite
grep -o -H 'id="[^"]*"' *.html

# Nach dem Build: nicht aufgelöste Quellpfade
npm run build && grep -n 'src/' dist/*.html
```

## Regeln

- Jeder `#anker` muss als `id` auf der Zielseite existieren
- `src/assets/...` muss existieren (Vite hasht und kopiert)
- Dateien aus `public/` mit führendem `/` referenzieren (Vite setzt `/cb-codes` davor)
- Absolute interne Links im Quelltext brauchen `/cb-codes/` – besser relativ verlinken
- In `dist/*.html` darf kein `src/`-Pfad übrig bleiben

## Fertig, wenn

Alle Pfade lösen auf, keine toten Anker, `dist/` enthält keine `src/`-Referenzen.
