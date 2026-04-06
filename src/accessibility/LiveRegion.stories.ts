/**
 * LiveRegion Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Accessibility/LiveRegion',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
ARIA Live Region for announcing dynamic content changes to screen readers.

**Features:**
- Polite and assertive announcement modes
- Atomic updates option
- Content relevance filtering (additions, removals, text, all)
- JavaScript API for programmatic announcements
- Auto-clear with configurable delay
        `,
      },
    },
  },
  argTypes: {
    mode: { control: 'select', options: ['polite', 'assertive', 'off'], description: 'Announcement priority' },
    role: { control: 'select', options: ['status', 'alert', 'log', 'timer'], description: 'ARIA role' },
    atomic: { control: 'boolean', description: 'Announce entire region on change' },
  },
};

export default meta;
type Story = StoryObj;

const renderLiveRegion = (args: Record<string, unknown>) => html`
  <div style="padding: 2rem; font-family: system-ui, sans-serif;">
    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.5rem; padding: 1.5rem; max-width: 32rem;">
      <h3 style="font-size: 1rem; font-weight: 600; margin: 0 0 0.75rem;">Live Region Demo</h3>
      <p style="font-size: 0.875rem; color: #64748b; margin: 0 0 1rem;">
        Mode: <code style="background: #e2e8f0; padding: 0.125rem 0.375rem; border-radius: 0.25rem;">${args.mode}</code>,
        Role: <code style="background: #e2e8f0; padding: 0.125rem 0.375rem; border-radius: 0.25rem;">${args.role}</code>,
        Atomic: <code style="background: #e2e8f0; padding: 0.125rem 0.375rem; border-radius: 0.25rem;">${args.atomic}</code>
      </p>

      <!-- Simulated live region -->
      <div role="${args.role}" aria-live="${args.mode}" aria-atomic="${args.atomic}"
           style="padding: 0.75rem; background: ${args.role === 'alert' ? '#fef2f2' : '#f0fdf4'}; border: 1px solid ${args.role === 'alert' ? '#fecaca' : '#bbf7d0'}; border-radius: 0.375rem; font-size: 0.875rem; color: ${args.role === 'alert' ? '#991b1b' : '#166534'};">
        ${args.role === 'alert' ? 'Error: Please fill in all required fields.' : '3 items added to your cart.'}
      </div>
    </div>
  </div>
`;

export const PoliteStatus: Story = {
  args: { mode: 'polite', role: 'status', atomic: true },
  render: (args) => renderLiveRegion(args),
};

export const AssertiveAlert: Story = {
  args: { mode: 'assertive', role: 'alert', atomic: true },
  render: (args) => renderLiveRegion(args),
};
