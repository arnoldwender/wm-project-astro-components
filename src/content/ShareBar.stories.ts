/**
 * ShareBar Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Content/ShareBar',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Social sharing buttons with tracking support. GDPR-friendly with no third-party scripts. Features include:
- Supports Twitter, LinkedIn, Facebook, WhatsApp, Telegram, email, copy, and print
- Horizontal and vertical layout with optional labels
- Copy-to-clipboard with visual toast feedback
- Multiple size (sm, md, lg) and style variants (default, outline, ghost)
- Platform brand colors applied to buttons
        `,
      },
    },
  },
  argTypes: {
    variant: { control: 'select', options: ['default', 'outline', 'ghost'], description: 'Button style variant' },
    size: { control: 'select', options: ['sm', 'md', 'lg'], description: 'Button size' },
    direction: { control: 'select', options: ['horizontal', 'vertical'], description: 'Layout direction' },
    showLabels: { control: 'boolean', description: 'Show text labels' },
  },
};

export default meta;
type Story = StoryObj;

const sharePlatforms = [
  { name: 'Twitter', color: '#1DA1F2' },
  { name: 'LinkedIn', color: '#0A66C2' },
  { name: 'Facebook', color: '#1877F2' },
  { name: 'E-Mail', color: '#6b7280' },
  { name: 'Link kopieren', color: '#6b7280' },
];

const sizeMap: Record<string, string> = { sm: '2rem', md: '2.5rem', lg: '3rem' };
const iconMap: Record<string, string> = { sm: '1rem', md: '1.25rem', lg: '1.5rem' };

const renderShareBar = (args: Record<string, unknown>) => html`
  <style>
    .sb { display: flex; gap: 0.5rem; padding: 2rem; font-family: system-ui, sans-serif;
      ${args.direction === 'vertical' ? 'flex-direction: column; max-width: 200px;' : ''} }
    .sb-btn {
      display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem;
      width: ${args.showLabels ? 'auto' : sizeMap[args.size as string]}; height: ${sizeMap[args.size as string]};
      ${args.showLabels ? `padding: 0 1rem;` : ''}
      border-radius: 0.5rem; border: none; cursor: pointer; transition: all 0.15s;
      ${args.variant === 'default' ? 'color: #fff;' : ''}
      ${args.variant === 'outline' ? 'background: transparent;' : ''}
      ${args.variant === 'ghost' ? 'background: transparent; border: none;' : ''}
    }
    .sb-btn:hover { opacity: 0.9; transform: scale(1.05); }
    .sb-icon { width: ${iconMap[args.size as string]}; height: ${iconMap[args.size as string]}; }
    .sb-label { font-size: 0.875rem; font-weight: 500; }
  </style>
  <div class="sb">
    ${sharePlatforms.map(p => html`
      <button class="sb-btn" aria-label="${p.name}"
        style="${args.variant === 'default' ? `background: ${p.color};` : args.variant === 'outline' ? `border: 1px solid ${p.color}; color: ${p.color};` : `color: ${p.color};`}">
        <svg class="sb-icon" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="8"/></svg>
        ${args.showLabels ? html`<span class="sb-label">${p.name}</span>` : ''}
      </button>
    `)}
  </div>
`;

export const Default: Story = {
  args: { variant: 'default', size: 'md', direction: 'horizontal', showLabels: false },
  render: (args) => renderShareBar(args),
};

export const Outline: Story = {
  args: { variant: 'outline', size: 'md', direction: 'horizontal', showLabels: false },
  render: (args) => renderShareBar(args),
};

export const Vertical: Story = {
  args: { variant: 'default', size: 'lg', direction: 'vertical', showLabels: true },
  render: (args) => renderShareBar(args),
};
