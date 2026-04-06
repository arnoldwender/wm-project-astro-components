/**
 * CaseStudySection Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Sections/CaseStudySection',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Case study and portfolio showcase section.
- Six variants: grid, featured, carousel, detail, minimal, stats
- Metrics display, client testimonials, tags and industry badges
        `,
      },
    },
  },
  argTypes: {
    variant: { control: 'select', options: ['grid', 'featured', 'carousel', 'detail', 'minimal', 'stats'], description: 'Layout variant' },
    title: { control: 'text', description: 'Section title' },
    columns: { control: 'select', options: [2, 3], description: 'Grid columns' },
  },
};

export default meta;
type Story = StoryObj;

const caseCard = (client: string, title: string, metrics: string[]) => html`
  <article style="background: #fff; border-radius: 1rem; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1); transition: transform 0.2s;">
    <div style="aspect-ratio: 16/10; background: linear-gradient(135deg, #667eea, #764ba2);"></div>
    <div style="padding: 1.5rem;">
      <span style="font-size: 0.875rem; font-weight: 600; color: #3b82f6;">${client}</span>
      <h3 style="font-size: 1.125rem; font-weight: 700; color: #1e293b; margin: 0.25rem 0 0.5rem;">${title}</h3>
      <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem;">
        <span style="font-size: 0.75rem; padding: 0.125rem 0.5rem; background: #f1f5f9; border-radius: 9999px; color: #64748b;">UX</span>
        <span style="font-size: 0.75rem; padding: 0.125rem 0.5rem; background: #f1f5f9; border-radius: 9999px; color: #64748b;">Shopify</span>
      </div>
      <div style="display: grid; grid-template-columns: repeat(${metrics.length}, 1fr); gap: 0.5rem; padding-top: 1rem; border-top: 1px solid #e2e8f0;">
        ${metrics.map(m => html`
          <div style="text-align: center;">
            <span style="display: block; font-size: 1.25rem; font-weight: 700; color: #3b82f6;">${m}</span>
            <span style="font-size: 0.625rem; color: #94a3b8; text-transform: uppercase;">Metric</span>
          </div>
        `)}
      </div>
    </div>
  </article>
`;

const renderCaseStudy = (args: Record<string, unknown>) => html`
  <section style="padding: 4rem 2rem;">
    <div style="max-width: 72rem; margin: 0 auto;">
      <div style="text-align: center; margin-bottom: 3rem;">
        <span style="font-size: 0.875rem; font-weight: 600; color: #3b82f6; text-transform: uppercase;">Case Studies</span>
        <h2 style="font-size: 2rem; font-weight: 700; color: #1e293b; margin: 0.5rem 0;">${args.title}</h2>
      </div>
      <div style="display: grid; grid-template-columns: repeat(${args.columns}, 1fr); gap: 2rem;">
        ${caseCard('Acme Corp', 'E-Commerce Redesign', ['+200%', '+150%', '-40%'])}
        ${caseCard('WidgetCo', 'Brand Identity Refresh', ['+80%', '+120%'])}
      </div>
    </div>
  </section>
`;

export const Grid: Story = {
  args: { variant: 'grid', title: 'Our Work', columns: 2 },
  render: (args) => renderCaseStudy(args),
};

export const ThreeColumns: Story = {
  args: { variant: 'grid', title: 'Client Success Stories', columns: 3 },
  render: (args) => html`
    <section style="padding: 4rem 2rem;">
      <div style="max-width: 72rem; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 3rem;">
          <h2 style="font-size: 2rem; font-weight: 700; color: #1e293b;">${args.title}</h2>
        </div>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
          ${caseCard('Acme Corp', 'E-Commerce Redesign', ['+200%'])}
          ${caseCard('WidgetCo', 'Brand Refresh', ['+80%'])}
          ${caseCard('Globex', 'Mobile App', ['+300%'])}
        </div>
      </div>
    </section>
  `,
};
