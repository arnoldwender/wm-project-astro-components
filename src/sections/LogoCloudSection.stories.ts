/**
 * LogoCloudSection Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Sections/LogoCloudSection',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Display partner/client logos with various layouts.
- Five variants: grid, marquee, centered, featured, minimal
- Configurable columns (3-6) for the grid variant
- Infinite marquee animation with speed control
- Grayscale filter with hover color reveal
        `,
      },
    },
  },
  argTypes: {
    variant: { control: 'select', options: ['grid', 'marquee', 'centered', 'featured', 'minimal'], description: 'Layout variant' },
    columns: { control: 'select', options: [3, 4, 5, 6], description: 'Grid columns' },
    title: { control: 'text', description: 'Section title' },
    grayscale: { control: 'boolean', description: 'Grayscale logos' },
  },
};

export default meta;
type Story = StoryObj;

const logos = ['Acme Corp', 'WidgetCo', 'Globex Inc', 'Initech', 'Umbrella Corp', 'Stark Industries'];

const logoPlaceholder = (name: string, grayscale: boolean) => html`
  <div style="display: flex; align-items: center; justify-content: center; padding: 1.5rem; ${grayscale ? 'filter: grayscale(100%); opacity: 0.5; transition: filter 0.2s, opacity 0.2s;' : 'opacity: 0.7;'}">
    <div style="display: flex; align-items: center; gap: 0.5rem;">
      <div style="width: 2rem; height: 2rem; background: #e2e8f0; border-radius: 0.5rem;"></div>
      <span style="font-size: 0.875rem; font-weight: 600; color: #64748b;">${name}</span>
    </div>
  </div>
`;

const renderLogoCloud = (args: Record<string, unknown>) => html`
  <section style="padding: ${args.variant === 'minimal' ? '2rem' : '4rem'} 2rem; background: ${args.background === 'dark' ? '#1e293b' : args.background === 'subtle' ? '#f8fafc' : '#fff'};">
    <div style="max-width: 72rem; margin: 0 auto;">
      ${args.title ? html`
        <div style="text-align: center; margin-bottom: 2rem;">
          <h2 style="font-size: ${args.variant === 'minimal' ? '1rem' : '1.5rem'}; font-weight: ${args.variant === 'minimal' ? '500' : '700'}; color: ${args.background === 'dark' ? '#e2e8f0' : args.variant === 'minimal' ? '#94a3b8' : '#1e293b'}; margin: 0;">${args.title}</h2>
          ${args.description ? html`<p style="color: ${args.background === 'dark' ? '#94a3b8' : '#64748b'}; margin: 0.5rem 0 0;">${args.description}</p>` : ''}
        </div>
      ` : ''}
      ${args.variant === 'marquee' ? html`
        <div style="overflow: hidden; position: relative;">
          <div style="display: flex; gap: 2rem; animation: marquee 20s linear infinite;">
            ${[...logos, ...logos].map(name => logoPlaceholder(name, args.grayscale as boolean))}
          </div>
        </div>
        <style>
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        </style>
      ` : html`
        <div style="display: grid; grid-template-columns: repeat(${args.columns}, 1fr); gap: 1rem; align-items: center;">
          ${logos.map(name => logoPlaceholder(name, args.grayscale as boolean))}
        </div>
      `}
    </div>
  </section>
`;

export const Grid: Story = {
  args: { variant: 'grid', columns: 6, title: 'Trusted by Leading Companies', description: 'Over 500 teams use Acme Platform every day.', grayscale: true, background: 'transparent' },
  render: (args) => renderLogoCloud(args),
};

export const Marquee: Story = {
  args: { variant: 'marquee', columns: 5, title: 'Our Partners', grayscale: true, background: 'subtle' },
  render: (args) => renderLogoCloud(args),
};

export const Minimal: Story = {
  args: { variant: 'minimal', columns: 6, title: 'Trusted by 500+ companies', grayscale: true, background: 'transparent' },
  render: (args) => renderLogoCloud(args),
};
