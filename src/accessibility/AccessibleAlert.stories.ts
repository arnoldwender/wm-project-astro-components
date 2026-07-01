/**
 * AccessibleAlert Stories - WenderMedia Astro Components
 *
 * Stories re-implement the visual output in lit-html for Storybook;
 * they do NOT import the .astro component directly.
 *
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

// ---------------------------------------------------------------------------
// Shared icon paths (mirrors AccessibleAlert.astro)
// ---------------------------------------------------------------------------
const ICON_PATHS = {
  info: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  success: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  warning:
    'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
  error:
    'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z',
} as const;

// ---------------------------------------------------------------------------
// Colour map — mirrors token-only CSS in the .astro component
// Uses inline values matching tokens/dist/tokens.css for the story canvas.
// ---------------------------------------------------------------------------
const THEME = {
  info: {
    bg: '#f0f9ff',      // --color-sky-50 / --color-semantic-info-light
    border: '#bae6fd',  // --color-sky-200
    text: '#0c4a6e',    // --color-sky-900
    icon: '#0284c7',    // --color-sky-600
  },
  success: {
    bg: '#f0fdf4',      // --color-green-50 / --color-semantic-success-light
    border: '#bbf7d0',  // --color-green-200
    text: '#14532d',    // --color-green-900
    icon: '#16a34a',    // --color-green-600
  },
  warning: {
    bg: '#fffbeb',      // --color-amber-50 / --color-semantic-warning-light
    border: '#fde68a',  // --color-amber-200
    text: '#78350f',    // --color-amber-900
    icon: '#d97706',    // --color-amber-600
  },
  error: {
    bg: '#fef2f2',      // --color-red-50 / --color-semantic-error-light
    border: '#fecaca',  // --color-red-200
    text: '#7f1d1d',    // --color-red-900
    icon: '#dc2626',    // --color-red-600
  },
} as const;

type AlertType = keyof typeof THEME;

// ---------------------------------------------------------------------------
// lit-html render helper
// ---------------------------------------------------------------------------
interface AlertArgs {
  type: AlertType;
  title?: string;
  message: string;
  dismissible?: boolean;
  autofocus?: boolean;
}

function renderAlert(args: AlertArgs) {
  const { type = 'info', title, message, dismissible = false } = args;
  const theme = THEME[type];
  const iconPath = ICON_PATHS[type];
  const role = type === 'error' ? 'alert' : 'status';
  const ariaLive = type === 'error' ? 'assertive' : 'polite';
  const typeLabels: Record<AlertType, string> = {
    info: 'Information',
    success: 'Success',
    warning: 'Warning',
    error: 'Error',
  };
  const typeLabel = typeLabels[type];

  return html`
    <div style="font-family: system-ui, sans-serif; padding: 2rem; max-width: 40rem;">
      <div
        role="${role}"
        aria-live="${ariaLive}"
        aria-atomic="true"
        style="
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 1rem;
          border: 1px solid ${theme.border};
          border-radius: 0.5rem;
          background-color: ${theme.bg};
          color: ${theme.text};
          font-size: 0.875rem;
          line-height: 1.625;
        "
      >
        <!-- Icon (decorative) -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="${theme.icon}"
          stroke-width="2"
          aria-hidden="true"
          focusable="false"
          style="width: 1.25rem; height: 1.25rem; flex-shrink: 0; margin-top: 0.125rem; color: ${theme.icon};"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="${iconPath}" />
        </svg>

        <!-- Body -->
        <div style="flex: 1; min-width: 0;">
          ${title
            ? html`<p style="font-weight: 600; margin: 0 0 0.25rem 0;">
                <span style="position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap;">${typeLabel}: </span>
                ${title}
              </p>`
            : ''}
          <p style="margin: 0;">
            ${!title
              ? html`<span style="position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap;">${typeLabel}: </span>`
              : ''}
            ${message}
          </p>
        </div>

        <!-- Dismiss button (optional) -->
        ${dismissible
          ? html`
            <button
              type="button"
              aria-label="Dismiss alert"
              style="
                display: flex;
                align-items: center;
                justify-content: center;
                min-width: 2.75rem;
                min-height: 2.75rem;
                flex-shrink: 0;
                margin: -0.5rem -0.5rem auto auto;
                padding: 0.5rem;
                background: transparent;
                border: none;
                border-radius: 0.375rem;
                cursor: pointer;
                opacity: 0.7;
                color: ${theme.text};
              "
              @mouseenter=${(e: MouseEvent) => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
              @mouseleave=${(e: MouseEvent) => { (e.currentTarget as HTMLElement).style.opacity = '0.7'; }}
              @click=${(e: MouseEvent) => {
                const alert = (e.currentTarget as HTMLElement).closest('[role]');
                alert?.remove();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                focusable="false"
                style="width: 1rem; height: 1rem;"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>`
          : ''}
      </div>
    </div>
  `;
}

// ---------------------------------------------------------------------------
// Meta
// ---------------------------------------------------------------------------
const meta: Meta = {
  title: 'Accessibility/AccessibleAlert',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A11y-first static alert/notification banner with full WAI-ARIA live-region contract.

**WAI-ARIA contract:**
- \`role="alert"\` + \`aria-live="assertive"\` for **error** — interrupts screen readers immediately
- \`role="status"\` + \`aria-live="polite"\` for **info / success / warning** — polite queue
- \`aria-atomic="true"\` on all types so the entire message is announced together
- Screen-reader-only type prefix prepended to the title/message (\`Information:\`, \`Error:\`, …)
- Dismiss button has an explicit \`aria-label="Dismiss alert"\`
- 44×44 px touch target on the dismiss button (WCAG 2.5.5)
- \`:focus-visible\` ring for keyboard users
- \`prefers-reduced-motion\` guard on entrance animation
- Windows High Contrast / forced-colors support

**Relationship to library siblings:**
- Complements \`accessibility/LiveRegion\` (dynamic JS-injected announcements)
- Provides a static, SSR-rendered alert with visible UI and token-only styles
        `,
      },
    },
    a11y: {
      config: {
        rules: [
          { id: 'color-contrast', enabled: true },
        ],
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
      description: 'Visual and semantic alert type',
      table: { defaultValue: { summary: 'info' } },
    },
    title: {
      control: 'text',
      description: 'Optional bold title rendered above the message',
    },
    message: {
      control: 'text',
      description: 'Main alert message text (required)',
    },
    dismissible: {
      control: 'boolean',
      description: 'Show a dismiss (×) button',
      table: { defaultValue: { summary: 'false' } },
    },
    autofocus: {
      control: 'boolean',
      description: 'Move focus to the alert on mount (useful after async operations)',
      table: { defaultValue: { summary: 'false' } },
    },
  },
};

export default meta;
type Story = StoryObj;

// ---------------------------------------------------------------------------
// Stories
// ---------------------------------------------------------------------------

/** Default info alert — polite live region for status updates. */
export const Info: Story = {
  args: {
    type: 'info',
    message: 'Your profile settings have been saved.',
  },
  render: (args) => renderAlert(args as AlertArgs),
};

