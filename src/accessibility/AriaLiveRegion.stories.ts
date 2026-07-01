/**
 * AriaLiveRegion Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Accessibility/AriaLiveRegion',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Global dual-region ARIA live announcer. Mount once in your root layout; drive
announcements imperatively via \`window.announce()\` from anywhere in client JS.

**Relationship to \`LiveRegion\`:**
Use **\`LiveRegion\`** when you need a named, embedded region tied to a specific
DOM location (e.g. a form field error container).
Use **\`AriaLiveRegion\`** once, globally, when you want to drive announcements
imperatively — e.g. from toast notifications, route changes, or cart updates.

**Global API (available after mount):**
\`\`\`ts
// Polite (default) — waits for current speech to finish
window.announce('3 items added to your cart');

// Assertive — interrupts current speech (use sparingly)
window.announce('Session expired — please log in again.', 'assertive');

// Clear manually
window.clearAnnouncement('polite');   // clear polite region
window.clearAnnouncement('assertive'); // clear assertive region
window.clearAnnouncement('all');       // clear both (default)
\`\`\`

**WAI-ARIA contract:**
- Polite region: \`role="status"\` + \`aria-live="polite"\` + \`aria-atomic="true"\`
- Assertive region: \`role="alert"\` + \`aria-live="assertive"\` + \`aria-atomic="true"\`
- Both regions are visually hidden (\`sr-only\`) at all times
- Text is cleared after \`clearDelay\` ms to prevent re-announcement on focus changes
- Re-announcement of identical text: clear → rAF → inject (NVDA/JAWS compatible)
        `,
      },
    },
  },
  argTypes: {
    clearDelay: {
      control: { type: 'number', min: 0, max: 5000, step: 100 },
      description: 'Milliseconds before the announced text is auto-cleared (0 = no auto-clear)',
    },
    message: {
      control: 'text',
      description: 'Message text to inject into the live region (story-only prop)',
    },
    politeness: {
      control: 'select',
      options: ['polite', 'assertive'],
      description: 'Politeness level used when the Announce button is clicked (story-only prop)',
    },
  },
};

export default meta;
type Story = StoryObj;

/* ─── Shared styles ──────────────────────────────────────────── */
const containerStyle = `
  padding: 2rem;
  font-family: var(--font-family-sans, system-ui, sans-serif);
  max-width: 36rem;
`;

const cardStyle = `
  background: var(--color-background-muted, #f8fafc);
  border: 1px solid var(--color-border-default, #e2e8f0);
  border-radius: var(--border-radius-lg, 0.5rem);
  padding: 1.5rem;
`;

const headingStyle = `
  font-size: var(--text-heading-6-font-size, 1rem);
  font-weight: var(--font-weight-semibold, 600);
  color: var(--color-text-primary, #1e293b);
  margin: 0 0 0.75rem;
`;

const descStyle = `
  font-size: var(--font-size-sm, 0.875rem);
  color: var(--color-text-secondary, #475569);
  margin: 0 0 1.25rem;
  line-height: var(--font-line-height-normal, 1.5);
`;

const btnBase = `
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: var(--border-radius-md, 0.375rem);
  font-size: var(--font-size-sm, 0.875rem);
  font-weight: var(--font-weight-medium, 500);
  cursor: pointer;
  min-height: 2.75rem;
  min-width: 2.75rem;
  transition: background var(--transition-duration-fast, 150ms) var(--transition-timing-ease, ease);
`;

const politeBtn = `${btnBase}
  background: var(--color-brand-primary, #0ea5e9);
  color: var(--color-base-white, #ffffff);
  margin-right: 0.75rem;
`;

const assertiveBtn = `${btnBase}
  background: var(--color-semantic-error, #ef4444);
  color: var(--color-base-white, #ffffff);
  margin-right: 0.75rem;
`;

const clearBtn = `${btnBase}
  background: var(--color-background-subtle, #f1f5f9);
  color: var(--color-text-secondary, #475569);
  border: 1px solid var(--color-border-default, #e2e8f0);
`;

const logStyle = `
  margin-top: 1.25rem;
  padding: 0.75rem 1rem;
  background: var(--color-background-inverse, #0f172a);
  border-radius: var(--border-radius-md, 0.375rem);
  font-family: var(--font-family-mono, monospace);
  font-size: var(--font-size-xs, 0.75rem);
  color: var(--color-green-400, #4ade80);
  min-height: 3.5rem;
`;

const regionBadge = (live: string, role: string, color: string) => `
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.25rem 0.625rem;
  background: ${color};
  border-radius: var(--border-radius-full, 9999px);
  font-size: var(--font-size-xs, 0.75rem);
  font-weight: var(--font-weight-medium, 500);
  margin-right: 0.5rem;
  margin-bottom: 0.75rem;
`;

