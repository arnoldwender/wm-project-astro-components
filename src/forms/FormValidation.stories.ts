/**
 * FormValidation Stories — WenderMedia Astro Components
 *
 * Demonstrates the rules-engine form in its main configurations:
 * - Default: basic contact fields with all rule types shown
 * - EmailOnly: single-field capture
 * - WithSelect: dropdown + textarea
 * - ValidationStates: pre-seeded invalid/valid states for visual QA
 *
 * @copyright 2007-2026 Arnold Wender · Wender Media. All Rights Reserved. License: LicenseRef-Wender-Media-Source-1.0
 * @see https://github.com/arnoldwender/wm-project-astro-components
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

// ── CSS custom-property shims for Storybook preview (tokens not loaded by default) ──
const tokenStyles = `
  <style>
    :root {
      /* Spacing */
      --spacing-1: 0.25rem; --spacing-2: 0.5rem; --spacing-3: 0.75rem;
      --spacing-4: 1rem; --spacing-5: 1.25rem; --spacing-6: 1.5rem;
      --spacing-8: 2rem; --spacing-10: 2.5rem;

      /* Semantic spacing */
      --spacing-stack-sm: 0.5rem; --spacing-stack-md: 1rem;
      --spacing-stack-lg: 1.5rem; --spacing-stack-xl: 2rem;
      --spacing-inline-xs: 0.25rem; --spacing-inline-sm: 0.5rem;
      --spacing-gap-xs: 0.5rem;

      /* Colors */
      --color-primary: #2563eb; --color-primary-hover: #1d4ed8;
      --color-primary-active: #1e40af; --color-primary-text: #ffffff;
      --color-primary-subtle: #eff6ff;
      --color-success: #16a34a; --color-success-subtle: #f0fdf4;
      --color-success-text: #ffffff; --color-success-muted: #dcfce7;
      --color-error: #dc2626; --color-error-subtle: #fef2f2;
      --color-error-text: #ffffff;
      --color-text-primary: #171717; --color-text-secondary: #525252;
      --color-text-muted: #a3a3a3; --color-text-disabled: #a3a3a3;
      --color-background: #ffffff; --color-background-muted: #f5f5f5;
      --color-border-default: #e5e5e5; --color-border-strong: #d4d4d4;
      --color-focus-ring: #3b82f6; --color-focus-ring-offset: #ffffff;

      /* Typography */
      --font-family-sans: ui-sans-serif, system-ui, sans-serif;
      --font-size-sm: 0.875rem; --font-size-base: 1rem; --font-size-lg: 1.125rem;
      --font-weight-normal: 400; --font-weight-medium: 500;
      --font-weight-semibold: 600; --font-weight-bold: 700;
      --line-height-tight: 1.25; --line-height-normal: 1.5;

      /* Component tokens — Input */
      --input-font-family: var(--font-family-sans);
      --input-font-size: var(--font-size-base);
      --input-font-weight: var(--font-weight-normal);
      --input-line-height: var(--line-height-normal);
      --input-border-radius: 0.375rem;
      --input-border-width: 1px;
      --input-transition: border-color 150ms ease-out, background-color 150ms ease-out;
      --input-padding-lg: 0.625rem 1rem;
      --input-min-height-lg: 44px;
      --input-bg: #ffffff; --input-bg-hover: #ffffff; --input-bg-focus: #ffffff;
      --input-bg-disabled: #f5f5f5;
      --input-text: #171717; --input-text-placeholder: #a3a3a3;
      --input-text-disabled: #a3a3a3;
      --input-border: #e5e5e5; --input-border-hover: #d4d4d4;
      --input-border-focus: #3b82f6;
      --input-border-error: #dc2626; --input-border-success: #16a34a;
      --input-border-disabled: #f5f5f5;

      /* Component tokens — Label */
      --label-font-size: var(--font-size-sm);
      --label-font-weight: var(--font-weight-medium);
      --label-line-height: var(--line-height-tight);
      --label-color: var(--color-text-primary);
      --label-color-disabled: var(--color-text-disabled);
      --label-margin-bottom: 0.375rem;

      /* Component tokens — Helper */
      --helper-font-size: var(--font-size-sm);
      --helper-line-height: var(--line-height-normal);
      --helper-color: var(--color-text-secondary);
      --helper-color-error: var(--color-error);
      --helper-color-success: var(--color-success);
      --helper-margin-top: 0.25rem;

      /* Component tokens — Button */
      --button-font-family: var(--font-family-sans);
      --button-font-size: var(--font-size-base);
      --button-font-weight: var(--font-weight-semibold);
      --button-line-height: var(--line-height-tight);
      --button-border-radius: 0.375rem;
      --button-border-width: 1px;
      --button-transition: color 150ms ease-out, background-color 150ms ease-out,
                           border-color 150ms ease-out, box-shadow 200ms ease-out;
      --button-padding-xl: 0.75rem 1.5rem;
      --button-min-height-xl: 52px;
      --button-primary-bg: #2563eb; --button-primary-bg-hover: #1d4ed8;
      --button-primary-bg-active: #1e40af;
      --button-primary-text: #ffffff; --button-primary-border: transparent;
      --button-primary-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
      --button-primary-shadow-hover: 0 4px 6px -1px rgb(0 0 0 / 0.1);
      --button-disabled-opacity: 0.6;

      /* Focus ring */
      --focus-ring-width: 2px; --focus-ring-offset: 2px;
      --focus-ring: 0 0 0 2px #ffffff, 0 0 0 4px #3b82f6;

      /* Radius */
      --radius-input: 0.375rem; --radius-button: 0.375rem;
      --radius-card: 0.5rem; --radius-lg: 0.5rem;
    }
  </style>
