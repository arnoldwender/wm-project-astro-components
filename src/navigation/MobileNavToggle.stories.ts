/**
 * MobileNavToggle Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Navigation/MobileNavToggle',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Standalone accessible hamburger / × toggle button for mobile navigation panels.

**Distinct from MobileNav.astro** — MobileNav renders a complete overlay that
bundles its own trigger internally. MobileNavToggle is the extracted primitive
for layouts where the trigger lives in a separate header atom while the panel
is composed elsewhere (e.g. teleported to \`<body>\`).

**Features:**
- 44 × 44 px minimum touch target (WCAG 2.2 SC 2.5.8 / BFSG)
- CSS-only hamburger → × morph driven by \`aria-expanded\` state
- Two variants: \`dark\` (lines on light bg) and \`light\` (lines on dark bg)
- Token-only styles — no hardcoded hex / px
- \`prefers-reduced-motion\` guard on the morph animation
- Visible \`:focus-visible\` ring using \`--color-border-focus\`
- Client script toggles \`aria-expanded\` + \`aria-hidden\` on the controlled panel
- Escape key closes the panel and returns focus to the button
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['dark', 'light'],
      description: 'Visual variant — dark lines on light bg, light lines on dark bg',
    },
    expanded: {
      control: 'boolean',
      description: 'Initial expanded / open state',
    },
    label: {
      control: 'text',
      description: 'Screen-reader label when menu is closed',
    },
    labelClose: {
      control: 'text',
      description: 'Screen-reader label when menu is open (falls back to label)',
    },
  },
};

export default meta;
type Story = StoryObj;

/* ─── Shared helpers ──────────────────────────────────────────────────────── */

/** Inline the design tokens needed to render standalone in Storybook. */
const tokenStyles = html`
  <style>
    :root {
      --spacing-1-5: 0.375rem;
      --spacing-2: 0.5rem;
      --spacing-6: 1.5rem;
      --border-radius-md: 0.375rem;
      --border-radius-full: 9999px;
      --color-text-primary: #1e293b;
      --color-text-inverse: #ffffff;
      --color-background-subtle: #f1f5f9;
      --color-border-focus: #0ea5e9;
      --opacity-10: 0.1;
      --transition-duration-fast: 150ms;
      --transition-duration-slow: 300ms;
      --transition-timing-ease: ease;
      --transition-timing-ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
    }
  </style>
`;

/** Re-implement the toggle visual in lit-html (does not import .astro). */
function renderToggle(args: {
  variant?: string;
  expanded?: boolean;
  label?: string;
}) {
  const variant = args.variant ?? 'dark';
  const expanded = args.expanded ?? false;
  const label = args.label ?? 'Menü öffnen';

  /* Inline the component CSS so the story is fully self-contained. */
  const componentStyles = html`
    <style>
      .sb-mobile-nav-toggle {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 44px;
        min-height: 44px;
        padding: var(--spacing-2);
        background: none;
        border: none;
        border-radius: var(--border-radius-md);
        cursor: pointer;
        transition:
          background-color var(--transition-duration-fast) var(--transition-timing-ease),
          color var(--transition-duration-fast) var(--transition-timing-ease);
      }
      .sb-mobile-nav-toggle--dark { color: var(--color-text-primary); }
      .sb-mobile-nav-toggle--dark:hover { background-color: var(--color-background-subtle); }
      .sb-mobile-nav-toggle--light { color: var(--color-text-inverse); }
      .sb-mobile-nav-toggle--light:hover {
        background-color: color-mix(
          in srgb,
          var(--color-text-inverse) calc(var(--opacity-10) * 100%),
          transparent
        );
      }
      .sb-mobile-nav-toggle:focus-visible {
        outline: 2px solid var(--color-border-focus);
        outline-offset: 2px;
      }
      .sb-toggle-icon {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: var(--spacing-1-5);
        width: var(--spacing-6);
        height: var(--spacing-6);
      }
      .sb-toggle-line {
        display: block;
        width: 100%;
        height: 2px;
        background: currentColor;
        border-radius: var(--border-radius-full);
        transform-origin: center;
        transition:
          transform var(--transition-duration-slow) var(--transition-timing-ease-in-out),
          opacity var(--transition-duration-slow) var(--transition-timing-ease-in-out);
      }
      /* Open state */
      .sb-mobile-nav-toggle[aria-expanded="true"] .sb-toggle-line--top {
        transform: translateY(calc(var(--spacing-1-5) + 2px)) rotate(45deg);
      }
      .sb-mobile-nav-toggle[aria-expanded="true"] .sb-toggle-line--mid {
        opacity: 0;
        transform: scaleX(0);
      }
      .sb-mobile-nav-toggle[aria-expanded="true"] .sb-toggle-line--bot {
        transform: translateY(calc(-1 * (var(--spacing-1-5) + 2px))) rotate(-45deg);
      }
      @media (prefers-reduced-motion: reduce) {
        .sb-toggle-line { transition: none; }
      }
    </style>
  `;

  return html`
    ${tokenStyles}
    ${componentStyles}
    <button
      type="button"
      aria-controls="sb-demo-panel"
      aria-expanded=${String(expanded)}
      aria-label=${label}
      class="sb-mobile-nav-toggle sb-mobile-nav-toggle--${variant}"
      @click=${(e: MouseEvent) => {
        const btn = e.currentTarget as HTMLButtonElement;
        const isOpen = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!isOpen));
      }}
    >
      <span class="sb-toggle-icon" aria-hidden="true">
        <span class="sb-toggle-line sb-toggle-line--top"></span>
        <span class="sb-toggle-line sb-toggle-line--mid"></span>
        <span class="sb-toggle-line sb-toggle-line--bot"></span>
      </span>
    </button>
  `;
}

