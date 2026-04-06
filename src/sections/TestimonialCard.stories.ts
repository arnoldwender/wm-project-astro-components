/**
 * TestimonialCard Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
const meta: Meta = {
  title: 'Sections/TestimonialCard',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Individual testimonial card. Four variants (card, minimal, social, large). Five-star rating display, source platform icon, initials fallback avatar.' } } },
  argTypes: { variant: { control: 'select', options: ['card', 'minimal', 'social', 'large'] }, rating: { control: { type: 'range', min: 1, max: 5 } } },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <div style="max-width:24rem;padding:2rem;font-family:system-ui,sans-serif;">
      <div style="background:white;border:1px solid #e2e8f0;border-radius:0.75rem;padding:1.5rem;">
        <div style="display:flex;gap:0.125rem;margin-bottom:1rem;color:#f59e0b;">★★★★★</div>
        <blockquote style="font-size:1rem;color:#1e293b;margin:0 0 1.5rem;line-height:1.7;">
          <span style="color:#3b82f6;font-size:2rem;line-height:0;">"</span>Acme Corp transformed our workflow. We shipped 3x faster after onboarding.<span style="color:#3b82f6;font-size:2rem;line-height:0;">"</span>
        </blockquote>
        <div style="display:flex;align-items:center;gap:1rem;">
          <div style="width:3rem;height:3rem;border-radius:50%;background:rgba(59,130,246,0.1);color:#3b82f6;display:flex;align-items:center;justify-content:center;font-weight:600;">JD</div>
          <div>
            <p style="font-weight:600;color:#1e293b;margin:0;">Jane Doe</p>
            <p style="font-size:0.875rem;color:#94a3b8;margin:0;">VP of Engineering, Widget Inc</p>
          </div>
        </div>
      </div>
    </div>
  `,
};

export const Large: Story = {
  render: () => html`
    <div style="padding:3rem;font-family:system-ui,sans-serif;text-align:center;max-width:48rem;margin:0 auto;">
      <div style="display:flex;justify-content:center;gap:0.125rem;margin-bottom:1.5rem;color:#f59e0b;font-size:1.25rem;">★★★★★</div>
      <blockquote style="font-size:1.75rem;font-weight:500;font-style:italic;color:#1e293b;margin:0 0 2rem;line-height:1.5;">
        "The best investment we made this year. Outstanding support and results that speak for themselves."
      </blockquote>
      <div style="display:flex;align-items:center;justify-content:center;gap:1rem;">
        <div style="width:3rem;height:3rem;border-radius:50%;background:rgba(59,130,246,0.1);color:#3b82f6;display:flex;align-items:center;justify-content:center;font-weight:600;">JS</div>
        <div style="text-align:left;">
          <p style="font-weight:600;margin:0;">John Smith</p>
          <p style="font-size:0.875rem;color:#94a3b8;margin:0;">Founder, Acme Corp</p>
        </div>
      </div>
    </div>
  `,
};
