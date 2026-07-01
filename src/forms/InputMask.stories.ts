/**
 * InputMask Stories — WenderMedia Astro Components
 *
 * Covers the five mask variants: phone, card, date, iban, custom.
 * Each story exercises a representative real-world usage scenario.
 *
 * NOTE: Stories re-implement the visual in lit-html and do NOT import
 * the .astro component (Storybook for web-components renders HTML directly).
 *
 * @copyright 2007-2026 Arnold Wender · Wender Media. All Rights Reserved. License: LicenseRef-Wender-Media-Source-1.0
 * @see https://github.com/arnoldwender/wm-project-astro-components
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

/* ── Shared design-token CSS vars (inline for Storybook isolation) ── */
const TOKEN_STYLE = `
  :root {
    /* spacing */
    --spacing-stack-xs: 0.25rem;
    --spacing-stack-sm: 0.75rem;
    --spacing-inline-xs: 0.25rem;
    --spacing-inline-lg: 1rem;
    /* typography */
    --font-family-code: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Courier New", monospace;
    --font-size-sm: 0.875rem;
    --font-size-base: 1rem;
    --font-size-xs: 0.75rem;
    --font-weight-medium: 500;
    --line-height-tight: 1.25;
    --line-height-normal: 1.5;
    --letter-spacing-wider: 0.05em;
    /* border-radius */
    --radius-input: 0.375rem;
    /* touch target */
    --touch-target-min: 44px;
    /* border */
    --border-width-2: 2px;
    /* colors */
    --color-text-primary: #171717;
    --color-text-muted: #a3a3a3;
    --color-text-disabled: #a3a3a3;
    --color-surface: #ffffff;
    --color-background-muted: #f5f5f5;
    --color-border-default: #e5e5e5;
    --color-border-strong: #d4d4d4;
    --color-primary: #2563eb;
    --color-error: #dc2626;
    --color-focus-ring: #3b82f6;
    --color-focus-ring-offset: #ffffff;
    /* focus ring shorthand */
    --focus-ring: 0 0 0 2px var(--color-focus-ring-offset), 0 0 0 4px var(--color-focus-ring);
    /* error shadow */
    --shadow-error: 0 0 0 2px var(--color-focus-ring-offset), 0 0 0 4px var(--color-error);
    /* transitions */
    --transition-colors: color 150ms cubic-bezier(0,0,0.2,1), background-color 150ms cubic-bezier(0,0,0.2,1), border-color 150ms cubic-bezier(0,0,0.2,1);
    --transition-opacity: opacity 200ms cubic-bezier(0.4,0,0.2,1);
    --transition-shadow: box-shadow 200ms cubic-bezier(0,0,0.2,1);
  }
`;

/* ── Lit-html helper that renders one InputMask field ─────────────── */
interface RenderArgs {
  label: string;
  name: string;
  maskString: string;
  placeholder: string;
  inputmode?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  id?: string;
}

