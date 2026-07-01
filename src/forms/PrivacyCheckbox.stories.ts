/**
 * PrivacyCheckbox Stories — WenderMedia Astro Components
 *
 * @copyright 2007-2026 Arnold Wender · Wender Media. All Rights Reserved. License: LicenseRef-Wender-Media-Source-1.0
 * @see https://github.com/arnoldwender/wm-project-astro-components
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Forms/PrivacyCheckbox',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A DSGVO/GDPR consent checkbox atom for the WM form system. Features:

- **Form-system contract:** \`id="privacy"\` + \`aria-describedby="privacyError"\` selectors
  wire directly to \`FormValidation\` and \`FormErrorContainer\` — do NOT rename.
- **Checked-state highlight:** CSS-only via \`:has(#privacy:checked)\` — no JS.
- **Error state:** \`privacyError\` live region announced via \`role="alert"\`.
- **Accessible:** \`aria-required\`, visible \`:focus-visible\` ring, sr-only required text.
- **WCAG 2.2 AA / BFSG:** contrast-compliant tokens, 44 px touch target minimum.
- **Token-only styles:** all colors, spacing, radius from the WM design-token system.
        `,
      },
    },
  },
  argTypes: {
    privacyUrl: {
      control: 'text',
      description: 'URL of the privacy policy page',
      defaultValue: '/datenschutz/',
    },
    privacyLinkText: {
      control: 'text',
      description: 'Visible anchor text for the privacy policy link',
      defaultValue: 'Datenschutzerklärung',
    },
    consentLabel: {
      control: 'text',
      description: 'Text displayed before the privacy policy link',
      defaultValue: 'Ich stimme der',
    },
    helperText: {
      control: 'text',
      description: 'Optional helper sub-label below the consent label',
      defaultValue: 'Erforderlich für die Kontaktaufnahme',
    },
    showError: {
      control: 'boolean',
      description: 'Simulate a visible validation error (story-only prop)',
      defaultValue: false,
    },
    isChecked: {
      control: 'boolean',
      description: 'Simulate the checked state (story-only prop)',
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj;

/** Shared base styles matching the WM token system */
const baseStyles = `
  font-family: system-ui, -apple-system, sans-serif;
  --color-primary: #2563eb;
  --color-primary-subtle: #eff6ff;
  --color-error: #dc2626;
  --color-error-subtle: #fef2f2;
  --color-background-subtle: #fafafa;
  --color-text-primary: #171717;
  --color-text-tertiary: #737373;
  --color-link: #2563eb;
  --color-link-hover: #1e40af;
  --color-border-default: #e5e5e5;
  --color-focus-ring: #3b82f6;
  --color-focus-ring-offset: #ffffff;
  --checkbox-size: 18px;
  --checkbox-border: #a3a3a3;
  --checkbox-bg: #ffffff;
  --checkbox-bg-checked: #2563eb;
  --checkbox-border-radius: 3px;
  --checkbox-border-width: 2px;
  --radius-input: 8px;
  --spacing-gap-md: 0.75rem;
  --spacing-stack-sm: 0.5rem;
  --spacing-inline-xs: 0.25rem;
  --spacing-inline-md: 0.875rem;
  --helper-margin-top: 0.25rem;
  --helper-font-size: 0.875rem;
  --helper-color-error: #dc2626;
  --font-size-label: 0.875rem;
  --font-weight-label: 500;
  --font-weight-medium: 500;
  --font-weight-bold: 700;
  --line-height-label: 1.2;
  --line-height-normal: 1.5;
  --focus-ring-width: 2px;
  --focus-ring-offset: 2px;
`;

/**
 * Renders the PrivacyCheckbox visual contract in lit-html.
 * This re-implements the component markup — it does NOT import the .astro file.
 */
