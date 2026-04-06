/**
 * BlogSection Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Sections/BlogSection',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Blog posts, news, or articles section.
- Six variants: grid, featured, list, magazine, minimal, cards
- Configurable columns (2-4)
- "View All" link and cards variant with hover lift
        `,
      },
    },
  },
  argTypes: {
    variant: { control: 'select', options: ['grid', 'featured', 'list', 'magazine', 'minimal', 'cards'], description: 'Layout variant' },
    columns: { control: 'select', options: [2, 3, 4], description: 'Grid columns' },
    title: { control: 'text', description: 'Section title' },
  },
};

export default meta;
type Story = StoryObj;

const blogCard = (title: string, cat: string, date: string) => html`
  <div style="display: flex; flex-direction: column;">
    <div style="border-radius: 0.75rem; overflow: hidden; margin-bottom: 1rem; aspect-ratio: 16/9; background: linear-gradient(135deg, #667eea, #764ba2);"></div>
    <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.875rem; margin-bottom: 0.5rem;">
      <span style="font-weight: 500; color: #3b82f6;">${cat}</span>
      <span style="color: #94a3b8;">·</span>
      <span style="color: #64748b;">${date}</span>
    </div>
    <h3 style="font-size: 1.125rem; font-weight: 600; color: #1e293b; margin: 0 0 0.5rem;">${title}</h3>
    <p style="font-size: 0.875rem; color: #64748b; margin: 0;">A brief summary of the article content for preview.</p>
  </div>
`;

const renderBlogSection = (args: Record<string, unknown>) => html`
  <section style="padding: 4rem 2rem;">
    <div style="max-width: 72rem; margin: 0 auto;">
      <div style="display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 3rem;">
        <div>
          <span style="font-size: 0.875rem; font-weight: 600; color: #3b82f6; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 0.5rem;">Blog</span>
          <h2 style="font-size: 2rem; font-weight: 700; color: #1e293b; margin: 0;">${args.title}</h2>
        </div>
        <a href="#" style="color: #3b82f6; font-weight: 500; text-decoration: none; display: flex; align-items: center; gap: 0.5rem;">Alle Artikel &rarr;</a>
      </div>
      <div style="display: grid; grid-template-columns: repeat(${args.columns}, 1fr); gap: 2rem;">
        ${blogCard('Getting Started with Astro', 'Engineering', '10. Feb 2025')}
        ${blogCard('Design System Best Practices', 'Design', '28. Jan 2025')}
        ${blogCard('How We Scaled to 1M Users', 'Product', '15. Jan 2025')}
      </div>
    </div>
  </section>
`;

export const Grid: Story = {
  args: { variant: 'grid', columns: 3, title: 'Latest Articles' },
  render: (args) => renderBlogSection(args),
};

export const TwoColumnCards: Story = {
  args: { variant: 'cards', columns: 2, title: 'Featured Stories' },
  render: (args) => renderBlogSection(args),
};