`;

const meta: Meta = {
  title: 'Forms/FormValidation',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Rules-engine form with inline WCAG 2.2 AA accessible validation.

**Key features:**
- Declarative \`fields\` schema: \`text | email | tel | password | textarea | select\`
- Rule types: \`required | email | phone | minLength | maxLength | pattern | match\`
- Validates on blur; re-validates on input once the field is already invalid
- Sets \`aria-invalid\` on controls; \`role="alert"\` on error containers
- DSGVO honeypot (off-screen, \`aria-hidden\`)
- Loading spinner on submit; success panel after completion
- \`prefers-reduced-motion\` guards on all animations
- All styles use design-system CSS custom properties (no hardcoded values)

**ARIA contract (stable — used by FormTextField / FormErrorContainer atoms):**
- Error container: \`id="\${name}-error"\`, \`role="alert"\`
- Field wrapper: \`[data-field="\${name}"]\`, \`[data-rules="…"]\`
- Form element: \`[data-validated-form]\`, \`[data-success-message]\`
- Submit button: \`[data-submit-button]\`
- Success panel: \`[data-success-message-el]\`
        `,
      },
    },
    layout: 'padded',
  },
  argTypes: {
    submitLabel: {
      control: 'text',
      description: 'Submit button label',
      defaultValue: 'Absenden',
    },
    successMessage: {
      control: 'text',
      description: 'Message shown in the success panel',
      defaultValue: 'Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.',
    },
  },
};

export default meta;
type Story = StoryObj;

// ── Shared render helpers ──────────────────────────────────────────────────────

