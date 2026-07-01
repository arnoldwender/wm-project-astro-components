/**
 * FormTextArea Stories — WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Forms/FormTextArea',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A standalone accessible textarea atom that integrates with the WM form-system contract.

**Form-system contract (ID hooks)**
- \`{id}Hint\` — hint text paragraph (wired into \`aria-describedby\`)
- \`{id}Counter\` — character counter paragraph (\`aria-live="polite"\`)
- \`{id}Count\` — counter span updated by FormValidation engine at runtime
- \`{id}Error\` — error container (\`role="alert"\`, always in DOM, hidden by default)

**Accessibility**
- WCAG 2.2 AA / BFSG compliant
- \`:focus-visible\` ring only (no mouse-focus outline)
- \`aria-invalid\`, \`aria-required\`, \`aria-describedby\` fully wired
- \`prefers-reduced-motion\` guard on all transitions
- 44 px minimum touch target enforced
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
      description: 'Placeholder shown inside the textarea',
    },
    required: {
      control: 'boolean',
      description: 'Mark field as required (shows * and sets aria-required)',
    },
    rows: {
      control: { type: 'number', min: 2, max: 20 },
      description: 'Number of visible text rows',
    },
    hint: {
      control: 'text',
      description: 'Helper text rendered below the textarea',
    },
    maxLength: {
      control: { type: 'number', min: 10, max: 2000 },
      description: 'Maximum character count (also drives the optional counter)',
    },
    showCounter: {
      control: 'boolean',
      description: 'Show live character counter (requires maxLength)',
    },
    tooltip: {
      control: 'text',
      description: 'Contextual help tooltip shown next to the label',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the textarea',
    },
    invalid: {
      control: 'boolean',
      description: 'Show the invalid/error state (aria-invalid + border)',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message shown in the error container when invalid=true',
    },
  },
};

export default meta;
type Story = StoryObj;

/* ─────────────────────────────────────────────────────────────────────────────
 * Shared render helper
 * The story re-implements the visual in lit-html (does NOT import the .astro).
 * It honours the same aria-describedby / ID contract as the component.
 * ───────────────────────────────────────────────────────────────────────────── */
const renderTextArea = (args: Record<string, unknown>) => {
  const id = 'story-textarea';
  const required = !!args.required;
  const disabled = !!args.disabled;
  const invalid = !!args.invalid;
  const showCounter = !!(args.showCounter && args.maxLength);
  const hasHint = !!args.hint;
  const hasError = invalid && !!args.errorMessage;

  // Matches the component's aria-describedby composition exactly
  const describedBy = [
    hasHint ? `${id}Hint` : null,
    showCounter ? `${id}Counter` : null,
    `${id}Error`,
  ]
    .filter(Boolean)
    .join(' ');

  return html`
    <div style="
      font-family: system-ui, -apple-system, sans-serif;
      font-size: 1rem;
      max-width: 480px;
      padding: 1.5rem;
    ">
      <style>
        /* Inline preview tokens — these mirror what the real token layer provides */
        .story-field { display: flex; flex-direction: column; gap: 0; }

        .story-label-row {
          display: flex;
          align-items: center;
          gap: 4px;
          margin-bottom: 6px;
        }

        .story-label {
          display: block;
          font-size: 0.875rem;
          font-weight: 500;
          line-height: 1.25;
          color: #111827;
        }

        .story-required {
          color: #dc2626;
        }

        .story-textarea {
          display: block;
          width: 100%;
          min-height: 44px;
          padding: 10px 16px;
          font-family: inherit;
          font-size: 1rem;
          line-height: 1.5;
          color: #111827;
          background-color: #ffffff;
          border: 1px solid #d1d5db;
          border-radius: 6px;
          resize: vertical;
          transition: border-color 150ms ease, box-shadow 150ms ease;
          box-sizing: border-box;
        }

        .story-textarea::placeholder { color: #9ca3af; }
        .story-textarea:not(:disabled):hover { border-color: #6b7280; }

        .story-textarea:focus-visible {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 2px #fff, 0 0 0 4px #3b82f6;
        }

        .story-textarea[aria-invalid='true'] {
          border-color: #dc2626;
        }

        .story-textarea[aria-invalid='true']:focus-visible {
          border-color: #dc2626;
          box-shadow: 0 0 0 2px #fff, 0 0 0 4px #dc2626;
        }

        .story-textarea:disabled {
          background-color: #f3f4f6;
          color: #9ca3af;
          border-color: #e5e7eb;
          cursor: not-allowed;
          resize: none;
        }

        .story-sub-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 12px;
          margin-top: 4px;
        }

        .story-hint {
          margin: 0;
          font-size: 0.875rem;
          line-height: 1.5;
          color: #4b5563;
        }

        .story-counter {
          margin: 0;
          font-size: 0.875rem;
          line-height: 1.5;
          color: #4b5563;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .story-error {
          margin: 4px 0 0;
          font-size: 0.875rem;
          line-height: 1.5;
          color: #dc2626;
        }

        .story-error[hidden] { display: none; }

        .story-tooltip {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #6b7280;
          cursor: help;
          border-radius: 3px;
          padding: 2px;
        }

        .story-tooltip:hover,
        .story-tooltip:focus-visible {
          color: #3b82f6;
          outline: none;
        }
      </style>

      <div class="story-field">
        <!-- Label row -->
        <div class="story-label-row">
          <label for="${id}" class="story-label">
            ${args.label}
            ${required
              ? html`<span class="story-required" aria-hidden="true"> *</span>`
              : ''}
          </label>

          ${args.tooltip
            ? html`
                <span
                  class="story-tooltip"
                  role="tooltip"
                  id="${id}-tooltip"
                  aria-label="${args.tooltip}"
                  tabindex="0"
                  title="${String(args.tooltip)}"
                >
                  <svg aria-hidden="true" focusable="false" viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                  </svg>
                </span>
              `
            : ''}
        </div>

        <!-- Textarea -->
        <textarea
          id="${id}"
          name="${id}"
          rows="${args.rows ?? 4}"
          ?required="${required}"
          ?disabled="${disabled}"
          minlength="${args.minLength ?? ''}"
          maxlength="${args.maxLength ?? ''}"
          aria-describedby="${describedBy}"
          aria-required="${required ? 'true' : 'false'}"
          aria-invalid="${invalid ? 'true' : 'false'}"
          placeholder="${String(args.placeholder ?? '')}"
          class="story-textarea"
        ></textarea>

        <!-- Sub-row: hint + counter -->
        ${hasHint || showCounter
          ? html`
              <div class="story-sub-row">
                ${hasHint
                  ? html`<p id="${id}Hint" class="story-hint">${args.hint}</p>`
                  : ''}
                ${showCounter
                  ? html`
                      <p
                        id="${id}Counter"
                        class="story-counter"
                        aria-live="polite"
                        aria-atomic="true"
                      >
                        <span id="${id}Count">0</span>/${args.maxLength}
                      </p>
                    `
                  : ''}
              </div>
            `
          : ''}

        <!-- Error container (always in DOM, hidden unless invalid) -->
        <p
          id="${id}Error"
          class="story-error"
          role="alert"
          aria-live="assertive"
          ?hidden="${!hasError}"
        >
          ${hasError ? args.errorMessage : ''}
        </p>
      </div>
    </div>
  `;
};

