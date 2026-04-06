/**
 * HeroLayout Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Layouts/HeroLayout',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Versatile hero section with multiple layout variations for landing pages.

**Features:**
- Five variants: centered, left-aligned, split, stacked, minimal
- Background image/video support with overlay options
- Content alignment and width controls
- Scroll indicator animation
- Responsive typography scaling via clamp()
        `,
      },
    },
  },
  argTypes: {
    variant: { control: 'select', options: ['centered', 'left-aligned', 'split', 'stacked', 'minimal'], description: 'Layout variant' },
    size: { control: 'select', options: ['sm', 'md', 'lg', 'full'], description: 'Hero height' },
    overlay: { control: 'select', options: ['none', 'dark', 'light', 'gradient'], description: 'Overlay type' },
    showScrollIndicator: { control: 'boolean', description: 'Show scroll indicator' },
  },
};

export default meta;
type Story = StoryObj;

const renderHero = (args: Record<string, unknown>) => {
  const sizeMap: Record<string, string> = { sm: '40vh', md: '60vh', lg: '80vh', full: '100vh' };
  const minH = sizeMap[args.size as string] || '80vh';
  const isCentered = args.variant === 'centered' || args.variant === 'stacked';

  return html`
    <section style="position: relative; min-height: ${minH}; display: flex; flex-direction: column; justify-content: center; overflow: hidden;
                    background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%); color: white;">
      <!-- Overlay -->
      ${args.overlay === 'dark' ? html`<div style="position: absolute; inset: 0; background: black; opacity: 0.5;"></div>` : ''}
      ${args.overlay === 'gradient' ? html`<div style="position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.3), transparent);"></div>` : ''}

      <!-- Content -->
      <div style="position: relative; z-index: 10; max-width: 64rem; margin: 0 auto; padding: 0 2rem;
                  ${isCentered ? 'text-align: center;' : 'text-align: left;'}">
        ${args.variant === 'split' ? html`
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center;">
            <div>
              <h1 style="font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 700; line-height: 1.1; margin: 0 0 1.5rem;">Welcome to the Future</h1>
              <p style="font-size: 1.25rem; opacity: 0.9; margin: 0 0 2rem;">Building tomorrow's solutions today with cutting-edge technology.</p>
              <div style="display: flex; gap: 1rem;">
                <button style="padding: 0.875rem 2rem; background: #3b82f6; color: white; border: none; border-radius: 0.5rem; font-weight: 600; cursor: pointer;">Get Started</button>
                <button style="padding: 0.875rem 2rem; background: transparent; color: white; border: 1px solid rgba(255,255,255,0.3); border-radius: 0.5rem; font-weight: 600; cursor: pointer;">Learn More</button>
              </div>
            </div>
            <div style="background: rgba(255,255,255,0.1); border-radius: 1rem; height: 300px; display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,0.5);">Media Slot</div>
          </div>
        ` : html`
          <h1 style="font-size: clamp(2.5rem, 5vw, 5rem); font-weight: 700; line-height: 1.1; margin: 0 0 1.5rem; letter-spacing: -0.02em;">Welcome to the Future</h1>
          <p style="font-size: clamp(1.125rem, 1.5vw, 1.5rem); opacity: 0.9; margin: 0 0 2rem; ${isCentered ? 'max-width: 40rem; margin-left: auto; margin-right: auto;' : ''}">Building tomorrow's solutions today with cutting-edge technology.</p>
          <div style="display: flex; gap: 1rem; ${isCentered ? 'justify-content: center;' : ''}">
            <button style="padding: 0.875rem 2rem; background: #3b82f6; color: white; border: none; border-radius: 0.5rem; font-weight: 600; cursor: pointer;">Get Started</button>
            <button style="padding: 0.875rem 2rem; background: transparent; color: white; border: 1px solid rgba(255,255,255,0.3); border-radius: 0.5rem; font-weight: 600; cursor: pointer;">Learn More</button>
          </div>
        `}
      </div>

      <!-- Scroll Indicator -->
      ${args.showScrollIndicator ? html`
        <div style="position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%); text-align: center; opacity: 0.7;">
          <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em;">Scroll</span>
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="margin-top: 0.5rem;">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
          </svg>
        </div>
      ` : ''}
    </section>
  `;
};

export const Centered: Story = {
  args: { variant: 'centered', size: 'lg', overlay: 'none', showScrollIndicator: true },
  render: (args) => renderHero(args),
};

export const LeftAligned: Story = {
  args: { variant: 'left-aligned', size: 'lg', overlay: 'gradient', showScrollIndicator: false },
  render: (args) => renderHero(args),
};

export const Split: Story = {
  args: { variant: 'split', size: 'lg', overlay: 'none', showScrollIndicator: false },
  render: (args) => renderHero(args),
};

export const Minimal: Story = {
  args: { variant: 'minimal', size: 'sm', overlay: 'none', showScrollIndicator: false },
  render: (args) => renderHero(args),
};
