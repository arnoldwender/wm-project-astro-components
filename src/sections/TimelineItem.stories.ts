/**
 * TimelineItem Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
const meta: Meta = {
  title: 'Sections/TimelineItem',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Individual timeline entry. Four variants (default, card, minimal, detailed). Emoji/SVG icon marker or dot. Optional badge label alongside date. Connector line between items.' } } },
  argTypes: { variant: { control: 'select', options: ['default', 'card', 'minimal', 'detailed'] }, date: { control: 'text' }, title: { control: 'text' } },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <div style="max-width:32rem;padding:2rem;font-family:system-ui,sans-serif;">
      ${[
        { date: '2024', title: 'Company Founded', desc: 'Started with a vision to change the industry.', icon: '🚀', badge: 'Milestone' },
        { date: '2025', title: 'Series A Funding', desc: 'Raised $10M to scale operations globally.', icon: '💰' },
        { date: '2026', title: 'Global Launch', desc: 'Expanded to 40 countries worldwide.', icon: '🌍' },
      ].map((item, i, arr) => html`
        <div style="display:grid;grid-template-columns:auto 1fr;gap:1rem;padding-bottom:${i < arr.length - 1 ? '2rem' : '0'};">
          <div style="display:flex;justify-content:center;position:relative;">
            <div style="width:2.5rem;height:2.5rem;border-radius:50%;background:#3b82f6;display:flex;align-items:center;justify-content:center;font-size:1.125rem;position:relative;z-index:1;">${item.icon}</div>
            ${i < arr.length - 1 ? html`<div style="position:absolute;top:2.5rem;left:50%;transform:translateX(-50%);width:2px;height:calc(100% + 0.5rem);background:#e2e8f0;"></div>` : ''}
          </div>
          <div>
            <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:0.5rem;">
              <span style="font-weight:600;color:#3b82f6;">${item.date}</span>
              ${item.badge ? html`<span style="padding:0.125rem 0.5rem;font-size:0.75rem;font-weight:500;border-radius:9999px;background:rgba(59,130,246,0.1);color:#3b82f6;">${item.badge}</span>` : ''}
            </div>
            <h3 style="font-weight:600;font-size:1.125rem;margin:0 0 0.5rem;">${item.title}</h3>
            <p style="font-size:0.875rem;color:#64748b;margin:0;">${item.desc}</p>
          </div>
        </div>
      `)}
    </div>
  `,
};

export const CardVariant: Story = {
  render: () => html`
    <div style="max-width:32rem;padding:2rem;font-family:system-ui,sans-serif;">
      <div style="display:grid;grid-template-columns:auto 1fr;gap:1rem;">
        <div style="width:1rem;height:1rem;border-radius:50%;background:#3b82f6;box-shadow:0 0 0 4px white,0 0 0 5px #e2e8f0;margin-top:1.5rem;"></div>
        <div style="background:white;border:1px solid #e2e8f0;border-radius:0.75rem;padding:1.5rem;">
          <span style="font-weight:600;color:#3b82f6;font-size:0.875rem;">March 2025</span>
          <h3 style="font-weight:600;margin:0.5rem 0 0.25rem;">Series A Funding</h3>
          <p style="font-size:0.875rem;color:#64748b;margin:0;">Raised $10M to scale operations and expand the team.</p>
        </div>
      </div>
    </div>
  `,
};
