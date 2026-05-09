# Legal Audit DE — astro.wendermedia.com — 2026-05-09

Repo: `/Users/arnold/Development/wm-project-astro-components`
Live: <https://astro.wendermedia.com> (Storybook playbook)
Stack: Storybook 10 · npm-Library `@wendermedia/astro-components` · Netlify
Auditor: wm-legal-auditor (DE) v1+v2

> **Hilfsmittel-Audit, kein Anwaltsgutachten.**

## 0. Executive summary

| Banda | Cantidad | Categoría |
|---|---|---|
| 🔴 HOCH | 2 (gefixt) | Kein Impressum/Datenschutz auf Storybook-Site (legal pflichtig für DE-kommerziellen Subdomain) ; Templates (`templates/pages/imprint.astro`) zitieren TMG (deprecated) — propagiert Fehler in alle Folgeprojekte |
| 🟡 MITTEL | 0 | — |
| 🟢 NIEDRIG | 1 | `templates/pages/privacy.astro` Inhalt nicht im Detail re-validiert (separater Sprint) |

**Score:** 86/100 nach Sprint-Fixes (vorher 55/100 wegen fehlender Legal-Notice + TMG-Templates).

## 1. Inventar

| Métrica | Valor |
|---|---|
| Site-Typ | Library docs (Storybook playbook) |
| Tracking | npm-Badges, Shields.io (Drittanbieter-Inhalte) |
| Forms | keine |
| Externe Drittdienste | Netlify, GitHub-Badges |
| Sprache(n) | EN (Storybook UI) + DE-Inhalte in Stories |
| User data collection | nicht primär (Storybook-Theme/Layout in localStorage) |

## 2. v1 Befunde

### §5 DDG Impressum — 🔴 → ✅ gefixt
- **Vorher:** Storybook-Site (astro.wendermedia.com) hatte keinen Impressum-Link, keine Legal-Notice. Subdomain ist live → DDG-pflichtig auch wenn Library-Docs.
- **Fix:** `src/Legal.mdx` hinzugefügt — erscheint als Storybook-Tab "Legal/Impressum & Datenschutz". Komplettes Impressum + Datenschutz-Kurzfassung mit WM Halle HQ, USt-IdNr DE253389445, MStV-Verantwortlicher, ODR, LfD Sachsen-Anhalt + komplette Anschrift Magdeburg. Lizenz-Hinweis (Wender Media Source v1.0).

### Templates-Quelle UWG/DDG — 🔴 → ✅ gefixt
- **Vorher:** `templates/pages/imprint.astro` Z. 148, 231, 232 zitiert "§ 5 TMG", "§ 7 Abs. 1 TMG", "§§ 8 bis 10 TMG". Template wird von anderen Projekten kopiert → propagiert obsoletes Recht.
- **Fix:** TMG → DDG in templates/pages/imprint.astro (3 Stellen).

## 3. v2 Deep-Dive

- D1 BFSG: Storybook-Site ist nicht klassische Service-Site; Library-Doku eher unkritisch
- D8 AGB demo: keine `hidrasolutions` ✓
- D9 TrustBadges: keine ✓ (Library-Komponenten haben Stories, aber Storybook-Site selbst ist Doku)
- D10 Workflow-Note: Library, kein Blog ✓ N/A
- License Compliance: Repo-LICENSE ist `LicenseRef-Wender-Media-Source-1.0` ✓ (per global rule)

## 4. Mechanische Fixes

| Datei | Aktion |
|---|---|
| `src/Legal.mdx` | Neu erstellt — Storybook-Tab "Legal/Impressum & Datenschutz" mit komplettem Impressum + Datenschutz-Kurzfassung |
| `templates/pages/imprint.astro` | TMG → DDG (3 Stellen via replace_all) — verhindert Propagation in Folgeprojekte |

## 5. Folge-Sprint-Empfehlungen

1. `templates/pages/privacy.astro` (354 Zeilen) gründlich auditieren — TKG-Verweise prüfen, LfD-Block ergänzen.
2. CONTRIBUTING.md / CODE_OF_CONDUCT.md hinsichtlich UWG-Schreibweise prüfen.
3. Mehrsprachige Versionen (EN/ES) der Templates anlegen.

## 6. Score

- v1: 88/100
- v2: 86/100
- **Gesamt: 86/100** (vorher 55/100, +31)

---

**Hilfsmittel-Audit, kein Anwaltsgutachten.**
