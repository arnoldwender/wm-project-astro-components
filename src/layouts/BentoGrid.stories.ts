/**
 * BentoGrid Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Layouts/BentoGrid',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Modern asymmetric grid layout inspired by Apple's Bento design.

**Features:**
- Pre-defined cell sizes (1x1, 2x1, 1x2, 2x2)
- Configurable columns (2, 3, or 4)
- Responsive grid adaptation
- Gap size options (sm, md, lg)
- Dark mode optimized
        `,
      },
    },
  },
  argTypes: {
    columns: { control: 'select', options: [2, 3, 4], description: 'Number of grid columns' },
    gap: { control: 'select', options: ['sm', 'md', 'lg'], description: 'Gap between grid cells' },
  },
};

export default meta;
type Story = StoryObj;

const cardStyle = 'background: #1f2937; border: 1px solid #374151; border-radius: 1rem; padding: 1.5rem; display: flex; align-items: center; justify-content: center; color: white; font-weight: 600;';

const renderBentoGrid = (args: Record<string, unknown>) => {
  const gapMap: Record<string, string> = { sm: '0.75rem', md: '1rem', lg: '1.5rem' };
  const gap = gapMap[args.gap as string] || '1rem';
  const cols = args.columns || 4;

  return html`
    <div style="padding: 2rem; background: #0f172a;">
      <div style="display: grid; grid-template-columns: repeat(${cols}, 1fr); grid-auto-rows: minmax(180px, auto); gap: ${gap};">
        <div style="${cardStyle} grid-column: span 2; grid-row: span 2; min-height: 380px;">2x2 Card</div>
        <div style="${cardStyle}">1x1 Card</div>
        <div style="${cardStyle}">1x1 Card</div>
        <div style="${cardStyle} grid-column: span 2;">2x1 Card</div>
        <div style="${cardStyle} grid-row: span 2;">1x2 Card</div>
        <div style="${cardStyle}">1x1 Card</div>
        <div style="${cardStyle}">1x1 Card</div>
        <div style="${cardStyle}">1x1 Card</div>
      </div>
    </div>
  `;
};

export const FourColumns: Story = {
  args: { columns: 4, gap: 'md' },
  render: (args) => renderBentoGrid(args),
};

export const ThreeColumns: Story = {
  args: { columns: 3, gap: 'md' },
  render: (args) => renderBentoGrid(args),
};

export const TwoColumnsLargeGap: Story = {
  args: { columns: 2, gap: 'lg' },
  render: (args) => renderBentoGrid(args),
};
