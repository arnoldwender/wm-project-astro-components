/**
 * FAQItem Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Sections/FAQItem',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Individual FAQ accordion item.
- Four variants: default, bordered, card, minimal
- Accessible button trigger with aria-expanded
- Smooth height animation
- Optional default open state
        `,
      },
    },
  },
  argTypes: {
    question: { control: 'text', description: 'Question text' },
    answer: { control: 'text', description: 'Answer text' },
    variant: { control: 'select', options: ['default', 'bordered', 'card', 'minimal'], description: 'Display variant' },
    defaultOpen: { control: 'boolean', description: 'Start expanded' },
  },
};

export default meta;
type Story = StoryObj;

const renderFAQItem = (args: Record<string, unknown>) => html`
  <div style="padding: 2rem; max-width: 40rem;">
    <details
      style="${args.variant === 'bordered' ? 'border: 1px solid #e2e8f0; border-radius: 0.75rem;' :
              args.variant === 'card' ? 'background: #fff; border: 1px solid #e2e8f0; border-radius: 0.75rem; box-shadow: 0 1px 2px rgba(0,0,0,0.05);' :
              'border-bottom: 1px solid #e2e8f0;'}"
      ?open=${args.defaultOpen}
    >
      <summary style="padding: ${args.variant === 'minimal' ? '1rem 0' : '1.25rem'}; font-weight: 500; color: #1e293b; cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center;">
        ${args.question}
        <span style="width: 1.5rem; height: 1.5rem; flex-shrink: 0; display: flex; align-items: center; justify-content: center; ${(args.variant === 'card' || args.variant === 'bordered') ? 'background: #f1f5f9; border-radius: 50%;' : ''}">
          <svg width="14" height="14" fill="none" stroke="#94a3b8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
        </span>
      </summary>
      <div style="padding: 0 ${args.variant === 'minimal' ? '0' : '1.25rem'} 1.25rem; color: #64748b; line-height: 1.6; font-size: 0.875rem;">
        ${args.answer}
      </div>
    </details>
  </div>
`;

export const Default: Story = {
  args: { question: 'What is your refund policy?', answer: 'We offer a 30-day money-back guarantee on all plans. Contact support@acmecorp.com to request a refund.', variant: 'default', defaultOpen: false },
  render: (args) => renderFAQItem(args),
};

export const Card: Story = {
  args: { question: 'Do you offer enterprise pricing?', answer: 'Yes, Acme Corp provides custom enterprise plans for teams of 50+. Please reach out to sales@acmecorp.com for a personalized quote.', variant: 'card', defaultOpen: true },
  render: (args) => renderFAQItem(args),
};

export const Bordered: Story = {
  args: { question: 'How do I reset my password?', answer: 'Click "Forgot password" on the login page, enter your email, and follow the instructions sent to your inbox.', variant: 'bordered', defaultOpen: false },
  render: (args) => renderFAQItem(args),
};
