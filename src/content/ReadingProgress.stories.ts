/**
 * ReadingProgress Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Content/ReadingProgress',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A reading progress bar that shows how far the user has scrolled. Features include:
- Tracks scroll progress for the full page or a specific container
- Top or bottom fixed positioning
- Customizable bar color, background, and height
- Optional percentage text display
- Accessible progressbar role with live aria-valuenow updates
        `,
      },
    },
  },
  argTypes: {
    position: { control: 'select', options: ['top', 'bottom'], description: 'Bar position' },
    height: { control: 'text', description: 'Bar height' },
    color: { control: 'color', description: 'Bar color' },
    progress: { control: { type: 'range', min: 0, max: 100, step: 1 }, description: 'Progress value (demo)' },
    showPercentage: { control: 'boolean', description: 'Show percentage text' },
  },
};

export default meta;
type Story = StoryObj;

const renderReadingProgress = (args: Record<string, unknown>) => html`
  <style>
    .rp { position: relative; width: 100%; height: ${args.height}; background: rgba(0,0,0,0.1); border-radius: 2px; }
    .rp-bar { height: 100%; background: ${args.color || '#3b82f6'}; border-radius: 2px; transition: width 0.3s ease-out; width: ${args.progress}%; }
    .rp-pct { position: absolute; right: 1rem; top: calc(${args.height} + 0.5rem); font-size: 0.75rem; font-weight: 500; color: #6b7280; background: white; padding: 0.25rem 0.5rem; border-radius: 0.25rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    .rp-demo { margin-top: 2rem; padding: 2rem; font-family: system-ui, sans-serif; }
    .rp-label { font-size: 0.875rem; color: #6b7280; text-align: center; margin-top: 1rem; }
  </style>
  <div class="rp-demo">
    <p style="font-size: 0.75rem; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem;">
      Position: ${args.position} | Height: ${args.height}
    </p>
    <div class="rp" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${args.progress}" aria-label="Reading progress">
      <div class="rp-bar"></div>
      ${args.showPercentage ? html`<span class="rp-pct">${args.progress}%</span>` : ''}
    </div>
    <p class="rp-label">Scroll progress: ${args.progress}%</p>
  </div>
`;

export const Default: Story = {
  args: { position: 'top', height: '3px', color: '#3b82f6', progress: 45, showPercentage: false },
  render: (args) => renderReadingProgress(args),
};

export const WithPercentage: Story = {
  args: { position: 'top', height: '4px', color: '#8b5cf6', progress: 72, showPercentage: true },
  render: (args) => renderReadingProgress(args),
};

export const ThickBar: Story = {
  args: { position: 'bottom', height: '6px', color: '#10b981', progress: 30, showPercentage: false },
  render: (args) => renderReadingProgress(args),
};
