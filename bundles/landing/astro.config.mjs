import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  site: 'https://your-landing.com', // CAMBIAR
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    partytown({
      config: {
        forward: ['dataLayer.push', 'gtag', 'fbq'],
      },
    }),
  ],
  image: {
    domains: [],
    remotePatterns: [{ protocol: 'https' }],
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      cssMinify: 'lightningcss',
    },
  },
});
