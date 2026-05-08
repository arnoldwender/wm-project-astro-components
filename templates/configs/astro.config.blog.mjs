/**
 * Astro 6 + Tailwind 4 Configuration — Blog/Magazine Site
 *
 * Tailwind 4 is now a Vite plugin (no @astrojs/tailwind).
 * Configure tokens in your CSS via @theme blocks (no tailwind.config.js).
 *
 * Example src/styles/global.css:
 *   @import "tailwindcss";
 *   @plugin "@tailwindcss/typography";
 *   @theme {
 *     --color-primary: #003263;
 *     --font-sans: 'Inter', sans-serif;
 *   }
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
import tailwindcss from '@tailwindcss/vite';

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

    // Tailwind 4 lives in vite.plugins below — @astrojs/tailwind is no longer used.

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
    // Remote image domains — replace with the domains you actually use.
    // Avoid stock-photo CDNs as default; configure to your own asset host.
    domains: ['cdn.example.com'],
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
    plugins: [tailwindcss()],
    build: {
      // CSS code splitting
      cssCodeSplit: true,
      // Minification
      minify: 'esbuild',
    },
    // Environment variables prefix
    envPrefix: 'PUBLIC_',
  },
});
