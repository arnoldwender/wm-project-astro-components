/**
 * RelatedContent Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Content/RelatedContent',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Internal linking grid for SEO topic clustering.

Features:
- Grid of related content cards with title, description, category badge, and icon
- Three display variants (cards, list, minimal)
- Configurable column count (2, 3, or 4)
- Schema.org ItemList structured data for SEO
- Dark mode support
- Fully accessible with semantic HTML
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['cards', 'list', 'minimal'],
      description: 'Display variant',
    },
    columns: {
      control: { type: 'select' },
      options: [2, 3, 4],
      description: 'Number of grid columns',
    },
    heading: {
      control: 'text',
      description: 'Section heading text',
    },
  },
};

export default meta;
type Story = StoryObj;

/* Shared demo items */
const demoItems = [
  { title: 'Getting Started Guide', description: 'Learn the basics of our platform and set up your first project.', href: '/guides/start', category: 'Guide', icon: '📖' },
  { title: 'Advanced Configuration', description: 'Deep dive into advanced settings and customization options.', href: '/guides/advanced', category: 'Tutorial', icon: '⚙️' },
  { title: 'API Reference', description: 'Complete API documentation with examples and best practices.', href: '/docs/api', category: 'Reference', icon: '📚' },
  { title: 'Deployment Guide', description: 'Deploy your application to production with confidence.', href: '/guides/deploy', category: 'Guide', icon: '🚀' },
  { title: 'Security Best Practices', description: 'Protect your application with security hardening tips.', href: '/guides/security', category: 'Security', icon: '🔒' },
  { title: 'Performance Tuning', description: 'Optimize your application for speed and efficiency.', href: '/guides/performance', category: 'Tutorial', icon: '⚡' },
];

const renderCards = (items: typeof demoItems, variant: string, columns: number, heading: string) => {
  const isCards = variant === 'cards';
  const isList = variant === 'list';

  const gridCols = columns === 2 ? 'repeat(2, 1fr)' : columns === 4 ? 'repeat(4, 1fr)' : 'repeat(3, 1fr)';

  return html`
    <style>
      .rc-demo { font-family: system-ui, -apple-system, sans-serif; max-width: 900px; }
      .rc-heading { font-size: 1.5rem; font-weight: 700; color: #1a1a2e; margin-bottom: 1.5rem; }
      .rc-grid { display: grid; grid-template-columns: ${isList ? '1fr' : gridCols}; gap: 1rem; }
      .rc-card {
        display: flex; flex-direction: ${isList ? 'row' : 'column'}; gap: 0.5rem;
        padding: ${isCards ? '1.5rem' : isList ? '1rem 1.5rem' : '0.5rem 1rem'};
        background: #fff; border-radius: ${isCards ? '1rem' : '0.5rem'};
        ${isCards ? 'border: 1px solid #e2e8f0;' : isList ? 'border-bottom: 1px solid #e2e8f0;' : ''}
        text-decoration: none; color: inherit; align-items: ${isList ? 'center' : 'stretch'};
        transition: box-shadow 0.3s ease, border-color 0.3s ease;
      }
      .rc-card:hover { ${isCards ? 'box-shadow: 0 4px 6px rgba(0,0,0,0.1); border-color: #3b82f6;' : 'background: #f8fafc;'} }
      .rc-badge { display: inline-block; font-size: 0.75rem; font-weight: 500; color: #3b82f6; background: #eff6ff; padding: 0.25rem 0.5rem; border-radius: 9999px; width: fit-content; }
      .rc-title { font-size: 1rem; font-weight: 700; color: #1a1a2e; margin: 0; display: flex; align-items: center; gap: 0.25rem; }
      .rc-desc { font-size: 0.875rem; color: #64748b; margin: 0; line-height: 1.5; ${isList ? 'flex: 1;' : ''} }
      .rc-arrow { color: #64748b; margin-left: auto; flex-shrink: 0; transition: transform 0.15s ease; }
      .rc-card:hover .rc-arrow { transform: translateX(4px); color: #3b82f6; }
    </style>
    <div class="rc-demo">
      <h2 class="rc-heading">${heading}</h2>
      <div class="rc-grid">
        ${items.map(item => html`
          <a href="#" class="rc-card" @click=${(e: Event) => e.preventDefault()}>
            <span class="rc-badge">${item.category}</span>
            <h3 class="rc-title">
              ${item.icon ? html`<span>${item.icon}</span>` : ''}
              <span>${item.title}</span>
            </h3>
            ${variant !== 'minimal' ? html`<p class="rc-desc">${item.description}</p>` : ''}
            <span class="rc-arrow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </a>
        `)}
      </div>
    </div>
  `;
};

export const Default: Story = {
  args: { variant: 'cards', columns: 3, heading: 'Related Articles' },
  render: (args) => renderCards(demoItems, args.variant as string, args.columns as number, args.heading as string),
};

export const ListVariant: Story = {
  render: () => renderCards(demoItems.slice(0, 4), 'list', 1, 'Related Topics'),
};

export const MinimalVariant: Story = {
  render: () => renderCards(demoItems.slice(0, 4), 'minimal', 2, 'See Also'),
};

export const TwoColumns: Story = {
  render: () => renderCards(demoItems.slice(0, 4), 'cards', 2, 'Related Guides'),
};

export const FourColumns: Story = {
  render: () => renderCards(demoItems.slice(0, 4), 'cards', 4, 'Explore More'),
};
