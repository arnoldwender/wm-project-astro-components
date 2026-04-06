/**
 * Hero Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Sections/Hero',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Full-screen hero with parallax and CTA support.
- Background image with gradient overlay
- Primary and secondary CTA buttons
- Scroll indicator with animated arrow
- Responsive text sizing
        `,
      },
    },
  },
  argTypes: {
    title: { control: 'text', description: 'Hero headline' },
    subtitle: { control: 'text', description: 'Subtitle above headline' },
    description: { control: 'text', description: 'Supporting text' },
    overlay: { control: 'boolean', description: 'Dark overlay on image' },
    scrollIndicator: { control: 'boolean', description: 'Show scroll indicator' },
  },
};

export default meta;
type Story = StoryObj;

const renderHero = (args: Record<string, unknown>) => html`
  <section style="position: relative; min-height: 500px; display: flex; align-items: center; justify-content: center; overflow: hidden;">
    <div style="position: absolute; inset: 0; background: linear-gradient(135deg, #1e3a5f, #2d1b69, #1a1a2e); z-index: 0;"></div>
    ${args.overlay ? html`<div style="position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.4), rgba(0,0,0,0.8)); z-index: 1;"></div>` : ''}
    <div style="position: relative; z-index: 10; text-align: center; color: #fff; padding: 2rem; max-width: 48rem;">
      ${args.subtitle ? html`<span style="font-size: 0.875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.15em; opacity: 0.8; display: block; margin-bottom: 1rem;">${args.subtitle}</span>` : ''}
      <h1 style="font-size: clamp(2rem, 6vw, 3.5rem); font-weight: 800; margin: 0 0 1rem; line-height: 1.1;">${args.title}</h1>
      ${args.description ? html`<p style="font-size: 1.25rem; opacity: 0.85; margin: 0 0 2rem; line-height: 1.5;">${args.description}</p>` : ''}
      <div style="display: flex; align-items: center; justify-content: center; gap: 1rem;">
        <a href="#" style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 1rem 2rem; background: #fff; color: #1e293b; font-weight: 600; border-radius: 0.5rem; text-decoration: none;">Get Started</a>
        <a href="#" style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 1rem 2rem; border: 2px solid rgba(255,255,255,0.5); color: #fff; font-weight: 600; border-radius: 0.5rem; text-decoration: none;">Learn More</a>
      </div>
    </div>
    ${args.scrollIndicator ? html`
      <div style="position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%); z-index: 10; text-align: center; color: rgba(255,255,255,0.6);">
        <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; display: block; margin-bottom: 0.5rem;">Scroll</span>
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
      </div>
    ` : ''}
  </section>
`;

export const Default: Story = {
  args: { title: 'Welcome to Acme Corp', subtitle: 'Digital Solutions', description: 'We build modern, accessible websites that drive results.', overlay: true, scrollIndicator: true },
  render: (args) => renderHero(args),
};

export const Minimal: Story = {
  args: { title: 'Build Something Amazing', subtitle: '', description: '', overlay: true, scrollIndicator: false },
  render: (args) => renderHero(args),
};
