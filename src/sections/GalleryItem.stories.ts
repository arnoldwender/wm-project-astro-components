/**
 * GalleryItem Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Sections/GalleryItem',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Individual gallery/portfolio item with lightbox support.
- Four variants: default, overlay, card, minimal
- Configurable aspect ratios: square, landscape, portrait, auto
- Lightbox and linked modes with hover effects
        `,
      },
    },
  },
  argTypes: {
    title: { control: 'text', description: 'Item title' },
    category: { control: 'text', description: 'Item category' },
    variant: { control: 'select', options: ['default', 'overlay', 'card', 'minimal'], description: 'Display variant' },
    aspectRatio: { control: 'select', options: ['square', 'landscape', 'portrait', 'auto'], description: 'Aspect ratio' },
  },
};

export default meta;
type Story = StoryObj;

const renderGalleryItem = (args: Record<string, unknown>) => html`
  <div style="padding: 2rem; max-width: 20rem;">
    <div style="position: relative; overflow: hidden; border-radius: ${args.variant === 'card' ? '0.75rem' : '0.5rem'}; ${args.variant === 'card' ? 'background: #fff; border: 1px solid #e2e8f0; box-shadow: 0 1px 3px rgba(0,0,0,0.05);' : ''}">
      <div style="aspect-ratio: ${args.aspectRatio === 'square' ? '1' : args.aspectRatio === 'landscape' ? '16/10' : args.aspectRatio === 'portrait' ? '3/4' : 'auto'}; background: linear-gradient(135deg, #667eea, #764ba2); ${args.aspectRatio === 'auto' ? 'min-height: 200px;' : ''} position: relative;">
        ${args.variant === 'overlay' ? html`
          <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.7), transparent); display: flex; flex-direction: column; justify-content: flex-end; padding: 1rem;">
            <span style="font-size: 0.75rem; color: rgba(255,255,255,0.8); margin-bottom: 0.25rem;">${args.category}</span>
            <h3 style="font-size: 1rem; font-weight: 600; color: #fff; margin: 0;">${args.title}</h3>
          </div>
        ` : ''}
      </div>
      ${args.variant === 'card' ? html`
        <div style="padding: 1rem;">
          <span style="font-size: 0.75rem; color: #3b82f6; font-weight: 500;">${args.category}</span>
          <h3 style="font-size: 0.875rem; font-weight: 600; color: #1e293b; margin: 0.25rem 0 0;">${args.title}</h3>
        </div>
      ` : args.variant !== 'overlay' ? html`
        <div style="padding: 0.75rem 0 0;">
          <span style="font-size: 0.75rem; color: #64748b;">${args.category}</span>
          <h3 style="font-size: 0.875rem; font-weight: 600; color: #1e293b; margin: 0.125rem 0 0;">${args.title}</h3>
        </div>
      ` : ''}
    </div>
  </div>
`;

export const Default: Story = {
  args: { title: 'Acme Corp Redesign', category: 'Web Design', variant: 'default', aspectRatio: 'landscape' },
  render: (args) => renderGalleryItem(args),
};

export const Overlay: Story = {
  args: { title: 'Brand Identity', category: 'Branding', variant: 'overlay', aspectRatio: 'square' },
  render: (args) => renderGalleryItem(args),
};

export const Card: Story = {
  args: { title: 'Product Photography', category: 'Photography', variant: 'card', aspectRatio: 'landscape' },
  render: (args) => renderGalleryItem(args),
};
