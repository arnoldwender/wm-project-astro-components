# Configuration Templates

Plantillas de `astro.config.mjs` optimizadas para diferentes tipos de proyectos.

## Configuraciones Disponibles

### Blog/Magazine (`astro.config.blog.mjs`)

Para sitios de contenido:
- Output: Static (SSG)
- MDX + Syntax highlighting
- Sitemap con i18n
- Image optimization
- Tailwind CSS

```bash
# Dependencias
npm install @astrojs/mdx @astrojs/sitemap @astrojs/tailwind
```

### E-commerce (`astro.config.ecommerce.mjs`)

Para tiendas online:
- Output: Hybrid (SSG + SSR)
- React para carrito/checkout
- Vercel ISR
- Partytown para tracking
- Nanostores para estado

```bash
# Dependencias
npm install @astrojs/react @astrojs/tailwind @astrojs/sitemap @astrojs/partytown @astrojs/vercel nanostores @nanostores/react
```

### SaaS Landing (`astro.config.saas.mjs`)

Para landing pages de SaaS:
- Output: Hybrid
- React para pricing/forms
- Vercel Web Analytics
- Partytown optimizado
- A/B testing ready

```bash
# Dependencias
npm install @astrojs/react @astrojs/tailwind @astrojs/mdx @astrojs/sitemap @astrojs/partytown @astrojs/vercel
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
npm install @astrojs/starlight
```

### Multi-language (`astro.config.i18n.mjs`)

Para sitios corporativos internacionales:
- i18n nativo de Astro
- DE/EN/ES/FR
- Sitemap con hreflang
- Netlify adapter
- Fallback languages

```bash
# Dependencias
npm install @astrojs/tailwind @astrojs/mdx @astrojs/sitemap @astrojs/react @astrojs/netlify
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

// Server-side rendering
output: 'server',

// Hybrid (static + SSR where needed)
output: 'hybrid',
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
    'images.unsplash.com',
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

## Ejemplo Completo

```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://example.com',
  output: 'hybrid',
  adapter: vercel(),

  integrations: [
    tailwind(),
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
