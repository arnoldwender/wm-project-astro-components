/**
 * Progress Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'UI/Progress',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Visual indicator for task completion or loading state.

Features:
- Linear and circular variants
- Determinate and indeterminate states
- Six color options (primary, secondary, success, warning, error, info)
- Three sizes (sm, md, lg)
- Optional label and percentage value display
- Animated transitions
- Reduced motion support
        `,
      },
    },
  },
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100, step: 1 }, description: 'Current progress value' },
    max: { control: 'number', description: 'Maximum progress value' },
    variant: {
      control: { type: 'select' },
      options: ['linear', 'circular'],
      description: 'Linear bar or circular ring',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the progress indicator',
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'warning', 'error', 'info'],
      description: 'Progress bar color',
    },
    indeterminate: { control: 'boolean', description: 'Show indeterminate loading animation' },
    showValue: { control: 'boolean', description: 'Show percentage value text' },
    label: { control: 'text', description: 'Label text above the progress bar' },
  },
};

export default meta;
type Story = StoryObj;

const colorMap: Record<string, string> = {
  primary: '#3b82f6', secondary: '#8b5cf6', success: '#22c55e',
  warning: '#f59e0b', error: '#ef4444', info: '#06b6d4',
};

const linearHeightMap: Record<string, string> = { sm: '0.25rem', md: '0.5rem', lg: '0.75rem' };

const circularSizeMap: Record<string, { dim: number; stroke: number }> = {
  sm: { dim: 32, stroke: 3 }, md: { dim: 48, stroke: 4 }, lg: { dim: 64, stroke: 5 },
};

const renderProgress = (args: Record<string, unknown>) => {
  const value = (args.value as number) || 0;
  const max = (args.max as number) || 100;
  const variant = (args.variant as string) || 'linear';
  const size = (args.size as string) || 'md';
  const color = (args.color as string) || 'primary';
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  const barColor = colorMap[color];

  if (variant === 'circular') {
    const { dim, stroke } = circularSizeMap[size];
    const radius = (dim - stroke) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;
    const fontSize = size === 'sm' ? '0.625rem' : size === 'lg' ? '0.875rem' : '0.75rem';

    return html`
      <style>
        .progress-circ-demo { position: relative; display: inline-flex; align-items: center; justify-content: center; font-family: system-ui, sans-serif; }
        .progress-circ-value { position: absolute; font-weight: 500; color: #1e293b; font-size: ${fontSize}; }
        @keyframes circ-rotate { 100% { transform: rotate(360deg); } }
        .circ-indeterminate { animation: circ-rotate 1.5s linear infinite; }
      </style>
      <div class="progress-circ-demo" role="progressbar" aria-valuenow="${value}" aria-valuemax="${max}" style="width:${dim}px;height:${dim}px;">
        <svg width="${dim}" height="${dim}" viewBox="0 0 ${dim} ${dim}" class="${args.indeterminate ? 'circ-indeterminate' : ''}">
          <circle fill="none" stroke="#e2e8f0" stroke-width="${stroke}" cx="${dim / 2}" cy="${dim / 2}" r="${radius}" />
          <circle fill="none" stroke="${barColor}" stroke-width="${stroke}" stroke-linecap="round"
            cx="${dim / 2}" cy="${dim / 2}" r="${radius}"
            style="stroke-dasharray:${circumference}; stroke-dashoffset:${args.indeterminate ? circumference * 0.75 : offset}; transition: stroke-dashoffset 0.3s ease-out;"
            transform="rotate(-90 ${dim / 2} ${dim / 2})" />
        </svg>
        ${args.showValue && !args.indeterminate ? html`<span class="progress-circ-value">${Math.round(percentage)}%</span>` : ''}
      </div>
    `;
  }

  return html`
    <style>
      .progress-linear-demo { max-width: 400px; font-family: system-ui, sans-serif; }
      .progress-meta { display: flex; justify-content: space-between; margin-bottom: 0.25rem; font-size: 0.875rem; }
      .progress-label { color: #64748b; }
      .progress-value { color: #94a3b8; font-weight: 500; }
      .progress-track { width: 100%; background: #e2e8f0; border-radius: 9999px; overflow: hidden; height: ${linearHeightMap[size]}; }
      .progress-bar { height: 100%; border-radius: 9999px; transition: width 0.3s ease-out; background: ${barColor}; }
      @keyframes indeterminate-demo { 0% { transform: translateX(-100%); } 100% { transform: translateX(200%); } }
      .progress-bar.indeterminate { width: 50% !important; animation: indeterminate-demo 1.5s ease-in-out infinite; }
    </style>
    <div class="progress-linear-demo" role="progressbar" aria-valuenow="${value}" aria-valuemax="${max}">
      ${(args.label || args.showValue) ? html`
        <div class="progress-meta">
          ${args.label ? html`<span class="progress-label">${args.label}</span>` : ''}
          ${args.showValue && !args.indeterminate ? html`<span class="progress-value">${Math.round(percentage)}%</span>` : ''}
        </div>
      ` : ''}
      <div class="progress-track">
        <div class="progress-bar ${args.indeterminate ? 'indeterminate' : ''}" style="width:${args.indeterminate ? '50' : percentage}%"></div>
      </div>
    </div>
  `;
};

export const Default: Story = {
  args: { value: 65, max: 100, variant: 'linear', size: 'md', color: 'primary', indeterminate: false, showValue: true, label: 'Upload progress' },
  render: (args) => renderProgress(args),
};

export const Circular: Story = {
  args: { value: 75, max: 100, variant: 'circular', size: 'lg', color: 'success', indeterminate: false, showValue: true, label: '' },
  render: (args) => renderProgress(args),
};

export const Indeterminate: Story = {
  args: { value: 0, max: 100, variant: 'linear', size: 'md', color: 'primary', indeterminate: true, showValue: false, label: 'Loading...' },
  render: (args) => renderProgress(args),
};

export const AllColors: Story = {
  render: () => html`
    <style>
      .progress-colors { display: flex; flex-direction: column; gap: 0.75rem; max-width: 400px; font-family: system-ui, sans-serif; }
      .progress-colors .track { width: 100%; height: 0.5rem; background: #e2e8f0; border-radius: 9999px; overflow: hidden; }
      .progress-colors .bar { height: 100%; border-radius: 9999px; width: 70%; }
      .progress-colors .lbl { font-size: 0.75rem; color: #64748b; margin-bottom: 0.125rem; }
    </style>
    <div class="progress-colors">
      ${['primary', 'secondary', 'success', 'warning', 'error', 'info'].map(c => html`
        <div>
          <div class="lbl">${c}</div>
          <div class="track"><div class="bar" style="background:${colorMap[c]}"></div></div>
        </div>
      `)}
    </div>
  `,
};
