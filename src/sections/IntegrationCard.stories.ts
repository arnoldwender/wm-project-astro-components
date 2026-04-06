/**
 * IntegrationCard Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Sections/IntegrationCard',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Individual integration, partner, or tool card.
- Four variants: default, compact, detailed, minimal
- Status badges: available, coming-soon, beta, new
- Featured highlight mode with accent styling
        `,
      },
    },
  },
  argTypes: {
    name: { control: 'text', description: 'Integration name' },
    description: { control: 'text', description: 'Integration description' },
    variant: { control: 'select', options: ['default', 'compact', 'detailed', 'minimal'], description: 'Card variant' },
    status: { control: 'select', options: ['available', 'coming-soon', 'beta', 'new'], description: 'Integration status' },
    featured: { control: 'boolean', description: 'Featured highlight' },
  },
};

export default meta;
type Story = StoryObj;

const statusColors: Record<string, { bg: string; text: string; label: string }> = {
  available: { bg: '#dcfce7', text: '#166534', label: 'Available' },
  'coming-soon': { bg: '#fef3c7', text: '#92400e', label: 'Coming Soon' },
  beta: { bg: '#dbeafe', text: '#1e40af', label: 'Beta' },
  new: { bg: '#fae8ff', text: '#86198f', label: 'New' },
};

const renderIntegrationCard = (args: Record<string, unknown>) => html`
  <div style="padding: 2rem; max-width: 20rem;">
    <div style="background: #fff; border: ${args.featured ? '2px solid #3b82f6' : '1px solid #e2e8f0'}; border-radius: 0.75rem; padding: 1.5rem; transition: box-shadow 0.2s;">
      <div style="display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 1rem;">
        <div style="width: 3rem; height: 3rem; background: #f1f5f9; border-radius: 0.75rem; display: flex; align-items: center; justify-content: center; font-size: 1.5rem;">
          ${args.name === 'Slack' ? '💬' : args.name === 'GitHub' ? '🐙' : '🔗'}
        </div>
        ${args.status ? html`
          <span style="padding: 0.125rem 0.5rem; font-size: 0.625rem; font-weight: 600; background: ${statusColors[args.status as string]?.bg}; color: ${statusColors[args.status as string]?.text}; border-radius: 9999px;">
            ${statusColors[args.status as string]?.label}
          </span>
        ` : ''}
      </div>
      <h3 style="font-weight: 600; color: #1e293b; margin: 0 0 0.25rem;">${args.name}</h3>
      ${args.category ? html`<span style="font-size: 0.75rem; color: #94a3b8;">${args.category}</span>` : ''}
      ${args.description ? html`<p style="font-size: 0.875rem; color: #64748b; margin: 0.5rem 0 0; line-height: 1.5;">${args.description}</p>` : ''}
    </div>
  </div>
`;

export const Default: Story = {
  args: { name: 'Slack', description: 'Send real-time notifications to your Slack channels.', variant: 'default', status: 'available', category: 'Communication', featured: false },
  render: (args) => renderIntegrationCard(args),
};

export const BetaFeatured: Story = {
  args: { name: 'Acme Analytics', description: 'Connect your analytics dashboard for deeper insights.', variant: 'detailed', status: 'beta', category: 'Analytics', featured: true },
  render: (args) => renderIntegrationCard(args),
};

export const ComingSoon: Story = {
  args: { name: 'GitHub', description: 'Sync issues and pull requests automatically.', variant: 'default', status: 'coming-soon', category: 'Developer Tools', featured: false },
  render: (args) => renderIntegrationCard(args),
};
