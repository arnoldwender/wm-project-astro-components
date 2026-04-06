/**
 * Testimonials Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
const meta: Meta = {
  title: 'Sections/Testimonials',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Premium testimonials section. Three layouts (carousel, grid, masonry). Autoplay carousel with touch/swipe, Schema.org Review markup, trust badge header.' } } },
  argTypes: { layout: { control: 'select', options: ['carousel', 'grid', 'masonry'] } },
};
export default meta;
type Story = StoryObj;

const testimonials = [
  { name: 'Jane Doe', role: 'CTO, Widget Inc', quote: 'Outstanding service and fast delivery. Completely transformed our operations.', rating: 5 },
  { name: 'John Smith', role: 'CEO, Acme Corp', quote: 'Transformed our entire workflow in weeks. The ROI was immediate.', rating: 5 },
  { name: 'Maria Garcia', role: 'Designer, Studio One', quote: 'Intuitive interface and excellent documentation. A pleasure to work with.', rating: 4 },
];

export const Grid: Story = {
  render: () => html`
    <section style="padding:4rem 2rem;font-family:system-ui,sans-serif;">
      <h2 style="text-align:center;font-size:2rem;font-weight:700;margin:0 0 3rem;">What our customers say</h2>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;max-width:64rem;margin:0 auto;">
        ${testimonials.map(t => html`
          <div style="background:white;border:1px solid #e2e8f0;border-radius:0.75rem;padding:1.5rem;">
            <div style="color:#f59e0b;margin-bottom:0.75rem;">${'★'.repeat(t.rating)}${'☆'.repeat(5 - t.rating)}</div>
            <p style="color:#1e293b;margin:0 0 1.5rem;line-height:1.6;">"${t.quote}"</p>
            <div style="display:flex;align-items:center;gap:0.75rem;">
              <div style="width:2.5rem;height:2.5rem;border-radius:50%;background:rgba(59,130,246,0.1);color:#3b82f6;display:flex;align-items:center;justify-content:center;font-weight:600;font-size:0.75rem;">${t.name.split(' ').map(n => n[0]).join('')}</div>
              <div><p style="font-weight:600;margin:0;font-size:0.875rem;">${t.name}</p><p style="font-size:0.75rem;color:#94a3b8;margin:0;">${t.role}</p></div>
            </div>
          </div>
        `)}
      </div>
    </section>
  `,
};

export const Carousel: Story = {
  render: () => html`
    <section style="padding:4rem 2rem;font-family:system-ui,sans-serif;text-align:center;">
      <h2 style="font-size:2rem;font-weight:700;margin:0 0 3rem;">Customer Stories</h2>
      <div style="max-width:36rem;margin:0 auto;background:white;border:1px solid #e2e8f0;border-radius:0.75rem;padding:2rem;">
        <div style="color:#f59e0b;margin-bottom:1rem;">★★★★★</div>
        <p style="font-size:1.125rem;font-style:italic;color:#1e293b;margin:0 0 1.5rem;line-height:1.6;">"${testimonials[0].quote}"</p>
        <p style="font-weight:600;margin:0;">${testimonials[0].name}</p>
        <p style="font-size:0.875rem;color:#94a3b8;margin:0;">${testimonials[0].role}</p>
      </div>
      <div style="display:flex;justify-content:center;gap:0.5rem;margin-top:1.5rem;">
        ${testimonials.map((_, i) => html`<div style="width:0.5rem;height:0.5rem;border-radius:50%;background:${i === 0 ? '#3b82f6' : '#cbd5e1'};"></div>`)}
      </div>
    </section>
  `,
};
