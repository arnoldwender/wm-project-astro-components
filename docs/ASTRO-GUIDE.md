# Astro: Guía Completa

## ¿Qué es Astro?

Astro es un framework web moderno diseñado para crear sitios web **orientados al contenido** (blogs, portfolios, e-commerce, documentación). Su filosofía principal es **"enviar menos JavaScript al navegador"**, lo que resulta en sitios extremadamente rápidos.

---

## Arquitectura de Astro

### 1. **Multi-Page Application (MPA)**
A diferencia de React/Vue que son SPAs, Astro genera páginas HTML estáticas por defecto. Cada ruta es una página independiente.

### 2. **Renderizado**
Astro soporta múltiples modos:

| Modo | Descripción |
|------|-------------|
| **SSG (Static Site Generation)** | HTML generado en build time (default) |
| **SSR (Server-Side Rendering)** | HTML generado en cada request |
| **Híbrido** | Combina SSG y SSR por página |
| **On-demand** | Renderizado bajo demanda con adapters |

### 3. **Zero JS by Default**
Astro elimina todo JavaScript del output final a menos que lo necesites explícitamente.

---

## Arquitectura de Islands (Islas)

Esta es la característica más distintiva de Astro.

### ¿Qué son las Islands?

Son componentes interactivos aislados dentro de una página estática. El resto de la página es HTML puro, y solo las "islas" cargan JavaScript.

```astro
---
// Página mayormente estática
import Header from '../components/Header.astro';
import CarruselInteractivo from '../components/Carrusel.jsx';
import Footer from '../components/Footer.astro';
---

<Header />  <!-- HTML estático -->

<!-- ISLA: Solo este componente carga JS -->
<CarruselInteractivo client:visible />

<Footer />  <!-- HTML estático -->
```

### Directivas Client (Hidratación)

Controlan **cuándo** se hidrata (activa) el JavaScript:

| Directiva | Comportamiento |
|-----------|----------------|
| `client:load` | Hidrata inmediatamente al cargar la página |
| `client:idle` | Hidrata cuando el browser está idle |
| `client:visible` | Hidrata cuando el componente entra en viewport |
| `client:media="(query)"` | Hidrata cuando se cumple un media query |
| `client:only="react"` | Solo renderiza en cliente (sin SSR) |

---

## Tipos de Componentes

### 1. **Componentes Astro (.astro)**
Componentes nativos con sintaxis similar a HTML + frontmatter:

```astro
---
// Frontmatter: JavaScript ejecutado en build/server
const { titulo, descripcion } = Astro.props;
const fecha = new Date().toLocaleDateString('de-DE');
---

<article class="card">
  <h2>{titulo}</h2>
  <p>{descripcion}</p>
  <time>{fecha}</time>
</article>

<style>
  /* CSS con scope automático */
  .card {
    padding: 1rem;
    border-radius: 8px;
  }
</style>
```

### 2. **Componentes de UI Frameworks**
Astro integra cualquier framework:

```astro
---
import ReactButton from '../components/Button.jsx';
import VueCard from '../components/Card.vue';
import SvelteForm from '../components/Form.svelte';
import SolidCounter from '../components/Counter.tsx'; // Solid
---

<ReactButton client:load />
<VueCard client:visible />
<SvelteForm client:idle />
<SolidCounter client:visible />
```

### 3. **Componentes Markdown/MDX**
Contenido como componentes:

```mdx
---
title: "Mi Artículo"
---
import Alerta from '../components/Alerta.astro';

# {frontmatter.title}

Texto normal en markdown...

<Alerta tipo="warning">
  ¡Componente interactivo dentro de Markdown!
</Alerta>
```

---

## Estructura de Proyecto

