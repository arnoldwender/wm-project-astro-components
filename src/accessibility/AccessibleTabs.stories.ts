/**
 * AccessibleTabs Stories - WenderMedia Astro Components
 *
 * Storybook stories using lit-html (@storybook/web-components).
 * The .astro component is NOT imported here — visuals are re-implemented
 * in lit-html with the same semantic HTML and ARIA attributes the component
 * renders server-side.
 *
 * WAI-ARIA APG Tabs pattern demo:
 * - role="tablist" / role="tab" / role="tabpanel"
 * - aria-selected, aria-controls, aria-labelledby
 * - Roving tabindex (keyboard: ArrowRight/Left/Home/End)
 *
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

/* ------------------------------------------------------------------ */
/* Shared CSS injected into each story's shadow-root host via a <style> */
/* tag inside the lit-html template so Storybook renders correctly.    */
/* We re-use the same token names the .astro component uses.           */
/* ------------------------------------------------------------------ */

const tabsStyles = `
  <style>
    /*
     * Minimal token definitions so the stories are self-contained
     * (Storybook does not load tokens/dist/tokens.css automatically).
     */
    .accessible-tabs-story {
      --color-border-default: #e2e8f0;
      --color-border-focus: #0ea5e9;
      --color-brand-primary: #0ea5e9;
      --color-text-primary: #1e293b;
      --color-text-secondary: #475569;
      --color-background-subtle: #f1f5f9;
      --spacing-1: 0.25rem;
      --spacing-2: 0.5rem;
      --spacing-4: 1rem;
      --spacing-px: 1px;
      --font-size-sm: 0.875rem;
      --font-size-base: 1rem;
      --font-weight-medium: 500;
      --font-weight-normal: 400;
      --font-line-height-normal: 1.5;
      --font-family-sans: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      --border-radius-md: 0.375rem;
      --transition-duration-base: 200ms;
      --transition-timing-ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);

      font-family: var(--font-family-sans);
      max-width: 640px;
    }

    .accessible-tabs {
      width: 100%;
    }

    .accessible-tabs__list {
      display: flex;
      flex-wrap: wrap;
      gap: var(--spacing-2);
      border-bottom: var(--spacing-px) solid var(--color-border-default);
    }

    .accessible-tabs__tab {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 44px;
      min-width: 44px;
      padding: var(--spacing-2) var(--spacing-4);
      font-size: var(--font-size-sm);
      font-weight: var(--font-weight-medium);
      line-height: var(--font-line-height-normal);
      font-family: var(--font-family-sans);
      background: transparent;
      color: var(--color-text-secondary);
      border: none;
      border-bottom: 2px solid transparent;
      border-radius: var(--border-radius-md) var(--border-radius-md) 0 0;
      cursor: pointer;
      transition:
        color var(--transition-duration-base) var(--transition-timing-ease-in-out),
        border-color var(--transition-duration-base) var(--transition-timing-ease-in-out),
        background var(--transition-duration-base) var(--transition-timing-ease-in-out);
    }

    .accessible-tabs__tab:hover {
      color: var(--color-text-primary);
      background: var(--color-background-subtle);
    }

    .accessible-tabs__tab--active {
      color: var(--color-brand-primary);
      border-bottom-color: var(--color-brand-primary);
    }

    .accessible-tabs__tab:focus-visible {
      outline: 2px solid var(--color-border-focus);
      outline-offset: var(--spacing-1);
      border-radius: var(--border-radius-md);
    }

    .accessible-tabs__panels {
      margin-top: var(--spacing-4);
    }

    .accessible-tabs__panel {
      color: var(--color-text-primary);
      font-size: var(--font-size-base);
      line-height: var(--font-line-height-normal);
      outline: none;
      padding: var(--spacing-2);
    }

    .accessible-tabs__panel:focus-visible {
      outline: 2px solid var(--color-border-focus);
      outline-offset: var(--spacing-1);
      border-radius: var(--border-radius-md);
    }

    @media (prefers-reduced-motion: reduce) {
      .accessible-tabs__tab { transition: none; }
    }
  </style>
`;

/* ------------------------------------------------------------------ */
/* JS keyboard interaction — mirrors the .astro <script> block so      */
/* stories are keyboard-navigable in Storybook Canvas.                 */
/* ------------------------------------------------------------------ */