/** Renders a single field wrapper matching the Astro component's output structure. */
const renderField = (opts: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
  state?: 'valid' | 'invalid' | 'none';
  errorMsg?: string;
}) => {
  const { name, label, type = 'text', placeholder = '', required, options, state = 'none', errorMsg = '' } = opts;
  const stateClass = state === 'valid' ? ' is-valid' : state === 'invalid' ? ' is-invalid' : '';

  const inputStyle = `
    width: 100%;
    padding: var(--input-padding-lg);
    font-size: var(--input-font-size);
    font-family: var(--input-font-family);
    color: var(--input-text);
    background-color: var(--input-bg);
    border: 1px solid ${state === 'invalid' ? 'var(--input-border-error)' : state === 'valid' ? 'var(--input-border-success)' : 'var(--input-border)'};
    border-radius: var(--radius-input);
    min-height: var(--input-min-height-lg);
    box-sizing: border-box;
  `;

  const control = type === 'textarea'
    ? html`<textarea style="${inputStyle}; resize: vertical; min-height: 120px;"
        id="${name}" name="${name}" placeholder="${placeholder}"
        aria-describedby="${name}-error"
        aria-invalid="${state === 'invalid' ? 'true' : 'false'}"
        rows="4"></textarea>`
    : type === 'select'
    ? html`<select style="${inputStyle}" id="${name}" name="${name}"
        aria-describedby="${name}-error"
        aria-invalid="${state === 'invalid' ? 'true' : 'false'}">
        <option value="">${placeholder || 'Bitte wählen …'}</option>
        ${options?.map((o) => html`<option value="${o.value}">${o.label}</option>`)}
      </select>`
    : html`<input type="${type}" id="${name}" name="${name}" placeholder="${placeholder}"
        style="${inputStyle}"
        aria-describedby="${name}-error"
        aria-invalid="${state === 'invalid' ? 'true' : 'false'}" />`;

  return html`
    <div class="wm-form-field${stateClass}"
      data-field="${name}"
      style="display: flex; flex-direction: column; gap: var(--spacing-stack-sm);">
      <label for="${name}" style="font-size: var(--label-font-size); font-weight: var(--label-font-weight); color: var(--label-color);">
        ${label}
        ${required ? html`<span style="color: var(--color-error); margin-left: var(--spacing-inline-xs);" aria-hidden="true">*</span>` : ''}
      </label>
      ${control}
      <div style="display: flex; align-items: center; gap: var(--spacing-gap-xs); min-height: 24px;" aria-live="polite">
        ${state === 'valid' ? html`
          <span style="display: flex; color: var(--color-success);" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </span>` : ''}
        <span id="${name}-error" role="alert"
          style="font-size: var(--helper-font-size); color: var(--helper-color-error); ${state !== 'invalid' ? 'display: none;' : ''}">
          ${errorMsg}
        </span>
      </div>
    </div>
  `;
};

const renderSubmitButton = (label: string, loading = false) => html`
  <div style="margin-top: var(--spacing-stack-md);">
    <button type="submit"
      style="
        display: inline-flex; align-items: center; justify-content: center;
        gap: var(--spacing-inline-sm);
        width: 100%;
        padding: var(--button-padding-xl);
        font-family: var(--button-font-family);
        font-size: var(--button-font-size);
        font-weight: var(--button-font-weight);
        color: var(--button-primary-text);
        background-color: var(--button-primary-bg);
        border: 1px solid transparent;
        border-radius: var(--button-border-radius);
        cursor: pointer;
        min-height: var(--button-min-height-xl);
        box-shadow: var(--button-primary-shadow);
      ">
      ${loading ? html`
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          style="animation: wm-spin 1s linear infinite;" aria-hidden="true" focusable="false">
          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>` : label}
    </button>
  </div>
  <style>
    @keyframes wm-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
    @media (prefers-reduced-motion: reduce) { .wm-spin { animation: none; } }
  </style>
`;

// ── Story: Default (full contact form) ────────────────────────────────────────
export const Default: Story = {
  name: 'Default — full contact form',
  args: {
    submitLabel: 'Nachricht senden',
    successMessage: 'Vielen Dank! Wir melden uns in Kürze.',
  },
  render: (args) => html`
    ${tokenStyles}
    <div style="max-width: 500px; font-family: var(--font-family-sans);">
      <form style="display: flex; flex-direction: column; gap: var(--spacing-stack-lg);"
        novalidate data-validated-form data-success-message="${args.successMessage}">
        <div style="display: none;" aria-hidden="true">
          <input type="text" name="website" tabindex="-1" autocomplete="off" />
        </div>
        ${renderField({ name: 'name',    label: 'Name',        type: 'text',  placeholder: 'Ihr Name',          required: true })}
        ${renderField({ name: 'email',   label: 'E-Mail',      type: 'email', placeholder: 'name@beispiel.de',   required: true })}
        ${renderField({ name: 'phone',   label: 'Telefon',     type: 'tel',   placeholder: '+49 …' })}
        ${renderField({ name: 'message', label: 'Nachricht',   type: 'textarea', placeholder: 'Ihre Nachricht …', required: true })}
        ${renderSubmitButton(args.submitLabel as string)}
      </form>
    </div>
  `,
};

// ── Story: EmailOnly (single-field capture) ───────────────────────────────────
export const EmailOnly: Story = {
  name: 'EmailOnly — single field',
  args: {
    submitLabel: 'Absenden',
    successMessage: 'Danke! E-Mail erhalten.',
  },
  render: (args) => html`
    ${tokenStyles}
    <div style="max-width: 500px; font-family: var(--font-family-sans);">
      <form style="display: flex; flex-direction: column; gap: var(--spacing-stack-lg);"
        novalidate data-validated-form data-success-message="${args.successMessage}">
        <div style="display: none;" aria-hidden="true">
          <input type="text" name="website" tabindex="-1" autocomplete="off" />
        </div>
        ${renderField({ name: 'email', label: 'E-Mail-Adresse', type: 'email', placeholder: 'name@beispiel.de', required: true })}
        ${renderSubmitButton(args.submitLabel as string)}
      </form>
    </div>
  `,
};

