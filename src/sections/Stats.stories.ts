/**
 * Stats Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
const meta: Meta = {
  title: 'Sections/Stats',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Animated statistics display. Four layouts (inline, cards, banner, minimal). Scroll-triggered count-up animation with easeOutExpo easing and staggered delays.' } } },
  argTypes: { layout: { control: 'select', options: ['inline', 'cards', 'banner', 'minimal'] } },
};
export default meta;
type Story = StoryObj;

export const Cards: Story = {
  render: () => html`
    <section style="padding:4rem 2rem;font-family:system-ui,sans-serif;">
      <h2 style="text-align:center;font-size:2rem;font-weight:700;margin:0 0 3rem;">Acme Corp by the Numbers</h2>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:1.5rem;max-width:64rem;margin:0 auto;">
        ${[{ val: '12K', label: 'Customers', desc: 'Across 40 countries', suf: '+' }, { val: '99', label: 'Uptime', suf: '.9%' }, { val: '24', label: 'Support', suf: '/7' }, { val: '72', label: 'NPS Score', pre: '+' }].map(s => html`
          <div style="background:#f8fafc;border-radius:1rem;padding:2rem;text-align:center;">
            <div style="font-size:2.5rem;font-weight:700;color:#1e293b;">${s.pre || ''}${s.val}${s.suf || ''}</div>
            <div style="font-weight:600;margin:0.25rem 0;">${s.label}</div>
            ${s.desc ? html`<p style="font-size:0.875rem;color:#64748b;margin:0;">${s.desc}</p>` : ''}
          </div>
        `)}
      </div>
    </section>
  `,
};

export const Banner: Story = {
  render: () => html`
    <section style="font-family:system-ui,sans-serif;">
      <div style="display:grid;grid-template-columns:repeat(4,1fr);border:1px solid #e5e7eb;border-radius:1rem;overflow:hidden;">
        ${[{ val: '500', label: 'Projects', suf: '+' }, { val: '45', label: 'Team Members' }, { val: '12', label: 'Countries' }, { val: '99', label: 'Satisfaction', suf: '%' }].map(s => html`
          <div style="padding:2rem;text-align:center;background:white;border-right:1px solid #e5e7eb;">
            <div style="font-size:2rem;font-weight:700;">${s.val}${s.suf || ''}</div>
            <div style="font-size:0.875rem;color:#6b7280;">${s.label}</div>
          </div>
        `)}
      </div>
    </section>
  `,
};
