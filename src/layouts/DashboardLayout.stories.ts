/**
 * DashboardLayout Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Layouts/DashboardLayout',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Admin/Dashboard interface layout with sidebar navigation.

**Features:**
- Collapsible sidebar with localStorage persistence
- Top navigation bar with breadcrumb support
- Mobile menu with overlay
- Dark mode optimized
- Notification area and user menu slots
        `,
      },
    },
  },
  argTypes: {
    sidebarWidth: { control: 'select', options: ['narrow', 'default', 'wide'], description: 'Sidebar width' },
    sidebarCollapsed: { control: 'boolean', description: 'Start with sidebar collapsed' },
    showHeader: { control: 'boolean', description: 'Show top header bar' },
  },
};

export default meta;
type Story = StoryObj;

const renderDashboard = (args: Record<string, unknown>) => {
  const sidebarW = args.sidebarCollapsed ? '4rem' : (args.sidebarWidth === 'wide' ? '20rem' : '16rem');
  const navItems = ['Dashboard', 'Analytics', 'Users', 'Products', 'Settings'];

  return html`
    <div style="display: flex; min-height: 400px; background: #f8fafc; font-family: system-ui, sans-serif;">
      <!-- Sidebar -->
      <aside style="width: ${sidebarW}; background: white; border-right: 1px solid #e2e8f0; transition: width 300ms; flex-shrink: 0;">
        <div style="padding: 1rem; border-bottom: 1px solid #e2e8f0; font-weight: 700; font-size: 0.875rem;">
          ${args.sidebarCollapsed ? html`<span>A</span>` : html`<span>Admin Panel</span>`}
        </div>
        <nav style="padding: 0.5rem;">
          ${navItems.map((item, i) => html`
            <a href="#" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.625rem 1rem; margin: 0.125rem 0;
                               border-radius: 0.375rem; font-size: 0.875rem; text-decoration: none; transition: all 150ms;
                               ${i === 0 ? 'color: #3b82f6; background: rgba(59,130,246,0.1);' : 'color: #64748b;'}">
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
              ${!args.sidebarCollapsed ? html`<span>${item}</span>` : ''}
            </a>
          `)}
        </nav>
      </aside>

      <!-- Main -->
      <div style="flex: 1;">
        ${args.showHeader ? html`
          <header style="height: 3.5rem; background: rgba(255,255,255,0.8); backdrop-filter: blur(12px); border-bottom: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; padding: 0 1.5rem;">
            <span style="font-size: 0.875rem; color: #64748b;">Dashboard / Overview</span>
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <div style="width: 2rem; height: 2rem; border-radius: 50%; background: #d1d5db;"></div>
            </div>
          </header>
        ` : ''}
        <main style="padding: 1.5rem;">
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem;">
            ${[1, 2, 3].map(() => html`
              <div style="background: white; border-radius: 0.5rem; padding: 1.5rem; border: 1px solid #e2e8f0;">
                <div style="font-size: 0.875rem; color: #64748b; margin-bottom: 0.5rem;">Metric</div>
                <div style="font-size: 1.5rem; font-weight: 700; color: #1e293b;">1,234</div>
              </div>
            `)}
          </div>
        </main>
      </div>
    </div>
  `;
};

export const Default: Story = {
  args: { sidebarWidth: 'default', sidebarCollapsed: false, showHeader: true },
  render: (args) => renderDashboard(args),
};

export const CollapsedSidebar: Story = {
  args: { sidebarWidth: 'default', sidebarCollapsed: true, showHeader: true },
  render: (args) => renderDashboard(args),
};

export const WideSidebar: Story = {
  args: { sidebarWidth: 'wide', sidebarCollapsed: false, showHeader: true },
  render: (args) => renderDashboard(args),
};
