/**
 * NewsTickerSection Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Sections/NewsTickerSection',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Horizontal scrolling ticker for announcements and news. Features:
- Six content variants (default, news, stocks, announcement, logos, social)
- Seamless infinite CSS animation loop with configurable speed
- Pause-on-hover, dismissible announcement bar
        `,
      },
    },
  },
  argTypes: {
    variant: { control: 'select', options: ['default', 'news', 'stocks', 'announcement', 'logos'], description: 'Ticker variant' },
    background: { control: 'select', options: ['primary', 'dark', 'light'], description: 'Background theme' },
  },
};

export default meta;
type Story = StoryObj;

const renderTicker = () => html`
  <div style="background:#1e293b;color:white;overflow:hidden;font-family:system-ui,sans-serif;font-size:0.875rem;">
    <div style="display:flex;padding:0.75rem 0;animation:ticker 30s linear infinite;">
      ${['Acme Corp acquires Widget Inc. for $500M', 'Q4 earnings exceed analyst expectations', 'New product launch scheduled for March', 'Partnership with Global Tech announced', 'Annual conference dates confirmed'].map(item => html`
        <div style="display:flex;align-items:center;white-space:nowrap;padding:0 1rem;">
          <span>${item}</span>
          <span style="opacity:0.5;margin:0 0.5rem;">•</span>
        </div>
      `)}
    </div>
  </div>
  <style>@keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }</style>
`;

export const Default: Story = {
  render: () => renderTicker(),
};

export const Announcement: Story = {
  render: () => html`
    <div style="background:#3b82f6;color:white;display:flex;align-items:center;justify-content:center;padding:0.75rem 1rem;font-family:system-ui,sans-serif;font-size:0.875rem;">
      <div style="display:flex;align-items:center;gap:0.75rem;">
        <span style="font-weight:500;">Free shipping on all orders this weekend!</span>
        <a href="#" style="display:inline-flex;align-items:center;gap:0.25rem;font-weight:600;color:inherit;text-decoration:none;padding:0.25rem 0.75rem;background:rgba(255,255,255,0.2);border-radius:9999px;">Shop Now &rarr;</a>
      </div>
    </div>
  `,
};

export const StockTicker: Story = {
  render: () => html`
    <div style="background:#1e293b;color:white;overflow:hidden;font-family:ui-monospace,SFMono-Regular,monospace;font-size:0.875rem;padding:0.75rem 0;">
      <div style="display:flex;gap:2rem;padding:0 1rem;">
        ${[
          { symbol: 'ACME', price: '142.50', change: '+2.35', up: true },
          { symbol: 'WIDG', price: '89.20', change: '-1.15', up: false },
          { symbol: 'GLBL', price: '256.80', change: '+5.40', up: true },
          { symbol: 'TECH', price: '178.90', change: '+0.85', up: true },
        ].map(s => html`
          <div style="display:flex;align-items:center;gap:0.75rem;white-space:nowrap;">
            <span style="font-weight:700;">${s.symbol}</span>
            <span>$${s.price}</span>
            <span style="padding:0.125rem 0.5rem;border-radius:9999px;font-size:0.75rem;background:${s.up ? 'rgba(34,197,94,0.2)' : 'rgba(239,68,68,0.2)'};color:${s.up ? '#22c55e' : '#ef4444'};">${s.change}</span>
          </div>
        `)}
      </div>
    </div>
  `,
};
