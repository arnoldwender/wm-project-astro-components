/**
 * HowToSchema Stories — WenderMedia Astro Components
 *
 * HowToSchema emits a <script type="application/ld+json"> with a Schema.org
 * HowTo object — there is no visible DOM. Each story renders a <pre> block
 * showing the exact JSON-LD the component would emit for the given args.
 *
 * @copyright 2007-2026 Arnold Wender · Wender Media. All Rights Reserved. License: LicenseRef-Wender-Media-Source-1.0
 * @see https://github.com/arnoldwender/wm-project-astro-components
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

// ---------------------------------------------------------------------------
// Shared helper — mirrors the schema-building logic from HowToSchema.astro
// so the preview <pre> shows exactly what the component would emit.
// ---------------------------------------------------------------------------

interface HowToStep {
  name: string;
  text: string;
  image?: string;
  url?: string;
}

interface HowToTool {
  name: string;
}

interface HowToSupply {
  name: string;
}

interface HowToArgs {
  name: string;
  description: string;
  steps: HowToStep[];
  totalTime?: string;
  estimatedCost?: { value: string | number; currency?: string };
  tools?: HowToTool[];
  supplies?: HowToSupply[];
  image?: string;
  baseUrl?: string;
}

function buildHowToSchema(args: HowToArgs): Record<string, unknown> | null {
  const { name, description, steps, totalTime, estimatedCost, tools, supplies, image, baseUrl = 'https://example.com' } = args;

  if (!Array.isArray(steps) || steps.length === 0) return null;

  function toAbsolute(url: string): string {
    if (!url) return url;
    return url.startsWith('http://') || url.startsWith('https://') || url.startsWith('//')
      ? url
      : `${baseUrl}${url.startsWith('/') ? '' : '/'}${url}`;
  }

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    step: steps.map((step, index) => {
      const stepObj: Record<string, unknown> = {
        '@type': 'HowToStep',
        position: index + 1,
        name: step.name,
        text: step.text,
      };
      if (step.image) stepObj.image = toAbsolute(step.image);
      if (step.url) stepObj.url = toAbsolute(step.url);
      return stepObj;
    }),
  };

  if (totalTime) schema.totalTime = totalTime;
  if (image) schema.image = toAbsolute(image);
  if (estimatedCost) {
    schema.estimatedCost = {
      '@type': 'MonetaryAmount',
      value: estimatedCost.value,
      currency: estimatedCost.currency ?? 'EUR',
    };
  }
  if (tools && tools.length > 0) {
    schema.tool = tools.map((t) => ({ '@type': 'HowToTool', name: t.name }));
  }
  if (supplies && supplies.length > 0) {
    schema.supply = supplies.map((s) => ({ '@type': 'HowToSupply', name: s.name }));
  }

  return schema;
}

// ---------------------------------------------------------------------------
// Story renderer
// ---------------------------------------------------------------------------

function renderPreview(args: HowToArgs) {
  const schema = buildHowToSchema(args);

  if (!schema) {
    return html`
      <div style="padding: 2rem; font-family: system-ui, sans-serif;">
        <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 0.5rem; padding: 1.5rem; max-width: 48rem;">
          <p style="font-size: 0.875rem; color: #dc2626; margin: 0;">
            ⚠ No <code>steps</code> provided — component renders nothing (guards against invalid HowTo schema).
          </p>
        </div>
      </div>
    `;
  }

  const jsonStr = JSON.stringify(schema, null, 2);

  return html`
    <div style="padding: 2rem; font-family: system-ui, sans-serif;">
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.5rem; padding: 1.5rem; max-width: 56rem;">
        <h3 style="font-size: 1rem; font-weight: 600; margin: 0 0 0.25rem; color: #0f172a;">
          JSON-LD: HowTo
        </h3>
        <p style="font-size: 0.8125rem; color: #64748b; margin: 0 0 1rem;">
          Renders a <code style="background:#e2e8f0;padding:0.1em 0.3em;border-radius:0.2em;">&lt;script type="application/ld+json"&gt;</code> — no visible DOM.
        </p>
        <pre style="background: #1e293b; color: #e2e8f0; padding: 1rem; border-radius: 0.375rem; font-size: 0.8rem; overflow-x: auto; margin: 0; white-space: pre-wrap;">${jsonStr}</pre>
        <p style="font-size: 0.75rem; color: #94a3b8; margin: 1rem 0 0;">
          Validate at
          <a href="https://search.google.com/test/rich-results" target="_blank" rel="noopener noreferrer" style="color:#3b82f6;">
            Google Rich Results Test
          </a>
          or
          <a href="https://validator.schema.org/" target="_blank" rel="noopener noreferrer" style="color:#3b82f6;">
            Schema.org Validator
          </a>.
        </p>
      </div>
    </div>
  `;
}

// ---------------------------------------------------------------------------
// Meta
// ---------------------------------------------------------------------------

const meta: Meta = {
  title: 'SEO/HowToSchema',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Emits a \`<script type="application/ld+json">\` containing a **Schema.org HowTo** object.

**Features:**
- Fully typed \`HowToStep\`, \`HowToTool\`, \`HowToSupply\` interfaces — no free-form objects
- Automatically resolves relative image/URL props to absolute URLs via \`baseUrl\` (defaults to \`Astro.site\`)
- Renders nothing when \`steps\` is empty — safe to use unconditionally
- Optional \`totalTime\` (ISO 8601), \`estimatedCost\`, \`tools\`, \`supplies\`, and guide-level \`image\`
- Uses \`is:inline\` + \`set:html\` for XSS-safe script injection

**Schema.org type:** [\`HowTo\`](https://schema.org/HowTo)

**Google rich result:** [How-to structured data](https://developers.google.com/search/docs/appearance/structured-data/how-to)
        `,
      },
    },
  },
  argTypes: {
    name: { control: 'text', description: 'Title of the how-to guide (schema `name`).' },
    description: { control: 'text', description: 'Short description of what the guide accomplishes.' },
    totalTime: { control: 'text', description: 'ISO 8601 duration, e.g. "PT30M" (30 min) or "PT1H" (1 hour).' },
    image: { control: 'text', description: 'Hero image URL for the guide.' },
    baseUrl: { control: 'text', description: 'Base URL for resolving relative paths (defaults to Astro.site).' },
  },
};

export default meta;
type Story = StoryObj;

// ---------------------------------------------------------------------------
// Stories
// ---------------------------------------------------------------------------

/** Minimal example — just steps, no optional fields. */
export const Minimal: Story = {
  args: {
    name: 'How to Claim Your Google Business Profile',
    description: 'Step-by-step guide to verifying and optimising your free Google Business Profile listing.',
    steps: [
      { name: 'Go to Google Business Profile', text: 'Visit business.google.com and sign in with your Google account.' },
      { name: 'Search for your business', text: 'Enter your business name. If it appears, click on it; otherwise click "Add your business to Google".' },
      { name: 'Choose a verification method', text: 'Google will offer to verify by postcard, phone, or email. Select the method that works best for you.' },
    ],
    baseUrl: 'https://example.com',
  } as HowToArgs,
  render: (args) => renderPreview(args as HowToArgs),
};

