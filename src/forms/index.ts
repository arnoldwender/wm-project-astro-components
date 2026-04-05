/**
 * @wendermedia/astro-components
 * @copyright 2007-2026 Wender Media - Arnold Wender. MIT License.
 * @see https://github.com/arnoldwender/wm-project-astro-components
 */

// Form Components
export { default as ContactForm } from './ContactForm.astro';
export { default as Newsletter } from './Newsletter.astro';
export { default as Contact } from './Contact.astro';

// Types - ContactForm (legacy)
export type { Props as ContactFormProps } from './ContactForm.astro';

// Types - Newsletter
export type { Props as NewsletterProps } from './Newsletter.astro';

// Types - Contact
export type {
  Props as ContactProps,
  ContactField
} from './Contact.astro';
