/**
 * Tab Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'UI/Tab',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Individual tab button for use within the Tabs component.

Features:
- ARIA role="tab" with aria-controls linked to corresponding TabPanel
- Optional leading icon for visual tab identification
- Disabled state via aria-disabled attribute
- Managed tabindex for roving keyboard navigation
- Slot-based label content for flexible tab text
        `,
      },
    },
  },
  argTypes: {
    label: { control: 'text', description: 'Tab button text' },
    icon: { control: 'text', description: 'Optional leading icon (emoji)' },
    disabled: { control: 'boolean', description: 'Disabled state' },
    selected: { control: 'boolean', description: 'Selected/active state' },
  },
};

export default meta;
type Story = StoryObj;

const tabStyles = html`
  <style>
    .tab-demo {
      display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem;
      font-weight: 500; color: #64748b; cursor: pointer; border: none; background: transparent;
      font-family: system-ui, -apple-system, sans-serif; font-size: 0.875rem;
      transition: color 0.15s, background 0.15s; border-radius: 0.375rem;
    }
    .tab-demo:hover { color: #1e293b; }
    .tab-demo[aria-selected="true"] {
      color: #1e293b; background: #fff; box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }
    .tab-demo[aria-disabled="true"] { color: #cbd5e1; cursor: not-allowed; }
    .tab-demo[aria-disabled="true"]:hover { color: #cbd5e1; }
    .tab-wrapper { background: #f1f5f9; padding: 0.25rem; border-radius: 0.5rem; display: inline-flex; }
  </style>
`;

const renderTab = (args: Record<string, unknown>) => html`
  ${tabStyles}
  <div class="tab-wrapper">
    <button
      class="tab-demo"
      role="tab"
      aria-selected="${args.selected ? 'true' : 'false'}"
      aria-disabled="${args.disabled ? 'true' : 'false'}"
      tabindex="${args.selected ? '0' : '-1'}"
    >
      ${args.icon ? html`<span>${args.icon}</span>` : ''}
      ${args.label}
    </button>
  </div>
`;

export const Default: Story = {
  args: { label: 'Overview', icon: '', disabled: false, selected: false },
  render: (args) => renderTab(args),
};

export const Selected: Story = {
  args: { label: 'Overview', icon: '', disabled: false, selected: true },
  render: (args) => renderTab(args),
};

export const WithIcon: Story = {
  args: { label: 'Analytics', icon: '&#x1F4CA;', disabled: false, selected: true },
  render: (args) => renderTab(args),
};

export const Disabled: Story = {
  args: { label: 'Billing', icon: '', disabled: true, selected: false },
  render: (args) => renderTab(args),
};
