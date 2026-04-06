/**
 * SectionHeader Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
const meta: Meta = {
  title: 'Sections/SectionHeader',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Reusable header for sections. Eyebrow label, title, and description. Three alignment options (left, center, right), three size presets, configurable heading tag.' } } },
  argTypes: { align: { control: 'select', options: ['left', 'center', 'right'] }, size: { control: 'select', options: ['sm', 'md', 'lg'] }, title: { control: 'text' } },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <div style="padding:4rem 2rem;font-family:system-ui,sans-serif;text-align:center;max-width:40rem;margin:0 auto;">
      <span style="font-size:0.875rem;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:#3b82f6;display:block;margin-bottom:0.75rem;">Features</span>
      <h2 style="font-size:2.5rem;font-weight:700;color:#1e293b;margin:0 0 1rem;">Everything you need</h2>
      <p style="font-size:1.125rem;color:#64748b;margin:0;">Powerful features to help your team succeed and grow faster.</p>
    </div>
  `,
};

export const LeftAligned: Story = {
  render: () => html`
    <div style="padding:4rem 2rem;font-family:system-ui,sans-serif;max-width:40rem;">
      <span style="font-size:0.75rem;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:#3b82f6;display:block;margin-bottom:0.75rem;">About Us</span>
      <h2 style="font-size:2rem;font-weight:700;color:#1e293b;margin:0 0 1rem;">About Acme Corp</h2>
      <p style="font-size:1rem;color:#64748b;margin:0;">We have been building great products since 2010.</p>
    </div>
  `,
};
