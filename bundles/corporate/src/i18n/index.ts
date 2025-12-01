/**
 * i18n Utilities for Corporate Sites
 */

export const languages = {
  de: 'Deutsch',
  en: 'English',
  es: 'Español',
} as const;

export const defaultLang = 'de' as const;

export type Lang = keyof typeof languages;

// Traducciones UI
export const ui = {
  de: {
    'nav.home': 'Startseite',
    'nav.about': 'Über uns',
    'nav.services': 'Leistungen',
    'nav.team': 'Team',
    'nav.careers': 'Karriere',
    'nav.blog': 'Blog',
    'nav.contact': 'Kontakt',
    'footer.privacy': 'Datenschutz',
    'footer.imprint': 'Impressum',
    'footer.terms': 'AGB',
    'cta.contact': 'Kontakt aufnehmen',
    'cta.learn-more': 'Mehr erfahren',
    'cta.get-started': 'Jetzt starten',
    'form.name': 'Name',
    'form.email': 'E-Mail',
    'form.message': 'Nachricht',
    'form.send': 'Absenden',
    'form.consent': 'Ich stimme der Verarbeitung meiner Daten zu.',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.team': 'Team',
    'nav.careers': 'Careers',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'footer.privacy': 'Privacy Policy',
    'footer.imprint': 'Legal Notice',
    'footer.terms': 'Terms & Conditions',
    'cta.contact': 'Get in Touch',
    'cta.learn-more': 'Learn More',
    'cta.get-started': 'Get Started',
    'form.name': 'Name',
    'form.email': 'Email',
    'form.message': 'Message',
    'form.send': 'Send',
    'form.consent': 'I consent to the processing of my data.',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Nosotros',
    'nav.services': 'Servicios',
    'nav.team': 'Equipo',
    'nav.careers': 'Carreras',
    'nav.blog': 'Blog',
    'nav.contact': 'Contacto',
    'footer.privacy': 'Privacidad',
    'footer.imprint': 'Aviso Legal',
    'footer.terms': 'Términos',
    'cta.contact': 'Contáctanos',
    'cta.learn-more': 'Saber más',
    'cta.get-started': 'Comenzar',
    'form.name': 'Nombre',
    'form.email': 'Correo',
    'form.message': 'Mensaje',
    'form.send': 'Enviar',
    'form.consent': 'Consiento el procesamiento de mis datos.',
  },
} as const;

/**
 * Get translation for a key
 */
export function t(lang: Lang, key: keyof (typeof ui)['de']): string {
  return ui[lang][key] || ui[defaultLang][key] || key;
}

/**
 * Get language from URL
 */
export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Lang;
  return defaultLang;
}

/**
 * Get translated path
 */
export function getLocalizedPath(path: string, lang: Lang): string {
  if (lang === defaultLang) return path;
  return `/${lang}${path}`;
}

/**
 * Use translations hook-like function
 */
export function useTranslations(lang: Lang) {
  return (key: keyof (typeof ui)['de']) => t(lang, key);
}

/**
 * Get alternate language URLs for hreflang
 */
export function getAlternateUrls(
  currentPath: string,
  site: string
): { lang: string; url: string }[] {
  const path = currentPath.replace(/^\/(de|en|es)/, '');
  return Object.keys(languages).map((lang) => ({
    lang,
    url: `${site}${lang === defaultLang ? '' : `/${lang}`}${path}`,
  }));
}
