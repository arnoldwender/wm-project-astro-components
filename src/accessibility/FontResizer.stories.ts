/**
 * FontResizer Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Accessibility/FontResizer',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
WCAG/BFSG compliant text scaling widget (75%-150%).

**Features:**
- Increase/decrease font size with configurable step
- localStorage persistence across sessions
- Keyboard shortcuts support
- Screen reader announcements on size change
- Min/max size boundaries
        `,
      },
    },
  },
  argTypes: {
    label: { control: 'text', description: 'Label text' },
    minSize: { control: 'number', description: 'Minimum font size (%)' },
    maxSize: { control: 'number', description: 'Maximum font size (%)' },
    defaultSize: { control: 'number', description: 'Default font size (%)' },
    step: { control: 'number', description: 'Size increment step (%)' },
  },
};

export default meta;
type Story = StoryObj;

const renderFontResizer = (args: Record<string, unknown>) => html`
  <div style="padding: 2rem; font-family: system-ui, sans-serif;">
    <div style="display: inline-flex; align-items: center; gap: 0.5rem; background: white; border: 1px solid #d1d5db; border-radius: 0.375rem; padding: 0.5rem; box-shadow: 0 1px 2px rgba(0,0,0,0.05);">
      <span style="font-size: 0.875rem; font-weight: 500; color: #374151; margin-right: 0.5rem;">${args.label || 'Font Size:'}</span>

      <button style="padding: 0.25rem; border-radius: 0.375rem; border: none; background: transparent; color: #4b5563; cursor: pointer;" aria-label="Decrease font size" title="Decrease font size">
        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/></svg>
      </button>

      <span style="font-size: 0.875rem; font-weight: 500; color: #111827; min-width: 3rem; text-align: center;">${args.defaultSize || 100}%</span>

      <button style="padding: 0.25rem; border-radius: 0.375rem; border: none; background: transparent; color: #4b5563; cursor: pointer;" aria-label="Increase font size" title="Increase font size">
        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
      </button>

      <button style="padding: 0.25rem 0.5rem; border-radius: 0.375rem; border: 1px solid #d1d5db; background: transparent; color: #4b5563; cursor: pointer; font-size: 0.75rem; margin-left: 0.25rem;">Reset</button>
    </div>

    <p style="margin-top: 1.5rem; color: #64748b; font-size: 0.875rem;">Range: ${args.minSize || 75}% - ${args.maxSize || 150}%, Step: ${args.step || 12.5}%</p>
  </div>
`;

export const Default: Story = {
  args: { label: 'Font Size:', minSize: 75, maxSize: 150, defaultSize: 100, step: 12.5 },
  render: (args) => renderFontResizer(args),
};

export const GermanLabel: Story = {
  args: { label: 'Schriftgr\u00F6\u00DFe:', minSize: 75, maxSize: 150, defaultSize: 100, step: 12.5 },
  render: (args) => renderFontResizer(args),
};
