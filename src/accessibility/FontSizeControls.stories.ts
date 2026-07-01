/**
 * FontSizeControls Stories - WenderMedia Astro Components
 *
 * Storybook stories for the FontSizeControls a11y toolbar component.
 * Rendered in lit-html (does NOT import the .astro file).
 *
 * @copyright 2007-2026 Arnold Wender · Wender Media. All Rights Reserved. License: LicenseRef-Wender-Media-Source-1.0
 * @see https://github.com/arnoldwender/wm-project-astro-components
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

// ── Token references (matching tokens/dist/tokens.css) ──────────────────────
const TOKENS = `
  --color-background-surface: #ffffff;
  --color-border-default: #e2e8f0;
  --color-border-focus: #0ea5e9;
  --color-text-primary: #1e293b;
  --color-text-secondary: #475569;
  --color-background-subtle: #f1f5f9;
  --border-radius-lg: 0.5rem;
  --border-radius-md: 0.375rem;
  --spacing-1: 0.25rem;
  --spacing-2: 0.5rem;
  --shadow-xs: 0 1px 2px 0 rgba(0,0,0,0.05);
  --opacity-40: 0.4;
  --font-size-sm: 0.875rem;
  --font-size-xs: 0.75rem;
  --font-size-base: 1rem;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-line-height-none: 1;
  --font-family-sans: system-ui, -apple-system, sans-serif;
  --transition-duration-fast: 150ms;
  --transition-timing-ease: ease;
`;

// ── Inline CSS for the story render (mirrors the component's <style> block) ──
const componentCss = `
  .font-size-controls {
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-1);
    background-color: var(--color-background-surface);
    border: 1px solid var(--color-border-default);
    border-radius: var(--border-radius-lg);
    padding: var(--spacing-1) var(--spacing-2);
    box-shadow: var(--shadow-xs);
    font-family: var(--font-family-sans);
  }
  .fsc-label {
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-medium);
    color: var(--color-text-secondary);
    white-space: nowrap;
    margin-inline-end: var(--spacing-1);
  }
  .fsc-btn {
    min-width: 44px;
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--spacing-1);
    background: none;
    border: none;
    border-radius: var(--border-radius-md);
    color: var(--color-text-secondary);
    cursor: pointer;
    transition:
      color var(--transition-duration-fast) var(--transition-timing-ease),
      background-color var(--transition-duration-fast) var(--transition-timing-ease);
  }
  .fsc-btn:hover:not(:disabled) {
    color: var(--color-text-primary);
    background-color: var(--color-background-subtle);
  }
  .fsc-btn:focus-visible {
    outline: 2px solid var(--color-border-focus);
    outline-offset: 2px;
  }
  .fsc-btn:disabled {
    opacity: var(--opacity-40);
    cursor: not-allowed;
  }
  .fsc-glyph {
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-semibold);
    line-height: var(--font-line-height-none);
    font-family: var(--font-family-sans);
  }
  .fsc-glyph sup {
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-bold);
    vertical-align: super;
  }
  .fsc-display {
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-medium);
    color: var(--color-text-primary);
    min-width: 3.5ch;
    text-align: center;
  }
  .fsc-icon {
    width: 1rem;
    height: 1rem;
  }
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;

// ── Reusable reset SVG ────────────────────────────────────────────────────────
const resetSvg = html`
  <svg class="fsc-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" focusable="false">
    <path fill-rule="evenodd"
      d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
      clip-rule="evenodd" />
  </svg>
`;

// ── Story render helper ────────────────────────────────────────────────────────
interface FontSizeControlsArgs {
  label?: string;
  decreaseLabel?: string;
  increaseLabel?: string;
  resetLabel?: string;
  showReset?: boolean;
  currentSize?: number;
  atMin?: boolean;
  atMax?: boolean;
}

function renderFontSizeControls(args: FontSizeControlsArgs) {
  const {
    label = 'Schriftgröße',
    decreaseLabel = 'Schriftgröße verkleinern',
    increaseLabel = 'Schriftgröße vergrößern',
    resetLabel = 'Schriftgröße zurücksetzen',
    showReset = true,
    currentSize = 16,
    atMin = false,
    atMax = false,
  } = args;

  return html`
    <style>
      :host, :root { ${TOKENS} }
      ${componentCss}
    </style>

    <div style="padding: 2rem; font-family: system-ui, sans-serif; background: #f8fafc;">
      <p style="margin-bottom: 1.5rem; color: #64748b; font-size: 0.875rem;">
        Static story — buttons are visual only (no JS runtime in Storybook canvas).
        The component ships full keyboard + localStorage behaviour in Astro.
      </p>

      <div
        class="font-size-controls"
        role="group"
        aria-label="${label}"
      >
        <span class="fsc-label">${label}</span>

        <button
          type="button"
          class="fsc-btn fsc-btn--decrease"
          aria-label="${decreaseLabel}"
          aria-pressed="${atMin ? 'true' : 'false'}"
          ?disabled="${atMin}"
        >
          <span aria-hidden="true" class="fsc-glyph">A<sup>−</sup></span>
        </button>

        <span
          class="fsc-display"
          aria-live="polite"
          aria-atomic="true"
          aria-label="${label}: ${currentSize}px"
        >${currentSize}px</span>

        <button
          type="button"
          class="fsc-btn fsc-btn--increase"
          aria-label="${increaseLabel}"
          aria-pressed="${atMax ? 'true' : 'false'}"
          ?disabled="${atMax}"
        >
          <span aria-hidden="true" class="fsc-glyph">A<sup>+</sup></span>
        </button>

        ${showReset ? html`
          <button
            type="button"
            class="fsc-btn fsc-btn--reset"
            aria-label="${resetLabel}"
          >
            ${resetSvg}
            <span class="sr-only">${resetLabel}</span>
          </button>
        ` : ''}

        <span
          role="status"
          aria-live="polite"
          aria-atomic="true"
          class="sr-only"
        ></span>
      </div>
    </div>
  `;
}

// ── Meta ──────────────────────────────────────────────────────────────────────
const meta: Meta = {
  title: 'Accessibility/FontSizeControls',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**FontSizeControls** is the compact \`A− / size / A+\` toolbar bar ported from
\`wm-source-site\` and \`wm-source-site\`, elevated to full
WCAG 2.2 AA / BFSG 2025 compliance.

**Relationship to \`FontResizer\`:**
Both components share the \`localStorage\` key \`"fontSize"\` so they stay in sync
when placed on the same page. \`FontResizer\` is the standalone percentage-based
widget; \`FontSizeControls\` is the lightweight inline bar intended for nav toolbars
and footers.

**ARIA contract:**
- Root: \`role="group"\` + \`aria-labelledby\` → visible label span
- Decrease / increase buttons: \`aria-label\` + \`aria-pressed="true"\` at min/max limits
- Display span: \`aria-live="polite"\` + \`aria-atomic\` + \`aria-label\` with current value
- Inline \`role="status"\` live region announces changes to screen readers
- Buttons \`disabled\` at limits (prevents impossible actions)

**Keyboard:**
- \`Tab\` / \`Shift+Tab\` between buttons
- \`Enter\` / \`Space\` activate buttons (native \`<button>\` contract)
- Optional global \`Ctrl/Meta + +/-/0\` shortcuts (opt-in via \`enableKeyboardShortcuts\`)

**Touch targets:** all buttons enforce \`min-width: 44px; min-height: 44px\`.

**Tokens used:** only \`var(--*)\` from \`tokens/dist/tokens.css\` — no hardcoded values.
        `,
      },
    },
  },
  argTypes: {
    label:         { control: 'text',    description: 'Visible group label text' },
    decreaseLabel: { control: 'text',    description: 'aria-label for decrease button' },
    increaseLabel: { control: 'text',    description: 'aria-label for increase button' },
    resetLabel:    { control: 'text',    description: 'aria-label for reset button' },
    showReset:     { control: 'boolean', description: 'Show the reset button' },
    currentSize:   { control: 'number', description: 'Current font size (px) — visual demo only' },
    atMin:         { control: 'boolean', description: 'Demo: buttons at minimum limit' },
    atMax:         { control: 'boolean', description: 'Demo: buttons at maximum limit' },
  },
};

export default meta;
type Story = StoryObj;

// ── Stories ───────────────────────────────────────────────────────────────────

/** Default — German labels (matches wm-source-site / wm-source-site usage) */
export const Default: Story = {
  args: {
    label: 'Schriftgröße',
    decreaseLabel: 'Schriftgröße verkleinern',
    increaseLabel: 'Schriftgröße vergrößern',
    resetLabel: 'Schriftgröße zurücksetzen',
    showReset: true,
    currentSize: 16,
    atMin: false,
    atMax: false,
  },
  render: (args) => renderFontSizeControls(args as FontSizeControlsArgs),
};

