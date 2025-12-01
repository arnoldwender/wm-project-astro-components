/**
 * Astro Configuration - E-commerce Site
 *
 * Optimized for:
 * - Hybrid rendering (SSG + SSR)
 * - React for cart/checkout interactivity
 * - API endpoints for cart operations
 * - Edge deployment
 */

import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import vercel from '@astrojs/vercel';

export default defineConfig({
  // Production URL
  site: 'https://shop.example.com',

  // Hybrid output: Static by default, SSR where needed
  output: 'hybrid',

  // Deployment adapter
  adapter: vercel({
    // Edge functions for API routes
    edgeMiddleware: true,
    // Image optimization
    imageService: true,
    // ISR configuration
    isr: {
      // Revalidate product pages every hour
      expiration: 60 * 60,
      // Exclude cart/checkout from ISR
      exclude: ['/cart', '/checkout/**'],
    },
  }),

  // Integrations
  integrations: [
    react({
      // Include certain files
      include: ['**/react/**', '**/components/*.tsx'],
    }),

    tailwind({
      applyBaseStyles: true,
      nesting: true,
    }),

    sitemap({
      filter: (page) => {
        // Exclude user-specific pages
        return !page.includes('/cart') && !page.includes('/checkout') && !page.includes('/account');
      },
      serialize: (item) => {
        // Higher priority for product pages
        if (item.url.includes('/products/')) {
          item.priority = 0.9;
          item.changefreq = 'daily';
        }
        return item;
      },
    }),

    partytown({
      config: {
        // Forward tracking events
        forward: ['dataLayer.push', 'gtag', 'fbq'],
      },
    }),
  ],

  // Image configuration
  image: {
    domains: [
      'cdn.shopify.com',
      'images.example.com',
      'res.cloudinary.com',
    ],
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },

  // Prefetch for fast navigation
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'viewport',
  },

  // Build configuration
  build: {
    inlineStylesheets: 'auto',
    assets: 'assets',
  },

  // Security headers
  server: {
    headers: {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
    },
  },

  // Vite configuration
  vite: {
    build: {
      rollupOptions: {
        output: {
          // Separate vendor chunks
          manualChunks: {
            react: ['react', 'react-dom'],
            nanostores: ['nanostores', '@nanostores/react'],
          },
        },
      },
    },
    // Optimize deps
    optimizeDeps: {
      include: ['nanostores', '@nanostores/react'],
    },
  },

  // Redirects
  redirects: {
    '/shop': '/products',
    '/store': '/products',
    '/old-product/[...slug]': '/products/[...slug]',
  },
});

// -----------------------------
// API Route Example (src/pages/api/cart.ts):
// -----------------------------
/*
export const prerender = false;

import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, cookies }) => {
  const body = await request.json();
  const { action, productId, quantity } = body;

  // Get current cart from cookie
  const cartCookie = cookies.get('cart');
  const cart = cartCookie ? JSON.parse(cartCookie.value) : {};

  switch (action) {
    case 'add':
      cart[productId] = (cart[productId] || 0) + quantity;
      break;
    case 'remove':
      delete cart[productId];
      break;
    case 'update':
      cart[productId] = quantity;
      break;
  }

  // Update cookie
  cookies.set('cart', JSON.stringify(cart), {
    path: '/',
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 1 week
  });

  return new Response(JSON.stringify({ success: true, cart }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
*/
