/**
 * Badge Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'UI/Badge',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Small status indicator or label for categorization.

Features:
- Three variants (solid, soft, outline)
- Seven semantic colors (default, primary, secondary, success, warning, error, info)
- Three sizes (sm, md, lg)
- Optional dot indicator
- Pill (fully rounded) shape option
- Removable option with close button
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['solid', 'soft', 'outline'],
      description: 'Visual style variant',
    },
    color: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'error', 'info'],
      description: 'Semantic color',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Badge size',
    },
    label: { control: 'text', description: 'Badge text content' },
    dot: { control: 'boolean', description: 'Show dot indicator' },
    pill: { control: 'boolean', description: 'Fully rounded pill shape' },
    removable: { control: 'boolean', description: 'Show remove/close button' },
  },
};

export default meta;
type Story = StoryObj;

const colorMap: Record<string, Record<string, { bg: string; text: string; border?: string; dot: string }>> = {
  solid: {
    default: { bg: '#64748b', text: '#fff', dot: '#94a3b8' },
    primary: { bg: '#3b82f6', text: '#fff', dot: '#3b82f6' },
    success: { bg: '#22c55e', text: '#fff', dot: '#22c55e' },
    warning: { bg: '#f59e0b', text: '#fff', dot: '#f59e0b' },
    error: { bg: '#ef4444', text: '#fff', dot: '#ef4444' },
    info: { bg: '#06b6d4', text: '#fff', dot: '#06b6d4' },
    secondary: { bg: '#8b5cf6', text: '#fff', dot: '#8b5cf6' },
  },
  soft: {
    default: { bg: '#f1f5f9', text: '#64748b', dot: '#94a3b8' },
    primary: { bg: '#eff6ff', text: '#3b82f6', dot: '#3b82f6' },
    success: { bg: '#f0fdf4', text: '#166534', dot: '#22c55e' },
    warning: { bg: '#fffbeb', text: '#92400e', dot: '#f59e0b' },
    error: { bg: '#fef2f2', text: '#991b1b', dot: '#ef4444' },
    info: { bg: '#ecfeff', text: '#0e7490', dot: '#06b6d4' },
    secondary: { bg: '#f5f3ff', text: '#7c3aed', dot: '#8b5cf6' },
  },
  outline: {
    default: { bg: 'transparent', text: '#64748b', border: '#e2e8f0', dot: '#94a3b8' },
    primary: { bg: 'transparent', text: '#3b82f6', border: '#3b82f6', dot: '#3b82f6' },
    success: { bg: 'transparent', text: '#22c55e', border: '#22c55e', dot: '#22c55e' },
    warning: { bg: 'transparent', text: '#f59e0b', border: '#f59e0b', dot: '#f59e0b' },
    error: { bg: 'transparent', text: '#ef4444', border: '#ef4444', dot: '#ef4444' },
    info: { bg: 'transparent', text: '#06b6d4', border: '#06b6d4', dot: '#06b6d4' },
    secondary: { bg: 'transparent', text: '#8b5cf6', border: '#8b5cf6', dot: '#8b5cf6' },
  },
};

const sizeMap: Record<string, { px: string; py: string; fontSize: string }> = {
  sm: { px: '0.375rem', py: '0.125rem', fontSize: '0.75rem' },
  md: { px: '0.5rem', py: '0.125rem', fontSize: '0.875rem' },
  lg: { px: '0.625rem', py: '0.25rem', fontSize: '0.875rem' },
};

const renderBadge = (args: Record<string, unknown>) => {
  const variant = (args.variant as string) || 'soft';
  const color = (args.color as string) || 'default';
  const size = (args.size as string) || 'md';
  const s = sizeMap[size];
  const c = colorMap[variant]?.[color] || colorMap.soft.default;

  return html`
    <style>
      .badge-demo {
        display: inline-flex; align-items: center; gap: 0.375rem;
        padding: ${s.py} ${s.px}; font-size: ${s.fontSize}; font-weight: 500;
        font-family: system-ui, -apple-system, sans-serif; white-space: nowrap;
        background: ${c.bg}; color: ${c.text};
        border-radius: ${args.pill ? '9999px' : '0.375rem'};
        ${c.border ? `border: 1px solid ${c.border};` : ''}
      }
      .badge-dot { width: 0.375rem; height: 0.375rem; border-radius: 50%; background: ${c.dot}; flex-shrink: 0; }
      .badge-remove {
        margin-right: -0.125rem; padding: 0.125rem; background: none; border: none; cursor: pointer;
        border-radius: 0.25rem; color: inherit; opacity: 0.7; display: flex;
      }
      .badge-remove:hover { opacity: 1; background: rgba(0,0,0,0.1); }
      .badge-remove svg { width: 0.75rem; height: 0.75rem; }
    </style>
    <span class="badge-demo">
      ${args.dot ? html`<span class="badge-dot"></span>` : ''}
      <span>${args.label}</span>
      ${args.removable ? html`
        <button class="badge-remove" aria-label="Remove">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      ` : ''}
    </span>
  `;
};

export const Default: Story = {
  args: { variant: 'soft', color: 'default', size: 'md', label: 'Badge', dot: false, pill: false, removable: false },
  render: (args) => renderBadge(args),
};

export const SolidColors: Story = {
  render: () => html`
    <style>
      .badges-row { display: flex; gap: 0.5rem; flex-wrap: wrap; font-family: system-ui, sans-serif; }
      .badge-s { display: inline-flex; align-items: center; padding: 0.125rem 0.5rem; font-size: 0.875rem; font-weight: 500; color: #fff; border-radius: 0.375rem; }
    </style>
    <div class="badges-row">
      <span class="badge-s" style="background:#3b82f6;">Primary</span>
      <span class="badge-s" style="background:#22c55e;">Success</span>
      <span class="badge-s" style="background:#f59e0b;color:#fff;">Warning</span>
      <span class="badge-s" style="background:#ef4444;">Error</span>
      <span class="badge-s" style="background:#06b6d4;">Info</span>
      <span class="badge-s" style="background:#8b5cf6;">Secondary</span>
    </div>
  `,
};

export const WithDot: Story = {
  args: { variant: 'soft', color: 'success', size: 'md', label: 'Active', dot: true, pill: true, removable: false },
  render: (args) => renderBadge(args),
};

export const Removable: Story = {
  args: { variant: 'soft', color: 'primary', size: 'md', label: 'Removable', dot: false, pill: true, removable: true },
  render: (args) => renderBadge(args),
};
