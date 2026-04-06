/**
 * LandingSection Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Layouts/LandingSection',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Pre-built section patterns for landing pages with scroll-triggered animations.

**Features:**
- Ten variants: hero, features, benefits, testimonials, pricing, faq, cta, stats, logos, content
- Configurable background (transparent, subtle, muted, gradient, dark, primary)
- Responsive grid columns (1-4)
- Scroll-triggered fade-in animation with reduced-motion support
        `,
      },
    },
  },
  argTypes: {
    variant: { control: 'select', options: ['hero', 'features', 'benefits', 'testimonials', 'pricing', 'faq', 'cta', 'stats', 'logos', 'content'], description: 'Section variant' },
    columns: { control: 'select', options: [1, 2, 3, 4], description: 'Grid columns' },
    background: { control: 'select', options: ['transparent', 'subtle', 'muted', 'gradient', 'dark', 'primary'], description: 'Background style' },
    padding: { control: 'select', options: ['sm', 'md', 'lg', 'xl'], description: 'Vertical padding' },
  },
};

export default meta;
type Story = StoryObj;

const bgMap: Record<string, string> = {
  transparent: 'background: transparent;',
  subtle: 'background: #f8fafc;',
  muted: 'background: #f1f5f9;',
  gradient: 'background: linear-gradient(to bottom, #f8fafc, transparent);',
  dark: 'background: #0f172a; color: white;',
  primary: 'background: #3b82f6; color: white;',
};

const padMap: Record<string, string> = { sm: '3rem', md: '4rem', lg: '5rem', xl: '7rem' };

const renderSection = (args: Record<string, unknown>) => {
  const bg = bgMap[args.background as string] || '';
  const pad = padMap[args.padding as string] || '5rem';

  return html`
    <section style="padding: ${pad} 2rem; font-family: system-ui, sans-serif; ${bg}">
      <div style="max-width: 1200px; margin: 0 auto;">
        <!-- Header -->
        <header style="text-align: center; margin-bottom: 3rem;">
          <div style="font-size: 0.875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: ${args.background === 'dark' || args.background === 'primary' ? 'rgba(255,255,255,0.8)' : '#3b82f6'}; margin-bottom: 0.75rem;">
            Our Features
          </div>
          <h2 style="font-size: 2.25rem; font-weight: 700; margin: 0 0 1rem;">Everything you need</h2>
          <p style="font-size: 1.125rem; opacity: 0.8; max-width: 48rem; margin: 0 auto;">Build better products with our comprehensive toolkit.</p>
        </header>

        <!-- Grid Content -->
        <div style="display: grid; grid-template-columns: repeat(${args.columns || 3}, 1fr); gap: 2rem;">
          ${[1, 2, 3].map((i) => html`
            <div style="padding: 1.5rem; background: ${args.background === 'dark' ? 'rgba(255,255,255,0.05)' : 'white'}; border-radius: 0.75rem; border: 1px solid ${args.background === 'dark' ? 'rgba(255,255,255,0.1)' : '#e2e8f0'};">
              <h3 style="font-weight: 600; margin: 0 0 0.5rem;">Feature ${i}</h3>
              <p style="font-size: 0.875rem; opacity: 0.7; margin: 0;">Description of feature ${i} goes here.</p>
            </div>
          `)}
        </div>
      </div>
    </section>
  `;
};

export const Features: Story = {
  args: { variant: 'features', columns: 3, background: 'transparent', padding: 'lg' },
  render: (args) => renderSection(args),
};

export const DarkBackground: Story = {
  args: { variant: 'features', columns: 3, background: 'dark', padding: 'lg' },
  render: (args) => renderSection(args),
};

export const CTASection: Story = {
  args: { variant: 'cta', columns: 1, background: 'primary', padding: 'xl' },
  render: (args) => html`
    <section style="padding: 7rem 2rem; background: #3b82f6; color: white; font-family: system-ui, sans-serif;">
      <div style="max-width: 48rem; margin: 0 auto; text-align: center;">
        <h2 style="font-size: 2.25rem; font-weight: 700; margin: 0 0 1rem;">Ready to get started?</h2>
        <p style="font-size: 1.125rem; opacity: 0.9; margin: 0 0 2rem;">Join thousands of teams already using our platform.</p>
        <button style="padding: 0.875rem 2rem; background: white; color: #3b82f6; border: none; border-radius: 0.5rem; font-weight: 600; cursor: pointer;">Start Free Trial</button>
      </div>
    </section>
  `,
};
