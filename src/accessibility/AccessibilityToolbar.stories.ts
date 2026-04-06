/**
 * AccessibilityToolbar Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Accessibility/AccessibilityToolbar',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Comprehensive WCAG 2.2 accessibility widget with multiple tools.

**Features:**
- Font size adjustment, contrast modes, dyslexia-friendly font
- Letter/line spacing, reading guide, link highlighting
- Focus indicator enhancement, pause animations, big cursor
- Text-to-speech, keyboard shortcuts
- All preferences persisted in localStorage
- Left or right positioning with dark/light theme
        `,
      },
    },
  },
  argTypes: {
    position: { control: 'select', options: ['left', 'right'], description: 'Toolbar position' },
    theme: { control: 'select', options: ['light', 'dark'], description: 'Toolbar theme' },
  },
};

export default meta;
type Story = StoryObj;

const renderToolbar = (args: Record<string, unknown>) => {
  const isRight = args.position === 'right';
  const isDark = args.theme === 'dark';

  return html`
    <div style="position: relative; min-height: 500px; padding: 2rem; font-family: system-ui, sans-serif;">
      <p style="color: #374151;">Sample page content. The accessibility toolbar appears on the ${isRight ? 'right' : 'left'} side.</p>

      <!-- Toolbar Toggle Button -->
      <button style="position: fixed; ${isRight ? 'right: 1rem;' : 'left: 1rem;'} top: 50%; transform: translateY(-50%); z-index: 100;
                     width: 3rem; height: 3rem; border-radius: 50%; border: none; cursor: pointer;
                     ${isDark ? 'background: #1e293b; color: white;' : 'background: white; color: #1e293b; box-shadow: 0 4px 6px rgba(0,0,0,0.1);'}
                     display: flex; align-items: center; justify-content: center;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-14h2v2h-2zm0 4h2v6h-2z"/>
        </svg>
      </button>

      <!-- Toolbar Panel -->
      <div style="position: fixed; ${isRight ? 'right: 4.5rem;' : 'left: 4.5rem;'} top: 20%; z-index: 99; width: 280px;
                  ${isDark ? 'background: #1e293b; color: white;' : 'background: white; color: #1e293b;'}
                  border-radius: 0.75rem; box-shadow: 0 20px 25px rgba(0,0,0,0.15); padding: 1.5rem;">
        <h3 style="font-weight: 700; font-size: 1rem; margin: 0 0 1rem;">Barrierefreiheit</h3>

        <!-- Font Size -->
        <div style="margin-bottom: 1rem;">
          <label style="font-size: 0.875rem; font-weight: 500;">Schriftgr\u00F6\u00DFe</label>
          <div style="display: flex; align-items: center; gap: 0.5rem; margin-top: 0.5rem;">
            <button style="width: 2rem; height: 2rem; border-radius: 0.375rem; border: 1px solid ${isDark ? '#475569' : '#e2e8f0'}; background: transparent; color: inherit; cursor: pointer;">A-</button>
            <span style="flex: 1; text-align: center; font-size: 0.875rem;">100%</span>
            <button style="width: 2rem; height: 2rem; border-radius: 0.375rem; border: 1px solid ${isDark ? '#475569' : '#e2e8f0'}; background: transparent; color: inherit; cursor: pointer;">A+</button>
          </div>
        </div>

        <!-- Contrast -->
        <div style="margin-bottom: 1rem;">
          <label style="font-size: 0.875rem; font-weight: 500;">Kontrast</label>
          <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem;">
            ${['Normal', 'Hoch', 'Invertiert'].map((c) => html`
              <button style="flex: 1; padding: 0.375rem; font-size: 0.75rem; border-radius: 0.375rem; border: 1px solid ${isDark ? '#475569' : '#e2e8f0'}; background: transparent; color: inherit; cursor: pointer;">${c}</button>
            `)}
          </div>
        </div>

        <!-- Toggles -->
        ${['Legasthenie-Schrift', 'Links hervorheben', 'Animationen stoppen'].map((label) => html`
          <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.5rem 0; border-top: 1px solid ${isDark ? '#334155' : '#f1f5f9'};">
            <span style="font-size: 0.875rem;">${label}</span>
            <div style="width: 2.5rem; height: 1.25rem; border-radius: 9999px; background: #94a3b8; position: relative; cursor: pointer;">
              <div style="width: 1rem; height: 1rem; border-radius: 50%; background: white; position: absolute; top: 0.125rem; left: 0.125rem;"></div>
            </div>
          </div>
        `)}

        <button style="width: 100%; padding: 0.5rem; margin-top: 1rem; font-size: 0.875rem; border-radius: 0.375rem; border: 1px solid ${isDark ? '#475569' : '#e2e8f0'}; background: transparent; color: inherit; cursor: pointer;">Zur\u00FCcksetzen</button>
      </div>
    </div>
  `;
};

export const RightLight: Story = {
  args: { position: 'right', theme: 'light' },
  render: (args) => renderToolbar(args),
};

export const LeftDark: Story = {
  args: { position: 'left', theme: 'dark' },
  render: (args) => renderToolbar(args),
};
