/**
 * Newsletter Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Forms/Newsletter',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A premium GDPR/DSGVO-compliant newsletter signup component. Features include:
- Double opt-in support
- Explicit consent checkbox (never pre-checked)
- Five layout variants: inline, stacked, card, minimal, banner
- Honeypot spam protection
- Lead magnet / incentive display support
- Loading and success/error states
- Accessible with live validation
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['card', 'inline', 'stacked', 'minimal', 'banner'],
      description: 'Layout variant',
    },
    title: { control: 'text', description: 'Headline text' },
    description: { control: 'text', description: 'Description text' },
    buttonText: { control: 'text', description: 'Submit button text' },
    showNameField: { control: 'boolean', description: 'Show name input' },
    showConsent: { control: 'boolean', description: 'Show consent checkbox' },
  },
};

export default meta;
type Story = StoryObj;

const renderNewsletter = (args: Record<string, unknown>) => html`
  <div style="font-family: system-ui, sans-serif; padding: 2rem;">
    <div style="max-width: 480px; margin: 0 auto; background: #fff; border-radius: 1rem; box-shadow: 0 10px 40px rgba(0,0,0,0.1); padding: 2rem;">
      <div style="text-align: center; margin-bottom: 1.5rem;">
        <h2 style="font-size: 1.5rem; font-weight: 700; margin: 0 0 0.5rem;">${args.title}</h2>
        <p style="color: #6b7280; margin: 0;">${args.description}</p>
      </div>

      <form style="display: flex; flex-direction: column; gap: 1rem;" onsubmit="event.preventDefault();">
        <div style="display: none;" aria-hidden="true">
          <input type="text" name="website" tabindex="-1" autocomplete="off" />
        </div>

        ${args.showNameField ? html`
          <input type="text" placeholder="Your name"
            style="width: 100%; padding: 0.75rem 1rem; border: 1px solid #e5e7eb; border-radius: 0.5rem; font-size: 1rem; box-sizing: border-box; background: #f9fafb;" />
        ` : ''}

        <input type="email" placeholder="Enter your email" required
          style="width: 100%; padding: 0.75rem 1rem; border: 1px solid #e5e7eb; border-radius: 0.5rem; font-size: 1rem; box-sizing: border-box; background: #f9fafb;" />

        ${args.showConsent ? html`
          <div style="display: flex; align-items: flex-start; gap: 0.75rem;">
            <input type="checkbox" required style="margin-top: 0.25rem; width: 1rem; height: 1rem;" />
            <label style="font-size: 0.875rem; color: #6b7280;">
              I agree to receive newsletters and accept the
              <a href="/datenschutz" style="color: #3b82f6; text-decoration: none;">Privacy Policy</a>.
              <span style="display: block; margin-top: 0.25rem; font-size: 0.75rem; opacity: 0.7;">You can unsubscribe at any time.</span>
            </label>
          </div>
        ` : ''}

        <button type="submit"
          style="width: 100%; padding: 0.75rem; background: #3b82f6; color: white; font-weight: 600; border: none; border-radius: 0.5rem; font-size: 1rem; cursor: pointer;">
          ${args.buttonText}
        </button>
      </form>
    </div>
  </div>
`;

export const Card: Story = {
  args: {
    variant: 'card',
    title: 'Stay updated',
    description: 'Get the latest news and updates delivered to your inbox.',
    buttonText: 'Subscribe',
    showNameField: false,
    showConsent: true,
  },
  render: (args) => renderNewsletter(args),
};

export const WithNameField: Story = {
  args: {
    variant: 'card',
    title: 'Join our newsletter',
    description: 'Weekly tips on web design and SEO.',
    buttonText: 'Join now',
    showNameField: true,
    showConsent: true,
  },
  render: (args) => renderNewsletter(args),
};

export const Minimal: Story = {
  args: {
    variant: 'minimal',
    title: 'Subscribe',
    description: 'No spam, unsubscribe anytime.',
    buttonText: 'Subscribe',
    showNameField: false,
    showConsent: false,
  },
  render: (args) => renderNewsletter(args),
};
