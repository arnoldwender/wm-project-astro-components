/**
 * DesignSystemProvider Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Design System/DesignSystemProvider',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The Design System Provider injects design tokens, base styles, and utilities globally. Features include:
- Three-tier token system (primitive, semantic, component)
- Automatic dark mode support with system preference detection
- Responsive and fluid typography
- Comprehensive utility classes
- Modern CSS reset
- Five theme presets: default, minimal, rounded, corporate, playful
- Custom token overrides via props
- Theme toggle API exposed on window.theme
        `,
      },
    },
  },
  argTypes: {
    preset: { control: 'select', options: ['default', 'minimal', 'rounded', 'corporate', 'playful'], description: 'Theme preset' },
    darkMode: { control: 'boolean', description: 'Enable dark mode support' },
    includeReset: { control: 'boolean', description: 'Include CSS reset' },
    includeTypography: { control: 'boolean', description: 'Include typography styles' },
  },
};

export default meta;
type Story = StoryObj;

const presetDescriptions: Record<string, string> = {
  default: 'Standard design tokens with balanced border-radius and shadows.',
  minimal: 'Sharp edges, minimal shadows -- clean and technical aesthetic.',
  rounded: 'Generous border-radius for a soft, approachable feel.',
  corporate: 'Professional blue palette with Inter font stack.',
  playful: 'Purple primary with extra-rounded corners and vibrant energy.',
};

const presetColors: Record<string, { primary: string; radius: string }> = {
  default: { primary: '#3b82f6', radius: '0.375rem' },
  minimal: { primary: '#3b82f6', radius: '2px' },
  rounded: { primary: '#3b82f6', radius: '1rem' },
  corporate: { primary: '#4055e5', radius: '0.375rem' },
  playful: { primary: '#8b5cf6', radius: '1rem' },
};

const renderDesignSystem = (args: Record<string, unknown>) => {
  const preset = args.preset as string;
  const config = presetColors[preset] || presetColors.default;

  return html`
    <style>
      .ds-demo { padding: 2rem; font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; }
      .ds-preset { display: inline-block; padding: 0.25rem 0.75rem; background: ${config.primary}; color: white; border-radius: ${config.radius}; font-size: 0.875rem; font-weight: 600; margin-bottom: 1rem; }
      .ds-desc { color: #6b7280; margin-bottom: 2rem; line-height: 1.6; }
      .ds-section { margin-bottom: 2rem; }
      .ds-section-title { font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #6b7280; margin-bottom: 0.75rem; }
      .ds-colors { display: flex; gap: 0.5rem; flex-wrap: wrap; }
      .ds-color { width: 3rem; height: 3rem; border-radius: ${config.radius}; }
      .ds-radii { display: flex; gap: 1rem; align-items: center; }
      .ds-radius-box { width: 4rem; height: 4rem; background: ${config.primary}; }
      .ds-radius-label { font-size: 0.75rem; color: #6b7280; text-align: center; margin-top: 0.25rem; }
      .ds-buttons { display: flex; gap: 0.75rem; flex-wrap: wrap; }
      .ds-btn { padding: 0.625rem 1.25rem; border: none; border-radius: ${config.radius}; font-size: 0.875rem; font-weight: 500; cursor: pointer; }
      .ds-btn-primary { background: ${config.primary}; color: white; }
      .ds-btn-secondary { background: #f3f4f6; color: #374151; }
      .ds-btn-outline { background: transparent; color: ${config.primary}; border: 1px solid ${config.primary}; }
      .ds-card { padding: 1.5rem; background: #fff; border: 1px solid #e5e7eb; border-radius: ${config.radius}; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
      .ds-card h3 { margin: 0 0 0.5rem; font-size: 1rem; font-weight: 600; }
      .ds-card p { margin: 0; font-size: 0.875rem; color: #6b7280; }
      .ds-features { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 1rem; }
      .ds-feature { padding: 0.25rem 0.5rem; background: #f3f4f6; border-radius: 0.25rem; font-size: 0.75rem; color: #6b7280; }
    </style>
    <div class="ds-demo">
      <span class="ds-preset">Preset: ${preset}</span>
      <p class="ds-desc">${presetDescriptions[preset]}</p>

      <div class="ds-section">
        <div class="ds-section-title">Colors</div>
        <div class="ds-colors">
          <div class="ds-color" style="background: ${config.primary};"></div>
          <div class="ds-color" style="background: #10b981;"></div>
          <div class="ds-color" style="background: #f59e0b;"></div>
          <div class="ds-color" style="background: #ef4444;"></div>
          <div class="ds-color" style="background: #6b7280;"></div>
          <div class="ds-color" style="background: #111827;"></div>
        </div>
      </div>

      <div class="ds-section">
        <div class="ds-section-title">Border Radius</div>
        <div class="ds-radii">
          ${['0', config.radius, '9999px'].map(r => html`
            <div>
              <div class="ds-radius-box" style="border-radius: ${r};"></div>
              <div class="ds-radius-label">${r}</div>
            </div>
          `)}
        </div>
      </div>

      <div class="ds-section">
        <div class="ds-section-title">Buttons</div>
        <div class="ds-buttons">
          <button class="ds-btn ds-btn-primary">Primary</button>
          <button class="ds-btn ds-btn-secondary">Secondary</button>
          <button class="ds-btn ds-btn-outline">Outline</button>
        </div>
      </div>

      <div class="ds-section">
        <div class="ds-section-title">Card Component</div>
        <div class="ds-card">
          <h3>Sample Card</h3>
          <p>This card inherits all design tokens from the active preset.</p>
        </div>
      </div>

      <div class="ds-features">
        ${args.includeReset ? html`<span class="ds-feature">CSS Reset</span>` : ''}
        ${args.includeTypography ? html`<span class="ds-feature">Typography</span>` : ''}
        ${args.darkMode ? html`<span class="ds-feature">Dark Mode</span>` : ''}
        <span class="ds-feature">Design Tokens</span>
        <span class="ds-feature">Utilities</span>
      </div>
    </div>
  `;
};

export const Default: Story = {
  args: { preset: 'default', darkMode: true, includeReset: true, includeTypography: true },
  render: (args) => renderDesignSystem(args),
};

export const Minimal: Story = {
  args: { preset: 'minimal', darkMode: true, includeReset: true, includeTypography: true },
  render: (args) => renderDesignSystem(args),
};

export const Playful: Story = {
  args: { preset: 'playful', darkMode: true, includeReset: true, includeTypography: true },
  render: (args) => renderDesignSystem(args),
};

export const Corporate: Story = {
  args: { preset: 'corporate', darkMode: true, includeReset: true, includeTypography: true },
  render: (args) => renderDesignSystem(args),
};
