---
"@wendermedia/astro-components": major
---

Migrate to **Astro 7 + Vite 8** (Node 22.12+). The peer range is now `astro@^6.0.0 || ^7.0.0` — every component compiles clean under both majors, so one v4 line serves Astro-6 and Astro-7 apps. Most consumers need no code changes.

**What changed**

- Bumped official integrations to their Astro-7 majors (`@astrojs/mdx` 7, `react` 6, `vue` 7, `svelte` 9, `solid-js` 7, `sitemap` 3.7.3); `eslint-plugin-astro` 2; added `@astrojs/check`.
- `gsap` is now an **optional peer** (only the `Hero` animated variant uses it, behind a graceful fallback).
- Whitespace between inline elements now follows Astro 7's `compressHTML: 'jsx'` default — shipped components are unaffected (they space via design tokens).
- **Removed 4 previously-broken i18n barrel exports** that were never implemented (`t`, `getTranslation`, `hasTranslation`, `getAllTranslations`) — they resolved to `undefined` in 3.x. Use `createTranslator()` / `getAvailableLocales()` instead. All other i18n helpers are preserved and now resolve to real implementations.
- Reconciled the public export surface (analytics, pages, navigation, i18n): advertised names like `NotFoundPage`, `ConsentSettings`, `getConsentSettings`, `MobileNavItem` are kept as aliases of their canonical implementations.
- Internal type-hardening across component `<script>` blocks and fixed two latent markup bugs; `astro check` and `lint` now pass with zero errors.

**License unchanged** — Wender Media Source License v1.0 (source-available). See `docs/MIGRATION-3.x-to-4.0.md`.
