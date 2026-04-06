/**
 * LanguageSwitcher Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Accessibility/LanguageSwitcher',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Accessible i18n language selector with native language labels and screen reader optimization.

**Features:**
- Multiple display modes: dropdown, inline, flags, native select
- Native language names with per-option lang attributes
- RTL language support
- URL-based or localStorage persistence
- Keyboard accessible with visible focus indicators
        `,
      },
    },
  },
  argTypes: {
    mode: { control: 'select', options: ['dropdown', 'inline', 'flags'], description: 'Display mode' },
    currentLanguage: { control: 'text', description: 'Current active language code' },
  },
};

export default meta;
type Story = StoryObj;

const renderLanguageSwitcher = (args: Record<string, unknown>) => {
  const languages = [
    { code: 'de', native: 'Deutsch' },
    { code: 'en', native: 'English' },
    { code: 'es', native: 'Espa\u00F1ol' },
  ];

  if (args.mode === 'inline') {
    return html`
      <div style="padding: 2rem; font-family: system-ui, sans-serif;">
        <nav style="display: flex; gap: 0.25rem;" aria-label="Language">
          ${languages.map((lang) => html`
            <a href="#" lang=${lang.code} style="padding: 0.5rem 0.75rem; font-size: 0.875rem; text-decoration: none; border-radius: 0.375rem;
               ${lang.code === args.currentLanguage ? 'background: #3b82f6; color: white; font-weight: 600;' : 'color: #64748b;'}">${lang.native}</a>
          `)}
        </nav>
      </div>
    `;
  }

  return html`
    <div style="padding: 2rem; font-family: system-ui, sans-serif;">
      <div style="position: relative; display: inline-block;">
        <button style="display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 0.75rem; border: 1px solid #e2e8f0; border-radius: 0.375rem; background: white; cursor: pointer; font-size: 0.875rem;">
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke-width="2"/><path stroke-width="2" d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
          ${languages.find((l) => l.code === args.currentLanguage)?.native || 'Deutsch'}
          <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
        </button>
        <div style="position: absolute; top: 100%; left: 0; margin-top: 0.25rem; background: white; border: 1px solid #e2e8f0; border-radius: 0.375rem; box-shadow: 0 10px 15px rgba(0,0,0,0.1); overflow: hidden; min-width: 10rem;">
          ${languages.map((lang) => html`
            <a href="#" lang=${lang.code} style="display: block; padding: 0.5rem 0.75rem; font-size: 0.875rem; text-decoration: none;
               ${lang.code === args.currentLanguage ? 'background: #eff6ff; color: #3b82f6; font-weight: 500;' : 'color: #374151;'}">${lang.native}</a>
          `)}
        </div>
      </div>
    </div>
  `;
};

export const Dropdown: Story = {
  args: { mode: 'dropdown', currentLanguage: 'de' },
  render: (args) => renderLanguageSwitcher(args),
};

export const Inline: Story = {
  args: { mode: 'inline', currentLanguage: 'en' },
  render: (args) => renderLanguageSwitcher(args),
};
