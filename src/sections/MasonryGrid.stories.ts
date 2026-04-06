/**
 * MasonryGrid Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Sections/MasonryGrid',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Pinterest-style masonry layout for mixed-height content. Features:
- CSS columns-based masonry (no JavaScript required)
- Configurable column count (2-5) and gap sizes
- Responsive breakpoints collapse to 2 columns on tablet, 1 on mobile
        `,
      },
    },
  },
  argTypes: {
    columns: { control: { type: 'range', min: 2, max: 5 }, description: 'Number of columns' },
    gap: { control: 'select', options: ['none', 'sm', 'md', 'lg', 'xl'], description: 'Gap size' },
  },
};

export default meta;
type Story = StoryObj;

const cardColors = ['#e0f2fe', '#fce7f3', '#dcfce7', '#fef3c7', '#ede9fe', '#fee2e2'];
const cardHeights = [120, 200, 160, 240, 180, 140, 220, 150];

const renderMasonry = (args: Record<string, unknown>) => html`
  <div style="columns:${args.columns};column-gap:${args.gap === 'sm' ? '0.5rem' : args.gap === 'lg' ? '1.5rem' : '1rem'};padding:2rem;font-family:system-ui,sans-serif;">
    ${cardHeights.map((h, i) => html`
      <div style="break-inside:avoid;margin-bottom:1rem;background:${cardColors[i % cardColors.length]};border-radius:0.75rem;padding:1.5rem;height:${h}px;display:flex;align-items:center;justify-content:center;">
        <span style="font-weight:600;color:#334155;">Card ${i + 1}</span>
      </div>
    `)}
  </div>
`;

export const Default: Story = {
  args: { columns: 3, gap: 'md' },
  render: (args) => renderMasonry(args),
};

export const FourColumns: Story = {
  args: { columns: 4, gap: 'lg' },
  render: (args) => renderMasonry(args),
};