const renderField = ({
  label,
  name,
  maskString,
  placeholder,
  inputmode = 'text',
  required = false,
  disabled = false,
  error = '',
  id,
}: RenderArgs) => {
  const fieldId = id ?? name;
  const errorId = `${fieldId}-error`;
  const hasError = Boolean(error);

  return html`
    <style>${TOKEN_STYLE}
      .im-wrapper {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-stack-xs);
        max-width: 28rem;
        font-family: system-ui, sans-serif;
      }
      .im-label {
        font-size: var(--font-size-sm);
        font-weight: var(--font-weight-medium);
        line-height: var(--line-height-tight);
        color: var(--color-text-primary);
      }
      .im-required {
        color: var(--color-error);
        margin-inline-start: var(--spacing-inline-xs);
      }
      .im-field {
        position: relative;
      }
      .im-input {
        display: block;
        width: 100%;
        min-height: var(--touch-target-min);
        padding: var(--spacing-stack-sm) var(--spacing-inline-lg);
        font-family: var(--font-family-code);
        font-size: var(--font-size-base);
        line-height: var(--line-height-normal);
        letter-spacing: var(--letter-spacing-wider);
        color: var(--color-text-primary);
        background-color: var(--color-surface);
        border: var(--border-width-2) solid var(--color-border-default);
        border-radius: var(--radius-input);
        box-sizing: border-box;
        transition: var(--transition-colors), var(--transition-shadow);
        outline: none;
      }
      .im-input::placeholder {
        color: var(--color-text-muted);
        opacity: 1;
      }
      .im-input:focus-visible {
        border-color: var(--color-primary);
        box-shadow: var(--focus-ring);
      }
      .im-input:hover:not(:focus-visible):not(.im-input--error):not(:disabled) {
        border-color: var(--color-border-strong);
      }
      .im-input--error {
        border-color: var(--color-error);
      }
      .im-input--error:focus-visible {
        border-color: var(--color-error);
        box-shadow: var(--shadow-error);
      }
      .im-input:disabled {
        background-color: var(--color-background-muted);
        color: var(--color-text-disabled);
        cursor: not-allowed;
        opacity: 1;
      }
      .im-ghost {
        position: absolute;
        inset-block-start: 50%;
        inset-inline-start: var(--spacing-inline-lg);
        transform: translateY(-50%);
        font-family: var(--font-family-code);
        font-size: var(--font-size-base);
        letter-spacing: var(--letter-spacing-wider);
        color: var(--color-text-muted);
        pointer-events: none;
        user-select: none;
        opacity: 0;
        transition: var(--transition-opacity);
      }
      .im-error {
        margin: 0;
        font-size: var(--font-size-xs);
        line-height: var(--line-height-normal);
        color: var(--color-error);
      }
    </style>

    <div class="im-wrapper" data-input-mask>
      <label for=${fieldId} class="im-label">
        ${label}
        ${required ? html`<span class="im-required" aria-hidden="true">*</span>` : ''}
      </label>

      <div class="im-field">
        <input
          type="text"
          id=${fieldId}
          name=${name}
          placeholder=${placeholder}
          ?required=${required}
          ?disabled=${disabled}
          autocomplete="off"
          inputmode=${inputmode}
          class=${hasError ? 'im-input im-input--error' : 'im-input'}
          data-mask=${maskString}
          aria-invalid=${hasError ? 'true' : 'false'}
          aria-describedby=${hasError ? errorId : ''}
          aria-required=${required ? 'true' : ''}
        />
        <span class="im-ghost" aria-hidden="true" data-mask-display></span>
      </div>

      ${hasError ? html`
        <p id=${errorId} class="im-error" role="alert">${error}</p>
      ` : ''}
    </div>
  `;
};

/* ── Meta ─────────────────────────────────────────────────────────── */

const meta: Meta = {
  title: 'Forms/InputMask',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A masked text field that formats input in real time according to a mask template.

**Built-in presets:** \`phone\` · \`card\` · \`date\` · \`iban\` · \`custom\`

**Accessibility features:**
- \`<label>\` always visible and associated via \`for\`/\`id\`
- \`aria-invalid\` + \`aria-describedby\` wired to the error container
- Error region carries \`role="alert"\` for immediate SR announcement
- Visible \`:focus-visible\` ring (WCAG 2.2 AA)
- Min touch target 44 px (WCAG 2.5.5 / BFSG)
- \`prefers-reduced-motion\` transitions are suppressed

**Form-system hooks preserved:** \`data-input-mask\` · \`data-mask\` · \`data-mask-type\` · \`data-mask-display\` · \`id="\${id}-error"\`
        `,
      },
    },
  },
  argTypes: {
    label:       { control: 'text',    description: 'Visible label text' },
    type:        { control: 'select',  options: ['phone', 'card', 'date', 'iban', 'custom'], description: 'Mask preset' },
    required:    { control: 'boolean', description: 'Required field' },
    disabled:    { control: 'boolean', description: 'Disabled state' },
    error:       { control: 'text',    description: 'Inline error message (empty = no error)' },
  },
};

export default meta;
type Story = StoryObj;

