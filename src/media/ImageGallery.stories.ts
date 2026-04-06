/**
 * ImageGallery Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Media/ImageGallery',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A responsive image gallery with lightbox support. Features include:
- Grid and masonry layout modes with 2-6 configurable columns
- Full-screen lightbox with keyboard and touch-swipe navigation
- Schema.org ImageGallery JSON-LD structured data
- Lazy loading with thumbnail support for faster initial load
- Responsive column reduction on smaller viewports
- Hover zoom effect with overlay icon
        `,
      },
    },
  },
  argTypes: {
    columns: { control: { type: 'range', min: 2, max: 6, step: 1 }, description: 'Number of columns' },
    gap: { control: 'select', options: ['sm', 'md', 'lg'], description: 'Gap between items' },
    lightbox: { control: 'boolean', description: 'Enable lightbox' },
    showCaptions: { control: 'boolean', description: 'Show image captions' },
    rounded: { control: 'boolean', description: 'Rounded corners' },
  },
};

export default meta;
type Story = StoryObj;

const placeholderColors = ['#e0e7ff', '#dbeafe', '#d1fae5', '#fef3c7', '#fce7f3', '#ede9fe'];

const renderImageGallery = (args: Record<string, unknown>) => html`
  <style>
    .ig { display: grid; grid-template-columns: repeat(${args.columns}, 1fr); gap: ${args.gap === 'sm' ? '0.5rem' : args.gap === 'lg' ? '1.5rem' : '1rem'}; width: 100%; padding: 1rem; font-family: system-ui, sans-serif; box-sizing: border-box; }
    .ig-item { margin: 0; overflow: hidden; ${args.rounded ? 'border-radius: 0.5rem;' : ''} }
    .ig-trigger { position: relative; display: block; width: 100%; aspect-ratio: 1; padding: 0; border: none; background: transparent; cursor: ${args.lightbox ? 'pointer' : 'default'}; overflow: hidden; }
    .ig-img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.3s; }
    .ig-trigger:hover .ig-img { transform: scale(1.05); }
    .ig-overlay { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.4); opacity: 0; transition: opacity 0.3s; }
    .ig-trigger:hover .ig-overlay { opacity: 1; }
    .ig-overlay svg { width: 2.5rem; height: 2.5rem; color: white; }
    .ig-caption { padding: 0.5rem; font-size: 0.875rem; color: #6b7280; text-align: center; }
  </style>
  <div class="ig">
    ${placeholderColors.map((color, i) => html`
      <figure class="ig-item">
        <button type="button" class="ig-trigger" ${args.lightbox ? '' : 'disabled'}>
          <div class="ig-img" style="background: ${color}; display: flex; align-items: center; justify-content: center; color: #6b7280; font-weight: 600; font-size: 1.25rem;">
            ${i + 1}
          </div>
          ${args.lightbox ? html`
            <div class="ig-overlay">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
              </svg>
            </div>
          ` : ''}
        </button>
        ${args.showCaptions ? html`<figcaption class="ig-caption">Image ${i + 1}</figcaption>` : ''}
      </figure>
    `)}
  </div>
`;

export const Default: Story = {
  args: { columns: 3, gap: 'md', lightbox: true, showCaptions: false, rounded: true },
  render: (args) => renderImageGallery(args),
};

export const WithCaptions: Story = {
  args: { columns: 3, gap: 'md', lightbox: true, showCaptions: true, rounded: true },
  render: (args) => renderImageGallery(args),
};

export const TwoColumns: Story = {
  args: { columns: 2, gap: 'lg', lightbox: true, showCaptions: false, rounded: false },
  render: (args) => renderImageGallery(args),
};
