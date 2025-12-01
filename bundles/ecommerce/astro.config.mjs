import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  site: 'https://your-shop.com', // CAMBIAR
  output: 'hybrid', // SSG por defecto, SSR para checkout
  adapter: vercel({
    imageService: true,
    isr: {
      expiration: 60 * 60, // 1 hora cache
    },
  }),
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
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
    optimizeDeps: {
      exclude: ['@nanostores/react'],
    },
  },
});