/* ── Stories ──────────────────────────────────────────────────────── */

/** Default — German phone number format */
export const Phone: Story = {
  name: 'Phone (preset)',
  args: {
    label:    'Telefonnummer',
    required: true,
    disabled: false,
    error:    '',
  },
  render: (args) => renderField({
    label:       args['label'] as string,
    name:        'phone',
    maskString:  '+49 (___) ___-____',
    placeholder: '+49 (123) 456-7890',
    inputmode:   'tel',
    required:    args['required'] as boolean,
    disabled:    args['disabled'] as boolean,
    error:       args['error'] as string,
  }),
};

/** Credit / debit card number */
export const Card: Story = {
  name: 'Card Number (preset)',
  args: {
    label:    'Kartennummer',
    required: true,
    disabled: false,
    error:    '',
  },
  render: (args) => renderField({
    label:       args['label'] as string,
    name:        'card',
    maskString:  '____ ____ ____ ____',
    placeholder: '1234 5678 9012 3456',
    inputmode:   'numeric',
    required:    args['required'] as boolean,
    disabled:    args['disabled'] as boolean,
    error:       args['error'] as string,
  }),
};

/** Date in German DD.MM.YYYY format */
export const DateField: Story = {
  name: 'Date (preset)',
  args: {
    label:    'Geburtsdatum',
    required: false,
    disabled: false,
    error:    '',
  },
  render: (args) => renderField({
    label:       args['label'] as string,
    name:        'dob',
    maskString:  '__.__.____',
    placeholder: 'TT.MM.JJJJ',
    inputmode:   'numeric',
    required:    args['required'] as boolean,
    disabled:    args['disabled'] as boolean,
    error:       args['error'] as string,
  }),
};

/** German IBAN */
export const IBAN: Story = {
  name: 'IBAN (preset)',
  args: {
    label:    'IBAN',
    required: true,
    disabled: false,
    error:    '',
  },
  render: (args) => renderField({
    label:       args['label'] as string,
    name:        'iban',
    maskString:  'DE__ ____ ____ ____ ____ __',
    placeholder: 'DE12 3456 7890 1234 5678 90',
    inputmode:   'text',
    required:    args['required'] as boolean,
    disabled:    args['disabled'] as boolean,
    error:       args['error'] as string,
  }),
};

/** Custom mask — German 5-digit postcode */
export const CustomPostcode: Story = {
  name: 'Custom (postcode)',
  args: {
    label:    'Postleitzahl',
    required: true,
    disabled: false,
    error:    '',
  },
  render: (args) => renderField({
    label:       args['label'] as string,
    name:        'plz',
    maskString:  '_____',
    placeholder: '06108',
    inputmode:   'numeric',
    required:    args['required'] as boolean,
    disabled:    args['disabled'] as boolean,
    error:       args['error'] as string,
  }),
};

/** Error state — shows inline validation message */
export const WithError: Story = {
  name: 'Phone — with error',
  args: {
    label:    'Telefonnummer',
    required: true,
    disabled: false,
    error:    'Bitte geben Sie eine gültige Telefonnummer ein.',
  },
  render: (args) => renderField({
    label:       args['label'] as string,
    name:        'phone-err',
    maskString:  '+49 (___) ___-____',
    placeholder: '+49 (123) 456-7890',
    inputmode:   'tel',
    required:    args['required'] as boolean,
    disabled:    args['disabled'] as boolean,
    error:       args['error'] as string,
  }),
};

/** Disabled state */
export const Disabled: Story = {
  name: 'Phone — disabled',
  args: {
    label:    'Telefonnummer',
    required: false,
    disabled: true,
    error:    '',
  },
  render: (args) => renderField({
    label:       args['label'] as string,
    name:        'phone-dis',
    maskString:  '+49 (___) ___-____',
    placeholder: '+49 (123) 456-7890',
    inputmode:   'tel',
    required:    args['required'] as boolean,
    disabled:    args['disabled'] as boolean,
    error:       args['error'] as string,
  }),
};
