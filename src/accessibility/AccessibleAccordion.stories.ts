/**
 * AccessibleAccordion Stories - WenderMedia Astro Components
 *
 * Storybook stories rendered with lit-html (@storybook/web-components).
 * Stories re-implement the accordion visuals in lit-html — they do NOT
 * import the .astro component (Storybook cannot process Astro at runtime).
 *
 * WAI-ARIA contract demonstrated:
 *   - button[aria-expanded] + button[aria-controls]
 *   - div[role="region"][aria-labelledby]
 *   - Keyboard: ArrowDown/ArrowUp/Home/End between headers
 *   - Chevron rotation on open state
 *
 * @copyright 2007-2026 Arnold Wender · Wender Media. All Rights Reserved. License: LicenseRef-Wender-Media-Source-1.0
 * @see https://github.com/arnoldwender/wm-project-astro-components
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

/* ─── Types ─────────────────────────────────────────────────────── */

interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

interface AccordionArgs {
  items: AccordionItem[];
  allowMultiple: boolean;
  defaultOpenIndex: number;
  ariaLabel: string;
}

/* ─── Sample data ────────────────────────────────────────────────── */

const seoFaqs: AccordionItem[] = [
  {
    id: 'was-ist-seo',
    title: 'Was ist Suchmaschinenoptimierung (SEO)?',
    content:
      'SEO umfasst alle Maßnahmen, die dazu beitragen, eine Website in den organischen Suchergebnissen von Google & Co. besser zu platzieren. Dazu gehören technische Optimierungen, hochwertiger Content und der Aufbau externer Verlinkungen.',
  },
  {
    id: 'wie-lange',
    title: 'Wie lange dauert es, bis SEO-Maßnahmen wirken?',
    content:
      'In der Regel sind erste Ergebnisse nach 3–6 Monaten sichtbar. Eine nachhaltige Positionsverbesserung auf wettbewerbsintensiven Keywords erfordert häufig 6–12 Monate kontinuierlicher Arbeit.',
  },
  {
    id: 'kosten',
    title: 'Was kostet professionelle SEO-Betreuung?',
    content:
      'Die Kosten variieren je nach Wettbewerbsintensität, Projektziel und Umfang. Wender Media bietet Pakete ab 499 €/Monat für lokale KMU bis hin zu Enterprise-Projekten nach individuellem Angebot.',
  },
  {
    id: 'garantie',
    title: 'Können Rankings garantiert werden?',
    content:
      'Seriöse SEO-Agenturen geben keine Ranking-Garantien — das wäre ein Verstoß gegen die Richtlinien von Google. Was wir garantieren: transparente Kommunikation, nachweisbare Fortschritte und messbare Ergebnisse.',
  },
];

const webdesignFaqs: AccordionItem[] = [
  {
    id: 'technologien',
    title: 'Welche Technologien setzen Sie ein?',
    content:
      'Wir entwickeln primär mit Astro (Static Site Generator) für maximale Performance und WordPress + GenerateBlocks Pro für CMS-basierte Projekte. Alle Seiten werden nach BFSG 2025 / WCAG 2.2 AA barrierefrei gestaltet.',
  },
  {
    id: 'dauer',
    title: 'Wie lange dauert die Entwicklung einer Website?',
    content:
      'Ein typisches Webdesign-Projekt mit Astro dauert 4–8 Wochen vom Briefing bis zur Übergabe. WordPress-Projekte sind häufig in 2–4 Wochen abgeschlossen.',
  },
  {
    id: 'cms',
    title: 'Kann ich meine Website selbst pflegen?',
    content:
      'Ja. Bei WordPress-Projekten können Sie Inhalte selbstständig über das Backend bearbeiten. Für Astro-Projekte integrieren wir auf Wunsch ein Headless-CMS wie Directus oder Storyblok.',
  },
];

/* ─── Inline styles using token values ──────────────────────────── */
// These mirror the scoped styles in the .astro component; lit-html stories
// render independently (no Astro runtime), so we inline equivalent CSS.