const tabsScript = `
  <script>
    (function() {
      function initTabs() {
        document.querySelectorAll('[data-accessible-tabs]').forEach(function(container) {
          if (container.dataset.tabsInit) return;
          container.dataset.tabsInit = 'true';

          var buttons = Array.from(container.querySelectorAll('[data-tab-button]'));
          var panels  = Array.from(container.querySelectorAll('[data-tab-panel]'));

          function setActive(tabId) {
            buttons.forEach(function(btn) {
              var active = btn.getAttribute('data-tab-id') === tabId;
              btn.setAttribute('aria-selected', active ? 'true' : 'false');
              btn.tabIndex = active ? 0 : -1;
              btn.classList.toggle('accessible-tabs__tab--active', active);
            });
            panels.forEach(function(panel) {
              panel.hidden = panel.getAttribute('data-tab-id') !== tabId;
            });
          }

          buttons.forEach(function(button, index) {
            button.addEventListener('click', function() {
              var id = button.getAttribute('data-tab-id');
              if (id) setActive(id);
            });

            button.addEventListener('keydown', function(e) {
              var keys = ['ArrowRight', 'ArrowLeft', 'Home', 'End'];
              if (!keys.includes(e.key)) return;
              e.preventDefault();
              var next = index;
              if (e.key === 'ArrowRight') next = (index + 1) % buttons.length;
              else if (e.key === 'ArrowLeft') next = (index - 1 + buttons.length) % buttons.length;
              else if (e.key === 'Home') next = 0;
              else if (e.key === 'End') next = buttons.length - 1;
              var nb = buttons[next];
              if (nb) { nb.focus(); var nid = nb.getAttribute('data-tab-id'); if (nid) setActive(nid); }
            });
          });
        });
      }

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTabs);
      } else {
        initTabs();
      }
    })();
  </script>
`;

/* ------------------------------------------------------------------ */
/* Render helper                                                        */
/* ------------------------------------------------------------------ */

interface TabData {
  id: string;
  label: string;
  content: string;
}

interface TabsArgs {
  tabs: TabData[];
  ariaLabel: string;
  idPrefix: string;
  defaultTabId?: string;
}

function renderTabs(args: TabsArgs) {
  const { tabs, ariaLabel, idPrefix, defaultTabId } = args;
  const initial = defaultTabId ?? tabs[0]?.id ?? '';

  return html`
    ${tabsStyles}
    <div class="accessible-tabs-story">
      <div
        class="accessible-tabs"
        data-accessible-tabs
        data-id-prefix=${idPrefix}
      >
        <div role="tablist" aria-label=${ariaLabel} class="accessible-tabs__list">
          ${tabs.map((tab) => {
            const active = tab.id === initial;
            return html`
              <button
                type="button"
                role="tab"
                id="${idPrefix}-tab-${tab.id}"
                aria-selected=${active ? 'true' : 'false'}
                aria-controls="${idPrefix}-panel-${tab.id}"
                tabindex=${active ? 0 : -1}
                class="accessible-tabs__tab ${active ? 'accessible-tabs__tab--active' : ''}"
                data-tab-button
                data-tab-id=${tab.id}
              >
                ${tab.label}
              </button>
            `;
          })}
        </div>

        <div class="accessible-tabs__panels">
          ${tabs.map((tab) => html`
            <div
              id="${idPrefix}-panel-${tab.id}"
              role="tabpanel"
              tabindex="0"
              aria-labelledby="${idPrefix}-tab-${tab.id}"
              ?hidden=${tab.id !== initial}
              class="accessible-tabs__panel"
              data-tab-panel
              data-tab-id=${tab.id}
            >
              <div .innerHTML=${tab.content}></div>
            </div>
          `)}
        </div>
      </div>
    </div>
    <!-- Inline script wires keyboard interaction in Canvas -->
    <div .innerHTML=${tabsScript}></div>
  `;
}

/* ------------------------------------------------------------------ */
/* Meta                                                                 */
/* ------------------------------------------------------------------ */

