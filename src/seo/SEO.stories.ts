/**
 * SEO Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'SEO/SEO',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Drop-in <head> component rendering a complete set of SEO meta tags.

**Features:**
- Primary meta: title, description, robots, language, author, theme-color
- Open Graph: type, url, title, description, image, locale, site_name
- Twitter Cards: summary_large_image, creator, site handle
- Hreflang links for multilingual sites
- Canonical URL with automatic fallback
- noindex/nofollow toggles
- Structured data via JSON-LD
- Security headers: X-Content-Type-Options, X-Frame-Options, Referrer-Policy
        `,
      },
    },
  },
  argTypes: {
    title: { control: 'text', description: 'Page title' },
    description: { control: 'text', description: 'Meta description' },
    lang: { control: 'select', options: ['de', 'en', 'es'], description: 'Page language' },
    noindex: { control: 'boolean', description: 'Set noindex' },
  },
};

export default meta;
type Story = StoryObj;

const renderSEO = (args: Record<string, unknown>) => {
  const tags = [
    `<title>${args.title || 'Web Design'} | ${args.siteName || 'Acme Corp'}</title>`,
    `<meta name="description" content="${args.description || 'Professional web design.'}" />`,
    `<meta name="robots" content="${args.noindex ? 'noindex, nofollow' : 'index, follow'}" />`,
    `<meta property="og:title" content="${args.title || 'Web Design'}" />`,
    `<meta property="og:description" content="${args.description || 'Professional web design.'}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="${args.lang === 'en' ? 'en_US' : args.lang === 'es' ? 'es_ES' : 'de_DE'}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<link rel="canonical" href="https://example.com/services/web-design" />`,
  ];

  return html`
    <div style="padding: 2rem; font-family: system-ui, sans-serif;">
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.5rem; padding: 1.5rem; max-width: 48rem;">
        <h3 style="font-size: 1rem; font-weight: 600; margin: 0 0 1rem;">SEO Component Output</h3>
        <p style="font-size: 0.875rem; color: #64748b; margin: 0 0 1rem;">All-in-one <code>&lt;head&gt;</code> component. Place once inside your BaseLayout.</p>
        <pre style="background: #1e293b; color: #e2e8f0; padding: 1rem; border-radius: 0.375rem; font-size: 0.8125rem; overflow-x: auto; margin: 0; line-height: 1.8;">${tags.join('\n')}</pre>
      </div>
    </div>
  `;
};

export const Default: Story = {
  args: { title: 'Web Design Services', description: 'Professional web design for small businesses.', lang: 'de', noindex: false, siteName: 'Acme Corp' },
  render: (args) => renderSEO(args),
};

export const NoIndex: Story = {
  args: { title: 'Draft Article', description: 'This page is still in progress.', lang: 'en', noindex: true },
  render: (args) => renderSEO(args),
};
