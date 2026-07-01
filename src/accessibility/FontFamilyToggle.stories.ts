/**
 * FontFamilyToggle Stories - WenderMedia Astro Components
 *
 * Visualises the FontFamilyToggle a11y component across its key variants.
 * Implemented in lit-html for @storybook/web-components — does NOT import the
 * .astro component directly.  The button markup mirrors the rendered HTML that
 * Astro emits so designers can inspect styling and interaction in isolation.
 *
 * @copyright 2007-2026 Arnold Wender · Wender Media. All Rights Reserved. License: LicenseRef-Wender-Media-Source-1.0
 * @see https://github.com/arnoldwender/wm-project-astro-components
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

// ─── Shared inline styles (mirrors tokens.css values) ──────────────────────
// We reproduce only the tokens consumed by this component so the story is
// self-contained and does not depend on a global stylesheet import.
const TOKEN_STYLE = `
  :host, * {
    box-sizing: border-box;
  }
  .fft-demo {
    --color-base-white: #ffffff;
    --color-brand-primary: #0ea5e9;
    --color-brand-primary-hover: #0284c7;
    --color-border-focus: #0ea5e9;
    --font-size-sm: 0.875rem;
    --font-weight-medium: 500;
    --spacing-1: 0.25rem;
    --spacing-2: 0.5rem;
    --spacing-3: 0.75rem;
    --border-radius-lg: 0.5rem;
    --border-radius-sm: 0.125rem;
    --transition-duration-fast: 150ms;
    --transition-duration-slow: 300ms;
    --transition-timing-ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

// ─── Re-usable lit-html renderer ───────────────────────────────────────────
interface RenderArgs {
  labelSans: string;
  labelSerif: string;
  ariaLabel: string;
  pressed: boolean;
  showIndicator: boolean;
  darkBackground: boolean;
  disabled: boolean;
}

const renderToggle = (args: RenderArgs) => {
  const bg    = args.darkBackground ? '#1e293b' : '#f8fafc';
  const color = args.darkBackground ? '#f1f5f9' : '#1e293b';

  return html`
    <style>${TOKEN_STYLE}</style>

    <div
      class="fft-demo"
      style="
        background: ${bg};
        color: ${color};
        padding: 2rem;
        border-radius: 0.5rem;
        font-family: system-ui, -apple-system, sans-serif;
        display: inline-flex;
        flex-direction: column;
        gap: 1rem;
        min-width: 260px;
      "
    >
      <!-- Toggle button (static lit-html replica) -->
      <button
        type="button"
        aria-pressed="${args.pressed}"
        aria-label="${args.ariaLabel}"
        ?disabled="${args.disabled}"
        style="
          display: inline-flex;
          align-items: center;
          gap: var(--spacing-2);
          position: relative;
          min-height: 44px;
          min-width: 44px;
          padding-block: var(--spacing-2);
          padding-inline: var(--spacing-3);
          font-size: var(--font-size-sm);
          font-weight: var(--font-weight-medium);
          color: ${args.pressed ? 'var(--color-brand-primary)' : 'inherit'};
          background: transparent;
          border: none;
          border-radius: var(--border-radius-lg);
          cursor: ${args.disabled ? 'not-allowed' : 'pointer'};
          opacity: ${args.disabled ? '0.5' : '1'};
          transition:
            background-color var(--transition-duration-fast) var(--transition-timing-ease-in-out),
            color var(--transition-duration-fast) var(--transition-timing-ease-in-out);
        "
      >
        <!-- Inline book/document SVG icon -->
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
          focusable="false"
          style="flex-shrink:0;"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>

        <!-- Visible label -->
        <span>${args.pressed ? args.labelSerif : args.labelSans}</span>

        <!-- Active indicator underline -->
        ${args.showIndicator ? html`
          <span
            aria-hidden="true"
            style="
              position: absolute;
              inset-inline: 0;
              bottom: calc(-1 * var(--spacing-1));
              height: 2px;
              background-color: var(--color-brand-primary);
              transform: scaleX(${args.pressed ? 1 : 0});
              transform-origin: left center;
              transition: transform var(--transition-duration-slow) var(--transition-timing-ease-in-out);
              border-radius: var(--border-radius-sm);
            "
          ></span>
        ` : ''}
      </button>

      <!-- State info panel for documentation purposes -->
      <p style="
        margin: 0;
        font-size: 0.75rem;
        opacity: 0.6;
        font-family: ui-monospace, monospace;
      ">
        aria-pressed="${args.pressed}" &bull;
        storageKey="fontFamily"
      </p>
    </div>
  `;
};

// ─── Meta ───────────────────────────────────────────────────────────────────
const meta: Meta = {
  title: 'Accessibility/FontFamilyToggle',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Accessible toggle button that switches the page font family between
sans-serif (default) and a serif "reading" font.

**WAI-ARIA contract**
- Native \`<button>\` with \`aria-pressed\` reflecting current state
- State changes announced via an inline polite \`aria-live\` region (auto-clears after 1 s)
- Keyboard: Space / Enter activate the toggle (native \`<button>\` behaviour)
- \`:focus-visible\` ring uses \`--color-border-focus\` token
- Touch target ≥ 44 × 44 px
- \`prefers-reduced-motion\`: transition disabled
- Persists selection to \`localStorage\` (configurable key)

**Usage in Astro**
\`\`\`astro
---
import FontFamilyToggle from '@wendermedia/astro-components/accessibility/FontFamilyToggle';
---
<FontFamilyToggle />
\`\`\`

**Custom labels**
\`\`\`astro
<FontFamilyToggle
  labelSans="Standard font"
  labelSerif="Reading font"
  storageKey="myApp.fontFamily"
/>
\`\`\`

**Relationship to other components**
This is an a11y-first utility (part of the a11y-toolkit unit).  It is
self-contained and does not depend on the separate \`LiveRegion\` component —
it embeds its own hidden live region for announcements.
        `,
      },
    },
  },
  argTypes: {
    labelSans: {
      control: 'text',
      description: 'Label displayed when sans-serif (default) is active',
    },
    labelSerif: {
      control: 'text',
      description: 'Label displayed when serif is active',
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible description on the button (for assistive tech)',
    },
    pressed: {
      control: 'boolean',
      description: 'Current pressed / active state (aria-pressed)',
    },
    showIndicator: {
      control: 'boolean',
      description: 'Show the animated underline indicator when serif is active',
    },
    darkBackground: {
      control: 'boolean',
      description: 'Demo: render on a dark background (as used in dark nav bars)',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state for demo purposes',
    },
  },
};

export default meta;
type Story = StoryObj;

// ─── Stories ────────────────────────────────────────────────────────────────

/** Default state — sans-serif active, German labels, light background. */
export const Default: Story = {
  args: {
    labelSans: 'Standardschrift',
    labelSerif: 'Leseschrift',
    ariaLabel: 'Zwischen Standard- und Leseschrift wechseln',
    pressed: false,
    showIndicator: true,
    darkBackground: false,
    disabled: false,
  },
  render: (args) => renderToggle(args as RenderArgs),
};

