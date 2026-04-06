/**
 * NavbarSection Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Sections/NavbarSection',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Main navigation header component. Features:
- Six layout variants (default, centered, minimal, transparent, sticky, mega)
- Responsive mobile hamburger menu with animated toggle
- Dropdown sub-navigation with hover and click support
- Transparent-to-solid scroll effect for hero overlays
        `,
      },
    },
  },
  argTypes: {
    variant: { control: 'select', options: ['default', 'centered', 'minimal', 'transparent', 'sticky', 'mega'], description: 'Layout variant' },
    logoAlt: { control: 'text', description: 'Logo text' },
  },
};

export default meta;
type Story = StoryObj;

const renderNavbar = (args: Record<string, unknown>) => html`
  <header style="background:#fff;border-bottom:1px solid #e2e8f0;font-family:system-ui,sans-serif;">
    <div style="max-width:80rem;margin:0 auto;padding:0 2rem;display:flex;align-items:center;justify-content:space-between;height:5rem;gap:2rem;">
      <a href="/" style="font-size:1.25rem;font-weight:700;color:#1e293b;text-decoration:none;">${args.logoAlt}</a>
      <nav style="display:flex;align-items:center;gap:0.25rem;">
        ${['Home', 'Services', 'About', 'Contact'].map(item => html`
          <a href="#" style="padding:0.5rem 0.875rem;font-size:0.875rem;font-weight:500;color:#64748b;text-decoration:none;border-radius:0.375rem;">${item}</a>
        `)}
      </nav>
      <div style="display:flex;align-items:center;gap:0.75rem;">
        <a href="#" style="padding:0.5rem 1rem;font-size:0.875rem;font-weight:500;color:#1e293b;text-decoration:none;">Log In</a>
        <a href="#" style="padding:0.5rem 1rem;font-size:0.875rem;font-weight:600;color:#fff;background:#3b82f6;border-radius:0.5rem;text-decoration:none;">Sign Up</a>
      </div>
    </div>
  </header>
`;

export const Default: Story = {
  args: { logoAlt: 'Acme Corp', variant: 'default' },
  render: (args) => renderNavbar(args),
};

export const WithDropdown: Story = {
  args: { logoAlt: 'Acme Corp', variant: 'default' },
  render: () => html`
    <header style="background:#fff;border-bottom:1px solid #e2e8f0;font-family:system-ui,sans-serif;">
      <div style="max-width:80rem;margin:0 auto;padding:0 2rem;display:flex;align-items:center;justify-content:space-between;height:5rem;">
        <a href="/" style="font-size:1.25rem;font-weight:700;color:#1e293b;text-decoration:none;">Acme Corp</a>
        <nav style="display:flex;align-items:center;gap:0.25rem;">
          <a href="#" style="padding:0.5rem 0.875rem;font-size:0.875rem;font-weight:500;color:#64748b;text-decoration:none;">Home</a>
          <div style="position:relative;">
            <button style="display:flex;align-items:center;gap:0.25rem;padding:0.5rem 0.875rem;font-size:0.875rem;font-weight:500;color:#64748b;background:none;border:none;cursor:pointer;">Services <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg></button>
            <div style="position:absolute;top:100%;left:0;min-width:12rem;padding-top:0.5rem;">
              <div style="background:#fff;border:1px solid #e2e8f0;border-radius:0.5rem;box-shadow:0 10px 30px rgba(0,0,0,0.1);padding:0.5rem;">
                <a href="#" style="display:block;padding:0.625rem 1rem;font-size:0.875rem;color:#64748b;text-decoration:none;border-radius:0.375rem;">Consulting</a>
                <a href="#" style="display:block;padding:0.625rem 1rem;font-size:0.875rem;color:#64748b;text-decoration:none;border-radius:0.375rem;">Development</a>
                <a href="#" style="display:block;padding:0.625rem 1rem;font-size:0.875rem;color:#64748b;text-decoration:none;border-radius:0.375rem;">Design</a>
              </div>
            </div>
          </div>
          <a href="#" style="padding:0.5rem 0.875rem;font-size:0.875rem;font-weight:500;color:#64748b;text-decoration:none;">About</a>
        </nav>
        <a href="#" style="padding:0.5rem 1rem;font-size:0.875rem;font-weight:600;color:#fff;background:#3b82f6;border-radius:0.5rem;text-decoration:none;">Get Started</a>
      </div>
    </header>
  `,
};
