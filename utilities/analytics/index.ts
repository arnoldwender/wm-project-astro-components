/**
 * Analytics Utilities Index - WenderMedia Astro Components
 *
 * GDPR-compliant analytics integrations.
 */

export { default as CookieConsent } from './CookieConsent.astro';
export { default as GoogleAnalytics } from './GoogleAnalytics.astro';
export { default as Plausible } from './Plausible.astro';
export { default as Matomo } from './Matomo.astro';

// Type exports
export type { Props as CookieConsentProps, CookieCategory } from './CookieConsent.astro';
export type { Props as GoogleAnalyticsProps } from './GoogleAnalytics.astro';
export type { Props as PlausibleProps } from './Plausible.astro';
export type { Props as MatomoProps } from './Matomo.astro';

// Consent utilities
export interface ConsentData {
  version: string;
  timestamp: number;
  categories: Record<string, boolean>;
}

export function getConsent(): ConsentData | null {
  if (typeof localStorage === 'undefined') return null;

  try {
    const data = localStorage.getItem('cookie-consent');
    if (!data) return null;
    return JSON.parse(data);
  } catch {
    return null;
  }
}

export function hasConsent(category: string): boolean {
  const consent = getConsent();
  return consent?.categories?.[category] === true;
}

export function revokeConsent(): void {
  if (typeof localStorage === 'undefined') return;
  localStorage.removeItem('cookie-consent');
  window.dispatchEvent(new CustomEvent('cookie-consent-revoked'));
}
