/**
 * ResourceCard Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Sections/ResourceCard',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Downloadable resource or document card. Four variants (default, card, compact, horizontal). Auto file type icon and color coding (PDF, DOC, XLS, etc.).' } } },
  argTypes: { variant: { control: 'select', options: ['default', 'card', 'compact', 'horizontal'] }, fileType: { control: 'select', options: ['pdf', 'doc', 'xls', 'zip'] } },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <div style="max-width:32rem;padding:2rem;font-family:system-ui,sans-serif;">
      <a href="#" style="display:flex;align-items:center;gap:1rem;padding:1rem;background:white;border:1px solid #e2e8f0;border-radius:0.75rem;text-decoration:none;">
        <div style="width:3rem;height:3rem;border-radius:0.5rem;background:#fee2e2;color:#dc2626;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.75rem;">PDF</div>
        <div style="flex:1;min-width:0;">
          <h3 style="font-size:1rem;font-weight:600;color:#1e293b;margin:0 0 0.25rem;">2026 Annual Report</h3>
          <p style="font-size:0.875rem;color:#64748b;margin:0;">Full financial results and strategic outlook.</p>
          <div style="display:flex;gap:0.75rem;font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;">
            <span>3.8 MB</span><span>1,240 downloads</span>
          </div>
        </div>
        <div style="width:2.5rem;height:2.5rem;border-radius:50%;background:#f1f5f9;display:flex;align-items:center;justify-content:center;color:#94a3b8;">↓</div>
      </a>
    </div>
  `,
};

export const Compact: Story = {
  render: () => html`
    <div style="max-width:28rem;padding:2rem;font-family:system-ui,sans-serif;">
      ${['Brand Guidelines (ZIP, 12 MB)', 'Price List (XLS, 1.2 MB)', 'Product Brochure (PDF, 5.6 MB)'].map((item, i) => html`
        <a href="#" style="display:flex;align-items:center;gap:0.75rem;padding:0.75rem;border-radius:0.5rem;text-decoration:none;color:#1e293b;">
          <div style="width:2.5rem;height:2.5rem;border-radius:0.5rem;background:${['#fef3c7', '#dcfce7', '#fee2e2'][i]};color:${['#d97706', '#16a34a', '#dc2626'][i]};display:flex;align-items:center;justify-content:center;font-size:0.625rem;font-weight:700;">${['ZIP', 'XLS', 'PDF'][i]}</div>
          <div style="flex:1;"><span style="font-size:0.875rem;font-weight:600;">${item}</span></div>
          <div style="width:2rem;height:2rem;border-radius:50%;background:#f1f5f9;display:flex;align-items:center;justify-content:center;font-size:0.75rem;color:#94a3b8;">↓</div>
        </a>
      `)}
    </div>
  `,
};
