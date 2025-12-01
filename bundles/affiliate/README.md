# Affiliate Bundle

Stack optimizado para sitios de afiliados y nichos SEO.

## Características

- ✅ SEO agresivo (Schema.org, sitemaps)
- ✅ Content Collections para productos
- ✅ Reviews comparativas
- ✅ Amazon ASIN tracking
- ✅ Cloudflare edge deployment
- ✅ Partytown para ads

## SEO Features

### Schema.org Automático

```astro
---
// Genera Product schema automáticamente
const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": product.name,
  "brand": { "@type": "Brand", "name": product.brand },
  "offers": {
    "@type": "Offer",
    "price": product.price,
    "priceCurrency": product.currency,
    "availability": "https://schema.org/InStock",
    "url": product.affiliateLink,
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": product.rating,
    "reviewCount": product.reviewCount,
  },
};
---

<script type="application/ld+json" set:html={JSON.stringify(productSchema)} />
```

### Review Schema

```astro
---
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "Product",
    "name": product.name,
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": product.ourRating,
    "bestRating": "10",
  },
  "author": {
    "@type": "Person",
    "name": author.name,
  },
};
---
```

## Tipos de Páginas

### 1. Producto Individual

```markdown
---
title: "Samsung Galaxy S24 Ultra Test 2024"
metaDescription: "Unser ausführlicher Test des Samsung Galaxy S24..."
name: "Samsung Galaxy S24 Ultra"
brand: "Samsung"
price: 1449
affiliateLink: "https://amazon.de/dp/BXXXXXXXX?tag=your-tag-21"
asin: "BXXXXXXXX"
rating: 4.7
ourRating: 9.2
pros:
  - "Exzellente Kamera"
  - "S Pen inklusive"
cons:
  - "Hoher Preis"
verdict: "Das beste Android-Flaggschiff 2024"
---

## Unser Test

Ausführlicher Testbericht hier...
```

### 2. Vergleich / Roundup

```markdown
---
title: "Die 10 besten Smartphones 2024 im Test"
reviewType: "roundup"
products:
  - "samsung-galaxy-s24-ultra"
  - "iphone-15-pro-max"
  - "google-pixel-8-pro"
winner: "samsung-galaxy-s24-ultra"
---

## Unsere Top 10

Vergleich aller Smartphones...
```

### 3. Kategorie Hub

```
/smartphones/           → Kategorieseite (SEO hub)
/smartphones/samsung/   → Marken-Subkategorie
/smartphones/unter-500/ → Preisfilter-Seite
```

## Affiliate Links

### Amazon Partner

```typescript
// src/lib/affiliate.ts
export function amazonLink(asin: string, tag: string = 'your-tag-21') {
  return `https://www.amazon.de/dp/${asin}?tag=${tag}`;
}

export function trackClick(productId: string, destination: string) {
  // Analytics event
  gtag('event', 'affiliate_click', {
    product_id: productId,
    destination: destination,
  });
}
```

### Link Component

```astro
---
interface Props {
  href: string;
  productId: string;
}
const { href, productId } = Astro.props;
---

<a
  href={href}
  target="_blank"
  rel="nofollow noopener sponsored"
  data-product-id={productId}
  class="affiliate-link"
>
  <slot />
</a>

<script>
  document.querySelectorAll('.affiliate-link').forEach(link => {
    link.addEventListener('click', () => {
      const productId = link.dataset.productId;
      gtag('event', 'affiliate_click', { product_id: productId });
    });
  });
</script>
```

## Internal Linking

```astro
---
// Componente para links internos automáticos
import { getCollection } from 'astro:content';

const relatedProducts = await getCollection('products', ({ data }) => {
  return data.category === currentProduct.category &&
         data.slug !== currentProduct.slug;
});
---

<aside>
  <h3>Ähnliche Produkte</h3>
  <ul>
    {relatedProducts.slice(0, 5).map(p => (
      <li>
        <a href={`/products/${p.slug}`}>{p.data.name}</a>
      </li>
    ))}
  </ul>
</aside>
```

## Disclosure

```astro
<!-- Affiliate disclosure requerido -->
<aside class="affiliate-disclosure">
  <p>
    <strong>Hinweis:</strong> Als Amazon-Partner verdienen wir an
    qualifizierten Verkäufen. Die Preise können abweichen.
    <a href="/affiliate-disclosure">Mehr erfahren</a>
  </p>
</aside>
```

## Deployment

Cloudflare Pages con:
- Edge caching agresivo
- Image optimization
- Analytics integrado
