/**
 * StatsSection Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
const meta: Meta = {
  title: 'Sections/StatsSection',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Statistics display section. Five variants (simple, cards, inline, background, animated). Background image variant with dark overlay, animated count-up on scroll.' } } },
  argTypes: { variant: { control: 'select', options: ['simple', 'cards', 'inline', 'background', 'animated'] }, columns: { control: { type: 'range', min: 2, max: 5 } } },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <section style="padding:4rem 2rem;font-family:system-ui,sans-serif;">
      <h2 style="text-align:center;font-size:2rem;font-weight:700;margin:0 0 3rem;">By the Numbers</h2>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:2rem;max-width:64rem;margin:0 auto;">
        ${[{ val: '10K+', label: 'Happy Customers', icon: '👥' }, { val: '99.9%', label: 'Uptime', icon: '⚡' }, { val: '24/7', label: 'Support', icon: '🎧' }, { val: '50+', label: 'Integrations', icon: '🔗' }].map(s => html`
          <div style="text-align:center;">
            <span style="font-size:2rem;display:block;margin-bottom:0.5rem;">${s.icon}</span>
            <div style="font-size:2.5rem;font-weight:700;color:#1e293b;">${s.val}</div>
            <div style="color:#64748b;">${s.label}</div>
          </div>
        `)}
      </div>
    </section>
  `,
};

export const WithBackground: Story = {
  render: () => html`
    <section style="padding:4rem 2rem;background:#1e293b;color:white;font-family:system-ui,sans-serif;position:relative;">
      <h2 style="text-align:center;font-size:2rem;font-weight:700;margin:0 0 3rem;">Our Impact</h2>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:2rem;max-width:48rem;margin:0 auto;">
        ${[{ val: '500+', label: 'Projects Delivered' }, { val: '98%', label: 'Client Satisfaction' }, { val: '15', label: 'Years Experience' }].map(s => html`
          <div style="text-align:center;">
            <div style="font-size:3rem;font-weight:700;">${s.val}</div>
            <div style="opacity:0.8;">${s.label}</div>
          </div>
        `)}
      </div>
    </section>
  `,
};
