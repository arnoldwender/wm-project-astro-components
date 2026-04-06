/**
 * HeroSection Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Sections/HeroSection',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Slot-based hero section for landing pages and key entry points.
- Eight variants: centered, split, background, gradient, minimal, product, feature-grid, split-visual
- Four size presets: sm, md, lg, full
- Background image/video support with overlay
- Decorative gradient blobs and 3D hover effects
- Feature grid with icon cards below CTA
- Split visual with benefits list
        `,
      },
    },
  },
  argTypes: {
    variant: { control: 'select', options: ['centered', 'split', 'background', 'gradient', 'minimal', 'product', 'feature-grid', 'split-visual'], description: 'Layout variant' },
    size: { control: 'select', options: ['sm', 'md', 'lg', 'full'], description: 'Section height' },
  },
};

export default meta;
type Story = StoryObj;

const sizeMap: Record<string, string> = { sm: '400px', md: '500px', lg: '600px', full: '90vh' };

const renderHeroSection = (args: Record<string, unknown>) => html`
  <section style="min-height: ${sizeMap[args.size as string] || '500px'}; display: flex; align-items: center; ${args.variant === 'gradient' ? 'background: linear-gradient(135deg, #667eea, #764ba2); color: #fff;' : args.variant === 'background' ? 'background: #1e293b; color: #fff; position: relative;' : 'background: #fff;'} padding: 4rem 2rem;">
    <div style="max-width: 72rem; margin: 0 auto; width: 100%;">
      ${args.variant === 'split' ? html`
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;">
          <div>
            <span style="font-size: 0.875rem; font-weight: 600; color: ${args.variant === 'gradient' ? 'rgba(255,255,255,0.8)' : '#3b82f6'}; text-transform: uppercase; display: block; margin-bottom: 1rem;">Trusted by 5,000+ Teams</span>
            <h1 style="font-size: 2.5rem; font-weight: 800; color: #1e293b; margin: 0 0 1rem; line-height: 1.1;">Build Faster, Ship Sooner</h1>
            <p style="font-size: 1.125rem; color: #64748b; margin: 0 0 2rem; line-height: 1.5;">The modern platform for web development teams.</p>
            <div style="display: flex; gap: 1rem;">
              <a href="#" style="padding: 0.875rem 2rem; background: #3b82f6; color: #fff; font-weight: 600; border-radius: 0.5rem; text-decoration: none;">Get Started Free</a>
              <a href="#" style="padding: 0.875rem 2rem; border: 2px solid #e2e8f0; color: #475569; font-weight: 600; border-radius: 0.5rem; text-decoration: none;">Watch Demo</a>
            </div>
          </div>
          <div style="aspect-ratio: 4/3; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 1rem; box-shadow: 0 20px 60px rgba(0,0,0,0.15);"></div>
        </div>
      ` : html`
        <div style="text-align: center; max-width: 48rem; margin: 0 auto;">
          <span style="font-size: 0.875rem; font-weight: 600; ${args.variant === 'gradient' || args.variant === 'background' ? 'color: rgba(255,255,255,0.8);' : 'color: #3b82f6;'} text-transform: uppercase; display: block; margin-bottom: 1rem;">Trusted by 5,000+ Teams</span>
          <h1 style="font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 800; margin: 0 0 1rem; line-height: 1.1; ${args.variant === 'gradient' || args.variant === 'background' ? 'color: #fff;' : 'color: #1e293b;'}">${args.variant === 'minimal' ? 'Simple. Fast. Reliable.' : 'Build Faster, Ship Sooner'}</h1>
          <p style="font-size: 1.25rem; margin: 0 0 2rem; line-height: 1.5; ${args.variant === 'gradient' || args.variant === 'background' ? 'color: rgba(255,255,255,0.85);' : 'color: #64748b;'}">The modern platform for web development teams.</p>
          <div style="display: flex; justify-content: center; gap: 1rem;">
            <a href="#" style="padding: 1rem 2rem; ${args.variant === 'gradient' || args.variant === 'background' ? 'background: #fff; color: #1e293b;' : 'background: #3b82f6; color: #fff;'} font-weight: 600; border-radius: 0.5rem; text-decoration: none;">Get Started Free</a>
            <a href="#" style="padding: 1rem 2rem; border: 2px solid ${args.variant === 'gradient' || args.variant === 'background' ? 'rgba(255,255,255,0.5)' : '#e2e8f0'}; color: ${args.variant === 'gradient' || args.variant === 'background' ? '#fff' : '#475569'}; font-weight: 600; border-radius: 0.5rem; text-decoration: none;">Watch Demo</a>
          </div>
        </div>
      `}
    </div>
  </section>
`;

export const Centered: Story = {
  args: { variant: 'centered', size: 'lg' },
  render: (args) => renderHeroSection(args),
};

export const Split: Story = {
  args: { variant: 'split', size: 'md' },
  render: (args) => renderHeroSection(args),
};

export const Gradient: Story = {
  args: { variant: 'gradient', size: 'lg' },
  render: (args) => renderHeroSection(args),
};

/* ---- Feature Grid variant story ---- */

