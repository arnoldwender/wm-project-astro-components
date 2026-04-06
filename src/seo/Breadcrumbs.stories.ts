/**
 * SEO Breadcrumbs Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'SEO/Breadcrumbs',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Accessible breadcrumb navigation with inline Schema.org BreadcrumbList structured data.

**Features:**
- Dual structured data: microdata attributes and JSON-LD script block
- Three separator styles: chevron, slash, arrow
- aria-current="page" on the last item
- Keyboard-focusable links with visible focus ring
- Automatically hides with fewer than 2 items
        `,
      },
    },
  },
  argTypes: {
    separator: { control: 'select', options: ['chevron', 'slash', 'arrow'], description: 'Separator style' },
  },
};

export default meta;
type Story = StoryObj;

const separatorMap: Record<string, string> = { chevron: '\u203A', slash: '/', arrow: '\u2192' };

const renderBreadcrumbs = (args: Record<string, unknown>) => {
  const items = (args.items as Array<{ name: string; url: string }>) || [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Web Design', url: '/services/web-design' },
  ];
  const sep = separatorMap[args.separator as string] || '\u203A';

  return html`
    <div style="padding: 2rem; font-family: system-ui, sans-serif;">
      <nav aria-label="Breadcrumb">
        <ol style="display: flex; align-items: center; gap: 0.5rem; list-style: none; padding: 0; margin: 0; font-size: 0.875rem;">
          ${items.map((item, i) => html`
            <li style="display: flex; align-items: center; gap: 0.5rem;">
              ${i > 0 ? html`<span style="color: #9ca3af;">${sep}</span>` : ''}
              ${i < items.length - 1
                ? html`<a href=${item.url} style="color: #64748b; text-decoration: none; transition: color 150ms;" onmouseover="this.style.color='#1e293b'" onmouseout="this.style.color='#64748b'">${item.name}</a>`
                : html`<span style="color: #1e293b; font-weight: 500;" aria-current="page">${item.name}</span>`
              }
            </li>
          `)}
        </ol>
      </nav>
    </div>
  `;
};

export const Chevron: Story = {
  args: { separator: 'chevron', items: [{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }, { name: 'Web Design', url: '/services/web-design' }] },
  render: (args) => renderBreadcrumbs(args),
};

export const Slash: Story = {
  args: { separator: 'slash', items: [{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'My Article', url: '/blog/my-article' }] },
  render: (args) => renderBreadcrumbs(args),
};

export const Arrow: Story = {
  args: { separator: 'arrow', items: [{ name: 'Startseite', url: '/' }, { name: 'Produkte', url: '/produkte' }, { name: 'Kategorie', url: '/produkte/kategorie' }, { name: 'Artikel', url: '/produkte/kategorie/artikel' }] },
  render: (args) => renderBreadcrumbs(args),
};
