/**
 * TabPanel Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'UI/TabPanel',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Content panel for use within the Tabs component.

Features:
- ARIA role="tabpanel" linked to its Tab via aria-labelledby
- Hidden by default, shown when corresponding Tab is selected
- Focusable with tabindex="0" for keyboard accessibility
- Slot-based content supports any nested HTML or components
        `,
      },
    },
  },
  argTypes: {
    id: { control: 'text', description: 'Panel identifier (matches Tab id)' },
    visible: { control: 'boolean', description: 'Whether the panel is visible (active tab)' },
  },
};

export default meta;
type Story = StoryObj;

const panelStyles = html`
  <style>
    .tabpanel-demo {
      padding: 1rem; font-family: system-ui, -apple-system, sans-serif;
      color: #1e293b; line-height: 1.6; border: 1px solid #e2e8f0; border-radius: 0.5rem;
      max-width: 480px; background: #fff;
    }
    .tabpanel-demo[hidden] { display: none; }
    .tabpanel-demo h3 { margin: 0 0 0.5rem; font-size: 1.125rem; font-weight: 600; }
    .tabpanel-demo p { margin: 0; color: #64748b; }
    .tabpanel-demo:focus-visible { outline: 2px solid #3b82f6; outline-offset: 2px; }
  </style>
`;

const renderTabPanel = (args: Record<string, unknown>) => html`
  ${panelStyles}
  <div
    class="tabpanel-demo"
    role="tabpanel"
    id="${args.id}-panel"
    aria-labelledby="${args.id}-tab"
    tabindex="0"
    ?hidden=${!args.visible}
  >
    <h3>Panel: ${args.id}</h3>
    <p>This is the content area of the tab panel. It supports any HTML content,
    forms, tables, or nested components. The panel is linked to its corresponding
    tab button via ARIA attributes for screen reader accessibility.</p>
  </div>
`;

export const Default: Story = {
  args: { id: 'overview', visible: true },
  render: (args) => renderTabPanel(args),
};

export const Hidden: Story = {
  args: { id: 'settings', visible: false },
  render: (args) => renderTabPanel(args),
};

export const RichContent: Story = {
  render: () => html`
    ${panelStyles}
    <div class="tabpanel-demo" role="tabpanel" tabindex="0">
      <h3>Project Details</h3>
      <p style="margin-bottom:0.75rem;">Comprehensive overview of the current project status and deliverables.</p>
      <ul style="margin:0; padding-left:1.25rem; color:#64748b;">
        <li>Frontend: Astro + React</li>
        <li>Backend: Node.js API</li>
        <li>Database: PostgreSQL</li>
        <li>Deployment: Netlify</li>
      </ul>
    </div>
  `,
};
