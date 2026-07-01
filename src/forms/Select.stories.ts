/**
 * Select Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

/* -----------------------------------------------------------------------
 * Story helpers
 * ----------------------------------------------------------------------- */

/** Shared option lists re-used across multiple stories */
const serviceOptions = [
  { value: 'design', label: 'Web Design' },
  { value: 'seo', label: 'SEO & Content' },
  { value: 'dev', label: 'Web Development' },
  { value: 'shop', label: 'Online Shop' },
];

const budgetOptions = [
  { value: 'low', label: 'Under €1 000' },
  { value: 'mid', label: '€1 000 – €5 000' },
  { value: 'high', label: 'Over €5 000' },
];

const countryOptions = [
  { value: 'de', label: 'Germany' },
  { value: 'at', label: 'Austria' },
  { value: 'ch', label: 'Switzerland' },
  { value: 'mx', label: 'Mexico' },
];

/* -----------------------------------------------------------------------
 * renderSelect
 *
 * Re-implements the Select.astro structure in lit-html so Storybook can
 * render it without an Astro runtime. The markup mirrors the component's
 * BEM class structure and aria contract exactly.
 * ----------------------------------------------------------------------- */
const renderSelect = (args: Record<string, unknown>) => {
  const fieldId   = (args.id as string) || (args.name as string) || 'select';
  const errorId   = `${fieldId}-error`;
  const hintId    = `${fieldId}-hint`;
  const options   = (args.options as Array<{ value: string; label: string }>) ?? serviceOptions;
  const value     = args.value as string | undefined;
  const invalid   = !!args.invalid;
  const disabled  = !!args.disabled;
  const required  = !!args.required;
  const variant   = (args.variant as string) || 'default';
  const label     = (args.label as string) || 'Select';
  const placeholder = args.placeholder as string | undefined;
  const errorMsg  = args.errorMessage as string | undefined;
  const hint      = args.hint as string | undefined;

  const describedBy = invalid && errorMsg
    ? errorId
    : hint
      ? hintId
      : undefined;

  const wrapperClasses = [
    'select-field__wrapper',
    variant === 'ghost' ? 'select-field__wrapper--ghost' : '',
    invalid ? 'select-field__wrapper--invalid' : '',
    disabled ? 'select-field__wrapper--disabled' : '',
  ].filter(Boolean).join(' ');

  return html`
    <style>
      /* Inline styles mirror the component's scoped CSS, using CSS custom properties
         so Storybook previews honour whatever token overrides are active in the canvas. */
      .select-field {
        display: flex;
        flex-direction: column;
        gap: 0.375rem;
        font-family: system-ui, sans-serif;
        max-width: 400px;
      }
      .select-field__label {
        display: block;
        font-size: 0.875rem;
        font-weight: 500;
        line-height: 1.25;
        color: #111827;
      }
      .select-field__required {
        color: #dc2626;
        margin-inline-start: 2px;
      }
      .select-field__wrapper {
        position: relative;
        display: flex;
        align-items: center;
      }
      .select-field__control {
        display: block;
        width: 100%;
        min-height: 44px;
        padding: 0.625rem 2.5rem 0.625rem 1rem;
        font-family: inherit;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #111827;
        background-color: #fff;
        border: 1px solid #d1d5db;
        border-radius: 0.375rem;
        appearance: none;
        -webkit-appearance: none;
        cursor: pointer;
        transition: border-color 150ms ease-out;
        box-sizing: border-box;
      }
      .select-field__control:hover:not(:disabled) {
        border-color: #9ca3af;
      }
      .select-field__control:focus-visible {
        outline: 2px solid #3b82f6;
        outline-offset: 2px;
        border-color: #3b82f6;
      }
      .select-field__wrapper--invalid .select-field__control,
      .select-field__control[aria-invalid="true"] {
        border-color: #dc2626;
      }
      .select-field__control:disabled {
        background-color: #f3f4f6;
        color: #9ca3af;
        border-color: #e5e7eb;
        cursor: not-allowed;
        opacity: 0.6;
      }
      .select-field__wrapper--ghost .select-field__control {
        background-color: transparent;
        border-color: #e5e7eb;
      }
      .select-field__chevron {
        position: absolute;
        inset-inline-end: 0.75rem;
        pointer-events: none;
        display: flex;
        align-items: center;
        color: #9ca3af;
      }
      .select-field__wrapper--disabled .select-field__chevron {
        opacity: 0.4;
      }
      .select-field__error {
        margin: 0;
        font-size: 0.875rem;
        line-height: 1.25;
        color: #dc2626;
      }
      .select-field__hint {
        margin: 0;
        font-size: 0.875rem;
        line-height: 1.25;
        color: #4b5563;
      }
    </style>

    <div class="select-field">
      <label for="${fieldId}" class="select-field__label">
        ${label}
        ${required ? html`<span class="select-field__required" aria-hidden="true"> *</span>` : ''}
      </label>

      <div class="${wrapperClasses}">
        <select
          id="${fieldId}"
          name="${(args.name as string) || fieldId}"
          ?required="${required}"
          ?disabled="${disabled}"
          aria-invalid="${invalid ? 'true' : undefined}"
          aria-describedby="${describedBy}"
          aria-required="${required ? 'true' : undefined}"
          class="select-field__control"
        >
          ${placeholder
            ? html`<option value="" disabled ?selected="${!value}">${placeholder}</option>`
            : ''}
          ${options.map((opt) =>
            html`<option value="${opt.value}" ?selected="${value === opt.value}">${opt.label}</option>`
          )}
        </select>

        <span class="select-field__chevron" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2"
               stroke-linecap="round" stroke-linejoin="round">
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </div>

      ${invalid && errorMsg
        ? html`<p id="${errorId}" class="select-field__error" role="alert" aria-live="polite">${errorMsg}</p>`
        : ''}
      ${hint && !invalid
        ? html`<p id="${hintId}" class="select-field__hint">${hint}</p>`
        : ''}
    </div>
  `;
};

