/**
 * FeatureCard Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Sections/FeatureCard',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Individual feature card for use in feature sections.
- Four variants: default, compact, horizontal, centered
- Renders as link when href is provided
- Supports text/emoji icons or inline SVG
- Optional icon background circle
        `,
      },
    },
  },
  argTypes: {
    icon: { control: 'text', description: 'Icon emoji or SVG' },
    title: { control: 'text', description: 'Feature title' },
    description: { control: 'text', description: 'Feature description' },
    variant: { control: 'select', options: ['default', 'compact', 'horizontal', 'centered'], description: 'Card variant' },
    iconBackground: { control: 'boolean', description: 'Show icon background' },
  },
};

export default meta;
type Story = StoryObj;

const renderFeatureCard = (args: Record<string, unknown>) => html`
  <div style="padding: 2rem; max-width: ${args.variant === 'horizontal' ? '24rem' : '16rem'};">
    <div style="${args.variant === 'horizontal' ? 'display: flex; align-items: flex-start; gap: 1rem;' : ''} ${args.variant === 'centered' ? 'text-align: center;' : ''}">
      <div style="${args.iconBackground ? 'width: 3rem; height: 3rem; border-radius: 0.75rem; display: flex; align-items: center; justify-content: center; background: rgba(59,130,246,0.1); margin-bottom: 1rem;' : 'font-size: 2rem; margin-bottom: 0.75rem;'} ${args.variant === 'centered' ? 'margin-left: auto; margin-right: auto;' : ''} ${args.variant === 'horizontal' ? 'flex-shrink: 0; margin-bottom: 0;' : ''}">
        <span style="${args.iconBackground ? 'font-size: 1.25rem;' : ''}">${args.icon}</span>
      </div>
      <div>
        <h3 style="font-weight: 600; color: #1e293b; margin: 0 0 0.5rem; font-size: ${args.variant === 'compact' ? '0.875rem' : '1rem'};">${args.title}</h3>
        <p style="font-size: 0.875rem; color: #64748b; margin: 0; line-height: 1.5;">${args.description}</p>
      </div>
    </div>
  </div>
`;

export const Default: Story = {
  args: { icon: '⚡', title: 'Lightning Fast', description: 'Optimized for speed with sub-100ms response times.', variant: 'default', iconBackground: true },
  render: (args) => renderFeatureCard(args),
};

export const Horizontal: Story = {
  args: { icon: '🔒', title: 'Enterprise Security', description: 'SOC 2 compliant with end-to-end encryption.', variant: 'horizontal', iconBackground: true },
  render: (args) => renderFeatureCard(args),
};

export const Centered: Story = {
  args: { icon: '🌍', title: 'Global CDN', description: 'Content delivered from 50+ edge locations worldwide.', variant: 'centered', iconBackground: true },
  render: (args) => renderFeatureCard(args),
};