export const FeatureGrid: Story = {
  args: { variant: 'feature-grid', size: 'lg' },
  render: () => html`
    <section style="min-height: 600px; display: flex; align-items: center; background: #fff; padding: 4rem 2rem;">
      <div style="max-width: 64rem; margin: 0 auto; width: 100%; text-align: center;">
        <span style="font-size: 0.875rem; font-weight: 600; color: #3b82f6; text-transform: uppercase; display: block; margin-bottom: 1rem;">Why Choose Us</span>
        <h1 style="font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 800; color: #1e293b; margin: 0 0 1rem; line-height: 1.1;">Everything You Need to Ship</h1>
        <p style="font-size: 1.25rem; color: #64748b; margin: 0 0 2rem; max-width: 36rem; margin-left: auto; margin-right: auto;">One platform for your entire workflow.</p>
        <div style="display: flex; justify-content: center; gap: 1rem; margin-bottom: 3rem;">
          <a href="#" style="padding: 1rem 2rem; background: #3b82f6; color: #fff; font-weight: 600; border-radius: 0.5rem; text-decoration: none;">Get Started</a>
        </div>
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem; padding-top: 2rem; border-top: 1px solid #e2e8f0;">
          ${['Fast Builds', 'Auto Deploy', 'Edge CDN', 'Analytics'].map(feat => html`
            <div style="text-align: center;">
              <div style="width: 3rem; height: 3rem; background: #eff6ff; border-radius: 0.75rem; margin: 0 auto 0.75rem; display: flex; align-items: center; justify-content: center;">
                <svg width="24" height="24" fill="none" stroke="#3b82f6" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              </div>
              <span style="font-size: 0.875rem; font-weight: 600; color: #1e293b;">${feat}</span>
            </div>
          `)}
        </div>
      </div>
    </section>
  `,
  name: 'Feature Grid',
};

/* ---- Split Visual variant story ---- */

export const SplitVisual: Story = {
  args: { variant: 'split-visual', size: 'md' },
  render: () => html`
    <section style="min-height: 500px; display: flex; align-items: center; background: #fff; padding: 4rem 2rem;">
      <div style="max-width: 72rem; margin: 0 auto; width: 100%; display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;">
        <div>
          <span style="font-size: 0.875rem; font-weight: 600; color: #3b82f6; text-transform: uppercase; display: block; margin-bottom: 1rem;">All-in-One Platform</span>
          <h1 style="font-size: 2.5rem; font-weight: 800; color: #1e293b; margin: 0 0 1rem; line-height: 1.1;">Build With Confidence</h1>
          <p style="font-size: 1.125rem; color: #64748b; margin: 0 0 1.5rem;">Everything you need to create, deploy, and scale your web applications.</p>
          <ul style="list-style: none; padding: 0; margin: 0 0 2rem; display: flex; flex-direction: column; gap: 0.75rem;">
            ${['99.99% uptime guarantee', 'Global edge network', 'Built-in CI/CD pipeline', 'Real-time analytics'].map(b => html`
              <li style="display: flex; align-items: center; gap: 0.75rem; font-size: 0.9375rem; color: #475569;">
                <svg width="20" height="20" fill="none" stroke="#22c55e" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                ${b}
              </li>
            `)}
          </ul>
          <div style="display: flex; gap: 1rem;">
            <a href="#" style="padding: 0.875rem 2rem; background: #3b82f6; color: #fff; font-weight: 600; border-radius: 0.5rem; text-decoration: none;">Start Building</a>
            <a href="#" style="padding: 0.875rem 2rem; border: 2px solid #e2e8f0; color: #475569; font-weight: 600; border-radius: 0.5rem; text-decoration: none;">View Docs</a>
          </div>
        </div>
        <div style="aspect-ratio: 4/3; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 1rem; box-shadow: 0 20px 60px rgba(0,0,0,0.15);"></div>
      </div>
    </section>
  `,
  name: 'Split Visual',
};
