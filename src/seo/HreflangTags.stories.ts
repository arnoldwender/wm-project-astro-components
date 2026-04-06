/**
 * HreflangTags Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'SEO/HreflangTags',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Generate hreflang tags for multilingual SEO. Helps search engines serve the correct language version.

**Features:**
- Generates <link rel="alternate"> per locale
- Automatically adds x-default tag for the default locale
- Works with subdomain, subdirectory, or separate-domain strategies
        `,
      },
    },
  },
  argTypes: {
    currentLocale: { control: 'text', description: 'Current page locale' },
    defaultLocale: { control: 'text', description: 'Default locale for x-default' },
  },
};

export default meta;
type Story = StoryObj;

const renderHreflang = (args: Record<string, unknown>) => {
  const locales = (args.locales as Array<{ lang: string; url: string }>) || [
    { lang: 'de', url: 'https://example.com/de/seite' },
    { lang: 'en', url: 'https://example.com/en/page' },
  ];

  return html`
    <div style="padding: 2rem; font-family: system-ui, sans-serif;">
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.5rem; padding: 1.5rem; max-width: 48rem;">
        <h3 style="font-size: 1rem; font-weight: 600; margin: 0 0 1rem;">HreflangTags (Head Meta)</h3>
        <p style="font-size: 0.875rem; color: #64748b; margin: 0 0 1rem;">Current locale: <strong>${args.currentLocale}</strong></p>
        <pre style="background: #1e293b; color: #e2e8f0; padding: 1rem; border-radius: 0.375rem; font-size: 0.8125rem; overflow-x: auto; margin: 0; line-height: 1.8;">
${locales.map((l) => `&lt;link rel="alternate" hreflang="${l.lang}" href="${l.url}" /&gt;`).join('\n')}
&lt;link rel="alternate" hreflang="x-default" href="${locales.find((l) => l.lang === args.defaultLocale)?.url || locales[0]?.url}" /&gt;</pre>
      </div>
    </div>
  `;
};

export const Bilingual: Story = {
  args: {
    currentLocale: 'de',
    defaultLocale: 'de',
    locales: [
      { lang: 'de', url: 'https://example.com/de/seite' },
      { lang: 'en', url: 'https://example.com/en/page' },
    ],
  },
  render: (args) => renderHreflang(args),
};

export const Trilingual: Story = {
  args: {
    currentLocale: 'en',
    defaultLocale: 'en',
    locales: [
      { lang: 'en', url: 'https://example.com/about' },
      { lang: 'de', url: 'https://example.de/ueber-uns' },
      { lang: 'es', url: 'https://example.es/sobre-nosotros' },
    ],
  },
  render: (args) => renderHreflang(args),
};
