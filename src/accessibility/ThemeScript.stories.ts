/**
 * ThemeScript Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Accessibility/ThemeScript',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Inline script to prevent Flash of Unstyled Content (FOUC) on theme change.
Place in <head> BEFORE any stylesheets.

**Features:**
- Reads from localStorage first, falls back to prefers-color-scheme
- Applies 'dark' class on <html> before any stylesheet loads
- Stores resolved theme back to localStorage
- Zero dependencies, no external requests
        `,
      },
    },
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <div style="padding: 2rem; font-family: system-ui, sans-serif;">
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.5rem; padding: 1.5rem; max-width: 40rem;">
        <h3 style="font-size: 1rem; font-weight: 600; margin: 0 0 1rem;">ThemeScript (Head Script)</h3>
        <p style="font-size: 0.875rem; color: #64748b; margin: 0 0 1rem;">This component renders an inline script in the <code>&lt;head&gt;</code>. It has no visual output -- it runs before the page renders to prevent FOUC.</p>
        <pre style="background: #1e293b; color: #e2e8f0; padding: 1rem; border-radius: 0.375rem; font-size: 0.8125rem; overflow-x: auto; margin: 0;">&lt;head&gt;
  &lt;ThemeScript /&gt;
  &lt;link rel="stylesheet" href="/styles/global.css" /&gt;
&lt;/head&gt;</pre>
      </div>
    </div>
  `,
};

export const HowItWorks: Story = {
  render: () => html`
    <div style="padding: 2rem; font-family: system-ui, sans-serif;">
      <div style="max-width: 40rem;">
        <h3 style="font-size: 1rem; font-weight: 600; margin: 0 0 1rem;">How ThemeScript Works</h3>
        <ol style="font-size: 0.875rem; color: #374151; line-height: 1.8; padding-left: 1.5rem;">
          <li>Checks <code>localStorage.getItem('theme')</code></li>
          <li>Falls back to <code>prefers-color-scheme: dark</code></li>
          <li>Adds <code>.dark</code> class to <code>&lt;html&gt;</code> if dark mode</li>
          <li>Saves resolved theme to localStorage</li>
        </ol>
      </div>
    </div>
  `,
};
