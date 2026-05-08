# Migration Guide: 2.x &rarr; 3.0

> **TL;DR.** v3.0.0 is an Astro 6 + Tailwind 4 + Node 22.12+ release with a new license model (Wender Media Source License v1.0, source-available, free for commercial and non-commercial use, attribution recommended). If you can not upgrade today, pin `@wendermedia/astro-components@2.1.0` &mdash; it stays on npm under MIT.

This guide walks you through every breaking change in version 3.0.0, why each change was made, and how to apply it to a project that currently consumes `@wendermedia/astro-components@^2`.

---

## Table of contents

1. [Why upgrade](#1-why-upgrade)
2. [Pre-flight checklist](#2-pre-flight-checklist)
3. [Step-by-step upgrade](#3-step-by-step-upgrade)
4. [Breaking changes that affect your code](#4-breaking-changes-that-affect-your-code)
5. [License model: Wender Media Source License v1.0](#5-license-model-wender-media-source-license-v10)
6. [Recommended attribution](#6-recommended-attribution)
7. [Where to get help](#7-where-to-get-help)
8. [Staying on 2.x](#8-staying-on-2x)

---

## 1. Why upgrade

### Astro 6 features you unlock

- **`<ClientRouter />`** &mdash; the renamed and stable replacement for `<ViewTransitions />`, with better fallback behaviour and predictable lifecycle hooks.
- **Content Layer API** &mdash; the modern replacement for the legacy `type: 'content'` / `type: 'data'` collection schema. Loaders (`glob()`, `file()`) make any file source into a typed collection, and the `id` field replaces the brittle `slug` field.
- **Native Vite 7/8** &mdash; faster dev server, smaller production bundles, modern Lightning CSS pipeline.
- **Smaller core** &mdash; Astro 6 trimmed deprecated APIs; cold-start dev is noticeably quicker.

### Tailwind 4 in templates

- **`@tailwindcss/vite`** is the official Tailwind 4 integration for Vite/Astro projects. The previous `@astrojs/tailwind` integration is EOL and has no Astro 6 release.
- **`@theme` blocks** in CSS replace `tailwind.config.js` for token definitions; runs at build time with zero JS overhead.

### License clarity

- **Free for commercial and non-commercial use, no tier limits** &mdash; the new license is materially as permissive for *use* as MIT was.
- **Cannot be relicensed under more permissive terms** &mdash; this protects the project, its contributors, and your downstream users from having patches absorbed into incompatible licensing.
- **Attribution is recommended, not required** &mdash; you can ship without a badge and still be in compliance.
- **Patent grant + 30-day cure window** &mdash; clearer legal posture than MIT for production use.

---

## 2. Pre-flight checklist

Before you start the upgrade, verify the following in your project:

| Requirement | Check command |
|-------------|---------------|
| **Node.js 22.12 or higher** | `node --version` &mdash; must report `v22.12.x` or higher |
| **Astro 6.0 or higher** in your project | `npm ls astro` &mdash; must show `astro@6.x` |
| **No use of removed Astro APIs** | `grep -r "Astro.glob\|emitESMImage\|astro:schema" src/` &mdash; must be empty |
| **No `<ViewTransitions />` in your own pages** | `grep -r "ViewTransitions" src/` &mdash; rewrite to `<ClientRouter />` |
| **Backup or feature branch** | `git checkout -b chore/upgrade-wm-components-3` |

Optional but recommended:

- A clean `npm test` baseline before you touch anything.
- A working production deploy of the current 2.x version, so you can compare visual output post-upgrade.

---

## 3. Step-by-step upgrade

### 3.1 Upgrade Node.js

If you use `nvm`, set the project version:

```bash
echo "22.12.0" > .nvmrc
nvm install
nvm use
```

If you use `volta`:

```bash
volta pin node@22.12.0
```

Verify:

```bash
node --version
# v22.12.x or higher
```

### 3.2 Upgrade Astro

```bash
npx @astrojs/upgrade
# or manually:
npm install astro@^6
```

Run the official Astro 6 codemods if your project has source files affected by removed APIs:

```bash
npx @astrojs/upgrade --dry-run
```

Address any errors before upgrading the components package.

### 3.3 Upgrade `@wendermedia/astro-components`

```bash
npm install @wendermedia/astro-components@^3
```

If you consume optional integrations from this package, also bump them:

```bash
npm install \
  @astrojs/mdx@^5 \
  @astrojs/react@^5 \
  @astrojs/sitemap@^3 \
  @astrojs/solid-js@^6 \
  @astrojs/svelte@^8 \
  @astrojs/vue@^6 \
  @astrojs/partytown@^2
```

### 3.4 Replace `@astrojs/tailwind` with `@tailwindcss/vite`

Remove the old integration:

```bash
npm uninstall @astrojs/tailwind
```

Install Tailwind 4:

```bash
npm install @tailwindcss/vite tailwindcss@^4
```

Update your `astro.config.mjs`:

```diff
 import { defineConfig } from 'astro/config';
-import tailwind from '@astrojs/tailwind';
+import tailwindcss from '@tailwindcss/vite';
 import mdx from '@astrojs/mdx';
 import sitemap from '@astrojs/sitemap';

 export default defineConfig({
-  integrations: [tailwind(), mdx(), sitemap()],
+  integrations: [mdx(), sitemap()],
+  vite: {
+    plugins: [tailwindcss()],
+  },
 });
```

If you had a `tailwind.config.js`, migrate the relevant tokens to a `@theme` block in your global CSS:

```diff
-/* tailwind.config.js (delete) */
-module.exports = {
-  theme: {
-    extend: {
-      colors: { brand: '#1a73e8' },
-    },
-  },
-};

+/* src/styles/global.css */
+@import "tailwindcss";
+
+@theme {
+  --color-brand: #1a73e8;
+}
```

Then import `global.css` once from your base layout.

### 3.5 Migrate Content Collections to the Content Layer API

Move the config file:

```bash
git mv src/content/config.ts src/content.config.ts
```

Rewrite each collection. Example `blog`:

```diff
-import { defineCollection, z } from 'astro:content';
+import { defineCollection } from 'astro:content';
+import { z } from 'astro/zod';
+import { glob } from 'astro/loaders';

 const blog = defineCollection({
-  type: 'content',
+  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
   schema: z.object({
     title: z.string(),
-    email: z.string().email().optional(),
-    website: z.string().url().optional(),
+    email: z.email().optional(),
+    website: z.url().optional(),
   }),
 });

 export const collections = { blog };
```

For data collections (formerly `type: 'data'`), use `file()`:

```ts
import { file } from 'astro/loaders';

const authors = defineCollection({
  loader: file('./src/content/authors/_authors.json'),
  schema: z.object({ /* ... */ }),
});
```

### 3.6 Replace `<ViewTransitions />` with `<ClientRouter />`

Throughout your own layouts and any custom code that referenced the old import:

```diff
---
-import { ViewTransitions } from 'astro:transitions';
+import { ClientRouter } from 'astro:transitions';
---
 <head>
-  <ViewTransitions />
+  <ClientRouter />
 </head>
```

The package's bundled templates and bundles already do this in 3.0.0; you only need to fix your own code.

### 3.7 RSS feeds: `post.slug` &rarr; `post.id`

If you copied the `bundles/blog/src/pages/rss.xml.ts` template (or wrote a similar feed against `astro:content` entries), update entry references:

```diff
-link: `${context.site}blog/${post.slug}/`,
+link: `${context.site}blog/${post.id}/`,
```

In Astro 6, the Content Layer API uses `id` as the canonical identifier; `slug` no longer exists on collection entries.

### 3.8 Reinstall and rebuild

```bash
rm -rf node_modules package-lock.json
npm install
npm run build
npm test
```

Resolve any remaining type errors surfaced by Astro 6's stricter checking.

---

## 4. Breaking changes that affect your code

### Summary table

| Area | 2.x behaviour | 3.0 behaviour | Action required |
|------|---------------|---------------|-----------------|
| **Astro peer** | `^4 \|\| ^5` | `^6` only | Upgrade Astro to 6 first |
| **Node engine** | not enforced | `>=22.12.0` | Upgrade Node |
| **Tailwind in templates** | `@astrojs/tailwind` (v3 config) | `@tailwindcss/vite` (Tailwind 4 `@theme`) | Swap integration; migrate config to CSS `@theme` |
| **View Transitions** | `<ViewTransitions />` | `<ClientRouter />` | Find/replace in your code |
| **Content Collections** | `type: 'content' \| 'data'` | Content Layer API with `loader: glob() \| file()` | Move `config.ts` &rarr; `content.config.ts`; rewrite collections |
| **Zod email/url** | `z.string().email() / .url()` | `z.email() / z.url()` | Find/replace |
| **Zod import in collections** | `from 'astro:content'` | `from 'astro/zod'` | Update import |
| **Entry identity** | `entry.slug` | `entry.id` | Update RSS feeds and any code reading `.slug` |
| **License** | MIT | Wender Media Source License v1.0 | See [Section 5](#5-license-model-wender-media-source-license-v10) |
| **Storybook (internal)** | 8.x with `addon-essentials`, `addon-interactions`, `blocks` | 10.x; those addons removed | Only relevant if you fork the repo |

### Removed APIs that the package never used (safe)

The 2.x source was already free of `Astro.glob()`, `emitESMImage`, `entry.render()`, `astro:schema` imports, and `theme()` calls in CSS. If your *own* code uses any of these, fix them per the [Astro 6 migration guide](https://docs.astro.build/en/guides/upgrade-to/v6/).

---

## 5. License model: Wender Media Source License v1.0

The full text is in [`LICENSE`](../LICENSE). The short version, applied to the cases you are most likely to care about:

| Scenario | Allowed under WMSL v1.0? |
|----------|--------------------------|
| Use the library in a commercial SaaS product | Yes, no fee |
| Use the library in a free or non-commercial site | Yes, no fee |
| Modify a component for your own use | Yes |
| Distribute a forked copy of the library | Yes, under the same license, with `LICENSE`/`NOTICE` and copyright headers preserved |
| Bundle the library in a paid theme or template you sell | Yes, under the same license, with `LICENSE`/`NOTICE` and copyright headers preserved |
| Relicense your fork under MIT, Apache 2.0, BSD, ISC, MPL, GPL, CC0, public domain, etc. | **No** &mdash; relicensing under a more permissive license is prohibited |
| Remove the `@copyright` headers from the source files | **No** |
| Remove the `author` / `contributors` fields from `package.json` derivatives | **No** |
| Use the names "Wender Media" or "Arnold Wender" in your product name | **No, except for descriptive origin attribution** |
| Use the library without showing a "Built with @wendermedia" badge | **Yes** &mdash; attribution is recommended, not required |

**Important:** the license is *not* OSI-approved open-source. If your organisation has a hard policy of consuming only OSI-approved licenses, pin `@wendermedia/astro-components@2.1.0` instead, which remains MIT.

For the patent grant, termination clause, contributor terms, and the full legal definitions, read [`LICENSE`](../LICENSE) end-to-end.

---

## 6. Recommended attribution

Attribution is **not required** by the license. If you would like to acknowledge the origin of the components, the maintainer suggests one of the following:

### README badge

```markdown
[![Built with @wendermedia/astro-components](https://img.shields.io/badge/built%20with-wendermedia-blue)](https://github.com/arnoldwender/wm-project-astro-components)
```

Renders as: [![Built with @wendermedia/astro-components](https://img.shields.io/badge/built%20with-wendermedia-blue)](https://github.com/arnoldwender/wm-project-astro-components)

### Footer credit

```html
Components by <a href="https://www.wendermedia.com">Wender Media</a>
```

### About / Credits page

> Built with **@wendermedia/astro-components**, a source-available Astro component library by [Wender Media](https://www.wendermedia.com).

Any of the above is welcome. None of them is required.

---

## 7. Where to get help

- **Issues:** [github.com/arnoldwender/wm-project-astro-components/issues](https://github.com/arnoldwender/wm-project-astro-components/issues)
- **Email:** <info@wendermedia.com>
- **Storybook playbook:** [astro.wendermedia.com](https://astro.wendermedia.com)
- **Astro 6 docs:** [docs.astro.build/en/guides/upgrade-to/v6/](https://docs.astro.build/en/guides/upgrade-to/v6/)
- **Tailwind 4 docs:** [tailwindcss.com/docs/v4-beta](https://tailwindcss.com/docs/v4-beta)

When opening an issue about the upgrade, please include:

- Your Node, Astro, and `@wendermedia/astro-components` versions (`npm ls astro @wendermedia/astro-components`).
- The exact error message or unexpected behaviour.
- A minimal reproduction (a stripped-down `astro.config.mjs` and one affected file is usually enough).

---

## 8. Staying on 2.x

If you are not ready to upgrade, you have two options:

### Option A &mdash; pin the latest 2.x

In your `package.json`:

```json
{
  "dependencies": {
    "@wendermedia/astro-components": "2.1.0"
  }
}
```

This locks you to the MIT-licensed Astro 4/5 release. It will receive **no further updates**, including no security patches. Suitable for stable projects that are not under active development.

### Option B &mdash; keep `^2.1.0` with a npm `overrides` block

```json
{
  "dependencies": {
    "@wendermedia/astro-components": "^2.1.0"
  },
  "overrides": {
    "@wendermedia/astro-components": "2.1.0"
  }
}
```

Functionally equivalent to Option A but signals intent to your team that you are deliberately on the legacy line.

In both cases, the Astro 4/5 + MIT version of the package remains available on the npm registry indefinitely.

---

Copyright (c) 2007-2026 Arnold Wender · Wender Media. All Rights Reserved.
Distributed under the [Wender Media Source License v1.0](../LICENSE).
