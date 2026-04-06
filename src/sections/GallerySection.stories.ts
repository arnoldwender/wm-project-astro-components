/**
 * GallerySection Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Sections/GallerySection',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Image gallery and portfolio showcase section.
- Six variants: grid, masonry, carousel, lightbox, filterable, featured
- Configurable columns (2-5) and gap sizes
- Category filter buttons for filterable variant
        `,
      },
    },
  },
  argTypes: {
    variant: { control: 'select', options: ['grid', 'masonry', 'carousel', 'lightbox', 'filterable', 'featured'], description: 'Layout variant' },
    columns: { control: 'select', options: [2, 3, 4, 5], description: 'Grid columns' },
    title: { control: 'text', description: 'Section title' },
  },
};

export default meta;
type Story = StoryObj;

const colors = ['#667eea,#764ba2', '#f093fb,#f5576c', '#4facfe,#00f2fe', '#43e97b,#38f9d7', '#fa709a,#fee140', '#a18cd1,#fbc2eb'];

const renderGallery = (args: Record<string, unknown>) => html`
  <section style="padding: 4rem 2rem;">
    <div style="max-width: 72rem; margin: 0 auto;">
      <div style="text-align: center; margin-bottom: 3rem;">
        <span style="font-size: 0.875rem; font-weight: 600; color: #3b82f6; text-transform: uppercase;">Portfolio</span>
        <h2 style="font-size: 2rem; font-weight: 700; color: #1e293b; margin: 0.5rem 0;">${args.title}</h2>
      </div>
      ${args.variant === 'filterable' ? html`
        <div style="display: flex; justify-content: center; gap: 0.5rem; margin-bottom: 2rem;">
          <button style="padding: 0.5rem 1rem; background: #3b82f6; color: #fff; border: none; border-radius: 9999px; font-size: 0.875rem; cursor: pointer;">All</button>
          <button style="padding: 0.5rem 1rem; background: #f1f5f9; color: #64748b; border: none; border-radius: 9999px; font-size: 0.875rem; cursor: pointer;">Web Design</button>
          <button style="padding: 0.5rem 1rem; background: #f1f5f9; color: #64748b; border: none; border-radius: 9999px; font-size: 0.875rem; cursor: pointer;">Branding</button>
        </div>
      ` : ''}
      <div style="display: grid; grid-template-columns: repeat(${args.columns}, 1fr); gap: 1rem;">
        ${colors.map((c, i) => html`
          <div style="position: relative; overflow: hidden; border-radius: 0.5rem; aspect-ratio: 1;">
            <div style="width: 100%; height: 100%; background: linear-gradient(135deg, ${c});"></div>
            <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.6), transparent); opacity: 0; transition: opacity 0.2s; display: flex; flex-direction: column; justify-content: flex-end; padding: 1rem;">
              <h3 style="font-size: 0.875rem; color: #fff; font-weight: 600; margin: 0;">Project ${i + 1}</h3>
            </div>
          </div>
        `)}
      </div>
    </div>
  </section>
`;

export const Grid: Story = {
  args: { variant: 'grid', columns: 3, title: 'Our Work' },
  render: (args) => renderGallery(args),
};

export const Filterable: Story = {
  args: { variant: 'filterable', columns: 3, title: 'Portfolio' },
  render: (args) => renderGallery(args),
};
