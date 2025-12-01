# Portfolio Bundle

Stack completo para portfolios creativos con Astro.

## Características

- ✅ Svelte para animaciones ligeras
- ✅ GSAP para animaciones avanzadas
- ✅ Content Collections para proyectos
- ✅ Galería con lightbox
- ✅ Testimonios
- ✅ Servicios
- ✅ Tailwind CSS

## Collections

### Projects

```yaml
---
title: "Proyecto X"
description: "Descripción del proyecto"
client: "Cliente ABC"
date: 2024-01-15
thumbnail: "./images/thumb.jpg"
thumbnailAlt: "Thumbnail del proyecto"
category: "web-design"
tags: ["react", "tailwind"]
tools: ["Figma", "VS Code"]
liveUrl: "https://proyecto.com"
featured: true
---
```

### Services

```json
{
  "title": "Diseño Web",
  "shortDescription": "Sitios web modernos",
  "longDescription": "...",
  "icon": "globe",
  "features": ["Responsive", "SEO", "Rápido"],
  "price": {
    "from": 2000,
    "currency": "EUR",
    "unit": "project"
  }
}
```

### Testimonials

```json
{
  "name": "Juan García",
  "role": "CEO",
  "company": "Empresa X",
  "quote": "Excelente trabajo...",
  "rating": 5,
  "projectSlug": "proyecto-x"
}
```

## Animaciones

El bundle incluye GSAP configurado. Ejemplo de uso:

```astro
<script>
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  gsap.registerPlugin(ScrollTrigger);

  gsap.from('.project-card', {
    y: 100,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.projects-grid',
      start: 'top 80%',
    },
  });
</script>
```
