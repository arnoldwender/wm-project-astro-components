import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://your-affiliate-site.com', // CAMBIAR
  // Astro 6: `output: 'static'` is the default. Per-route opt-in via
  // `export const prerender = false` for SSR routes (replaces 'hybrid').
  adapter: cloudflare({
    imageService: 'cloudflare',
  }),
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/preview/'),
      changefreq: 'weekly',
      priority: 0.7,
      serialize: (item) => {
        // Priorizar páginas de productos
        if (item.url.includes('/products/')) {
          item.priority = 0.9;
        }
        if (item.url.includes('/reviews/')) {
          item.priority = 0.8;
        }
        return item;
      },
    }),
    partytown({
      config: {
        forward: ['dataLayer.push', 'gtag'],
      },
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
  image: {
    domains: ['m.media-amazon.com', 'images-na.ssl-images-amazon.com'],
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
