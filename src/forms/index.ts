/**
 * @wendermedia/astro-components
 * @copyright 2007-2026 Arnold Wender · Wender Media. All Rights Reserved. License: LicenseRef-Wender-Media-Source-1.0
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

// ---------------------------------------------------------------------------
// Form System — labeled inputs + rules engine + error container + consent.
// Backported from the WM field network 2026-07-01 (shared aria/data contract).
// ---------------------------------------------------------------------------
export { default as FormTextField } from './FormTextField.astro';
export { default as FormTextArea } from './FormTextArea.astro';
export { default as FormErrorContainer } from './FormErrorContainer.astro';
export { default as PrivacyCheckbox } from './PrivacyCheckbox.astro';
export { default as FormValidation } from './FormValidation.astro';
export { default as InputMask } from './InputMask.astro';
export { default as Select } from './Select.astro';
export { default as ProgressSteps } from './ProgressSteps.astro';

export type { Props as FormTextFieldProps } from './FormTextField.astro';
export type { Props as FormTextAreaProps } from './FormTextArea.astro';
export type { Props as FormErrorContainerProps } from './FormErrorContainer.astro';
export type { Props as PrivacyCheckboxProps } from './PrivacyCheckbox.astro';
export type { Props as FormValidationProps } from './FormValidation.astro';
export type { Props as InputMaskProps } from './InputMask.astro';
export type { Props as SelectProps } from './Select.astro';
export type { Props as ProgressStepsProps } from './ProgressSteps.astro';