/* ─── Helper to wire up the demo announce button ─────────────── */
const wireButtons = () => {
  // Demo-only: simulate the window.announce API inline for Storybook
  // (the real .astro component is not mounted in lit-html stories)
  document.querySelectorAll('[data-story-announce]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const el = btn as HTMLElement;
      const message = el.dataset.storyMessage ?? 'Test announcement';
      const politeness = (el.dataset.storyPoliteness ?? 'polite') as 'polite' | 'assertive';
      const log = document.getElementById(el.dataset.storyLog ?? '');

      const regionId = politeness === 'assertive'
        ? 'demo-live-assertive'
        : 'demo-live-polite';
      const region = document.getElementById(regionId);

      if (region) {
        region.textContent = '';
        requestAnimationFrame(() => {
          region.textContent = message;
        });
      }

      if (log) {
        log.textContent = `[${new Date().toLocaleTimeString()}] announce("${message}", "${politeness}")`;
      }
    });
  });

  document.querySelectorAll('[data-story-clear]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const el = btn as HTMLElement;
      const log = document.getElementById(el.dataset.storyLog ?? '');
      ['demo-live-polite', 'demo-live-assertive'].forEach((id) => {
        const r = document.getElementById(id);
        if (r) r.textContent = '';
      });
      if (log) {
        log.textContent = `[${new Date().toLocaleTimeString()}] clearAnnouncement("all")`;
      }
    });
  });
};

/* ─── Default story ─────────────────────────────────────────── */
export const Default: Story = {
  args: {
    clearDelay: 1000,
    message: '3 items added to your cart',
    politeness: 'polite',
  },
  render: (args) => {
    const id = 'demo-log-default';
    setTimeout(wireButtons, 0);
    return html`
      <div style="${containerStyle}">
        <div style="${cardStyle}">
          <h3 style="${headingStyle}">AriaLiveRegion — Global Dual-Region Announcer</h3>
          <p style="${descStyle}">
            Click the buttons to trigger screen reader announcements.
            The live regions are visually hidden (sr-only) — open a screen reader
            to hear them, or inspect the DOM to see the text being injected.
          </p>

          <!-- Region indicators (visual only — mimic the hidden regions) -->
          <div>
            <span style="${regionBadge('polite', 'status', 'var(--color-semantic-info-light, #f0f9ff)')}">
              <span style="color: var(--color-semantic-info, #0ea5e9);">●</span>
              role="status" aria-live="polite"
            </span>
            <span style="${regionBadge('assertive', 'alert', 'var(--color-semantic-error-light, #fef2f2)')}">
              <span style="color: var(--color-semantic-error, #ef4444);">●</span>
              role="alert" aria-live="assertive"
            </span>
          </div>

          <!-- Hidden demo regions (simulate AriaLiveRegion output) -->
          <div id="demo-live-polite" role="status" aria-live="polite" aria-atomic="true"
               style="position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;"></div>
          <div id="demo-live-assertive" role="alert" aria-live="assertive" aria-atomic="true"
               style="position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;"></div>

          <div style="display:flex;flex-wrap:wrap;gap:0.5rem;align-items:center;">
            <button
              style="${politeBtn}"
              data-story-announce
              data-story-message="${args.message}"
              data-story-politeness="polite"
              data-story-log="${id}"
            >
              Announce (polite)
            </button>
            <button
              style="${assertiveBtn}"
              data-story-announce
              data-story-message="Error: session expired — please log in again."
              data-story-politeness="assertive"
              data-story-log="${id}"
            >
              Announce (assertive)
            </button>
            <button
              style="${clearBtn}"
              data-story-clear
              data-story-log="${id}"
            >
              Clear all
            </button>
          </div>

          <div id="${id}" style="${logStyle}" aria-hidden="true">
            // API log will appear here after clicking
          </div>
        </div>
      </div>
    `;
  },
};

/* ─── Polite status story ───────────────────────────────────── */
export const PoliteStatus: Story = {
  args: {
    clearDelay: 1000,
    message: 'Search returned 12 results',
    politeness: 'polite',
  },
  parameters: {
    docs: {
      description: {
        story: `
Polite announcements (\`aria-live="polite"\`, \`role="status"\`) wait for the
current speech to finish. Use for non-urgent updates: cart changes,
search results count, loading completion, form auto-save.
        `,
      },
    },
  },
  render: (args) => {
    const id = 'demo-log-polite';
    setTimeout(wireButtons, 0);
    return html`
      <div style="${containerStyle}">
        <div style="${cardStyle}">
          <h3 style="${headingStyle}">Polite — role="status"</h3>
          <p style="${descStyle}">
            Use for non-urgent updates. The AT will finish the current utterance
            before announcing this message.
          </p>
          <div id="demo-live-polite" role="status" aria-live="polite" aria-atomic="true"
               style="position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;"></div>
          <button
            style="${politeBtn}"
            data-story-announce
            data-story-message="${args.message}"
            data-story-politeness="polite"
            data-story-log="${id}"
          >
            Announce (polite)
          </button>
          <div id="${id}" style="${logStyle}" aria-hidden="true">// log</div>
        </div>
      </div>
    `;
  },
};

