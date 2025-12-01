# Utilities

Utilidades para SEO y Performance en Astro.

## SEO Utilities (`/seo`)

### SEOHead.astro

Componente completo de meta tags para SEO.

```astro
---
import SEOHead from '@wendermedia/astro-components/utilities/seo/SEOHead.astro';
---

<head>
  <SEOHead
    title="Page Title"
    description="Page description for search engines"
    image="/og-image.jpg"
    imageAlt="Description of the image"
    canonical="https://example.com/page"
    siteName="My Site"
    locale="de_DE"
    twitterHandle="myhandle"
    article={{
      publishedTime: '2024-01-15',
      modifiedTime: '2024-01-20',
      author: 'Arnold Wender',
      section: 'Technology',
      tags: ['astro', 'seo'],
    }}
    noindex={false}
    nofollow={false}
  />
</head>
```

Incluye automáticamente:
- Meta tags básicos (title, description)
- Open Graph tags
- Twitter Cards
- Schema.org JSON-LD
- Canonical URL
- Robots directives

### SchemaOrg.astro

Generador de Schema.org structured data.

```astro
---
import SchemaOrg from '@wendermedia/astro-components/utilities/seo/SchemaOrg.astro';
---

<!-- Local Business -->
<SchemaOrg
  type="LocalBusiness"
  data={{
    name: 'My Business',
    description: 'Business description',
    street: 'Main Street 1',
    city: 'Berlin',
    postalCode: '10115',
    country: 'DE',
    phone: '+49 123 456789',
    openingHours: [
      { dayOfWeek: 'Monday', opens: '09:00', closes: '18:00' },
    ],
  }}
/>

<!-- Product -->
<SchemaOrg
  type="Product"
  data={{
    name: 'Product Name',
    description: 'Product description',
    images: ['/product.jpg'],
    sku: 'SKU123',
    price: 99.99,
    currency: 'EUR',
    inStock: true,
    rating: { value: 4.5, count: 127 },
  }}
/>

<!-- FAQ -->
<SchemaOrg
  type="FAQPage"
  data={{
    questions: [
      { question: 'What is X?', answer: 'X is...' },
      { question: 'How does Y work?', answer: 'Y works by...' },
    ],
  }}
/>

<!-- Breadcrumbs -->
<SchemaOrg
  type="BreadcrumbList"
  data={{
    items: [
      { name: 'Home', url: 'https://example.com' },
      { name: 'Products', url: 'https://example.com/products' },
      { name: 'Widget', url: 'https://example.com/products/widget' },
    ],
  }}
/>
```

Tipos soportados:
- `Organization`
- `LocalBusiness`
- `Product`
- `Article`
- `BlogPosting`
- `BreadcrumbList`
- `FAQPage`
- `HowTo`
- `Event`
- `Person`
- `WebSite`
- `WebPage`

### Sitemap.ts

Configuraciones predefinidas para @astrojs/sitemap.

```javascript
import { blogSitemapConfig, ecommerceSitemapConfig } from './utilities/seo/Sitemap';

// astro.config.mjs
export default defineConfig({
  integrations: [
    sitemap(blogSitemapConfig),
    // o
    sitemap(ecommerceSitemapConfig),
  ],
});
```

## Performance Utilities (`/performance`)

### CriticalCSS.astro

Inlines CSS crítico y carga el resto async.

```astro
---
import CriticalCSS from '@wendermedia/astro-components/utilities/performance/CriticalCSS.astro';
---

<head>
  <CriticalCSS href="/styles/main.css" loadAsync={true} />
</head>
```

### LazyImage.astro

Imágenes con lazy loading y blur placeholder.

```astro
---
import LazyImage from '@wendermedia/astro-components/utilities/performance/LazyImage.astro';
import myImage from '../assets/hero.jpg';
---

<LazyImage
  src={myImage}
  alt="Hero image"
  width={1200}
  height={630}
  loading="lazy"
  placeholder="blur"
  sizes="(max-width: 768px) 100vw, 50vw"
  widths={[400, 800, 1200]}
  fit="cover"
  position="center"
  class="rounded-lg"
/>
```

Features:
- Native lazy loading
- Blur placeholder automático
- Responsive srcset
- Aspect ratio preservation
- WebP optimization

### Partytown.astro

Third-party scripts en web workers.

```astro
---
import Partytown from '@wendermedia/astro-components/utilities/performance/Partytown.astro';
---

<head>
  <!-- Asegúrate de tener @astrojs/partytown instalado -->
</head>
<body>
  <Partytown
    gaId="G-XXXXXXXXXX"
    gtmId="GTM-XXXXXXX"
    fbPixelId="123456789"
    plausibleDomain="example.com"
    hotjarId={123456}
    customScripts={[
      { src: 'https://example.com/script.js' },
      { innerHTML: 'console.log("Hello from Partytown")' },
    ]}
  />
</body>
```

Soporta:
- Google Analytics 4
- Google Tag Manager
- Facebook Pixel
- Plausible Analytics
- Hotjar
- Scripts personalizados

## Configuración de Partytown

Para usar Partytown, añádelo a tu `astro.config.mjs`:

```javascript
import partytown from '@astrojs/partytown';

export default defineConfig({
  integrations: [
    partytown({
      config: {
        forward: ['dataLayer.push', 'gtag', 'fbq'],
      },
    }),
  ],
});
```

## Core Web Vitals Tips

### LCP (Largest Contentful Paint)
- Usa `fetchpriority="high"` en la imagen hero
- Preload de fuentes críticas
- Inline critical CSS

### FID/INP (Input Delay)
- Usa Partytown para third-party scripts
- Defer scripts no críticos
- Evita JavaScript bloqueante

### CLS (Cumulative Layout Shift)
- Siempre define width/height en imágenes
- Reserva espacio para contenido dinámico
- Usa aspect-ratio CSS
