/**
 * i18n Utilities Index - WenderMedia Astro Components
 *
 * Complete internationalization toolkit for Astro projects.
 */

// Translation System
export {
  createTranslator,
  defaultTranslations,
  getAvailableLocales,
  mergeTranslations,
} from './translations';

export type {
  TranslationValue,
  TranslationDictionary,
  Translations,
} from './translations';

// Locale Management
export {
  defaultLocaleConfig,
  localeMetadata,
  detectBrowserLocale,
  getLocaleFromPath,
  removeLocaleFromPath,
  addLocaleToPath,
  getLocaleDirection,
  getLocaleName,
  formatDate,
  formatNumber,
  formatCurrency,
  formatRelativeTime,
  generateHreflangTags,
} from './locale';

export type { LocaleConfig } from './locale';
