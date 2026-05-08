# Configuration Templates

Plantillas de `astro.config.mjs` optimizadas para diferentes tipos de proyectos.

> **Astro 6 + Tailwind 4 Migration Notes**
>
> - **Tailwind 4** ya NO es una integración Astro: instala
>   `@tailwindcss/vite` y agrégalo a `vite.plugins`. Configura tokens en CSS
>   con `@theme { ... }` (no más `tailwind.config.js`).
> - **`output: 'hybrid'`** fue removido en Astro 5+. Usa `output: 'server'`
>   junto con `export const prerender = true` en las páginas que quieras
>   estáticas.
> - **Content Collections** ahora usan la **Content Layer API** (`loader:` con
>   `glob()` o `file()` desde `astro/loaders`). El archivo de configuración
>   se llama `src/content.config.ts` (no `src/content/config.ts`).
> - **`ViewTransitions`** se renombró a **`ClientRouter`** (`import { ClientRouter } from 'astro:transitions'`).
> - **zod 4** colapsa `z.string().email()` → `z.email()`,
>   `z.string().url()` → `z.url()`, `z.string().uuid()` → `z.uuid()`.

## Configuraciones Disponibles

### Blog/Magazine (`astro.config.blog.mjs`)

Para sitios de contenido:
- Output: Static (SSG)
- MDX + Syntax highlighting
- Sitemap con i18n
- Image optimization
- Tailwind 4 (Vite plugin)

```bash
# Dependencias (Astro 6 + Tailwind 4)
npm install astro @astrojs/mdx @astrojs/sitemap tailwindcss @tailwindcss/vite
```

### E-commerce (`astro.config.ecommerce.mjs`)

Para tiendas online:

- Output: Server (con `export const prerender = true` por página estática)
- React para carrito/checkout
- Vercel ISR
- Partytown para tracking
- Nanostores para estado

```bash
# Dependencias (Astro 6 + Tailwind 4)
npm install astro @astrojs/react @astrojs/sitemap @astrojs/partytown @astrojs/vercel \
  tailwindcss @tailwindcss/vite nanostores @nanostores/react
```

### SaaS Landing (`astro.config.saas.mjs`)

Para landing pages de SaaS:

- Output: Server (con `export const prerender = true` por página estática)
- React para pricing/forms
- Vercel Web Analytics
- Partytown optimizado
- A/B testing ready

```bash
# Dependencias (Astro 6 + Tailwind 4)
npm install astro @astrojs/react @astrojs/mdx @astrojs/sitemap @astrojs/partytown \
  @astrojs/vercel tailwindcss @tailwindcss/vite
```

### Documentation (`astro.config.docs.mjs`)

Para documentación técnica con Starlight:
- Starlight theme completo
- Multi-idioma
- Búsqueda integrada
- Dark mode
- Edit on GitHub

```bash
# Dependencias
npm install astro @astrojs/starlight
```

### Multi-language (`astro.config.i18n.mjs`)

Para sitios corporativos internacionales:
- i18n nativo de Astro
- DE/EN/ES/FR
- Sitemap con hreflang
- Netlify adapter
- Fallback languages

```bash
# Dependencias (Astro 6 + Tailwind 4)
npm install astro @astrojs/mdx @astrojs/sitemap @astrojs/react @astrojs/netlify \
  tailwindcss @tailwindcss/vite
```

## Personalización

### Cambiar Site URL

```javascript
export default defineConfig({
  site: 'https://tu-dominio.com',
});
```

### Cambiar Output Mode

```javascript
// Static (default)
output: 'static',

// Server-side rendering (con prerender opt-in por página)
output: 'server',

// 'hybrid' fue REMOVIDO en Astro 5+. Si lo ves en docs viejas, usa 'server'
// + `export const prerender = true` en las páginas estáticas.
```

### Tailwind 4 (Vite plugin)

```javascript
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
```

```css
/* src/styles/global.css */
@import "tailwindcss";
@plugin "@tailwindcss/typography";

@theme {
  --color-primary: #003263;
  --font-sans: 'Inter', sans-serif;
}
```

### Añadir Adapter

```javascript
import vercel from '@astrojs/vercel';
import netlify from '@astrojs/netlify';
import cloudflare from '@astrojs/cloudflare';
import node from '@astrojs/node';

// Vercel
adapter: vercel(),

// Netlify
adapter: netlify(),

// Cloudflare
adapter: cloudflare(),

// Node.js standalone
adapter: node({ mode: 'standalone' }),
```

### Image Domains

```javascript
image: {
  domains: [
    'cdn.shopify.com',
    'images.ctfassets.net', // Contentful
    'cdn.sanity.io', // Sanity
    'res.cloudinary.com', // Cloudinary
  ],
},
```

### Prefetch Strategy

```javascript
prefetch: {
  // Prefetch all links
  prefetchAll: true,

  // Strategies: 'hover' | 'tap' | 'viewport' | 'load'
  defaultStrategy: 'hover',
},
```

### Build Optimization

```javascript
build: {
  // Inline stylesheets under 4KB
  inlineStylesheets: 'auto',

  // Custom assets directory
  assets: '_assets',

  // Server entry
  serverEntry: 'entry.mjs',
},
```

### Vite Configuration

```javascript
vite: {
  // Aliases
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@layouts': '/src/layouts',
      '@styles': '/src/styles',
    },
  },

  // Chunk splitting
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          vendor: ['lodash', 'date-fns'],
        },
      },
    },
  },

  // Environment variables
  envPrefix: 'PUBLIC_',
},
```

## Redirects

```javascript
redirects: {
  // Simple redirect
  '/old-page': '/new-page',

  // With params
  '/blog/[...slug]': '/articles/[...slug]',

  // External redirect
  '/app': 'https://app.example.com',

  // Status code
  '/legacy': { destination: '/modern', status: 301 },
},
```

## Ejemplo Completo (Astro 6 + Tailwind 4)

```javascript
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://example.com',
  // Astro 5+: 'hybrid' removido — usa 'server' + per-page prerender.
  output: 'server',
  adapter: vercel(),

  integrations: [
    react(),
    sitemap(),
  ],

  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
  },

  image: {
    domains: ['cdn.example.com'],
  },

  prefetch: {
    defaultStrategy: 'hover',
  },

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  },

  redirects: {
    '/old': '/new',
  },
});
```
