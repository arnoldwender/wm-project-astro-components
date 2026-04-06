/**
 * BreadcrumbSection Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Sections/BreadcrumbSection',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Navigation breadcrumbs with Schema.org structured data.
- Six separator styles: default, arrows, pills, dots, slash, chevron
- Home icon on first item, truncation with ellipsis
- SEO-friendly BreadcrumbList markup
        `,
      },
    },
  },
  argTypes: {
    variant: { control: 'select', options: ['default', 'arrows', 'pills', 'dots', 'slash', 'chevron'], description: 'Separator style' },
    homeIcon: { control: 'boolean', description: 'Show home icon' },
  },
};

export default meta;
type Story = StoryObj;

const renderBreadcrumb = (args: Record<string, unknown>) => html`
  <nav style="padding: 2rem; font-size: 0.875rem;" aria-label="Breadcrumb">
    <ol style="display: flex; flex-wrap: wrap; align-items: center; gap: 0.5rem; list-style: none; padding: 0; margin: 0;">
      <li style="display: flex; align-items: center; gap: 0.5rem;">
        <a href="#" style="display: flex; align-items: center; gap: 0.375rem; color: #64748b; text-decoration: none;">
          ${args.homeIcon ? html`<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>` : ''}
          Home
        </a>
      </li>
      <li style="display: flex; align-items: center; gap: 0.5rem;">
        <span style="color: #94a3b8;">${args.variant === 'dots' ? '·' : args.variant === 'slash' ? '/' : html`<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>`}</span>
        <a href="#" style="color: #64748b; text-decoration: none;">Products</a>
      </li>
      <li style="display: flex; align-items: center; gap: 0.5rem;">
        <span style="color: #94a3b8;">${args.variant === 'dots' ? '·' : args.variant === 'slash' ? '/' : html`<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>`}</span>
        <span style="color: #1e293b; font-weight: 500;" aria-current="page">Acme Widget Pro</span>
      </li>
    </ol>
  </nav>
`;

export const Default: Story = {
  args: { variant: 'default', homeIcon: true },
  render: (args) => renderBreadcrumb(args),
};

export const Pills: Story = {
  args: { variant: 'pills', homeIcon: true },
  render: () => html`
    <nav style="padding: 2rem; font-size: 0.875rem;" aria-label="Breadcrumb">
      <ol style="display: flex; flex-wrap: wrap; align-items: center; gap: 0.5rem; list-style: none; padding: 0; margin: 0;">
        <li><a href="#" style="display: inline-block; padding: 0.375rem 0.75rem; background: #f1f5f9; border-radius: 9999px; color: #64748b; text-decoration: none;">Home</a></li>
        <li><a href="#" style="display: inline-block; padding: 0.375rem 0.75rem; background: #f1f5f9; border-radius: 9999px; color: #64748b; text-decoration: none;">Products</a></li>
        <li><span style="display: inline-block; padding: 0.375rem 0.75rem; background: #3b82f6; border-radius: 9999px; color: #fff; font-weight: 500;">Acme Widget Pro</span></li>
      </ol>
    </nav>
  `,
};

export const SlashSeparator: Story = {
  args: { variant: 'slash', homeIcon: false },
  render: (args) => renderBreadcrumb(args),
};
