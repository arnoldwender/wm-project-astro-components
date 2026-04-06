/**
 * PortfolioLayout Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Layouts/PortfolioLayout',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Showcase grid for creative work with lightbox and filtering support.

**Features:**
- Four variants: grid, masonry, justified, featured
- Category filtering with tablist
- Lightbox integration with keyboard navigation
- Configurable columns (2-5) and gap sizes
- Responsive with lazy loading
        `,
      },
    },
  },
  argTypes: {
    variant: { control: 'select', options: ['grid', 'masonry', 'justified', 'featured'], description: 'Grid variant' },
    columns: { control: 'select', options: [2, 3, 4, 5], description: 'Number of columns' },
    gap: { control: 'select', options: ['none', 'sm', 'md', 'lg'], description: 'Gap size' },
    showFilter: { control: 'boolean', description: 'Show category filter bar' },
  },
};

export default meta;
type Story = StoryObj;

const renderPortfolioLayout = (args: Record<string, unknown>) => {
  const gapMap: Record<string, string> = { none: '0', sm: '0.5rem', md: '1rem', lg: '1.5rem' };
  const gap = gapMap[args.gap as string] || '1rem';
  const cols = args.columns || 3;
  const categories = ['Alle', 'Branding', 'Web Design', 'Photography'];
  const items = [
    { title: 'Project Alpha', cat: 'Branding' },
    { title: 'Project Beta', cat: 'Web Design' },
    { title: 'Project Gamma', cat: 'Photography' },
    { title: 'Project Delta', cat: 'Branding' },
    { title: 'Project Epsilon', cat: 'Web Design' },
    { title: 'Project Zeta', cat: 'Photography' },
  ];

  return html`
    <div style="padding: 2rem; font-family: system-ui, sans-serif;">
      <!-- Filter Bar -->
      ${args.showFilter ? html`
        <nav style="display: flex; gap: 0.5rem; margin-bottom: 2rem;">
          ${categories.map((cat, i) => html`
            <button style="padding: 0.5rem 1rem; font-size: 0.875rem; font-weight: 500; border-radius: 9999px; border: none; cursor: pointer;
                           ${i === 0 ? 'background: #3b82f6; color: white;' : 'background: #f1f5f9; color: #64748b;'}">${cat}</button>
          `)}
        </nav>
      ` : ''}

      <!-- Grid -->
      <div style="display: grid; grid-template-columns: repeat(${cols}, 1fr); gap: ${gap};">
        ${items.map((item) => html`
          <article style="position: relative; overflow: hidden; border-radius: 0.5rem; aspect-ratio: 1/1; background: #334155;">
            <div style="position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: flex-end; padding: 1rem; color: white; background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);">
              <span style="font-size: 0.75rem; text-transform: uppercase; color: rgba(255,255,255,0.7); margin-bottom: 0.25rem;">${item.cat}</span>
              <h3 style="font-weight: 600; margin: 0; font-size: 1rem;">${item.title}</h3>
            </div>
          </article>
        `)}
      </div>
    </div>
  `;
};

export const GridWithFilter: Story = {
  args: { variant: 'grid', columns: 3, gap: 'md', showFilter: true },
  render: (args) => renderPortfolioLayout(args),
};

export const FourColumns: Story = {
  args: { variant: 'grid', columns: 4, gap: 'sm', showFilter: false },
  render: (args) => renderPortfolioLayout(args),
};

export const TwoColumnsLargeGap: Story = {
  args: { variant: 'grid', columns: 2, gap: 'lg', showFilter: true },
  render: (args) => renderPortfolioLayout(args),
};
