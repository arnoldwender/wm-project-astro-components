/**
 * Sitemap Configuration Helpers
 *
 * Utilities for configuring @astrojs/sitemap
 */

import type { SitemapOptions } from '@astrojs/sitemap';

/**
 * Default sitemap configuration
 */
export const defaultSitemapConfig: SitemapOptions = {
  changefreq: 'weekly',
  priority: 0.7,
  lastmod: new Date(),
};

/**
 * Blog sitemap configuration
 */
export const blogSitemapConfig: SitemapOptions = {
  filter: (page) => !page.includes('/draft/') && !page.includes('/preview/'),
  changefreq: 'weekly',
  priority: 0.7,
  lastmod: new Date(),
  serialize: (item) => {
    // Higher priority for home and main sections
    if (item.url === '/') {
      item.priority = 1.0;
      item.changefreq = 'daily';
    } else if (item.url.match(/^\/blog\/?$/)) {
      item.priority = 0.9;
      item.changefreq = 'daily';
    } else if (item.url.includes('/blog/')) {
      item.priority = 0.8;
      item.changefreq = 'weekly';
    } else if (item.url.includes('/categories/')) {
      item.priority = 0.6;
      item.changefreq = 'weekly';
    } else if (item.url.includes('/tags/')) {
      item.priority = 0.5;
      item.changefreq = 'monthly';
    }
    return item;
  },
};

/**
 * E-commerce sitemap configuration
 */
export const ecommerceSitemapConfig: SitemapOptions = {
  filter: (page) => {
    // Exclude user-specific and transactional pages
    const excludePatterns = [
      '/cart',
      '/checkout',
      '/account',
      '/order',
      '/wishlist',
      '/api/',
      '/admin/',
    ];
    return !excludePatterns.some((pattern) => page.includes(pattern));
  },
  changefreq: 'daily',
  priority: 0.7,
  serialize: (item) => {
    // Product pages get highest priority
    if (item.url.includes('/products/') && !item.url.includes('/category/')) {
      item.priority = 0.9;
      item.changefreq = 'daily';
    }
    // Category pages
    else if (item.url.includes('/category/')) {
      item.priority = 0.8;
      item.changefreq = 'daily';
    }
    // Home page
    else if (item.url === '/' || item.url.endsWith('/products')) {
      item.priority = 1.0;
      item.changefreq = 'daily';
    }
    return item;
  },
};

/**
 * Multi-language sitemap configuration
 */
export function createI18nSitemapConfig(config: {
  defaultLocale: string;
  locales: Record<string, string>; // { 'de': 'de-DE', 'en': 'en-US' }
  siteUrl: string;
}): SitemapOptions {
  const { defaultLocale, locales, siteUrl } = config;
  const localeKeys = Object.keys(locales);

  return {
    i18n: {
      defaultLocale,
      locales,
    },
    serialize: (item) => {
      // Generate hreflang alternates
      const basePath = item.url
        .replace(siteUrl, '')
        .replace(new RegExp(`^/(${localeKeys.join('|')})/`), '/');

      const alternates = localeKeys.map((locale) => {
        const localePath =
          locale === defaultLocale ? basePath : `/${locale}${basePath}`;
        return {
          href: `${siteUrl}${localePath}`,
          hreflang: locales[locale],
        };
      });

      // Add x-default
      alternates.push({
        href: `${siteUrl}${basePath}`,
        hreflang: 'x-default',
      });

      return {
        ...item,
        links: alternates,
      };
    },
  };
}

/**
 * Documentation sitemap configuration
 */
export const docsSitemapConfig: SitemapOptions = {
  filter: (page) => !page.includes('/api-internal/'),
  changefreq: 'weekly',
  priority: 0.7,
  serialize: (item) => {
    // Getting started and main guides get priority
    if (item.url.includes('/getting-started/') || item.url.includes('/guides/')) {
      item.priority = 0.9;
      item.changefreq = 'weekly';
    }
    // API reference
    else if (item.url.includes('/api/') || item.url.includes('/reference/')) {
      item.priority = 0.8;
      item.changefreq = 'weekly';
    }
    // Changelog
    else if (item.url.includes('/changelog')) {
      item.priority = 0.6;
      item.changefreq = 'daily';
    }
    return item;
  },
};

// -----------------------------
// Usage in astro.config.mjs:
// -----------------------------
/*
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import {
  blogSitemapConfig,
  ecommerceSitemapConfig,
  createI18nSitemapConfig,
} from './utilities/seo/Sitemap';

// For a blog
export default defineConfig({
  site: 'https://example.com',
  integrations: [
    sitemap(blogSitemapConfig),
  ],
});

// For e-commerce
export default defineConfig({
  site: 'https://shop.example.com',
  integrations: [
    sitemap(ecommerceSitemapConfig),
  ],
});

// For multi-language
export default defineConfig({
  site: 'https://example.com',
  integrations: [
    sitemap(createI18nSitemapConfig({
      defaultLocale: 'de',
      locales: {
        de: 'de-DE',
        en: 'en-US',
        es: 'es-ES',
      },
      siteUrl: 'https://example.com',
    })),
  ],
});
*/