/* ─── Assertive alert story ─────────────────────────────────── */
export const AssertiveAlert: Story = {
  args: {
    clearDelay: 3000,
    message: 'Error: network request failed. Please try again.',
    politeness: 'assertive',
  },
  parameters: {
    docs: {
      description: {
        story: `
Assertive announcements (\`aria-live="assertive"\`, \`role="alert"\`) interrupt
current speech. Reserve for critical, time-sensitive information: authentication
errors, session expiry, validation failures that block form submission.

A longer \`clearDelay\` (e.g. 3000 ms) is recommended so the user has time to
process the full error message before the region is cleared.
        `,
      },
    },
  },
  render: (args) => {
    const id = 'demo-log-assertive';
    setTimeout(wireButtons, 0);
    return html`
      <div style="${containerStyle}">
        <div style="${cardStyle}">
          <h3 style="${headingStyle}">Assertive — role="alert"</h3>
          <p style="${descStyle}">
            Interrupts current AT speech. Use sparingly — overuse causes
            announcement fatigue and degrades screen reader UX.
          </p>
          <div id="demo-live-assertive" role="alert" aria-live="assertive" aria-atomic="true"
               style="position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;"></div>
          <button
            style="${assertiveBtn}"
            data-story-announce
            data-story-message="${args.message}"
            data-story-politeness="assertive"
            data-story-log="${id}"
          >
            Trigger error alert
          </button>
          <div id="${id}" style="${logStyle}" aria-hidden="true">// log</div>
        </div>
      </div>
    `;
  },
};

/* ─── Repeated message story ────────────────────────────────── */
export const RepeatedMessage: Story = {
  args: {
    clearDelay: 800,
    message: 'Item added to cart',
    politeness: 'polite',
  },
  parameters: {
    docs: {
      description: {
        story: `
The clear → rAF → inject pattern ensures that announcing the **same string
twice** in succession still fires a DOM mutation that AT can detect.
Click the button rapidly to verify repeated announcements work correctly.
        `,
      },
    },
  },
  render: (args) => {
    const id = 'demo-log-repeat';
    let count = 0;
    setTimeout(() => {
      document.querySelectorAll('[data-story-announce]').forEach((btn) => {
        btn.addEventListener('click', () => {
          count++;
          const el = btn as HTMLElement;
          const log = document.getElementById(el.dataset.storyLog ?? '');
          const region = document.getElementById('demo-live-polite-repeat');
          const msg = `${args.message} (×${count})`;
          if (region) {
            region.textContent = '';
            requestAnimationFrame(() => { region.textContent = msg; });
          }
          if (log) {
            log.textContent = `[${new Date().toLocaleTimeString()}] announce("${msg}", "polite") — call #${count}`;
          }
        });
      });
    }, 0);
    return html`
      <div style="${containerStyle}">
        <div style="${cardStyle}">
          <h3 style="${headingStyle}">Repeated Announcements</h3>
          <p style="${descStyle}">
            Click rapidly — the counter increments so each call injects a new
            string. Without the clear → rAF technique identical strings would be
            swallowed by some AT.
          </p>
          <div id="demo-live-polite-repeat" role="status" aria-live="polite" aria-atomic="true"
               style="position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;"></div>
          <button
            style="${politeBtn}"
            data-story-announce
            data-story-message="${args.message}"
            data-story-politeness="polite"
            data-story-log="${id}"
          >
            Add item to cart
          </button>
          <div id="${id}" style="${logStyle}" aria-hidden="true">// log</div>
        </div>
      </div>
    `;
  },
};

/* ─── No auto-clear story ───────────────────────────────────── */
export const NoAutoClear: Story = {
  args: {
    clearDelay: 0,
    message: 'Form saved successfully',
    politeness: 'polite',
  },
  parameters: {
    docs: {
      description: {
        story: `
When \`clearDelay\` is set to \`0\`, the announced text is **not** cleared
automatically. The message stays in the DOM until the next call to
\`window.announce()\` or \`window.clearAnnouncement()\`.

Use this for persistent status indicators that should remain readable by
AT users navigating the page after the initial announcement.
        `,
      },
    },
  },
  render: (args) => {
    const id = 'demo-log-noclear';
    setTimeout(wireButtons, 0);
    return html`
      <div style="${containerStyle}">
        <div style="${cardStyle}">
          <h3 style="${headingStyle}">No Auto-Clear (clearDelay=0)</h3>
          <p style="${descStyle}">
            Text remains in the live region until manually cleared or
            overwritten by the next announcement.
          </p>
          <div id="demo-live-polite" role="status" aria-live="polite" aria-atomic="true"
               style="position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;"></div>
          <div style="display:flex;flex-wrap:wrap;gap:0.5rem;">
            <button
              style="${politeBtn}"
              data-story-announce
              data-story-message="${args.message}"
              data-story-politeness="polite"
              data-story-log="${id}"
            >
              Announce
            </button>
            <button
              style="${clearBtn}"
              data-story-clear
              data-story-log="${id}"
            >
              Clear manually
            </button>
          </div>
          <div id="${id}" style="${logStyle}" aria-hidden="true">// log</div>
        </div>
      </div>
    `;
  },
};