const meta: Meta = {
  title: 'Accessibility/AccessibleTabs',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A11y-first tabbed interface following the **WAI-ARIA APG Tabs pattern** with automatic selection model.

**Keyboard contract (WAI-ARIA APG):**
| Key | Behaviour |
|---|---|
| \`Tab\` | Moves focus into the tablist; focuses the active tab |
| \`ArrowRight\` | Moves focus to the next tab, wraps to first |
| \`ArrowLeft\` | Moves focus to the previous tab, wraps to last |
| \`Home\` | Moves focus to the first tab |
| \`End\` | Moves focus to the last tab |
| \`Tab\` (from active tab) | Moves focus into the active panel |
| \`Shift+Tab\` | Reverse tab order |

**ARIA contract:**
- \`role="tablist"\` + \`aria-label\` on the list
- \`role="tab"\` + \`aria-selected\` + \`aria-controls\` on each button
- \`role="tabpanel"\` + \`aria-labelledby\` + \`tabindex="0"\` on each panel
- Roving tabindex: only the active tab is in the tab sequence

**Design constraints:**
- Token-only styles (\`tokens/dist/tokens.css\`)
- 44 × 44 px minimum touch targets (WCAG 2.5.8 / BFSG)
- \`:focus-visible\` ring — outline is never suppressed
- \`prefers-reduced-motion\` disables transitions
- \`forced-colors\` (Windows High Contrast) handled
        `,
      },
    },
  },
  argTypes: {
    ariaLabel: {
      control: 'text',
      description: 'Accessible label for the tablist (describes the set of tabs)',
    },
    idPrefix: {
      control: 'text',
      description: 'DOM id prefix — allows multiple instances on the same page without id collisions',
    },
    defaultTabId: {
      control: 'text',
      description: 'id of the initially active tab (defaults to first tab)',
    },
  },
};

export default meta;
type Story = StoryObj;

/* ------------------------------------------------------------------ */
/* Stories                                                              */
/* ------------------------------------------------------------------ */

/** Basic three-tab example — the most common usage pattern */
export const Default: Story = {
  args: {
    ariaLabel: 'Product information',
    idPrefix: 'default-tabs',
    defaultTabId: 'overview',
    tabs: [
      {
        id: 'overview',
        label: 'Overview',
        content: '<p>This is the <strong>Overview</strong> panel. It appears when the first tab is selected.</p>',
      },
      {
        id: 'features',
        label: 'Features',
        content: '<ul><li>Full WAI-ARIA APG keyboard contract</li><li>Roving tabindex</li><li>Automatic selection model</li><li>44 px touch targets</li></ul>',
      },
      {
        id: 'accessibility',
        label: 'Accessibility',
        content: '<p>Meets WCAG 2.2 AA and BFSG 2025. <code>role=tablist/tab/tabpanel</code>, <code>aria-selected</code>, <code>aria-controls</code>, <code>aria-labelledby</code> all wired correctly.</p>',
      },
    ],
  },
  render: (args) => renderTabs(args as TabsArgs),
};

/** German labels — typical Wender Media use case */
export const German: Story = {
  args: {
    ariaLabel: 'Leistungsübersicht',
    idPrefix: 'leistungen-tabs',
    defaultTabId: 'seo',
    tabs: [
      {
        id: 'seo',
        label: 'SEO',
        content: '<p><strong>Suchmaschinenoptimierung</strong> für mehr organische Sichtbarkeit in Google und Bing.</p>',
      },
      {
        id: 'webdesign',
        label: 'Webdesign',
        content: '<p><strong>Modernes Webdesign</strong> mit Astro, Tailwind und barrierefreien Komponenten.</p>',
      },
      {
        id: 'content',
        label: 'Content',
        content: '<p><strong>Content-Strategie</strong> und SEO-Texte für nachhaltige Sichtbarkeit.</p>',
      },
    ],
  },
  render: (args) => renderTabs(args as TabsArgs),
};

/** Two tabs — minimal configuration */
export const TwoTabs: Story = {
  args: {
    ariaLabel: 'Vergleich',
    idPrefix: 'two-tabs',
    defaultTabId: 'before',
    tabs: [
      {
        id: 'before',
        label: 'Before',
        content: '<p>Content visible in the <strong>Before</strong> state.</p>',
      },
      {
        id: 'after',
        label: 'After',
        content: '<p>Content visible in the <strong>After</strong> state.</p>',
      },
    ],
  },
  render: (args) => renderTabs(args as TabsArgs),
};

