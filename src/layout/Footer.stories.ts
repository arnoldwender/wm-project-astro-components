/**
 * Footer Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Layout/Footer',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Responsive multi-column site footer with brand section, quick links,
contact details, social media icons, and copyright line.

**Features:**
- Three-column grid: brand/description, quick links, contact info
- Built-in SVG icons for 7 social platforms
- Logo image or text-based branding
- Auto-generated copyright year
- Fully responsive: collapses to single column on small screens
        `,
      },
    },
  },
  argTypes: {
    siteName: { control: 'text', description: 'Site name for branding' },
    description: { control: 'text', description: 'Brand description text' },
    contactEmail: { control: 'text', description: 'Contact email address' },
    contactPhone: { control: 'text', description: 'Contact phone number' },
    address: { control: 'text', description: 'Physical address' },
    copyright: { control: 'text', description: 'Custom copyright text' },
  },
};

export default meta;
type Story = StoryObj;

const renderFooter = (args: Record<string, unknown>) => {
  const links = (args.links as Array<{ label: string; href: string }>) || [];
  const socialLinks = (args.socialLinks as Array<{ name: string; href: string }>) || [];

  return html`
    <footer style="border-top: 1px solid #374151; background: #111; color: white;">
      <div style="max-width: 1200px; margin: 0 auto; padding: 3rem 1rem 2rem;">
        <!-- Main Footer Content -->
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 3rem; margin-bottom: 3rem;">
          <!-- Brand -->
          <div>
            <span style="font-size: 1.25rem; font-weight: 700;">${args.siteName || 'Site Name'}</span>
            ${args.description
              ? html`<p style="font-size: 0.875rem; line-height: 1.6; opacity: 0.7; max-width: 20rem; margin-top: 1rem;">${args.description}</p>`
              : ''}
          </div>

          <!-- Links -->
          ${links.length > 0
            ? html`
                <div>
                  <h4 style="font-weight: 600; margin-bottom: 1rem; font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.05em;">Links</h4>
                  <ul style="list-style: none; padding: 0; margin: 0;">
                    ${links.map(
                      (link) => html`
                        <li style="margin-bottom: 0.75rem;">
                          <a href=${link.href} style="color: white; opacity: 0.7; text-decoration: none; font-size: 0.875rem;">${link.label}</a>
                        </li>
                      `
                    )}
                  </ul>
                </div>
              `
            : ''}

          <!-- Contact -->
          ${(args.contactEmail || args.contactPhone || args.address)
            ? html`
                <div>
                  <h4 style="font-weight: 600; margin-bottom: 1rem; font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.05em;">Contact</h4>
                  <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.875rem;">
                    ${args.contactEmail ? html`<li style="margin-bottom: 0.75rem; opacity: 0.7;">${args.contactEmail}</li>` : ''}
                    ${args.contactPhone ? html`<li style="margin-bottom: 0.75rem; opacity: 0.7;">${args.contactPhone}</li>` : ''}
                    ${args.address ? html`<li style="opacity: 0.7;">${args.address}</li>` : ''}
                  </ul>
                </div>
              `
            : ''}
        </div>

        <!-- Social Links -->
        ${socialLinks.length > 0
          ? html`
              <div style="display: flex; justify-content: center; gap: 1.5rem; padding-top: 2rem; border-top: 1px solid #374151; margin-bottom: 2rem;">
                ${socialLinks.map(
                  (social) => html`
                    <a href=${social.href} target="_blank" rel="noopener noreferrer" aria-label=${social.name}
                       style="color: white; opacity: 0.7; text-decoration: none; font-size: 0.875rem;">
                      ${social.name}
                    </a>
                  `
                )}
              </div>
            `
          : ''}

        <!-- Copyright -->
        <div style="text-align: center; opacity: 0.7; font-size: 0.75rem;">
          <p>${args.copyright || `\u00A9 ${new Date().getFullYear()} ${args.siteName || 'Site Name'}. All rights reserved.`}</p>
        </div>
      </div>
    </footer>
  `;
};

export const Default: Story = {
  args: {
    siteName: 'Acme Corp',
    description: 'Building innovative solutions since 2010.',
    links: [
      { label: 'Impressum', href: '/impressum' },
      { label: 'Datenschutz', href: '/datenschutz' },
      { label: 'Blog', href: '/blog' },
    ],
    socialLinks: [
      { name: 'Instagram', href: 'https://instagram.com/acme' },
      { name: 'LinkedIn', href: 'https://linkedin.com/company/acme' },
    ],
    contactEmail: 'info@example.com',
    contactPhone: '+49 345 12345',
    address: '123 Main St, 06108 Halle (Saale)',
  },
  render: (args) => renderFooter(args),
};

export const Minimal: Story = {
  args: {
    siteName: 'WenderMedia',
    copyright: '2020-2026 WenderMedia. All rights reserved.',
  },
  render: (args) => renderFooter(args),
};

export const WithSocialLinks: Story = {
  args: {
    siteName: 'Creative Studio',
    description: 'Design and development agency.',
    socialLinks: [
      { name: 'Instagram', href: '#' },
      { name: 'Facebook', href: '#' },
      { name: 'LinkedIn', href: '#' },
      { name: 'GitHub', href: '#' },
    ],
  },
  render: (args) => renderFooter(args),
};