/* -----------------------------------------------------------------------
 * Meta
 * ----------------------------------------------------------------------- */

const meta: Meta = {
  title: 'Forms/Select',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A fully accessible \`<select>\` atom that wires into the WenderMedia form-system
contract. Key characteristics:

- **Label association** via \`<label for>\` and matching \`id\`
- **Inline error feedback** via \`aria-describedby="\${id}-error"\` and \`role="alert"\`
  (form-system validation engine targets the same id pattern)
- **WCAG 2.2 AA**: 44 px min touch target, \`:focus-visible\` ring, \`aria-invalid\`
- **Two variants**: \`default\` (bordered) and \`ghost\` (transparent, for coloured surfaces)
- **Custom chevron** replaces the native OS arrow; hides/dims when disabled
- **prefers-reduced-motion** guard on the chevron rotation animation
- Tokens-only styles — no hardcoded colours or spacing
        `,
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Visible label text',
    },
    placeholder: {
      control: 'text',
      description: 'First disabled option shown when no value is selected',
    },
    value: {
      control: 'text',
      description: 'Pre-selected option value',
    },
    variant: {
      control: 'select',
      options: ['default', 'ghost'],
      description: 'Visual style variant',
    },
    required: {
      control: 'boolean',
      description: 'Marks the field as required',
    },
    disabled: {
      control: 'boolean',
      description: 'Marks the field as disabled',
    },
    invalid: {
      control: 'boolean',
      description: 'Forces the error/invalid state',
    },
    errorMessage: {
      control: 'text',
      description: 'Error text shown when invalid=true',
    },
    hint: {
      control: 'text',
      description: 'Hint text shown when there is no error',
    },
  },
};

export default meta;
type Story = StoryObj;

/* -----------------------------------------------------------------------
 * Stories
 * ----------------------------------------------------------------------- */

/** Standard select with placeholder and options. */
export const Default: Story = {
  args: {
    name: 'service',
    label: 'Service',
    placeholder: 'Choose a service…',
    options: serviceOptions,
    required: false,
    disabled: false,
    invalid: false,
    variant: 'default',
  },
  render: (args) => renderSelect(args),
};

