/**
 * TwitterCard Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'SEO/TwitterCard',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Twitter Card meta tags for rich social sharing on Twitter/X.

**Features:**
- Four card types: summary, summary_large_image, app, player
- Automatic @-prefix handling for handles
- Player card support with stream URL
- App card support for iOS and Android deep links
- Absolute-URL resolution for images
        `,
      },
    },
  },
  argTypes: {
    title: { control: 'text', description: 'Card title' },
    description: { control: 'text', description: 'Card description' },
    card: { control: 'select', options: ['summary', 'summary_large_image', 'player'], description: 'Card type' },
    site: { control: 'text', description: 'Twitter @handle for the site' },
    creator: { control: 'text', description: 'Twitter @handle for the creator' },
  },
};

export default meta;
type Story = StoryObj;

const renderTwitterCard = (args: Record<string, unknown>) => {
  const tags = [
    `<meta name="twitter:card" content="${args.card || 'summary_large_image'}" />`,
    `<meta name="twitter:title" content="${args.title || 'Acme Corp'}" />`,
    `<meta name="twitter:description" content="${args.description || 'Professional web design.'}" />`,
    args.site ? `<meta name="twitter:site" content="${(args.site as string).startsWith('@') ? args.site : '@' + args.site}" />` : '',
    args.creator ? `<meta name="twitter:creator" content="${(args.creator as string).startsWith('@') ? args.creator : '@' + args.creator}" />` : '',
    `<meta name="twitter:image" content="/images/twitter-card.jpg" />`,
  ].filter(Boolean);

  return html`
    <div style="padding: 2rem; font-family: system-ui, sans-serif;">
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.5rem; padding: 1.5rem; max-width: 48rem;">
        <h3 style="font-size: 1rem; font-weight: 600; margin: 0 0 1rem;">Twitter Card: ${args.card || 'summary_large_image'}</h3>

        <!-- Preview -->
        <div style="border: 1px solid #e2e8f0; border-radius: 0.75rem; overflow: hidden; margin-bottom: 1.5rem; max-width: 32rem;">
          ${args.card === 'summary' ? html`
            <div style="display: flex;">
              <div style="width: 8rem; height: 8rem; background: #334155; flex-shrink: 0;"></div>
              <div style="padding: 0.75rem; flex: 1;">
                <div style="font-size: 0.75rem; color: #9ca3af;">example.com</div>
                <div style="font-weight: 600; margin: 0.25rem 0; font-size: 0.9375rem;">${args.title || 'Acme Corp'}</div>
                <div style="font-size: 0.8125rem; color: #64748b;">${args.description || 'Professional web design.'}</div>
              </div>
            </div>
          ` : html`
            <div style="aspect-ratio: 2/1; background: #334155; display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,0.5); font-size: 0.875rem;">Twitter Card Image</div>
            <div style="padding: 0.75rem; background: white;">
              <div style="font-size: 0.75rem; color: #9ca3af;">example.com</div>
              <div style="font-weight: 600; margin: 0.25rem 0;">${args.title || 'Acme Corp'}</div>
              <div style="font-size: 0.875rem; color: #64748b;">${args.description || 'Professional web design.'}</div>
            </div>
          `}
        </div>

        <pre style="background: #1e293b; color: #e2e8f0; padding: 1rem; border-radius: 0.375rem; font-size: 0.8125rem; overflow-x: auto; margin: 0; line-height: 1.8;">${tags.join('\n')}</pre>
      </div>
    </div>
  `;
};

export const LargeImage: Story = {
  args: { title: 'Acme Corp - Web Design', description: 'Professional web design services.', card: 'summary_large_image', site: '@acmecorp', creator: '@janedoe' },
  render: (args) => renderTwitterCard(args),
};

export const Summary: Story = {
  args: { title: 'Quick Update', description: 'A brief update from our team.', card: 'summary', site: '@acmecorp' },
  render: (args) => renderTwitterCard(args),
};