const storyStyles = html`
  <style>
    .wm-accordion-story {
      font-family: system-ui, -apple-system, sans-serif;
      max-width: 680px;
      margin: 0 auto;
    }

    .wm-accordion-demo {
      border: 1px solid #e2e8f0;
      border-radius: 0.75rem;
      background: #ffffff;
      overflow: hidden;
    }

    .wm-accordion-demo__item + .wm-accordion-demo__item {
      border-top: 1px solid #e2e8f0;
    }

    .wm-accordion-demo__heading {
      margin: 0;
      padding: 0;
    }

    .wm-accordion-demo__trigger {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      width: 100%;
      min-height: 44px;
      padding: 1rem 1.5rem;
      font-size: 1rem;
      font-weight: 600;
      line-height: 1.5;
      color: #1e293b;
      text-align: left;
      background: transparent;
      border: none;
      cursor: pointer;
      transition: background-color 150ms ease, color 150ms ease;
    }

    .wm-accordion-demo__trigger:hover {
      background: #f8fafc;
      color: #0ea5e9;
    }

    .wm-accordion-demo__trigger:focus {
      outline: none;
    }

    .wm-accordion-demo__trigger:focus-visible {
      outline: 2px solid #0ea5e9;
      outline-offset: -2px;
      border-radius: 0.375rem;
    }

    .wm-accordion-demo__icon {
      display: flex;
      align-items: center;
      flex-shrink: 0;
      color: #0ea5e9;
      transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .wm-accordion-demo__icon--open {
      transform: rotate(180deg);
    }

    @media (prefers-reduced-motion: reduce) {
      .wm-accordion-demo__icon {
        transition: none;
      }
    }

    .wm-accordion-demo__panel-body {
      padding: 0.75rem 1.5rem 1.25rem;
      font-size: 1rem;
      line-height: 1.625;
      color: #475569;
    }

    /* Forced-colors / high-contrast */
    @media (forced-colors: active) {
      .wm-accordion-demo {
        border: 1px solid ButtonText;
      }
      .wm-accordion-demo__item + .wm-accordion-demo__item {
        border-top: 1px solid ButtonText;
      }
      .wm-accordion-demo__trigger:focus-visible {
        outline: 2px solid Highlight;
      }
    }

    /* State badge for docs */
    .story-badge {
      display: inline-block;
      padding: 0.25rem 0.75rem;
      background: #f0f9ff;
      color: #0369a1;
      border-radius: 9999px;
      font-size: 0.75rem;
      font-weight: 500;
      margin-bottom: 1rem;
    }
  </style>
`;

/* ─── Renderer helper ───────────────────────────────────────────── */

function renderAccordion(args: AccordionArgs, defaultOpenIndex = -1) {
  const { items, allowMultiple, ariaLabel } = args;

  // Script to wire up keyboard + click behaviour in the story frame
  const scriptId = `accordion-script-${Math.random().toString(36).slice(2)}`;

  return html`
    ${storyStyles}
    <div class="wm-accordion-story">
      <div
        class="wm-accordion-demo"
        data-story-accordion
        data-allow-multiple="${allowMultiple}"
        aria-label="${ariaLabel}"
        id="${scriptId}-root"
      >
        ${items.map(
          (item, idx) => html`
            <div class="wm-accordion-demo__item">
              <h3 class="wm-accordion-demo__heading">
                <button
                  type="button"
                  id="${scriptId}-${item.id}-btn"
                  class="wm-accordion-demo__trigger"
                  aria-expanded="${idx === defaultOpenIndex ? 'true' : 'false'}"
                  aria-controls="${scriptId}-${item.id}-panel"
                  data-story-btn
                >
                  <span>${item.title}</span>
                  <span
                    class="wm-accordion-demo__icon${idx === defaultOpenIndex ? ' wm-accordion-demo__icon--open' : ''}"
                    aria-hidden="true"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 8l5 5 5-5" />
                    </svg>
                  </span>
                </button>
              </h3>
              <div
                id="${scriptId}-${item.id}-panel"
                role="region"
                aria-labelledby="${scriptId}-${item.id}-btn"
                class="wm-accordion-demo__panel"
                ?hidden="${idx !== defaultOpenIndex}"
                data-story-panel
              >
                <div class="wm-accordion-demo__panel-body">${item.content}</div>
              </div>
            </div>
          `
        )}
      </div>
    </div>

    <script>
      (function () {
        var root = document.getElementById('${scriptId}-root');
        if (!root) return;

        var multi = root.getAttribute('data-allow-multiple') === 'true';
        var btns = Array.from(root.querySelectorAll('[data-story-btn]'));

        function setExpanded(btn, open) {
          var panelId = btn.getAttribute('aria-controls');
          var panel = document.getElementById(panelId);
          var icon = btn.querySelector('.wm-accordion-demo__icon');
          btn.setAttribute('aria-expanded', open ? 'true' : 'false');
          if (icon) icon.classList.toggle('wm-accordion-demo__icon--open', open);
          if (panel) panel.hidden = !open;
        }

        btns.forEach(function (btn, idx) {
          btn.addEventListener('click', function () {
            var isOpen = btn.getAttribute('aria-expanded') === 'true';
            if (!multi) {
              btns.forEach(function (b) {
                if (b !== btn) setExpanded(b, false);
              });
            }
            setExpanded(btn, !isOpen);
          });

          btn.addEventListener('keydown', function (e) {
            if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(e.key)) return;
            e.preventDefault();
            var next = idx;
            if (e.key === 'ArrowDown') next = (idx + 1) % btns.length;
            else if (e.key === 'ArrowUp') next = (idx - 1 + btns.length) % btns.length;
            else if (e.key === 'Home') next = 0;
            else if (e.key === 'End') next = btns.length - 1;
            btns[next].focus();
          });
        });
      })();
    </script>
  `;
}