```
mi-proyecto/
├── public/              # Assets estáticos (copiados tal cual)
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── components/      # Componentes reutilizables
│   ├── layouts/         # Plantillas base
│   ├── pages/           # Rutas (file-based routing)
│   │   ├── index.astro        → /
│   │   ├── about.astro        → /about
│   │   ├── blog/
│   │   │   ├── index.astro    → /blog
│   │   │   └── [slug].astro   → /blog/:slug (dinámico)
│   │   └── api/
│   │       └── search.ts      → API endpoint
│   ├── content/         # Content Collections
│   │   ├── config.ts
│   │   └── blog/
│   │       ├── post-1.md
│   │       └── post-2.mdx
│   └── styles/          # CSS global
├── astro.config.mjs     # Configuración
└── package.json
```

---

## Content Collections

Sistema tipado para gestionar contenido:

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.string(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  blog: blogCollection,
};
```

Uso en páginas:

```astro
---
import { getCollection } from 'astro:content';

const posts = await getCollection('blog', ({ data }) => {
  return data.draft !== true; // Filtrar borradores
});
---

{posts.map(post => (
  <article>
    <h2>{post.data.title}</h2>
    <a href={`/blog/${post.slug}`}>Leer más</a>
  </article>
))}
```

---

## Lo que Puedes Crear con Astro

### Sitios Ideales

| Tipo | Por qué Astro es ideal |
|------|------------------------|
| **Blogs** | Content Collections + Markdown + RSS |
| **Portfolios** | Rápido, SEO excelente, imágenes optimizadas |
| **Documentación** | Starlight (tema oficial), búsqueda integrada |
| **E-commerce** | SSR híbrido, integración con Shopify/Snipcart |
| **Landing pages** | Velocidad extrema, buen Core Web Vitals |
| **Sitios corporativos** | Multi-idioma, CMS headless |
| **Affiliate sites** | SEO optimizado, generación estática masiva |

### Integraciones Oficiales

```bash
# Frameworks UI
npx astro add react
npx astro add vue
npx astro add svelte
npx astro add solid

# Funcionalidad
npx astro add tailwind
npx astro add mdx
npx astro add sitemap
npx astro add partytown  # Third-party scripts

# Deployment
npx astro add vercel
npx astro add netlify
npx astro add cloudflare
npx astro add node
```

---

## API Endpoints

Astro puede crear APIs:

```typescript
// src/pages/api/search.ts
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ request, url }) => {
  const query = url.searchParams.get('q');

  // Lógica de búsqueda...
  const results = await searchDatabase(query);

  return new Response(JSON.stringify(results), {
    headers: { 'Content-Type': 'application/json' }
  });
};

export const POST: APIRoute = async ({ request }) => {
  const data = await request.json();
  // Procesar datos...
  return new Response(JSON.stringify({ success: true }));
};
```

---

## View Transitions

Navegación tipo SPA sin JavaScript pesado:

```astro
---
// Layout base
import { ViewTransitions } from 'astro:transitions';
---

<html>
  <head>
    <ViewTransitions />
  </head>
  <body>
    <slot />
  </body>
</html>
```

Animaciones personalizadas:

```astro
<header transition:animate="slide">
  <h1 transition:name="title">Mi Sitio</h1>
</header>

<main transition:animate="fade">
  <slot />
</main>
```

---

## Image Optimization

```astro
---
import { Image } from 'astro:assets';
import miImagen from '../assets/foto.jpg';
---

<!-- Optimización automática: WebP, lazy loading, responsive -->
<Image
  src={miImagen}
  alt="Descripción"
  width={800}
  height={600}
  format="webp"
  quality={80}
/>
```

---

## Configuración Típica

```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  site: 'https://ejemplo.com',
  output: 'hybrid', // SSG + SSR selectivo
  adapter: vercel(),
  integrations: [
    react(),
    tailwind(),
    sitemap(),
  ],
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en', 'es'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  image: {
    domains: ['cdn.ejemplo.com'],
  },
});
```

---

## Resumen de Ventajas

1. **Performance extrema** — Zero JS por defecto
2. **SEO nativo** — HTML estático, meta tags fáciles
3. **Flexibilidad** — Usa React, Vue, Svelte o nada
4. **Islands Architecture** — Interactividad selectiva
5. **Content Collections** — Contenido tipado y validado
6. **DX excelente** — Hot reload, TypeScript, debugging
