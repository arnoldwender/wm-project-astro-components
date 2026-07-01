/**
 * FormTextField Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

/** Shared minimal inline token values used only inside Storybook stories.
 *  The real component relies on the token stylesheet loaded by DesignSystemProvider.
 *  These inline styles are intentionally minimal to make the story readable in isolation. */
const storyTokens = `
  font-family: ui-sans-serif, system-ui, sans-serif;
  --color-text-primary: #171717;
  --color-text-secondary: #525252;
  --color-text-tertiary: #a3a3a3;
  --color-text-muted: #a3a3a3;
  --color-surface: #ffffff;
  --color-background-muted: #f5f5f5;
  --color-border-default: #e5e5e5;
  --color-border-strong: #d4d4d4;
  --color-focus-ring: #3b82f6;
  --color-focus-ring-offset: #ffffff;
  --color-error: #dc2626;
  --color-success: #16a34a;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-xs: 0.75rem;
  --font-weight-medium: 500;
  --line-height-tight: 1.25;
  --line-height-normal: 1.5;
  --border-width-1: 1px;
  --radius-md: 0.375rem;
  --radius-full: 9999px;
  --spacing-1: 0.25rem;
  --spacing-2: 0.5rem;
  --spacing-3: 0.75rem;
  --spacing-4: 1rem;
  --spacing-stack-xs: 0.25rem;
  --spacing-stack-sm: 0.5rem;
  --spacing-inline-xs: 0.25rem;
  --spacing-inline-lg: 1rem;
  --size-4: 1rem;
  --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --touch-target-min: 44px;
  --opacity-50: 0.5;
  --duration-150: 150ms;
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
`;

const meta: Meta = {
  title: 'Forms/FormTextField',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Single-line text input atom for the WM form system. Provides a fully accessible
labeled \`<input>\` that integrates with the form-system validation contract:

**Form-system hook IDs** (never rename these):
- \`\${id}Hint\` — hint paragraph linked via \`aria-describedby\`
- \`\${id}Error\` — live error container, \`role="alert"\`, populated by FormValidation
- \`\${id}Valid\` — valid state icon, toggled \`.hidden\` by FormValidation
- \`\${id}Invalid\` — invalid state icon, toggled \`.hidden\` by FormValidation

**Accessibility:** WCAG 2.2 AA / BFSG compliant — visible label association, \`aria-required\`,
\`aria-invalid\`, \`aria-describedby\`, \`:focus-visible\` outline, 44 px min touch target,
\`prefers-reduced-motion\` guard. Required indicator uses both visual asterisk (\`aria-hidden\`)
and an off-screen SR text span.
        `,
      },
    },
  },
  argTypes: {
    id: {
      control: 'text',
      description: 'Unique HTML id — seeds form-system hook IDs',
    },
    name: {
      control: 'text',
      description: 'Input name attribute submitted with the form',
    },
    label: {
      control: 'text',
      description: 'Visible label text',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'tel', 'url'],
      description: 'Input type — affects keyboard mode on mobile',
    },
    required: {
      control: 'boolean',
      description: 'Marks the field required — adds visual asterisk + ARIA signal',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text (label is the primary affordance)',
    },
    autocomplete: {
      control: 'text',
      description: 'Autocomplete token(s) for browser autofill',
    },
    hint: {
      control: 'text',
      description: 'Persistent hint rendered below the field (aria-describedby linked)',
    },
    tooltip: {
      control: 'text',
      description: 'Contextual help text shown as a tooltip next to the label',
    },
    requiredLabel: {
      control: 'text',
      description: 'Screen-reader text for the required indicator — override for non-German locales',
    },
  },
};

export default meta;
type Story = StoryObj;

/** Renders a single FormTextField in lit-html for Storybook.
 *  NOTE: this does NOT import the .astro file — it re-implements the visual
 *  using the same token variables and HTML structure. */