/* ─────────────────────────────────────────────────────────────────────────────
 * Stories
 * ───────────────────────────────────────────────────────────────────────────── */

/** Default state — required field, no extras. */
export const Default: Story = {
  args: {
    label: 'Message',
    placeholder: 'Your message…',
    required: true,
    rows: 4,
  },
  render: (args) => renderTextArea(args),
};

/** Optional field with hint text. */
export const WithHint: Story = {
  args: {
    label: 'Feedback',
    placeholder: 'Tell us what you think…',
    required: false,
    rows: 4,
    hint: 'Please be as specific as possible.',
  },
  render: (args) => renderTextArea(args),
};

/** Character counter with `maxLength`. The counter `{id}Count` span is updated by
 * the FormValidation engine at runtime; in Storybook it starts at 0. */
export const WithCounter: Story = {
  args: {
    label: 'Short bio',
    placeholder: 'Introduce yourself in a few sentences…',
    required: false,
    rows: 4,
    maxLength: 280,
    showCounter: true,
  },
  render: (args) => renderTextArea(args),
};

/** Hint + counter combined. */
export const WithHintAndCounter: Story = {
  args: {
    label: 'Project description',
    placeholder: 'Describe your project…',
    required: true,
    rows: 5,
    hint: 'Include goals, timeline, and any technical requirements.',
    maxLength: 500,
    showCounter: true,
  },
  render: (args) => renderTextArea(args),
};

/** Contextual tooltip next to the label. */
export const WithTooltip: Story = {
  args: {
    label: 'Internal note',
    placeholder: 'Only visible to your team…',
    required: false,
    rows: 3,
    tooltip: 'This field is only visible to internal users and is not sent to clients.',
  },
  render: (args) => renderTextArea(args),
};

/** Error / invalid state — `aria-invalid="true"` + visible error message. */
export const InvalidState: Story = {
  args: {
    label: 'Message',
    placeholder: 'Your message…',
    required: true,
    rows: 4,
    invalid: true,
    errorMessage: 'Please enter a message before submitting.',
  },
  render: (args) => renderTextArea(args),
};

/** Disabled state — `disabled` attribute applied. */
export const Disabled: Story = {
  args: {
    label: 'Archived notes',
    placeholder: 'No content…',
    required: false,
    rows: 3,
    disabled: true,
  },
  render: (args) => renderTextArea(args),
};

/** Tall variant — 8 rows, full feature set. */
export const Tall: Story = {
  args: {
    label: 'Detailed requirements',
    placeholder: 'Describe your requirements in full detail…',
    required: true,
    rows: 8,
    hint: 'The more detail you provide, the better we can help.',
    maxLength: 1000,
    showCounter: true,
  },
  render: (args) => renderTextArea(args),
};
