/**
 * AccessibleLoadMore Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Navigation/AccessibleLoadMore',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Progressive "Load More" button as an accessible alternative to pagination.

Features:
- WCAG 2.2 AA with aria-live announcements for screen readers
- Shows remaining item count
- Loading state with animated spinner
- Custom 'loadmore' event on click
- Three variants: primary, outline, ghost
- Minimum 44x44px touch target
        `,
      },
    },
  },
  argTypes: {
    totalItems: { control: { type: 'number', min: 0 }, description: 'Total items available' },
    loadedItems: { control: { type: 'number', min: 0 }, description: 'Items currently loaded' },
    batchSize: { control: { type: 'number', min: 1 }, description: 'Items per batch' },
    label: { control: 'text', description: 'Button label' },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'outline', 'ghost'],
      description: 'Visual variant',
    },
  },
};

export default meta;
type Story = StoryObj;

const renderLoadMore = (args: Record<string, unknown>) => {
  const total = (args.totalItems as number) || 100;
  const loaded = (args.loadedItems as number) || 20;
  const batch = (args.batchSize as number) || 10;
  const label = (args.label as string) || 'Mehr laden';
  const variant = (args.variant as string) || 'primary';
  const remaining = Math.max(0, total - loaded);
  const nextBatch = Math.min(batch, remaining);
  const pct = total > 0 ? Math.round((loaded / total) * 100) : 0;

  const variantStyles: Record<string, string> = {
    primary: 'background: #3b82f6; color: #fff; border: 2px solid #3b82f6;',
    outline: 'background: transparent; color: #3b82f6; border: 2px solid #3b82f6;',
    ghost: 'background: transparent; color: #1a202c; border: 2px solid transparent;',
  };

  return html`
    <style>
      .alm-demo { display: flex; flex-direction: column; align-items: center; gap: 0.5rem; padding: 1rem 0; font-family: system-ui, -apple-system, sans-serif; }
      .alm-demo__progress { font-size: 0.875rem; color: #718096; margin: 0; }
      .alm-demo__bar { width: 100%; max-width: 16rem; height: 0.375rem; background: #edf2f7; border-radius: 9999px; overflow: hidden; }
      .alm-demo__bar-fill { height: 100%; background: #3b82f6; border-radius: 9999px; width: ${pct}%; }
      .alm-demo__button {
        display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem;
        min-height: 2.75rem; padding: 0.5rem 2rem; font-size: 1rem; font-weight: 500;
        border-radius: 0.5rem; cursor: pointer; ${variantStyles[variant]}
      }
      .alm-demo__button:hover { opacity: 0.9; }
      .alm-demo__button:disabled { opacity: 0.5; cursor: not-allowed; }
    </style>
    <div class="alm-demo">
      <p class="alm-demo__progress">${loaded} / ${total}</p>
      <div class="alm-demo__bar"><div class="alm-demo__bar-fill"></div></div>
      <button class="alm-demo__button" ?disabled=${remaining <= 0}>
        ${remaining <= 0 ? 'Alle geladen' : `${label} (${nextBatch} weitere)`}
      </button>
    </div>
  `;
};

export const Default: Story = {
  args: { totalItems: 100, loadedItems: 20, batchSize: 10, label: 'Mehr laden', variant: 'primary' },
  render: (args) => renderLoadMore(args),
};

export const Outline: Story = {
  args: { totalItems: 50, loadedItems: 30, batchSize: 10, label: 'Weitere Projekte laden', variant: 'outline' },
  render: (args) => renderLoadMore(args),
};

export const Ghost: Story = {
  args: { totalItems: 80, loadedItems: 10, batchSize: 20, label: 'Mehr anzeigen', variant: 'ghost' },
  render: (args) => renderLoadMore(args),
};

export const AllLoaded: Story = {
  args: { totalItems: 50, loadedItems: 50, batchSize: 10, label: 'Mehr laden', variant: 'primary' },
  render: (args) => renderLoadMore(args),
};

export const SmallBatch: Story = {
  args: { totalItems: 25, loadedItems: 22, batchSize: 5, label: 'Load more', variant: 'outline' },
  render: (args) => renderLoadMore(args),
};
