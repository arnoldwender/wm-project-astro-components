import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://your-shop.com', // CAMBIAR
  // Astro 6: SSG por defecto. Routes que necesitan SSR (checkout, cart)
  // declaran `export const prerender = false`. Reemplaza 'hybrid'.
  adapter: vercel({
    imageService: true,
    isr: {
      expiration: 60 * 60, // 1 hora cache
    },
  }),
  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.includes('/checkout') && !page.includes('/cart'),
    }),
    partytown({
      config: {
        forward: ['dataLayer.push', 'fbq'],
      },
    }),
  ],
  image: {
    domains: ['cdn.shopify.com', 'images.unsplash.com'],
    remotePatterns: [{ protocol: 'https' }],
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ['@nanostores/react'],
    },
  },
});
