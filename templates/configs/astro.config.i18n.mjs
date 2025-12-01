/**
 * Astro Configuration - Multi-language Site
 *
 * Optimized for:
 * - International/Corporate sites
 * - Multiple languages (DE, EN, ES, etc.)
 * - SEO per locale
 * - CMS integration ready
 */

import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';

export default defineConfig({
  // Production URL
  site: 'https://www.example.com',

  // Hybrid for forms/API
  output: 'hybrid',

  // Netlify adapter (good i18n redirect support)
  adapter: netlify({
    edgeMiddleware: true,
  }),

  // i18n Configuration
  i18n: {
    // Default language
    defaultLocale: 'de',

    // Supported locales
    locales: ['de', 'en', 'es', 'fr'],

    // Routing strategy
    routing: {
      prefixDefaultLocale: false, // /about instead of /de/about for German
      redirectToDefaultLocale: true,
    },

    // Fallback behavior
    fallback: {
      es: 'en', // Spanish falls back to English
      fr: 'en', // French falls back to English
    },
  },

  // Integrations
  integrations: [
    tailwind({ applyBaseStyles: true }),

    mdx(),

    react(), // For forms, language switcher

    sitemap({
      // Generate sitemap for all locales
      i18n: {
        defaultLocale: 'de',
        locales: {
          de: 'de-DE',
          en: 'en-US',
          es: 'es-ES',
          fr: 'fr-FR',
        },
      },
      // Custom serialization
      serialize: (item) => {
        // Add hreflang alternates
        const locales = ['de', 'en', 'es', 'fr'];
        const basePath = item.url.replace(/^\/(de|en|es|fr)/, '');

        item.links = locales.map((locale) => ({
          lang: locale,
          url:
            locale === 'de'
              ? `https://www.example.com${basePath}`
              : `https://www.example.com/${locale}${basePath}`,
        }));

        return item;
      },
    }),
  ],

  // Image optimization
  image: {
    domains: ['images.ctfassets.net', 'cdn.sanity.io'],
  },

  // Redirects for old URLs
  redirects: {
    // Language redirects
    '/impressum': '/legal/impressum',
    '/en/imprint': '/en/legal/imprint',

    // Old structure
    '/produkte': '/products',
    '/en/products': '/en/products',
  },

  // Vite configuration
  vite: {
    resolve: {
      alias: {
        '@i18n': '/src/i18n',
        '@components': '/src/components',
      },
    },
  },
});

// -----------------------------
// i18n Utility (src/i18n/index.ts):
// -----------------------------
/*
export const languages = {
  de: 'Deutsch',
  en: 'English',
  es: 'Español',
  fr: 'Français',
};

export const defaultLang = 'de';

export type Lang = keyof typeof languages;

export const ui = {
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.about': 'Über uns',
    'nav.services': 'Leistungen',
    'nav.products': 'Produkte',
    'nav.contact': 'Kontakt',

    // Common
    'common.readMore': 'Mehr erfahren',
    'common.submit': 'Absenden',
    'common.loading': 'Lädt...',
    'common.error': 'Ein Fehler ist aufgetreten',

    // Footer
    'footer.privacy': 'Datenschutz',
    'footer.imprint': 'Impressum',
    'footer.terms': 'AGB',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.products': 'Products',
    'nav.contact': 'Contact',

    'common.readMore': 'Read more',
    'common.submit': 'Submit',
    'common.loading': 'Loading...',
    'common.error': 'An error occurred',

    'footer.privacy': 'Privacy Policy',
    'footer.imprint': 'Imprint',
    'footer.terms': 'Terms & Conditions',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Nosotros',
    'nav.services': 'Servicios',
    'nav.products': 'Productos',
    'nav.contact': 'Contacto',

    'common.readMore': 'Leer más',
    'common.submit': 'Enviar',
    'common.loading': 'Cargando...',
    'common.error': 'Ha ocurrido un error',

    'footer.privacy': 'Privacidad',
    'footer.imprint': 'Aviso legal',
    'footer.terms': 'Términos',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.services': 'Services',
    'nav.products': 'Produits',
    'nav.contact': 'Contact',

    'common.readMore': 'En savoir plus',
    'common.submit': 'Soumettre',
    'common.loading': 'Chargement...',
    'common.error': 'Une erreur s\'est produite',

    'footer.privacy': 'Confidentialité',
    'footer.imprint': 'Mentions légales',
    'footer.terms': 'Conditions',
  },
} as const;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof ui[typeof defaultLang]): string {
    return ui[lang][key] || ui[defaultLang][key] || key;
  }
}

export function getLocalizedPath(path: string, lang: Lang): string {
  if (lang === defaultLang) return path;
  return `/${lang}${path}`;
}
*/

// -----------------------------
// Language Switcher (src/components/LanguageSwitcher.astro):
// -----------------------------
/*
---
import { languages, getLangFromUrl, getLocalizedPath } from '../i18n';

const currentLang = getLangFromUrl(Astro.url);
const currentPath = Astro.url.pathname.replace(/^\/(de|en|es|fr)/, '') || '/';
---

<div class="language-switcher">
  {Object.entries(languages).map(([lang, label]) => (
    <a
      href={getLocalizedPath(currentPath, lang)}
      class:list={[
        'lang-link',
        { active: lang === currentLang }
      ]}
      hreflang={lang}
    >
      {label}
    </a>
  ))}
</div>

<style>
  .language-switcher {
    display: flex;
    gap: 0.5rem;
  }
  .lang-link {
    padding: 0.25rem 0.5rem;
    text-decoration: none;
    color: inherit;
    opacity: 0.7;
  }
  .lang-link.active {
    opacity: 1;
    font-weight: bold;
  }
  .lang-link:hover {
    opacity: 1;
  }
</style>
*/

// -----------------------------
// Page with i18n (src/pages/[lang]/about.astro):
// -----------------------------
/*
---
import { getLangFromUrl, useTranslations, languages } from '../../i18n';
import Layout from '../../layouts/Layout.astro';

export function getStaticPaths() {
  return Object.keys(languages).map(lang => ({ params: { lang } }));
}

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
---

<Layout title={t('nav.about')}>
  <h1>{t('nav.about')}</h1>
  <!-- Content -->
</Layout>
*/
