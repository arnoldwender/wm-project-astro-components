/**
 * CTASection Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Sections/CTASection',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Slot-based CTA section for maximum flexibility.
- Six variants: centered, split, banner, card, gradient, image
- Four backgrounds: primary, dark, gradient, transparent
- Named slots: eyebrow, title, description, cta, extra
        `,
      },
    },
  },
  argTypes: {
    variant: { control: 'select', options: ['centered', 'split', 'banner', 'card', 'gradient', 'image'], description: 'Layout variant' },
    background: { control: 'select', options: ['primary', 'dark', 'gradient', 'transparent'], description: 'Background style' },
  },
};

export default meta;
type Story = StoryObj;

const renderCTASection = (args: Record<string, unknown>) => html`
  <section style="padding: ${args.variant === 'banner' ? '1.5rem 2rem' : '4rem 2rem'}; background: ${args.background === 'primary' ? '#3b82f6' : args.background === 'dark' ? '#1e293b' : args.background === 'gradient' ? 'linear-gradient(135deg, #3b82f6, #8b5cf6, #3b82f6)' : '#fff'}; color: ${args.background === 'transparent' ? '#1e293b' : '#fff'}; ${args.variant === 'card' ? 'background: transparent; padding: 4rem 2rem;' : ''}">
    <div style="max-width: 72rem; margin: 0 auto; ${args.variant === 'card' ? '' : ''}">
      ${args.variant === 'card' ? html`
        <div style="background: #3b82f6; color: #fff; border-radius: 1rem; padding: 3rem; text-align: center; max-width: 48rem; margin: 0 auto;">
          <h2 style="font-size: 2rem; font-weight: 700; margin: 0 0 1rem;">Upgrade Your Workflow</h2>
          <p style="font-size: 1.125rem; opacity: 0.9; margin: 0 0 2rem;">Go Pro and unlock all features today.</p>
          <a href="#" style="display: inline-block; padding: 0.875rem 2rem; background: #fff; color: #1e293b; font-weight: 600; border-radius: 0.5rem; text-decoration: none;">Upgrade Now</a>
        </div>
      ` : args.variant === 'split' ? html`
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;">
          <div>
            <span style="font-size: 0.875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.8; display: block; margin-bottom: 1rem;">Newsletter</span>
            <h2 style="font-size: 2rem; font-weight: 700; margin: 0 0 0.5rem; color: #1e293b;">Stay in the Loop</h2>
            <p style="color: #64748b; font-size: 1.125rem;">Get weekly tips on design and development.</p>
          </div>
          <div style="display: flex; gap: 0.5rem;">
            <input type="email" placeholder="you@example.com" style="flex: 1; padding: 0.875rem 1rem; border: 1px solid #e2e8f0; border-radius: 0.5rem; font-size: 0.875rem;" />
            <button style="padding: 0.875rem 1.5rem; background: #3b82f6; color: #fff; font-weight: 600; border: none; border-radius: 0.5rem; cursor: pointer;">Subscribe</button>
          </div>
        </div>
      ` : html`
        <div style="text-align: center; max-width: 48rem; margin: 0 auto;">
          <h2 style="font-size: 2.5rem; font-weight: 700; margin: 0 0 1rem;">Ready to Get Started?</h2>
          <p style="font-size: 1.125rem; opacity: 0.9; margin: 0 0 2rem;">Join 10,000+ teams already using Acme Platform.</p>
          <div style="display: flex; justify-content: center; gap: 1rem;">
            <a href="#" style="padding: 0.875rem 2rem; background: #fff; color: #1e293b; font-weight: 600; border-radius: 0.5rem; text-decoration: none;">Start Free Trial</a>
            <a href="#" style="padding: 0.875rem 2rem; border: 2px solid ${args.background === 'transparent' ? '#1e293b' : '#fff'}; color: ${args.background === 'transparent' ? '#1e293b' : '#fff'}; font-weight: 600; border-radius: 0.5rem; text-decoration: none;">Book a Demo</a>
          </div>
        </div>
      `}
    </div>
  </section>
`;

export const Centered: Story = {
  args: { variant: 'centered', background: 'primary' },
  render: (args) => renderCTASection(args),
};

export const Card: Story = {
  args: { variant: 'card', background: 'transparent' },
  render: (args) => renderCTASection(args),
};

export const Split: Story = {
  args: { variant: 'split', background: 'transparent' },
  render: (args) => renderCTASection(args),
};
