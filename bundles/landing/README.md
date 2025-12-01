# Landing Page Bundle

Stack optimizado para landing pages de alto rendimiento.

## Características

- ✅ Zero JavaScript por defecto
- ✅ Core Web Vitals optimizados
- ✅ Partytown para scripts de terceros
- ✅ CSS inlining automático
- ✅ Compresión HTML
- ✅ LightningCSS minification

## Métricas Objetivo

| Métrica | Target | Cómo se logra |
|---------|--------|---------------|
| **LCP** | < 2.5s | Imágenes optimizadas, prefetch |
| **FID** | < 100ms | Zero JS, Partytown |
| **CLS** | < 0.1 | Dimensiones explícitas, fonts |
| **TTFB** | < 600ms | SSG, CDN caching |

## Estructura Típica

```
src/
├── pages/
│   ├── index.astro       # Landing principal
│   ├── thank-you.astro   # Post-conversión
│   └── privacy.astro     # Legal
├── components/
│   ├── Hero.astro
│   ├── Features.astro
│   ├── Testimonials.astro
│   ├── Pricing.astro
│   ├── FAQ.astro
│   ├── CTA.astro
│   └── Footer.astro
└── layouts/
    └── LandingLayout.astro
```

## Secciones Típicas

1. **Hero** - Headline, subheadline, CTA principal
2. **Social Proof** - Logos, testimonios breves
3. **Problem/Solution** - Pain points → tu solución
4. **Features** - 3-6 características principales
5. **How it Works** - 3 pasos simples
6. **Testimonials** - Casos de éxito detallados
7. **Pricing** - Planes claros
8. **FAQ** - Objeciones comunes
9. **Final CTA** - Urgencia, beneficios resumidos

## Scripts de Terceros

```html
<!-- Analytics con Partytown (no bloquea) -->
<script type="text/partytown">
  // Google Analytics
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>

<!-- Facebook Pixel con Partytown -->
<script type="text/partytown">
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  // ...resto del pixel
</script>
```

## Interactividad Ligera

Para dropdowns, modals sin frameworks:

```astro
---
// Alpine.js opcional
---

<div x-data="{ open: false }">
  <button @click="open = !open">Toggle</button>
  <div x-show="open" x-transition>
    Contenido
  </div>
</div>
```

O vanilla JS:

```html
<button onclick="this.nextElementSibling.classList.toggle('hidden')">
  Toggle
</button>
<div class="hidden">Contenido</div>
```

## Optimización de Imágenes

```astro
---
import { Image } from 'astro:assets';
import heroImage from '../assets/hero.jpg';
---

<!-- Hero image: eager, alta prioridad -->
<Image
  src={heroImage}
  alt="Hero"
  width={1200}
  height={600}
  loading="eager"
  fetchpriority="high"
  format="webp"
  quality={85}
/>

<!-- Below the fold: lazy -->
<Image
  src={otherImage}
  alt="Feature"
  width={600}
  height={400}
  loading="lazy"
  format="webp"
  quality={80}
/>
```

## A/B Testing

```astro
---
// Simple A/B test
const variant = Math.random() > 0.5 ? 'A' : 'B';
---

{variant === 'A' ? (
  <h1>Headline Version A</h1>
) : (
  <h1>Headline Version B</h1>
)}

<script define:vars={{ variant }}>
  // Track variant
  gtag('event', 'ab_test', {
    test_name: 'headline_test',
    variant: variant,
  });
</script>
```
