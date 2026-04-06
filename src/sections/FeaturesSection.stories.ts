/**
 * FeaturesSection Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Sections/FeaturesSection',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Multiple layouts for showcasing features and benefits.
- Six variants: grid, alternating, icons, cards, list, bento
- Configurable columns (2-4)
- Left or center header alignment
- Background options including decorative pattern
        `,
      },
    },
  },
  argTypes: {
    variant: { control: 'select', options: ['grid', 'alternating', 'icons', 'cards', 'list', 'bento'], description: 'Layout variant' },
    columns: { control: 'select', options: [2, 3, 4], description: 'Grid columns' },
    title: { control: 'text', description: 'Section title' },
    align: { control: 'select', options: ['left', 'center'], description: 'Header alignment' },
  },
};

export default meta;
type Story = StoryObj;

const card = (icon: string, title: string, desc: string, isCard = false) => html`
  <div style="${isCard ? 'background: #fff; border: 1px solid #e2e8f0; border-radius: 1rem; padding: 1.5rem; transition: transform 0.2s; box-shadow: 0 1px 3px rgba(0,0,0,0.05);' : 'padding: 1.5rem;'}">
    <div style="width: 3rem; height: 3rem; border-radius: 0.75rem; display: flex; align-items: center; justify-content: center; background: rgba(59,130,246,0.1); margin-bottom: 1rem;">
      <span style="font-size: 1.25rem;">${icon}</span>
    </div>
    <h3 style="font-weight: 600; color: #1e293b; margin: 0 0 0.5rem;">${title}</h3>
    <p style="font-size: 0.875rem; color: #64748b; margin: 0; line-height: 1.5;">${desc}</p>
  </div>
`;

const renderFeaturesSection = (args: Record<string, unknown>) => html`
  <section style="padding: 4rem 2rem; background: ${args.variant === 'cards' ? '#f8fafc' : '#fff'};">
    <div style="max-width: 72rem; margin: 0 auto;">
      <div style="text-align: ${args.align}; margin-bottom: 3rem; ${args.align === 'center' ? '' : 'max-width: 32rem;'}">
        <span style="font-size: 0.875rem; font-weight: 600; color: #3b82f6; text-transform: uppercase; display: block; margin-bottom: 0.5rem;">Features</span>
        <h2 style="font-size: 2rem; font-weight: 700; color: #1e293b; margin: 0 0 0.5rem;">${args.title}</h2>
        <p style="color: #64748b;">Acme Platform comes with all the tools your team needs to succeed.</p>
      </div>
      <div style="display: grid; grid-template-columns: repeat(${args.columns}, 1fr); gap: 1.5rem;">
        ${card('⚡', 'Fast', 'Lightning fast performance', args.variant === 'cards')}
        ${card('🔒', 'Secure', 'Enterprise-grade security', args.variant === 'cards')}
        ${card('🌍', 'Global', 'CDN in 50+ regions', args.variant === 'cards')}
      </div>
    </div>
  </section>
`;

export const Grid: Story = {
  args: { variant: 'grid', columns: 3, title: 'Everything You Need', align: 'center' },
  render: (args) => renderFeaturesSection(args),
};

export const Cards: Story = {
  args: { variant: 'cards', columns: 3, title: 'Platform Highlights', align: 'left' },
  render: (args) => renderFeaturesSection(args),
};