const renderField = (args: Record<string, unknown>) => {
  const id = String(args.id ?? 'field');
  const hint = args.hint ? String(args.hint) : null;
  const tooltip = args.tooltip ? String(args.tooltip) : null;
  const required = Boolean(args.required);
  const type = String(args.type ?? 'text');
  const label = String(args.label ?? 'Label');
  const placeholder = String(args.placeholder ?? '');
  const autocomplete = args.autocomplete ? String(args.autocomplete) : null;
  const requiredLabel = String(args.requiredLabel ?? '(required field)');

  const describedBy = [hint ? `${id}Hint` : '', `${id}Error`].filter(Boolean).join(' ') || undefined;

  return html`
    <div style=${storyTokens}>
      <div style="max-width: 420px; padding: 1.5rem;">
        <!-- Wrapper -->
        <div style="display: flex; flex-direction: column; gap: var(--spacing-stack-xs);">

          <!-- Label row -->
          <div style="display: flex; align-items: center; gap: var(--spacing-inline-xs);">
            <label
              for=${id}
              style="
                display: block;
                font-size: var(--font-size-sm);
                font-weight: var(--font-weight-medium);
                line-height: var(--line-height-tight);
                color: var(--color-text-primary);
              "
            >
              ${label}
              ${required ? html`
                <span style="color: var(--color-error); margin-inline-start: 0.125rem;" aria-hidden="true">*</span>
                <span style="position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0;">${requiredLabel}</span>
              ` : ''}
            </label>

            ${tooltip ? html`
              <span
                title=${tooltip}
                aria-label=${tooltip}
                style="
                  display: inline-flex;
                  align-items: center;
                  justify-content: center;
                  padding: var(--spacing-2);
                  margin: calc(var(--spacing-2) * -1);
                  border-radius: var(--radius-full);
                  color: var(--color-text-tertiary);
                  cursor: help;
                "
              >
                <svg
                  width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  aria-hidden="true" focusable="false"
                >
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                  <line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
              </span>
            ` : ''}
          </div>

          <!-- Input wrapper -->
          <div style="position: relative; display: flex; align-items: center;">
            <input
              type=${type}
              id=${id}
              name=${args.name ?? id}
              ?required=${required}
              autocomplete=${autocomplete ?? ''}
              placeholder=${placeholder}
              aria-required=${required ? 'true' : 'false'}
              aria-describedby=${describedBy ?? ''}
              style="
                display: block;
                width: 100%;
                min-height: var(--touch-target-min);
                padding-block: var(--spacing-stack-sm);
                padding-inline: var(--spacing-inline-lg);
                padding-inline-end: 2.5rem;
                background-color: var(--color-surface);
                border: var(--border-width-1) solid var(--color-border-default);
                border-radius: var(--radius-md);
                font-size: var(--font-size-base);
                color: var(--color-text-primary);
                box-shadow: var(--shadow-xs);
                outline: none;
                box-sizing: border-box;
              "
            />

            <!-- Valid icon (hidden by default) -->
            <span
              id="${id}Valid"
              class="hidden"
              aria-hidden="true"
              style="position:absolute;inset-inline-end:0.75rem;display:flex;align-items:center;pointer-events:none;color:var(--color-success);"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" focusable="false">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </span>

            <!-- Invalid icon (hidden by default) -->
            <span
              id="${id}Invalid"
              class="hidden"
              aria-hidden="true"
              style="position:absolute;inset-inline-end:0.75rem;display:flex;align-items:center;pointer-events:none;color:var(--color-error);"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" focusable="false">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
            </span>
          </div>

          <!-- Hint text -->
          ${hint ? html`
            <p
              id="${id}Hint"
              style="margin:0;font-size:var(--font-size-xs);color:var(--color-text-secondary);line-height:var(--line-height-normal);"
            >${hint}</p>
          ` : ''}

          <!-- Live error container (empty by default) -->
          <p
            id="${id}Error"
            role="alert"
            style="margin:0;font-size:var(--font-size-xs);color:var(--color-error);line-height:var(--line-height-normal);display:none;"
          ></p>
        </div>
      </div>
    </div>
  `;
};

/* -----------------------------------------------------------------------
 * Stories
 * --------------------------------------------------------------------- */

/** Default text field — optional, no hint, no tooltip. */
export const Default: Story = {
  args: {
    id: 'name',
    name: 'name',
    label: 'Full name',
    type: 'text',
    required: false,
    placeholder: 'Jane Doe',
    autocomplete: 'name',
  },
  render: (args) => renderField(args),
};

/** Required email field — shows the required asterisk + ARIA signal. */
export const RequiredEmail: Story = {
  args: {
    id: 'email',
    name: 'email',
    label: 'Email address',
    type: 'email',
    required: true,
    placeholder: 'jane@example.com',
    autocomplete: 'email',
    requiredLabel: '(required field)',
  },
  render: (args) => renderField(args),
};

/** Field with a persistent hint below the input. */
export const WithHint: Story = {
  args: {
    id: 'phone',
    name: 'phone',
    label: 'Phone number',
    type: 'tel',
    required: false,
    placeholder: '+49 345 …',
    autocomplete: 'tel',
    inputmode: 'tel',
    hint: 'We will only call if absolutely necessary.',
  },
  render: (args) => renderField(args),
};

/** Field with a tooltip help indicator next to the label. */
export const WithTooltip: Story = {
  args: {
    id: 'website',
    name: 'website',
    label: 'Website URL',
    type: 'url',
    required: false,
    placeholder: 'https://example.com',
    autocomplete: 'url',
    tooltip: 'Include the full URL starting with https://',
  },
  render: (args) => renderField(args),
};

