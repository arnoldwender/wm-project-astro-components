/**
 * DocsLayout Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Layouts/DocsLayout',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Documentation layout with sidebar navigation, table of contents, and prev/next navigation.

**Features:**
- Sidebar navigation with collapsible sections
- Table of contents with active-state tracking
- Breadcrumb navigation
- Code block and table styling
- Previous/Next page navigation
- Edit on GitHub link
        `,
      },
    },
  },
  argTypes: {
    title: { control: 'text', description: 'Page title' },
    section: { control: 'text', description: 'Documentation section' },
    showToc: { control: 'boolean', description: 'Show table of contents sidebar' },
    showBreadcrumb: { control: 'boolean', description: 'Show breadcrumb navigation' },
  },
};

export default meta;
type Story = StoryObj;

const renderDocsLayout = (args: Record<string, unknown>) => html`
  <div style="display: flex; min-height: 500px; font-family: system-ui, sans-serif; background: white;">
    <!-- Sidebar -->
    <aside style="width: 16rem; border-right: 1px solid #e2e8f0; padding: 1.5rem 1rem; flex-shrink: 0;">
      <div style="font-weight: 600; font-size: 0.875rem; margin-bottom: 0.5rem; color: #1e293b;">Getting Started</div>
      ${['Introduction', 'Installation', 'Quick Start'].map((item, i) => html`
        <a href="#" style="display: block; padding: 0.375rem 0; font-size: 0.875rem; text-decoration: none; ${i === 0 ? 'color: #3b82f6; font-weight: 500;' : 'color: #64748b;'}">${item}</a>
      `)}
      <div style="font-weight: 600; font-size: 0.875rem; margin-top: 1.5rem; margin-bottom: 0.5rem; color: #1e293b;">Components</div>
      ${['Buttons', 'Forms', 'Modals', 'Tables'].map((item) => html`
        <a href="#" style="display: block; padding: 0.375rem 0; font-size: 0.875rem; text-decoration: none; color: #64748b;">${item}</a>
      `)}
    </aside>

    <!-- Main Content -->
    <main style="flex: 1; padding: 2rem; max-width: 48rem;">
      ${args.showBreadcrumb ? html`
        <nav style="margin-bottom: 1.5rem; font-size: 0.875rem; color: #9ca3af;">
          Docs ${args.section ? html`<span> / ${args.section}</span>` : ''} / <span style="color: #1e293b; font-weight: 500;">${args.title}</span>
        </nav>
      ` : ''}
      <h1 style="font-size: 2rem; font-weight: 700; margin: 0 0 1rem;">${args.title}</h1>
      <p style="font-size: 1.125rem; color: #64748b; margin-bottom: 2rem;">Learn how to get started with the component library.</p>
      <h2 style="font-size: 1.5rem; font-weight: 600; margin: 2rem 0 1rem;">Installation</h2>
      <pre style="background: #1e293b; color: #e2e8f0; padding: 1rem; border-radius: 0.5rem; font-size: 0.875rem; overflow-x: auto;">npm install @wendermedia/components</pre>
      <h2 style="font-size: 1.5rem; font-weight: 600; margin: 2rem 0 1rem;">Usage</h2>
      <p style="color: #374151; line-height: 1.7;">Import the component and use it in your Astro pages. All components support TypeScript props.</p>

      <!-- Prev/Next -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 3rem; padding-top: 2rem; border-top: 1px solid #e2e8f0;">
        <a href="#" style="padding: 1rem; border: 1px solid #e2e8f0; border-radius: 0.5rem; text-decoration: none;">
          <span style="font-size: 0.875rem; color: #9ca3af;">Previous</span><br/>
          <span style="font-weight: 500; color: #1e293b;">&larr; Installation</span>
        </a>
        <a href="#" style="padding: 1rem; border: 1px solid #e2e8f0; border-radius: 0.5rem; text-decoration: none; text-align: right;">
          <span style="font-size: 0.875rem; color: #9ca3af;">Next</span><br/>
          <span style="font-weight: 500; color: #1e293b;">Quick Start &rarr;</span>
        </a>
      </div>
    </main>

    <!-- TOC -->
    ${args.showToc ? html`
      <aside style="width: 14rem; padding: 2rem 1rem; flex-shrink: 0;">
        <h2 style="font-size: 0.875rem; font-weight: 600; margin-bottom: 1rem;">On this page</h2>
        ${['Installation', 'Usage', 'Props', 'Examples'].map((item, i) => html`
          <a href="#" style="display: block; padding: 0.25rem 0; padding-left: 0.75rem; border-left: 2px solid ${i === 0 ? '#3b82f6' : 'transparent'}; font-size: 0.875rem; text-decoration: none; color: ${i === 0 ? '#1e293b' : '#9ca3af'};">${item}</a>
        `)}
      </aside>
    ` : ''}
  </div>
`;

export const Default: Story = {
  args: { title: 'Getting Started', section: 'Introduction', showToc: true, showBreadcrumb: true },
  render: (args) => renderDocsLayout(args),
};

export const WithoutToc: Story = {
  args: { title: 'API Reference', section: 'Components', showToc: false, showBreadcrumb: true },
  render: (args) => renderDocsLayout(args),
};
