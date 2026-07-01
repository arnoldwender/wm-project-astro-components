/**
 * SkipToContent Stories - WenderMedia Astro Components
 *
 * To see the skip link in action: focus the story canvas (click it) then
 * press Tab — the pill appears. Press Enter to jump to the target landmark.
 *
 * @copyright 2007-2026 Arnold Wender · Wender Media. All Rights Reserved. License: LicenseRef-Wender-Media-Source-1.0
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Navigation/SkipToContent',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Accessible skip-navigation link that appears on keyboard focus, allowing
users to bypass repeated navigation and jump to the main content landmark.

**WCAG 2.2 SC 2.4.1 — Bypass Blocks (Level A)** · **BFSG 2025**

**Usage:**
- Place as the very first child of \`<body>\` or the layout wrapper.
- The target element (default \`#main-content\`) must exist on the page.
- Compose multiple instances for multi-landmark skip targets.

**Keyboard interaction:**
1. Focus the page (click the canvas).
2. Press **Tab** — the skip link pill appears in the top-left corner.
3. Press **Enter** to move focus to the target landmark.
4. Press **Tab** again to move past the skip link without activating it.
        `,
      },
    },
  },
  argTypes: {
    targetId: {
      control: 'text',
      description: 'ID of the target landmark element on the page.',
      defaultValue: 'main-content',
    },
    label: {
      control: 'text',
      description: 'Visible label shown when the link receives keyboard focus.',
      defaultValue: 'Zum Hauptinhalt springen',
    },
  },
};

export default meta;
type Story = StoryObj;

/* --------------------------------------------------------------------------
 * Shared page wrapper that provides a realistic skip-link context.
 * The main landmark receives tabIndex="-1" so it can receive programmatic
 * focus from the skip link without being in the natural tab order.
 * -------------------------------------------------------------------------- */
const pageShell = (skipLink: ReturnType<typeof html>, mainLabel = 'Main content') => html`
  <style>
    .story-shell {
      font-family: system-ui, sans-serif;
      min-height: 300px;
    }
    .story-nav {
      background: #1e293b;
      color: #fff;
      padding: 0.75rem 1.5rem;
      display: flex;
      gap: 1.5rem;
      align-items: center;
      font-size: 0.875rem;
    }
    .story-nav a {
      color: #94a3b8;
      text-decoration: none;
    }
    .story-main {
      padding: 2rem 1.5rem;
    }
    .story-main:focus {
      outline: 2px solid #0ea5e9;
      outline-offset: 2px;
    }
    .story-hint {
      font-size: 0.75rem;
      color: #64748b;
      margin-top: 1rem;
      padding: 0.5rem 0.75rem;
      background: #f8fafc;
      border-radius: 0.25rem;
      border-left: 3px solid #0ea5e9;
    }
  </style>

  <div class="story-shell">
    ${skipLink}

    <!-- Simulated repeated header navigation the skip link bypasses -->
    <nav class="story-nav" aria-label="Main navigation">
      <strong style="color:#fff">ACME Corp</strong>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#contact">Contact</a>
    </nav>

    <!-- The target landmark -->
    <main id="main-content" class="story-main" tabindex="-1">
      <h1 style="margin:0 0 0.5rem;font-size:1.5rem;font-weight:700;color:#0f172a">${mainLabel}</h1>
      <p style="color:#475569;margin:0">
        This is the main content area. When the skip link is activated,
        focus moves here, skipping the repeated navigation above.
      </p>
      <p class="story-hint">
        Tip: click the canvas frame, then press <kbd>Tab</kbd> to reveal
        the skip link in the top-left corner.
      </p>
    </main>
  </div>
`;

/* --------------------------------------------------------------------------
 * Stories
 * -------------------------------------------------------------------------- */

/** Default German label targeting \`#main-content\` — the most common usage. */
export const Default: Story = {
  args: {
    targetId: 'main-content',
    label: 'Zum Hauptinhalt springen',
  },
  render: (args) => pageShell(
    html`
      <a
        href=${'#' + (args.targetId ?? 'main-content')}
        style="
          position: absolute;
          top: 0.5rem;
          left: 0.5rem;
          z-index: 800;
          width: 1px;
          height: 1px;
          overflow: hidden;
          clip: rect(0,0,0,0);
          white-space: nowrap;
          font-size: 0.875rem;
          font-weight: 500;
          font-family: system-ui, sans-serif;
          color: #fff;
          background: #0f172a;
          border-radius: 0.375rem;
          padding: 0.5rem 1rem;
          min-height: 44px;
          display: inline-flex;
          align-items: center;
          text-decoration: none;
        "
        onFocus="this.style.width='auto';this.style.height='auto';this.style.overflow='visible';this.style.clip='auto';this.style.whiteSpace='normal';this.style.outline='2px solid #0ea5e9';this.style.outlineOffset='4px';"
        onBlur="this.style.width='1px';this.style.height='1px';this.style.overflow='hidden';this.style.clip='rect(0,0,0,0)';this.style.whiteSpace='nowrap';this.style.outline='none';this.style.outlineOffset='0';"
      >
        ${args.label ?? 'Zum Hauptinhalt springen'}
      </a>
    `,
    'Hauptinhalt',
  ),
};