/** Full example with all optional fields — totalTime, estimatedCost, tools, supplies, step images. */
export const Full: Story = {
  args: {
    name: 'How to Improve Your Local SEO in 5 Steps',
    description: 'A practical guide for small businesses to rank higher in local search results on Google.',
    totalTime: 'PT45M',
    estimatedCost: { value: 0, currency: 'EUR' },
    image: '/images/local-seo-guide.webp',
    tools: [
      { name: 'Google Search Console' },
      { name: 'Google Business Profile' },
      { name: 'Ubersuggest (free tier)' },
    ],
    supplies: [
      { name: 'Google account' },
      { name: 'Business address (physical or service area)' },
    ],
    steps: [
      {
        name: 'Claim and verify your Google Business Profile',
        text: 'Go to business.google.com, search for your business, and complete the verification process.',
        image: '/images/step-1-gbp.webp',
        url: '/local-seo/google-business-profile/',
      },
      {
        name: 'Ensure NAP consistency across all directories',
        text: 'Name, Address, and Phone must be identical on your website, GBP, Yelp, and industry directories.',
        url: '/local-seo/nap-consistency/',
      },
      {
        name: 'Optimise your on-page local signals',
        text: 'Add LocalBusiness JSON-LD schema, embed a Google Map, and include your city name in titles and headings.',
      },
      {
        name: 'Build local citations',
        text: 'Submit your business to Yelp, Yellow Pages, and at least five industry-specific directories.',
      },
      {
        name: 'Collect and respond to reviews',
        text: 'Ask satisfied customers to leave a Google review and respond to every review within 48 hours.',
      },
    ],
    baseUrl: 'https://example.com',
  } as HowToArgs,
  render: (args) => renderPreview(args as HowToArgs),
};

/** Demonstrates that the component renders nothing when steps is empty. */
export const EmptyStepsGuard: Story = {
  args: {
    name: 'Guide without steps',
    description: 'This should render nothing — component guards against empty steps array.',
    steps: [],
    baseUrl: 'https://example.com',
  } as HowToArgs,
  render: (args) => renderPreview(args as HowToArgs),
};

/** How-to guide with absolute image URLs (no baseUrl resolution needed). */
export const AbsoluteUrls: Story = {
  args: {
    name: 'How to Set Up Google Search Console',
    description: 'Verify your website and start monitoring search performance in Google Search Console.',
    totalTime: 'PT15M',
    steps: [
      {
        name: 'Open Search Console',
        text: 'Navigate to search.google.com/search-console and sign in.',
        image: 'https://example.com/images/gsc-step-1.webp',
        url: 'https://example.com/seo/google-search-console/',
      },
      {
        name: 'Add your property',
        text: 'Click "Add Property" and choose between Domain or URL-prefix verification method.',
        image: 'https://example.com/images/gsc-step-2.webp',
      },
      {
        name: 'Verify ownership',
        text: 'Follow the verification instructions for your chosen method (DNS TXT record, HTML file, or Google Analytics).',
      },
    ],
    baseUrl: 'https://example.com',
  } as HowToArgs,
  render: (args) => renderPreview(args as HowToArgs),
};
