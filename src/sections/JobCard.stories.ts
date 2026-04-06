/**
 * JobCard Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Sections/JobCard',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Individual job listing card.
- Four variants: default, card, compact, detailed
- Employment type labels with German localization
- Urgent and new badges for priority listings
- Salary range display and skill tags
        `,
      },
    },
  },
  argTypes: {
    title: { control: 'text', description: 'Job title' },
    department: { control: 'text', description: 'Department' },
    location: { control: 'text', description: 'Office location' },
    type: { control: 'select', options: ['full-time', 'part-time', 'contract', 'remote', 'hybrid'], description: 'Employment type' },
    variant: { control: 'select', options: ['default', 'card', 'compact', 'detailed'], description: 'Card variant' },
    urgent: { control: 'boolean', description: 'Urgent hiring badge' },
  },
};

export default meta;
type Story = StoryObj;

const typeLabels: Record<string, string> = { 'full-time': 'Vollzeit', 'part-time': 'Teilzeit', contract: 'Vertrag', remote: 'Remote', hybrid: 'Hybrid' };

const renderJobCard = (args: Record<string, unknown>) => html`
  <div style="padding: 2rem; max-width: ${args.variant === 'card' ? '24rem' : '40rem'};">
    ${args.variant === 'card' ? html`
      <div style="background: #fff; border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 1.5rem; transition: box-shadow 0.2s;">
        <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;">
          ${args.urgent ? html`<span style="padding: 0.125rem 0.5rem; font-size: 0.625rem; font-weight: 600; background: #fef2f2; color: #dc2626; border-radius: 9999px;">Urgent</span>` : ''}
          ${args.isNew ? html`<span style="padding: 0.125rem 0.5rem; font-size: 0.625rem; font-weight: 600; background: #eff6ff; color: #2563eb; border-radius: 9999px;">New</span>` : ''}
        </div>
        <h3 style="font-size: 1.125rem; font-weight: 600; color: #1e293b; margin: 0 0 0.5rem;">${args.title}</h3>
        <div style="display: flex; flex-wrap: wrap; gap: 0.75rem; font-size: 0.875rem; color: #64748b; margin-bottom: 1rem;">
          <span style="display: flex; align-items: center; gap: 0.25rem;">📍 ${args.location}</span>
          <span style="display: flex; align-items: center; gap: 0.25rem;">🏢 ${args.department}</span>
          <span style="display: flex; align-items: center; gap: 0.25rem;">⏰ ${typeLabels[args.type as string] || args.type}</span>
        </div>
        ${args.salary ? html`<p style="font-size: 0.875rem; font-weight: 600; color: #1e293b; margin: 0 0 1rem;">${args.salary}</p>` : ''}
        ${args.tags ? html`
          <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;">
            ${(args.tags as string[]).map(t => html`<span style="padding: 0.125rem 0.5rem; font-size: 0.75rem; background: #f1f5f9; color: #64748b; border-radius: 9999px;">${t}</span>`)}
          </div>
        ` : ''}
        <a href="#" style="display: block; text-align: center; padding: 0.75rem; background: #3b82f6; color: #fff; font-weight: 600; font-size: 0.875rem; border-radius: 0.5rem; text-decoration: none;">Apply Now</a>
      </div>
    ` : html`
      <div style="display: flex; align-items: center; justify-content: space-between; padding: 1.25rem 0; border-bottom: 1px solid #e2e8f0;">
        <div>
          <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.25rem;">
            <h3 style="font-size: 1rem; font-weight: 600; color: #1e293b; margin: 0;">${args.title}</h3>
            ${args.urgent ? html`<span style="padding: 0.125rem 0.375rem; font-size: 0.625rem; font-weight: 600; background: #fef2f2; color: #dc2626; border-radius: 9999px;">Urgent</span>` : ''}
          </div>
          <div style="display: flex; gap: 1rem; font-size: 0.875rem; color: #64748b;">
            <span>${args.department}</span><span>·</span><span>${args.location}</span><span>·</span><span>${typeLabels[args.type as string] || args.type}</span>
          </div>
        </div>
        <a href="#" style="padding: 0.5rem 1rem; background: #3b82f6; color: #fff; font-size: 0.875rem; font-weight: 500; border-radius: 0.5rem; text-decoration: none; white-space: nowrap;">Apply</a>
      </div>
    `}
  </div>
`;

export const Default: Story = {
  args: { title: 'Senior Frontend Developer', department: 'Engineering', location: 'Berlin', type: 'full-time', variant: 'default', urgent: false },
  render: (args) => renderJobCard(args),
};

export const CardWithTags: Story = {
  args: { title: 'UX Designer', department: 'Design', location: 'Remote', type: 'contract', variant: 'card', urgent: true, isNew: true, salary: '65,000 - 85,000 EUR', tags: ['Figma', 'User Research', 'Prototyping'] },
  render: (args) => renderJobCard(args),
};