/** Serif / reading font active — aria-pressed="true", label + indicator visible. */
export const SerifActive: Story = {
  args: {
    labelSans: 'Standardschrift',
    labelSerif: 'Leseschrift',
    ariaLabel: 'Zwischen Standard- und Leseschrift wechseln',
    pressed: true,
    showIndicator: true,
    darkBackground: false,
    disabled: false,
  },
  render: (args) => renderToggle(args as RenderArgs),
};

/** Dark background variant — typical use inside a dark navigation or toolbar. */
export const OnDarkBackground: Story = {
  args: {
    labelSans: 'Standardschrift',
    labelSerif: 'Leseschrift',
    ariaLabel: 'Zwischen Standard- und Leseschrift wechseln',
    pressed: false,
    showIndicator: true,
    darkBackground: true,
    disabled: false,
  },
  render: (args) => renderToggle(args as RenderArgs),
};

/** Dark background with serif active. */
export const OnDarkBackgroundSerifActive: Story = {
  args: {
    labelSans: 'Standardschrift',
    labelSerif: 'Leseschrift',
    ariaLabel: 'Zwischen Standard- und Leseschrift wechseln',
    pressed: true,
    showIndicator: true,
    darkBackground: true,
    disabled: false,
  },
  render: (args) => renderToggle(args as RenderArgs),
};

/** English labels — for non-German projects. */
export const EnglishLabels: Story = {
  args: {
    labelSans: 'Standard font',
    labelSerif: 'Reading font',
    ariaLabel: 'Switch between standard and reading font',
    pressed: false,
    showIndicator: true,
    darkBackground: false,
    disabled: false,
  },
  render: (args) => renderToggle(args as RenderArgs),
};

/** Without indicator underline — minimal appearance. */
export const NoIndicator: Story = {
  args: {
    labelSans: 'Standardschrift',
    labelSerif: 'Leseschrift',
    ariaLabel: 'Zwischen Standard- und Leseschrift wechseln',
    pressed: false,
    showIndicator: false,
    darkBackground: false,
    disabled: false,
  },
  render: (args) => renderToggle(args as RenderArgs),
};

/** Disabled state — aria-disabled and visual opacity applied. */
export const Disabled: Story = {
  args: {
    labelSans: 'Standardschrift',
    labelSerif: 'Leseschrift',
    ariaLabel: 'Zwischen Standard- und Leseschrift wechseln',
    pressed: false,
    showIndicator: true,
    darkBackground: false,
    disabled: true,
  },
  render: (args) => renderToggle(args as RenderArgs),
};
