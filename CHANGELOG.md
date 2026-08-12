# Changelog

## 4.1.0

### Minor Changes

- Toolchain brought current on Astro 7.2 — **no public API change**.

  The peer range stays `astro@^6.0.0 || ^7.0.0`, and `exports`, `optionalDependencies` and
  `peerDependencies` are untouched. Consumers need to do nothing; this is an internal
  toolchain and security update.

  **Dependencies**

  - `astro` 7.0 → **7.2.1**, `@astrojs/check` 0.9.9 → **0.9.10**.
  - `eslint-plugin-astro` 2 → **3.1.0**, with the peers its 3.x line requires:
    `@typescript-eslint/parser` and `typescript-eslint` → **8.67.0** (`>=8.61.0`).
    `eslint` was already on the required `>=10`.
  - `typescript` 5.9 → **6.0.3**, pinned with `~` rather than `^`: `typescript-eslint@8.67.0`
    declares `typescript >=4.8.4 <6.1.0`, so a caret range would float past that ceiling the
    day TS 6.1 ships. `@astrojs/check@0.9.10` accepts `^5 || ^6`; TypeScript 7 is **not**
    reachable until it widens that peer.
  - Removed the `overrides.vite: "^8"` pin. It no longer does anything — `astro@7.2.1`
    depends on `vite@^8.0.13` directly, and vitest, `@tailwindcss/vite` and Storybook all
    accept 8 — while a stale major pin in `overrides` is the known cause of undeployable
    builds on the next Astro major. Resolution verified: a single `vite@8.2.1`, no duplicates.

  **Security**

  `npm audit` goes from **11 advisories (6 high, 5 moderate) to 0**. The high findings
  (`brace-expansion`, `fast-uri`, `js-yaml`, `nanoid`, `postcss`, `svgo`) were transitive
  through the `astro` and `@astrojs/language-server` chains that this bump advances. No
  `--force` was used.

  **Verification** (183 components / 386 files): `astro check` 0 errors, 0 warnings ·
  `eslint` 0 errors, 90 warnings (unchanged from the pre-bump baseline) · vitest 10/10 ·
  `tokens:build` and `build-storybook` both green.

## 4.0.0

### Major Changes

- d7b9a3f: Migrate to **Astro 7 + Vite 8** (Node 22.12+). The peer range is now `astro@^6.0.0 || ^7.0.0` — every component compiles clean under both majors, so one v4 line serves Astro-6 and Astro-7 apps. Most consumers need no code changes.

  **What changed**

  - Bumped official integrations to their Astro-7 majors (`@astrojs/mdx` 7, `react` 6, `vue` 7, `svelte` 9, `solid-js` 7, `sitemap` 3.7.3); `eslint-plugin-astro` 2; added `@astrojs/check`.
  - `gsap` is now an **optional peer** (only the `Hero` animated variant uses it, behind a graceful fallback).
  - Whitespace between inline elements now follows Astro 7's `compressHTML: 'jsx'` default — shipped components are unaffected (they space via design tokens).
  - **Removed 4 previously-broken i18n barrel exports** that were never implemented (`t`, `getTranslation`, `hasTranslation`, `getAllTranslations`) — they resolved to `undefined` in 3.x. Use `createTranslator()` / `getAvailableLocales()` instead. All other i18n helpers are preserved and now resolve to real implementations.
  - Reconciled the public export surface (analytics, pages, navigation, i18n): advertised names like `NotFoundPage`, `ConsentSettings`, `getConsentSettings`, `MobileNavItem` are kept as aliases of their canonical implementations.
  - Internal type-hardening across component `<script>` blocks and fixed two latent markup bugs; `astro check` and `lint` now pass with zero errors.

  **License unchanged** — Wender Media Source License v1.0 (source-available). See `docs/MIGRATION-3.x-to-4.0.md`.

All notable changes to @wendermedia/astro-components will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.0.1] - 2026-05-08

### Changed

