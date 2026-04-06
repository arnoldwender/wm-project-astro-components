/**
 * StatCard Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'UI/StatCard',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Compact statistic display with optional trend indicator.

Features:
- Displays value, label, and optional trend percentage
- Three trend directions (up, down, neutral) with semantic colors
- Three visual variants (default, outlined, filled)
- Three sizes (sm, md, lg)
- Optional icon
- Green for positive, red for negative, gray for neutral trends
- Dark mode support
        `,
      },
    },
  },
  argTypes: {
    value: { control: 'text', description: 'Statistic value' },
    label: { control: 'text', description: 'Statistic label' },
    trend: { control: { type: 'number', step: 0.1 }, description: 'Trend percentage' },
    trendDirection: {
      control: { type: 'select' },
      options: ['up', 'down', 'neutral'],
      description: 'Trend direction for color coding',
    },
    icon: { control: 'text', description: 'Icon (emoji or symbol)' },
    variant: {
      control: { type: 'select' },
      options: ['default', 'outlined', 'filled'],
      description: 'Visual variant',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Component size',
    },
  },
};

export default meta;
type Story = StoryObj;

const sizeMap: Record<string, { padding: string; valueSize: string; labelSize: string; iconSize: string }> = {
  sm: { padding: '1rem', valueSize: '1.5rem', labelSize: '0.75rem', iconSize: '1.25rem' },
  md: { padding: '1.5rem', valueSize: '2rem', labelSize: '0.875rem', iconSize: '1.5rem' },
  lg: { padding: '2rem', valueSize: '2.5rem', labelSize: '1rem', iconSize: '2rem' },
};

const trendColors: Record<string, { color: string; bg: string }> = {
  up: { color: '#16a34a', bg: '#f0fdf4' },
  down: { color: '#dc2626', bg: '#fef2f2' },
  neutral: { color: '#64748b', bg: '#f1f5f9' },
};

const trendArrows: Record<string, string> = {
  up: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15l-6-6-6 6"/></svg>',
  down: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>',
  neutral: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>',
};

const renderStatCard = (args: Record<string, unknown>) => {
  const variant = (args.variant as string) || 'default';
  const size = (args.size as string) || 'md';
  const s = sizeMap[size];
  const direction = (args.trendDirection as string) || 'neutral';
  const trend = args.trend as number | undefined;
  const tc = trendColors[direction];
  const isFilled = variant === 'filled';

  return html`
    <style>
      .sc-demo {
        font-family: system-ui, -apple-system, sans-serif;
        display: flex; flex-direction: column; gap: 0.25rem;
        padding: ${s.padding}; border-radius: 1rem;
        ${variant === 'default' ? 'background: #fff; box-shadow: 0 1px 2px rgba(0,0,0,0.05);' : ''}
        ${variant === 'outlined' ? 'background: #fff; border: 1px solid #e2e8f0;' : ''}
        ${variant === 'filled' ? 'background: #3b82f6; color: #fff;' : ''}
        max-width: 280px; transition: box-shadow 0.3s ease;
      }
      .sc-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.25rem; }
      .sc-icon { font-size: ${s.iconSize}; line-height: 1; }
      .sc-trend {
        display: inline-flex; align-items: center; gap: 2px;
        font-size: 0.75rem; font-weight: 500; padding: 0.25rem 0.5rem; border-radius: 9999px;
        color: ${isFilled ? (direction === 'up' ? '#dcfce7' : direction === 'down' ? '#fecaca' : 'rgba(255,255,255,0.8)') : tc.color};
        background: ${isFilled ? 'rgba(255,255,255,0.15)' : tc.bg};
        margin-left: auto;
      }
      .sc-value {
        font-size: ${s.valueSize}; font-weight: 700; line-height: 1.2; letter-spacing: -0.025em;
        color: ${isFilled ? '#fff' : '#1a1a2e'};
      }
      .sc-label {
        font-size: ${s.labelSize}; line-height: 1.5;
        color: ${isFilled ? 'rgba(255,255,255,0.8)' : '#64748b'};
      }
    </style>
    <article class="sc-demo">
      <header class="sc-header">
        ${args.icon ? html`<span class="sc-icon">${args.icon}</span>` : ''}
        ${trend !== undefined ? html`
          <span class="sc-trend">
            <span .innerHTML=${trendArrows[direction]}></span>
            <span>${Math.abs(trend)}%</span>
          </span>
        ` : ''}
      </header>
      <span class="sc-value">${args.value}</span>
      <span class="sc-label">${args.label}</span>
    </article>
  `;
};

export const Default: Story = {
  args: { value: '12,345', label: 'Total Users', trend: 12.5, trendDirection: 'up', icon: '👥', variant: 'default', size: 'md' },
  render: (args) => renderStatCard(args),
};

export const TrendDown: Story = {
  args: { value: '$48.2K', label: 'Revenue', trend: -3.2, trendDirection: 'down', icon: '💰', variant: 'default', size: 'md' },
  render: (args) => renderStatCard(args),
};

export const TrendNeutral: Story = {
  args: { value: '99.9%', label: 'Uptime', trend: 0, trendDirection: 'neutral', icon: '🟢', variant: 'default', size: 'md' },
  render: (args) => renderStatCard(args),
};

export const Outlined: Story = {
  args: { value: '8,421', label: 'Page Views', trend: 5.7, trendDirection: 'up', icon: '📊', variant: 'outlined', size: 'md' },
  render: (args) => renderStatCard(args),
};

export const Filled: Story = {
  args: { value: '1,847', label: 'New Signups', trend: 24.3, trendDirection: 'up', icon: '🚀', variant: 'filled', size: 'md' },
  render: (args) => renderStatCard(args),
};

export const LargeSize: Story = {
  args: { value: '$128K', label: 'Monthly Revenue', trend: 8.1, trendDirection: 'up', icon: '📈', variant: 'default', size: 'lg' },
  render: (args) => renderStatCard(args),
};

export const SmallSize: Story = {
  args: { value: '342', label: 'Active Users', trend: 2.1, trendDirection: 'up', variant: 'outlined', size: 'sm' },
  render: (args) => renderStatCard(args),
};

export const DashboardGrid: Story = {
  render: () => html`
    <style>
      .sc-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; font-family: system-ui, sans-serif; }
      .sc-card {
        display: flex; flex-direction: column; gap: 0.25rem; padding: 1.5rem; border-radius: 1rem;
        background: #fff; box-shadow: 0 1px 2px rgba(0,0,0,0.05);
      }
      .sc-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.25rem; }
      .sc-icon { font-size: 1.5rem; }
      .sc-trend { display: inline-flex; align-items: center; gap: 2px; font-size: 0.75rem; font-weight: 500; padding: 0.25rem 0.5rem; border-radius: 9999px; margin-left: auto; }
      .sc-trend--up { color: #16a34a; background: #f0fdf4; }
      .sc-trend--down { color: #dc2626; background: #fef2f2; }
      .sc-value { font-size: 2rem; font-weight: 700; color: #1a1a2e; line-height: 1.2; }
      .sc-label { font-size: 0.875rem; color: #64748b; }
    </style>
    <div class="sc-grid">
      <article class="sc-card">
        <header class="sc-header"><span class="sc-icon">👥</span><span class="sc-trend sc-trend--up"><span .innerHTML=${trendArrows.up}></span>12.5%</span></header>
        <span class="sc-value">12,345</span><span class="sc-label">Total Users</span>
      </article>
      <article class="sc-card">
        <header class="sc-header"><span class="sc-icon">💰</span><span class="sc-trend sc-trend--up"><span .innerHTML=${trendArrows.up}></span>8.1%</span></header>
        <span class="sc-value">$48.2K</span><span class="sc-label">Revenue</span>
      </article>
      <article class="sc-card">
        <header class="sc-header"><span class="sc-icon">📊</span><span class="sc-trend sc-trend--down"><span .innerHTML=${trendArrows.down}></span>3.2%</span></header>
        <span class="sc-value">2.4K</span><span class="sc-label">Bounce Rate</span>
      </article>
      <article class="sc-card">
        <header class="sc-header"><span class="sc-icon">🟢</span><span class="sc-trend sc-trend--up"><span .innerHTML=${trendArrows.up}></span>0.1%</span></header>
        <span class="sc-value">99.9%</span><span class="sc-label">Uptime</span>
      </article>
    </div>
  `,
};
