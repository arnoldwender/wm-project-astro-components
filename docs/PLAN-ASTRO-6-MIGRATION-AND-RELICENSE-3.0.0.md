# Sprint Plan — v3.0.0 — Astro 6 Migration + Wender Media Source License

**Fecha:** 2026-05-08
**Author:** Arnold Wender
**Status:** PENDING ARNOLD APPROVAL
**Estimated effort:** 6-9 horas (1-2 días)
**Risk level:** Medium (3 majors simultáneos: license + Astro 6 + Tailwind 4 en templates)

---

## TL;DR

Este NO es un sitio Astro — es una **library** con dos categorías de código:
- **src/ + integrations/** → exposición BAJA a breaking changes (ya verificado: 0 Astro.glob, 0 ViewTransitions, 0 theme() calls, 0 arbitrary syntax)
- **templates/ + bundles/** → exposición ALTA (7 ViewTransitions, 4 legacy content configs, 4 @astrojs/tailwind imports)

Plan: clean major bump 2.1.0 → 3.0.0, drop Astro 4/5 peer support, swap license MIT → Wender Media Source License v1.0, update todos los templates a Astro 6 + Tailwind 4 patterns.

---

## Análisis de exposición (verificado 2026-05-08)

### ✅ Categoría A — Source code (src/, integrations/) — LIMPIO

| Check | Result |
|---|---|
| `Astro.glob()` usage | 0 hits |
| `<ViewTransitions />` usage | 0 hits |
| `entry.render()` / `entry.slug` (Astro entries) | 0 hits |
| `theme()` calls in CSS/Astro | 0 hits |
| Arbitrary value `[--var]` syntax | 0 hits |
| `emitESMImage` / removed APIs | 0 hits |
| `astro:schema` imports | 0 hits |
| WordPress `.slug` references | Safe — REST API, no Astro entry |

**Implicación:** los componentes core de la librería son neutrales a Astro 5/6. La migración del source code es básicamente cosmetic (copyright headers + version bump).

### ⚠️ Categoría B — Templates + Bundles (scaffolds) — TRABAJO REAL

| Pattern | Files affected | Action |
|---|---|---|
| `<ViewTransitions />` → `<ClientRouter />` | 7 files (templates/layouts/*.astro + view-transitions/) | Replace import + JSX |
| Legacy content config `type: 'data'/'content'` | 4 files (templates/content-collections/*.ts) + 4 (bundles/*/src/content/config.ts) | Migrate to Content Layer API with `loader: glob()` + `file()` |
| `z.string().email()/url()` | 18 occurrences across 8 files | Replace with `z.email()` / `z.url()` |
| `z` from `astro:content` | 4 templates | Import from `astro/zod` |
| `@astrojs/tailwind` imports | 4 templates configs + 2 bundles | Swap to `@tailwindcss/vite` |
| `entry.slug` in RSS | bundles/blog/src/pages/rss.xml.ts | `post.slug` → `post.id` |
| `src/content/config.ts` location | 4 bundles | Move to root `src/content.config.ts` |

### ✅ Build/dev tooling — Mostly clean

- **Vitest 4.1.1** ✅ supports Vite 7
- **Storybook 8.x** — dev-only, no afecta consumers, update separable
- **TypeScript 5.9.3** ✅ supports Astro 6
- **No astro.config.mjs en root del paquete** — buena señal (es library, no sitio)

---

## Latest versions verified (2026-05-08)

| Package | Current | Latest | Action |
|---|---|---|---|
| `astro` | peerDep `^4 \|\| ^5` | **6.3.1** | peerDep `^6.0.0` only |
| `@astrojs/mdx` | `^3.1.9` | **5.0.4** | Bump (peer ^6) |
| `@astrojs/partytown` | `^2.1.5` | **2.1.7** | Minor bump |
| `@astrojs/react` | `^3.6.3` | **5.0.4** | Bump (peer ^6) |
| `@astrojs/sitemap` | `^3.7.1` | **3.7.2** | Minor bump (NO major) |
| `@astrojs/solid-js` | `^4.4.4` | **6.0.1** | Bump |
| `@astrojs/svelte` | `^7.2.5` | **8.1.0** | Bump (peer ^6) |
| `@astrojs/vue` | `^4.5.3` | **6.0.1** | Bump (peer ^6) |
| `@astrojs/tailwind` | `^5.1.5` | 6.0.2 ❌ EOL | **REMOVE** (no Astro 6 support) |
| `@tailwindcss/vite` | — | **4.2.4** | **ADD** to optionalDeps |
| `tailwindcss` | — | **4.2.4** | Already implicit; explicit in templates |
| **Node engine** | — | **22.12+** required | Add `engines.node` |

