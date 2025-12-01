/**
 * Astro Configuration - Blog/Magazine Site
 *
 * Optimized for:
 * - Content-heavy sites
 * - SEO (sitemap, RSS)
 * - Image optimization
 * - MDX for rich content
 */

import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// Optional: Add React for interactive components
// import react from '@astrojs/react';

// Optional: Partytown for analytics
// import partytown from '@astrojs/partytown';

export default defineConfig({
  // Your production URL
  site: 'https://example.com',

  // Static output (default)
  output: 'static',

  // Integrations
  integrations: [
    mdx({
      // Syntax highlighting
      syntaxHighlight: 'shiki',
      shikiConfig: {
        theme: 'github-dark',
        wrap: true,
      },
      // Optimize MDX output
      optimize: true,
    }),

    sitemap({
      // Sitemap options
      filter: (page) => !page.includes('/draft/'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      // i18n support
      i18n: {
        defaultLocale: 'de',
        locales: {
          de: 'de-DE',
          en: 'en-US',
        },
      },
    }),

    tailwind({
      // Apply base styles
      applyBaseStyles: true,
      // Nesting support
      nesting: true,
    }),

    // react(),

    // partytown({
    //   config: {
    //     forward: ['dataLayer.push', 'gtag'],
    //   },
    // }),
  ],

  // Markdown configuration
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
    remarkPlugins: [
      // Add remark plugins here
      // 'remark-gfm', // GitHub Flavored Markdown
    ],
    rehypePlugins: [
      // Add rehype plugins here
      // ['rehype-external-links', { target: '_blank', rel: ['noopener'] }],
    ],
  },

  // Image optimization
  image: {
    // Remote image domains
    domains: ['images.unsplash.com', 'cdn.example.com'],
    // Service configuration
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        limitInputPixels: false, // Allow large images
      },
    },
  },

  // Prefetch configuration
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },

  // Build options
  build: {
    // Inline small assets
    inlineStylesheets: 'auto',
    // Asset optimization
    assets: '_assets',
  },

  // Vite configuration
  vite: {
    build: {
      // CSS code splitting
      cssCodeSplit: true,
      // Minification
      minify: 'esbuild',
    },
    // Environment variables prefix
    envPrefix: 'PUBLIC_',
  },

  // Experimental features
  experimental: {
    // Content layer (Astro 5)
    // contentLayer: true,
  },
});
