/**
 * AccordionItem Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'UI/AccordionItem',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Individual collapsible section for use within Accordion.

Features:
- ARIA-compliant expand/collapse with aria-expanded and aria-controls
- Optional leading icon and disabled state
- Unique auto-generated IDs for trigger and content pairing
- Slot-based content allows any nested HTML or components
- Animated chevron indicator for open/closed state
        `,
      },
    },
  },
  argTypes: {
    title: { control: 'text', description: 'Title text displayed in the trigger button' },
    icon: { control: 'text', description: 'Optional leading icon (emoji or character)' },
    defaultOpen: { control: 'boolean', description: 'Whether the item starts expanded' },
    disabled: { control: 'boolean', description: 'Disables interaction when true' },
  },
};

export default meta;
type Story = StoryObj;

const itemStyles = html`
  <style>
    .accordion-item { background: #fff; border: 1px solid #e2e8f0; border-radius: 0.5rem; overflow: hidden; max-width: 600px; font-family: system-ui, -apple-system, sans-serif; }
    .accordion-trigger {
      display: flex; align-items: center; justify-content: space-between; width: 100%; padding: 1rem;
      font-weight: 500; color: #1e293b; background: transparent; border: none;
      cursor: pointer; text-align: left; transition: background-color 0.15s ease-out;
    }
    .accordion-trigger:hover { background-color: #f8fafc; }
    .accordion-trigger[aria-disabled="true"] { color: #94a3b8; cursor: not-allowed; }
    .accordion-trigger[aria-disabled="true"]:hover { background: transparent; }
    .accordion-item-icon { margin-right: 0.75rem; }
    .accordion-icon { flex-shrink: 0; width: 1.25rem; height: 1.25rem; color: #94a3b8; transition: transform 0.2s ease-out; }
    .accordion-trigger[aria-expanded="true"] .accordion-icon { transform: rotate(180deg); }
    .accordion-content-inner { padding: 0 1rem 1rem; color: #64748b; line-height: 1.6; }
  </style>
`;

const renderAccordionItem = (args: Record<string, unknown>) => html`
  ${itemStyles}
  <div class="accordion-item">
    <h3>
      <button
        type="button"
        class="accordion-trigger"
        aria-expanded="${args.defaultOpen ? 'true' : 'false'}"
        aria-disabled="${args.disabled ? 'true' : 'false'}"
      >
        ${args.icon ? html`<span class="accordion-item-icon">${args.icon}</span>` : ''}
        <span style="flex:1; text-align:left;">${args.title}</span>
        <svg class="accordion-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </h3>
    ${args.defaultOpen ? html`
      <div class="accordion-content" role="region">
        <div class="accordion-content-inner">
          This is the content area of the accordion item. It can contain any HTML,
          including paragraphs, lists, images, or nested components.
        </div>
      </div>
    ` : ''}
  </div>
`;

export const Default: Story = {
  args: { title: 'What services do you offer?', defaultOpen: false, disabled: false },
  render: (args) => renderAccordionItem(args),
};

export const Expanded: Story = {
  args: { title: 'What services do you offer?', defaultOpen: true, disabled: false },
  render: (args) => renderAccordionItem(args),
};

export const WithIcon: Story = {
  args: { title: 'How do I get started?', icon: '?', defaultOpen: true, disabled: false },
  render: (args) => renderAccordionItem(args),
};

export const Disabled: Story = {
  args: { title: 'This item is disabled', defaultOpen: false, disabled: true },
  render: (args) => renderAccordionItem(args),
};
