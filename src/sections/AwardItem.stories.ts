/**
 * AwardItem Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Sections/AwardItem',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Individual award, certification, or achievement display.
- Five variants: default, card, badge, minimal, featured
- Optional link wrapping with external link detection
- Trophy icon fallback for featured variant
- Year badge display
        `,
      },
    },
  },
  argTypes: {
    title: { control: 'text', description: 'Award title' },
    organization: { control: 'text', description: 'Awarding organization' },
    year: { control: 'text', description: 'Year received' },
    variant: { control: 'select', options: ['default', 'card', 'badge', 'minimal', 'featured'], description: 'Display variant' },
    description: { control: 'text', description: 'Award description' },
  },
};

export default meta;
type Story = StoryObj;

const renderAwardItem = (args: Record<string, unknown>) => html`
  <div style="padding: 2rem; max-width: 400px;">
    ${args.variant === 'card' ? html`
      <div style="background: #fff; border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 1.5rem; text-align: center; transition: box-shadow 0.2s;">
        <div style="width: 4rem; height: 4rem; margin: 0 auto 1rem; background: #f0f9ff; border-radius: 0.75rem; display: flex; align-items: center; justify-content: center; font-size: 1.5rem;">🏆</div>
        <span style="display: inline-block; padding: 0.125rem 0.5rem; font-size: 0.75rem; font-weight: 600; background: rgba(59,130,246,0.1); color: #3b82f6; border-radius: 9999px; margin-bottom: 0.5rem;">${args.year}</span>
        <h3 style="font-weight: 600; color: #1e293b; margin: 0 0 0.25rem;">${args.title}</h3>
        <p style="font-size: 0.875rem; color: #64748b; margin: 0;">${args.organization}</p>
        ${args.description ? html`<p style="font-size: 0.875rem; color: #64748b; margin: 0.5rem 0 0;">${args.description}</p>` : ''}
      </div>
    ` : args.variant === 'badge' ? html`
      <div style="display: inline-flex; align-items: center; gap: 0.75rem; padding: 0.5rem 1rem; background: #f8fafc; border-radius: 9999px;">
        <span style="font-size: 1.25rem;">🏆</span>
        <div>
          <span style="font-size: 0.875rem; font-weight: 600; color: #1e293b;">${args.title}</span>
          <span style="font-size: 0.75rem; color: #94a3b8; margin-left: 0.5rem;">${args.year}</span>
        </div>
      </div>
    ` : args.variant === 'featured' ? html`
      <div style="background: linear-gradient(135deg, #fffbeb, #fef3c7); border: 1px solid #fde68a; border-radius: 1rem; padding: 2rem; text-align: center;">
        <div style="width: 5rem; height: 5rem; margin: 0 auto 1rem; background: rgba(245,158,11,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
          <svg width="40" height="40" fill="#d97706" viewBox="0 0 24 24"><path d="M5 4h14v2h-1v4c0 1.9-1.16 3.5-2.8 4.2l.3.8H14v4h2v2H8v-2h2v-4h-.5l.3-.8C8.16 13.5 7 11.9 7 10V6H6V4H5zm4 2v4c0 1.1.9 2 2 2s2-.9 2-2V6H9z"/></svg>
        </div>
        <span style="display: inline-block; padding: 0.125rem 0.5rem; font-size: 0.75rem; font-weight: 600; background: #f59e0b; color: #fff; border-radius: 9999px; margin-bottom: 0.5rem;">${args.year}</span>
        <h3 style="font-size: 1.25rem; font-weight: 600; color: #1e293b; margin: 0 0 0.5rem;">${args.title}</h3>
        <p style="color: #64748b; margin: 0;">${args.organization}</p>
        ${args.description ? html`<p style="font-size: 0.875rem; color: #64748b; margin: 0.5rem 0 0;">${args.description}</p>` : ''}
      </div>
    ` : html`
      <div style="display: flex; align-items: flex-start; gap: 1rem;">
        <div style="width: 3rem; height: 3rem; flex-shrink: 0; background: #f0f9ff; border-radius: 0.75rem; display: flex; align-items: center; justify-content: center; font-size: 1.25rem;">🏆</div>
        <div>
          <h3 style="font-weight: 600; color: #1e293b; margin: 0 0 0.25rem;">${args.title}</h3>
          <p style="font-size: 0.875rem; color: #64748b; margin: 0;">${args.organization} <span style="color: #94a3b8;">· ${args.year}</span></p>
        </div>
      </div>
    `}
  </div>
`;

export const Default: Story = {
  args: { title: 'Best Design Award', organization: 'Design Awards International', year: '2024', variant: 'default' },
  render: (args) => renderAwardItem(args),
};

export const Card: Story = {
  args: { title: 'ISO 27001 Certified', organization: 'Acme Corp', year: '2025', variant: 'card', description: 'Enterprise-grade security certification' },
  render: (args) => renderAwardItem(args),
};

export const Featured: Story = {
  args: { title: 'Company of the Year', organization: 'Global Tech Review', year: '2025', variant: 'featured', description: 'Recognized for outstanding innovation' },
  render: (args) => renderAwardItem(args),
};
