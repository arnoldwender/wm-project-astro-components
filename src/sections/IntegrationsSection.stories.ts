/**
 * IntegrationsSection Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Sections/IntegrationsSection',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Display integrations, partners, or compatible tools.
- Six variants: grid, categories, featured, marquee, searchable, compact
- Configurable columns (2-5)
- Search input and category grouping
        `,
      },
    },
  },
  argTypes: {
    variant: { control: 'select', options: ['grid', 'categories', 'featured', 'marquee', 'searchable', 'compact'], description: 'Layout variant' },
    columns: { control: 'select', options: [2, 3, 4, 5], description: 'Grid columns' },
    title: { control: 'text', description: 'Section title' },
  },
};

export default meta;
type Story = StoryObj;

const integrationCard = (name: string, emoji: string, status: string, statusBg: string, statusColor: string) => html`
  <div style="background: #fff; border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 1.25rem;">
    <div style="display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 0.75rem;">
      <div style="width: 2.5rem; height: 2.5rem; background: #f1f5f9; border-radius: 0.5rem; display: flex; align-items: center; justify-content: center; font-size: 1.25rem;">${emoji}</div>
      <span style="padding: 0.125rem 0.5rem; font-size: 0.625rem; font-weight: 600; background: ${statusBg}; color: ${statusColor}; border-radius: 9999px;">${status}</span>
    </div>
    <h3 style="font-size: 0.875rem; font-weight: 600; color: #1e293b; margin: 0;">${name}</h3>
  </div>
`;

const renderIntegrations = (args: Record<string, unknown>) => html`
  <section style="padding: 4rem 2rem;">
    <div style="max-width: 72rem; margin: 0 auto;">
      <div style="text-align: center; margin-bottom: 3rem;">
        <span style="font-size: 0.875rem; font-weight: 600; color: #3b82f6; text-transform: uppercase;">Ecosystem</span>
        <h2 style="font-size: 2rem; font-weight: 700; color: #1e293b; margin: 0.5rem 0;">${args.title}</h2>
        <p style="color: #64748b;">Connect Acme Platform with the tools you already use.</p>
      </div>
      ${args.variant === 'searchable' ? html`
        <div style="max-width: 24rem; margin: 0 auto 2rem;">
          <input type="text" placeholder="Search integrations..." style="width: 100%; padding: 0.75rem 1rem; border: 1px solid #e2e8f0; border-radius: 0.5rem; font-size: 0.875rem; box-sizing: border-box;" />
        </div>
      ` : ''}
      <div style="display: grid; grid-template-columns: repeat(${args.columns}, 1fr); gap: 1rem;">
        ${integrationCard('Slack', '💬', 'Available', '#dcfce7', '#166534')}
        ${integrationCard('GitHub', '🐙', 'Available', '#dcfce7', '#166534')}
        ${integrationCard('Figma', '🎨', 'New', '#fae8ff', '#86198f')}
        ${integrationCard('Notion', '📝', 'Available', '#dcfce7', '#166534')}
        ${integrationCard('Jira', '📋', 'Beta', '#dbeafe', '#1e40af')}
        ${integrationCard('Zapier', '⚡', 'Available', '#dcfce7', '#166534')}
        ${integrationCard('Stripe', '💳', 'Coming Soon', '#fef3c7', '#92400e')}
        ${integrationCard('Vercel', '▲', 'New', '#fae8ff', '#86198f')}
      </div>
    </div>
  </section>
`;

export const Grid: Story = {
  args: { variant: 'grid', columns: 4, title: '200+ Integrations' },
  render: (args) => renderIntegrations(args),
};

export const Searchable: Story = {
  args: { variant: 'searchable', columns: 4, title: 'Find an Integration' },
  render: (args) => renderIntegrations(args),
};
