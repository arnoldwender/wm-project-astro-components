# E-commerce Guide

Complete guide to using e-commerce components for GDPR-compliant online shops.

## Overview

The e-commerce components provide:

- Shopping cart with localStorage persistence
- Wishlist functionality
- Product cards with quick view
- No third-party tracking by default
- GDPR/DSGVO compliant

## Quick Start

### Basic Shop Setup

```astro
---
// src/pages/shop/index.astro
import BaseLayout from '../../layouts/BaseLayout.astro';
import { ProductCard } from '@wendermedia/astro-components/ecommerce';

const products = [
  {
    id: 'prod-001',
    name: 'Premium Headphones',
    price: 149.99,
    image: '/products/headphones.jpg',
    rating: 4.5,
    reviewCount: 128,
  },
  // ... more products
];
---

<BaseLayout title="Shop">
  <h1>Our Products</h1>

  <div class="product-grid">
    {products.map((product) => (
      <ProductCard
        id={product.id}
        name={product.name}
        price={product.price}
        image={product.image}
        rating={product.rating}
        reviewCount={product.reviewCount}
        showWishlist={true}
        showQuickView={true}
      />
    ))}
  </div>
</BaseLayout>

<style>
  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 2rem;
  }
</style>
```

### Adding the Cart

```astro
---
// src/components/CartButton.astro
import { Cart } from '@wendermedia/astro-components/ecommerce';
---

<!-- Cart icon in header -->
<button
  type="button"
  class="cart-toggle"
  aria-label="Warenkorb öffnen"
  data-cart-toggle
>
  <svg><!-- cart icon --></svg>
  <span class="cart-count" data-cart-count>0</span>
</button>

<!-- Cart sidebar -->
<Cart
  currency="EUR"
  locale="de-DE"
  checkoutUrl="/checkout"
  emptyMessage="Ihr Warenkorb ist leer"
  showQuantityControls={true}
/>
```

### Adding the Wishlist

```astro
---
// src/pages/wishlist.astro
import BaseLayout from '../layouts/BaseLayout.astro';
import { Wishlist } from '@wendermedia/astro-components/ecommerce';
---

<BaseLayout title="Wunschliste">
  <h1>Meine Wunschliste</h1>

  <Wishlist
    currency="EUR"
    locale="de-DE"
    emptyMessage="Keine Produkte auf der Wunschliste"
    addToCartLabel="In den Warenkorb"
    removeLabel="Entfernen"
  />
</BaseLayout>
```

## Component Details

### ProductCard

Full-featured product card with hover effects.

```astro
<ProductCard
  id="prod-001"
  name="Premium Wireless Headphones"
  price={149.99}
  originalPrice={199.99}
  image="/products/headphones.jpg"
  imageAlt="Black wireless headphones"
  badge="Sale"
  badgeColor="red"
  rating={4.5}
  reviewCount={128}
  currency="EUR"
  locale="de-DE"
  showWishlist={true}
  showQuickView={true}
  productUrl="/products/headphones"
  category="Electronics"
  brand="AudioMax"
/>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `id` | `string` | required | Unique product ID |
| `name` | `string` | required | Product name |
| `price` | `number` | required | Current price |
| `originalPrice` | `number` | - | Original price (for sales) |
| `image` | `string` | required | Product image URL |
| `imageAlt` | `string` | `name` | Image alt text |
| `badge` | `string` | - | Badge text (New, Sale, etc.) |
| `badgeColor` | `string` | `'red'` | Badge background color |
| `rating` | `number` | - | Product rating (0-5) |
| `reviewCount` | `number` | - | Number of reviews |
| `currency` | `string` | `'EUR'` | Currency code |
| `locale` | `string` | `'de-DE'` | Locale for formatting |
| `showWishlist` | `boolean` | `true` | Show wishlist button |
| `showQuickView` | `boolean` | `true` | Show quick view button |
| `productUrl` | `string` | - | Link to product page |

### Cart

Shopping cart with full functionality.

```astro
<Cart
  currency="EUR"
  locale="de-DE"
  checkoutUrl="/checkout"
  emptyMessage="Ihr Warenkorb ist leer"
  showQuantityControls={true}
  maxQuantity={10}
  showTax={true}
  taxRate={0.19}
  shippingThreshold={50}
  shippingCost={4.99}
  freeShippingMessage="Kostenloser Versand ab 50€"
/>
```

#### Cart Events

Listen to cart events:

```ts
// Item added
window.addEventListener('cart:add', (e) => {
  console.log('Added:', e.detail);
});

// Cart updated
window.addEventListener('cart:updated', (e) => {
  console.log('Cart:', e.detail);
  updateCartCount(Object.keys(e.detail).length);
});

// Item removed
window.addEventListener('cart:remove', (e) => {
  console.log('Removed:', e.detail.id);
});
```

### Wishlist

Product wishlist with persistence.

```astro
<Wishlist
  currency="EUR"
  locale="de-DE"
  emptyMessage="Keine Produkte auf der Wunschliste"
  addToCartLabel="In den Warenkorb"
  removeLabel="Entfernen"
  shareEnabled={true}
  shareLabel="Wunschliste teilen"
/>
```

#### Wishlist Events

```ts
// Wishlist updated
window.addEventListener('wishlist:updated', (e) => {
  console.log('Wishlist:', e.detail);
  updateWishlistCount(e.detail.length);
});
```

### AddToCartButton

Standalone add to cart button.

```astro
<AddToCartButton
  productId="prod-001"
  productName="Product Name"
  price={99.99}
  image="/product.jpg"
  variant="Blue / Large"
  quantity={1}
  maxQuantity={10}
  disabled={false}
  loading={false}
