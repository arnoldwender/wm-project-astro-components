/**
 * ServiceCard Stories - WenderMedia Astro Components
 *
 * Individual service card: icon → title → description → feature checklist.
 * Ported from wm-source-site molecules/ServiceCard.astro.
 *
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

// ---------------------------------------------------------------------------
// Inline SVG helpers for story use
// ---------------------------------------------------------------------------

const searchSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`;

const webSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/></svg>`;

const shieldSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`;

// ---------------------------------------------------------------------------
// Meta
// ---------------------------------------------------------------------------

const meta: Meta = {
  title: 'Sections/ServiceCard',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Individual service card for use inside \`ServiceSection\` or any custom layout.

- Accepts emoji, plain text, or raw SVG as the \`icon\` prop
- Optional \`features\` checklist with staggered hover transitions
- Lift-on-hover microinteraction (respects \`prefers-reduced-motion\`)
- Fully token-based styles (no hardcoded values)
- WCAG 2.2 AA: \`:focus-visible\` ring, semantic \`<article>\`/\`<ul>\`, \`aria-label\`
        `,
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Card heading',
    },
    description: {
      control: 'text',
      description: 'Short description of the service',
    },
    icon: {
      control: 'text',
      description: 'Emoji, plain text, or raw SVG string',
    },
    features: {
      control: 'object',
      description: 'Array of feature/benefit strings',
    },
  },
};

export default meta;
type Story = StoryObj;

// ---------------------------------------------------------------------------
// Render helper — re-implements visuals in lit-html (no .astro import)
// ---------------------------------------------------------------------------

interface ServiceCardArgs {
  title?: string;
  description?: string;
  icon?: string;
  features?: string[];
}

const checkSvg = `<svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style="width:1rem;height:1rem;flex-shrink:0;color:var(--color-brand-primary,#0ea5e9)"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd"/></svg>`;

const renderCard = (args: ServiceCardArgs) => {
  const features = args.features ?? [];
  const isRawSvg = (args.icon ?? '').trim().startsWith('<');

  return html`
    <style>
      .sc-demo-wrapper {
        padding: 2rem;
        max-width: 22rem;
        font-family: system-ui, -apple-system, sans-serif;
      }
      .sc {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 2rem;
        background: #fff;
        border-radius: 1rem;
        border: 1px solid #e2e8f0;
        box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);
        transition: transform 300ms ease, box-shadow 300ms ease, border-color 300ms ease;
      }
      .sc:hover {
        transform: translateY(-0.5rem);
        box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
        border-color: #0ea5e9;
      }
      .sc:hover .sc-icon {
        background: #0ea5e9;
        color: #fff;
        transform: scale(1.1) rotate(3deg);
      }
      .sc-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 3rem;
        height: 3rem;
        flex-shrink: 0;
        border-radius: 0.75rem;
        background: #f1f5f9;
        color: #0ea5e9;
        transition: background 300ms ease, color 300ms ease, transform 300ms ease;
      }
      .sc-icon svg { width: 1.5rem; height: 1.5rem; }
      .sc-icon span { font-size: 1.25rem; line-height: 1; }
      .sc-title {
        margin: 0;
        font-size: 1.25rem;
        font-weight: 600;
        line-height: 1.25;
        color: #1e293b;
      }
      .sc:hover .sc-title { color: #0284c7; }
      .sc-description {
        margin: 0;
        font-size: 1rem;
        line-height: 1.625;
        color: #475569;
      }
      .sc-features {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
      }
      .sc-feature-item {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.875rem;
        color: #475569;
      }
      @media (prefers-reduced-motion: reduce) {
        .sc, .sc-icon { transition: none; }
        .sc:hover { transform: none; }
        .sc:hover .sc-icon { transform: none; }
      }
    </style>
    <div class="sc-demo-wrapper">
      <article class="sc">
        ${args.icon
          ? html`<div class="sc-icon" aria-hidden="true">
              ${isRawSvg
                ? html`<span .innerHTML=${args.icon}></span>`
                : html`<span>${args.icon}</span>`}
            </div>`
          : ''}
        <h3 class="sc-title">${args.title ?? 'Service Title'}</h3>
        <p class="sc-description">${args.description ?? 'Service description goes here.'}</p>
        ${features.length > 0
          ? html`<ul class="sc-features" role="list" aria-label="Funktionen">
              ${features.map(
                (f) => html`
                  <li class="sc-feature-item">
                    <span .innerHTML=${checkSvg}></span>
                    <span>${f}</span>
                  </li>`,
              )}
            </ul>`
          : ''}
      </article>
    </div>
  `;
};

// ---------------------------------------------------------------------------
// Stories
// ---------------------------------------------------------------------------

export const Default: Story = {
  args: {
    icon: '🔍',
    title: 'SEO Optimierung',
    description: 'Mehr organischer Traffic durch datengetriebene Suchmaschinenoptimierung und technische Analyse.',
    features: ['Keyword-Analyse', 'On-Page SEO', 'Technisches SEO', 'Backlink-Aufbau'],
  },
  render: (args) => renderCard(args as ServiceCardArgs),
};

export const WithSvgIcon: Story = {
  name: 'With SVG Icon',
  args: {
    icon: webSvg,
    title: 'Webdesign & Entwicklung',
    description: 'Individuelle Websites, die konvertieren — responsiv, schnell und barrierefrei nach BFSG.',
    features: ['Responsive Design', 'Core Web Vitals', 'BFSG-konform', 'Astro / React'],
  },
  render: (args) => renderCard(args as ServiceCardArgs),
};

export const SecurityService: Story = {
  name: 'Security Service',
  args: {
    icon: shieldSvg,
    title: 'Website Sicherheit',
    description: 'Proaktiver Schutz Ihrer Website vor Angriffsvektoren und Datenschutzverletzungen.',
    features: ['DSGVO-Audit', 'CSP-Konfiguration', 'Vulnerability Scanning'],
  },
  render: (args) => renderCard(args as ServiceCardArgs),
};

export const SearchIcon: Story = {
  name: 'Search Icon (SVG)',
  args: {
    icon: searchSvg,
    title: 'Content Marketing',
    description: 'Strategischer Content, der Ihre Zielgruppe erreicht und nachhaltig konvertiert.',
    features: ['Content-Strategie', 'SEO-Texte', 'Redaktionsplanung'],
  },
  render: (args) => renderCard(args as ServiceCardArgs),
};

export const NoFeatures: Story = {
  name: 'No Features List',
  args: {
    icon: '📊',
    title: 'Analytics & Reporting',
    description: 'Datengetriebene Entscheidungen durch klare KPI-Dashboards und monatliche Reports.',
    features: [],
  },
  render: (args) => renderCard(args as ServiceCardArgs),
};

export const NoIcon: Story = {
  name: 'No Icon',
  args: {
    title: 'Beratung & Strategie',
    description: 'Individuelle Beratung für Ihre digitale Strategie — von der Analyse bis zur Umsetzung.',
    features: ['Ist-Analyse', 'Strategieentwicklung', 'Roadmap'],
  },
  render: (args) => renderCard(args as ServiceCardArgs),
};

export const Grid: Story = {
  name: 'Grid (3 Cards)',
  parameters: {
    docs: {
      description: {
        story: 'Example showing three ServiceCards in a responsive grid layout.',
      },
    },
  },
  render: () => html`
    <style>
      .sc-grid-demo {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
        gap: 1.5rem;
        padding: 2rem;
        font-family: system-ui, -apple-system, sans-serif;
      }
      .sc-g {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 2rem;
        background: #fff;
        border-radius: 1rem;
        border: 1px solid #e2e8f0;
        box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);
        transition: transform 300ms ease, box-shadow 300ms ease, border-color 300ms ease;
      }
      .sc-g:hover { transform: translateY(-0.5rem); box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); border-color: #0ea5e9; }
      .sc-g:hover .sc-g-icon { background: #0ea5e9; color: #fff; transform: scale(1.1) rotate(3deg); }
      .sc-g-icon {
        display: flex; align-items: center; justify-content: center;
        width: 3rem; height: 3rem; flex-shrink: 0;
        border-radius: 0.75rem; background: #f1f5f9; color: #0ea5e9; font-size: 1.25rem;
        transition: background 300ms ease, color 300ms ease, transform 300ms ease;
      }
      .sc-g h3 { margin: 0; font-size: 1.25rem; font-weight: 600; color: #1e293b; }
      .sc-g p { margin: 0; font-size: 1rem; line-height: 1.625; color: #475569; }
      .sc-g ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 0.75rem; }
      .sc-g li { display: flex; align-items: center; gap: 0.5rem; font-size: 0.875rem; color: #475569; }
      .sc-g li::before { content: "✓"; color: #0ea5e9; font-weight: 700; flex-shrink: 0; }
      @media (prefers-reduced-motion: reduce) { .sc-g, .sc-g-icon { transition: none; } .sc-g:hover { transform: none; } }
    </style>
    <div class="sc-grid-demo">
      <article class="sc-g">
        <div class="sc-g-icon" aria-hidden="true"><span>🔍</span></div>
        <h3>SEO Optimierung</h3>
        <p>Mehr organischer Traffic durch datengetriebene Analyse.</p>
        <ul role="list" aria-label="Funktionen für SEO Optimierung">
          <li>Keyword-Analyse</li><li>On-Page SEO</li><li>Technisches SEO</li>
        </ul>
      </article>
      <article class="sc-g">
        <div class="sc-g-icon" aria-hidden="true"><span>🖥️</span></div>
        <h3>Webdesign</h3>
        <p>Individuelle Websites, die konvertieren — responsiv und schnell.</p>
        <ul role="list" aria-label="Funktionen für Webdesign">
          <li>Responsive Design</li><li>Core Web Vitals</li><li>BFSG-konform</li>
        </ul>
      </article>
      <article class="sc-g">
        <div class="sc-g-icon" aria-hidden="true"><span>📈</span></div>
        <h3>Content Marketing</h3>
        <p>Strategischer Content, der Ihre Zielgruppe nachhaltig erreicht.</p>
        <ul role="list" aria-label="Funktionen für Content Marketing">
          <li>Content-Strategie</li><li>SEO-Texte</li><li>Redaktionsplanung</li>
        </ul>
      </article>
    </div>
  `,
};
