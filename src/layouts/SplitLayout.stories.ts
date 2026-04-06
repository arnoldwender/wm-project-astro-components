/**
 * SplitLayout Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Layouts/SplitLayout',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Two-column split layout with flexible content and media placement.

**Features:**
- Reversible columns (content left/right)
- Seven ratio options (1:1, 1:2, 2:1, 3:2, etc.)
- Vertical alignment options (top, center, bottom, stretch)
- Sticky media option
- Full-bleed media on mobile
- Configurable background and min-height
        `,
      },
    },
  },
  argTypes: {
    reverse: { control: 'boolean', description: 'Reverse column order' },
    ratio: { control: 'select', options: ['1:1', '1:2', '2:1', '3:2', '2:3'], description: 'Column ratio' },
    verticalAlign: { control: 'select', options: ['top', 'center', 'bottom', 'stretch'], description: 'Vertical alignment' },
    gap: { control: 'select', options: ['none', 'sm', 'md', 'lg', 'xl'], description: 'Gap between columns' },
  },
};

export default meta;
type Story = StoryObj;

const renderSplitLayout = (args: Record<string, unknown>) => {
  const ratioMap: Record<string, string> = { '1:1': '1fr 1fr', '1:2': '1fr 2fr', '2:1': '2fr 1fr', '3:2': '3fr 2fr', '2:3': '2fr 3fr' };
  const gapMap: Record<string, string> = { none: '0', sm: '1rem', md: '2rem', lg: '3rem', xl: '4rem' };
  const alignMap: Record<string, string> = { top: 'start', center: 'center', bottom: 'end', stretch: 'stretch' };
  const cols = ratioMap[args.ratio as string] || '1fr 1fr';
  const gap = gapMap[args.gap as string] || '3rem';
  const align = alignMap[args.verticalAlign as string] || 'center';

  return html`
    <section style="display: grid; grid-template-columns: ${args.reverse ? cols.split(' ').reverse().join(' ') : cols}; gap: ${gap}; align-items: ${align}; padding: 3rem 2rem; font-family: system-ui, sans-serif;">
      <!-- Content -->
      <div style="padding: 2rem; ${args.reverse ? 'order: 2;' : ''}">
        <span style="font-size: 0.875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #3b82f6;">About Us</span>
        <h2 style="font-size: 2.25rem; font-weight: 700; margin: 0.75rem 0 1rem; line-height: 1.2;">Building the future of web development</h2>
        <p style="color: #64748b; line-height: 1.7; margin: 0 0 1.5rem;">We create modern, accessible websites that drive results for businesses of all sizes. Our approach combines cutting-edge technology with proven design principles.</p>
        <button style="padding: 0.875rem 2rem; background: #3b82f6; color: white; border: none; border-radius: 0.5rem; font-weight: 600; cursor: pointer;">Learn More</button>
      </div>

      <!-- Media -->
      <div style="background: #e2e8f0; border-radius: 1rem; min-height: 300px; ${args.verticalAlign === 'stretch' ? 'height: 100%;' : ''} display: flex; align-items: center; justify-content: center; color: #94a3b8; font-weight: 600; ${args.reverse ? 'order: 1;' : ''}">
        Media Slot
      </div>
    </section>
  `;
};

export const Default: Story = {
  args: { reverse: false, ratio: '1:1', verticalAlign: 'center', gap: 'lg' },
  render: (args) => renderSplitLayout(args),
};

export const Reversed: Story = {
  args: { reverse: true, ratio: '1:1', verticalAlign: 'center', gap: 'lg' },
  render: (args) => renderSplitLayout(args),
};

export const WideContent: Story = {
  args: { reverse: false, ratio: '2:1', verticalAlign: 'center', gap: 'xl' },
  render: (args) => renderSplitLayout(args),
};
