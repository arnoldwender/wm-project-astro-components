/**
 * ThemeToggle Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Accessibility/ThemeToggle',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Dark/Light mode toggle with localStorage persistence and FOUC prevention.

**Features:**
- System preference detection (prefers-color-scheme)
- localStorage persistence across sessions
- Accessible labels and focus indicators
- Smooth icon transitions
- Three sizes: sm, md, lg
- View Transitions API support
        `,
      },
    },
  },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'], description: 'Toggle button size' },
  },
};

export default meta;
type Story = StoryObj;

const renderThemeToggle = (args: Record<string, unknown>) => {
  const sizeMap: Record<string, { pad: string; icon: string }> = {
    sm: { pad: '0.375rem', icon: '16' },
    md: { pad: '0.5rem', icon: '20' },
    lg: { pad: '0.625rem', icon: '24' },
  };
  const s = sizeMap[args.size as string] || sizeMap.md;

  return html`
    <div style="padding: 2rem; font-family: system-ui, sans-serif; display: flex; gap: 2rem; align-items: center;">
      <!-- Light mode toggle -->
      <div style="padding: 1rem; background: white; border-radius: 0.5rem; border: 1px solid #e2e8f0;">
        <button style="padding: ${s.pad}; border-radius: 0.5rem; border: none; background: transparent; cursor: pointer; color: #64748b; transition: all 200ms;"
                aria-label="Toggle dark mode" title="Toggle dark mode">
          <svg width="${s.icon}" height="${s.icon}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
          </svg>
        </button>
      </div>

      <!-- Dark mode toggle -->
      <div style="padding: 1rem; background: #1e293b; border-radius: 0.5rem;">
        <button style="padding: ${s.pad}; border-radius: 0.5rem; border: none; background: transparent; cursor: pointer; color: #94a3b8; transition: all 200ms;"
                aria-label="Toggle light mode" title="Toggle light mode">
          <svg width="${s.icon}" height="${s.icon}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
          </svg>
        </button>
      </div>

      <span style="font-size: 0.875rem; color: #64748b;">Size: ${args.size}</span>
    </div>
  `;
};

export const Medium: Story = {
  args: { size: 'md' },
  render: (args) => renderThemeToggle(args),
};

export const Small: Story = {
  args: { size: 'sm' },
  render: (args) => renderThemeToggle(args),
};

export const Large: Story = {
  args: { size: 'lg' },
  render: (args) => renderThemeToggle(args),
};
