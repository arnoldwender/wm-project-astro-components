/**
 * Sidebar Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Navigation/Sidebar',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Collapsible sidebar navigation with nested items, icons, and badges.

**Features:**
- Collapsible width with toggle button and localStorage persistence
- Built-in icon set (home, box, cog, users, chart, document, folder, mail, calendar)
- Color-coded badges (default, primary, success, warning, error)
- Nested expandable groups with active-path detection
- Optional logo slot and footer slot
        `,
      },
    },
  },
  argTypes: {
    collapsed: { control: 'boolean', description: 'Collapsed state' },
    collapsible: { control: 'boolean', description: 'Allow collapsing' },
  },
};

export default meta;
type Story = StoryObj;

const iconSvg = html`<svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>`;

const renderSidebar = (args: Record<string, unknown>) => {
  const isCollapsed = args.collapsed;
  const width = isCollapsed ? '4rem' : '16rem';

  const items = [
    { label: 'Dashboard', active: true, badge: '' },
    { label: 'Products', active: false, badge: '12' },
    { label: 'Users', active: false, badge: '3' },
    { label: 'Analytics', active: false, badge: '' },
    { label: 'Settings', active: false, badge: '' },
  ];

  return html`
    <div style="display: flex; height: 500px; font-family: system-ui, sans-serif;">
      <aside style="width: ${width}; background: white; border-right: 1px solid #e2e8f0; transition: width 300ms; display: flex; flex-direction: column; flex-shrink: 0;">
        <!-- Logo -->
        <div style="padding: 1rem; border-bottom: 1px solid #e2e8f0; display: flex; align-items: center; gap: 0.75rem;">
          <div style="width: 2rem; height: 2rem; background: #3b82f6; border-radius: 0.375rem; flex-shrink: 0;"></div>
          ${!isCollapsed ? html`<span style="font-weight: 700; font-size: 0.875rem;">Acme Corp</span>` : ''}
        </div>

        <!-- Nav -->
        <nav style="flex: 1; padding: 0.5rem; overflow-y: auto;">
          ${items.map((item) => html`
            <a href="#" style="display: flex; align-items: center; gap: 0.75rem; padding: ${isCollapsed ? '0.75rem' : '0.625rem 1rem'}; margin: 0.125rem ${isCollapsed ? '0.25rem' : '0.5rem'};
                               border-radius: 0.375rem; text-decoration: none; font-size: 0.875rem; font-weight: 500; transition: all 150ms;
                               ${isCollapsed ? 'justify-content: center;' : ''}
                               ${item.active ? 'color: #3b82f6; background: rgba(59,130,246,0.1);' : 'color: #64748b;'}">
              ${iconSvg}
              ${!isCollapsed ? html`<span style="flex: 1;">${item.label}</span>` : ''}
              ${!isCollapsed && item.badge ? html`<span style="padding: 0.125rem 0.5rem; font-size: 0.75rem; border-radius: 9999px; background: #fef3c7; color: #92400e;">${item.badge}</span>` : ''}
            </a>
          `)}
        </nav>

        <!-- Footer -->
        <div style="padding: 1rem; border-top: 1px solid #e2e8f0; display: flex; align-items: center; gap: 0.75rem;">
          <div style="width: 2rem; height: 2rem; background: #d1d5db; border-radius: 50%; flex-shrink: 0;"></div>
          ${!isCollapsed ? html`<span style="font-size: 0.875rem; color: #374151;">John Doe</span>` : ''}
        </div>
      </aside>

      <!-- Page Content -->
      <div style="flex: 1; padding: 2rem; background: #f8fafc;">
        <h2 style="font-size: 1.25rem; font-weight: 700; margin: 0;">Page Content</h2>
      </div>
    </div>
  `;
};

export const Expanded: Story = {
  args: { collapsed: false, collapsible: true },
  render: (args) => renderSidebar(args),
};

export const Collapsed: Story = {
  args: { collapsed: true, collapsible: true },
  render: (args) => renderSidebar(args),
};
