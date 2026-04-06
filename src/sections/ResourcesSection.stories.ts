/**
 * ResourcesSection Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Sections/ResourcesSection',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Downloadable resources display. Six variants (grid, list, categories, featured, compact, cards). Category filter buttons with active state.' } } },
  argTypes: { variant: { control: 'select', options: ['grid', 'list', 'categories', 'featured', 'compact', 'cards'] } },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <section style="padding:4rem 2rem;font-family:system-ui,sans-serif;">
      <div style="text-align:center;margin-bottom:3rem;">
        <span style="font-size:0.875rem;font-weight:600;text-transform:uppercase;color:#3b82f6;display:block;margin-bottom:0.5rem;">Resource Center</span>
        <h2 style="font-size:2rem;font-weight:700;margin:0 0 0.5rem;">Downloads & Resources</h2>
        <p style="color:#64748b;">Everything you need to get started.</p>
      </div>
      <div style="display:flex;justify-content:center;gap:0.5rem;margin-bottom:2rem;">
        ${['All', 'Guides', 'Templates', 'Reports'].map((c, i) => html`
          <button style="padding:0.5rem 1rem;border-radius:9999px;font-size:0.875rem;font-weight:500;border:none;cursor:pointer;${i === 0 ? 'background:#3b82f6;color:white;' : 'background:#f1f5f9;color:#64748b;'}">${c}</button>
        `)}
      </div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;max-width:64rem;margin:0 auto;">
        ${[{ t: 'Product Brochure', type: 'PDF', size: '5.6 MB' }, { t: 'Price List 2026', type: 'XLS', size: '1.2 MB' }, { t: 'Setup Guide', type: 'PDF', size: '2.1 MB' }].map(r => html`
          <a href="#" style="display:flex;align-items:center;gap:1rem;padding:1rem;background:white;border:1px solid #e2e8f0;border-radius:0.75rem;text-decoration:none;">
            <div style="width:3rem;height:3rem;border-radius:0.5rem;background:#fee2e2;color:#dc2626;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.625rem;">${r.type}</div>
            <div style="flex:1;"><h3 style="font-size:0.875rem;font-weight:600;color:#1e293b;margin:0;">${r.t}</h3><span style="font-size:0.75rem;color:#94a3b8;">${r.size}</span></div>
          </a>
        `)}
      </div>
    </section>
  `,
};

export const CompactList: Story = {
  render: () => html`
    <section style="padding:4rem 2rem;font-family:system-ui,sans-serif;">
      <h2 style="text-align:center;font-size:2rem;font-weight:700;margin:0 0 2rem;">Downloads</h2>
      <div style="max-width:32rem;margin:0 auto;background:white;border:1px solid #e2e8f0;border-radius:0.75rem;overflow:hidden;">
        ${['Annual Report (PDF, 3.8 MB)', 'Brand Kit (ZIP, 12 MB)', 'API Documentation (PDF, 1.5 MB)'].map((item, i, arr) => html`
          <div style="display:flex;align-items:center;gap:0.75rem;padding:1rem 1.5rem;${i < arr.length - 1 ? 'border-bottom:1px solid #f1f5f9;' : ''}">
            <span style="font-size:0.875rem;font-weight:500;color:#1e293b;flex:1;">${item}</span>
            <span style="color:#3b82f6;font-size:0.875rem;">↓</span>
          </div>
        `)}
      </div>
    </section>
  `,
};