/** English labels — for internationalized toolbars */
export const EnglishLabels: Story = {
  args: {
    label: 'Font size',
    decreaseLabel: 'Decrease font size',
    increaseLabel: 'Increase font size',
    resetLabel: 'Reset font size',
    showReset: true,
    currentSize: 16,
    atMin: false,
    atMax: false,
  },
  render: (args) => renderFontSizeControls(args as FontSizeControlsArgs),
};

/** Without reset button — minimal variant for tight toolbars */
export const NoResetButton: Story = {
  args: {
    label: 'Schriftgröße',
    decreaseLabel: 'Schriftgröße verkleinern',
    increaseLabel: 'Schriftgröße vergrößern',
    showReset: false,
    currentSize: 16,
  },
  render: (args) => renderFontSizeControls(args as FontSizeControlsArgs),
};

/** At minimum limit — decrease button disabled + aria-pressed="true" */
export const AtMinimum: Story = {
  name: 'At Minimum (14px)',
  args: {
    label: 'Schriftgröße',
    decreaseLabel: 'Schriftgröße verkleinern',
    increaseLabel: 'Schriftgröße vergrößern',
    resetLabel: 'Schriftgröße zurücksetzen',
    showReset: true,
    currentSize: 14,
    atMin: true,
    atMax: false,
  },
  render: (args) => renderFontSizeControls(args as FontSizeControlsArgs),
};

