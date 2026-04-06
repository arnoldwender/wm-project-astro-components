/**
 * Features Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Sections/Features',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Premium features showcase section.
- Five layouts: grid, alternating, bento, cards, list
- Configurable columns (2-4)
- Scroll-triggered entrance animations
- Feature highlighting and badge labels
        `,
      },
    },
  },
  argTypes: {
    layout: { control: 'select', options: ['grid', 'alternating', 'bento', 'cards', 'list'], description: 'Layout type' },
    columns: { control: 'select', options: [2, 3, 4], description: 'Grid columns' },
    title: { control: 'text', description: 'Section title' },
  },
};

export default meta;
type Story = StoryObj;

const featureCard = (icon: string, title: string, desc: string, highlighted = false) => html`
  <div style="padding: 1.5rem; ${highlighted ? 'border: 2px solid #3b82f6; border-radius: 1rem; position: relative;' : ''}">
    ${highlighted ? html`<span style="position: absolute; top: -0.5rem; right: 1rem; padding: 0.125rem 0.5rem; background: #3b82f6; color: #fff; font-size: 0.625rem; font-weight: 600; border-radius: 9999px;">Popular</span>` : ''}
    <div style="width: 3rem; height: 3rem; border-radius: 0.75rem; display: flex; align-items: center; justify-content: center; background: rgba(59,130,246,0.1); margin-bottom: 1rem;">
      <span style="font-size: 1.25rem;">${icon}</span>
    </div>
    <h3 style="font-weight: 600; color: #1e293b; margin: 0 0 0.5rem;">${title}</h3>
    <p style="font-size: 0.875rem; color: #64748b; margin: 0; line-height: 1.5;">${desc}</p>
  </div>
`;

const renderFeatures = (args: Record<string, unknown>) => html`
  <section style="padding: 4rem 2rem;">
    <div style="max-width: 72rem; margin: 0 auto;">
      <div style="text-align: center; margin-bottom: 3rem;">
        <span style="font-size: 0.875rem; font-weight: 600; color: #3b82f6; text-transform: uppercase;">Built for modern teams</span>
        <h2 style="font-size: 2rem; font-weight: 700; color: #1e293b; margin: 0.5rem 0;">${args.title}</h2>
        <p style="color: #64748b; max-width: 32rem; margin: 0 auto;">Everything you need to manage projects, track progress, and ship faster.</p>
      </div>
      <div style="display: grid; grid-template-columns: repeat(${args.columns}, 1fr); gap: 2rem;">
        ${featureCard('⚡', 'Blazing Fast', 'Sub-100ms load times worldwide.')}
        ${featureCard('🔒', 'Secure by Default', 'End-to-end encryption on all plans.')}
        ${featureCard('📈', 'Scales With You', 'From 5 users to 5,000 with zero config.', true)}
        ${featureCard('🌍', 'Global CDN', 'Content delivered from 50+ edge locations.')}
        ${featureCard('🔄', 'Integrations', 'Connect 200+ tools and services.')}
        ${featureCard('📊', 'Analytics', 'Real-time dashboards and reports.')}
      </div>
    </div>
  </section>
`;

export const Grid: Story = {
  args: { layout: 'grid', columns: 3, title: 'Why Choose Acme Platform' },
  render: (args) => renderFeatures(args),
};

export const TwoColumns: Story = {
  args: { layout: 'grid', columns: 2, title: 'Core Features' },
  render: (args) => renderFeatures(args),
};