/* ─── Stories ─────────────────────────────────────────────────────────────── */

/** Default dark variant — closed state. Click to see the morph animation. */
export const Default: Story = {
  args: { variant: 'dark', expanded: false, label: 'Menü öffnen' },
  render: (args) => renderToggle(args as { variant?: string; expanded?: boolean; label?: string }),
};

/** Dark variant in the open / × state. */
export const DarkOpen: Story = {
  args: { variant: 'dark', expanded: true, label: 'Menü öffnen' },
  render: (args) => renderToggle(args as { variant?: string; expanded?: boolean; label?: string }),
};

/** Light variant for use on dark/coloured header backgrounds. */
export const LightVariant: Story = {
  args: { variant: 'light', expanded: false, label: 'Menü öffnen' },
  decorators: [
    (story) => html`
      <div style="background: #0f172a; padding: 1rem; display: inline-block; border-radius: 0.5rem;">
        ${story()}
      </div>
    `,
  ],
  render: (args) => renderToggle(args as { variant?: string; expanded?: boolean; label?: string }),
};

/** Light variant in the open state on a dark background. */
export const LightOpen: Story = {
  args: { variant: 'light', expanded: true, label: 'Menü öffnen' },
  decorators: [
    (story) => html`
      <div style="background: #0f172a; padding: 1rem; display: inline-block; border-radius: 0.5rem;">
        ${story()}
      </div>
    `,
  ],
  render: (args) => renderToggle(args as { variant?: string; expanded?: boolean; label?: string }),
};

/** Side-by-side reference — all four states at a glance. */
export const AllStates: Story = {
  render: () => html`
    ${tokenStyles}
    <div style="display: flex; flex-wrap: wrap; gap: 1.5rem; align-items: center; padding: 1rem;">
      <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
        ${renderToggle({ variant: 'dark', expanded: false })}
        <small style="font-family: monospace; font-size: 0.75rem; color: #64748b;">dark / closed</small>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
        ${renderToggle({ variant: 'dark', expanded: true })}
        <small style="font-family: monospace; font-size: 0.75rem; color: #64748b;">dark / open</small>
      </div>
      <div style="background: #0f172a; padding: 1rem; border-radius: 0.5rem; display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
        ${renderToggle({ variant: 'light', expanded: false })}
        <small style="font-family: monospace; font-size: 0.75rem; color: #94a3b8;">light / closed</small>
      </div>
      <div style="background: #0f172a; padding: 1rem; border-radius: 0.5rem; display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
        ${renderToggle({ variant: 'light', expanded: true })}
        <small style="font-family: monospace; font-size: 0.75rem; color: #94a3b8;">light / open</small>
      </div>
    </div>
  `,
};
