/**
 * StatItem Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
const meta: Meta = {
  title: 'Sections/StatItem',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Individual statistic item. Four variants (default, card, inline, centered). Count-up animation, prefix/suffix support, emoji or SVG icon.' } } },
  argTypes: { variant: { control: 'select', options: ['default', 'card', 'inline', 'centered'] }, value: { control: 'text' }, label: { control: 'text' } },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <div style="display:flex;gap:3rem;padding:2rem;font-family:system-ui,sans-serif;">
      ${[{ val: '10K+', label: 'Happy Customers', icon: '👥' }, { val: '99.9%', label: 'Uptime', icon: '⚡' }, { val: '24/7', label: 'Support', icon: '🎧' }].map(s => html`
        <div style="text-align:center;">
          <span style="font-size:2rem;display:block;margin-bottom:0.5rem;">${s.icon}</span>
          <div style="font-size:2.5rem;font-weight:700;color:#1e293b;margin-bottom:0.25rem;">${s.val}</div>
          <div style="color:#64748b;font-weight:500;">${s.label}</div>
        </div>
      `)}
    </div>
  `,
};

export const CardVariant: Story = {
  render: () => html`
    <div style="max-width:16rem;padding:2rem;font-family:system-ui,sans-serif;">
      <div style="background:white;border:1px solid #e2e8f0;border-radius:0.75rem;padding:1.5rem;text-align:center;">
        <div style="width:3rem;height:3rem;border-radius:0.75rem;background:rgba(59,130,246,0.1);display:flex;align-items:center;justify-content:center;margin:0 auto 0.75rem;font-size:1.5rem;">📊</div>
        <div style="font-size:2.5rem;font-weight:700;color:#1e293b;margin-bottom:0.25rem;">500+</div>
        <div style="color:#64748b;font-weight:500;">Projects Delivered</div>
        <p style="font-size:0.875rem;color:#94a3b8;margin:0.5rem 0 0;">And counting every week</p>
      </div>
    </div>
  `,
};
