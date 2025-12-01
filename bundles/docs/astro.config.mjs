import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.your-project.com', // CAMBIAR
  integrations: [
    starlight({
      title: 'My Docs', // CAMBIAR
      description: 'Documentation for My Project', // CAMBIAR

      // Branding
      logo: {
        src: './src/assets/logo.svg',
        alt: 'My Project Logo',
      },
      favicon: '/favicon.svg',

      // Social links
      social: {
        github: 'https://github.com/your-username/your-repo',
        discord: 'https://discord.gg/your-invite',
      },

      // i18n
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'Deutsch',
          lang: 'de',
        },
        en: {
          label: 'English',
          lang: 'en',
        },
        es: {
          label: 'Español',
          lang: 'es',
        },
      },

      // Sidebar navigation
      sidebar: [
        {
          label: 'Erste Schritte',
          translations: {
            en: 'Getting Started',
            es: 'Primeros Pasos',
          },
          items: [
            { label: 'Einführung', slug: 'guides/introduction' },
            { label: 'Installation', slug: 'guides/installation' },
            { label: 'Schnellstart', slug: 'guides/quickstart' },
          ],
        },
        {
          label: 'Kernkonzepte',
          translations: {
            en: 'Core Concepts',
            es: 'Conceptos Principales',
          },
          autogenerate: { directory: 'concepts' },
        },
        {
          label: 'API-Referenz',
          translations: {
            en: 'API Reference',
            es: 'Referencia API',
          },
          autogenerate: { directory: 'api' },
        },
        {
          label: 'Beispiele',
          translations: {
            en: 'Examples',
            es: 'Ejemplos',
          },
          autogenerate: { directory: 'examples' },
        },
      ],

      // Components customization
      components: {
        // Override components if needed
        // Header: './src/components/CustomHeader.astro',
      },

      // Custom CSS
      customCss: ['./src/styles/custom.css'],

      // Search (Pagefind - included by default)
      pagefind: true,

      // Table of contents
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },

      // Edit links
      editLink: {
        baseUrl: 'https://github.com/your-username/your-repo/edit/main/',
      },

      // Last updated
      lastUpdated: true,

      // Pagination
      pagination: true,

      // Credits
      credits: false,
    }),
  ],
});
