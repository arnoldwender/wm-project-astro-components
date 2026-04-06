/**
 * NewsTicker Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'UI/NewsTicker',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Animated horizontal scrolling ticker for announcements, news, or promotions.

Features:
- Infinite smooth scrolling animation
- Three speed options (slow, normal, fast)
- Pause on hover
- Six visual variants (default, highlight, urgent, success, dark, gradient)
- Optional dot separator between items
- Icon and badge support per item
- Pause/play controls
- Optional label section
- RTL support
- Reduced motion fallback (horizontal scroll)
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'highlight', 'urgent', 'success', 'dark', 'gradient'],
      description: 'Visual color variant',
    },
    speed: {
      control: { type: 'select' },
      options: ['slow', 'normal', 'fast'],
      description: 'Scrolling speed',
    },
    pauseOnHover: { control: 'boolean', description: 'Pause animation on mouse hover' },
    showLabel: { control: 'boolean', description: 'Show a fixed label section' },
  },
};

export default meta;
type Story = StoryObj;

const variantColors: Record<string, { bg: string; text: string }> = {
  default: { bg: '#f8fafc', text: '#1e293b' },
  highlight: { bg: '#3b82f6', text: '#ffffff' },
  urgent: { bg: '#ef4444', text: '#ffffff' },
  success: { bg: '#22c55e', text: '#ffffff' },
  dark: { bg: '#0f172a', text: '#f1f5f9' },
  gradient: { bg: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #3b82f6)', text: '#ffffff' },
};

const speedDurations: Record<string, string> = { slow: '60s', normal: '40s', fast: '25s' };

const renderTicker = (args: Record<string, unknown>) => {
  const variant = (args.variant as string) || 'default';
  const speed = (args.speed as string) || 'normal';
  const colors = variantColors[variant];
  const duration = speedDurations[speed];

  const items = [
    { icon: '&#x1F4E2;', text: 'New feature: Command Palette now available' },
    { icon: '&#x1F389;', text: 'Sale: 20% off all services this month' },
    { icon: '&#x1F4C8;', text: 'Performance improved by 35% in latest update' },
    { icon: '&#x26A0;', text: 'Scheduled maintenance on Sunday, 2:00 AM' },
    { icon: '&#x2728;', text: 'Version 3.0 released with new components' },
  ];

  return html`
    <style>
      .ticker-demo {
        position: relative; overflow: hidden; padding: 0.625rem 0;
        font-family: system-ui, -apple-system, sans-serif;
        background: ${colors.bg}; color: ${colors.text};
      }
      .ticker-track-demo {
        display: flex; align-items: center; white-space: nowrap;
        animation: ticker-scroll-demo ${duration} linear infinite;
      }
      .ticker-demo:hover .ticker-track-demo {
        animation-play-state: ${args.pauseOnHover ? 'paused' : 'running'};
      }
      @keyframes ticker-scroll-demo {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .ticker-item-demo { display: inline-flex; align-items: center; gap: 0.5rem; }
      .ticker-sep-demo { margin: 0 1rem; opacity: 0.5; }
      .ticker-label-demo {
        position: absolute; left: 0; top: 0; bottom: 0; z-index: 1;
        display: flex; align-items: center; padding: 0 1rem; font-weight: 600;
        background: inherit;
      }
      .ticker-label-demo::after {
        content: ''; position: absolute; right: -2rem; top: 0; bottom: 0; width: 2rem;
        background: linear-gradient(to right, ${variant === 'gradient' ? '#3b82f6' : colors.bg.split(',')[0].replace('linear-gradient(90deg', '').trim() || colors.bg}, transparent);
      }
      .ticker-pulse { display: inline-flex; width: 0.5rem; height: 0.5rem; border-radius: 50%; background: currentColor; margin-right: 0.5rem; animation: pulse-demo 1.5s ease-in-out infinite; }
      @keyframes pulse-demo { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
    </style>
    <div class="ticker-demo" role="marquee" aria-label="News ticker">
      ${args.showLabel ? html`
        <div class="ticker-label-demo">
          ${variant === 'urgent' ? html`<span class="ticker-pulse"></span>` : ''}
          Breaking
        </div>
      ` : ''}
      <div class="ticker-track-demo" style="${args.showLabel ? 'padding-left:7rem;' : ''}">
        ${[...items, ...items].map((item, i) => html`
          <span class="ticker-item-demo">
            ${i > 0 ? html`<span class="ticker-sep-demo">&bull;</span>` : ''}
            <span>${item.icon}</span>
            <span>${item.text}</span>
          </span>
        `)}
      </div>
    </div>
  `;
};

export const Default: Story = {
  args: { variant: 'default', speed: 'normal', pauseOnHover: true, showLabel: false },
  render: (args) => renderTicker(args),
};

export const Urgent: Story = {
  args: { variant: 'urgent', speed: 'fast', pauseOnHover: true, showLabel: true },
  render: (args) => renderTicker(args),
};

export const Dark: Story = {
  args: { variant: 'dark', speed: 'normal', pauseOnHover: true, showLabel: false },
  render: (args) => renderTicker(args),
};

export const Highlight: Story = {
  args: { variant: 'highlight', speed: 'slow', pauseOnHover: true, showLabel: false },
  render: (args) => renderTicker(args),
};
