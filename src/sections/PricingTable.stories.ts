/**
 * PricingTable Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Sections/PricingTable',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Premium pricing table with monthly/yearly billing toggle, feature tooltips, Schema.org Product markup, savings badges, and trust signals.' } } },
  argTypes: {
    defaultBilling: { control: 'select', options: ['monthly', 'yearly'], description: 'Default billing period' },
  },
};
export default meta;
type Story = StoryObj;

const tiers = [
  { name: 'Starter', desc: 'For individuals', monthly: 0, yearly: 0, features: ['3 projects', '1 GB storage', 'Community support'], cta: 'Get Started' },
  { name: 'Pro', desc: 'For growing teams', monthly: 29, yearly: 290, features: ['Unlimited projects', '100 GB storage', 'Priority support', 'API access'], cta: 'Start Trial', popular: true },
  { name: 'Enterprise', desc: 'For large orgs', monthly: 99, yearly: 990, features: ['Everything in Pro', 'SSO & SAML', 'Dedicated manager', 'Custom SLA'], cta: 'Contact Sales' },
];

export const Default: Story = {
  render: () => html`
    <section style="padding:4rem 2rem;font-family:system-ui,sans-serif;">
      <div style="text-align:center;max-width:48rem;margin:0 auto 2rem;">
        <h2 style="font-size:2.5rem;font-weight:700;margin:0 0 1rem;">Simple, transparent pricing</h2>
        <p style="font-size:1.125rem;color:#64748b;">Choose the plan that fits your needs.</p>
      </div>
      <div style="display:flex;align-items:center;justify-content:center;gap:1rem;margin-bottom:3rem;">
        <span style="font-size:0.875rem;font-weight:500;color:#1e293b;">Monthly</span>
        <div style="width:4rem;height:2rem;background:#3b82f6;border-radius:9999px;position:relative;cursor:pointer;"><span style="position:absolute;top:0.25rem;right:0.25rem;width:1.5rem;height:1.5rem;background:white;border-radius:50%;"></span></div>
        <span style="font-size:0.875rem;font-weight:500;color:#64748b;">Yearly <span style="padding:0.125rem 0.5rem;font-size:0.75rem;font-weight:600;background:#dcfce7;color:#166534;border-radius:9999px;">Save 17%</span></span>
      </div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:2rem;max-width:72rem;margin:0 auto;">
        ${tiers.map(t => html`
          <article style="position:relative;display:flex;flex-direction:column;padding:2rem;border-radius:1rem;${t.popular ? 'border:2px solid #3b82f6;box-shadow:0 10px 40px rgba(0,0,0,0.1);transform:scale(1.05);' : 'border:2px solid #e5e7eb;'}background:white;">
            ${t.popular ? html`<div style="position:absolute;top:-1rem;left:50%;transform:translateX(-50%);"><span style="padding:0.25rem 1rem;font-size:0.875rem;font-weight:600;color:white;background:#3b82f6;border-radius:9999px;">Most Popular</span></div>` : ''}
            <h3 style="font-size:1.25rem;font-weight:700;margin:0 0 0.5rem;">${t.name}</h3>
            <p style="font-size:0.875rem;color:#6b7280;margin:0 0 1.5rem;">${t.desc}</p>
            <div style="margin-bottom:1.5rem;"><span style="color:#6b7280;">€</span><span style="font-size:3rem;font-weight:700;">${Math.round(t.yearly / 12)}</span><span style="color:#6b7280;">/mo</span></div>
            <a href="#" style="display:block;text-align:center;padding:0.75rem;border-radius:0.5rem;font-weight:600;text-decoration:none;margin-bottom:1.5rem;${t.popular ? 'background:#3b82f6;color:white;' : 'background:#1e293b;color:white;'}">${t.cta}</a>
            <ul style="list-style:none;padding:0;margin:0;flex:1;">
              ${t.features.map(f => html`<li style="display:flex;align-items:center;gap:0.75rem;padding:0.5rem 0;font-size:0.875rem;"><svg width="20" height="20" fill="none" stroke="#22c55e" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>${f}</li>`)}
            </ul>
          </article>
        `)}
      </div>
    </section>
  `,
};

export const MonthlyView: Story = {
  render: () => html`
    <section style="padding:4rem 2rem;font-family:system-ui,sans-serif;text-align:center;">
      <h2 style="font-size:2rem;font-weight:700;margin:0 0 2rem;">Monthly Plans</h2>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:2rem;max-width:64rem;margin:0 auto;">
        ${tiers.map(t => html`
          <div style="border:1px solid #e5e7eb;border-radius:1rem;padding:2rem;background:white;">
            <h3 style="font-weight:700;margin:0 0 1rem;">${t.name}</h3>
            <div style="font-size:3rem;font-weight:700;margin-bottom:1rem;">€${t.monthly}<span style="font-size:1rem;font-weight:400;color:#6b7280;">/mo</span></div>
            <a href="#" style="display:block;padding:0.75rem;background:#1e293b;color:white;border-radius:0.5rem;font-weight:600;text-decoration:none;">${t.cta}</a>
          </div>
        `)}
      </div>
    </section>
  `,
};
