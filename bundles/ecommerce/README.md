# E-commerce Bundle

Stack completo para tiendas online con Astro.

## Características

- ✅ React para componentes interactivos
- ✅ Nanostores para estado global (cart)
- ✅ SSR híbrido (checkout dinámico)
- ✅ Partytown para tracking scripts
- ✅ Content Collections para productos
- ✅ Vercel adapter con ISR

## Arquitectura

```
┌─────────────────────────────────────────┐
│              PRODUCTO PAGE               │
├─────────────────────────────────────────┤
│  ┌─────────────────────────────────┐    │
│  │  Header (Astro - estático)      │    │
│  │  + CartIcon (React - island)    │    │
│  └─────────────────────────────────┘    │
│  ┌─────────────────────────────────┐    │
│  │  Product Gallery (Astro)        │    │
│  └─────────────────────────────────┘    │
│  ┌─────────────────────────────────┐    │
│  │  Add to Cart (React - island)   │◄───┼── Usa $cartItems store
│  └─────────────────────────────────┘    │
│  ┌─────────────────────────────────┐    │
│  │  Related Products (Astro)       │    │
│  └─────────────────────────────────┘    │
│  ┌─────────────────────────────────┐    │
│  │  Footer (Astro - estático)      │    │
│  └─────────────────────────────────┘    │
└─────────────────────────────────────────┘
```

## Cart Store

```tsx
// En componente React
import { useStore } from '@nanostores/react';
import { $cartItems, $cartTotal, addToCart } from '../stores/cart';

function AddToCartButton({ product }) {
  const items = useStore($cartItems);
  const total = useStore($cartTotal);

  return (
    <button onClick={() => addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })}>
      Add to Cart ({Object.keys(items).length})
    </button>
  );
}
```

## Páginas SSR

```astro
---
// src/pages/checkout.astro
export const prerender = false; // SSR para esta página

const session = await getSession(Astro.cookies);
if (!session) {
  return Astro.redirect('/login');
}
---
```

## Tracking con Partytown

```html
<!-- Google Analytics en web worker -->
<script type="text/partytown">
  // Este script se ejecuta en un web worker
  // No bloquea el main thread
</script>
```

## Integración con Shopify

```typescript
// src/lib/shopify.ts
const domain = import.meta.env.SHOPIFY_DOMAIN;
const token = import.meta.env.SHOPIFY_STOREFRONT_TOKEN;

export async function getProducts() {
  const response = await fetch(
    `https://${domain}/api/2024-01/graphql.json`,
    {
      method: 'POST',
      headers: {
        'X-Shopify-Storefront-Access-Token': token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query {
            products(first: 20) {
              edges {
                node {
                  id
                  title
                  handle
                  priceRange {
                    minVariantPrice {
                      amount
                    }
                  }
                }
              }
            }
          }
        `,
      }),
    }
  );
  return response.json();
}
```
