/**
 * SearchResultsSection Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Sections/SearchResultsSection',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Search results display. Six variants (default, cards, compact, grid, table, minimal). Built-in pagination, sort/filter controls, loading and empty states.' } } },
  argTypes: { variant: { control: 'select', options: ['default', 'cards', 'compact', 'grid', 'table', 'minimal'] } },
};
export default meta;
type Story = StoryObj;

const results = [
  { title: 'Getting Started with Projects', url: '/docs/projects', desc: 'Learn how to create and manage projects effectively in your workspace.', cat: 'Documentation' },
  { title: 'Advanced Workflow Automation', url: '/docs/workflows', desc: 'Automate repetitive tasks and streamline your team processes.', cat: 'Guides' },
  { title: 'API Reference: Endpoints', url: '/docs/api', desc: 'Complete reference for all REST API endpoints and parameters.', cat: 'API' },
];

export const Default: Story = {
  render: () => html`
    <section style="padding:2rem;font-family:system-ui,sans-serif;max-width:48rem;margin:0 auto;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;">
        <span style="font-size:0.875rem;color:#64748b;">42 results for <strong>"project management"</strong></span>
        <select style="padding:0.375rem 0.75rem;border:1px solid #e2e8f0;border-radius:0.375rem;font-size:0.875rem;color:#64748b;"><option>Relevance</option><option>Date</option></select>
      </div>
      ${results.map(r => html`
        <article style="padding:1.5rem 0;border-bottom:1px solid #f1f5f9;">
          <a href="${r.url}" style="font-size:1.125rem;font-weight:600;color:#3b82f6;text-decoration:none;">${r.title}</a>
          <p style="font-size:0.875rem;color:#64748b;margin:0.5rem 0;">${r.desc}</p>
          <span style="font-size:0.75rem;color:#94a3b8;">${r.cat}</span>
        </article>
      `)}
    </section>
  `,
};

export const EmptyState: Story = {
  render: () => html`
    <section style="padding:4rem 2rem;font-family:system-ui,sans-serif;text-align:center;max-width:32rem;margin:0 auto;">
      <svg fill="none" stroke="#94a3b8" viewBox="0 0 24 24" width="64" height="64" style="margin-bottom:1.5rem;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
      <h2 style="font-size:1.5rem;font-weight:700;margin:0 0 0.5rem;">No results found</h2>
      <p style="color:#64748b;margin:0 0 1.5rem;">Try searching for something else or adjust your filters.</p>
      <div style="display:flex;gap:0.5rem;justify-content:center;flex-wrap:wrap;">
        ${['Getting started', 'Pricing', 'API'].map(s => html`<a href="#" style="padding:0.375rem 0.75rem;background:#f1f5f9;border-radius:0.375rem;font-size:0.875rem;color:#64748b;text-decoration:none;">${s}</a>`)}
      </div>
    </section>
  `,
};
