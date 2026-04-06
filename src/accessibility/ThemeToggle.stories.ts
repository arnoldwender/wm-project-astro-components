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
- Three variants: button (icon toggle), switch (iOS-style), dropdown (light/dark/system)
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
    variant: { control: 'select', options: ['button', 'switch', 'dropdown'], description: 'Rendering style' },
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
  args: { size: 'md', variant: 'button' },
  render: (args) => renderThemeToggle(args),
};

export const Small: Story = {
  args: { size: 'sm', variant: 'button' },
  render: (args) => renderThemeToggle(args),
};

export const Large: Story = {
  args: { size: 'lg', variant: 'button' },
  render: (args) => renderThemeToggle(args),
};

/* ---- Switch variant stories ---- */

const renderSwitchToggle = (args: Record<string, unknown>) => {
  const trackSizes: Record<string, { w: string; h: string; thumb: string; translate: string }> = {
    sm: { w: '2.5rem', h: '1.25rem', thumb: '0.875rem', translate: '1.25rem' },
    md: { w: '3rem', h: '1.5rem', thumb: '1.125rem', translate: '1.5rem' },
    lg: { w: '3.5rem', h: '1.75rem', thumb: '1.375rem', translate: '1.75rem' },
  };
  const t = trackSizes[args.size as string] || trackSizes.md;

  return html`
    <div style="padding: 2rem; font-family: system-ui, sans-serif; display: flex; gap: 2rem; align-items: center;">
      <!-- Light mode (off) -->
      <div style="padding: 1rem; background: white; border-radius: 0.5rem; border: 1px solid #e2e8f0; display: flex; align-items: center; gap: 0.75rem;">
        <button role="switch" aria-checked="false" aria-label="Toggle dark mode"
          style="position: relative; width: ${t.w}; height: ${t.h}; background: #e2e8f0; border-radius: 9999px; border: none; cursor: pointer; display: flex; align-items: center;">
          <span style="position: absolute; left: 2px; width: ${t.thumb}; height: ${t.thumb}; background: white; border-radius: 50%; box-shadow: 0 1px 3px rgba(0,0,0,0.2); transition: transform 200ms;"></span>
        </button>
        <span style="font-size: 0.875rem; color: #475569;">Light</span>
      </div>

      <!-- Dark mode (on) -->
      <div style="padding: 1rem; background: #1e293b; border-radius: 0.5rem; display: flex; align-items: center; gap: 0.75rem;">
        <button role="switch" aria-checked="true" aria-label="Toggle light mode"
          style="position: relative; width: ${t.w}; height: ${t.h}; background: #6366f1; border-radius: 9999px; border: none; cursor: pointer; display: flex; align-items: center;">
          <span style="position: absolute; left: 2px; width: ${t.thumb}; height: ${t.thumb}; background: white; border-radius: 50%; box-shadow: 0 1px 3px rgba(0,0,0,0.2); transform: translateX(${t.translate}); transition: transform 200ms;"></span>
        </button>
        <span style="font-size: 0.875rem; color: #94a3b8;">Dark</span>
      </div>
    </div>
  `;
};

export const SwitchMedium: Story = {
  args: { size: 'md', variant: 'switch' },
  render: (args) => renderSwitchToggle(args),
  name: 'Switch — Medium',
};

export const SwitchSmall: Story = {
  args: { size: 'sm', variant: 'switch' },
  render: (args) => renderSwitchToggle(args),
  name: 'Switch — Small',
};

export const SwitchLarge: Story = {
  args: { size: 'lg', variant: 'switch' },
  render: (args) => renderSwitchToggle(args),
  name: 'Switch — Large',
};

/* ---- Dropdown variant stories ---- */

const renderDropdownToggle = (args: Record<string, unknown>) => {
  const fontSize: Record<string, string> = { sm: '0.75rem', md: '0.875rem', lg: '1rem' };
  const padding: Record<string, string> = { sm: '0.375rem', md: '0.5rem', lg: '0.625rem' };

  return html`
    <div style="padding: 2rem; font-family: system-ui, sans-serif; display: flex; gap: 2rem; align-items: center;">
      <!-- Light background -->
      <div style="padding: 1rem; background: white; border-radius: 0.5rem; border: 1px solid #e2e8f0;">
        <div style="position: relative; display: inline-block;">
          <select style="appearance: none; padding: ${padding[args.size as string] || padding.md}; padding-right: 2rem; border: 1px solid #e2e8f0; border-radius: 0.5rem; background: white; font-size: ${fontSize[args.size as string] || fontSize.md}; cursor: pointer; min-width: 5rem;"
                  aria-label="Select color theme">
            <option value="light" selected>Light</option>
            <option value="dark">Dark</option>
            <option value="system">System</option>
          </select>
          <svg style="position: absolute; right: 0.5rem; top: 50%; transform: translateY(-50%); pointer-events: none; width: 1rem; height: 1rem; color: #94a3b8;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </div>
      </div>

      <!-- Dark background -->
      <div style="padding: 1rem; background: #1e293b; border-radius: 0.5rem;">
        <div style="position: relative; display: inline-block;">
          <select style="appearance: none; padding: ${padding[args.size as string] || padding.md}; padding-right: 2rem; border: 1px solid #475569; border-radius: 0.5rem; background: #334155; color: #e2e8f0; font-size: ${fontSize[args.size as string] || fontSize.md}; cursor: pointer; min-width: 5rem;"
                  aria-label="Select color theme">
            <option value="light">Light</option>
            <option value="dark" selected>Dark</option>
            <option value="system">System</option>
          </select>
          <svg style="position: absolute; right: 0.5rem; top: 50%; transform: translateY(-50%); pointer-events: none; width: 1rem; height: 1rem; color: #94a3b8;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </div>
      </div>
    </div>
  `;
};

export const DropdownMedium: Story = {
  args: { size: 'md', variant: 'dropdown' },
  render: (args) => renderDropdownToggle(args),
  name: 'Dropdown — Medium',
};

export const DropdownSmall: Story = {
  args: { size: 'sm', variant: 'dropdown' },
  render: (args) => renderDropdownToggle(args),
  name: 'Dropdown — Small',
};
