import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://your-affiliate-site.com', // CAMBIAR
  output: 'hybrid',
  adapter: cloudflare({
    imageService: 'cloudflare',
  }),
  integrations: [
    mdx(),
    tailwind({
      applyBaseStyles: false,
    }),
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
  experimental: {
    contentLayer: true,
  },
});
