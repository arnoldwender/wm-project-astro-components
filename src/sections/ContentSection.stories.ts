/**
 * ContentSection Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Sections/ContentSection',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Flexible content blocks for text, media, and mixed layouts.
- Seven variants: prose, media-left, media-right, media-top, media-bottom, full-bleed, split
- Configurable media aspect ratio and rounded corners
- Vertical alignment control
        `,
      },
    },
  },
  argTypes: {
    variant: { control: 'select', options: ['prose', 'media-left', 'media-right', 'media-top', 'media-bottom', 'full-bleed', 'split'], description: 'Layout variant' },
    title: { control: 'text', description: 'Section title' },
  },
};

export default meta;
type Story = StoryObj;

const renderContent = (args: Record<string, unknown>) => html`
  <section style="padding: 4rem 2rem;">
    <div style="max-width: ${args.variant === 'prose' ? '48rem' : '72rem'}; margin: 0 auto;">
      ${args.variant === 'prose' ? html`
        <div>
          <span style="font-size: 0.875rem; font-weight: 600; color: #3b82f6; text-transform: uppercase; display: block; margin-bottom: 0.5rem;">About Us</span>
          <h2 style="font-size: 2rem; font-weight: 700; color: #1e293b; margin: 0 0 1.5rem;">${args.title}</h2>
          <div style="font-size: 1.125rem; line-height: 1.8; color: #475569;">
            <p style="margin: 0 0 1.5rem;">Founded in 2020, Acme Corp set out to simplify project management for small teams. What started as a side project has grown into a platform used by thousands of teams worldwide.</p>
            <p style="margin: 0 0 1.5rem;">Our mission is simple: make collaboration effortless. We believe that great tools should get out of your way and let you focus on what matters most -- building amazing products.</p>
            <p style="margin: 0;">Today, we serve over 10,000 teams across 50 countries, and we're just getting started.</p>
          </div>
        </div>
      ` : html`
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; ${args.variant === 'media-left' ? '' : ''}">
          ${args.variant === 'media-left' ? html`
            <div style="aspect-ratio: 4/3; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 1rem;"></div>
          ` : ''}
          <div>
            <span style="font-size: 0.875rem; font-weight: 600; color: #3b82f6; text-transform: uppercase; display: block; margin-bottom: 0.5rem;">About Us</span>
            <h2 style="font-size: 2rem; font-weight: 700; color: #1e293b; margin: 0 0 1rem;">${args.title}</h2>
            <p style="font-size: 1.125rem; line-height: 1.7; color: #475569;">Founded in 2020, Acme Corp set out to simplify project management for small teams. Our platform helps thousands of teams collaborate more effectively every day.</p>
          </div>
          ${args.variant === 'media-right' ? html`
            <div style="aspect-ratio: 4/3; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 1rem;"></div>
          ` : ''}
        </div>
      `}
    </div>
  </section>
`;

export const Prose: Story = {
  args: { variant: 'prose', title: 'Our Story' },
  render: (args) => renderContent(args),
};

export const MediaRight: Story = {
  args: { variant: 'media-right', title: 'Our Story' },
  render: (args) => renderContent(args),
};

export const MediaLeft: Story = {
  args: { variant: 'media-left', title: 'Our Mission' },
  render: (args) => renderContent(args),
};
