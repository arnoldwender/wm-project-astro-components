/**
 * CommandGroup Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'UI/CommandGroup',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Groups related command items with an optional title.

Features:
- ARIA role="group" with accessible label for screen readers
- Uppercase styled section title for visual separation
- Automatic border separator between consecutive groups
- Hidden when no matching items via [hidden] attribute
- Slot-based children for flexible CommandItem composition
        `,
      },
    },
  },
  argTypes: {
    title: { control: 'text', description: 'Group heading displayed above items' },
    name: { control: 'text', description: 'Internal group identifier' },
  },
};

export default meta;
type Story = StoryObj;

const groupStyles = html`
  <style>
    .cmd-group { font-family: system-ui, -apple-system, sans-serif; max-width: 480px; background: #fff; border: 1px solid #e2e8f0; border-radius: 0.75rem; overflow: hidden; }
    .cmd-group-title {
      padding: 0.5rem 1rem; font-size: 0.75rem; font-weight: 600; text-transform: uppercase;
      letter-spacing: 0.05em; color: #94a3b8;
    }
    .cmd-item {
      display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem 1rem; cursor: pointer;
      transition: background-color 0.1s ease-out;
    }
    .cmd-item:hover { background: #f8fafc; }
    .cmd-item-icon { width: 1.25rem; height: 1.25rem; display: flex; align-items: center; justify-content: center; color: #94a3b8; }
    .cmd-item-label { flex: 1; color: #1e293b; }
    .cmd-item-shortcut {
      margin-left: auto; padding: 0.25rem 0.5rem; font-size: 0.75rem; color: #94a3b8;
      background: #f8fafc; border-radius: 0.25rem; border: 1px solid #e2e8f0; font-family: monospace;
    }
    .cmd-group + .cmd-group { border-top: 1px solid #f1f5f9; }
  </style>
`;

const renderCommandGroup = (args: Record<string, unknown>) => html`
  ${groupStyles}
  <div class="cmd-group" role="group" aria-label="${args.title}">
    ${args.title ? html`<div class="cmd-group-title">${args.title}</div>` : ''}
    <div role="listbox">
      <div class="cmd-item" role="option">
        <span class="cmd-item-icon">&#x1F3E0;</span>
        <span class="cmd-item-label">Home</span>
      </div>
      <div class="cmd-item" role="option">
        <span class="cmd-item-icon">&#x1F4C4;</span>
        <span class="cmd-item-label">Documentation</span>
        <span class="cmd-item-shortcut">Ctrl+D</span>
      </div>
      <div class="cmd-item" role="option">
        <span class="cmd-item-icon">&#x2699;</span>
        <span class="cmd-item-label">Settings</span>
        <span class="cmd-item-shortcut">Ctrl+,</span>
      </div>
    </div>
  </div>
`;

export const Default: Story = {
  args: { title: 'Navigation', name: 'nav' },
  render: (args) => renderCommandGroup(args),
};

export const MultipleGroups: Story = {
  render: () => html`
    ${groupStyles}
    <div style="max-width:480px; background:#fff; border:1px solid #e2e8f0; border-radius:0.75rem; overflow:hidden;">
      <div class="cmd-group" role="group" aria-label="Navigation">
        <div class="cmd-group-title">Navigation</div>
        <div role="listbox">
          <div class="cmd-item" role="option">
            <span class="cmd-item-icon">&#x1F3E0;</span>
            <span class="cmd-item-label">Home</span>
          </div>
          <div class="cmd-item" role="option">
            <span class="cmd-item-icon">&#x1F4CA;</span>
            <span class="cmd-item-label">Dashboard</span>
          </div>
        </div>
      </div>
      <div class="cmd-group" role="group" aria-label="Actions">
        <div class="cmd-group-title">Actions</div>
        <div role="listbox">
          <div class="cmd-item" role="option">
            <span class="cmd-item-icon">&#x1F50D;</span>
            <span class="cmd-item-label">Search</span>
            <span class="cmd-item-shortcut">Ctrl+K</span>
          </div>
          <div class="cmd-item" role="option">
            <span class="cmd-item-icon">&#x1F3A8;</span>
            <span class="cmd-item-label">Toggle Theme</span>
            <span class="cmd-item-shortcut">Ctrl+T</span>
          </div>
        </div>
      </div>
    </div>
  `,
};

export const WithoutTitle: Story = {
  args: { title: '', name: 'ungrouped' },
  render: (args) => renderCommandGroup(args),
};
