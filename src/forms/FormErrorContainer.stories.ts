/**
 * FormErrorContainer Stories — WenderMedia Astro Components
 *
 * Storybook stories for the FormErrorContainer atom. Because Storybook
 * in this library uses @storybook/web-components + lit-html, the stories
 * re-implement the visual output in lit-html rather than importing the
 * .astro file directly.
 *
 * @copyright 2007-2026 Arnold Wender · Wender Media. All Rights Reserved. License: LicenseRef-Wender-Media-Source-1.0
 * @see https://github.com/arnoldwender/wm-project-astro-components
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

// ---------------------------------------------------------------------------
// Shared inline styles that mirror the component's scoped CSS using WM tokens.
// In a real browser context the component's own <style> block handles this;
// Storybook sandboxes CSS so we replicate it here for faithful previews.
// ---------------------------------------------------------------------------

const BASE_STYLES = `
  font-family: ui-sans-serif, system-ui, sans-serif;
  display: block;
  padding: 1rem;
  border-radius: 0.375rem;
  border-width: 1px;
  border-style: solid;
  margin-bottom: 1rem;
`;

const VARIANT_STYLES: Record<string, string> = {
  default: 'background-color: #fef2f2; border-color: #dc2626; color: #dc2626;',
  warning: 'background-color: #fffbeb; border-color: #f59e0b; color: #92400e;',
  info:    'background-color: #eff6ff; border-color: #3b82f6; color: #2563eb;',
};

const ICON_SVG: Record<string, string> = {
  default: `<svg width="20" height="20" aria-hidden="true" focusable="false"
    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;">
    <circle cx="12" cy="12" r="10"/>
    <line x1="12" y1="8" x2="12" y2="12"/>
    <line x1="12" y1="16" x2="12.01" y2="16"/>
  </svg>`,

  warning: `<svg width="20" height="20" aria-hidden="true" focusable="false"
    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;">
    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
    <line x1="12" y1="9" x2="12" y2="13"/>
    <line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>`,

  info: `<svg width="20" height="20" aria-hidden="true" focusable="false"
    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;">
    <circle cx="12" cy="12" r="10"/>
    <line x1="12" y1="16" x2="12" y2="12"/>
    <line x1="12" y1="8" x2="12.01" y2="8"/>
  </svg>`,
};

// ---------------------------------------------------------------------------
// Shared render helper
// ---------------------------------------------------------------------------

const renderErrorContainer = (args: Record<string, unknown>) => {
  const variant = (args.variant as string) ?? 'default';
  const headingText = (args.headingText as string) ?? 'Bitte korrigieren Sie die folgenden Fehler:';
  const errors = (args.errors as string[]) ?? [];
  const visible = args.visible !== false;

  if (!visible) {
    return html`
      <p style="font-family: ui-sans-serif, system-ui, sans-serif; color: #737373; font-size: 0.875rem;">
        Container is hidden (data-hidden present). The validation engine removes this
        attribute to reveal it and moves focus here.
      </p>
    `;
  }

  const containerStyle = `${BASE_STYLES} ${VARIANT_STYLES[variant] ?? VARIANT_STYLES.default}`;

  return html`
    <div
      id="formErrors"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      tabindex="-1"
      data-form-errors
      data-variant=${variant}
      style=${containerStyle}
    >
      <!-- Header: icon + heading -->
      <div style="display:flex; align-items:center; gap:0.75rem;">
        <span .innerHTML=${ICON_SVG[variant] ?? ICON_SVG.default}></span>
        <p style="font-size:0.875rem; font-weight:500; margin:0; line-height:1.2;">
          ${headingText}
        </p>
      </div>

      <!-- Error list (injected by validation engine at runtime) -->
      ${errors.length > 0 ? html`
        <ul
          data-form-errors-list
          aria-label="Fehlerliste"
          style="list-style:disc; padding-left:1.25rem; margin-top:0.5rem; font-size:0.875rem; line-height:1.5;"
        >
          ${errors.map((err) => html`<li>${err}</li>`)}
        </ul>
      ` : html`
        <ul
          data-form-errors-list
          aria-label="Fehlerliste"
          style="list-style:disc; padding-left:1.25rem; margin-top:0.5rem; font-size:0.875rem; line-height:1.5; display:none;"
        ></ul>
        <p style="margin-top:0.5rem; font-size:0.75rem; opacity:0.7;">
          (Empty list — JS engine injects &lt;li&gt; items here at runtime)
        </p>
      `}
    </div>
  `;
};

// ---------------------------------------------------------------------------
// Meta
// ---------------------------------------------------------------------------

const meta: Meta = {
  title: 'Forms/FormErrorContainer',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Form-system error summary container atom.

Renders an ARIA live region (\`role="alert"\`, \`aria-live="assertive"\`) that
surfaces a validation error list for an entire form. Hidden by default via
\`data-hidden\`; the FormValidation engine (or any custom script) reveals it
and injects \`<li>\` items into the inner \`[data-form-errors-list]\` \`<ul>\`.

**Form-system contract** (do not rename these attributes):
| Attribute | Purpose |
|---|---|
| \`id="formErrors"\` | Referenced by \`aria-describedby\` on \`<form>\` and by the JS engine |
| \`data-form-errors\` | JS hook for toggle & focus |
| \`data-form-errors-list\` | Target \`<ul>\` for injected error items |
| \`data-hidden\` | Toggle: present = hidden, absent = visible |

**Variants:** \`default\` (error/red) · \`warning\` (amber) · \`info\` (blue)
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'warning', 'info'],
      description: 'Visual and semantic variant of the alert container.',
      table: { defaultValue: { summary: 'default' } },
    },
    headingText: {
      control: 'text',
      description: 'Heading text rendered above the error list.',
      table: { defaultValue: { summary: 'Bitte korrigieren Sie die folgenden Fehler:' } },
    },
    visible: {
      control: 'boolean',
      description: 'When false, simulates the data-hidden state (container not rendered).',
      table: { defaultValue: { summary: 'true' } },
    },
    errors: {
      control: 'object',
      description: 'Error items injected into the list by the validation engine at runtime.',
    },
  },
};

export default meta;
type Story = StoryObj;

// ---------------------------------------------------------------------------
// Stories
// ---------------------------------------------------------------------------

/** Default error variant with a populated error list — the typical runtime state. */
export const Default: Story = {
  args: {
    variant: 'default',
    headingText: 'Bitte korrigieren Sie die folgenden Fehler:',
    visible: true,
    errors: [
      'Name ist ein Pflichtfeld.',
      'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
      'Nachricht muss mindestens 20 Zeichen lang sein.',
    ],
  },
  render: (args) => renderErrorContainer(args),
};