/** At maximum limit — increase button disabled + aria-pressed="true" */
export const AtMaximum: Story = {
  name: 'At Maximum (20px)',
  args: {
    label: 'Schriftgröße',
    decreaseLabel: 'Schriftgröße verkleinern',
    increaseLabel: 'Schriftgröße vergrößern',
    resetLabel: 'Schriftgröße zurücksetzen',
    showReset: true,
    currentSize: 20,
    atMin: false,
    atMax: true,
  },
  render: (args) => renderFontSizeControls(args as FontSizeControlsArgs),
};

/** Dark background — validates contrast of tokens on dark surfaces */
export const DarkBackground: Story = {
  render: () => html`
    <style>
      :root {
        ${TOKENS}
        --color-background-surface: #1e293b;
        --color-border-default: #334155;
        --color-text-primary: #f8fafc;
        --color-text-secondary: #cbd5e1;
        --color-background-subtle: #334155;
      }
      ${componentCss}
    </style>
    <div style="padding: 2rem; background: #0f172a;">
      ${renderFontSizeControls({
        label: 'Schriftgröße',
        decreaseLabel: 'Schriftgröße verkleinern',
        increaseLabel: 'Schriftgröße vergrößern',
        resetLabel: 'Schriftgröße zurücksetzen',
        showReset: true,
        currentSize: 18,
      })}
    </div>
  `,
};

/** Inside a nav bar — typical toolbar placement */
export const InsideToolbar: Story = {
  render: () => html`
    <style>
      :root { ${TOKENS} }
      ${componentCss}
      .demo-toolbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.5rem 1.5rem;
        background: var(--color-background-surface);
        border-bottom: 1px solid var(--color-border-default);
        font-family: var(--font-family-sans);
        box-shadow: var(--shadow-xs);
      }
      .demo-toolbar-brand {
        font-size: var(--font-size-base);
        font-weight: var(--font-weight-semibold);
        color: var(--color-text-primary);
      }
      .demo-toolbar-tools {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
    </style>
    <nav class="demo-toolbar" aria-label="Accessibility toolbar demo">
      <span class="demo-toolbar-brand">Wender Media</span>
      <div class="demo-toolbar-tools">
        <div
          class="font-size-controls"
          role="group"
          aria-label="Schriftgröße"
        >
          <span class="fsc-label">Schriftgröße</span>
          <button type="button" class="fsc-btn" aria-label="Schriftgröße verkleinern" aria-pressed="false">
            <span aria-hidden="true" class="fsc-glyph">A<sup>−</sup></span>
          </button>
          <span class="fsc-display" aria-live="polite" aria-atomic="true">16px</span>
          <button type="button" class="fsc-btn" aria-label="Schriftgröße vergrößern" aria-pressed="false">
            <span aria-hidden="true" class="fsc-glyph">A<sup>+</sup></span>
          </button>
          <button type="button" class="fsc-btn" aria-label="Schriftgröße zurücksetzen">
            <svg class="fsc-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" focusable="false">
              <path fill-rule="evenodd"
                d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                clip-rule="evenodd" />
            </svg>
            <span class="sr-only">Schriftgröße zurücksetzen</span>
          </button>
        </div>
      </div>
    </nav>
  `,
};
