/**
 * PricingSection Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Sections/PricingSection',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Flexible pricing display section. Four layout variants (cards, comparison, toggle, minimal). Built-in billing-period toggle dispatching custom events.' } } },
  argTypes: {
    variant: { control: 'select', options: ['cards', 'comparison', 'toggle', 'minimal'] },
    columns: { control: { type: 'range', min: 2, max: 4 } },
  },
};
export default meta;
type Story = StoryObj;

const plans = [
  { name: 'Starter', price: '9', desc: 'For individuals', features: ['5 Projects', '10 GB Storage', 'Email Support'] },
  { name: 'Pro', price: '29', desc: 'For teams', features: ['Unlimited Projects', '100 GB Storage', 'Priority Support'], featured: true },
  { name: 'Enterprise', price: '99', desc: 'For organizations', features: ['Everything in Pro', 'Dedicated Manager', 'Custom SLA'] },
];

export const Default: Story = {
  render: () => html`
    <section style="padding:4rem 2rem;font-family:system-ui,sans-serif;">
      <div style="text-align:center;max-width:40rem;margin:0 auto 3rem;">
        <span style="font-size:0.875rem;font-weight:600;text-transform:uppercase;color:#3b82f6;display:block;margin-bottom:0.75rem;">Pricing</span>
        <h2 style="font-size:2rem;font-weight:700;color:#1e293b;margin:0 0 1rem;">Choose Your Plan</h2>
        <p style="color:#64748b;">No hidden fees. Cancel anytime.</p>
      </div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:2rem;max-width:64rem;margin:0 auto;align-items:start;">
        ${plans.map(p => html`
          <div style="position:relative;border-radius:1rem;padding:2rem;background:#fff;${p.featured ? 'border:2px solid #3b82f6;box-shadow:0 10px 40px rgba(59,130,246,0.15);transform:scale(1.05);z-index:1;' : 'border:1px solid #e2e8f0;'}">
            ${p.featured ? html`<div style="position:absolute;top:-0.75rem;left:50%;transform:translateX(-50%);"><span style="padding:0.25rem 1rem;font-size:0.75rem;font-weight:600;text-transform:uppercase;background:#3b82f6;color:white;border-radius:9999px;">Most Popular</span></div>` : ''}
            <h3 style="font-size:1.25rem;font-weight:700;color:#1e293b;margin:0 0 0.25rem;">${p.name}</h3>
            <p style="font-size:0.875rem;color:#94a3b8;margin:0 0 1.5rem;">${p.desc}</p>
            <div style="font-size:2.5rem;font-weight:700;color:#1e293b;margin-bottom:1.5rem;">€${p.price}<span style="font-size:1rem;font-weight:400;color:#94a3b8;">/mo</span></div>
            <ul style="list-style:none;padding:0;margin:0 0 2rem;">
              ${p.features.map(f => html`<li style="display:flex;align-items:center;gap:0.5rem;padding:0.375rem 0;font-size:0.875rem;color:#64748b;"><svg width="16" height="16" fill="none" stroke="#22c55e" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>${f}</li>`)}
            </ul>
            <a href="#" style="display:block;text-align:center;padding:0.75rem;border-radius:0.5rem;font-weight:600;text-decoration:none;${p.featured ? 'background:#3b82f6;color:white;' : 'border:2px solid #e2e8f0;color:#1e293b;'}">Get Started</a>
          </div>
        `)}
      </div>
    </section>
  `,
};

export const WithToggle: Story = {
  render: () => html`
    <section style="padding:4rem 2rem;font-family:system-ui,sans-serif;text-align:center;">
      <h2 style="font-size:2rem;font-weight:700;color:#1e293b;margin:0 0 2rem;">Simple, Transparent Pricing</h2>
      <div style="display:flex;align-items:center;justify-content:center;gap:1rem;margin-bottom:3rem;">
        <span style="font-size:0.875rem;font-weight:500;color:#1e293b;">Monthly</span>
        <div style="width:3.5rem;height:1.75rem;background:#3b82f6;border-radius:9999px;position:relative;cursor:pointer;">
          <span style="position:absolute;top:0.25rem;right:0.25rem;width:1.25rem;height:1.25rem;background:white;border-radius:50%;"></span>
        </div>
        <span style="font-size:0.875rem;font-weight:500;color:#64748b;">Yearly <span style="color:#3b82f6;">(-20%)</span></span>
      </div>
      <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:2rem;max-width:48rem;margin:0 auto;">
        ${[{ name: 'Basic', price: '12' }, { name: 'Premium', price: '36' }].map(p => html`
          <div style="border:1px solid #e2e8f0;border-radius:1rem;padding:2rem;background:#fff;">
            <h3 style="font-size:1.25rem;font-weight:700;margin:0 0 1rem;">${p.name}</h3>
            <div style="font-size:2.5rem;font-weight:700;margin-bottom:0.5rem;">€${p.price}<span style="font-size:1rem;font-weight:400;color:#94a3b8;">/mo</span></div>
            <p style="font-size:0.875rem;color:#94a3b8;margin:0 0 1.5rem;">Billed annually</p>
            <a href="#" style="display:block;text-align:center;padding:0.75rem;background:#1e293b;color:white;border-radius:0.5rem;font-weight:600;text-decoration:none;">Start Free Trial</a>
          </div>
        `)}
      </div>
    </section>
  `,
};
