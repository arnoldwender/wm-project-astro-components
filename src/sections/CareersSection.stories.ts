/**
 * CareersSection Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Sections/CareersSection',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Job listings and career opportunities section.
- Six variants: list, cards, grouped, featured, compact, detailed
- Department filter buttons with job counts
- Empty state message for no matching results
        `,
      },
    },
  },
  argTypes: {
    variant: { control: 'select', options: ['list', 'cards', 'grouped', 'featured', 'compact', 'detailed'], description: 'Layout variant' },
    title: { control: 'text', description: 'Section title' },
    showFilters: { control: 'boolean', description: 'Show department filters' },
  },
};

export default meta;
type Story = StoryObj;

const jobItem = (title: string, dept: string, loc: string, type: string) => html`
  <div style="display: flex; align-items: center; justify-content: space-between; padding: 1.25rem 1.5rem; border-bottom: 1px solid #e2e8f0;">
    <div>
      <h3 style="font-size: 1rem; font-weight: 600; color: #1e293b; margin: 0 0 0.25rem;">${title}</h3>
      <div style="display: flex; gap: 1rem; font-size: 0.875rem; color: #64748b;">
        <span>${dept}</span>
        <span>·</span>
        <span>${loc}</span>
        <span>·</span>
        <span>${type}</span>
      </div>
    </div>
    <a href="#" style="padding: 0.5rem 1rem; background: #3b82f6; color: #fff; font-size: 0.875rem; font-weight: 500; border-radius: 0.5rem; text-decoration: none;">Apply</a>
  </div>
`;

const renderCareersSection = (args: Record<string, unknown>) => html`
  <section style="padding: 4rem 2rem;">
    <div style="max-width: 64rem; margin: 0 auto;">
      <div style="text-align: center; margin-bottom: 3rem;">
        <span style="font-size: 0.875rem; font-weight: 600; color: #3b82f6; text-transform: uppercase;">We're Hiring</span>
        <h2 style="font-size: 2rem; font-weight: 700; color: #1e293b; margin: 0.5rem 0;">${args.title}</h2>
        <p style="color: #64748b;">Join our growing team and make an impact.</p>
      </div>
      ${args.showFilters ? html`
        <div style="display: flex; justify-content: center; gap: 0.5rem; margin-bottom: 2rem;">
          <button style="padding: 0.5rem 1rem; background: #3b82f6; color: #fff; border: none; border-radius: 9999px; font-size: 0.875rem; font-weight: 500; cursor: pointer;">All (5)</button>
          <button style="padding: 0.5rem 1rem; background: #f1f5f9; color: #64748b; border: none; border-radius: 9999px; font-size: 0.875rem; font-weight: 500; cursor: pointer;">Engineering (3)</button>
          <button style="padding: 0.5rem 1rem; background: #f1f5f9; color: #64748b; border: none; border-radius: 9999px; font-size: 0.875rem; font-weight: 500; cursor: pointer;">Design (2)</button>
        </div>
      ` : ''}
      <div style="background: #fff; border: 1px solid #e2e8f0; border-radius: 0.75rem; overflow: hidden;">
        ${jobItem('Senior Frontend Developer', 'Engineering', 'Berlin', 'Full-time')}
        ${jobItem('UX Designer', 'Design', 'Remote', 'Full-time')}
        ${jobItem('Backend Engineer', 'Engineering', 'Halle (Saale)', 'Full-time')}
        ${jobItem('Product Designer', 'Design', 'Hybrid', 'Contract')}
      </div>
    </div>
  </section>
`;

export const Default: Story = {
  args: { variant: 'list', title: 'Open Positions at Acme Corp', showFilters: true },
  render: (args) => renderCareersSection(args),
};

export const WithoutFilters: Story = {
  args: { variant: 'compact', title: 'Career Opportunities', showFilters: false },
  render: (args) => renderCareersSection(args),
};
