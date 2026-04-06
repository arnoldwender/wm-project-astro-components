/**
 * Navigation Breadcrumbs Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Navigation/Breadcrumbs',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
SEO-optimized breadcrumb navigation with Schema.org BreadcrumbList JSON-LD.

**Features:**
- Three separator styles: chevron, slash, arrow
- Auto-prepends Home link when showHome is enabled
- Mobile-friendly truncation with ellipsis for intermediate items
- Dark mode support via prefers-color-scheme
- Schema.org structured data for rich snippets
        `,
      },
    },
  },
  argTypes: {
    separator: { control: 'select', options: ['chevron', 'slash', 'arrow'], description: 'Separator style between items' },
    showHome: { control: 'boolean', description: 'Auto-prepend Home link' },
  },
};

export default meta;
type Story = StoryObj;

const sepMap: Record<string, string> = { chevron: '\u203A', slash: '/', arrow: '\u2192' };

const renderBreadcrumbs = (args: Record<string, unknown>) => {
  const items = (args.items as Array<{ label: string; href?: string }>) || [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Category', href: '/products/category' },
    { label: 'Current Product' },
  ];
  const sep = sepMap[args.separator as string] || '\u203A';

  return html`
    <div style="padding: 2rem; font-family: system-ui, sans-serif;">
      <nav aria-label="Breadcrumb" style="padding: 0.75rem 1rem; background: #f8fafc; border-radius: 0.5rem; border: 1px solid #e2e8f0;">
        <ol style="display: flex; align-items: center; gap: 0.5rem; list-style: none; padding: 0; margin: 0; font-size: 0.875rem; flex-wrap: wrap;">
          ${items.map((item, i) => html`
            <li style="display: flex; align-items: center; gap: 0.5rem;">
              ${i > 0 ? html`<span style="color: #cbd5e1;">${sep}</span>` : ''}
              ${item.href
                ? html`<a href=${item.href} style="color: #64748b; text-decoration: none;">${item.label}</a>`
                : html`<span style="color: #1e293b; font-weight: 500;" aria-current="page">${item.label}</span>`
              }
            </li>
          `)}
        </ol>
      </nav>
    </div>
  `;
};

export const Default: Story = {
  args: {
    separator: 'chevron',
    showHome: true,
    items: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Category', href: '/products/category' },
      { label: 'Current Product' },
    ],
  },
  render: (args) => renderBreadcrumbs(args),
};

export const SlashSeparator: Story = {
  args: {
    separator: 'slash',
    showHome: false,
    items: [
      { label: 'Acme Corp', href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'Web Design' },
    ],
  },
  render: (args) => renderBreadcrumbs(args),
};

export const LongPath: Story = {
  args: {
    separator: 'arrow',
    showHome: true,
    items: [
      { label: 'Home', href: '/' },
      { label: 'Shop', href: '/shop' },
      { label: 'Elektronik', href: '/shop/elektronik' },
      { label: 'Computer', href: '/shop/elektronik/computer' },
      { label: 'Laptops', href: '/shop/elektronik/computer/laptops' },
      { label: 'MacBook Pro 16"' },
    ],
  },
  render: (args) => renderBreadcrumbs(args),
};