/** Required field with both hint and tooltip — full feature demonstration. */
export const FullFeatured: Story = {
  args: {
    id: 'company',
    name: 'company',
    label: 'Company name',
    type: 'text',
    required: true,
    placeholder: 'Acme GmbH',
    autocomplete: 'organization',
    hint: 'Enter the legal company name as registered.',
    tooltip: 'This will appear on your invoice.',
    requiredLabel: '(Pflichtfeld)',
  },
  render: (args) => renderField(args),
};

/** Demonstrates the invalid visual state (aria-invalid="true" + error message).
 *  In production this state is driven by the FormValidation rules engine. */
export const InvalidState: Story = {
  name: 'State / Invalid',
  args: {
    id: 'email-invalid',
    name: 'email',
    label: 'Email address',
    type: 'email',
    required: true,
    placeholder: 'jane@example.com',
    autocomplete: 'email',
  },
  render: (args) => {
    const id = String(args.id ?? 'email-invalid');
    return html`
      <div style=${storyTokens}>
        <div style="max-width: 420px; padding: 1.5rem;">
          <div style="display: flex; flex-direction: column; gap: var(--spacing-stack-xs);">
            <div style="display: flex; align-items: center; gap: var(--spacing-inline-xs);">
              <label for=${id} style="display:block;font-size:var(--font-size-sm);font-weight:var(--font-weight-medium);color:var(--color-text-primary);">
                ${args.label}
                <span style="color:var(--color-error);margin-inline-start:0.125rem;" aria-hidden="true">*</span>
              </label>
            </div>
            <div style="position:relative;display:flex;align-items:center;">
              <input
                type="email"
                id=${id}
                name="email"
                required
                aria-required="true"
                aria-invalid="true"
                aria-describedby="${id}Error"
                placeholder="jane@example.com"
                value="not-an-email"
                style="
                  display:block;width:100%;min-height:var(--touch-target-min);
                  padding-block:var(--spacing-stack-sm);padding-inline:var(--spacing-inline-lg);
                  padding-inline-end:2.5rem;background-color:var(--color-surface);
                  border:var(--border-width-1) solid var(--color-error);
                  border-radius:var(--radius-md);font-size:var(--font-size-base);
                  color:var(--color-text-primary);box-shadow:var(--shadow-xs);
                  outline:none;box-sizing:border-box;
                "
              />
              <span aria-hidden="true" style="position:absolute;inset-inline-end:0.75rem;display:flex;align-items:center;pointer-events:none;color:var(--color-error);">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" focusable="false">
                  <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
              </span>
            </div>
            <p id="${id}Error" role="alert" style="margin:0;font-size:var(--font-size-xs);color:var(--color-error);line-height:var(--line-height-normal);">
              Please enter a valid email address.
            </p>
          </div>
        </div>
      </div>
    `;
  },
};

/** Demonstrates the valid visual state (aria-invalid="false" + check icon visible).
 *  In production this state is driven by the FormValidation rules engine. */
export const ValidState: Story = {
  name: 'State / Valid',
  args: {
    id: 'email-valid',
    name: 'email',
    label: 'Email address',
    type: 'email',
    required: true,
    placeholder: 'jane@example.com',
    autocomplete: 'email',
  },
  render: (args) => {
    const id = String(args.id ?? 'email-valid');
    return html`
      <div style=${storyTokens}>
        <div style="max-width: 420px; padding: 1.5rem;">
          <div style="display: flex; flex-direction: column; gap: var(--spacing-stack-xs);">
            <div style="display: flex; align-items: center; gap: var(--spacing-inline-xs);">
              <label for=${id} style="display:block;font-size:var(--font-size-sm);font-weight:var(--font-weight-medium);color:var(--color-text-primary);">
                ${args.label}
                <span style="color:var(--color-error);margin-inline-start:0.125rem;" aria-hidden="true">*</span>
              </label>
            </div>
            <div style="position:relative;display:flex;align-items:center;">
              <input
                type="email"
                id=${id}
                name="email"
                required
                aria-required="true"
                aria-invalid="false"
                aria-describedby="${id}Error"
                placeholder="jane@example.com"
                value="jane@example.com"
                style="
                  display:block;width:100%;min-height:var(--touch-target-min);
                  padding-block:var(--spacing-stack-sm);padding-inline:var(--spacing-inline-lg);
                  padding-inline-end:2.5rem;background-color:var(--color-surface);
                  border:var(--border-width-1) solid var(--color-success);
                  border-radius:var(--radius-md);font-size:var(--font-size-base);
                  color:var(--color-text-primary);box-shadow:var(--shadow-xs);
                  outline:none;box-sizing:border-box;
                "
              />
              <span aria-hidden="true" style="position:absolute;inset-inline-end:0.75rem;display:flex;align-items:center;pointer-events:none;color:var(--color-success);">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" focusable="false">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </span>
            </div>
            <p id="${id}Error" role="alert" style="margin:0;font-size:var(--font-size-xs);color:var(--color-error);line-height:var(--line-height-normal);display:none;"></p>
          </div>
        </div>
      </div>
    `;
  },
};
