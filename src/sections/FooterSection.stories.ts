/**
 * FooterSection Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Sections/FooterSection',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Website footer with various layouts.
- Six variants: default, simple, minimal, mega, centered, dark
- Logo, company name, tagline, social links
- Newsletter signup form
- Bottom links for legal pages (Impressum, Datenschutz)
        `,
      },
    },
  },
  argTypes: {
    variant: { control: 'select', options: ['default', 'simple', 'minimal', 'mega', 'centered', 'dark'], description: 'Layout variant' },
    companyName: { control: 'text', description: 'Company name' },
  },
};

export default meta;
type Story = StoryObj;

const renderFooter = (args: Record<string, unknown>) => html`
  <footer style="background: ${args.variant === 'dark' ? '#1e293b' : '#fff'}; color: ${args.variant === 'dark' ? '#e2e8f0' : '#1e293b'}; padding: 3rem 2rem 1.5rem; border-top: 1px solid ${args.variant === 'dark' ? '#334155' : '#e2e8f0'};">
    <div style="max-width: 72rem; margin: 0 auto;">
      ${args.variant === 'minimal' ? html`
        <div style="display: flex; align-items: center; justify-content: space-between;">
          <span style="font-weight: 600;">${args.companyName}</span>
          <span style="font-size: 0.875rem; color: ${args.variant === 'dark' ? '#94a3b8' : '#64748b'};">&copy; 2025 ${args.companyName}. All rights reserved.</span>
        </div>
      ` : html`
        <div style="display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 3rem; margin-bottom: 3rem;">
          <div>
            <h3 style="font-weight: 700; font-size: 1.25rem; margin: 0 0 0.5rem;">${args.companyName}</h3>
            <p style="font-size: 0.875rem; color: ${args.variant === 'dark' ? '#94a3b8' : '#64748b'}; margin: 0 0 1.5rem; max-width: 20rem;">Building better tools for modern teams since 2020.</p>
            <div style="display: flex; gap: 0.75rem;">
              ${['Twitter', 'LinkedIn', 'GitHub'].map(p => html`
                <a href="#" style="width: 2rem; height: 2rem; background: ${args.variant === 'dark' ? '#334155' : '#f1f5f9'}; border-radius: 0.5rem; display: flex; align-items: center; justify-content: center; color: ${args.variant === 'dark' ? '#94a3b8' : '#64748b'}; text-decoration: none; font-size: 0.625rem;">${p[0]}</a>
              `)}
            </div>
          </div>
          ${['Product', 'Company', 'Legal'].map(section => html`
            <div>
              <h4 style="font-size: 0.875rem; font-weight: 600; margin: 0 0 1rem; ${args.variant === 'dark' ? 'color: #e2e8f0;' : ''}">${section}</h4>
              <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.5rem;">
                ${(section === 'Product' ? ['Features', 'Pricing', 'Integrations'] : section === 'Company' ? ['About', 'Careers', 'Blog'] : ['Impressum', 'Datenschutz', 'AGB']).map(link => html`
                  <li><a href="#" style="font-size: 0.875rem; color: ${args.variant === 'dark' ? '#94a3b8' : '#64748b'}; text-decoration: none;">${link}</a></li>
                `)}
              </ul>
            </div>
          `)}
        </div>
        <div style="border-top: 1px solid ${args.variant === 'dark' ? '#334155' : '#e2e8f0'}; padding-top: 1.5rem; display: flex; align-items: center; justify-content: space-between;">
          <span style="font-size: 0.875rem; color: ${args.variant === 'dark' ? '#94a3b8' : '#64748b'};">&copy; 2025 ${args.companyName}. All rights reserved.</span>
          <div style="display: flex; gap: 1.5rem;">
            <a href="#" style="font-size: 0.875rem; color: ${args.variant === 'dark' ? '#94a3b8' : '#64748b'}; text-decoration: none;">Impressum</a>
            <a href="#" style="font-size: 0.875rem; color: ${args.variant === 'dark' ? '#94a3b8' : '#64748b'}; text-decoration: none;">Datenschutz</a>
          </div>
        </div>
      `}
    </div>
  </footer>
`;

export const Default: Story = {
  args: { variant: 'default', companyName: 'Acme Corp' },
  render: (args) => renderFooter(args),
};

export const Dark: Story = {
  args: { variant: 'dark', companyName: 'Acme Corp' },
  render: (args) => renderFooter(args),
};

export const Minimal: Story = {
  args: { variant: 'minimal', companyName: 'Acme Corp' },
  render: (args) => renderFooter(args),
};
