/**
 * MagazineLayout Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Layouts/MagazineLayout',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Editorial-style grid layout for visual storytelling, inspired by modern digital magazines.

**Features:**
- Five variants: editorial, grid, masonry, featured-left, featured-right
- Dynamic grid with featured articles
- Visual hierarchy with varied card sizes
- Category color coding
- Responsive masonry-like layout
        `,
      },
    },
  },
  argTypes: {
    variant: { control: 'select', options: ['editorial', 'grid', 'masonry', 'featured-left', 'featured-right'], description: 'Layout variant' },
    columns: { control: 'select', options: [2, 3, 4], description: 'Grid columns' },
    gap: { control: 'select', options: ['sm', 'md', 'lg'], description: 'Gap size' },
  },
};

export default meta;
type Story = StoryObj;

const cardHtml = (title: string, h: string = '200px') => html`
  <div style="position: relative; overflow: hidden; border-radius: 0.75rem; height: ${h}; background: #334155;">
    <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);"></div>
    <div style="position: absolute; bottom: 0; left: 0; right: 0; padding: 1rem; color: white;">
      <h3 style="font-weight: 600; margin: 0; font-size: 1rem;">${title}</h3>
    </div>
  </div>
`;

const renderMagazineLayout = (args: Record<string, unknown>) => {
  const gapMap: Record<string, string> = { sm: '1rem', md: '1.5rem', lg: '2rem' };
  const gap = gapMap[args.gap as string] || '1.5rem';

  if (args.variant === 'editorial') {
    return html`
      <div style="padding: 2rem; font-family: system-ui, sans-serif;">
        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: ${gap};">
          <div style="grid-row: span 2;">${cardHtml('Featured Article', '420px')}</div>
          ${cardHtml('Secondary Article 1', '200px')}
          ${cardHtml('Secondary Article 2', '200px')}
        </div>
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: ${gap}; margin-top: ${gap};">
          ${[1, 2, 3, 4].map((i) => cardHtml(`Article ${i}`, '180px'))}
        </div>
      </div>
    `;
  }

  return html`
    <div style="padding: 2rem; font-family: system-ui, sans-serif;">
      <div style="display: grid; grid-template-columns: repeat(${args.columns || 3}, 1fr); gap: ${gap};">
        ${[1, 2, 3, 4, 5, 6].map((i) => cardHtml(`Article ${i}`, '200px'))}
      </div>
    </div>
  `;
};

export const Editorial: Story = {
  args: { variant: 'editorial', columns: 3, gap: 'md' },
  render: (args) => renderMagazineLayout(args),
};

export const Grid: Story = {
  args: { variant: 'grid', columns: 3, gap: 'md' },
  render: (args) => renderMagazineLayout(args),
};

export const FeaturedLeft: Story = {
  args: { variant: 'featured-left', columns: 2, gap: 'md' },
  render: (args) => renderMagazineLayout(args),
};