/** Container revealed with an empty list — as seen in the first render before JS injects items. */
export const EmptyList: Story = {
  args: {
    variant: 'default',
    headingText: 'Bitte korrigieren Sie die folgenden Fehler:',
    visible: true,
    errors: [],
  },
  render: (args) => renderErrorContainer(args),
};

/** Hidden state — mirrors the initial HTML before any validation has run. */
export const Hidden: Story = {
  args: {
    variant: 'default',
    visible: false,
  },
  render: (args) => renderErrorContainer(args),
};

/** Warning variant — for non-blocking soft validations (e.g., optional field hints). */
export const WarningVariant: Story = {
  args: {
    variant: 'warning',
    headingText: 'Bitte beachten Sie die folgenden Hinweise:',
    visible: true,
    errors: [
      'Telefonnummer ist optional, erleichtert aber die Rückfrage.',
      'Betreff wurde leer gelassen — bitte ergänzen Sie ihn für eine schnellere Bearbeitung.',
    ],
  },
  render: (args) => renderErrorContainer(args),
};

/** Info variant — for informational notices (e.g., DSGVO processing hints). */
export const InfoVariant: Story = {
  args: {
    variant: 'info',
    headingText: 'Hinweis zur Verarbeitung Ihrer Daten:',
    visible: true,
    errors: [
      'Ihre Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.',
      'Sie können Ihre Einwilligung jederzeit widerrufen.',
    ],
  },
  render: (args) => renderErrorContainer(args),
};

/** Single error — minimal realistic case (one required field missed). */
export const SingleError: Story = {
  args: {
    variant: 'default',
    headingText: 'Bitte korrigieren Sie die folgenden Fehler:',
    visible: true,
    errors: ['E-Mail ist ein Pflichtfeld.'],
  },
  render: (args) => renderErrorContainer(args),
};

/** Form integration example — shows the container wired to a form via aria-describedby. */
export const FormIntegration: Story = {
  args: {
    variant: 'default',
    visible: true,
    errors: ['Name ist ein Pflichtfeld.', 'E-Mail ist ein Pflichtfeld.'],
  },
  render: (args) => html`
    <form
      aria-describedby="formErrors"
      onsubmit="event.preventDefault();"
      style="font-family: ui-sans-serif, system-ui, sans-serif; max-width: 480px; display: flex; flex-direction: column; gap: 1rem;"
    >
      <!-- FormErrorContainer slot -->
      ${renderErrorContainer(args)}

      <!-- Sample fields -->
      <div>
        <label for="demo-name" style="display:block; font-size:0.875rem; font-weight:500; margin-bottom:0.25rem;">
          Name <span aria-hidden="true" style="color:#dc2626;">*</span>
        </label>
        <input
          type="text"
          id="demo-name"
          name="name"
          aria-invalid="true"
          aria-describedby="formErrors"
          required
          style="width:100%; padding:0.75rem 1rem; border:1px solid #dc2626; border-radius:0.375rem; font-size:1rem; box-sizing:border-box;"
        />
      </div>

      <div>
        <label for="demo-email" style="display:block; font-size:0.875rem; font-weight:500; margin-bottom:0.25rem;">
          E-Mail <span aria-hidden="true" style="color:#dc2626;">*</span>
        </label>
        <input
          type="email"
          id="demo-email"
          name="email"
          aria-invalid="true"
          aria-describedby="formErrors"
          required
          style="width:100%; padding:0.75rem 1rem; border:1px solid #dc2626; border-radius:0.375rem; font-size:1rem; box-sizing:border-box;"
        />
      </div>

      <button
        type="submit"
        style="padding:0.75rem 1.5rem; background:#2563eb; color:#fff; font-weight:600; border:none; border-radius:0.375rem; font-size:1rem; cursor:pointer; min-height:44px;"
      >
        Absenden
      </button>
    </form>
  `,
};
