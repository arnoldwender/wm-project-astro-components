# View Transitions Templates

Implementaciones de View Transitions API para Astro.

## Introducción

View Transitions es una API nativa del navegador que Astro integra perfectamente.
Permite transiciones suaves entre páginas sin JavaScript frameworks.

## Archivos

### BaseLayout.astro

Layout base con:
- `ViewTransitions` component
- Estilos de transición globales
- Elementos persistentes (header, footer)
- Soporte para navegación hacia atrás

### BlogCard.astro + BlogPost.astro

Pareja de componentes que crean transición morph entre:
- Lista de posts → Detalle de post
- La imagen y título se transforman suavemente

### ProductCard.astro

Card de producto con transiciones preparadas para página de detalle.

## Uso Básico

### 1. Habilitar View Transitions

```astro
---
// src/layouts/Layout.astro
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

### 2. Nombrar Elementos para Morph

```astro
<!-- Lista (BlogCard.astro) -->
<img src={image} transition:name={`image-${slug}`} />
<h2 transition:name={`title-${slug}`}>{title}</h2>

<!-- Detalle (BlogPost.astro) -->
<img src={image} transition:name={`image-${slug}`} />
<h1 transition:name={`title-${slug}`}>{title}</h1>
```

Los elementos con el mismo `transition:name` se transformarán suavemente.

### 3. Animaciones Predefinidas

```astro
<!-- Fade (default) -->
<div transition:animate="fade">...</div>

<!-- Slide -->
<div transition:animate="slide">...</div>

<!-- None (sin animación) -->
<div transition:animate="none">...</div>

<!-- Initial (solo anima la primera vez) -->
<div transition:animate="initial">...</div>
```

### 4. Elementos Persistentes

```astro
<!-- El header no se vuelve a renderizar entre páginas -->
<header transition:persist>
  <nav>...</nav>
</header>

<!-- Audio player persiste mientras navegas -->
<audio transition:persist id="player" src="..." />
```

## Animaciones Personalizadas

### CSS Keyframes

```css
/* Definir animaciones */
@keyframes my-fade-in {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes my-fade-out {
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(-20px); }
}

/* Aplicar a transiciones */
::view-transition-old(main-content) {
  animation: 300ms ease-out my-fade-out;
}

::view-transition-new(main-content) {
  animation: 300ms ease-in my-fade-in;
}
```

```astro
<main transition:name="main-content">
  <slot />
</main>
```

### Transición con JavaScript

```astro
<script>
document.addEventListener('astro:before-preparation', async (event) => {
  // Acceso al documento entrante
  const newDocument = event.newDocument;

  // Puedes modificar antes de la transición
  newDocument.body.classList.add('entering');
});

document.addEventListener('astro:after-swap', () => {
  // Después del swap, antes de que termine la animación
  document.body.classList.remove('entering');
});

document.addEventListener('astro:page-load', () => {
  // Página completamente cargada y animación terminada
  initializeInteractivity();
});
</script>
```

## Patrones Avanzados

### Navegación Direccional

```astro
<script>
// Detectar dirección de navegación
document.addEventListener('astro:before-preparation', (event) => {
  const direction = event.direction; // 'forward' | 'back' | null

  if (direction === 'back') {
    document.documentElement.dataset.direction = 'back';
  } else {
    document.documentElement.dataset.direction = 'forward';
  }
});
</script>

<style is:global>
/* Slide diferente según dirección */
[data-direction="forward"]::view-transition-old(root) {
  animation: slide-out-left 300ms;
}
[data-direction="forward"]::view-transition-new(root) {
  animation: slide-in-right 300ms;
}
[data-direction="back"]::view-transition-old(root) {
  animation: slide-out-right 300ms;
}
[data-direction="back"]::view-transition-new(root) {
  animation: slide-in-left 300ms;
}
</style>
```

### Transiciones por Tipo de Página

```astro
---
// Añadir clase según tipo de página
const pageType = Astro.url.pathname.startsWith('/blog') ? 'blog' : 'default';
---

<html class={`page-${pageType}`}>
```

```css
/* Diferentes transiciones por sección */
.page-blog::view-transition-old(root) {
  animation: fade-out 200ms;
}

.page-default::view-transition-old(root) {
  animation: slide-out 300ms;
}
```

### Gallery Lightbox Effect

```astro
---
// Gallery item
---
<a href={`/gallery/${id}`}>
  <img
    src={thumbnail}
    transition:name={`gallery-${id}`}
    class="thumbnail"
  />
</a>
```

```astro
---
// Gallery detail
---
<div class="lightbox">
  <img
    src={fullImage}
    transition:name={`gallery-${id}`}
    class="full-image"
  />
</div>

<style>
  /* El thumbnail se expande al tamaño completo */
  ::view-transition-old(gallery-*),
  ::view-transition-new(gallery-*) {
    animation-duration: 400ms;
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
</style>
```

## Accesibilidad

### Respetar Preferencias de Movimiento

```css
@media (prefers-reduced-motion: reduce) {
  ::view-transition-group(*),
  ::view-transition-old(*),
  ::view-transition-new(*) {
    animation: none !important;
  }
}
```

### Mantener Focus

```astro
<script>
document.addEventListener('astro:after-swap', () => {
  // Mover focus al contenido principal
  const main = document.querySelector('main');
  if (main) {
    main.setAttribute('tabindex', '-1');
    main.focus();
  }
});
</script>
```

## Debugging

### Ver Transiciones en Slow Motion

```css
/* Solo en desarrollo */
::view-transition-old(*),
::view-transition-new(*) {
  animation-duration: 3s !important;
}
```

### Pseudoelementos de View Transition

```
::view-transition
├── ::view-transition-group(name)
│   ├── ::view-transition-image-pair(name)
│   │   ├── ::view-transition-old(name)
│   │   └── ::view-transition-new(name)
```

## Compatibilidad

- Chrome 111+ (nativo)
- Safari 18+ (nativo)
- Firefox: No soportado (graceful degradation)
- Astro añade fallback para navegadores sin soporte

## Tips

1. **Nombres únicos** - Cada `transition:name` debe ser único en la página
2. **Mismo nombre, mismo elemento** - Los elementos que comparten nombre se transforman
3. **`persist` vs `name`** - `persist` mantiene el elemento, `name` lo anima
4. **Evita grandes cambios de layout** - Las transiciones funcionan mejor con cambios sutiles
5. **Testea sin JS** - Asegúrate de que la navegación funciona sin JavaScript
