/**
 * Translation System - WenderMedia Astro Components
 *
 * Type-safe translation system with interpolation and pluralization.
 * Supports nested keys and fallback languages.
 *
 * @example
 * const t = createTranslator('de', translations);
 * t('nav.home'); // "Startseite"
 * t('items.count', { count: 5 }); // "5 Artikel"
 */

export type TranslationValue = string | ((params: Record<string, unknown>) => string);

export interface TranslationDictionary {
  [key: string]: TranslationValue | TranslationDictionary;
}

export interface Translations {
  [locale: string]: TranslationDictionary;
}

/**
 * Default German translations for common UI elements
 */
export const defaultTranslations: Translations = {
  de: {
    // Navigation
    nav: {
      home: 'Startseite',
      about: 'Über uns',
      services: 'Leistungen',
      portfolio: 'Portfolio',
      blog: 'Blog',
      contact: 'Kontakt',
      search: 'Suchen',
      menu: 'Menü',
      close: 'Schließen',
    },
    // Common Actions
    actions: {
      submit: 'Absenden',
      cancel: 'Abbrechen',
      save: 'Speichern',
      delete: 'Löschen',
      edit: 'Bearbeiten',
      add: 'Hinzufügen',
      remove: 'Entfernen',
      confirm: 'Bestätigen',
      back: 'Zurück',
      next: 'Weiter',
      previous: 'Zurück',
      loading: 'Wird geladen...',
      retry: 'Erneut versuchen',
      readMore: 'Mehr lesen',
      showMore: 'Mehr anzeigen',
      showLess: 'Weniger anzeigen',
    },
    // Forms
    forms: {
      required: 'Pflichtfeld',
      optional: 'Optional',
      email: 'E-Mail-Adresse',
      password: 'Passwort',
      name: 'Name',
      firstName: 'Vorname',
      lastName: 'Nachname',
      phone: 'Telefon',
      message: 'Nachricht',
      subject: 'Betreff',
      company: 'Unternehmen',
      website: 'Website',
      privacyConsent: 'Ich stimme der Datenschutzerklärung zu',
      newsletterConsent: 'Ich möchte den Newsletter erhalten',
      errors: {
        required: 'Dieses Feld ist erforderlich',
        email: 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
        phone: 'Bitte geben Sie eine gültige Telefonnummer ein',
        minLength: ({ min }: { min: number }) => `Mindestens ${min} Zeichen erforderlich`,
        maxLength: ({ max }: { max: number }) => `Maximal ${max} Zeichen erlaubt`,
      },
    },
    // Messages
    messages: {
      success: 'Erfolgreich!',
      error: 'Ein Fehler ist aufgetreten',
      info: 'Information',
      warning: 'Warnung',
      formSuccess: 'Ihre Nachricht wurde erfolgreich gesendet.',
      formError: 'Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.',
      noResults: 'Keine Ergebnisse gefunden',
      noItems: 'Keine Einträge vorhanden',
    },
    // Dates
    dates: {
      today: 'Heute',
      yesterday: 'Gestern',
      tomorrow: 'Morgen',
      days: ({ count }: { count: number }) => count === 1 ? '1 Tag' : `${count} Tage`,
      weeks: ({ count }: { count: number }) => count === 1 ? '1 Woche' : `${count} Wochen`,
      months: ({ count }: { count: number }) => count === 1 ? '1 Monat' : `${count} Monate`,
      years: ({ count }: { count: number }) => count === 1 ? '1 Jahr' : `${count} Jahre`,
      ago: 'vor',
      in: 'in',
    },
    // Pagination
    pagination: {
      previous: 'Zurück',
      next: 'Weiter',
      page: 'Seite',
      of: 'von',
      items: ({ count }: { count: number }) => count === 1 ? '1 Eintrag' : `${count} Einträge`,
      showing: ({ from, to, total }: { from: number; to: number; total: number }) =>
        `Zeige ${from}-${to} von ${total}`,
    },
    // Accessibility
    a11y: {
      skipToContent: 'Zum Inhalt springen',
      skipToNav: 'Zur Navigation springen',
      openMenu: 'Menü öffnen',
      closeMenu: 'Menü schließen',
      newWindow: 'Öffnet in neuem Fenster',
      externalLink: 'Externer Link',
      loading: 'Wird geladen',
      expand: 'Ausklappen',
      collapse: 'Einklappen',
    },
    // E-commerce
    shop: {
      addToCart: 'In den Warenkorb',
      removeFromCart: 'Aus dem Warenkorb entfernen',
      cart: 'Warenkorb',
      checkout: 'Zur Kasse',
      continueShopping: 'Weiter einkaufen',
      emptyCart: 'Ihr Warenkorb ist leer',
      subtotal: 'Zwischensumme',
      shipping: 'Versand',
      tax: 'MwSt.',
      total: 'Gesamt',
      quantity: 'Menge',
      price: 'Preis',
      inStock: 'Auf Lager',
      outOfStock: 'Ausverkauft',
      preOrder: 'Vorbestellung',
    },
    // Blog
    blog: {
      readingTime: ({ minutes }: { minutes: number }) =>
        minutes === 1 ? '1 Min. Lesezeit' : `${minutes} Min. Lesezeit`,
      publishedOn: 'Veröffentlicht am',
      updatedOn: 'Aktualisiert am',
      author: 'Autor',
      categories: 'Kategorien',
      tags: 'Tags',
      relatedPosts: 'Ähnliche Artikel',
      comments: ({ count }: { count: number }) =>
        count === 0 ? 'Keine Kommentare' : count === 1 ? '1 Kommentar' : `${count} Kommentare`,
    },
    // Footer
    footer: {
      copyright: ({ year, name }: { year: number; name: string }) =>
        `© ${year} ${name}. Alle Rechte vorbehalten.`,
      privacy: 'Datenschutz',
      imprint: 'Impressum',
      terms: 'AGB',
      cookieSettings: 'Cookie-Einstellungen',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      portfolio: 'Portfolio',
      blog: 'Blog',
      contact: 'Contact',
      search: 'Search',
      menu: 'Menu',
      close: 'Close',
    },
    actions: {
      submit: 'Submit',
      cancel: 'Cancel',
      save: 'Save',
      delete: 'Delete',
      edit: 'Edit',
      add: 'Add',
      remove: 'Remove',
      confirm: 'Confirm',
      back: 'Back',
      next: 'Next',
      previous: 'Previous',
      loading: 'Loading...',
      retry: 'Try again',
      readMore: 'Read more',
      showMore: 'Show more',
      showLess: 'Show less',
    },
    forms: {
      required: 'Required',
      optional: 'Optional',
      email: 'Email address',
      password: 'Password',
      name: 'Name',
      firstName: 'First name',
      lastName: 'Last name',
      phone: 'Phone',
      message: 'Message',
      subject: 'Subject',
      company: 'Company',
      website: 'Website',
      privacyConsent: 'I agree to the privacy policy',
      newsletterConsent: 'I want to receive the newsletter',
      errors: {
        required: 'This field is required',
        email: 'Please enter a valid email address',
        phone: 'Please enter a valid phone number',
        minLength: ({ min }: { min: number }) => `Minimum ${min} characters required`,
        maxLength: ({ max }: { max: number }) => `Maximum ${max} characters allowed`,
      },
    },
    messages: {
      success: 'Success!',
      error: 'An error occurred',
      info: 'Information',
      warning: 'Warning',
      formSuccess: 'Your message has been sent successfully.',
      formError: 'An error occurred while sending. Please try again.',
      noResults: 'No results found',
      noItems: 'No items available',
    },
    dates: {
      today: 'Today',
      yesterday: 'Yesterday',
      tomorrow: 'Tomorrow',
      days: ({ count }: { count: number }) => count === 1 ? '1 day' : `${count} days`,
      weeks: ({ count }: { count: number }) => count === 1 ? '1 week' : `${count} weeks`,
      months: ({ count }: { count: number }) => count === 1 ? '1 month' : `${count} months`,
      years: ({ count }: { count: number }) => count === 1 ? '1 year' : `${count} years`,
      ago: 'ago',
      in: 'in',
    },
    pagination: {
      previous: 'Previous',
      next: 'Next',
      page: 'Page',
      of: 'of',
      items: ({ count }: { count: number }) => count === 1 ? '1 item' : `${count} items`,
      showing: ({ from, to, total }: { from: number; to: number; total: number }) =>
        `Showing ${from}-${to} of ${total}`,
    },
    a11y: {
      skipToContent: 'Skip to content',
      skipToNav: 'Skip to navigation',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      newWindow: 'Opens in new window',
      externalLink: 'External link',
      loading: 'Loading',
      expand: 'Expand',
      collapse: 'Collapse',
    },
    shop: {
      addToCart: 'Add to cart',
      removeFromCart: 'Remove from cart',
      cart: 'Cart',
      checkout: 'Checkout',
      continueShopping: 'Continue shopping',
      emptyCart: 'Your cart is empty',
      subtotal: 'Subtotal',
      shipping: 'Shipping',
      tax: 'Tax',
      total: 'Total',
      quantity: 'Quantity',
      price: 'Price',
      inStock: 'In stock',
      outOfStock: 'Out of stock',
      preOrder: 'Pre-order',
    },
    blog: {
      readingTime: ({ minutes }: { minutes: number }) =>
        minutes === 1 ? '1 min read' : `${minutes} min read`,
      publishedOn: 'Published on',
      updatedOn: 'Updated on',
      author: 'Author',
      categories: 'Categories',
      tags: 'Tags',
      relatedPosts: 'Related posts',
      comments: ({ count }: { count: number }) =>
        count === 0 ? 'No comments' : count === 1 ? '1 comment' : `${count} comments`,
    },
    footer: {
      copyright: ({ year, name }: { year: number; name: string }) =>
        `© ${year} ${name}. All rights reserved.`,
      privacy: 'Privacy',
      imprint: 'Legal notice',
      terms: 'Terms',
      cookieSettings: 'Cookie settings',
    },
  },
};

