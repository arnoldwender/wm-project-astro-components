import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://your-blog.com', // CAMBIAR
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/draft/'),
      i18n: {
        defaultLocale: 'de',
        locales: {
          de: 'de-DE',
          en: 'en-US',
        },
      },
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  image: {
    domains: ['images.unsplash.com', 'cdn.your-blog.com'],
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
