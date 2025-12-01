# Content Collections Templates

Esquemas predefinidos para Astro Content Collections, listos para copiar y adaptar.

## Uso

1. Copia el archivo de esquema que necesites a tu proyecto
2. Crea las carpetas correspondientes en `src/content/`
3. Añade archivos con el frontmatter correcto

## Esquemas Disponibles

### Blog (`blog.ts`)

Completo sistema de blog con:
- **blog/** - Posts con MDX
- **authors/** - Autores (JSON)
- **categories/** - Categorías (JSON)

Características:
- Referencias entre colecciones
- Imágenes optimizadas
- SEO overrides
- Series de posts
- Posts relacionados

```
src/content/
├── blog/
│   ├── my-first-post.mdx
│   └── images/
│       └── cover.jpg
├── authors/
│   └── arnold.json
└── categories/
    └── web-development.json
```

### Products (`products.ts`)

E-commerce completo con:
- **products/** - Productos (MDX para descripciones ricas)
- **product-categories/** - Categorías
- **brands/** - Marcas
- **reviews/** - Reseñas

Características:
- Variantes de producto
- Control de inventario
- Schema.org (GTIN, MPN)
- Productos relacionados
- Sistema de reviews

```
src/content/
├── products/
│   ├── ergonomic-chair.mdx
│   └── images/
├── product-categories/
│   └── furniture.json
├── brands/
│   └── ergonomics-plus.json
└── reviews/
    └── review-001.json
```

### Portfolio (`portfolio.ts`)

Para agencias y freelancers:
- **projects/** - Casos de estudio (MDX)
- **clients/** - Clientes
- **services/** - Servicios ofrecidos
- **team/** - Miembros del equipo

Características:
- Métricas de resultados
- Tech stack
- Testimoniales
- Premios
- Galería de imágenes

```
src/content/
├── projects/
│   ├── brand-redesign-techcorp.mdx
│   └── images/
├── clients/
│   └── techcorp.json
├── services/
│   └── branding.json
└── team/
    └── arnold.json
```

### Docs (`docs.ts`)

Documentación técnica:
- **docs/** - Páginas de documentación (MDX)
- **doc-sections/** - Secciones/grupos
- **changelog/** - Historial de versiones

Características:
- Navegación por secciones
- Versionado
- Badges (nuevo, deprecado)
- API reference fields
- Tutorial metadata
- Table of contents config

```
src/content/
├── docs/
│   ├── getting-started/
│   │   ├── installation.mdx
│   │   └── quick-start.mdx
│   └── api/
│       └── use-query.mdx
├── doc-sections/
│   ├── getting-started.json
│   └── api-reference.json
└── changelog/
    └── v2.0.0.mdx
```

## Integración con src/content/config.ts

Combina múltiples esquemas:

```typescript
// src/content/config.ts
import { defineCollection, z, reference } from 'astro:content';

// Importa los esquemas que necesites y combínalos
const blogCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    // ... tu esquema
  }),
});

export const collections = {
  blog: blogCollection,
  // ... otras colecciones
};
```

## Queries Comunes

### Obtener todos los posts publicados

```typescript
import { getCollection } from 'astro:content';

const posts = await getCollection('blog', ({ data }) => {
  return !data.draft && data.pubDate <= new Date();
});
```

### Posts ordenados por fecha

```typescript
const sortedPosts = posts.sort(
  (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
);
```

### Posts por categoría

```typescript
const webDevPosts = await getCollection('blog', ({ data }) => {
  return data.categories?.some(cat => cat.id === 'web-development');
});
```

### Productos en stock

```typescript
const inStockProducts = await getCollection('products', ({ data }) => {
  return data.inStock && !data.draft;
});
```

### Proyectos destacados

```typescript
const featuredProjects = await getCollection('projects', ({ data }) => {
  return data.featured && !data.draft;
});
```

### Docs por sección

```typescript
const gettingStartedDocs = await getCollection('docs', ({ data }) => {
  return data.section?.id === 'getting-started';
});

// Ordenados
const sortedDocs = gettingStartedDocs.sort(
  (a, b) => a.data.order - b.data.order
);
```

## Renderizar Referencias

```astro
---
import { getEntry, getCollection } from 'astro:content';

const post = await getEntry('blog', 'my-post');

// Obtener autor referenciado
const author = post.data.author
  ? await getEntry(post.data.author)
  : null;

// Obtener categorías referenciadas
const categories = post.data.categories
  ? await Promise.all(post.data.categories.map(ref => getEntry(ref)))
  : [];
---

<article>
  <h1>{post.data.title}</h1>
  {author && <p>By {author.data.name}</p>}
  <ul>
    {categories.map(cat => <li>{cat.data.name}</li>)}
  </ul>
</article>
```

## Tips

1. **Usa `reference()`** para relaciones entre colecciones - type-safe y validado
2. **Usa `image()`** para imágenes locales - optimización automática
3. **Usa `z.coerce.date()`** para fechas - acepta strings y Date objects
4. **Usa `default()`** para valores por defecto en campos opcionales
5. **Valida temprano** - Astro muestra errores claros si el frontmatter es inválido
