/**
 * Page Templates Index - WenderMedia Astro Components
 *
 * Ready-to-use page templates for common pages.
 * Copy the needed templates to your src/pages/ directory.
 */

// Error Pages
export { default as Page404 } from './404.astro';
export { default as Page500 } from './500.astro';

// Status Pages
export { default as MaintenancePage } from './maintenance.astro';
export { default as ComingSoonPage } from './coming-soon.astro';

// Legal Pages (German DSGVO compliant)
export { default as PrivacyPage } from './privacy.astro';
export { default as ImprintPage } from './imprint.astro';

// Type exports
export type { Props as Page404Props } from './404.astro';
export type { Props as Page500Props } from './500.astro';
export type { Props as MaintenancePageProps } from './maintenance.astro';
export type { Props as ComingSoonPageProps } from './coming-soon.astro';
export type { Props as PrivacyPageProps } from './privacy.astro';
export type { Props as ImprintPageProps } from './imprint.astro';