/* ─── Meta ───────────────────────────────────────────────────────── */

const meta: Meta<AccordionArgs> = {
  title: 'Accessibility/AccessibleAccordion',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## AccessibleAccordion

a11y-first accordion that implements the full **WAI-ARIA APG Accordion Pattern** (<https://www.w3.org/WAI/ARIA/apg/patterns/accordion/>).

### WAI-ARIA contract

| Attribute | Element | Value |
|---|---|---|
| \`aria-expanded\` | trigger button | \`"true"\` / \`"false"\` |
| \`aria-controls\` | trigger button | panel id |
| \`role="region"\` | panel div | — |
| \`aria-labelledby\` | panel div | trigger button id |

### Keyboard interactions

| Key | Action |
|---|---|
| **Enter / Space** | Toggle the focused panel |
| **ArrowDown** | Move focus to the next header |
| **ArrowUp** | Move focus to the previous header |
| **Home** | Move focus to the first header |
| **End** | Move focus to the last header |

### Relationship to ui/Accordion

\`AccessibleAccordion\` lives alongside \`ui/Accordion\` as the dedicated accessibility-first alternative. Differences: explicit roving-tabindex Arrow/Home/End navigation, WAI-ARIA region role, chevron animation with \`prefers-reduced-motion\` guard, forced-colors support, and zero Tailwind class dependency (tokens-only styles).
        `,
      },
    },
  },
  argTypes: {
    items: {
      control: false,
      description: 'Array of `{ id, title, content }` accordion items',
    },
    allowMultiple: {
      control: 'boolean',
      description: 'Allow multiple panels to be open simultaneously',
    },
    defaultOpenIndex: {
      control: 'number',
      description: 'Zero-based index of item open on first render (-1 = all closed)',
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible label for the accordion wrapper',
    },
  },
};

export default meta;
type Story = StoryObj<AccordionArgs>;

/* ─── Stories ────────────────────────────────────────────────────── */

/** Default: single-open mode, all panels start collapsed. */
export const Default: Story = {
  args: {
    items: seoFaqs,
    allowMultiple: false,
    defaultOpenIndex: -1,
    ariaLabel: 'SEO Häufige Fragen',
  },
  render: (args) => renderAccordion(args, -1),
};

/** First panel pre-expanded on load — useful for FAQ sections where the
 *  most important question should be visible immediately. */
export const FirstItemOpen: Story = {
  name: 'First Item Pre-Expanded',
  args: {
    items: seoFaqs,
    allowMultiple: false,
    defaultOpenIndex: 0,
    ariaLabel: 'SEO Häufige Fragen — erste Frage vorgeöffnet',
  },
  render: (args) => renderAccordion(args, 0),
};

/** Multiple panels may be open simultaneously — suitable for
 *  "compare features" or settings checklists. */
export const MultipleOpen: Story = {
  name: 'Multiple Panels Allowed',
  args: {
    items: webdesignFaqs,
    allowMultiple: true,
    defaultOpenIndex: -1,
    ariaLabel: 'Webdesign Häufige Fragen (Mehrfachauswahl)',
  },
  render: (args) => renderAccordion(args, -1),
};

/** Two items only — minimal footprint for compact use-cases
 *  such as inline product FAQs. */
export const TwoItems: Story = {
  name: 'Two Items (Minimal)',
  args: {
    items: seoFaqs.slice(0, 2),
    allowMultiple: false,
    defaultOpenIndex: -1,
    ariaLabel: 'Kurze FAQ',
  },
  render: (args) => renderAccordion(args, -1),
};

/** Single item — edge case; the accordion renders correctly
 *  with only one entry (no Arrow navigation needed). */
export const SingleItem: Story = {
  name: 'Single Item (Edge Case)',
  args: {
    items: [seoFaqs[0]],
    allowMultiple: false,
    defaultOpenIndex: 0,
    ariaLabel: 'Einzelne Frage',
  },
  render: (args) => renderAccordion(args, 0),
};
