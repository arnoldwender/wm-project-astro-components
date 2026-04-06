/**
 * ErrorSection Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Sections/ErrorSection',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Error and status pages (404, 500, etc.).
- Six variants: default, illustrated, minimal, creative, split, branded
- Home and back navigation buttons
- Optional search bar and suggested links
        `,
      },
    },
  },
  argTypes: {
    variant: { control: 'select', options: ['default', 'illustrated', 'minimal', 'creative', 'split', 'branded'], description: 'Design variant' },
    code: { control: 'text', description: 'Error code' },
    title: { control: 'text', description: 'Error title' },
    showSearch: { control: 'boolean', description: 'Show search bar' },
  },
};

export default meta;
type Story = StoryObj;

const renderError = (args: Record<string, unknown>) => html`
  <section style="min-height: 500px; display: flex; align-items: center; justify-content: center; padding: 2rem; text-align: center;">
    <div style="max-width: 32rem;">
      <p style="font-size: 6rem; font-weight: 800; color: #3b82f6; margin: 0; line-height: 1;">${args.code}</p>
      <h1 style="font-size: 1.5rem; font-weight: 700; color: #1e293b; margin: 1rem 0 0.5rem;">${args.title}</h1>
      <p style="color: #64748b; margin: 0 0 2rem;">${args.description}</p>

      ${args.showSearch ? html`
        <div style="display: flex; gap: 0.5rem; max-width: 24rem; margin: 0 auto 2rem;">
          <input type="text" placeholder="Search Acme Corp..." style="flex: 1; padding: 0.75rem 1rem; border: 1px solid #e2e8f0; border-radius: 0.5rem; font-size: 0.875rem;" />
          <button style="padding: 0.75rem 1rem; background: #3b82f6; color: #fff; border: none; border-radius: 0.5rem; cursor: pointer;">
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          </button>
        </div>
      ` : ''}

      <div style="display: flex; align-items: center; justify-content: center; gap: 1rem;">
        <a href="#" style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.75rem 1.5rem; background: #3b82f6; color: #fff; font-weight: 600; border-radius: 0.5rem; text-decoration: none;">Back to Homepage</a>
        <button style="padding: 0.75rem 1.5rem; background: #f1f5f9; color: #475569; font-weight: 600; border: none; border-radius: 0.5rem; cursor: pointer;" onclick="history.back()">Go Back</button>
      </div>

      <div style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid #e2e8f0;">
        <p style="font-size: 0.875rem; color: #64748b; margin: 0 0 0.75rem;">Suggested pages:</p>
        <div style="display: flex; justify-content: center; gap: 1rem; font-size: 0.875rem;">
          <a href="#" style="color: #3b82f6; text-decoration: none;">Homepage</a>
          <a href="#" style="color: #3b82f6; text-decoration: none;">Products</a>
          <a href="#" style="color: #3b82f6; text-decoration: none;">Contact Us</a>
        </div>
      </div>
    </div>
  </section>
`;

export const NotFound: Story = {
  args: { variant: 'default', code: '404', title: 'Page not found', description: 'Sorry, we could not find the page you are looking for.', showSearch: false },
  render: (args) => renderError(args),
};

export const ServerError: Story = {
  args: { variant: 'illustrated', code: '500', title: 'Something went wrong', description: 'Our servers are having trouble. Please try again later.', showSearch: true },
  render: (args) => renderError(args),
};
