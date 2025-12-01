/**
 * Astro Configuration - Documentation Site
 *
 * Using Starlight for full-featured docs.
 * For custom docs, see astro.config.custom-docs.mjs
 */

import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  // Production URL
  site: 'https://docs.example.com',

  // Static output
  output: 'static',

  // Integrations
  integrations: [
    starlight({
      // Site title
      title: 'My Docs',

      // Logo
      logo: {
        src: './src/assets/logo.svg',
        alt: 'My Project Logo',
        replacesTitle: false, // Show title alongside logo
      },

      // Social links
      social: {
        github: 'https://github.com/your-org/your-repo',
        twitter: 'https://twitter.com/yourhandle',
        discord: 'https://discord.gg/yourserver',
      },

      // Default language
      defaultLocale: 'root',

      // Locales
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },
        de: {
          label: 'Deutsch',
          lang: 'de',
        },
        es: {
          label: 'Español',
          lang: 'es',
        },
      },

      // Sidebar navigation
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', slug: 'getting-started/introduction' },
            { label: 'Installation', slug: 'getting-started/installation' },
            { label: 'Quick Start', slug: 'getting-started/quick-start' },
          ],
        },
        {
          label: 'Guides',
          autogenerate: { directory: 'guides' },
        },
        {
          label: 'API Reference',
          collapsed: true,
          autogenerate: { directory: 'api' },
        },
        {
          label: 'Examples',
          items: [
            { label: 'Basic Example', slug: 'examples/basic' },
            { label: 'Advanced Example', slug: 'examples/advanced' },
            { label: 'Real World Apps', slug: 'examples/real-world' },
          ],
        },
        {
          label: 'Resources',
          items: [
            { label: 'FAQ', slug: 'resources/faq' },
            { label: 'Troubleshooting', slug: 'resources/troubleshooting' },
            { label: 'Changelog', slug: 'resources/changelog' },
            { label: 'Migration Guide', slug: 'resources/migration' },
          ],
        },
      ],

      // Edit page link
      editLink: {
        baseUrl: 'https://github.com/your-org/your-repo/edit/main/docs/',
      },

      // Custom CSS
      customCss: ['./src/styles/custom.css'],

      // Components customization
      components: {
        // Override specific components
        // Header: './src/components/CustomHeader.astro',
        // Footer: './src/components/CustomFooter.astro',
      },

      // Last updated dates
      lastUpdated: true,

      // Pagination
      pagination: true,

      // Table of contents
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },

      // Favicon
      favicon: '/favicon.svg',

      // Head tags
      head: [
        // Analytics
        {
          tag: 'script',
          attrs: {
            src: 'https://plausible.io/js/script.js',
            'data-domain': 'docs.example.com',
            defer: true,
          },
        },
        // Open Graph
        {
          tag: 'meta',
          attrs: {
            property: 'og:image',
            content: 'https://docs.example.com/og-image.png',
          },
        },
      ],

      // Express code (syntax highlighting)
      expressiveCode: {
        themes: ['github-dark', 'github-light'],
        useStarlightDarkModeSwitch: true,
        styleOverrides: {
          borderRadius: '0.5rem',
        },
      },

      // Credits in footer
      credits: false,
    }),
  ],

  // Image optimization
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
});

// -----------------------------
// Custom CSS (src/styles/custom.css):
// -----------------------------
/*
:root {
  --sl-color-accent-low: #1e3a5f;
  --sl-color-accent: #3b82f6;
  --sl-color-accent-high: #93c5fd;
  --sl-color-white: #ffffff;
  --sl-color-gray-1: #f8fafc;
  --sl-color-gray-2: #e2e8f0;
  --sl-color-gray-3: #cbd5e1;
  --sl-color-gray-4: #94a3b8;
  --sl-color-gray-5: #64748b;
  --sl-color-gray-6: #475569;
  --sl-color-black: #0f172a;
}

:root[data-theme='dark'] {
  --sl-color-accent-low: #1e3a5f;
  --sl-color-accent: #60a5fa;
  --sl-color-accent-high: #bfdbfe;
  --sl-color-white: #0f172a;
  --sl-color-gray-1: #1e293b;
  --sl-color-gray-2: #334155;
  --sl-color-gray-3: #475569;
  --sl-color-gray-4: #64748b;
  --sl-color-gray-5: #94a3b8;
  --sl-color-gray-6: #cbd5e1;
  --sl-color-black: #f8fafc;
}
*/

// -----------------------------
// Example doc page (src/content/docs/getting-started/introduction.mdx):
// -----------------------------
/*
---
title: Introduction
description: Get started with our product
---

import { Aside, Card, CardGrid, LinkCard, Tabs, TabItem } from '@astrojs/starlight/components';

Welcome to our documentation!

<Aside type="tip">
  This is a helpful tip for users getting started.
</Aside>

## Features

<CardGrid>
  <Card title="Fast" icon="rocket">
    Built for speed from the ground up.
  </Card>
  <Card title="Flexible" icon="setting">
    Customize everything to your needs.
  </Card>
</CardGrid>

## Installation

<Tabs>
  <TabItem label="npm">
    ```bash
    npm install my-package
    ```
  </TabItem>
  <TabItem label="pnpm">
    ```bash
    pnpm add my-package
    ```
  </TabItem>
  <TabItem label="yarn">
    ```bash
    yarn add my-package
    ```
  </TabItem>
</Tabs>

## Next Steps

<LinkCard
  title="Quick Start Guide"
  description="Learn the basics in 5 minutes"
  href="/getting-started/quick-start"
/>
*/
