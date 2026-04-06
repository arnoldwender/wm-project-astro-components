/**
 * CommandItem Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'UI/CommandItem',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Individual command/action item for the Command Palette.

Features:
- Supports navigation (href) and custom actions (data-action) modes
- Optional leading icon with SVG or emoji support
- Keyboard shortcut badge display for power-user discoverability
- Searchable via keywords attribute for fuzzy command filtering
- Disabled state with aria-disabled and visual opacity change
        `,
      },
    },
  },
  argTypes: {
    value: { control: 'text', description: 'Unique value identifier' },
    label: { control: 'text', description: 'Display text for the command item' },
    icon: { control: 'text', description: 'Leading icon (emoji or character)' },
    shortcut: { control: 'text', description: 'Keyboard shortcut badge text' },
    disabled: { control: 'boolean', description: 'Whether the item is disabled' },
  },
};

export default meta;
type Story = StoryObj;

const itemStyles = html`
  <style>
    .cmd-item-demo {
      display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem 1rem;
      cursor: pointer; transition: background-color 0.1s ease-out;
      font-family: system-ui, -apple-system, sans-serif; max-width: 480px;
      background: #fff; border: 1px solid #e2e8f0; border-radius: 0.5rem;
    }
    .cmd-item-demo:hover { background: #f8fafc; }
    .cmd-item-demo[aria-disabled="true"] { opacity: 0.5; cursor: not-allowed; }
    .cmd-item-demo[aria-disabled="true"]:hover { background: #fff; }
    .cmd-item-demo .icon { width: 1.25rem; height: 1.25rem; display: flex; align-items: center; justify-content: center; color: #94a3b8; flex-shrink: 0; }
    .cmd-item-demo .label { flex: 1; color: #1e293b; }
    .cmd-item-demo .shortcut {
      margin-left: auto; padding: 0.25rem 0.5rem; font-size: 0.75rem; color: #94a3b8;
      background: #f8fafc; border-radius: 0.25rem; border: 1px solid #e2e8f0; font-family: monospace;
    }
  </style>
`;

const renderCommandItem = (args: Record<string, unknown>) => html`
  ${itemStyles}
  <div
    class="cmd-item-demo"
    role="option"
    aria-disabled="${args.disabled ? 'true' : 'false'}"
  >
    ${args.icon ? html`<span class="icon">${args.icon}</span>` : ''}
    <span class="label">${args.label}</span>
    ${args.shortcut ? html`<span class="shortcut">${args.shortcut}</span>` : ''}
  </div>
`;

export const Default: Story = {
  args: { value: 'home', label: 'Home', icon: '&#x1F3E0;', shortcut: '', disabled: false },
  render: (args) => renderCommandItem(args),
};

export const WithShortcut: Story = {
  args: { value: 'search', label: 'Search', icon: '&#x1F50D;', shortcut: 'Ctrl+K', disabled: false },
  render: (args) => renderCommandItem(args),
};

export const Disabled: Story = {
  args: { value: 'delete', label: 'Delete Account', icon: '&#x1F5D1;', shortcut: '', disabled: true },
  render: (args) => renderCommandItem(args),
};

export const WithAction: Story = {
  args: { value: 'theme', label: 'Toggle Theme', icon: '&#x1F3A8;', shortcut: 'Ctrl+T', disabled: false },
  render: (args) => renderCommandItem(args),
};
