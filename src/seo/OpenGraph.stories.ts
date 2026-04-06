/**
 * OpenGraph Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'SEO/OpenGraph',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Complete Open Graph meta tags for social media sharing.

**Features:**
- Supports website, article, product, and profile OG types
- Article meta: published/modified times, authors, section, tags
- Product meta: price, currency, availability
- Profile meta: first/last name, username
- Automatic absolute-URL resolution for images
        `,
      },
    },
  },
  argTypes: {
    title: { control: 'text', description: 'OG title' },
    description: { control: 'text', description: 'OG description' },
    type: { control: 'select', options: ['website', 'article', 'product', 'profile'], description: 'OG type' },
    locale: { control: 'text', description: 'OG locale (e.g. de_DE)' },
  },
};

export default meta;
type Story = StoryObj;

const renderOpenGraph = (args: Record<string, unknown>) => {
  const tags = [
    { property: 'og:type', content: args.type || 'website' },
    { property: 'og:title', content: args.title || 'Acme Corp' },
    { property: 'og:description', content: args.description || 'Professional web design services.' },
    { property: 'og:image', content: '/images/og-default.jpg' },
    { property: 'og:locale', content: args.locale || 'de_DE' },
    { property: 'og:site_name', content: args.siteName || 'Acme Corp' },
  ];

  return html`
    <div style="padding: 2rem; font-family: system-ui, sans-serif;">
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.5rem; padding: 1.5rem; max-width: 48rem;">
        <h3 style="font-size: 1rem; font-weight: 600; margin: 0 0 1rem;">Open Graph Tags</h3>

        <!-- Social Preview -->
        <div style="border: 1px solid #e2e8f0; border-radius: 0.5rem; overflow: hidden; margin-bottom: 1.5rem; max-width: 32rem;">
          <div style="aspect-ratio: 1200/630; background: #334155; display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,0.5); font-size: 0.875rem;">1200 x 630 OG Image</div>
          <div style="padding: 0.75rem; background: white;">
            <div style="font-size: 0.75rem; color: #9ca3af; text-transform: uppercase;">example.com</div>
            <div style="font-weight: 600; margin: 0.25rem 0;">${args.title || 'Acme Corp'}</div>
            <div style="font-size: 0.875rem; color: #64748b;">${args.description || 'Professional web design services.'}</div>
          </div>
        </div>

        <pre style="background: #1e293b; color: #e2e8f0; padding: 1rem; border-radius: 0.375rem; font-size: 0.8125rem; overflow-x: auto; margin: 0; line-height: 1.8;">
${tags.map((t) => `&lt;meta property="${t.property}" content="${t.content}" /&gt;`).join('\n')}</pre>
      </div>
    </div>
  `;
};

export const Website: Story = {
  args: { title: 'Acme Corp - Web Design', description: 'Professional web design services.', type: 'website', locale: 'de_DE' },
  render: (args) => renderOpenGraph(args),
};

export const Article: Story = {
  args: { title: '10 Tips for Better SEO', description: 'Learn actionable SEO strategies for 2026.', type: 'article', locale: 'de_DE' },
  render: (args) => renderOpenGraph(args),
};
