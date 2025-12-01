import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://your-portfolio.com', // CAMBIAR
  integrations: [
    svelte(),
    sitemap(),
    tailwind({
      applyBaseStyles: false,
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
  vite: {
    ssr: {
      noExternal: ['gsap'],
    },
  },
});
