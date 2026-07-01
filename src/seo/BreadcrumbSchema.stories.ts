/**
 * BreadcrumbSchema Stories - WenderMedia Astro Components
 *
 * The component itself is invisible (emits only a JSON-LD script tag).
 * Each story renders a documentation preview showing the exact JSON-LD
 * object the component would emit for the given args.
 *
 * @copyright 2007-2026 Arnold Wender · Wender Media. All Rights Reserved. License: LicenseRef-Wender-Media-Source-1.0
 * @see https://github.com/arnoldwender/wm-project-astro-components
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import type { BreadcrumbItem } from './BreadcrumbSchema.astro';

// ---------------------------------------------------------------------------
// Helpers — mirror the component's toAbsolute + schema-build logic so the
// story preview renders the same JSON the Astro component would emit.
// ---------------------------------------------------------------------------

function toAbsolute(href: string, base: string): string {
  if (/^https?:\/\//.test(href)) return href;
  const path = href.startsWith('/') ? href : `/${href}`;
  return `${base}${path}`;
}

function buildSchema(items: BreadcrumbItem[], baseUrl: string): object | null {
  if (!Array.isArray(items) || items.length === 0) return null;
  const base = baseUrl.replace(/\/$/, '');
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: toAbsolute(item.href, base),
    })),
  };
}

// ---------------------------------------------------------------------------
// Story renderer — shared preview shell
// ---------------------------------------------------------------------------

interface StoryArgs {
  items: BreadcrumbItem[];
  baseUrl: string;
}

const renderPreview = (args: StoryArgs) => {
  const schema = buildSchema(args.items, args.baseUrl);
  const json = schema ? JSON.stringify(schema, null, 2) : '// (no items — component renders nothing)';

  return html`
    <div style="padding: 2rem; font-family: system-ui, sans-serif; max-width: 52rem;">
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.5rem; padding: 1.5rem;">
        <h3 style="font-size: 1rem; font-weight: 600; margin: 0 0 0.25rem;">BreadcrumbSchema</h3>
        <p style="font-size: 0.875rem; color: #64748b; margin: 0 0 1rem;">
          Emits
          <code style="background:#f1f5f9;padding:0.1em 0.35em;border-radius:0.25rem;font-size:0.8125rem;">&lt;script type="application/ld+json"&gt;</code>
          — no visual output. Preview shows the serialised JSON-LD object.
        </p>
        <pre style="background:#1e293b;color:#e2e8f0;padding:1rem;border-radius:0.375rem;font-size:0.8125rem;overflow-x:auto;margin:0;white-space:pre-wrap;">${json}</pre>
      </div>
    </div>
  `;
};

// ---------------------------------------------------------------------------
// Meta
// ---------------------------------------------------------------------------

const meta: Meta<StoryArgs> = {
  title: 'SEO/BreadcrumbSchema',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Emits a \`schema.org/BreadcrumbList\` JSON-LD block for SERP breadcrumb rich results.

**Key behaviours:**
- Accepts a typed \`BreadcrumbItem[]\` array — no free-form objects.
- Resolves relative \`href\` values to absolute URLs via \`baseUrl\` prop or \`Astro.site\`.
- Renders **nothing** when \`items\` is empty, preventing invalid structured data.
- \`position\` is set automatically (1-based index).
        `,
      },
    },
  },
  argTypes: {
    items: {
      control: 'object',
      description: 'Ordered breadcrumb steps — each needs `name` and `href`.',
    },
    baseUrl: {
      control: 'text',
      description: 'Base URL for resolving relative hrefs (defaults to Astro.site at runtime).',
    },
  },
};

export default meta;
type Story = StoryObj<StoryArgs>;

// ---------------------------------------------------------------------------
// Stories
// ---------------------------------------------------------------------------

/** Three-level breadcrumb typical of a service/leistungen page. */
export const ServicePage: Story = {
  name: 'Service page (3 levels)',
  args: {
    baseUrl: 'https://example.com',
    items: [
      { name: 'Home', href: '/' },
      { name: 'Leistungen', href: '/leistungen/' },
      { name: 'SEO-Beratung', href: '/leistungen/seo-beratung/' },
    ],
  },
  render: (args) => renderPreview(args),
};

/** Four-level breadcrumb for a blog post inside a category. */
export const BlogPost: Story = {
  name: 'Blog post (4 levels)',
  args: {
    baseUrl: 'https://example.com',
    items: [
      { name: 'Home', href: '/' },
      { name: 'Blog', href: '/blog/' },
      { name: 'SEO-Tipps', href: '/blog/kategorie/seo-tipps/' },
      { name: 'Was kostet SEO in Halle?', href: '/blog/was-kostet-seo-in-halle/' },
    ],
  },
  render: (args) => renderPreview(args),
};

/** Minimal two-level breadcrumb (home → current page). */
export const TwoLevels: Story = {
  name: 'Minimal (2 levels)',
  args: {
    baseUrl: 'https://example.com',
    items: [
      { name: 'Home', href: '/' },
      { name: 'Kontakt', href: '/kontakt/' },
    ],
  },
  render: (args) => renderPreview(args),
};

/** Already-absolute hrefs pass through unchanged. */
export const AbsoluteHrefs: Story = {
  name: 'Absolute hrefs (pass-through)',
  args: {
    baseUrl: 'https://example.com',
    items: [
      { name: 'Home', href: 'https://example.com/' },
      { name: 'Blog', href: 'https://example.com/blog/' },
      { name: 'Article', href: 'https://example.com/blog/article/' },
    ],
  },
  render: (args) => renderPreview(args),
};

/** Empty items array — component renders nothing (no invalid schema emitted). */
export const EmptyItems: Story = {
  name: 'Empty items (renders nothing)',
  args: {
    baseUrl: 'https://example.com',
    items: [],
  },
  render: (args) => renderPreview(args),
};