>
  In den Warenkorb
</AddToCartButton>
```

### ProductQuickView

Modal-based product preview.

```astro
<ProductQuickView
  id="prod-001"
  name="Premium Headphones"
  description="High-quality wireless headphones with noise cancellation."
  price={149.99}
  originalPrice={199.99}
  images={[
    '/products/headphones-1.jpg',
    '/products/headphones-2.jpg',
    '/products/headphones-3.jpg',
  ]}
  variants={[
    { id: 'black', name: 'Black', available: true },
    { id: 'white', name: 'White', available: true },
    { id: 'red', name: 'Red', available: false },
  ]}
  features={[
    'Active Noise Cancellation',
    '30-hour battery life',
    'Bluetooth 5.0',
  ]}
/>
```

## JavaScript API

### Cart Functions

```ts
import {
  addToCart,
  getCart,
  updateCartItem,
  removeFromCart,
  clearCart,
  getCartTotal,
  getCartCount,
} from '@wendermedia/astro-components/ecommerce';

// Add item
addToCart({
  id: 'prod-001',
  name: 'Product Name',
  price: 99.99,
  image: '/product.jpg',
  quantity: 1,
  variant: 'Blue',
});

// Get cart
const cart = getCart();
// { 'prod-001': { id, name, price, quantity, ... } }

// Update quantity
updateCartItem('prod-001', { quantity: 2 });

// Remove item
removeFromCart('prod-001');

// Clear cart
clearCart();

// Get totals
const total = getCartTotal(); // 99.99
const count = getCartCount(); // 1
```

### Wishlist Functions

```ts
import {
  getWishlist,
  isInWishlist,
  toggleWishlistItem,
  removeFromWishlist,
  clearWishlist,
} from '@wendermedia/astro-components/ecommerce';

// Get wishlist
const wishlist = getWishlist();
// [{ id, name, price, image, addedAt }, ...]

// Check if in wishlist
const inWishlist = isInWishlist('prod-001'); // true/false

// Toggle item
const added = toggleWishlistItem({
  id: 'prod-001',
  name: 'Product',
  price: 99.99,
  image: '/product.jpg',
});
// true if added, false if removed

// Remove item
removeFromWishlist('prod-001');

// Clear wishlist
clearWishlist();
```

### Price Formatting

```ts
import { formatPrice } from '@wendermedia/astro-components/ecommerce';

formatPrice(99.99, 'EUR', 'de-DE');  // "99,99 €"
formatPrice(99.99, 'USD', 'en-US');  // "$99.99"
formatPrice(99.99, 'GBP', 'en-GB');  // "£99.99"
```

## Data Integration

### Static Products

```astro
---
// src/data/products.ts
export const products = [
  {
    id: 'prod-001',
    name: 'Premium Headphones',
    slug: 'premium-headphones',
    price: 149.99,
    // ...
  },
];

// src/pages/shop/[slug].astro
import { products } from '../../data/products';

export function getStaticPaths() {
  return products.map((product) => ({
    params: { slug: product.slug },
    props: { product },
  }));
}

const { product } = Astro.props;
---
```

### WordPress Integration

```astro
---
import { createWordPressClient, fetchPosts } from '@wendermedia/astro-components/integrations/wordpress';

const wp = createWordPressClient({
  url: import.meta.env.WORDPRESS_URL,
});

// Fetch WooCommerce products (requires WooCommerce REST API)
const products = await wp.get('wc/v3/products', {
  per_page: 12,
});
---
```

### Content Collections

```ts
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const products = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    name: z.string(),
    price: z.number(),
    description: z.string(),
    image: z.string(),
    category: z.string(),
    inStock: z.boolean().default(true),
  }),
});

export const collections = { products };
```

## Checkout Integration

The cart stores data in localStorage. For checkout, retrieve and send to your backend:

```ts
// src/pages/api/checkout.ts
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  const { cart, customer } = await request.json();

  // Validate cart items
  // Process payment
  // Create order

  return new Response(JSON.stringify({ orderId: '12345' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
```

```ts
// Client-side checkout
const cart = getCart();

const response = await fetch('/api/checkout', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    cart,
    customer: {
      email: 'customer@example.com',
      // ...
    },
  }),
});

if (response.ok) {
  clearCart();
  window.location.href = '/order-confirmation';
}
```

## GDPR Compliance

### No Third-Party Tracking

By default, no external services are loaded. Cart and wishlist use localStorage only.

### Data Portability

Allow users to export their data:

```ts
function exportUserData() {
  const data = {
    cart: getCart(),
    wishlist: getWishlist(),
    exportedAt: new Date().toISOString(),
  };

  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: 'application/json',
  });

  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'my-shop-data.json';
  a.click();
}
```

### Right to Erasure

Allow users to clear their data:

```ts
function clearAllUserData() {
  clearCart();
  clearWishlist();
  localStorage.removeItem('recently-viewed');
  // Clear any other stored data
}
```

## Styling

### CSS Custom Properties

```css
/* Override cart styles */
.cart {
  --cart-bg: var(--color-background-surface);
  --cart-border: var(--color-border-default);
  --cart-text: var(--color-text-primary);
  --cart-accent: var(--color-brand-primary);
}

/* Override product card styles */
.product-card {
  --card-bg: white;
  --card-shadow: var(--shadow-md);
  --card-radius: var(--border-radius-lg);
  --card-badge-bg: var(--color-semantic-error);
}
```

### Custom Badge Colors

```astro
<ProductCard
  badge="New"
  badgeColor="green"
/>

<ProductCard
  badge="-20%"
  badgeColor="red"
/>

<ProductCard
  badge="Limited"
  badgeColor="amber"
/>
```
