/**
 * OpenStreetMap Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Maps/OpenStreetMap',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A DSGVO-compliant OpenStreetMap component using Leaflet. More privacy-friendly than Google Maps. Features include:
- Consent-first: no tile requests until the user clicks "Karte laden"
- Lazy-loads Leaflet CSS and JS only after consent
- Four tile providers: osm (default), carto, stamen, or custom URL
- Marker with optional popup text
- "Remember choice" checkbox with localStorage persistence
- External link to openstreetmap.org
- Grid-pattern SVG placeholder before consent
        `,
      },
    },
  },
  argTypes: {
    lat: { control: 'number', description: 'Latitude coordinate' },
    lng: { control: 'number', description: 'Longitude coordinate' },
    height: { control: 'text', description: 'Map height' },
    title: { control: 'text', description: 'Map title' },
    buttonText: { control: 'text', description: 'Consent button text' },
    tileProvider: { control: 'select', options: ['osm', 'carto', 'stamen'], description: 'Tile provider' },
  },
};

export default meta;
type Story = StoryObj;

const renderOSM = (args: Record<string, unknown>) => html`
  <div style="width: 100%; height: ${args.height}; position: relative; background: #f3f4f6; border-radius: 0.5rem; overflow: hidden; font-family: system-ui, sans-serif;">
    <div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;">
      <svg style="position: absolute; inset: 0; width: 100%; height: 100%; opacity: 0.5;" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#d1d5db" stroke-width="0.5"/>
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#grid)"/>
      </svg>
      <div style="position: relative; z-index: 1; text-align: center; padding: 2rem; max-width: 400px; background: white; border-radius: 0.75rem; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#6b7280" stroke-width="2" style="margin: 0 auto 1rem;">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
        <h3 style="margin: 0 0 0.5rem; font-size: 1.125rem; font-weight: 600; color: #1f2937;">${args.title}</h3>
        <p style="margin: 0 0 1.5rem; font-size: 0.875rem; color: #6b7280; line-height: 1.5;">
          Diese Karte verwendet OpenStreetMap. Beim Laden werden Kartendaten von externen Servern geladen.
        </p>
        <button style="padding: 0.75rem 2rem; background: #10b981; color: white; border: none; border-radius: 0.375rem; font-size: 1rem; font-weight: 500; cursor: pointer;">
          ${args.buttonText}
        </button>
        <div style="margin-top: 0.75rem;">
          <a href="/datenschutz#openstreetmap" style="color: #6b7280; font-size: 0.875rem; text-decoration: underline;">Mehr erfahren</a>
        </div>
        <label style="display: flex; align-items: center; justify-content: center; gap: 0.5rem; margin-top: 1rem; font-size: 0.75rem; color: #6b7280; cursor: pointer;">
          <input type="checkbox" style="width: 1rem; height: 1rem;" />
          <span>Auswahl merken</span>
        </label>
      </div>
    </div>
    <a href="#" style="position: absolute; bottom: 1rem; right: 1rem; display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem; background: white; color: #1f2937; border-radius: 0.375rem; font-size: 0.875rem; font-weight: 500; text-decoration: none; box-shadow: 0 2px 8px rgba(0,0,0,0.15); z-index: 1000;">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
      </svg>
      Gr&ouml;&szlig;ere Karte
    </a>
  </div>
`;

export const Default: Story = {
  args: {
    lat: 51.4828,
    lng: 11.97,
    height: '400px',
    title: 'OpenStreetMap',
    buttonText: 'Karte laden',
    tileProvider: 'osm',
  },
  render: (args) => renderOSM(args),
};

export const TallMap: Story = {
  args: {
    lat: 48.1351,
    lng: 11.582,
    height: '500px',
    title: 'Our Location',
    buttonText: 'Show map',
    tileProvider: 'carto',
  },
  render: (args) => renderOSM(args),
};
