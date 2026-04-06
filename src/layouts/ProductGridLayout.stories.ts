/**
 * ProductGridLayout Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Layouts/ProductGridLayout',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
E-commerce product grid with filtering sidebar, sorting, and view toggle.

**Features:**
- Filter sidebar with mobile slide-in panel
- Grid/List view toggle
- Sorting options (featured, newest, price, name)
- Sticky filters option
- Configurable columns (2-5)
- Responsive product cards
        `,
      },
    },
  },
  argTypes: {
    showFilters: { control: 'boolean', description: 'Show filter sidebar' },
    showSorting: { control: 'boolean', description: 'Show sorting dropdown' },
    showViewToggle: { control: 'boolean', description: 'Show grid/list view toggle' },
    columns: { control: 'select', options: [2, 3, 4, 5], description: 'Product grid columns' },
  },
};

export default meta;
type Story = StoryObj;

const productCard = (name: string, price: string) => html`
  <div style="background: white; border: 1px solid #e2e8f0; border-radius: 0.5rem; overflow: hidden;">
    <div style="aspect-ratio: 1/1; background: #f1f5f9;"></div>
    <div style="padding: 1rem;">
      <h3 style="font-weight: 600; font-size: 0.875rem; margin: 0 0 0.25rem;">${name}</h3>
      <p style="color: #3b82f6; font-weight: 700; margin: 0;">${price}</p>
    </div>
  </div>
`;

const renderProductGrid = (args: Record<string, unknown>) => html`
  <div style="font-family: system-ui, sans-serif; padding: 2rem;">
    <!-- Top Bar -->
    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem;">
      <p style="font-size: 0.875rem; color: #9ca3af; margin: 0;">24 Produkte</p>
      <div style="display: flex; align-items: center; gap: 1rem;">
        ${args.showSorting ? html`
          <select style="font-size: 0.875rem; padding: 0.5rem 0.75rem; border: 1px solid #e2e8f0; border-radius: 0.5rem; background: white;">
            <option>Empfohlen</option><option>Neueste</option><option>Preis: Niedrig - Hoch</option>
          </select>
        ` : ''}
        ${args.showViewToggle ? html`
          <div style="display: flex; border: 1px solid #e2e8f0; border-radius: 0.5rem; overflow: hidden;">
            <button style="padding: 0.5rem; background: #3b82f6; color: white; border: none; cursor: pointer;">Grid</button>
            <button style="padding: 0.5rem; background: white; color: #9ca3af; border: none; cursor: pointer;">List</button>
          </div>
        ` : ''}
      </div>
    </div>

    <!-- Main -->
    <div style="${args.showFilters ? 'display: grid; grid-template-columns: 280px 1fr; gap: 2rem;' : ''}">
      ${args.showFilters ? html`
        <aside style="border: 1px solid #e2e8f0; border-radius: 0.5rem; padding: 1rem; height: fit-content;">
          <h3 style="font-weight: 600; font-size: 0.875rem; margin: 0 0 1rem;">Kategorie</h3>
          ${['Alle', 'Elektronik', 'Kleidung', 'Accessoires'].map((c) => html`
            <label style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.875rem; color: #374151; margin-bottom: 0.5rem; cursor: pointer;">
              <input type="checkbox" /> ${c}
            </label>
          `)}
          <h3 style="font-weight: 600; font-size: 0.875rem; margin: 1.5rem 0 1rem; padding-top: 1rem; border-top: 1px solid #e2e8f0;">Preis</h3>
          <input type="range" min="0" max="500" style="width: 100%;" />
        </aside>
      ` : ''}

      <div style="display: grid; grid-template-columns: repeat(${args.columns || 4}, 1fr); gap: 1.5rem;">
        ${productCard('Product Alpha', '\u20AC49.99')}
        ${productCard('Product Beta', '\u20AC79.99')}
        ${productCard('Product Gamma', '\u20AC29.99')}
        ${productCard('Product Delta', '\u20AC99.99')}
        ${productCard('Product Epsilon', '\u20AC59.99')}
        ${productCard('Product Zeta', '\u20AC39.99')}
        ${productCard('Product Eta', '\u20AC149.99')}
        ${productCard('Product Theta', '\u20AC19.99')}
      </div>
    </div>
  </div>
`;

export const Default: Story = {
  args: { showFilters: true, showSorting: true, showViewToggle: true, columns: 4 },
  render: (args) => renderProductGrid(args),
};

export const WithoutFilters: Story = {
  args: { showFilters: false, showSorting: true, showViewToggle: true, columns: 4 },
  render: (args) => renderProductGrid(args),
};

export const ThreeColumns: Story = {
  args: { showFilters: true, showSorting: true, showViewToggle: false, columns: 3 },
  render: (args) => renderProductGrid(args),
};
