/**
 * Locale Detection & Management - WenderMedia Astro Components
 *
 * Utilities for detecting user locale, managing locale state,
 * and formatting locale-specific content.
 */

export interface LocaleConfig {
  default: string;
  supported: string[];
  fallback: string;
}

export const defaultLocaleConfig: LocaleConfig = {
  default: 'de',
  supported: ['de', 'en', 'es', 'fr', 'it', 'nl', 'pl'],
  fallback: 'de',
};

/**
 * Locale metadata for common languages
 */
export const localeMetadata: Record<string, {
  name: string;
  nativeName: string;
  dir: 'ltr' | 'rtl';
  dateFormat: string;
  numberFormat: Intl.NumberFormatOptions;
  currency: string;
}> = {
  de: {
    name: 'German',
    nativeName: 'Deutsch',
    dir: 'ltr',
    dateFormat: 'DD.MM.YYYY',
    numberFormat: { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 },
    currency: 'EUR',
  },
  en: {
    name: 'English',
    nativeName: 'English',
    dir: 'ltr',
    dateFormat: 'MM/DD/YYYY',
    numberFormat: { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 },
    currency: 'USD',
  },
  es: {
    name: 'Spanish',
    nativeName: 'Español',
    dir: 'ltr',
    dateFormat: 'DD/MM/YYYY',
    numberFormat: { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 },
    currency: 'EUR',
  },
  fr: {
    name: 'French',
    nativeName: 'Français',
    dir: 'ltr',
    dateFormat: 'DD/MM/YYYY',
    numberFormat: { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 },
    currency: 'EUR',
  },
  it: {
    name: 'Italian',
    nativeName: 'Italiano',
    dir: 'ltr',
    dateFormat: 'DD/MM/YYYY',
    numberFormat: { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 },
    currency: 'EUR',
  },
  nl: {
    name: 'Dutch',
    nativeName: 'Nederlands',
    dir: 'ltr',
    dateFormat: 'DD-MM-YYYY',
    numberFormat: { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 },
    currency: 'EUR',
  },
  pl: {
    name: 'Polish',
    nativeName: 'Polski',
    dir: 'ltr',
    dateFormat: 'DD.MM.YYYY',
    numberFormat: { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 },
    currency: 'PLN',
  },
  ar: {
    name: 'Arabic',
    nativeName: 'العربية',
    dir: 'rtl',
    dateFormat: 'YYYY/MM/DD',
    numberFormat: { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 },
    currency: 'AED',
  },
  he: {
    name: 'Hebrew',
    nativeName: 'עברית',
    dir: 'rtl',
    dateFormat: 'DD/MM/YYYY',
    numberFormat: { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 },
    currency: 'ILS',
  },
};

/**
 * Detect user's preferred locale from browser
 */
export function detectBrowserLocale(config: LocaleConfig = defaultLocaleConfig): string {
  if (typeof navigator === 'undefined') {
    return config.default;
  }

  // Get browser languages
  const browserLanguages = navigator.languages || [navigator.language];

  for (const lang of browserLanguages) {
    // Extract base language (e.g., 'de' from 'de-DE')
    const baseLocale = lang.split('-')[0].toLowerCase();

    if (config.supported.includes(baseLocale)) {
      return baseLocale;
    }
  }

  return config.fallback;
}

/**
 * Get locale from URL path
 * e.g., /de/about -> 'de', /en/about -> 'en'
 */
export function getLocaleFromPath(
  pathname: string,
  config: LocaleConfig = defaultLocaleConfig
): string | null {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];

  if (firstSegment && config.supported.includes(firstSegment)) {
    return firstSegment;
  }

  return null;
}

/**
 * Remove locale prefix from path
 * e.g., /de/about -> /about
 */
