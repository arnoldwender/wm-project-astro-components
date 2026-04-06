/**
 * FAQ Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Sections/FAQ',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Premium FAQ accordion with SEO-optimized Schema.org markup.
- Search/filter functionality across questions and answers
- Category grouping with filter pills
- Single or dual column layout
- Google rich snippets eligible
        `,
      },
    },
  },
  argTypes: {
    title: { control: 'text', description: 'Section title' },
    showSearch: { control: 'boolean', description: 'Show search bar' },
    showCategories: { control: 'boolean', description: 'Show category filters' },
    columns: { control: 'select', options: [1, 2], description: 'Column count' },
  },
};

export default meta;
type Story = StoryObj;

const faqItem = (q: string, a: string, open = false) => html`
  <details style="border-bottom: 1px solid #e2e8f0;" ?open=${open}>
    <summary style="padding: 1.25rem 0; font-weight: 500; color: #1e293b; cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center;">
      ${q}
      <svg width="20" height="20" fill="none" stroke="#94a3b8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
    </summary>
    <div style="padding: 0 0 1.25rem; color: #64748b; line-height: 1.6; font-size: 0.875rem;">${a}</div>
  </details>
`;

const renderFAQ = (args: Record<string, unknown>) => html`
  <section style="padding: 4rem 2rem;">
    <div style="max-width: 48rem; margin: 0 auto;">
      <div style="text-align: center; margin-bottom: 3rem;">
        <h2 style="font-size: 2rem; font-weight: 700; color: #1e293b; margin: 0 0 0.5rem;">${args.title}</h2>
        <p style="color: #64748b;">Find answers to common questions</p>
      </div>

      ${args.showSearch ? html`
        <div style="margin-bottom: 2rem;">
          <input type="text" placeholder="Search questions..." style="width: 100%; padding: 0.875rem 1rem; border: 1px solid #e2e8f0; border-radius: 0.5rem; font-size: 0.875rem; box-sizing: border-box;" />
        </div>
      ` : ''}

      ${args.showCategories ? html`
        <div style="display: flex; justify-content: center; gap: 0.5rem; margin-bottom: 2rem;">
          <button style="padding: 0.5rem 1rem; background: #3b82f6; color: #fff; border: none; border-radius: 9999px; font-size: 0.875rem; cursor: pointer;">All</button>
          <button style="padding: 0.5rem 1rem; background: #f1f5f9; color: #64748b; border: none; border-radius: 9999px; font-size: 0.875rem; cursor: pointer;">General</button>
          <button style="padding: 0.5rem 1rem; background: #f1f5f9; color: #64748b; border: none; border-radius: 9999px; font-size: 0.875rem; cursor: pointer;">Pricing</button>
          <button style="padding: 0.5rem 1rem; background: #f1f5f9; color: #64748b; border: none; border-radius: 9999px; font-size: 0.875rem; cursor: pointer;">Support</button>
        </div>
      ` : ''}

      <div>
        ${faqItem('What is Acme Platform?', 'Acme Platform is a project management tool for teams of all sizes. It helps you plan, track, and deliver projects faster.', true)}
        ${faqItem('How much does it cost?', 'Plans start at 9 EUR per month. A free 14-day trial is available on all plans.')}
        ${faqItem('Can I cancel anytime?', 'Yes, you can cancel your subscription at any time with no penalties or hidden fees.')}
        ${faqItem('Do you offer enterprise plans?', 'Yes, we offer custom enterprise plans for teams of 50+. Contact sales@acmecorp.com for details.')}
      </div>
    </div>
  </section>
`;

export const Default: Story = {
  args: { title: 'Frequently Asked Questions', showSearch: true, showCategories: true, columns: 1 },
  render: (args) => renderFAQ(args),
};

export const Minimal: Story = {
  args: { title: 'FAQ', showSearch: false, showCategories: false, columns: 1 },
  render: (args) => renderFAQ(args),
};