/** English label — for EN-locale pages or international projects. */
export const EnglishLabel: Story = {
  args: {
    targetId: 'main-content',
    label: 'Skip to main content',
  },
  render: (args) => pageShell(
    html`
      <a
        href=${'#' + (args.targetId ?? 'main-content')}
        style="
          position: absolute;
          top: 0.5rem;
          left: 0.5rem;
          z-index: 800;
          width: 1px;
          height: 1px;
          overflow: hidden;
          clip: rect(0,0,0,0);
          white-space: nowrap;
          font-size: 0.875rem;
          font-weight: 500;
          font-family: system-ui, sans-serif;
          color: #fff;
          background: #0f172a;
          border-radius: 0.375rem;
          padding: 0.5rem 1rem;
          min-height: 44px;
          display: inline-flex;
          align-items: center;
          text-decoration: none;
        "
        onFocus="this.style.width='auto';this.style.height='auto';this.style.overflow='visible';this.style.clip='auto';this.style.whiteSpace='normal';this.style.outline='2px solid #0ea5e9';this.style.outlineOffset='4px';"
        onBlur="this.style.width='1px';this.style.height='1px';this.style.overflow='hidden';this.style.clip='rect(0,0,0,0)';this.style.whiteSpace='nowrap';this.style.outline='none';this.style.outlineOffset='0';"
      >
        ${args.label ?? 'Skip to main content'}
      </a>
    `,
    'Main Content',
  ),
};

/** Spanish label — for ES-locale pages. */
export const SpanishLabel: Story = {
  args: {
    targetId: 'main-content',
    label: 'Ir al contenido principal',
  },
  render: (args) => pageShell(
    html`
      <a
        href=${'#' + (args.targetId ?? 'main-content')}
        style="
          position: absolute;
          top: 0.5rem;
          left: 0.5rem;
          z-index: 800;
          width: 1px;
          height: 1px;
          overflow: hidden;
          clip: rect(0,0,0,0);
          white-space: nowrap;
          font-size: 0.875rem;
          font-weight: 500;
          font-family: system-ui, sans-serif;
          color: #fff;
          background: #0f172a;
          border-radius: 0.375rem;
          padding: 0.5rem 1rem;
          min-height: 44px;
          display: inline-flex;
          align-items: center;
          text-decoration: none;
        "
        onFocus="this.style.width='auto';this.style.height='auto';this.style.overflow='visible';this.style.clip='auto';this.style.whiteSpace='normal';this.style.outline='2px solid #0ea5e9';this.style.outlineOffset='4px';"
        onBlur="this.style.width='1px';this.style.height='1px';this.style.overflow='hidden';this.style.clip='rect(0,0,0,0)';this.style.whiteSpace='nowrap';this.style.outline='none';this.style.outlineOffset='0';"
      >
        ${args.label ?? 'Ir al contenido principal'}
      </a>
    `,
    'Contenido principal',
  ),
};

/** Custom target — skip to a search results landmark instead of main. */
export const CustomTarget: Story = {
  args: {
    targetId: 'search-results',
    label: 'Zu den Suchergebnissen springen',
  },
  render: (args) => html`
    <style>
      .story-shell-custom {
        font-family: system-ui, sans-serif;
        min-height: 300px;
        position: relative;
      }
      .story-nav-custom {
        background: #1e293b;
        color: #fff;
        padding: 0.75rem 1.5rem;
        display: flex;
        gap: 1.5rem;
        align-items: center;
        font-size: 0.875rem;
      }
      .story-search-hint {
        font-size: 0.75rem;
        color: #64748b;
        margin-top: 1rem;
        padding: 0.5rem 0.75rem;
        background: #f0f9ff;
        border-radius: 0.25rem;
        border-left: 3px solid #0ea5e9;
      }
    </style>

    <div class="story-shell-custom">
      <!-- Skip link to custom landmark -->
      <a
        href=${'#' + (args.targetId ?? 'search-results')}
        style="
          position: absolute;
          top: 0.5rem;
          left: 0.5rem;
          z-index: 800;
          width: 1px;
          height: 1px;
          overflow: hidden;
          clip: rect(0,0,0,0);
          white-space: nowrap;
          font-size: 0.875rem;
          font-weight: 500;
          font-family: system-ui, sans-serif;
          color: #fff;
          background: #0f172a;
          border-radius: 0.375rem;
          padding: 0.5rem 1rem;
          min-height: 44px;
          display: inline-flex;
          align-items: center;
          text-decoration: none;
        "
        onFocus="this.style.width='auto';this.style.height='auto';this.style.overflow='visible';this.style.clip='auto';this.style.whiteSpace='normal';this.style.outline='2px solid #0ea5e9';this.style.outlineOffset='4px';"
        onBlur="this.style.width='1px';this.style.height='1px';this.style.overflow='hidden';this.style.clip='rect(0,0,0,0)';this.style.whiteSpace='nowrap';this.style.outline='none';this.style.outlineOffset='0';"
      >
        ${args.label ?? 'Zu den Suchergebnissen springen'}
      </a>

      <nav class="story-nav-custom" aria-label="Main navigation">
        <strong style="color:#fff">ACME Corp</strong>
        <input type="search" placeholder="Suchen…" style="padding:0.375rem 0.75rem;border-radius:0.25rem;border:none;font-size:0.875rem;" aria-label="Suchfeld" />
      </nav>

      <main style="padding:2rem 1.5rem;">
        <section id="search-results" tabindex="-1" aria-label="Suchergebnisse" style="padding:1rem;background:#f8fafc;border-radius:0.375rem;">
          <h2 style="margin:0 0 0.5rem;font-size:1.25rem;font-weight:600;color:#0f172a">Suchergebnisse</h2>
          <p style="color:#475569;margin:0;font-size:0.875rem">
            Dieser Bereich ist das Ziel des Skip-Links \`#search-results\`.
          </p>
          <p class="story-search-hint">
            Landmark \`id="search-results"\` — wird per Skip-Link direkt angesprungen.
          </p>
        </section>
      </main>
    </div>
  `,
};
