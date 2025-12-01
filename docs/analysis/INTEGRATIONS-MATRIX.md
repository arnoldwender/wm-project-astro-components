# Matriz de Integraciones Astro

## Resumen de Integraciones Oficiales

### UI Frameworks

| Framework | Comando | Bundle Size | Hydration | Use Case |
|-----------|---------|-------------|-----------|----------|
| **React** | `npx astro add react` | ~40KB | Full | Ecosistema maduro, muchos componentes |
| **Vue** | `npx astro add vue` | ~35KB | Full | Composición, transiciones nativas |
| **Svelte** | `npx astro add svelte` | ~2KB | Compiled | Mínimo JS, animaciones |
| **Solid** | `npx astro add solid` | ~7KB | Fine-grained | Rendimiento extremo, signals |
| **Preact** | `npx astro add preact` | ~3KB | Full | React API, menor tamaño |
| **Lit** | `npx astro add lit` | ~5KB | Web Components | Standards-based |
| **Alpine** | `npx astro add alpinejs` | ~15KB | Sprinkles | Interactividad ligera |

### Funcionalidad

| Integración | Comando | Propósito |
|-------------|---------|-----------|
| **Tailwind** | `npx astro add tailwind` | Utility-first CSS |
| **MDX** | `npx astro add mdx` | Componentes en Markdown |
| **Sitemap** | `npx astro add sitemap` | Generación automática de sitemap.xml |
| **Partytown** | `npx astro add partytown` | Third-party scripts en web worker |
| **DB** | `npx astro add db` | Base de datos libSQL integrada |

### Deployment Adapters

| Adapter | Comando | Runtime | Edge Support |
|---------|---------|---------|--------------|
| **Vercel** | `npx astro add vercel` | Node/Edge | ✅ |
| **Netlify** | `npx astro add netlify` | Node/Edge | ✅ |
| **Cloudflare** | `npx astro add cloudflare` | Workers | ✅ |
| **Node** | `npx astro add node` | Node.js | ❌ |
| **Deno** | `npx astro add deno` | Deno | ✅ |

---

## Matriz de Compatibilidad por Tipo de Proyecto

### Blog / Magazine

```
┌─────────────────────────────────────────────────────────────────┐
│                         BLOG STACK                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  REQUIRED:                                                       │
│  ├── @astrojs/mdx          → Contenido rico                     │
│  ├── @astrojs/sitemap      → SEO                                │
│  └── @astrojs/rss          → Feed RSS                           │
│                                                                  │
│  RECOMMENDED:                                                    │
│  ├── @astrojs/tailwind     → Estilos rápidos                    │
│  └── astro-icon            → Iconos                             │
│                                                                  │
│  OPTIONAL:                                                       │
│  ├── @astrojs/react        → Comentarios, search                │
│  └── @astrojs/partytown    → Analytics sin bloqueo             │
│                                                                  │
│  DEPLOY:                                                         │
│  └── @astrojs/vercel       → SSG + ISR                          │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Portfolio / Agency

```
┌─────────────────────────────────────────────────────────────────┐
│                       PORTFOLIO STACK                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  REQUIRED:                                                       │
│  ├── @astrojs/tailwind     → Design system                      │
│  └── astro:assets          → Image optimization (built-in)      │
│                                                                  │
│  RECOMMENDED:                                                    │
│  ├── @astrojs/svelte       → Animaciones ligeras                │
│  ├── @astrojs/sitemap      → SEO                                │
│  └── astro-icon            → Iconos                             │
│                                                                  │
│  OPTIONAL:                                                       │
│  ├── gsap                  → Animaciones avanzadas              │
│  └── @astrojs/mdx          → Caso de estudios                   │
│                                                                  │
│  DEPLOY:                                                         │
│  └── @astrojs/netlify      → CDN global                         │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### E-commerce

```
┌─────────────────────────────────────────────────────────────────┐
│                       E-COMMERCE STACK                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  REQUIRED:                                                       │
│  ├── @astrojs/react        → Cart, checkout interactivo         │
│  ├── @astrojs/tailwind     → UI components                      │
│  └── @astrojs/sitemap      → Product SEO                        │
│                                                                  │
│  RECOMMENDED:                                                    │
│  ├── nanostores            → State management (cart)            │
│  ├── @astrojs/partytown    → Analytics, pixels                  │
│  └── astro:assets          → Product images                     │
│                                                                  │
│  INTEGRATIONS:                                                   │
│  ├── Shopify Storefront API                                     │
│  ├── Snipcart / Stripe                                          │
│  └── Algolia (search)                                           │
│                                                                  │
│  DEPLOY:                                                         │
│  └── @astrojs/vercel       → SSR + Edge                         │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Documentation

```
┌─────────────────────────────────────────────────────────────────┐
│                     DOCUMENTATION STACK                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  THEME:                                                          │
│  └── @astrojs/starlight    → Full docs theme                    │
│                                                                  │
│  INCLUDED IN STARLIGHT:                                          │
│  ├── Search (Pagefind)                                          │
│  ├── i18n support                                               │
│  ├── Dark mode                                                  │
│  ├── Sidebar navigation                                         │
│  └── SEO optimized                                              │
│                                                                  │
│  OPTIONAL:                                                       │
│  ├── @astrojs/react        → Interactive demos                  │
│  └── expressive-code       → Code highlighting                  │
│                                                                  │
│  DEPLOY:                                                         │
│  └── @astrojs/netlify      → Rápido, gratis                     │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### SaaS Landing

