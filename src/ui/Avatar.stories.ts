/**
 * Avatar Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'UI/Avatar',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
User avatar with image, initials, or icon fallback.

Features:
- Image with lazy loading
- Initials fallback generated from name
- Generic icon fallback
- Six sizes (xs through 2xl)
- Status indicator (online, offline, busy, away)
- Ring/border for emphasis with color options
- Square shape option
- Consistent background colors from name hash
        `,
      },
    },
  },
  argTypes: {
    name: { control: 'text', description: 'User name (used for initials fallback)' },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Avatar size',
    },
    status: {
      control: { type: 'select' },
      options: [undefined, 'online', 'offline', 'busy', 'away'],
      description: 'Status indicator dot',
    },
    ring: { control: 'boolean', description: 'Show ring border around avatar' },
    square: { control: 'boolean', description: 'Square shape instead of circular' },
  },
};

export default meta;
type Story = StoryObj;

const sizeMap: Record<string, string> = {
  xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem', xl: '4rem', '2xl': '5rem',
};

const statusSizeMap: Record<string, string> = {
  xs: '0.375rem', sm: '0.5rem', md: '0.625rem', lg: '0.75rem', xl: '0.875rem', '2xl': '1rem',
};

const statusColorMap: Record<string, string> = {
  online: '#22c55e', offline: '#94a3b8', busy: '#ef4444', away: '#f59e0b',
};

const fontSizeMap: Record<string, string> = {
  xs: '0.625rem', sm: '0.75rem', md: '0.875rem', lg: '1rem', xl: '1.25rem', '2xl': '1.5rem',
};

const getInitials = (name: string): string => {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
};

const bgColors = ['#3b82f6', '#8b5cf6', '#22c55e', '#f59e0b', '#ef4444', '#06b6d4'];
const getBg = (name: string): string => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return bgColors[Math.abs(hash) % bgColors.length];
};

const renderAvatar = (args: Record<string, unknown>) => {
  const size = (args.size as string) || 'md';
  const dim = sizeMap[size];
  const name = (args.name as string) || '';
  const status = args.status as string | undefined;
  const ring = args.ring as boolean;
  const square = args.square as boolean;
  const initials = name ? getInitials(name) : '';
  const bg = name ? getBg(name) : '#cbd5e1';

  return html`
    <style>
      .avatar-demo {
        position: relative; display: inline-flex; align-items: center; justify-content: center;
        width: ${dim}; height: ${dim}; border-radius: ${square ? '0.5rem' : '50%'};
        background: ${bg}; color: #fff; font-weight: 500; font-size: ${fontSizeMap[size]};
        font-family: system-ui, -apple-system, sans-serif; user-select: none; flex-shrink: 0;
        ${ring ? `box-shadow: 0 0 0 2px #fff, 0 0 0 4px #3b82f6;` : ''}
      }
      .avatar-demo svg { width: 50%; height: 50%; color: rgba(255,255,255,0.7); }
      .avatar-status {
        position: absolute; bottom: 0; right: 0; display: block; border-radius: 50%;
        width: ${statusSizeMap[size]}; height: ${statusSizeMap[size]};
        border: 2px solid #fff;
      }
    </style>
    <div class="avatar-demo">
      ${initials
        ? html`<span>${initials}</span>`
        : html`<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>`
      }
      ${status ? html`<span class="avatar-status" style="background:${statusColorMap[status]}"></span>` : ''}
    </div>
  `;
};

export const Default: Story = {
  args: { name: 'Max Mustermann', size: 'md', ring: false, square: false },
  render: (args) => renderAvatar(args),
};

export const WithStatus: Story = {
  args: { name: 'Anna Schmidt', size: 'lg', status: 'online', ring: false, square: false },
  render: (args) => renderAvatar(args),
};

export const WithRing: Story = {
  args: { name: 'Thomas Weber', size: 'xl', ring: true, square: false, status: 'busy' },
  render: (args) => renderAvatar(args),
};

export const AllSizes: Story = {
  render: () => html`
    <style>
      .avatar-sizes { display: flex; align-items: center; gap: 1rem; font-family: system-ui, sans-serif; }
      .avatar-sizes .av {
        display: inline-flex; align-items: center; justify-content: center;
        border-radius: 50%; background: #3b82f6; color: #fff; font-weight: 500; flex-shrink: 0;
      }
    </style>
    <div class="avatar-sizes">
      <div class="av" style="width:1.5rem;height:1.5rem;font-size:0.625rem;">M</div>
      <div class="av" style="width:2rem;height:2rem;font-size:0.75rem;">MM</div>
      <div class="av" style="width:2.5rem;height:2.5rem;font-size:0.875rem;">MM</div>
      <div class="av" style="width:3rem;height:3rem;font-size:1rem;">MM</div>
      <div class="av" style="width:4rem;height:4rem;font-size:1.25rem;">MM</div>
      <div class="av" style="width:5rem;height:5rem;font-size:1.5rem;">MM</div>
    </div>
  `,
};