- **Keywords expanded** for Astro integrations catalogue auto-discovery. Added 9 keywords matching official Astro category taxonomy ([docs](https://docs.astro.build/en/guides/integrations/#categories)):
  - **Images + Media** (new category match): `image`, `images`, `media`, `video`, `audio` — reflects existing `OptimizedImage` (with LQIP), `ImageGallery`, `VideoPlayer` (DSGVO consent gate), `AudioPlayer`, `BeforeAfter` slider components
  - **CSS + UI** reinforcement: `css`
  - **Performance + SEO** reinforcement: `performance`, `optimization`
  - **Accessibility** reinforcement: `a11y` (synonym)

The package now appears in 4 Astro integrations catalogue categories (was 3): Accessibility, CSS + UI, Images + Media, Performance + SEO.

No code changes. No breaking changes. Pure metadata patch.

## [3.0.0] - 2026-05-08

### Breaking Changes

- **License changed:** MIT → Wender Media Source License v1.0 (source-available proprietary with weak copyleft and a recommended-only attribution requirement). v2.1.0 remains available on npm under MIT for legacy consumers.
- **Astro 6 required:** Dropped Astro 4/5 peer-dependency support. Consumers must upgrade to Astro 6.0 or higher.
- **Node 22.12+ required:** Dropped Node 18/20 support; `engines.node` now `>=22.12.0`.
- **Templates:** All templates now use Astro 6 patterns (`ClientRouter`, Content Layer API, `@tailwindcss/vite`). Consumers copying templates will need to follow Astro 6 patterns.
- **Storybook 10:** Internal dev-tool upgraded from 8.x to 10.3.x (does not affect consumers; Storybook is `devDependencies` only).
- **`@astrojs/tailwind` removed** from `optionalDependencies` (deprecated, no Astro 6 support). Replaced with `@tailwindcss/vite` + `tailwindcss@^4`.

### Added

- `astro-component` keyword in `package.json` (enables Astro integrations catalogue auto-discovery).
- `astro6`, `tailwind`, `tailwind4` keywords for discoverability.
- `NOTICE` file with authorship, trademark and third-party-component disclaimers.
- `LICENSE` and `NOTICE` added to the `files` array so they ship in the npm tarball.
- `engines.node` field declaring the Node 22.12+ requirement.
- `overrides.vite` field to defensively pin Vite to `^7 || ^8` across the dependency tree.
- `optionalDependencies`: `@tailwindcss/vite@^4.2.4`, `tailwindcss@^4.2.4`.
- [`docs/MIGRATION-2.x-to-3.0.md`](./docs/MIGRATION-2.x-to-3.0.md) &mdash; comprehensive consumer migration guide.

### Changed

- `peerDependencies.astro`: `^4.0.0 || ^5.0.0` → `^6.0.0`.
- All `@astrojs/*` integrations bumped to Astro-6-compatible versions:
  - `@astrojs/mdx`: `^3.1.9` → `^5.0.4`
  - `@astrojs/partytown`: `^2.1.5` → `^2.1.7`
  - `@astrojs/react`: `^3.6.3` → `^5.0.4`
  - `@astrojs/sitemap`: `^3.7.1` → `^3.7.2`
  - `@astrojs/solid-js`: `^4.4.4` → `^6.0.1`
  - `@astrojs/svelte`: `^7.2.5` → `^8.1.0`
  - `@astrojs/vue`: `^4.5.3` → `^6.0.1`
- Dev tooling bumped:
  - `astro`: `^5.18.1` → `^6.3.1`
  - `vitest`: `^4.1.1` → `^4.1.5`
  - `@vitest/coverage-v8`: `^4.1.1` → `^4.1.5`
  - `@vitest/ui`: `^2.1.9` → `^4.1.5` (was on a stale major)
  - `happy-dom`: `^20.8.8` → `^20.9.0`
  - `eslint`: `^10.2.0` → `^10.3.0`
  - `eslint-plugin-astro`: `^1.6.0` → `^1.7.0`
  - `@axe-core/playwright`: `^4.11.1` → `^4.11.3`
  - `axe-core`: `^4.11.1` → `^4.11.4`
  - `@typescript-eslint/parser`, `typescript-eslint`: `^8.58.0` → `^8.59.2`
  - `@changesets/cli`: `^2.30.0` → `^2.31.0`
- Storybook stack upgraded to v10.3.x:
  - `storybook`: `^8.6.18` → `^10.3.6`
  - `@storybook/web-components`: `^8.0.0` → `^10.3.6`
  - `@storybook/web-components-vite`: `^8.6.18` → `^10.3.6`
  - `@storybook/addon-a11y`: `^8.6.18` → `^10.3.6`
  - `@storybook/addon-links`: `^8.6.18` → `^10.3.6`
- README rewritten for Astro 6: badges, install instructions, Requirements section, license framing, link to migration guide.
- `CONTRIBUTING.md` updated to reference the Wender Media Source License v1.0 instead of MIT.
- `OPEN-SOURCE-REPORT.md` renamed to `CONTRIBUTOR-REPORT.md` and reframed as a contributor-recognition document under the new license model.
- `llms.txt` bumped to 3.0.0; updated tech-stack and license sections.

### Removed

- `@astrojs/tailwind` (use `@tailwindcss/vite` + `tailwindcss@^4` instead).
- `@storybook/addon-essentials` (empty package since Storybook 9, removed in Storybook 10).
- `@storybook/addon-interactions` (empty package since Storybook 9, removed in Storybook 10).
- `@storybook/blocks` (empty package since Storybook 9, removed in Storybook 10).
- `OPEN-SOURCE-REPORT.md` (replaced by `CONTRIBUTOR-REPORT.md`).
- MIT License text from `LICENSE` (consumers needing the MIT-licensed version should pin `@wendermedia/astro-components@2.1.0`).

### Migration Guide

See [`docs/MIGRATION-2.x-to-3.0.md`](./docs/MIGRATION-2.x-to-3.0.md) for detailed upgrade instructions, including the `<ViewTransitions />` → `<ClientRouter />` swap, Content Layer API migration, Tailwind 4 setup, and the license-model explanation.

## [2.1.0] - 2026-04-06

### Added

- 8 new section components (158 total, up from 150)
- Storybook deployment at https://wm-astro-components.netlify.app
- `llms.txt` for LLM context and discoverability
- `OPEN-SOURCE-REPORT.md` with full release audit
- `CONTRIBUTING.md` with coding standards and component guidelines
- `CODE_OF_CONDUCT.md` (Contributor Covenant v2.1)

### Changed

- Open-source release: repository set to public, published to npm
- All 158 components now carry standardized copyright headers
- README rewritten for open-source audience with badges, examples, and full catalog
- `package.json` license changed from PROPRIETARY to MIT with full metadata

## [2.0.0] - 2026-04-06

### Added

#### Core Components

- **Layout Components**: BaseLayout, Header, Footer, Container, Grid, Section
- **SEO Components**: SEOHead, SchemaOrg, OpenGraph, TwitterCard, Canonical
- **Accessibility Components**: CookieConsent, SkipToContent, FocusTrap, A11yAnnouncer

#### Navigation Components

- **Breadcrumbs**: Accessible breadcrumb navigation with Schema.org support
- **Pagination**: Server-side pagination with SEO-friendly links
- **TableOfContents**: Auto-generated table of contents for long content
- **ScrollToTop**: Animated scroll-to-top button

#### Content Components

- **Accordion**: WCAG-compliant accordion with keyboard navigation
- **Tabs**: Accessible tab interface with ARIA support
- **Modal**: Focus-trapped modal dialogs with backdrop

#### E-commerce Components

- **Cart**: Shopping cart with localStorage persistence
- **Wishlist**: Product wishlist with toggle functionality
- **ProductCard**: Product display with hover effects and badges
- **ProductQuickView**: Modal-based product quick view
- **AddToCartButton**: Add to cart with loading states

#### Media Components

- **VideoPlayer**: Privacy-first video player (YouTube, Vimeo, native)
- **AudioPlayer**: HTML5 audio player with custom controls
- **ImageGallery**: Lightbox gallery with keyboard navigation

### Developer Experience

- **CLI Tool**: `npx @wendermedia/astro-components create my-project`
- **Design Tokens**: Style Dictionary integration for colors, spacing, typography
- **Testing Utilities**: Vitest setup with axe-core for accessibility testing
- **Storybook**: Component documentation and visual testing

### Changed

- Upgraded to Astro 5.x compatibility
- All components now use CSS custom properties for theming
- Improved TypeScript definitions

### Security

- GDPR-compliant video embeds with consent management
- No third-party tracking by default
- BFSG accessibility compliance

## [1.0.0] - 2024-XX-XX

Initial release with core components.
