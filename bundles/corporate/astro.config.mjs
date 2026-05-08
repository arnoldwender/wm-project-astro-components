import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://your-company.com', // CAMBIAR
  // Astro 6: `output: 'static'` is the default. Per-route opt-in via
  // `export const prerender = false` for SSR routes (replaces 'hybrid').
  adapter: netlify({
    imageCDN: true,
  }),
  integrations: [
    mdx(),
    react(),
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
  vite: {
    plugins: [tailwindcss()],
  },
});
