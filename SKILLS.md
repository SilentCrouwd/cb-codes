# SKILLS.md

Übersicht der Projekt-Skills. Die Skills selbst liegen in `.claude/skills/<name>/SKILL.md` und werden von Claude Code automatisch erkannt (auch per `/<name>` aufrufbar).

| Skill | Wann | Datei |
| --- | --- | --- |
| `refactor-step` | Einen Punkt aus TASK.md umsetzen | [SKILL.md](.claude/skills/refactor-step/SKILL.md) |
| `link-check` | Nach Umbenennungen, vor Deploy: Links, Anker, Assets prüfen | [SKILL.md](.claude/skills/link-check/SKILL.md) |
| `token-check` | Bei Style-Änderungen: Design-Tokens, Darkmode, Tailwind v4 | [SKILL.md](.claude/skills/token-check/SKILL.md) |
| `seo-meta` | Neue Seite / neuer Inhalt: Meta-Tags | [SKILL.md](.claude/skills/seo-meta/SKILL.md) |
| `new-dossier` | Neues Muster-Projekt als Dossier-Seite anlegen | [SKILL.md](.claude/skills/new-dossier/SKILL.md) |
| `site-polish` | Copy, Layout, CTA-Klarheit verfeinern | [SKILL.md](.claude/skills/site-polish/SKILL.md) |
| `frontend-design` | Gestaltung festlegen/umbauen (extern: [anthropics/skills](https://github.com/anthropics/skills/tree/main/skills/frontend-design), Apache-2.0) – Ergebnis in [DESIGN.md](DESIGN.md) | [SKILL.md](.claude/skills/frontend-design/SKILL.md) |

## Neuen Skill anlegen

1. Ordner `.claude/skills/<name>/` anlegen
2. `SKILL.md` mit Frontmatter:
   ```markdown
   ---
   name: <name>
   description: "Use when: <wann der Skill greift>"
   ---
   ```
3. Inhalt: Ablauf → Regeln → „Fertig, wenn“
4. Zeile in dieser Tabelle ergänzen