const renderPrivacyCheckbox = (args: Record<string, unknown>) => {
  const privacyUrl = (args['privacyUrl'] as string) ?? '/datenschutz/';
  const privacyLinkText = (args['privacyLinkText'] as string) ?? 'Datenschutzerklärung';
  const consentLabel = (args['consentLabel'] as string) ?? 'Ich stimme der';
  const helperText = (args['helperText'] as string) ?? 'Erforderlich für die Kontaktaufnahme';
  const showError = Boolean(args['showError']);
  const isChecked = Boolean(args['isChecked']);

  const wrapperStyle = [
    'display:flex;align-items:flex-start;gap:var(--spacing-gap-md)',
    'padding:var(--spacing-stack-sm) var(--spacing-inline-md)',
    'border-radius:var(--radius-input)',
    'border:2px solid',
    showError
      ? 'var(--color-error);background-color:var(--color-error-subtle)'
      : isChecked
        ? 'var(--color-primary);background-color:var(--color-primary-subtle)'
        : 'transparent;background-color:var(--color-background-subtle)',
  ].join(';');

  const errorStyle = showError
    ? 'display:block;margin-top:var(--helper-margin-top);font-size:var(--helper-font-size);color:var(--helper-color-error)'
    : 'display:none;margin-top:var(--helper-margin-top);font-size:var(--helper-font-size);color:var(--helper-color-error)';

  return html`
    <div style="${baseStyles} padding: 1.5rem;">
      <div
        style="${wrapperStyle}"
        data-privacy-checkbox
        data-invalid="${showError ? 'true' : 'false'}"
      >
        <!-- Checkbox track -->
        <div style="display:flex;align-items:center;padding-top:0.125rem;flex-shrink:0;">
          <input
            id="privacy"
            name="privacy"
            type="checkbox"
            required
            aria-required="true"
            aria-describedby="privacyError"
            ?checked="${isChecked}"
            style="width:var(--checkbox-size);height:var(--checkbox-size);min-width:var(--checkbox-size);aspect-ratio:1;cursor:pointer;accent-color:var(--color-primary);border:2px solid var(--checkbox-border);border-radius:var(--checkbox-border-radius);background-color:var(--checkbox-bg);margin:0;"
          />
        </div>

        <!-- Label + helper + error -->
        <div style="flex:1;min-width:0;">
          <label
            for="privacy"
            style="display:block;font-size:var(--font-size-label);font-weight:var(--font-weight-label);line-height:var(--line-height-label);color:var(--color-text-primary);cursor:pointer;"
          >
            ${consentLabel}
            &nbsp;
            <a
              href="${privacyUrl}"
              target="_blank"
              rel="noopener noreferrer"
              style="color:var(--color-link);font-weight:var(--font-weight-medium);text-decoration:underline;text-underline-offset:2px;"
            >${privacyLinkText}</a>
            &nbsp;zu
            <span aria-hidden="true" style="color:var(--color-error);font-weight:var(--font-weight-bold);margin-left:var(--spacing-inline-xs);">*</span>
            <span style="position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0;">(Pflichtfeld)</span>
          </label>

          ${helperText ? html`
            <p style="margin-top:var(--helper-margin-top);font-size:var(--helper-font-size);line-height:var(--line-height-normal);color:var(--color-text-tertiary);">
              ${helperText}
            </p>
          ` : ''}

          <p
            id="privacyError"
            role="alert"
            aria-live="assertive"
            style="${errorStyle}"
          >${showError ? 'Bitte stimmen Sie der Datenschutzerklärung zu.' : ''}</p>
        </div>
      </div>
    </div>
  `;
};

/** Default German variant — standard usage in a WM contact form. */
export const Default: Story = {
  args: {
    privacyUrl: '/datenschutz/',
    privacyLinkText: 'Datenschutzerklärung',
    consentLabel: 'Ich stimme der',
    helperText: 'Erforderlich für die Kontaktaufnahme',
    showError: false,
    isChecked: false,
  },
  render: (args) => renderPrivacyCheckbox(args),
};

/** Checked state — highlights border and background via :has(). */
export const Checked: Story = {
  args: {
    ...Default.args,
    isChecked: true,
  },
  render: (args) => renderPrivacyCheckbox(args),
};

/** Error state — shown by FormValidation when the checkbox is not ticked on submit. */
export const WithError: Story = {
  args: {
    ...Default.args,
    showError: true,
  },
  render: (args) => renderPrivacyCheckbox(args),
};

/** English variant — for multilingual (DE/EN/ES) WM sites. */
export const English: Story = {
  args: {
    privacyUrl: '/privacy-policy/',
    privacyLinkText: 'Privacy Policy',
    consentLabel: 'I agree to the',
    helperText: 'Required to process your contact request',
    showError: false,
    isChecked: false,
  },
  render: (args) => renderPrivacyCheckbox(args),
};

/** No helper text — minimal variant when context is obvious. */
export const NoHelperText: Story = {
  args: {
    privacyUrl: '/datenschutz/',
    privacyLinkText: 'Datenschutzerklärung',
    consentLabel: 'Ich stimme der',
    helperText: '',
    showError: false,
    isChecked: false,
  },
  render: (args) => renderPrivacyCheckbox(args),
};
