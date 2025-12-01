import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://your-company.com', // CAMBIAR
  output: 'hybrid',
  adapter: netlify({
    imageCDN: true,
  }),
  integrations: [
    mdx(),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      i18n: {
        defaultLocale: 'de',
        locales: {
          de: 'de-DE',
          en: 'en-US',
          es: 'es-ES',
        },
      },
    }),
  ],
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
    fallback: {
      es: 'en',
    },
  },
  image: {
    domains: [],
    remotePatterns: [{ protocol: 'https' }],
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});
