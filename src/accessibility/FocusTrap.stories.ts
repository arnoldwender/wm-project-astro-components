/**
 * FocusTrap Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Accessibility/FocusTrap',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Traps keyboard focus within a container for modals, dialogs, and drawers.
WCAG 2.4.3 compliant focus order management.

**Features:**
- Traps Tab and Shift+Tab within container
- Returns focus to trigger element on close
- Auto-focus first focusable element
- Escape key support
- Works with dynamic content
        `,
      },
    },
  },
  argTypes: {
    active: { control: 'boolean', description: 'Whether the focus trap is active' },
    returnFocusOnDeactivate: { control: 'boolean', description: 'Return focus to trigger on close' },
  },
};

export default meta;
type Story = StoryObj;

const renderFocusTrap = (args: Record<string, unknown>) => html`
  <div style="padding: 2rem; font-family: system-ui, sans-serif;">
    <p style="color: #64748b; margin-bottom: 1rem;">Focus trap is ${args.active ? 'active' : 'inactive'}. Tab key cycles within the modal.</p>

    <!-- Modal Demo -->
    <div style="max-width: 28rem; margin: 0 auto; background: white; border-radius: 0.75rem; box-shadow: 0 25px 50px rgba(0,0,0,0.15); padding: 2rem; border: ${args.active ? '2px solid #3b82f6' : '1px solid #e2e8f0'};">
      <h2 style="font-size: 1.25rem; font-weight: 700; margin: 0 0 1rem;">Confirm Action</h2>
      <p style="color: #64748b; font-size: 0.875rem; margin: 0 0 1.5rem;">Are you sure you want to proceed? This action cannot be undone.</p>
      <div style="display: flex; gap: 0.75rem; justify-content: flex-end;">
        <button style="padding: 0.5rem 1rem; background: #f1f5f9; border: 1px solid #e2e8f0; border-radius: 0.375rem; cursor: pointer; font-size: 0.875rem;">Cancel</button>
        <button style="padding: 0.5rem 1rem; background: #3b82f6; color: white; border: none; border-radius: 0.375rem; cursor: pointer; font-size: 0.875rem;">Confirm</button>
      </div>
    </div>
  </div>
`;

export const Active: Story = {
  args: { active: true, returnFocusOnDeactivate: true },
  render: (args) => renderFocusTrap(args),
};

export const Inactive: Story = {
  args: { active: false, returnFocusOnDeactivate: true },
  render: (args) => renderFocusTrap(args),
};
