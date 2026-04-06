/**
 * SidebarLayout Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
const meta: Meta = {
  title: 'Sections/SidebarLayout',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Layout with sidebar and main content. Left/right positioning, collapsible with mobile overlay, sticky sidebar/header options, configurable width and gap.' } } },
  argTypes: { sidebarPosition: { control: 'select', options: ['left', 'right'] } },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <div style="display:grid;grid-template-columns:280px 1fr;min-height:400px;font-family:system-ui,sans-serif;border:1px solid #e2e8f0;border-radius:0.75rem;overflow:hidden;">
      <aside style="background:#fff;border-right:1px solid #e2e8f0;padding:1.5rem;">
        <h3 style="font-size:0.875rem;font-weight:600;text-transform:uppercase;color:#94a3b8;margin:0 0 1rem;">Navigation</h3>
        ${['Dashboard', 'Projects', 'Team', 'Settings'].map(item => html`
          <a href="#" style="display:block;padding:0.625rem 0.75rem;font-size:0.875rem;color:#64748b;text-decoration:none;border-radius:0.375rem;margin-bottom:0.25rem;">${item}</a>
        `)}
      </aside>
      <main style="padding:2rem;background:#f8fafc;">
        <h1 style="font-size:1.5rem;font-weight:700;margin:0 0 1rem;">Dashboard</h1>
        <p style="color:#64748b;">Main content area. Sidebar collapses on mobile with an overlay toggle.</p>
      </main>
    </div>
  `,
};

export const RightSidebar: Story = {
  render: () => html`
    <div style="display:grid;grid-template-columns:1fr 280px;min-height:400px;font-family:system-ui,sans-serif;border:1px solid #e2e8f0;border-radius:0.75rem;overflow:hidden;">
      <main style="padding:2rem;">
        <h1 style="font-size:1.5rem;font-weight:700;margin:0 0 1rem;">Blog Post Title</h1>
        <p style="color:#64748b;line-height:1.7;">Article content goes here. The sidebar on the right can contain filters, related articles, or table of contents.</p>
      </main>
      <aside style="background:#f8fafc;border-left:1px solid #e2e8f0;padding:1.5rem;">
        <h3 style="font-size:0.875rem;font-weight:600;margin:0 0 1rem;">Related Articles</h3>
        ${['Getting Started', 'Advanced Tips', 'FAQ'].map(item => html`
          <a href="#" style="display:block;padding:0.5rem 0;font-size:0.875rem;color:#3b82f6;text-decoration:none;">${item}</a>
        `)}
      </aside>
    </div>
  `,
};
