/**
 * Pagination Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Navigation/Pagination',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
SEO-friendly pagination with Schema.org markup and automatic ellipsis.

**Features:**
- Automatic ellipsis for large page ranges with configurable sibling count
- SEO rel="prev" / rel="next" on navigation links
- Schema.org CollectionPage JSON-LD structured data
- Disabled state for first/last page boundaries
- Responsive labels hidden on mobile, icons always visible
        `,
      },
    },
  },
  argTypes: {
    currentPage: { control: 'number', description: 'Current active page' },
    totalPages: { control: 'number', description: 'Total number of pages' },
    siblingCount: { control: 'number', description: 'Number of page numbers to show around current' },
  },
};

export default meta;
type Story = StoryObj;

const renderPagination = (args: Record<string, unknown>) => {
  const current = (args.currentPage as number) || 1;
  const total = (args.totalPages as number) || 10;
  const siblings = (args.siblingCount as number) || 1;

  const pages: (number | string)[] = [];
  const left = Math.max(2, current - siblings);
  const right = Math.min(total - 1, current + siblings);

  pages.push(1);
  if (left > 2) pages.push('...');
  for (let i = left; i <= right; i++) pages.push(i);
  if (right < total - 1) pages.push('...');
  if (total > 1) pages.push(total);

  return html`
    <div style="padding: 2rem; font-family: system-ui, sans-serif;">
      <nav aria-label="Seitennavigation" style="display: flex; align-items: center; justify-content: center; gap: 0.25rem;">
        <!-- Prev -->
        <a href="#" style="display: flex; align-items: center; gap: 0.25rem; padding: 0.5rem 0.75rem; border: 1px solid #e2e8f0; border-radius: 0.375rem; text-decoration: none; font-size: 0.875rem;
                          ${current === 1 ? 'opacity: 0.5; pointer-events: none; color: #9ca3af;' : 'color: #374151;'}">
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
          <span>Zur\u00FCck</span>
        </a>

        <!-- Pages -->
        ${pages.map((p) => typeof p === 'number' ? html`
          <a href="#" style="display: flex; align-items: center; justify-content: center; width: 2.5rem; height: 2.5rem; border-radius: 0.375rem; text-decoration: none; font-size: 0.875rem; font-weight: 500;
                            ${p === current ? 'background: #3b82f6; color: white;' : 'color: #374151; border: 1px solid #e2e8f0;'}">${p}</a>
        ` : html`
          <span style="display: flex; align-items: center; justify-content: center; width: 2.5rem; height: 2.5rem; color: #9ca3af;">&hellip;</span>
        `)}

        <!-- Next -->
        <a href="#" style="display: flex; align-items: center; gap: 0.25rem; padding: 0.5rem 0.75rem; border: 1px solid #e2e8f0; border-radius: 0.375rem; text-decoration: none; font-size: 0.875rem;
                          ${current === total ? 'opacity: 0.5; pointer-events: none; color: #9ca3af;' : 'color: #374151;'}">
          <span>Weiter</span>
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
        </a>
      </nav>
    </div>
  `;
};

export const Default: Story = {
  args: { currentPage: 3, totalPages: 10, siblingCount: 1 },
  render: (args) => renderPagination(args),
};

export const FirstPage: Story = {
  args: { currentPage: 1, totalPages: 25, siblingCount: 1 },
  render: (args) => renderPagination(args),
};

export const LastPage: Story = {
  args: { currentPage: 10, totalPages: 10, siblingCount: 1 },
  render: (args) => renderPagination(args),
};

export const ManyPages: Story = {
  args: { currentPage: 12, totalPages: 50, siblingCount: 2 },
  render: (args) => renderPagination(args),
};
