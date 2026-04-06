/**
 * TrustBar Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Sections/TrustBar',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Horizontal social-proof bar displaying trust signals.

Features:
- Trust items with icon, label, and value
- Three variants: light, dark, gradient
- Compact mode for tighter layouts
- Responsive: horizontal on desktop, 2-column grid on mobile
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['light', 'dark', 'gradient'],
      description: 'Visual variant',
    },
    compact: { control: 'boolean', description: 'Compact spacing mode' },
  },
};

export default meta;
type Story = StoryObj;

const defaultItems = [
  { icon: '🏢', label: 'Seit', value: '2007' },
  { icon: '📊', label: 'Projekte', value: '500+' },
  { icon: '📍', label: 'Standort', value: 'Halle (Saale)' },
  { icon: '♿', label: 'Zertifiziert', value: 'WCAG AA' },
  { icon: '🔒', label: 'DSGVO', value: 'konform' },
];

const renderTrustBar = (args: Record<string, unknown>) => {
  const variant = (args.variant as string) || 'light';
  const compact = args.compact as boolean;
  const items = (args.items as Array<{ icon: string; label: string; value: string }>) || defaultItems;

  const bgMap: Record<string, string> = {
    light: 'background: #f7fafc; border-top: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0;',
    dark: 'background: #1a202c;',
    gradient: 'background: linear-gradient(135deg, #3b82f6, #8b5cf6);',
  };

  const labelColor = variant === 'light' ? '#718096' : 'rgba(255,255,255,0.75)';
  const valueColor = variant === 'light' ? '#1a202c' : '#ffffff';

  return html`
    <style>
      .tb-demo { width: 100%; font-family: system-ui, -apple-system, sans-serif; ${bgMap[variant]} }
      .tb-demo__inner { max-width: 80rem; margin: 0 auto; padding: ${compact ? '0.5rem' : '1rem'} 1.5rem; }
      .tb-demo__list { display: flex; align-items: center; justify-content: center; gap: 2rem; list-style: none; margin: 0; padding: 0; }
      .tb-demo__item { display: flex; align-items: center; gap: 0.5rem; white-space: nowrap; }
      .tb-demo__icon { font-size: ${compact ? '1.25rem' : '1.5rem'}; line-height: 1; }
      .tb-demo__label { font-size: 0.75rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em; color: ${labelColor}; }
      .tb-demo__value { font-size: ${compact ? '0.875rem' : '1rem'}; font-weight: 700; color: ${valueColor}; }
      .tb-demo__text { display: flex; flex-direction: column; }
    </style>
    <section class="tb-demo" aria-label="Trust signals">
      <div class="tb-demo__inner">
        <ul class="tb-demo__list" role="list">
          ${items.map(
            (item) => html`
              <li class="tb-demo__item">
                <span class="tb-demo__icon" aria-hidden="true">${item.icon}</span>
                <span class="tb-demo__text">
                  <span class="tb-demo__label">${item.label}</span>
                  <span class="tb-demo__value">${item.value}</span>
                </span>
              </li>
            `
          )}
        </ul>
      </div>
    </section>
  `;
};

export const Light: Story = {
  args: { variant: 'light', compact: false, items: defaultItems },
  render: (args) => renderTrustBar(args),
};

export const Dark: Story = {
  args: { variant: 'dark', compact: false, items: defaultItems },
  render: (args) => renderTrustBar(args),
};

export const Gradient: Story = {
  args: { variant: 'gradient', compact: false, items: defaultItems },
  render: (args) => renderTrustBar(args),
};

export const Compact: Story = {
  args: {
    variant: 'light',
    compact: true,
    items: [
      { icon: '🏢', label: 'Seit', value: '2007' },
      { icon: '📊', label: 'Projekte', value: '500+' },
      { icon: '🔒', label: 'DSGVO', value: 'konform' },
    ],
  },
  render: (args) => renderTrustBar(args),
};