// ── Story: WithSelect (select + textarea) ─────────────────────────────────────
export const WithSelect: Story = {
  name: 'WithSelect — dropdown + textarea',
  args: {
    submitLabel: 'Anfrage senden',
    successMessage: 'Anfrage erhalten. Wir melden uns!',
  },
  render: (args) => html`
    ${tokenStyles}
    <div style="max-width: 500px; font-family: var(--font-family-sans);">
      <form style="display: flex; flex-direction: column; gap: var(--spacing-stack-lg);"
        novalidate data-validated-form data-success-message="${args.successMessage}">
        <div style="display: none;" aria-hidden="true">
          <input type="text" name="website" tabindex="-1" autocomplete="off" />
        </div>
        ${renderField({ name: 'name', label: 'Name', type: 'text', placeholder: 'Ihr Name', required: true })}
        ${renderField({
          name: 'service',
          label: 'Leistung',
          type: 'select',
          placeholder: 'Bitte wählen …',
          options: [
            { value: 'seo',       label: 'SEO-Optimierung' },
            { value: 'webdesign', label: 'Webdesign' },
            { value: 'social',    label: 'Social Media' },
          ],
        })}
        ${renderField({ name: 'message', label: 'Ihre Nachricht', type: 'textarea', placeholder: 'Was kann ich für Sie tun?', required: true })}
        ${renderSubmitButton(args.submitLabel as string)}
      </form>
    </div>
  `,
};

// ── Story: ValidationStates (pre-seeded for visual QA) ───────────────────────
export const ValidationStates: Story = {
  name: 'ValidationStates — visual QA',
  parameters: {
    docs: {
      description: {
        story: 'Pre-populated states for visual regression testing. The `.is-valid` / `.is-invalid` classes are normally set by the JS rules engine at runtime.',
      },
    },
  },
  args: {
    submitLabel: 'Absenden',
    successMessage: '',
  },
  render: (_args) => html`
    ${tokenStyles}
    <div style="max-width: 500px; font-family: var(--font-family-sans);">
      <form style="display: flex; flex-direction: column; gap: var(--spacing-stack-lg);" novalidate>
        ${renderField({
          name: 'email-valid', label: 'Gültige E-Mail', type: 'email',
          placeholder: 'name@beispiel.de', required: true,
          state: 'valid',
        })}
        ${renderField({
          name: 'email-invalid', label: 'Ungültige E-Mail', type: 'email',
          placeholder: 'name@beispiel.de', required: true,
          state: 'invalid', errorMsg: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
        })}
        ${renderField({
          name: 'name-empty', label: 'Pflichtfeld leer', type: 'text',
          placeholder: 'Ihr Name', required: true,
          state: 'invalid', errorMsg: 'Dieses Feld ist erforderlich.',
        })}
        ${renderField({
          name: 'optional', label: 'Optionales Feld', type: 'text',
          placeholder: 'Optional', state: 'none',
        })}
      </form>
    </div>
  `,
};

// ── Story: LoadingState (submit button in loading state) ──────────────────────
export const LoadingState: Story = {
  name: 'LoadingState — submit in-flight',
  parameters: {
    docs: {
      description: {
        story: 'Depicts the submit button while the form submission request is in-flight. The `.is-loading` class is toggled by the JS class on `[data-submit-button]`.',
      },
    },
  },
  args: {
    submitLabel: 'Wird gesendet …',
    successMessage: '',
  },
  render: (args) => html`
    ${tokenStyles}
    <div style="max-width: 500px; font-family: var(--font-family-sans);">
      <form style="display: flex; flex-direction: column; gap: var(--spacing-stack-lg);" novalidate>
        ${renderField({ name: 'email', label: 'E-Mail', type: 'email', placeholder: 'name@beispiel.de', required: true, state: 'valid' })}
        ${renderSubmitButton(args.submitLabel as string, true)}
      </form>
    </div>
  `,
};
