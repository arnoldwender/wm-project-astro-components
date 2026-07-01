/**
 * FAQSchema Stories - WenderMedia Astro Components
 *
 * Documentation/preview stories for the FAQSchema component.
 * Because FAQSchema emits only a `<script type="application/ld+json">` tag
 * (no visible DOM), each story renders a <pre> block showing the JSON-LD
 * that the component would produce for the given args.
 *
 * @copyright 2007-2026 Arnold Wender · Wender Media. All Rights Reserved. License: LicenseRef-Wender-Media-Source-1.0
 * @see https://github.com/arnoldwender/wm-project-astro-components
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import type { FAQItem } from './FAQSchema.astro';

// ---------------------------------------------------------------------------
// Helpers — mirrors the schema construction logic in FAQSchema.astro
// ---------------------------------------------------------------------------

function buildFAQSchema(items: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

function renderPreview(items: FAQItem[], suppress: boolean) {
  if (suppress || items.length === 0) {
    return html`
      <div style="padding: 2rem; font-family: system-ui, sans-serif;">
        <div style="background: #fef9c3; border: 1px solid #fde68a; border-radius: 0.5rem; padding: 1.5rem; max-width: 48rem;">
          <h3 style="font-size: 1rem; font-weight: 600; margin: 0 0 0.5rem;">FAQSchema — suppressed / empty</h3>
          <p style="font-size: 0.875rem; color: #92400e; margin: 0;">
            No JSON-LD is emitted. Either <code>suppress={true}</code> was passed or <code>items</code> is empty.
          </p>
        </div>
      </div>
    `;
  }

  const schema = buildFAQSchema(items);
  const json = JSON.stringify(schema, null, 2);

  return html`
    <div style="padding: 2rem; font-family: system-ui, sans-serif;">
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.5rem; padding: 1.5rem; max-width: 48rem;">
        <h3 style="font-size: 1rem; font-weight: 600; margin: 0 0 0.5rem; color: #0f172a;">
          JSON-LD: FAQPage (${items.length} item${items.length === 1 ? '' : 's'})
        </h3>
        <p style="font-size: 0.875rem; color: #64748b; margin: 0 0 1rem;">
          Renders a <code>&lt;script type="application/ld+json"&gt;</code> in the document.
          Enables expandable Q&amp;A rich results in Google Search.
        </p>
        <pre style="background: #1e293b; color: #e2e8f0; padding: 1rem; border-radius: 0.375rem; font-size: 0.8125rem; overflow-x: auto; margin: 0; white-space: pre-wrap;">${json}</pre>
      </div>
    </div>
  `;
}

// ---------------------------------------------------------------------------
// Meta
// ---------------------------------------------------------------------------

const meta: Meta = {
  title: 'SEO/FAQSchema',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Emits a \`FAQPage\` JSON-LD structured data block that enables expandable
Q&A rich results in Google Search.

**Schema.org type:** [\`FAQPage\`](https://schema.org/FAQPage)
→ \`mainEntity[]\`: [\`Question\`](https://schema.org/Question)
→ \`acceptedAnswer\`: [\`Answer\`](https://schema.org/Answer)

**Guard rules:**
- Renders nothing when \`items\` is empty — prevents invalid schema.
- Renders nothing when \`suppress={true}\` — avoids duplicate FAQPage on pages
  that already emit it via another component (e.g. RichSnippets \`type="faq"\`).

**Usage:**
\`\`\`astro
<FAQSchema
  items={[
    { question: 'Was kostet SEO?', answer: 'Die Kosten hängen vom Umfang ab.' },
    { question: 'Wie lange dauert SEO?', answer: 'Erste Ergebnisse in 3–6 Monaten.' },
  ]}
/>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    suppress: {
      control: 'boolean',
      description: 'Suppress JSON-LD output even when items are present.',
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj;

// ---------------------------------------------------------------------------
// Fixture data
// ---------------------------------------------------------------------------

const seoFaqs: FAQItem[] = [
  {
    question: 'Was kostet SEO?',
    answer:
      'Die Kosten für SEO-Dienstleistungen hängen vom Umfang des Projekts ab. Lokale SEO-Pakete starten typischerweise bei 300–500 € monatlich, während umfangreichere Projekte 1.000 € oder mehr kosten können.',
  },
  {
    question: 'Wie lange dauert es, bis SEO-Maßnahmen Ergebnisse zeigen?',
    answer:
      'Erste messbare Verbesserungen sind in der Regel nach 3–6 Monaten zu erwarten. Für kompetitive Keywords kann es 6–12 Monate dauern, bis signifikante Rankings erreicht werden.',
  },
  {
    question: 'Was ist der Unterschied zwischen On-Page- und Off-Page-SEO?',
    answer:
      'On-Page-SEO umfasst alle Optimierungen direkt auf der Website (Inhalte, Meta-Tags, interne Verlinkung). Off-Page-SEO bezieht sich auf externe Faktoren wie Backlinks und Social Signals.',
  },
];

const localSeoFaqs: FAQItem[] = [
  {
    question: 'Was ist Local SEO?',
    answer:
      'Local SEO (Lokale Suchmaschinenoptimierung) ist die Optimierung einer Website für standortbezogene Suchanfragen, um in den lokalen Suchergebnissen und Google Maps besser gefunden zu werden.',
  },
  {
    question: 'Wie wichtig ist Google My Business für Local SEO?',
    answer:
      'Ein vollständig ausgefülltes und verifiziertes Google Business-Profil ist einer der wichtigsten Faktoren für Local SEO. Es beeinflusst direkt die Sichtbarkeit in Google Maps und den Local Pack.',
  },
];

// ---------------------------------------------------------------------------
// Stories
// ---------------------------------------------------------------------------

/** Standard FAQPage with three items — the typical use case. */
export const Default: Story = {
  args: { suppress: false },
  render: (args) => renderPreview(seoFaqs, args.suppress as boolean),
};

/** Minimal single-item FAQ — confirms singular label and valid output. */
export const SingleItem: Story = {
  args: { suppress: false },
  render: (args) =>
    renderPreview(
      [
        {
          question: 'Wie kann ich SEO selbst verbessern?',
          answer:
            'Beginnen Sie mit einer sauberen technischen Grundlage: schnelle Ladezeiten, mobile Optimierung, und strukturierte Inhalte mit klarer Heading-Hierarchie.',
        },
      ],
      args.suppress as boolean,
    ),
};

/** Local SEO FAQ — demonstrates re-use with domain-specific content. */
export const LocalSEO: Story = {
  args: { suppress: false },
  render: (args) => renderPreview(localSeoFaqs, args.suppress as boolean),
};

/**
 * Suppressed — component emits nothing.
 * Use this on pages that already emit FAQPage via RichSnippets or inline JSON-LD
 * to prevent the GSC "duplicate FAQPage" error.
 */
export const Suppressed: Story = {
  args: { suppress: true },
  render: (args) => renderPreview(seoFaqs, args.suppress as boolean),
};

/** Empty items array — component emits nothing (guard against invalid schema). */
export const EmptyItems: Story = {
  args: { suppress: false },
  render: (args) => renderPreview([], args.suppress as boolean),
};
