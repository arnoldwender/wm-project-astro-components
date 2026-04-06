/**
 * PortfolioItem Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Layouts/PortfolioItem',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Individual portfolio/gallery item with hover effects for creative showcases.

**Features:**
- Five aspect ratio options: square, video, portrait, landscape, auto
- Hover overlay with title, category, description
- Lightbox mode with zoom cursor
- Filterable by category via data-category
- Hover lift animation with reduced-motion support
        `,
      },
    },
  },
  argTypes: {
    title: { control: 'text', description: 'Project title' },
    category: { control: 'text', description: 'Project category' },
    aspectRatio: { control: 'select', options: ['square', 'video', 'portrait', 'landscape'], description: 'Aspect ratio' },
    enableLightbox: { control: 'boolean', description: 'Enable lightbox mode' },
  },
};

export default meta;
type Story = StoryObj;

const renderPortfolioItem = (args: Record<string, unknown>) => {
  const aspectMap: Record<string, string> = { square: '1/1', video: '16/9', portrait: '3/4', landscape: '4/3' };
  const aspect = aspectMap[args.aspectRatio as string] || '1/1';

  return html`
    <div style="max-width: 400px; margin: 2rem auto;">
      <article style="position: relative; overflow: hidden; border-radius: 0.5rem; aspect-ratio: ${aspect}; background: #334155; cursor: pointer; transition: transform 300ms, box-shadow 300ms;"
               onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 20px 25px -5px rgba(0,0,0,0.1)'"
               onmouseout="this.style.transform=''; this.style.boxShadow=''">
        <!-- Overlay (shown on hover) -->
        <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2), transparent); opacity: 0; transition: opacity 300ms;"
             class="portfolio-overlay"
             onmouseover="this.style.opacity='1'"
             onmouseout="this.style.opacity='0'">
        </div>

        <!-- Content -->
        <div style="position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: flex-end; padding: 1.5rem; color: white;">
          ${args.category ? html`<span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: rgba(255,255,255,0.7); margin-bottom: 0.5rem;">${args.category}</span>` : ''}
          <h3 style="font-size: 1.25rem; font-weight: 600; margin: 0;">${args.title}</h3>
          ${args.description ? html`<p style="font-size: 0.875rem; color: rgba(255,255,255,0.8); margin: 0.25rem 0 0;">${args.description}</p>` : ''}
          <span style="display: inline-flex; align-items: center; gap: 0.25rem; font-size: 0.875rem; margin-top: 0.75rem; color: rgba(255,255,255,0.9);">
            ${args.enableLightbox ? 'Vergr\u00F6\u00DFern' : 'Projekt ansehen'} &rarr;
          </span>
        </div>
      </article>
    </div>
  `;
};

export const Default: Story = {
  args: { title: 'Acme Corp Rebrand', category: 'Branding', aspectRatio: 'landscape', description: 'Complete visual identity overhaul.', enableLightbox: false },
  render: (args) => renderPortfolioItem(args),
};

export const Square: Story = {
  args: { title: 'Product Photography', category: 'Photography', aspectRatio: 'square', enableLightbox: true },
  render: (args) => renderPortfolioItem(args),
};

export const Portrait: Story = {
  args: { title: 'Mobile App Design', category: 'UI/UX', aspectRatio: 'portrait', description: 'iOS app for fitness tracking.', enableLightbox: false },
  render: (args) => renderPortfolioItem(args),
};
