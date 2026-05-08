# Contributor Recognition & Provenance Report

**Project:** @wendermedia/astro-components
**Current version:** 3.0.0 (2026-05-08)
**Author and steward:** Arnold Wender (Wender Media)
**License (3.0+):** Wender Media Source License v1.0 (`LicenseRef-Wender-Media-Source-1.0`)

---

## Purpose of this document

This file is the project's contributor-recognition and provenance record. It documents:

1. The authorship and stewardship of the codebase.
2. The license history of the project (MIT for 1.x and 2.x, Wender Media Source License for 3.x and later).
3. The privacy and security audit performed before each public release.
4. The component inventory at the time the project was first made publicly available.
5. The deployment and distribution history.

It replaces the former `OPEN-SOURCE-REPORT.md` (which framed the project as an open-source release at v2.1.0). With v3.0.0 the project is no longer distributed under an OSI-approved open-source license, but it remains source-available and free for commercial and non-commercial use under the Wender Media Source License v1.0.

---

## Brand information

| Field | Value |
|-------|-------|
| **Company** | Wender Media |
| **Legal Name** | Wender Media &mdash; Arnold Wender |
| **Founded** | 2007 |
| **Location** | Halle (Saale), Germany |
| **Website** | [wendermedia.com](https://www.wendermedia.com) |
| **Author** | Arnold Wender |
| **Author Website** | [arnoldwender.com](https://arnoldwender.com) |
| **GitHub** | [@arnoldwender](https://github.com/arnoldwender) |
| **Services** | Web Development, SEO, Accessibility (BFSG/WCAG), UX/Neuromarketing |
| **Tech Stack** | Astro, WordPress, React, TypeScript |
| **Credentials** | 158+ projects, 18+ years experience, Lighthouse 98+ scores |

---

## License history

| Version range | Released | License | SPDX identifier |
|---------------|----------|---------|-----------------|
| 1.0.0 &ndash; 2.1.0 | 2024 &ndash; 2026-04-06 | MIT License | `MIT` |
| 3.0.0 &ndash; current | 2026-05-08 &ndash; present | Wender Media Source License v1.0 | `LicenseRef-Wender-Media-Source-1.0` |

**Migration note:** Version 2.1.0 remains available on the npm registry under MIT and will not be unpublished. Consumers needing an MIT-licensed version of the library can pin to `@wendermedia/astro-components@2.1.0`. Beginning with version 3.0.0, the project is distributed under the Wender Media Source License v1.0 &mdash; a source-available proprietary license with weak copyleft and a recommended-only attribution clause. See [`LICENSE`](./LICENSE) and [`docs/MIGRATION-2.x-to-3.0.md`](./docs/MIGRATION-2.x-to-3.0.md) for details.

---

## Authorship & contributors

The component library is written and maintained by Arnold Wender (Wender Media). The patterns and components originated from work performed across more than 150 production websites since 2007.

If you have submitted a Contribution to the project (via pull request, patch, issue attachment, or email), thank you. Contributors are recognised in:

- The git history of the [GitHub repository](https://github.com/arnoldwender/wm-project-astro-components).
- The `package.json` `contributors` array, when applicable.
- The release notes in [`CHANGELOG.md`](./CHANGELOG.md).

Per Section 7 of the Wender Media Source License v1.0, Contributions are licensed to Arnold Wender · Wender Media under the same terms as the project itself.

---

## Privacy & security audit

This audit was performed before the v2.1.0 public release on 2026-04-06 and re-confirmed before the v3.0.0 release on 2026-05-08. No new sensitive content has been introduced in the 3.0.0 cycle.

### Sensitive content scan

| Check | Result | Status |
|-------|--------|--------|
| `.env` files in repo | None found | PASS |
| Hardcoded API keys / secrets | None found | PASS |
| Hardcoded passwords / tokens | None found | PASS |
| Client data / PII | None found | PASS |
| Private email addresses (non-author) | None found | PASS |
| Internal URLs / endpoints | None found | PASS |
| Database credentials | None found | PASS |
| SSH keys or certificates | None found | PASS |
| `.env` in `.gitignore` | Yes, properly excluded | PASS |
| `.npmrc` publish safety | `access=public` for the `@wendermedia` scope | PASS |

### Component content analysis

All 158 components contain only:

- Generic, reusable UI/UX code
- Design token references (CSS custom properties)
- TypeScript interfaces and props
- Accessibility (WCAG 2.1 AA) patterns
- GDPR/DSGVO consent patterns
- Schema.org structured data helpers

**No proprietary business logic, client data, or sensitive information was found.**

---

## Changes performed at v2.1.0 (open-source release, 2026-04-06)

### Copyright headers (158 .astro files + 18 index.ts files)

**Before:** 35 files had "WenderMedia Astro Components" brand, 115 had no branding.

**After:** All 158 .astro files and 18 index.ts files now include a standardized copyright header.

The MIT-era header was:

```text
@copyright 2007-2026 Wender Media - Arnold Wender. MIT License.
@see https://github.com/arnoldwender/wm-project-astro-components
```

For files modified or added in 3.0.0 and later, the header is updated to:

```text
@copyright 2007-2026 Arnold Wender · Wender Media. All Rights Reserved.
@license LicenseRef-Wender-Media-Source-1.0
@see https://github.com/arnoldwender/wm-project-astro-components
```

### New files created at v2.1.0

| File | Purpose |
|------|---------|
| `LICENSE` (MIT, then replaced at v3.0.0) | License text |
| `CODE_OF_CONDUCT.md` | Contributor Covenant v2.1 |
| `CONTRIBUTING.md` | Contribution guidelines, coding standards, testing |

### Files updated at v2.1.0

| File | Changes |
|------|---------|
| `README.md` | Complete rewrite for public audience. Includes badges, component catalog, code examples, design tokens guide, testing docs, WordPress integration, project structure, author info |
| `package.json` | `license`: PROPRIETARY -> MIT. Added: `homepage`, `repository`, `bugs`, `funding` fields |
| `.npmrc` | Changed from `access=restricted` + GitHub Package Registry to `access=public` |
| `SECURITY.md` | Updated date |
| `index.ts` | Added copyright + repository link |
| `src/**/index.ts` (18 files) | Added copyright header block |
| `src/**/*.astro` (158 files) | Added brand name + copyright + repo link |

---

## Changes performed at v3.0.0 (license model change + Astro 6, 2026-05-08)

### License

| File | Change |
|------|--------|
| `LICENSE` | Replaced MIT text with the full Wender Media Source License v1.0 |
| `NOTICE` | New file. Authorship, trademark, third-party-component, and recommended-attribution disclaimers |
| `package.json` | `license`: `MIT` -> `LicenseRef-Wender-Media-Source-1.0`. Added `LICENSE` and `NOTICE` to the `files` array so they ship in the npm tarball |
| `index.ts` | Header updated to reference the new license |
| `CONTRIBUTING.md` | License-model section rewritten; component-header template updated |
| `README.md` | License section rewritten; new "Attribution (Recommended)" section; v3 framing |

### Astro 6 / Tailwind 4 / Storybook 10

See [`CHANGELOG.md`](./CHANGELOG.md) for the full Astro-6 / Tailwind-4 / Storybook-10 dependency matrix.

### Renamed

| Before | After | Reason |
|--------|-------|--------|
| `OPEN-SOURCE-REPORT.md` | `CONTRIBUTOR-REPORT.md` | The 3.0.0 license is not OSI-approved open-source. The document is reframed as a contributor-recognition and provenance record |

---

## Component inventory (158 components)

### By category

| Category | Count | Key components |
|----------|-------|----------------|
| **accessibility** | 12 | AccessibilityToolbar, BackToTop, CookieConsent, FocusTrap, FontResizer, LanguageSwitcher, LiveRegion, ReducedMotion, ScreenReaderOnly, SkipLinks, TextToSpeech, ThemeToggle |
| **content** | 3 | ReadingProgress, ShareBar, TableOfContents |
| **design-system** | 1 | DesignSystemProvider |
| **ecommerce** | 5 | AddToCartButton, Cart, ProductCard, ProductQuickView, Wishlist |
| **forms** | 3 | Contact, ContactForm, Newsletter |
| **gallery** | 1 | BeforeAfter |
| **images** | 1 | OptimizedImage |
| **layout** | 2 | Header, Footer |
| **layouts** | 15 | ArticleLayout, BentoCard, BentoGrid, DashboardLayout, DocsLayout, HeroLayout, LandingLayout, LandingSection, MagazineCard, MagazineLayout, NewspaperLayout, PortfolioItem, PortfolioLayout, ProductGridLayout, SplitLayout |
| **maps** | 2 | GoogleMap, OpenStreetMap |
| **media** | 3 | AudioPlayer, ImageGallery, VideoPlayer |
| **navigation** | 4 | Breadcrumbs, MobileNav, Pagination, Sidebar |
| **products** | 1 | ProductCard |
| **sections** | 80+ | Hero, CTA, Pricing, Team, Testimonials, FAQ, Features, Stats, Blog, Gallery, Contact, Timeline, Awards, Careers, CaseStudy, Comparison, Integrations, LogoCloud, Maintenance, Newsletter, Search, Video, and many more |
| **seo** | 8 | Breadcrumbs, CanonicalURL, HreflangTags, JsonLD, OpenGraph, RichSnippets, SEO, TwitterCard |
| **social** | 2 | SocialFollow, SocialShare |
| **ui** | 14 | Accordion, AccordionItem, Alert, Avatar, Badge, CommandGroup, CommandItem, CommandPalette, Drawer, Dropdown, Modal, Progress, Skeleton, Tab, TabPanel, Tabs, Toast, Tooltip |

### Unique selling points

1. **GDPR/DSGVO-first**: Consent gates on YouTube, Google Maps, analytics
2. **BFSG 2025 ready**: German accessibility law compliance built in
3. **Schema.org integration**: FAQ, Product, BreadcrumbList, LocalBusiness schemas
4. **Design token system**: Style Dictionary with CSS, SCSS, JS, JSON outputs
5. **WordPress headless**: First-class WordPress integration
6. **CLI scaffolding**: `create-wm-component` for quick project setup
7. **Storybook**: Interactive documentation
8. **Testing suite**: Vitest + axe-core for a11y testing

---

## Distribution history

| Date | Event |
|------|-------|
| 2026-04-06 | GitHub repository made public; published as `@wendermedia/astro-components@2.1.0` (MIT) |
| 2026-04-06 | Storybook deployed to https://astro.wendermedia.com (158 stories) |
| 2026-04-06 | GitHub topics added: astro, components, accessibility, gdpr, design-system, typescript, wcag, astro-components, design-tokens, seo |
| 2026-05-08 | License model changed to Wender Media Source License v1.0; published as `@wendermedia/astro-components@3.0.0` |

### Optional next steps

1. **GitHub Sponsors**: Set up at github.com/sponsors/arnoldwender
2. **Social announcement**: Share v3.0.0 release notes on X, LinkedIn, Dev.to, etc.

---

## Verification checklist (re-confirmed at v3.0.0)

- [x] All components have copyright headers
- [x] All `index.ts` files have copyright headers
- [x] `LICENSE` file contains the full Wender Media Source License v1.0 text (no placeholders)
- [x] `NOTICE` file present, with authorship and trademark statements
- [x] `README.md` is comprehensive and current (Astro 6, Tailwind 4, Node 22.12+)
- [x] `CONTRIBUTING.md` describes the new license model
- [x] `CODE_OF_CONDUCT.md` (Contributor Covenant v2.1) present
- [x] `SECURITY.md` with reporting guidelines
- [x] `package.json` declares `LicenseRef-Wender-Media-Source-1.0` and ships `LICENSE` + `NOTICE` in the `files` array
- [x] `.npmrc` allows public publish to the `@wendermedia` scope
- [x] No secrets, credentials, or PII in codebase
- [x] No client-specific data
- [x] `.gitignore` excludes sensitive files

---

*Report generated 2026-04-05 (initial open-source release). Re-issued 2026-04-06 after public release of v2.1.0. Reframed and re-issued 2026-05-08 alongside v3.0.0 (Astro 6 + Wender Media Source License v1.0).*

Copyright (c) 2007-2026 Arnold Wender · Wender Media. All Rights Reserved.
