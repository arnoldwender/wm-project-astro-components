/**
 * MagazineCard Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Layouts/MagazineCard',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Visual article card for magazine layouts with image backgrounds and overlay text.

**Features:**
- Four size presets (small, medium, large, hero)
- Gradient or solid overlay for text contrast
- Category badge with customizable color
- Author name and formatted date
- Hover zoom animation on background image
        `,
      },
    },
  },
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large', 'hero'], description: 'Card size preset' },
    overlay: { control: 'select', options: ['gradient', 'solid', 'none'], description: 'Overlay type' },
    title: { control: 'text', description: 'Article title' },
    category: { control: 'text', description: 'Category label' },
    author: { control: 'text', description: 'Author name' },
  },
};

export default meta;
type Story = StoryObj;

const renderMagazineCard = (args: Record<string, unknown>) => {
  const sizeAspects: Record<string, string> = { small: '4/3', medium: '4/3', large: '16/10', hero: '21/9' };
  const titleSizes: Record<string, string> = { small: '1.125rem', medium: '1.5rem', large: '1.875rem', hero: '2.5rem' };
  const aspect = sizeAspects[args.size as string] || '4/3';
  const titleSize = titleSizes[args.size as string] || '1.5rem';

  return html`
    <div style="max-width: 800px; margin: 2rem auto;">
      <article style="position: relative; overflow: hidden; border-radius: 0.75rem; aspect-ratio: ${aspect}; background: #334155;">
        <!-- Overlay -->
        ${args.overlay === 'gradient'
          ? html`<div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.3), transparent);"></div>`
          : args.overlay === 'solid'
          ? html`<div style="position: absolute; inset: 0; background: rgba(0,0,0,0.5);"></div>`
          : ''}

        <!-- Content -->
        <div style="position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: flex-end; padding: 1.5rem; color: white;">
          ${args.category ? html`<span style="display: inline-block; align-self: flex-start; padding: 0.25rem 0.5rem; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; background: #3b82f6; border-radius: 0.25rem; margin-bottom: 0.75rem;">${args.category}</span>` : ''}
          <h3 style="font-weight: 700; font-size: ${titleSize}; line-height: 1.2; margin: 0 0 0.5rem;">${args.title}</h3>
          ${args.size !== 'small' && args.excerpt ? html`<p style="color: rgba(255,255,255,0.8); font-size: 0.875rem; margin: 0;">${args.excerpt}</p>` : ''}
          <div style="display: flex; align-items: center; gap: 0.5rem; margin-top: 0.75rem; font-size: 0.875rem; color: rgba(255,255,255,0.7);">
            ${args.author ? html`<span>${args.author}</span>` : ''}
            ${args.author ? html`<span>&middot;</span>` : ''}
            <span>15. Mrz 2026</span>
          </div>
        </div>
      </article>
    </div>
  `;
};

export const HeroSize: Story = {
  args: { size: 'hero', overlay: 'gradient', title: 'How Digital Marketing Changed in 2026', category: 'Marketing', author: 'Jane Doe', excerpt: 'A deep dive into the latest trends.' },
  render: (args) => renderMagazineCard(args),
};

export const MediumSize: Story = {
  args: { size: 'medium', overlay: 'gradient', title: '5 Tips for Better Web Design', category: 'Design', author: 'John Smith' },
  render: (args) => renderMagazineCard(args),
};

export const SmallSize: Story = {
  args: { size: 'small', overlay: 'solid', title: 'Quick Update: New Feature', category: 'News' },
  render: (args) => renderMagazineCard(args),
};