/** Non-first default — second tab selected on load */
export const DefaultSecondTab: Story = {
  name: 'Default: Second Tab Active',
  args: {
    ariaLabel: 'Settings',
    idPrefix: 'settings-tabs',
    defaultTabId: 'advanced',
    tabs: [
      {
        id: 'general',
        label: 'General',
        content: '<p>General settings panel. Not selected by default in this story.</p>',
      },
      {
        id: 'advanced',
        label: 'Advanced',
        content: '<p>Advanced settings panel — this tab is <strong>selected by default</strong> via <code>defaultTabId="advanced"</code>.</p>',
      },
      {
        id: 'danger',
        label: 'Danger Zone',
        content: '<p>Destructive actions live here. Keyboard navigate with ArrowRight/Left from the Advanced tab.</p>',
      },
    ],
  },
  render: (args) => renderTabs(args as TabsArgs),
};

/** Multiple instances on one page — id collision prevention demo */
export const MultipleInstances: Story = {
  name: 'Multiple Instances (no id collisions)',
  args: {
    ariaLabel: 'Primary tabs',
    idPrefix: 'primary-tabs',
    defaultTabId: 'one',
    tabs: [
      { id: 'one', label: 'One', content: '<p>First instance, panel one.</p>' },
      { id: 'two', label: 'Two', content: '<p>First instance, panel two.</p>' },
    ],
  },
  render: (args) => {
    const a = args as TabsArgs;
    const bArgs: TabsArgs = {
      ariaLabel: 'Secondary tabs',
      idPrefix: 'secondary-tabs',
      defaultTabId: 'alpha',
      tabs: [
        { id: 'alpha', label: 'Alpha', content: '<p>Second instance, panel alpha. Uses a different <code>idPrefix</code> so ids never collide.</p>' },
        { id: 'beta', label: 'Beta', content: '<p>Second instance, panel beta.</p>' },
      ],
    };
    return html`
      <div style="display: flex; flex-direction: column; gap: 2rem;">
        ${renderTabs(a)}
        ${renderTabs(bArgs)}
      </div>
    `;
  },
};

/** Rich HTML panel content */
export const RichContent: Story = {
  args: {
    ariaLabel: 'Documentation sections',
    idPrefix: 'docs-tabs',
    defaultTabId: 'install',
    tabs: [
      {
        id: 'install',
        label: 'Installation',
        content: `
          <h3 style="margin-top:0">Install</h3>
          <pre style="background:#f1f5f9;padding:0.75rem;border-radius:4px"><code>npm install @wendermedia/astro-components</code></pre>
        `,
      },
      {
        id: 'usage',
        label: 'Usage',
        content: `
          <h3 style="margin-top:0">Usage</h3>
          <pre style="background:#f1f5f9;padding:0.75rem;border-radius:4px"><code>import AccessibleTabs from '@wendermedia/astro-components/accessibility/AccessibleTabs.astro';</code></pre>
        `,
      },
      {
        id: 'props',
        label: 'Props',
        content: `
          <h3 style="margin-top:0">Props</h3>
          <table style="width:100%;border-collapse:collapse;font-size:0.875rem">
            <thead><tr style="border-bottom:1px solid #e2e8f0"><th style="text-align:left;padding:0.5rem">Prop</th><th style="text-align:left;padding:0.5rem">Type</th><th style="text-align:left;padding:0.5rem">Default</th></tr></thead>
            <tbody>
              <tr><td style="padding:0.5rem">tabs</td><td style="padding:0.5rem">TabItem[]</td><td style="padding:0.5rem">required</td></tr>
              <tr><td style="padding:0.5rem">ariaLabel</td><td style="padding:0.5rem">string</td><td style="padding:0.5rem">"Tabs"</td></tr>
              <tr><td style="padding:0.5rem">idPrefix</td><td style="padding:0.5rem">string</td><td style="padding:0.5rem">"accessible-tabs"</td></tr>
              <tr><td style="padding:0.5rem">defaultTabId</td><td style="padding:0.5rem">string</td><td style="padding:0.5rem">tabs[0].id</td></tr>
            </tbody>
          </table>
        `,
      },
    ],
  },
  render: (args) => renderTabs(args as TabsArgs),
};
