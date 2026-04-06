/**
 * BentoCard Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Layouts/BentoCard',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Individual card for the Bento Grid layout with multiple size and style options.

**Features:**
- Four size options (1x1, 2x1, 1x2, 2x2)
- Five visual variants: solid, gradient, glass, outline, image
- Named slots for icon, title, description
- Optional link mode with hover scale
- Decorative blur effects and hover gradient overlays
        `,
      },
    },
  },
  argTypes: {
    size: { control: 'select', options: ['1x1', '2x1', '1x2', '2x2'], description: 'Card grid size' },
    variant: { control: 'select', options: ['solid', 'gradient', 'glass', 'outline', 'image'], description: 'Visual variant' },
    color: { control: 'select', options: ['default', 'primary', 'secondary', 'accent'], description: 'Color scheme for gradient variant' },
    href: { control: 'text', description: 'Optional link URL' },
  },
};

export default meta;
type Story = StoryObj;

const renderBentoCard = (args: Record<string, unknown>) => {
  const variantStyles: Record<string, string> = {
    solid: 'background: #1f2937; border: 1px solid #374151;',
    gradient: 'background: linear-gradient(135deg, rgba(59,130,246,0.2), rgba(59,130,246,0.05)); border: 1px solid #374151;',
    glass: 'background: rgba(255,255,255,0.1); backdrop-filter: blur(24px); border: 1px solid rgba(255,255,255,0.2);',
    outline: 'background: transparent; border: 2px solid #374151;',
    image: 'background: url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'400\'%3E%3Crect fill=\'%23334155\' width=\'400\' height=\'400\'/%3E%3C/svg%3E") center/cover; border: 1px solid #374151;',
  };

  return html`
    <div style="padding: 2rem; background: #0f172a; min-height: 300px; display: flex; align-items: center; justify-content: center;">
      <div
        style="position: relative; overflow: hidden; border-radius: 1rem; padding: 1.5rem; width: 300px; min-height: 200px;
               transition: all 300ms; ${variantStyles[args.variant as string] || variantStyles.solid}
               ${args.href ? 'cursor: pointer;' : ''}"
      >
        ${args.variant === 'image' ? html`<div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2), transparent);"></div>` : ''}
        <div style="position: relative; z-index: 10; display: flex; flex-direction: column; height: 100%; ${args.variant === 'image' ? 'color: white; justify-content: flex-end;' : 'color: white;'}">
          <!-- Icon -->
          <div style="width: 3rem; height: 3rem; border-radius: 0.75rem; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;
                       background: rgba(59,130,246,0.1); color: #3b82f6;">
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
          <h3 style="font-weight: 600; font-size: ${args.size === '2x2' ? '1.5rem' : '1.125rem'}; margin: 0 0 0.5rem;">Feature Title</h3>
          <p style="color: rgba(255,255,255,0.7); font-size: 0.875rem; margin: 0;">Description of this bento card feature goes here.</p>
          ${args.href ? html`<div style="margin-top: 1rem; font-size: 0.875rem; font-weight: 500; color: #3b82f6;">Mehr erfahren &rarr;</div>` : ''}
        </div>
      </div>
    </div>
  `;
};

export const Solid: Story = {
  args: { size: '1x1', variant: 'solid', color: 'default' },
  render: (args) => renderBentoCard(args),
};

export const Gradient: Story = {
  args: { size: '2x2', variant: 'gradient', color: 'primary' },
  render: (args) => renderBentoCard(args),
};

export const Glass: Story = {
  args: { size: '2x1', variant: 'glass', color: 'default' },
  render: (args) => renderBentoCard(args),
};

export const WithLink: Story = {
  args: { size: '1x1', variant: 'solid', color: 'default', href: '/features' },
  render: (args) => renderBentoCard(args),
};
