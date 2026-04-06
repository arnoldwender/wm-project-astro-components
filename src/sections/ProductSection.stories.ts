/**
 * ProductSection Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Sections/ProductSection',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'E-commerce product display section. Six variants (grid, carousel, featured, comparison, detail, quick-view). Product cards with pricing, badges, ratings, and stock status.' } } },
  argTypes: { variant: { control: 'select', options: ['grid', 'carousel', 'featured', 'comparison', 'detail'] } },
};
export default meta;
type Story = StoryObj;

const products = [
  { name: 'Wireless Headphones', price: '79.99', badge: 'Bestseller', rating: 4.5 },
  { name: 'Desk Organizer', price: '34.99', rating: 4.0 },
  { name: 'USB-C Hub', price: '49.99', badge: 'New', rating: 4.8 },
];

export const Grid: Story = {
  render: () => html`
    <section style="padding:4rem 2rem;font-family:system-ui,sans-serif;">
      <h2 style="text-align:center;font-size:2rem;font-weight:700;margin:0 0 3rem;">Featured Products</h2>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;max-width:64rem;margin:0 auto;">
        ${products.map(p => html`
          <article style="background:white;border:1px solid #e2e8f0;border-radius:0.75rem;overflow:hidden;">
            <div style="aspect-ratio:1;background:#f1f5f9;display:flex;align-items:center;justify-content:center;position:relative;">
              <span style="color:#94a3b8;font-size:0.875rem;">Product Image</span>
              ${p.badge ? html`<span style="position:absolute;top:0.75rem;left:0.75rem;padding:0.25rem 0.75rem;background:#ef4444;color:white;font-size:0.75rem;font-weight:600;border-radius:9999px;">${p.badge}</span>` : ''}
            </div>
            <div style="padding:1rem;">
              <h3 style="font-size:1rem;font-weight:600;margin:0 0 0.5rem;color:#1e293b;">${p.name}</h3>
              <div style="display:flex;align-items:center;gap:0.25rem;margin-bottom:0.5rem;color:#f59e0b;">
                ${'★'.repeat(Math.floor(p.rating))}${p.rating % 1 ? '½' : ''}
                <span style="color:#94a3b8;font-size:0.75rem;margin-left:0.25rem;">(${Math.floor(Math.random() * 200 + 10)})</span>
              </div>
              <span style="font-size:1.25rem;font-weight:700;color:#1e293b;">€${p.price}</span>
            </div>
          </article>
        `)}
      </div>
    </section>
  `,
};

export const Featured: Story = {
  render: () => html`
    <section style="padding:4rem 2rem;font-family:system-ui,sans-serif;">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:3rem;max-width:64rem;margin:0 auto;align-items:center;">
        <div style="aspect-ratio:1;background:#f1f5f9;border-radius:1rem;display:flex;align-items:center;justify-content:center;"><span style="color:#94a3b8;">Product Image</span></div>
        <div>
          <span style="padding:0.25rem 0.75rem;background:#ef4444;color:white;font-size:0.75rem;font-weight:600;border-radius:9999px;">Sale</span>
          <h2 style="font-size:2rem;font-weight:700;margin:1rem 0 0.5rem;">Premium Backpack</h2>
          <p style="color:#64748b;margin:0 0 1.5rem;">Built for everyday adventures with water-resistant material.</p>
          <div style="display:flex;align-items:baseline;gap:0.75rem;margin-bottom:1.5rem;">
            <span style="font-size:2rem;font-weight:700;">€149</span>
            <span style="text-decoration:line-through;color:#94a3b8;">€199</span>
          </div>
          <button style="padding:0.875rem 2rem;background:#3b82f6;color:white;border:none;border-radius:0.75rem;font-weight:600;font-size:1rem;cursor:pointer;">Add to Cart</button>
        </div>
      </div>
    </section>
  `,
};
