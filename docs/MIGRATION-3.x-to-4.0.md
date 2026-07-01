# Migration Guide: 3.x &rarr; 4.0

> **TL;DR.** v4.0.0 moves the library onto **Astro 7 + Vite 8** (Node 22.12+). The peer range is **`astro@^6.0.0 || ^7.0.0`**, so **most consumers need no code changes** — bump the package, and upgrade your app to Astro 7 when you are ready. The **license is unchanged** (Wender Media Source License v1.0, source-available). If you can not move yet, pin `@wendermedia/astro-components@3.0.1` (Astro 6).

This guide covers every change in 4.0.0, why it was made, and how to apply it to a project consuming `@wendermedia/astro-components@^3`.

---

## Table of contents

1. [Why upgrade](#1-why-upgrade)
2. [Pre-flight checklist](#2-pre-flight-checklist)
3. [Step-by-step upgrade](#3-step-by-step-upgrade)
4. [Breaking changes that affect your code](#4-breaking-changes-that-affect-your-code)
5. [License model (unchanged)](#5-license-model-unchanged)
6. [Staying on 3.x](#6-staying-on-3x)

---

## 1. Why upgrade

### Astro 7 features you unlock

- **Rust compiler (default and only)** — faster, standards-aligned HTML parsing. Astro's Go compiler is gone.
- **Vite 8** — faster dev server and production bundler.
- **Stable logging, queued rendering, advanced routing, and route caching** — all former experimental flags are now the default behaviour.
- **`compressHTML: 'jsx'` default** — JSX-style whitespace handling, consistent with React-family renderers.

### Dual-major peer range

v4 declares `astro@^6.0.0 || ^7.0.0`. Every component was verified to compile clean under **both** majors, so a single v4 line serves your Astro-6 apps today and your Astro-7 apps after you upgrade. No forced lockstep.

---

## 2. Pre-flight checklist

| Requirement | Check |
|---|---|
| Node **22.12+** | `node -v` |
| Astro **6 or 7** | `npx astro --version` |
| Vite **8** (only if on Astro 7) | resolved automatically by Astro 7 |

If you are upgrading your app to Astro 7 at the same time, follow the official guide first: <https://docs.astro.build/en/guides/upgrade-to/v7/>.

---

## 3. Step-by-step upgrade

```bash
# 1. Bump the package
npm i @wendermedia/astro-components@^4.0.0

# 2. (Optional, recommended) upgrade your app to Astro 7
npx @astrojs/upgrade

# 3. Reinstall clean if you changed Astro majors
rm -rf node_modules package-lock.json .astro dist && npm install

# 4. Type-check / build
npx astro check && npm run build
```

If you stay on Astro 6, only step 1 is required — v4 runs on Astro 6 too.

### Optional peers

- **`gsap`** is now declared as an **optional peer**. Only the `Hero` component's animated variant uses it, behind a graceful `try/catch`. Install `gsap@^3.11.0` only if you want that enhancement; otherwise `Hero` degrades cleanly without it.

---

## 4. Breaking changes that affect your code

### 4.1 Whitespace between inline elements (`compressHTML: 'jsx'`)

Astro 7 strips whitespace between elements using JSX rules by default. If you place two inline elements on separate lines and rely on the HTML space between them, add an explicit `{' '}`:

```astro
<span>Label</span> <strong>Value</strong>   <!-- one line: fine -->

<span>Label</span>{' '}                       <!-- separate lines: add {' '} -->
<strong>Value</strong>
```

WM components space via CSS/design tokens (`gap`, margins), so shipped components are unaffected. This only matters for **your own** inline markup. To keep Astro-6 behaviour globally, set `compressHTML: true` in your `astro.config`.

### 4.2 Removed i18n helpers (never implemented)

Four names were exported from the package barrel in 3.x but had **no implementation** (they resolved to `undefined` at runtime). They are removed in 4.0:

| Removed | Use instead |
|---|---|
| `t` | `createTranslator(locale)(key)` |
| `getTranslation` / `hasTranslation` | `createTranslator(locale)(key)` (returns the key on miss) |
| `getAllTranslations` | `getAvailableLocales()` / `defaultTranslations` |

**Everything else in the i18n surface is preserved**, including `detectLocale`, `getPreferredLocale`, `getTextDirection`, `isRTL`, `getLocalizedUrl`, `generateHreflangLinks`, `addTranslations`, and the `TranslationKey` / `TranslatorFunction` types — these now resolve to real implementations (previously they were also broken barrel exports).

### 4.3 Everything else is source-compatible

Component names, props, subpath exports (`./sections`, `./forms`, `./design-system/tokens/*`, framework integrations, …), and public analytics/page/navigation exports are **unchanged** — advertised names like `NotFoundPage`, `ErrorPage`, `ConsentSettings`, `getConsentSettings`, `MobileNavItem` are preserved as aliases of the canonical implementations.

---

## 5. License model (unchanged)

v4.0.0 keeps the **Wender Media Source License v1.0** (`SPDX: LicenseRef-Wender-Media-Source-1.0`, © 2007–2026 Arnold Wender · Wender Media). Source-available, free for commercial and non-commercial use, cannot be relicensed under more permissive terms. No change from v3. See `LICENSE`.

---

## 6. Staying on 3.x

If you can not move to Astro 7 and prefer not to run on the `^6 || ^7` line, pin:

```bash
npm i @wendermedia/astro-components@3.0.1
```

3.x remains available on npm (Astro 6). It will receive critical fixes only; new components and improvements land on 4.x.
