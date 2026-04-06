/**
 * FAQSection Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Sections/FAQSection',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Accordion-powered FAQ section with five layout variants.
- Variants: simple, cards, columns, categorized, sidebar
- Optional single-open mode
- Sidebar variant with sticky category navigation
- Accessible with keyboard navigation
        `,
      },
    },
  },
  argTypes: {
    variant: { control: 'select', options: ['simple', 'cards', 'columns', 'categorized', 'sidebar'], description: 'Layout variant' },
    title: { control: 'text', description: 'Section title' },
    singleOpen: { control: 'boolean', description: 'Only one item open at a time' },
  },
};

export default meta;
type Story = StoryObj;

const faqItem = (q: string, a: string, isCard = false) => html`
  <details style="${isCard ? 'background: #fff; border: 1px solid #e2e8f0; border-radius: 0.75rem; margin-bottom: 0.75rem;' : 'border-bottom: 1px solid #e2e8f0;'}">
    <summary style="padding: 1.25rem; font-weight: 500; color: #1e293b; cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center;">
      ${q}
      <svg width="16" height="16" fill="none" stroke="#94a3b8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
    </summary>
    <div style="padding: 0 1.25rem 1.25rem; color: #64748b; font-size: 0.875rem; line-height: 1.6;">${a}</div>
  </details>
`;

const renderFAQSection = (args: Record<string, unknown>) => html`
  <section style="padding: 4rem 2rem; background: ${args.variant === 'cards' ? '#f8fafc' : '#fff'};">
    <div style="max-width: ${args.variant === 'columns' ? '64rem' : '48rem'}; margin: 0 auto;">
      <div style="text-align: center; margin-bottom: 3rem;">
        <h2 style="font-size: 2rem; font-weight: 700; color: #1e293b; margin: 0 0 0.5rem;">${args.title}</h2>
        <p style="color: #64748b;">Find answers to the most common questions.</p>
      </div>
      <div style="${args.variant === 'columns' ? 'display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;' : ''}">
        ${faqItem('What payment methods do you accept?', 'We accept all major credit cards, PayPal, and bank transfer.', args.variant === 'cards')}
        ${faqItem('Can I cancel my subscription?', 'Yes, you can cancel anytime from your account settings.', args.variant === 'cards')}
        ${faqItem('Do you offer refunds?', 'We offer a 30-day money-back guarantee on all plans.', args.variant === 'cards')}
        ${faqItem('Is there a free trial?', 'Yes, all plans include a free 14-day trial with no credit card required.', args.variant === 'cards')}
      </div>
    </div>
  </section>
`;

export const Simple: Story = {
  args: { variant: 'simple', title: 'Frequently Asked Questions', singleOpen: false },
  render: (args) => renderFAQSection(args),
};

export const Cards: Story = {
  args: { variant: 'cards', title: 'Help Center', singleOpen: true },
  render: (args) => renderFAQSection(args),
};

export const Columns: Story = {
  args: { variant: 'columns', title: 'All Questions', singleOpen: false },
  render: (args) => renderFAQSection(args),
};
