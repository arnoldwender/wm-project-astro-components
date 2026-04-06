/**
 * Alert Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'UI/Alert',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Contextual feedback messages for user actions or system status.

Features:
- Multiple variants (info, success, warning, error)
- Icon support with variant-specific SVG icons
- Dismissible option with animated exit
- Action buttons via named slot
- Full-width banner mode
- Accent left-border option
- Reduced motion support
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'error'],
      description: 'Semantic variant determining color and icon',
    },
    title: { control: 'text', description: 'Optional bold title above the message' },
    message: { control: 'text', description: 'Alert message content' },
    dismissible: { control: 'boolean', description: 'Show dismiss/close button' },
    icon: { control: 'boolean', description: 'Show variant icon' },
    accent: { control: 'boolean', description: 'Show left accent border' },
    banner: { control: 'boolean', description: 'Full-width banner mode (no rounded corners)' },
  },
};

export default meta;
type Story = StoryObj;

const variantConfig: Record<string, { bg: string; border: string; text: string; iconPath: string }> = {
  info: {
    bg: '#eff6ff', border: '#3b82f6', text: '#1e40af',
    iconPath: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  success: {
    bg: '#f0fdf4', border: '#22c55e', text: '#166534',
    iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  warning: {
    bg: '#fffbeb', border: '#f59e0b', text: '#92400e',
    iconPath: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
  },
  error: {
    bg: '#fef2f2', border: '#ef4444', text: '#991b1b',
    iconPath: 'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z',
  },
};

const renderAlert = (args: Record<string, unknown>) => {
  const variant = (args.variant as string) || 'info';
  const config = variantConfig[variant];

  return html`
    <style>
      .alert-story {
        position: relative; display: flex; gap: 0.75rem; padding: 1rem;
        font-family: system-ui, -apple-system, sans-serif;
        background: ${config.bg}; color: ${config.text};
        max-width: 600px; line-height: 1.5;
      }
      .alert-story.rounded { border-radius: 0.5rem; }
      .alert-story.accent { border-left: 4px solid ${config.border}; }
      .alert-story .alert-icon { flex-shrink: 0; width: 1.25rem; height: 1.25rem; margin-top: 0.125rem; }
      .alert-story .alert-title { font-weight: 600; margin-bottom: 0.25rem; }
      .alert-story .alert-body { font-size: 0.875rem; opacity: 0.9; }
      .alert-story .alert-dismiss {
        flex-shrink: 0; padding: 0.25rem; margin: -0.25rem; background: none; border: none;
        cursor: pointer; opacity: 0.7; color: inherit; border-radius: 0.25rem;
      }
      .alert-story .alert-dismiss:hover { opacity: 1; }
      .alert-story .alert-dismiss svg { width: 1rem; height: 1rem; }
    </style>
    <div
      class="alert-story ${!args.banner ? 'rounded' : ''} ${args.accent ? 'accent' : ''}"
      role="alert"
    >
      ${args.icon ? html`
        <svg class="alert-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${config.iconPath}" />
        </svg>
      ` : ''}
      <div style="flex:1; min-width:0;">
        ${args.title ? html`<h3 class="alert-title">${args.title}</h3>` : ''}
        <div class="alert-body">${args.message}</div>
      </div>
      ${args.dismissible ? html`
        <button class="alert-dismiss" aria-label="Dismiss">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      ` : ''}
    </div>
  `;
};

export const Info: Story = {
  args: { variant: 'info', title: 'Information', message: 'Your account settings have been updated.', dismissible: true, icon: true, accent: false, banner: false },
  render: (args) => renderAlert(args),
};

export const Success: Story = {
  args: { variant: 'success', title: 'Success!', message: 'Your changes have been saved successfully.', dismissible: true, icon: true, accent: false, banner: false },
  render: (args) => renderAlert(args),
};

export const Warning: Story = {
  args: { variant: 'warning', title: 'Warning', message: 'Please review your settings before continuing.', dismissible: true, icon: true, accent: true, banner: false },
  render: (args) => renderAlert(args),
};

export const Error: Story = {
  args: { variant: 'error', title: 'Error', message: 'Something went wrong. Please try again later.', dismissible: true, icon: true, accent: false, banner: false },
  render: (args) => renderAlert(args),
};
