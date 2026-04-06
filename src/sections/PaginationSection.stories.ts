/**
 * PaginationSection Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Sections/PaginationSection',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Page navigation component with six display variants (default, simple, minimal, buttons, rounded, dots). Smart ellipsis, first/last jump buttons, accessible aria-labels.' } } },
  argTypes: {
    variant: { control: 'select', options: ['default', 'simple', 'minimal', 'buttons', 'rounded', 'dots'] },
    currentPage: { control: 'number' },
    totalPages: { control: 'number' },
  },
};
export default meta;
type Story = StoryObj;

const renderPagination = (args: Record<string, unknown>) => html`
  <nav style="display:flex;justify-content:center;padding:2rem;font-family:system-ui,sans-serif;" aria-label="Pagination">
    <ul style="display:flex;align-items:center;gap:0.25rem;list-style:none;padding:0;margin:0;">
      <li><a href="#" style="display:flex;align-items:center;justify-content:center;padding:0.5rem 0.75rem;font-size:0.875rem;color:#64748b;text-decoration:none;">&laquo; Previous</a></li>
      ${[1, 2, 3, '...', 10, 11, 12].map(p => html`
        <li>
          ${p === '...' ? html`<span style="padding:0 0.5rem;color:#94a3b8;">...</span>` : html`
            <a href="#" style="display:flex;align-items:center;justify-content:center;min-width:2.25rem;height:2.25rem;border-radius:0.5rem;font-size:0.875rem;text-decoration:none;font-weight:${p === args.currentPage ? '600' : '400'};background:${p === args.currentPage ? '#3b82f6' : 'transparent'};color:${p === args.currentPage ? 'white' : '#64748b'};">${p}</a>
          `}
        </li>
      `)}
      <li><a href="#" style="display:flex;align-items:center;justify-content:center;padding:0.5rem 0.75rem;font-size:0.875rem;color:#64748b;text-decoration:none;">Next &raquo;</a></li>
    </ul>
  </nav>
`;

export const Default: Story = {
  args: { currentPage: 3, totalPages: 12, variant: 'default' },
  render: (args) => renderPagination(args),
};

export const Simple: Story = {
  render: () => html`
    <nav style="display:flex;align-items:center;justify-content:space-between;padding:2rem;max-width:32rem;margin:0 auto;font-family:system-ui,sans-serif;" aria-label="Pagination">
      <a href="#" style="display:flex;align-items:center;gap:0.5rem;padding:0.625rem 1rem;background:#fff;border:1px solid #e2e8f0;border-radius:0.5rem;color:#1e293b;text-decoration:none;font-weight:500;font-size:0.875rem;">&larr; Previous</a>
      <span style="font-size:0.875rem;color:#64748b;">Page <strong>3</strong> of <strong>12</strong></span>
      <a href="#" style="display:flex;align-items:center;gap:0.5rem;padding:0.625rem 1rem;background:#fff;border:1px solid #e2e8f0;border-radius:0.5rem;color:#1e293b;text-decoration:none;font-weight:500;font-size:0.875rem;">Next &rarr;</a>
    </nav>
  `,
};

export const Dots: Story = {
  render: () => html`
    <nav style="display:flex;align-items:center;justify-content:center;gap:1rem;padding:2rem;font-family:system-ui,sans-serif;">
      <button style="width:2rem;height:2rem;border:none;background:transparent;cursor:pointer;color:#64748b;display:flex;align-items:center;justify-content:center;">&larr;</button>
      <div style="display:flex;align-items:center;gap:0.5rem;">
        ${[1, 2, 3, 4, 5].map(i => html`
          <button style="width:0.625rem;height:0.625rem;border:none;border-radius:50%;cursor:pointer;background:${i === 3 ? '#3b82f6' : '#cbd5e1'};transform:${i === 3 ? 'scale(1.25)' : 'none'};padding:0;"></button>
        `)}
      </div>
      <button style="width:2rem;height:2rem;border:none;background:transparent;cursor:pointer;color:#64748b;display:flex;align-items:center;justify-content:center;">&rarr;</button>
    </nav>
  `,
};
