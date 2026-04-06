/**
 * RichSnippets Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'SEO/RichSnippets',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
All-in-one Schema.org JSON-LD generator for seven content types.

**Supported types:**
- service, product, article, faq, review, organization, localBusiness

**Features:**
- Single component for all rich-result types
- Deep cleaning: recursively removes undefined values
- AggregateRating support on services and products
- Proper @context / @type wrappers
        `,
      },
    },
  },
  argTypes: {
    type: { control: 'select', options: ['service', 'product', 'article', 'faq', 'review', 'organization', 'localBusiness'], description: 'Rich snippet type' },
  },
};

export default meta;
type Story = StoryObj;

const renderRichSnippets = (args: Record<string, unknown>) => {
  const samples: Record<string, object> = {
    localBusiness: { '@type': 'LocalBusiness', name: 'Acme Web Studio', url: 'https://example.com', telephone: '+49 345 12345', address: { '@type': 'PostalAddress', streetAddress: '123 Main St', addressLocality: 'Halle', postalCode: '06108', addressCountry: 'DE' }, openingHoursSpecification: { dayOfWeek: 'Monday-Friday', opens: '09:00', closes: '17:00' }, priceRange: '$$' },
    faq: { '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: 'What services do you offer?', acceptedAnswer: { '@type': 'Answer', text: 'We offer web design, SEO, and hosting.' } }, { '@type': 'Question', name: 'Where are you located?', acceptedAnswer: { '@type': 'Answer', text: 'Halle (Saale), Germany.' } }] },
    product: { '@type': 'Product', name: 'Widget Pro', offers: { '@type': 'Offer', price: '49.99', priceCurrency: 'EUR', availability: 'https://schema.org/InStock' }, aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.5', reviewCount: '42' } },
    service: { '@type': 'Service', name: 'Web Design Service', provider: { '@type': 'Organization', name: 'Acme Corp' }, areaServed: 'Halle (Saale)' },
    article: { '@type': 'Article', headline: 'SEO Best Practices 2026', author: { '@type': 'Person', name: 'Jane Doe' }, datePublished: '2026-03-15' },
    review: { '@type': 'Review', itemReviewed: { '@type': 'Product', name: 'Widget Pro' }, author: { '@type': 'Person', name: 'John Smith' }, reviewRating: { '@type': 'Rating', ratingValue: '5' } },
    organization: { '@type': 'Organization', name: 'Acme Corp', url: 'https://example.com', logo: 'https://example.com/logo.png' },
  };

  const schema = { '@context': 'https://schema.org', ...samples[args.type as string] || samples.localBusiness };

  return html`
    <div style="padding: 2rem; font-family: system-ui, sans-serif;">
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.5rem; padding: 1.5rem; max-width: 48rem;">
        <h3 style="font-size: 1rem; font-weight: 600; margin: 0 0 1rem;">Rich Snippet: ${args.type}</h3>
        <pre style="background: #1e293b; color: #e2e8f0; padding: 1rem; border-radius: 0.375rem; font-size: 0.8125rem; overflow-x: auto; margin: 0; white-space: pre-wrap;">${JSON.stringify(schema, null, 2)}</pre>
      </div>
    </div>
  `;
};

export const LocalBusiness: Story = {
  args: { type: 'localBusiness' },
  render: (args) => renderRichSnippets(args),
};

export const FAQ: Story = {
  args: { type: 'faq' },
  render: (args) => renderRichSnippets(args),
};

export const Product: Story = {
  args: { type: 'product' },
  render: (args) => renderRichSnippets(args),
};
