import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://your-saas.com', // CAMBIAR
  // Astro 6: SSG por defecto. Routes de app/dashboard que necesitan SSR
  // declaran `export const prerender = false`. Reemplaza 'hybrid'.
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    imageService: true,
  }),
  integrations: [
    react(),
    sitemap({
      filter: (page) =>
        !page.includes('/app/') && !page.includes('/dashboard/'),
    }),
    mdx(),
  ],
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
