---
name: refactor-step
description: "Use when: einen Punkt aus TASK.md umsetzen – ein Refactor-Schritt pro Durchlauf, mit Build-Prüfung, TASK.md-Update und Commit."
---

# Refactor-Schritt sicher umsetzen

## Ablauf

1. Punkt in [TASK.md](../../../TASK.md) auf `[~]` setzen
2. Betroffene Dateien lesen, Umfang klein halten (ein Thema pro Schritt)
3. Änderung umsetzen – **keine** Inhalts- oder Designänderung nebenbei
4. `npm run build` – muss ohne Fehler/Warnungen laufen
5. `dist/*.html` auf nicht aufgelöste `src/`-Pfade prüfen (Skill `link-check`)
6. Sichtprüfung via `npm run preview`: Light + Dark, ~400 px + Desktop
7. Punkt auf `[x]`, Eintrag im Log von TASK.md mit Datum
8. Commit nur nach Freigabe, Conventional-Commit-Präfix (`fix:`, `refactor:`, `style:`, `chore:`)

## Regeln

- Seite muss danach identisch aussehen, außer die Änderung ist beabsichtigt
- Neue Erkenntnisse/Folgeprobleme als neuen Punkt in TASK.md eintragen, nicht nebenbei fixen
- Bei Unklarheit: Frage unter „Offene Fragen“ in TASK.md notieren

## Fertig, wenn

- Build grün
- TASK.md aktualisiert (Status + Log)
- Keine unbeabsichtigten visuellen Änderungen