---

## Decisiones arquitecturales recomendadas

### 1. peerDependencies: Clean break ^6.0.0 only ✅

**Pros:** simpler, no compat overhead, mejor signal "we support latest"
**Cons:** consumers en Astro 5 quedan parados en v2.x

**Mitigation:** versión 2.1.0 sigue en npm forever (npm no permite unpublish después de 72h)

### 2. Templates: Astro 6 only ✅

Library 3.0 = Astro 6 only → templates también. Consumers que necesiten templates Astro 5 usan `@wendermedia/astro-components@2.1.0`.

### 3. Tailwind 4 en templates ✅

`@astrojs/tailwind` está EOL (peer-dep'd a astro@^3 || ^4 || ^5, sin v7 planeado). Templates DEBEN usar `@tailwindcss/vite` + `@theme` CSS blocks.

### 4. Version bump: 2.1.0 → 3.0.0 ✅

Major bump justificado por:
- License change (MIT → proprietary attribution) = breaking
- Astro 4/5 peer dropped = breaking
- Tailwind 4 in templates (consumers que copian templates rompen) = breaking

---

## Wender Media Source License v1.0 — Spec resumen

**Modelo:** source-available proprietary con weak copyleft. Inspired by MPL-2.0 structure pero con ownership Wender Media + custom attribution rules.

**Permitido:**
- Uso comercial gratis (sin tier limits)
- Modificación local
- Redistribución bajo misma licencia (weak copyleft)
- Inclusión en proyectos open-source compatibles

**Requerido:**
- Mantener copyright headers en archivos modificados
- Mantener LICENSE file en redistribuciones
- Mantener `author`/`contributors` en `package.json` derivados

**Recomendado (no obligatorio):**
- Badge en README: `[![Built with @wendermedia/astro-components](https://img.shields.io/badge/built%20with-wendermedia-blue)](https://github.com/arnoldwender/wm-project-astro-components)`

**Prohibido:**
- Sublicensing bajo licencia más permisiva (no relicense a MIT/Apache)
- Quitar copyright headers
- Misrepresentar authorship

**Termination:** 30 días para cure breaches. License terminates si no se cumple después.

**Patent grant:** explicit grant similar a Apache 2.0 Section 3 (defensive termination si licensee inicia patent litigation).

---

## Plan de ejecución (sprint workflow — sin commits hasta el final)

### Fase 1: Branch + Backup
```bash
cd node_modules/@wendermedia/astro-components
git checkout -b sprint/astro-6-and-relicense-3.0.0
git tag pre-astro-6-v2.1.0
tar -czf ../wm-project-astro-components-pre-3.0.0-backup.tar.gz --exclude='node_modules' --exclude='.git' .
```

### Fase 2: Relicense
- Replace `LICENSE` → Wender Media Source License v1.0
- Update `package.json`: `"license": "LicenseRef-Wender-Media-Source-1.0"`
- Update `index.ts` copyright header
- Update README.md: agregar sección "Attribution (Recommended)" con badge code
- Update CONTRIBUTING.md: clarify new license model
- Rename `OPEN-SOURCE-REPORT.md` → `CONTRIBUTOR-REPORT.md` con nuevo framing
- Add `NOTICE` file con disclaimers

### Fase 3: Engine + peer deps
```json
"engines": { "node": ">=22.12.0" },
"peerDependencies": { "astro": "^6.0.0" },
"overrides": { "vite": "^7" }
```

### Fase 4: Optional integrations bumps
Update todas las `optionalDependencies` a versiones Astro-6-compat verificadas (ver tabla arriba). Remove `@astrojs/tailwind`, add `@tailwindcss/vite` y `tailwindcss@^4`.

### Fase 5: Templates update (Astro 6 patterns)

**View Transitions (7 files):**
```astro
- import { ViewTransitions } from 'astro:transitions';
+ import { ClientRouter } from 'astro:transitions';

- <ViewTransitions />
+ <ClientRouter />
```

**Content Collections (4 templates + 4 bundles):**
- Move comments: `src/content/config.ts` → `src/content.config.ts`
- Replace pattern:
```ts
- import { defineCollection, z } from 'astro:content';
+ import { defineCollection, reference } from 'astro:content';
+ import { z } from 'astro/zod';
+ import { glob, file } from 'astro/loaders';

const blogCollection = defineCollection({
-  type: 'content',
+  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) => z.object({
    title: z.string(),
-   email: z.string().email().optional(),
+   email: z.email().optional(),
-   website: z.string().url().optional(),
+   website: z.url().optional(),
  }),
});

const authorCollection = defineCollection({
-  type: 'data',
+  loader: file('./src/content/authors/_authors.json'),  // or glob() para múltiples archivos
  schema: z.object({...}),
});
```

**Astro configs (4 templates + 2 bundles):**
```mjs
- import tailwind from '@astrojs/tailwind';
+ import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
-  integrations: [tailwind(), mdx(), sitemap()],
+  integrations: [mdx(), sitemap()],
+  vite: { plugins: [tailwindcss()] },
});
```

### Fase 6: Bundles content config moves
- Move `bundles/*/src/content/config.ts` → `bundles/*/src/content.config.ts`
- Update con Content Layer API
- bundles/blog/src/pages/rss.xml.ts: `post.slug` → `post.id`

### Fase 7: src/ defensive
- Update copyright headers en index.ts y archivos principales (license string)
- Add `tsconfig.json` types: verificar `astro/client` aún funciona en 6.x

### Fase 8: Verification gates (NON-NEGOTIABLE antes de commit)

```bash
# 8.1 Clean install
rm -rf node_modules package-lock.json
npm install

# 8.2 Tests
npm run test
npm run test:a11y

# 8.3 Storybook (verifica que componentes renderizan)
npm run storybook  # manual check, then close

# 8.4 Sample template build (manual)
mkdir /tmp/astro-6-test
cd /tmp/astro-6-test
npm create astro@latest -- --template minimal --typescript strict --yes
# Copy a template del paquete y verificar que builds
cp node_modules/@wendermedia/astro-components/templates/configs/astro.config.blog.mjs astro.config.mjs
cp node_modules/@wendermedia/astro-components/templates/content-collections/blog.ts src/content.config.ts
npm install
npm run build
# Esperamos: build success, no errors

# 8.5 Anti-feature audit
# Spawn wm-anti-feature-hunt agent en el paquete
```

### Fase 9: Documentation
- `CHANGELOG.md`: 3.0.0 entry
- `docs/MIGRATION-2.x-to-3.0.md`: detailed guide for consumers
- `README.md`: update install instructions, requirements, attribution recommended
- `llms.txt`: bump version, update keywords
- Update copyright headers across all distributed files

### Fase 10: Final commit + tag + publish
```bash
git add -A
git commit -m "[Sprint] v3.0.0 — Astro 6 migration + Wender Media Source License"
git tag v3.0.0
npm version 3.0.0 --no-git-tag-version  # actualiza package.json sin nuevo commit
git add package.json package-lock.json
git commit --amend --no-edit
git push origin sprint/astro-6-and-relicense-3.0.0 --tags

# After verification:
git checkout main
git merge sprint/astro-6-and-relicense-3.0.0
git push
npm publish --access public --tag latest
```

### Fase 11: Post-publish
- Reply al thread de Sarah11918-astro confirmando keyword fix + Astro 6 ready
- Submit listing update a Astro integrations catalogue
- Memory writeback (project_session_2026_05_08_*, feedback_*)
- Update memoria reference si hay ops nuevas

---

## Riesgos y mitigations

| Riesgo | Probabilidad | Mitigación |
|---|---|---|
| Templates rotos al copiar a proyecto Astro 6 | Media | Phase 8.4: build manual de cada template antes de commit |
| Vite 7 vs Vitest compat | Baja | Vitest 4.1.1 ya soporta Vite 7 verificado |
| Storybook compat con Astro 6 deps | Media | Storybook es dev-only, no afecta consumers; update separable post-3.0 |
| Multiple major bumps simultáneos en optionals | Media | Cada uno verificado en isolation antes de bump |
| Comunidad reacciona mal a license change | Baja | v2.1.0 sigue MIT en npm para siempre; major bump comunicado claramente |
| Content Layer API tiene edge cases no documentados | Media | Test exhaustivo en Phase 8.4 con templates reales |

---

## NEEDS ARNOLD — Decisiones pendientes

1. **¿Aprobar plan completo?** (default: yes, esto es el preview formal)
2. **¿Sprint secuencial o parallel sub-agents?**
   - **Secuencial** (recomendado para esta migration): más control, fácil bisecting si algo rompe
   - **Parallel** (4 sub-agents): más rápido (~2h vs ~6h) pero coordina-overhead
3. **¿Storybook update también en este sprint, o defer?**
   - **Defer** (recomendado): Storybook es dev-only, no bloqueante para 3.0 publish
4. **¿Change repo desde public (probable) a private antes del relicense?**
   - Verificar con `gh repo view arnoldwender/wm-project-astro-components --json visibility`
   - Si público: el código está visible aunque license cambie. Decisión: dejarlo público (source-available es la idea), o hacerlo private.
5. **Versión 2.1.0 en npm:**
   - Add deprecation notice: `npm deprecate @wendermedia/astro-components@2.1.0 "Use 3.0.0 for Astro 6 support, or stay on 2.1.0 for Astro 4/5"`
   - O dejarla sin deprecation notice (libre elección de consumers)

---

## Files que serán modificados (estimate)

```
LICENSE                                          (rewrite)
NOTICE                                           (new file)
package.json                                     (license, version, deps, engines, overrides)
package-lock.json                                (regenerated)
README.md                                        (attribution section, install, migration link)
CHANGELOG.md                                     (3.0.0 entry)
CONTRIBUTING.md                                  (license model clarification)
OPEN-SOURCE-REPORT.md → CONTRIBUTOR-REPORT.md    (rename + reframe)
index.ts                                         (copyright header)
llms.txt                                         (version + keywords)
docs/MIGRATION-2.x-to-3.0.md                     (new file)
docs/PLAN-ASTRO-6-MIGRATION-AND-RELICENSE-3.0.0.md  (this file, mark as APPROVED on commit)

templates/view-transitions/BaseLayout.astro      (ClientRouter)
templates/layouts/MinimalLayout.astro            (ClientRouter)
templates/layouts/DocsLayout.astro               (ClientRouter)
templates/layouts/FullWidthLayout.astro          (ClientRouter)
templates/layouts/EcommerceLayout.astro          (ClientRouter)
templates/layouts/BlogLayout.astro               (ClientRouter)
templates/layouts/BaseLayout.astro               (ClientRouter)

templates/content-collections/blog.ts            (Content Layer API + zod)
templates/content-collections/portfolio.ts       (Content Layer API + zod)
templates/content-collections/products.ts        (Content Layer API + zod)
templates/content-collections/docs.ts            (Content Layer API + zod)

templates/configs/astro.config.blog.mjs          (Tailwind 4 + Vite plugin)
templates/configs/astro.config.docs.mjs          (verify, may need updates)
templates/configs/astro.config.ecommerce.mjs     (Tailwind 4 + Vite plugin)
templates/configs/astro.config.i18n.mjs          (Tailwind 4 + Vite plugin)
templates/configs/astro.config.saas.mjs          (Tailwind 4 + Vite plugin)

bundles/corporate/astro.config.mjs               (Tailwind 4 + Vite plugin)
bundles/landing/astro.config.mjs                 (Tailwind 4 + Vite plugin)
bundles/ecommerce/src/content/config.ts → content.config.ts  (move + Content Layer)
bundles/blog/src/content/config.ts → content.config.ts       (move + Content Layer)
bundles/portfolio/src/content/config.ts → content.config.ts  (move + Content Layer)
bundles/affiliate/src/content/config.ts → content.config.ts  (move + Content Layer)
bundles/blog/src/pages/rss.xml.ts                (post.slug → post.id)
```

**Total estimated:** ~30-35 archivos modificados, ~6 archivos renombrados, ~3 archivos nuevos.

---

## Approval signature

```
Status: PENDING ARNOLD APPROVAL

Approved by:        ___________________  Date: ___________
Approved version:   3.0.0
Approved license:   Wender Media Source License v1.0
Approved scope:     All phases 1-11 as documented
```

Proprietary. All Rights Reserved · Arnold Wender · 2026
