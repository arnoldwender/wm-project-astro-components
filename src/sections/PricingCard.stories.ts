/**
 * PricingCard Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Sections/PricingCard',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Individual pricing plan card. Monthly/yearly toggle support, featured badge with scale emphasis, included/excluded feature list with check/cross icons.' } } },
  argTypes: {
    name: { control: 'text' },
    price: { control: 'number' },
    featured: { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj;

const renderCard = (args: Record<string, unknown>) => html`
  <div style="max-width:360px;margin:2rem auto;font-family:system-ui,sans-serif;">
    <div style="position:relative;border-radius:1rem;padding:1.5rem 2rem;${(args.featured as boolean) ? 'border:2px solid #3b82f6;box-shadow:0 10px 40px rgba(59,130,246,0.15);transform:scale(1.05);' : 'border:1px solid #e2e8f0;'}background:#fff;">
      ${(args.featured as boolean) ? html`<div style="position:absolute;top:-0.75rem;left:50%;transform:translateX(-50%);"><span style="padding:0.25rem 1rem;font-size:0.75rem;font-weight:600;text-transform:uppercase;background:#3b82f6;color:white;border-radius:9999px;">Most Popular</span></div>` : ''}
      <h3 style="font-size:1.25rem;font-weight:700;color:#1e293b;margin:0 0 0.5rem;">${args.name}</h3>
      <p style="font-size:0.875rem;color:#94a3b8;margin:0 0 1.5rem;">${args.description}</p>
      <div style="display:flex;align-items:baseline;gap:0.25rem;margin-bottom:1.5rem;">
        <span style="font-size:2.5rem;font-weight:700;color:#1e293b;">€${args.price}</span>
        <span style="color:#94a3b8;">/Monat</span>
      </div>
      <ul style="list-style:none;padding:0;margin:0 0 2rem;">
        ${(['5 projects', '10 GB storage', 'Email support', { text: 'Priority support', included: false }] as Array<string | {text: string; included: boolean}>).map(f => {
          const text = typeof f === 'string' ? f : f.text;
          const included = typeof f === 'string' ? true : f.included;
          return html`
            <li style="display:flex;align-items:center;gap:0.75rem;padding:0.5rem 0;opacity:${included ? '1' : '0.5'};">
              <svg width="20" height="20" fill="none" stroke="${included ? '#22c55e' : '#94a3b8'}" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${included ? 'M5 13l4 4L19 7' : 'M6 18L18 6M6 6l12 12'}"/></svg>
              <span style="color:#64748b;">${text}</span>
            </li>
          `;
        })}
      </ul>
      <a href="#" style="display:block;width:100%;padding:0.75rem;text-align:center;font-weight:600;border-radius:0.5rem;text-decoration:none;${(args.featured as boolean) ? 'background:#3b82f6;color:white;' : 'border:2px solid #e2e8f0;color:#1e293b;'}">Auswählen</a>
    </div>
  </div>
`;

export const Default: Story = {
  args: { name: 'Starter', price: 9, description: 'For individuals and small teams', featured: false },
  render: (args) => renderCard(args),
};

export const Featured: Story = {
  args: { name: 'Business', price: 49, description: 'For growing organizations', featured: true },
  render: (args) => renderCard(args),
};
