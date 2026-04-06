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
- Three variants: default (background image), minimal (clean centered, no bg), tool (dark gradient + breadcrumb + stats)
- Background image with gradient overlay (default variant)
- Primary and secondary CTA buttons
- Scroll indicator with animated arrow
- Breadcrumb navigation and stats grid (tool variant)
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
    variant: { control: 'select', options: ['default', 'minimal', 'tool'], description: 'Layout variant' },
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
  args: { title: 'Welcome to Acme Corp', subtitle: 'Digital Solutions', description: 'We build modern, accessible websites that drive results.', overlay: true, scrollIndicator: true, variant: 'default' },
  render: (args) => renderHero(args),
};

export const NoOverlay: Story = {
  args: { title: 'Build Something Amazing', subtitle: '', description: '', overlay: false, scrollIndicator: false, variant: 'default' },
  render: (args) => renderHero(args),
  name: 'Default — No Overlay',
};

/* ---- Minimal variant stories ---- */

export const Minimal: Story = {
  args: { variant: 'minimal' },
  render: () => html`
    <section style="min-height: 60vh; display: flex; align-items: center; justify-content: center; font-family: system-ui, sans-serif; background: #fff;">
      <div style="text-align: center; max-width: 40rem; padding: 2rem;">
        <p style="font-size: 0.875rem; font-weight: 600; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 1rem;">Simple Platform</p>
        <h1 style="font-size: clamp(2rem, 5vw, 3rem); font-weight: 800; color: #1e293b; margin: 0 0 1rem; line-height: 1.15;">Build Something Amazing</h1>
        <p style="font-size: 1.125rem; color: #64748b; margin: 0 0 2rem; line-height: 1.5;">Ship faster with a platform that gets out of your way.</p>
        <div style="display: flex; align-items: center; justify-content: center; gap: 1rem;">
          <a href="#" style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.875rem 2rem; background: #3b82f6; color: #fff; font-weight: 600; border-radius: 0.5rem; text-decoration: none;">
            Start Free
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
          </a>
          <a href="#" style="padding: 0.875rem 2rem; border: 2px solid #e2e8f0; color: #475569; font-weight: 600; border-radius: 0.5rem; text-decoration: none;">Learn More</a>
        </div>
      </div>
    </section>
  `,
  name: 'Minimal',
};

/* ---- Tool variant stories ---- */

export const Tool: Story = {
  args: { variant: 'tool' },
  render: () => html`
    <section style="position: relative; min-height: 500px; display: flex; align-items: center; overflow: hidden; font-family: system-ui, sans-serif;">
      <!-- Dark gradient background -->
      <div style="position: absolute; inset: 0; background: linear-gradient(135deg, #111827, #1f2937, #111827); z-index: 0;">
        <div style="position: absolute; inset: 0; opacity: 0.05; background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0); background-size: 40px 40px;"></div>
      </div>

      <div style="position: relative; z-index: 10; color: #fff; padding: 3rem 2rem; max-width: 72rem; margin: 0 auto; width: 100%;">
        <!-- Breadcrumb -->
        <nav style="margin-bottom: 2rem;" aria-label="Breadcrumb">
          <ol style="display: flex; align-items: center; gap: 0.5rem; list-style: none; padding: 0; margin: 0; font-size: 0.875rem; color: #9ca3af;">
            <li><a href="#" style="color: #9ca3af; text-decoration: none;">Home</a></li>
            <li style="display: flex; align-items: center; gap: 0.5rem;">
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="color: #4b5563;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              <a href="#" style="color: #9ca3af; text-decoration: none;">Developer</a>
            </li>
            <li style="display: flex; align-items: center; gap: 0.5rem;">
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="color: #4b5563;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              <span style="color: #d1d5db;">API Documentation</span>
            </li>
          </ol>
        </nav>

        <div style="max-width: 48rem;">
          <p style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 600; color: #60a5fa; margin: 0 0 0.75rem;">Developer Tools</p>
          <h1 style="font-size: clamp(2rem, 5vw, 3rem); font-weight: 800; margin: 0 0 1rem; line-height: 1.1;">API Documentation</h1>
          <p style="font-size: 1.125rem; color: #9ca3af; margin: 0 0 2rem; line-height: 1.5;">Everything you need to integrate, deploy, and scale with our REST API.</p>

          <div style="display: flex; gap: 1rem; margin-bottom: 2.5rem;">
            <a href="#" style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.875rem 2rem; background: #2563eb; color: #fff; font-weight: 600; border-radius: 0.5rem; text-decoration: none;">
              Get API Key
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
            </a>
            <a href="#" style="padding: 0.875rem 2rem; border: 2px solid #374151; color: #d1d5db; font-weight: 600; border-radius: 0.5rem; text-decoration: none;">View Examples</a>
          </div>

          <!-- Stats grid -->
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; padding-top: 2rem; border-top: 1px solid rgba(75,85,99,0.5);">
            ${[
              { value: '99.9%', label: 'Uptime' },
              { value: '<50ms', label: 'Avg Latency' },
              { value: '10M+', label: 'Requests/day' },
              { value: '150+', label: 'Endpoints' },
            ].map(stat => html`
              <div>
                <div style="font-size: 1.5rem; font-weight: 700; color: #fff;">${stat.value}</div>
                <div style="font-size: 0.875rem; color: #6b7280; margin-top: 0.25rem;">${stat.label}</div>
              </div>
            `)}
          </div>
        </div>

        <!-- Scroll indicator -->
        <div style="position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%); text-align: center; color: #4b5563;">
          <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; display: block; margin-bottom: 0.5rem;">Scroll</span>
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
        </div>
      </div>
    </section>
  `,
  name: 'Tool',
};
