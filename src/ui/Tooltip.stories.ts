/**
 * Tooltip Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'UI/Tooltip',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Accessible tooltip with smart positioning and rich content support.

Features:
- Auto-positioning (flips when near viewport edges)
- Four placements (top, bottom, left, right)
- Configurable show/hide delay
- Rich HTML content support via slot
- Arrow pointer indicator
- Keyboard accessible (focus triggers tooltip)
- Touch device support (tap to toggle)
- Interactive mode (hover over tooltip content)
- Escape key to dismiss
- Repositions on scroll/resize
- Reduced motion support
        `,
      },
    },
  },
  argTypes: {
    content: { control: 'text', description: 'Tooltip text content' },
    placement: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Preferred tooltip placement',
    },
    showArrow: { control: 'boolean', description: 'Show arrow pointer' },
    delay: { control: 'number', description: 'Show delay in milliseconds' },
  },
};

export default meta;
type Story = StoryObj;

const tooltipStyles = html`
  <style>
    .tooltip-demo-wrapper {
      position: relative; display: inline-block; font-family: system-ui, -apple-system, sans-serif;
    }
    .tooltip-demo-trigger {
      padding: 0.5rem 1rem; background: #3b82f6; color: #fff; border: none; border-radius: 0.375rem;
      cursor: pointer; font-weight: 500; font-size: 0.875rem;
    }
    .tooltip-demo-trigger:hover { background: #2563eb; }
    .tooltip-demo {
      position: absolute; z-index: 50; padding: 0.5rem 0.75rem; font-size: 0.875rem;
      background: #0f172a; color: #f8fafc; border-radius: 0.5rem;
      box-shadow: 0 10px 25px rgba(0,0,0,0.2); max-width: 280px; white-space: nowrap;
    }
    .tooltip-demo .arrow {
      position: absolute; width: 0.5rem; height: 0.5rem; background: #0f172a; transform: rotate(45deg);
    }
    /* Top placement */
    .tooltip-demo.top { bottom: calc(100% + 8px); left: 50%; transform: translateX(-50%); }
    .tooltip-demo.top .arrow { bottom: -0.25rem; left: 50%; transform: translateX(-50%) rotate(45deg); }
    /* Bottom placement */
    .tooltip-demo.bottom { top: calc(100% + 8px); left: 50%; transform: translateX(-50%); }
    .tooltip-demo.bottom .arrow { top: -0.25rem; left: 50%; transform: translateX(-50%) rotate(45deg); }
    /* Left placement */
    .tooltip-demo.left { right: calc(100% + 8px); top: 50%; transform: translateY(-50%); }
    .tooltip-demo.left .arrow { right: -0.25rem; top: 50%; transform: translateY(-50%) rotate(45deg); }
    /* Right placement */
    .tooltip-demo.right { left: calc(100% + 8px); top: 50%; transform: translateY(-50%); }
    .tooltip-demo.right .arrow { left: -0.25rem; top: 50%; transform: translateY(-50%) rotate(45deg); }
  </style>
`;

const renderTooltip = (args: Record<string, unknown>) => {
  const placement = (args.placement as string) || 'top';

  return html`
    ${tooltipStyles}
    <div style="padding: 4rem; display: flex; justify-content: center;">
      <div class="tooltip-demo-wrapper">
        <button class="tooltip-demo-trigger">Hover me</button>
        <div class="tooltip-demo ${placement}">
          ${args.content || 'Helpful tooltip text'}
          ${args.showArrow ? html`<div class="arrow"></div>` : ''}
        </div>
      </div>
    </div>
  `;
};

export const Top: Story = {
  args: { content: 'This is a helpful tooltip', placement: 'top', showArrow: true, delay: 200 },
  render: (args) => renderTooltip(args),
};

export const Bottom: Story = {
  args: { content: 'Information appears below', placement: 'bottom', showArrow: true, delay: 200 },
  render: (args) => renderTooltip(args),
};

export const Left: Story = {
  args: { content: 'Tooltip on the left', placement: 'left', showArrow: true, delay: 200 },
  render: (args) => renderTooltip(args),
};

export const Right: Story = {
  args: { content: 'Tooltip on the right', placement: 'right', showArrow: true, delay: 200 },
  render: (args) => renderTooltip(args),
};
