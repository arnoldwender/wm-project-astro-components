/**
 * TableOfContents Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Content/TableOfContents',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
An auto-generated table of contents with active section highlighting. Features include:
- Active section highlighting via IntersectionObserver
- Configurable heading depth range (h2-h6)
- Sticky positioning option for sidebar use
- Smooth scroll navigation with accessible anchor links
- Nested indentation based on heading depth
        `,
      },
    },
  },
  argTypes: {
    title: { control: 'text', description: 'TOC title' },
    sticky: { control: 'boolean', description: 'Sticky positioning' },
    activeIndex: { control: { type: 'range', min: 0, max: 5, step: 1 }, description: 'Active item (demo)' },
  },
};

export default meta;
type Story = StoryObj;

const headings = [
  { depth: 2, slug: 'introduction', text: 'Introduction' },
  { depth: 2, slug: 'getting-started', text: 'Getting Started' },
  { depth: 3, slug: 'installation', text: 'Installation' },
  { depth: 3, slug: 'configuration', text: 'Configuration' },
  { depth: 2, slug: 'usage', text: 'Usage' },
  { depth: 2, slug: 'faq', text: 'FAQ' },
];

const renderTOC = (args: Record<string, unknown>) => html`
  <style>
    .toc { font-size: 0.875rem; padding: 2rem; font-family: system-ui, sans-serif; max-width: 280px; }
    .toc-title { font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #6b7280; margin: 0 0 1rem; }
    .toc-list { list-style: none; padding: 0; margin: 0; }
    .toc-item { margin-bottom: 0.25rem; }
    .toc-link {
      display: block; padding: 0.375rem 0.75rem; color: #6b7280; text-decoration: none;
      border-left: 2px solid transparent; border-radius: 0 0.25rem 0.25rem 0;
      transition: all 0.15s; line-height: 1.4;
    }
    .toc-link:hover { color: #111; background: rgba(0,0,0,0.05); }
    .toc-link.active { color: #3b82f6; border-left-color: #3b82f6; background: rgba(59,130,246,0.1); font-weight: 500; }
  </style>
  <nav class="toc" aria-label="${args.title}">
    <h2 class="toc-title">${args.title}</h2>
    <ul class="toc-list">
      ${headings.map((h, i) => html`
        <li class="toc-item" style="padding-left: ${(h.depth - 2) * 0.75}rem;">
          <a href="#${h.slug}" class="toc-link ${i === (args.activeIndex as number) ? 'active' : ''}">${h.text}</a>
        </li>
      `)}
    </ul>
  </nav>
`;

export const Default: Story = {
  args: { title: 'Inhaltsverzeichnis', sticky: true, activeIndex: 0 },
  render: (args) => renderTOC(args),
};

export const ActiveSection: Story = {
  args: { title: 'Table of Contents', sticky: false, activeIndex: 2 },
  render: (args) => renderTOC(args),
};

export const DeepNested: Story = {
  args: { title: 'On this page', sticky: true, activeIndex: 4 },
  render: (args) => renderTOC(args),
};
