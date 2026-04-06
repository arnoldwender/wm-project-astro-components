/**
 * Tabs Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'UI/Tabs',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Accessible tabbed interface following WAI-ARIA Tabs pattern.

Features:
- Keyboard navigation (arrow keys, Home, End)
- Automatic and manual activation modes
- Vertical and horizontal orientations
- Four visual variants (default, pills, underline, bordered)
- Three sizes (sm, md, lg)
- Full-width tab option
- Animated underline indicator
- Persistent tab state via localStorage
- Reduced motion support
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'pills', 'underline', 'bordered'],
      description: 'Visual style variant',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Tab text size',
    },
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      description: 'Tab list orientation',
    },
  },
};

export default meta;
type Story = StoryObj;

const tabsStyles = html`
  <style>
    .tabs-demo { max-width: 600px; font-family: system-ui, -apple-system, sans-serif; }
    .tabs-demo .tab-list {
      display: flex; gap: 0.25rem; padding: 0.25rem; background: #f1f5f9; border-radius: 0.5rem;
    }
    .tabs-demo .tab-list.pills { background: transparent; gap: 0.5rem; padding: 0; }
    .tabs-demo .tab-list.underline {
      background: transparent; gap: 0; padding: 0; border-bottom: 1px solid #e2e8f0;
    }
    .tabs-demo .tab-list.bordered {
      background: transparent; gap: 0; padding: 0; border: 1px solid #e2e8f0; border-radius: 0.5rem; overflow: hidden;
    }
    .tabs-demo .tab-list.vertical { flex-direction: column; min-width: 160px; }
    .tabs-demo .tab-btn {
      display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem;
      padding: 0.5rem 1rem; font-weight: 500; color: #64748b; cursor: pointer;
      border: none; background: transparent; white-space: nowrap; transition: all 0.15s;
    }
    .tabs-demo .tab-btn:hover { color: #1e293b; }
    .tabs-demo .tab-btn.active { color: #1e293b; }

    /* Default variant */
    .tabs-demo .tab-list.default .tab-btn.active {
      background: #fff; border-radius: 0.375rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }
    /* Pills variant */
    .tabs-demo .tab-list.pills .tab-btn { border-radius: 9999px; }
    .tabs-demo .tab-list.pills .tab-btn.active { background: #3b82f6; color: #fff; }
    /* Underline variant */
    .tabs-demo .tab-list.underline .tab-btn { padding-bottom: 0.75rem; border-radius: 0; }
    .tabs-demo .tab-list.underline .tab-btn.active { box-shadow: inset 0 -2px 0 #3b82f6; }
    /* Bordered variant */
    .tabs-demo .tab-list.bordered .tab-btn { border-right: 1px solid #e2e8f0; border-radius: 0; }
    .tabs-demo .tab-list.bordered .tab-btn:last-child { border-right: none; }
    .tabs-demo .tab-list.bordered .tab-btn.active { background: #fff; }

    .tabs-demo .tab-panel { padding: 1rem 0; color: #64748b; line-height: 1.6; }
    .tabs-demo .tab-panel h3 { color: #1e293b; margin: 0 0 0.5rem; }
    .tabs-demo .tab-panel p { margin: 0; }

    .tabs-demo.vertical-layout { display: flex; gap: 1rem; }
    .tabs-demo.vertical-layout .tab-list { border-radius: 0; background: transparent; border-right: 1px solid #e2e8f0; padding-right: 0; }
    .tabs-demo.vertical-layout .tab-btn { text-align: left; justify-content: flex-start; }
    .tabs-demo.vertical-layout .tab-btn.active { background: #eff6ff; border-radius: 0.375rem; }
  </style>
`;

const renderTabs = (args: Record<string, unknown>) => {
  const variant = (args.variant as string) || 'default';
  const isVertical = args.orientation === 'vertical';

  return html`
    ${tabsStyles}
    <div class="tabs-demo ${isVertical ? 'vertical-layout' : ''}">
      <div class="tab-list ${variant} ${isVertical ? 'vertical' : ''}" role="tablist">
        <button class="tab-btn active" role="tab" aria-selected="true" tabindex="0">Overview</button>
        <button class="tab-btn" role="tab" aria-selected="false" tabindex="-1">Features</button>
        <button class="tab-btn" role="tab" aria-selected="false" tabindex="-1">Pricing</button>
        <button class="tab-btn" role="tab" aria-selected="false" tabindex="-1" aria-disabled="true" style="color:#cbd5e1;cursor:not-allowed;">Billing</button>
      </div>
      <div class="tab-panel" role="tabpanel" tabindex="0">
        <h3>Overview</h3>
        <p>Welcome to the project overview. This section provides a high-level summary
        of the application architecture, key features, and current status.</p>
      </div>
    </div>
  `;
};

export const Default: Story = {
  args: { variant: 'default', size: 'md', orientation: 'horizontal' },
  render: (args) => renderTabs(args),
};

export const Pills: Story = {
  args: { variant: 'pills', size: 'md', orientation: 'horizontal' },
  render: (args) => renderTabs(args),
};

export const Underline: Story = {
  args: { variant: 'underline', size: 'md', orientation: 'horizontal' },
  render: (args) => renderTabs(args),
};

export const Vertical: Story = {
  args: { variant: 'default', size: 'md', orientation: 'vertical' },
  render: (args) => renderTabs(args),
};