/** Success alert — polite, confirms a completed action. */
export const Success: Story = {
  args: {
    type: 'success',
    title: 'Order placed',
    message: 'Your order #12345 has been confirmed. You will receive an email shortly.',
  },
  render: (args) => renderAlert(args as AlertArgs),
};

/** Warning alert — polite, advises of a non-critical issue. */
export const Warning: Story = {
  args: {
    type: 'warning',
    title: 'Session expiring',
    message: 'Your session will expire in 5 minutes. Save your work.',
  },
  render: (args) => renderAlert(args as AlertArgs),
};

/** Error alert — assertive live region (role="alert"), interrupts screen readers immediately. */
export const Error: Story = {
  args: {
    type: 'error',
    title: 'Submission failed',
    message: 'Please fill in all required fields before submitting the form.',
  },
  render: (args) => renderAlert(args as AlertArgs),
};

/** Dismissible error alert — includes a close button with 44×44 touch target. */
export const DismissibleError: Story = {
  name: 'Error — Dismissible',
  args: {
    type: 'error',
    title: 'Authentication error',
    message: 'Your session has expired. Please log in again.',
    dismissible: true,
  },
  render: (args) => renderAlert(args as AlertArgs),
};

/** Dismissible success — confirm and clear. */
export const DismissibleSuccess: Story = {
  name: 'Success — Dismissible',
  args: {
    type: 'success',
    message: 'Newsletter subscription confirmed.',
    dismissible: true,
  },
  render: (args) => renderAlert(args as AlertArgs),
};

/** All four types shown together for visual comparison. */
export const AllTypes: Story = {
  name: 'All types (comparison)',
  parameters: {
    docs: {
      description: { story: 'All four alert types rendered side-by-side for visual comparison.' },
    },
  },
  render: () => html`
    <div style="font-family: system-ui, sans-serif; padding: 2rem; display: flex; flex-direction: column; gap: 1rem; max-width: 40rem;">
      ${renderAlert({ type: 'info', message: 'This is an informational message.' })}
      ${renderAlert({ type: 'success', message: 'Operation completed successfully.' })}
      ${renderAlert({ type: 'warning', message: 'Please review your input before continuing.' })}
      ${renderAlert({ type: 'error', message: 'An error occurred. Please try again.' })}
    </div>
  `,
};

/** All four types with title + dismissible for full feature check. */
export const AllTypesWithTitleDismissible: Story = {
  name: 'All types — title + dismissible',
  parameters: {
    docs: {
      description: { story: 'Full-featured variant: title, message, and dismiss button on all four types.' },
    },
  },
  render: () => html`
    <div style="font-family: system-ui, sans-serif; padding: 2rem; display: flex; flex-direction: column; gap: 1rem; max-width: 40rem;">
      ${renderAlert({ type: 'info',    title: 'Heads up',          message: 'A new version is available.', dismissible: true })}
      ${renderAlert({ type: 'success', title: 'Upload complete',   message: 'Your file has been uploaded.', dismissible: true })}
      ${renderAlert({ type: 'warning', title: 'Low disk space',    message: 'Less than 10 % of disk space remains.', dismissible: true })}
      ${renderAlert({ type: 'error',   title: 'Connection lost',   message: 'Could not reach the server. Retry?', dismissible: true })}
    </div>
  `,
};