```
┌─────────────────────────────────────────────────────────────────┐
│                      SAAS LANDING STACK                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  REQUIRED:                                                       │
│  ├── @astrojs/tailwind     → Rapid UI                           │
│  ├── @astrojs/react        → Forms, modals                      │
│  └── @astrojs/sitemap      → SEO                                │
│                                                                  │
│  RECOMMENDED:                                                    │
│  ├── @astrojs/partytown    → Tracking scripts                   │
│  ├── astro-icon            → Feature icons                      │
│  └── @astrojs/mdx          → Changelog, blog                    │
│                                                                  │
│  INTEGRATIONS:                                                   │
│  ├── Stripe (pricing)                                           │
│  ├── Crisp/Intercom (chat)                                      │
│  └── Plausible/Fathom (analytics)                               │
│                                                                  │
│  DEPLOY:                                                         │
│  └── @astrojs/vercel       → SSG + Forms API                    │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Affiliate / Niche Site

```
┌─────────────────────────────────────────────────────────────────┐
│                      AFFILIATE STACK                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  REQUIRED:                                                       │
│  ├── @astrojs/mdx          → Product reviews                    │
│  ├── @astrojs/sitemap      → SEO crítico                        │
│  └── @astrojs/tailwind     → UI rápida                          │
│                                                                  │
│  RECOMMENDED:                                                    │
│  ├── @astrojs/partytown    → Ad scripts sin bloqueo            │
│  ├── Content Collections   → Productos tipados                  │
│  └── astro:assets          → Product images                     │
│                                                                  │
│  SEO CRITICAL:                                                   │
│  ├── Schema.org markup     → Rich snippets                      │
│  ├── Canonical URLs        → Evitar duplicados                  │
│  └── Internal linking      → Link juice                         │
│                                                                  │
│  DEPLOY:                                                         │
│  └── @astrojs/cloudflare   → Edge, cache agresivo              │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Corporate / Multi-language

```
┌─────────────────────────────────────────────────────────────────┐
│                      CORPORATE STACK                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  REQUIRED:                                                       │
│  ├── i18n (built-in)       → Multi-idioma                       │
│  ├── @astrojs/tailwind     → Design system                      │
│  ├── @astrojs/sitemap      → SEO multi-locale                   │
│  └── @astrojs/mdx          → CMS content                        │
│                                                                  │
│  RECOMMENDED:                                                    │
│  ├── @astrojs/react        → Forms, contact                     │
│  ├── astro-i18next         → i18n avanzado                      │
│  └── @astrojs/partytown    → GDPR-safe tracking                 │
│                                                                  │
│  CMS OPTIONS:                                                    │
│  ├── Storyblok                                                  │
│  ├── Contentful                                                 │
│  ├── Sanity                                                     │
│  └── Strapi                                                     │
│                                                                  │
│  DEPLOY:                                                         │
│  └── @astrojs/netlify      → i18n redirects                     │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Decisión de Framework UI

### Árbol de Decisión

```
¿Necesitas interactividad en cliente?
│
├── NO → Solo .astro (0 JS)
│
└── SÍ → ¿Qué tipo?
         │
         ├── Interactividad ligera (dropdowns, toggles)
         │   └── Alpine.js o Vanilla JS
         │
         ├── Componentes complejos (formularios, carruseles)
         │   │
         │   ├── ¿Ya conoces React?
         │   │   └── @astrojs/react
         │   │
         │   ├── ¿Prefieres menor bundle?
         │   │   └── @astrojs/svelte o @astrojs/solid
         │   │
         │   └── ¿Equipo usa Vue?
         │       └── @astrojs/vue
         │
         └── Apps full-interactive
             └── Considera Next.js/Nuxt en su lugar
```

### Métricas de Bundle

```
┌─────────────────────────────────────────────────────────────────┐
│                    BUNDLE SIZE COMPARISON                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Svelte   ████░░░░░░░░░░░░░░░░░░░░░░░░░░░  2 KB (compiled)      │
│  Preact   ██████░░░░░░░░░░░░░░░░░░░░░░░░░  3 KB                 │
│  Lit      ████████░░░░░░░░░░░░░░░░░░░░░░░  5 KB                 │
│  Solid    ██████████░░░░░░░░░░░░░░░░░░░░░  7 KB                 │
│  Alpine   ██████████████████░░░░░░░░░░░░░  15 KB                │
│  Vue      ████████████████████████████░░░  35 KB                │
│  React    ██████████████████████████████░  40 KB                │
│                                                                  │
│  * Tamaños aproximados, minified + gzipped                      │
└─────────────────────────────────────────────────────────────────┘
```

---

## Combinaciones Recomendadas

### Máximo Rendimiento
```bash
npx astro add svelte tailwind sitemap
# Bundle mínimo, CSS utilities, SEO listo
```

### Máxima Productividad (React team)
```bash
npx astro add react tailwind mdx sitemap
# Ecosistema React, desarrollo rápido
```

### Documentación Rápida
```bash
npx astro add starlight
# Todo incluido, listo para escribir
```

### E-commerce Completo
```bash
npx astro add react tailwind sitemap partytown vercel
npm install nanostores @nanostores/react
# Cart global, tracking, SSR
```

### Blog Alemán SEO-Optimized
```bash
npx astro add mdx tailwind sitemap netlify
npm install @astrojs/rss astro-seo
# Multi-idioma, RSS, meta tags
```
