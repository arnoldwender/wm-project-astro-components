/**
 * LocationsSection Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Sections/LocationsSection',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Display office locations, stores, or service areas.
- Six variants: grid, map, list, cards, split, tabs
- Configurable columns (2-4)
- Map embed support and region tabs
        `,
      },
    },
  },
  argTypes: {
    variant: { control: 'select', options: ['grid', 'map', 'list', 'cards', 'split', 'tabs'], description: 'Layout variant' },
    columns: { control: 'select', options: [2, 3, 4], description: 'Grid columns' },
    title: { control: 'text', description: 'Section title' },
  },
};

export default meta;
type Story = StoryObj;

const locationCard = (name: string, address: string, phone: string) => html`
  <div style="background: #fff; border: 1px solid #e2e8f0; border-radius: 0.75rem; overflow: hidden;">
    <div style="aspect-ratio: 16/9; background: linear-gradient(135deg, #e2e8f0, #cbd5e1);"></div>
    <div style="padding: 1.25rem;">
      <h3 style="font-weight: 600; color: #1e293b; margin: 0 0 0.25rem; font-size: 1rem;">${name}</h3>
      <p style="font-size: 0.875rem; color: #64748b; margin: 0 0 0.5rem;">${address}</p>
      <p style="font-size: 0.875rem; color: #64748b; margin: 0;">${phone}</p>
    </div>
  </div>
`;

const renderLocations = (args: Record<string, unknown>) => html`
  <section style="padding: 4rem 2rem;">
    <div style="max-width: 72rem; margin: 0 auto;">
      <div style="text-align: center; margin-bottom: 3rem;">
        <span style="font-size: 0.875rem; font-weight: 600; color: #3b82f6; text-transform: uppercase;">Locations</span>
        <h2 style="font-size: 2rem; font-weight: 700; color: #1e293b; margin: 0.5rem 0;">${args.title}</h2>
        <p style="color: #64748b;">Visit us at one of our locations.</p>
      </div>
      <div style="display: grid; grid-template-columns: repeat(${args.columns}, 1fr); gap: 1.5rem;">
        ${locationCard('Berlin HQ', 'Friedrichstrasse 123, 10117 Berlin', '+49 30 12345678')}
        ${locationCard('Halle Office', 'Marktplatz 1, 06108 Halle (Saale)', '+49 345 9876543')}
        ${locationCard('Munich Branch', 'Leopoldstrasse 45, 80802 Munich', '+49 89 11223344')}
      </div>
    </div>
  </section>
`;

export const Grid: Story = {
  args: { variant: 'grid', columns: 3, title: 'Our Offices' },
  render: (args) => renderLocations(args),
};

export const TwoColumns: Story = {
  args: { variant: 'cards', columns: 2, title: 'Find Us Near You' },
  render: (args) => renderLocations(args),
};