/**
 * Get nested translation value by dot notation key
 */
function getNestedValue(obj: TranslationDictionary, path: string): TranslationValue | undefined {
  const keys = path.split('.');
  let current: TranslationDictionary | TranslationValue = obj;

  for (const key of keys) {
    if (typeof current !== 'object' || current === null) {
      return undefined;
    }
    current = (current as TranslationDictionary)[key];
  }

  return current as TranslationValue | undefined;
}

/**
 * Create a translator function for a specific locale
 */
export function createTranslator(
  locale: string,
  translations: Translations = defaultTranslations,
  fallbackLocale: string = 'de'
) {
  return function t(key: string, params?: Record<string, unknown>): string {
    // Try current locale
    let value = getNestedValue(translations[locale] || {}, key);

    // Try fallback locale
    if (value === undefined && locale !== fallbackLocale) {
      value = getNestedValue(translations[fallbackLocale] || {}, key);
    }

    // Return key if not found
    if (value === undefined) {
      console.warn(`Translation missing: ${key} (locale: ${locale})`);
      return key;
    }

    // Handle function translations (for interpolation/pluralization)
    if (typeof value === 'function') {
      return value(params || {});
    }

    // Handle string interpolation
    if (typeof value === 'string' && params) {
      return value.replace(/\{(\w+)\}/g, (_, name) => String(params[name] ?? `{${name}}`));
    }

    return value;
  };
}

/**
 * Get all available locales from translations
 */
export function getAvailableLocales(translations: Translations = defaultTranslations): string[] {
  return Object.keys(translations);
}

/**
 * Merge custom translations with defaults
 */
export function mergeTranslations(
  custom: Translations,
  base: Translations = defaultTranslations
): Translations {
  const merged: Translations = { ...base };

  for (const locale of Object.keys(custom)) {
    merged[locale] = {
      ...base[locale],
      ...custom[locale],
    };
  }

  return merged;
}