export function removeLocaleFromPath(
  pathname: string,
  config: LocaleConfig = defaultLocaleConfig
): string {
  const locale = getLocaleFromPath(pathname, config);

  if (locale) {
    return pathname.replace(new RegExp(`^/${locale}`), '') || '/';
  }

  return pathname;
}

/**
 * Add locale prefix to path
 * e.g., /about + 'de' -> /de/about
 */
export function addLocaleToPath(
  pathname: string,
  locale: string,
  config: LocaleConfig = defaultLocaleConfig
): string {
  // Remove any existing locale prefix
  const cleanPath = removeLocaleFromPath(pathname, config);

  // Don't add prefix for default locale (optional SEO optimization)
  if (locale === config.default) {
    return cleanPath;
  }

  return `/${locale}${cleanPath === '/' ? '' : cleanPath}`;
}

/**
 * Get text direction for locale
 */
export function getLocaleDirection(locale: string): 'ltr' | 'rtl' {
  return localeMetadata[locale]?.dir || 'ltr';
}

/**
 * Get locale display name
 */
export function getLocaleName(locale: string, native: boolean = true): string {
  const meta = localeMetadata[locale];
  if (!meta) return locale;
  return native ? meta.nativeName : meta.name;
}

/**
 * Format date for locale
 */
export function formatDate(
  date: Date,
  locale: string,
  options?: Intl.DateTimeFormatOptions
): string {
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return new Intl.DateTimeFormat(locale, { ...defaultOptions, ...options }).format(date);
}

/**
 * Format number for locale
 */
export function formatNumber(
  value: number,
  locale: string,
  options?: Intl.NumberFormatOptions
): string {
  const meta = localeMetadata[locale];
  const defaultOptions = meta?.numberFormat || {};

  return new Intl.NumberFormat(locale, { ...defaultOptions, ...options }).format(value);
}

/**
 * Format currency for locale
 */
export function formatCurrency(
  value: number,
  locale: string,
  currency?: string
): string {
  const meta = localeMetadata[locale];
  const currencyCode = currency || meta?.currency || 'EUR';

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode,
  }).format(value);
}

/**
 * Format relative time (e.g., "2 days ago")
 */
export function formatRelativeTime(
  date: Date,
  locale: string,
  now: Date = new Date()
): string {
  const diffMs = date.getTime() - now.getTime();
  const diffSec = Math.round(diffMs / 1000);
  const diffMin = Math.round(diffSec / 60);
  const diffHour = Math.round(diffMin / 60);
  const diffDay = Math.round(diffHour / 24);
  const diffWeek = Math.round(diffDay / 7);
  const diffMonth = Math.round(diffDay / 30);
  const diffYear = Math.round(diffDay / 365);

  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });

  if (Math.abs(diffYear) >= 1) return rtf.format(diffYear, 'year');
  if (Math.abs(diffMonth) >= 1) return rtf.format(diffMonth, 'month');
  if (Math.abs(diffWeek) >= 1) return rtf.format(diffWeek, 'week');
  if (Math.abs(diffDay) >= 1) return rtf.format(diffDay, 'day');
  if (Math.abs(diffHour) >= 1) return rtf.format(diffHour, 'hour');
  if (Math.abs(diffMin) >= 1) return rtf.format(diffMin, 'minute');

  return rtf.format(diffSec, 'second');
}

/**
 * Generate hreflang tags for SEO
 */
export function generateHreflangTags(
  currentPath: string,
  baseUrl: string,
  config: LocaleConfig = defaultLocaleConfig
): Array<{ hreflang: string; href: string }> {
  const cleanPath = removeLocaleFromPath(currentPath, config);

  const tags = config.supported.map((locale) => ({
    hreflang: locale,
    href: `${baseUrl}${addLocaleToPath(cleanPath, locale, config)}`,
  }));

  // Add x-default pointing to default locale
  tags.push({
    hreflang: 'x-default',
    href: `${baseUrl}${addLocaleToPath(cleanPath, config.default, config)}`,
  });

  return tags;
}
