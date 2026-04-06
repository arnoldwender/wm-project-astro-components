/**
 * Drawer Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'UI/Drawer',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Slide-in panel for navigation, filters, or secondary content.

Features:
- Four slide directions (left, right, top, bottom)
- Focus trap and keyboard navigation
- Backdrop with blur effect
- Four size options (sm, md, lg, full)
- Touch swipe to close
- Configurable close behavior (backdrop, escape)
- Reduced motion support
        `,
      },
    },
  },
  argTypes: {
    title: { control: 'text', description: 'Drawer header title' },
    position: {
      control: { type: 'select' },
      options: ['left', 'right', 'top', 'bottom'],
      description: 'Slide-in direction',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'full'],
      description: 'Width (horizontal) or height (vertical) of the drawer',
    },
    showCloseButton: { control: 'boolean', description: 'Show close button in header' },
  },
};

export default meta;
type Story = StoryObj;

const drawerStyles = html`
  <style>
    .drawer-demo {
      position: relative; width: 100%; height: 400px; background: #f8fafc;
      border: 1px solid #e2e8f0; border-radius: 0.5rem; overflow: hidden;
      font-family: system-ui, -apple-system, sans-serif;
    }
    .drawer-backdrop {
      position: absolute; inset: 0; background: rgba(0,0,0,0.5); backdrop-filter: blur(4px);
    }
    .drawer-panel {
      position: absolute; background: #fff; display: flex; flex-direction: column;
      box-shadow: -10px 0 40px rgba(0,0,0,0.15);
    }
    .drawer-panel.right { right: 0; top: 0; height: 100%; }
    .drawer-panel.left { left: 0; top: 0; height: 100%; }
    .drawer-panel.top { top: 0; left: 0; width: 100%; }
    .drawer-panel.bottom { bottom: 0; left: 0; width: 100%; }
    .drawer-panel.w-sm { width: 16rem; }
    .drawer-panel.w-md { width: 20rem; }
    .drawer-panel.w-lg { width: 24rem; }
    .drawer-panel.h-sm { height: 12rem; }
    .drawer-panel.h-md { height: 16rem; }
    .drawer-header {
      display: flex; align-items: center; justify-content: space-between;
      padding: 0.75rem 1rem; border-bottom: 1px solid #e2e8f0;
    }
    .drawer-header h2 { font-size: 1.125rem; font-weight: 600; color: #1e293b; margin: 0; }
    .drawer-close {
      padding: 0.5rem; margin-right: -0.5rem; background: none; border: none; cursor: pointer;
      color: #94a3b8; border-radius: 0.5rem; display: flex;
    }
    .drawer-close:hover { color: #1e293b; background: #f1f5f9; }
    .drawer-close svg { width: 1.25rem; height: 1.25rem; }
    .drawer-body { flex: 1; overflow-y: auto; padding: 1rem; color: #64748b; }
    .drawer-nav { list-style: none; padding: 0; margin: 0; }
    .drawer-nav li {
      padding: 0.75rem 1rem; border-radius: 0.5rem; cursor: pointer;
      transition: background 0.15s; color: #1e293b;
    }
    .drawer-nav li:hover { background: #f1f5f9; }
    .drawer-nav li.active { background: #eff6ff; color: #3b82f6; font-weight: 500; }
  </style>
`;

const renderDrawer = (args: Record<string, unknown>) => {
  const position = (args.position as string) || 'right';
  const size = (args.size as string) || 'md';
  const isHorizontal = position === 'left' || position === 'right';
  const sizeClass = isHorizontal ? `w-${size}` : `h-${size}`;

  return html`
    ${drawerStyles}
    <div class="drawer-demo">
      <div class="drawer-backdrop"></div>
      <div class="drawer-panel ${position} ${sizeClass}" role="dialog" aria-modal="true">
        <div class="drawer-header">
          <h2>${args.title || 'Menu'}</h2>
          ${args.showCloseButton ? html`
            <button class="drawer-close" aria-label="Close drawer">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          ` : ''}
        </div>
        <div class="drawer-body">
          <ul class="drawer-nav">
            <li class="active">Home</li>
            <li>Products</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  `;
};

export const Default: Story = {
  args: { title: 'Navigation', position: 'right', size: 'md', showCloseButton: true },
  render: (args) => renderDrawer(args),
};

export const LeftPosition: Story = {
  args: { title: 'Menu', position: 'left', size: 'md', showCloseButton: true },
  render: (args) => renderDrawer(args),
};

export const LargeSize: Story = {
  args: { title: 'Filters', position: 'right', size: 'lg', showCloseButton: true },
  render: (args) => renderDrawer(args),
};

export const BottomSheet: Story = {
  args: { title: 'Options', position: 'bottom', size: 'md', showCloseButton: true },
  render: (args) => renderDrawer(args),
};
