# Blog Bundle

Stack completo para blogs con Astro.

## Características

- ✅ Content Collections tipadas
- ✅ MDX para contenido rico
- ✅ RSS feed automático
- ✅ Sitemap multi-idioma
- ✅ SEO optimizado
- ✅ Tailwind CSS
- ✅ i18n (DE/EN)

## Instalación

```bash
# Copiar archivos a tu proyecto
cp -r bundles/blog/* tu-proyecto/

# Instalar dependencias
cd tu-proyecto
npm install
```

## Estructura

```
src/
├── content/
│   ├── config.ts        # Schemas de contenido
│   ├── blog/            # Posts en Markdown/MDX
│   │   ├── post-1.md
│   │   └── post-2.mdx
│   └── authors/         # Datos de autores (JSON/YAML)
├── pages/
│   ├── index.astro
│   ├── blog/
│   │   ├── index.astro
│   │   └── [slug].astro
│   └── rss.xml.ts
└── layouts/
    ├── BaseLayout.astro
    └── BlogPostLayout.astro
```

## Content Collection

### Crear un post

```markdown
---
title: "Mi Primer Post"
description: "Descripción SEO del post"
pubDate: 2024-01-15
category: "tutorial"
tags: ["astro", "web"]
heroImage: "./images/hero.jpg"
---

Contenido del post aquí...
```

### Query posts

```astro
---
import { getCollection } from 'astro:content';

const posts = await getCollection('blog', ({ data }) => {
  return !data.draft; // Excluir borradores
});

const featured = posts.filter(p => p.data.featured);
---
```

## Configuración

### Cambiar idioma default

```javascript
// astro.config.mjs
i18n: {
  defaultLocale: 'de', // Cambiar a 'en', 'es', etc.
  locales: ['de', 'en'],
}
```

### Añadir dominio de imágenes

```javascript
// astro.config.mjs
image: {
  domains: ['tu-cdn.com', 'images.unsplash.com'],
}
```

## SEO

Cada post incluye automáticamente:
- Meta description
- Open Graph tags
- Twitter Cards
- Canonical URL
- Schema.org Article

## RSS

Feed disponible en `/rss.xml` con:
- Todos los posts publicados
- Categorías como tags
- Autor por post
- Stylesheet para visualización
