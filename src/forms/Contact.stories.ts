/**
 * Contact Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Forms/Contact',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A premium GDPR/DSGVO-compliant contact section with multiple layout variants. Features include:
- Honeypot spam protection (no external services)
- Dynamic field schema (text, email, tel, textarea, select, file)
- Four layout variants: default, split, minimal, card
- Contact info sidebar with social links
- Explicit consent checkbox with privacy policy link
- Success/error feedback states
- Fully accessible (WCAG 2.1 AA, BFSG compliant)
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'split', 'minimal', 'card'],
      description: 'Layout variant',
    },
    title: { control: 'text', description: 'Section title' },
    subtitle: { control: 'text', description: 'Subtitle text' },
    description: { control: 'text', description: 'Description text' },
    submitText: { control: 'text', description: 'Submit button text' },
    consentRequired: { control: 'boolean', description: 'Require consent checkbox' },
  },
};

export default meta;
type Story = StoryObj;

const renderContact = (args: Record<string, unknown>) => html`
  <section class="contact-section" style="padding: 2rem; font-family: system-ui, sans-serif;">
    <div style="max-width: 640px; margin: 0 auto;">
      ${args.variant !== 'minimal' ? html`
        <div style="text-align: center; margin-bottom: 2rem;">
          ${args.subtitle ? html`<p style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.05em; color: #3b82f6; font-weight: 600; margin-bottom: 0.5rem;">${args.subtitle}</p>` : ''}
          <h2 style="font-size: 2rem; font-weight: 700; margin-bottom: 0.5rem;">${args.title}</h2>
          ${args.description ? html`<p style="color: #6b7280; font-size: 1.125rem;">${args.description}</p>` : ''}
        </div>
      ` : ''}

      <form style="display: flex; flex-direction: column; gap: 1.5rem;" onsubmit="event.preventDefault();">
        <div style="display: none;" aria-hidden="true">
          <input type="text" name="website" tabindex="-1" autocomplete="off" />
        </div>

        <div>
          <label style="display: block; font-size: 0.875rem; font-weight: 500; margin-bottom: 0.5rem;">
            Name <span style="color: #ef4444;">*</span>
          </label>
          <input type="text" placeholder="Your name" required
            style="width: 100%; padding: 0.75rem 1rem; border: 1px solid #e5e7eb; border-radius: 0.5rem; font-size: 1rem; box-sizing: border-box;" />
        </div>

        <div>
          <label style="display: block; font-size: 0.875rem; font-weight: 500; margin-bottom: 0.5rem;">
            Email <span style="color: #ef4444;">*</span>
          </label>
          <input type="email" placeholder="your@email.com" required
            style="width: 100%; padding: 0.75rem 1rem; border: 1px solid #e5e7eb; border-radius: 0.5rem; font-size: 1rem; box-sizing: border-box;" />
        </div>

        <div>
          <label style="display: block; font-size: 0.875rem; font-weight: 500; margin-bottom: 0.5rem;">
            Message <span style="color: #ef4444;">*</span>
          </label>
          <textarea rows="5" placeholder="Your message..." required
            style="width: 100%; padding: 0.75rem 1rem; border: 1px solid #e5e7eb; border-radius: 0.5rem; font-size: 1rem; resize: vertical; box-sizing: border-box;"></textarea>
        </div>

        ${args.consentRequired ? html`
          <div style="display: flex; align-items: flex-start; gap: 0.75rem;">
            <input type="checkbox" required style="margin-top: 0.25rem; width: 1rem; height: 1rem;" />
            <label style="font-size: 0.875rem; color: #6b7280;">
              I agree to the processing of my data according to the
              <a href="/datenschutz" style="color: #3b82f6; text-decoration: none;">Privacy Policy</a>.
            </label>
          </div>
        ` : ''}

        <button type="submit"
          style="width: 100%; padding: 1rem; background: #3b82f6; color: white; font-weight: 600; border: none; border-radius: 0.5rem; font-size: 1rem; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
          ${args.submitText}
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </form>
    </div>
  </section>
`;

export const Default: Story = {
  args: {
    variant: 'default',
    title: 'Get in touch',
    subtitle: 'Contact us',
    description: 'Have a question or want to work together? Send us a message.',
    submitText: 'Send Message',
    consentRequired: true,
  },
  render: (args) => renderContact(args),
};

export const Minimal: Story = {
  args: {
    variant: 'minimal',
    title: 'Get in touch',
    submitText: 'Send Message',
    consentRequired: true,
  },
  render: (args) => renderContact(args),
};

export const Card: Story = {
  args: {
    variant: 'card',
    title: 'Quick Contact',
    description: 'Drop us a line and we will get back to you.',
    submitText: 'Submit',
    consentRequired: true,
  },
  render: (args) => renderContact(args),
};