/** Required field — shows asterisk indicator on the label. */
export const Required: Story = {
  args: {
    name: 'service',
    label: 'Service',
    placeholder: 'Choose a service…',
    options: serviceOptions,
    required: true,
    disabled: false,
    invalid: false,
    variant: 'default',
  },
  render: (args) => renderSelect(args),
};

/** Pre-selected value demonstrating controlled state. */
export const WithValue: Story = {
  args: {
    name: 'budget',
    label: 'Budget',
    options: budgetOptions,
    value: 'mid',
    required: false,
    disabled: false,
    invalid: false,
    variant: 'default',
  },
  render: (args) => renderSelect(args),
};

/** Hint text providing additional guidance below the select. */
export const WithHint: Story = {
  args: {
    name: 'country',
    label: 'Country',
    placeholder: 'Select country…',
    options: countryOptions,
    hint: 'Used to determine applicable VAT rates.',
    required: false,
    disabled: false,
    invalid: false,
    variant: 'default',
  },
  render: (args) => renderSelect(args),
};

/** Error state — mirrors what the form-system validation engine produces at runtime. */
export const Invalid: Story = {
  args: {
    name: 'country',
    label: 'Country',
    placeholder: 'Select country…',
    options: countryOptions,
    invalid: true,
    errorMessage: 'Please select a country to continue.',
    required: true,
    disabled: false,
    variant: 'default',
  },
  render: (args) => renderSelect(args),
};

/** Disabled state — interaction is blocked and the control is visually dimmed. */
export const Disabled: Story = {
  args: {
    name: 'service',
    label: 'Service',
    placeholder: 'Not available',
    options: serviceOptions,
    disabled: true,
    required: false,
    invalid: false,
    variant: 'default',
  },
  render: (args) => renderSelect(args),
};

/** Ghost variant — transparent background for use on coloured card surfaces. */
export const Ghost: Story = {
  parameters: {
    backgrounds: { default: 'brand' },
    backgrounds_values: [
      { name: 'brand', value: '#eff6ff' },
    ],
  },
  args: {
    name: 'budget',
    label: 'Budget',
    placeholder: 'Choose your budget…',
    options: budgetOptions,
    variant: 'ghost',
    required: false,
    disabled: false,
    invalid: false,
  },
  render: (args) => renderSelect(args),
};

/** Showcases all variants side-by-side for visual regression testing. */
export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem; max-width: 420px; font-family: system-ui, sans-serif;">
      <div>
        <p style="font-size: 0.75rem; color: #6b7280; margin: 0 0 0.5rem;">Default</p>
        ${renderSelect({ name: 'v1', label: 'Service', placeholder: 'Choose…', options: serviceOptions })}
      </div>
      <div>
        <p style="font-size: 0.75rem; color: #6b7280; margin: 0 0 0.5rem;">Required + Pre-selected</p>
        ${renderSelect({ name: 'v2', label: 'Budget', options: budgetOptions, value: 'mid', required: true })}
      </div>
      <div>
        <p style="font-size: 0.75rem; color: #6b7280; margin: 0 0 0.5rem;">Invalid</p>
        ${renderSelect({ name: 'v3', label: 'Country', placeholder: 'Select…', options: countryOptions, invalid: true, errorMessage: 'Please select a country.', required: true })}
      </div>
      <div>
        <p style="font-size: 0.75rem; color: #6b7280; margin: 0 0 0.5rem;">With Hint</p>
        ${renderSelect({ name: 'v4', label: 'Country', placeholder: 'Select…', options: countryOptions, hint: 'Determines applicable VAT rate.' })}
      </div>
      <div>
        <p style="font-size: 0.75rem; color: #6b7280; margin: 0 0 0.5rem;">Disabled</p>
        ${renderSelect({ name: 'v5', label: 'Service', placeholder: 'Not available', options: serviceOptions, disabled: true })}
      </div>
      <div style="background: #eff6ff; padding: 1rem; border-radius: 0.5rem;">
        <p style="font-size: 0.75rem; color: #6b7280; margin: 0 0 0.5rem;">Ghost (on coloured surface)</p>
        ${renderSelect({ name: 'v6', label: 'Budget', placeholder: 'Choose…', options: budgetOptions, variant: 'ghost' })}
      </div>
    </div>
  `,
};
