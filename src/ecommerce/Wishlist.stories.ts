/**
 * Wishlist Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'E-commerce/Wishlist',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Wishlist/favorites functionality with localStorage persistence. Features include:
- Toggle, list, and count display modes
- localStorage persistence across sessions
- Heart icon animation on toggle
- Localized currency formatting
- Custom event dispatch for cross-component sync
- Add to cart and clear all actions
        `,
      },
    },
  },
  argTypes: {
    mode: { control: 'select', options: ['toggle', 'list', 'count'], description: 'Display mode' },
    isActive: { control: 'boolean', description: 'Toggle active state (toggle mode)' },
  },
};

export default meta;
type Story = StoryObj;

const renderWishlistToggle = (args: Record<string, unknown>) => html`
  <style>
    .wl-toggle {
      display: flex; align-items: center; justify-content: center; width: 2.5rem; height: 2.5rem;
      background: transparent; border: none; cursor: pointer; color: ${args.isActive ? '#ef4444' : '#6b7280'};
      transition: all 0.2s;
    }
    .wl-toggle:hover { color: #ef4444; transform: scale(1.1); }
    .wl-toggle svg { width: 1.5rem; height: 1.5rem; }
  </style>
  <div style="padding: 2rem; font-family: system-ui, sans-serif; display: flex; align-items: center; gap: 1rem;">
    <button class="wl-toggle" aria-label="${args.isActive ? 'Aus Wunschliste entfernen' : 'Zur Wunschliste hinzufuegen'}" aria-pressed="${args.isActive}">
      <svg viewBox="0 0 24 24" fill="${args.isActive ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    </button>
    <span style="font-size: 0.875rem; color: #6b7280;">${args.isActive ? 'In der Wunschliste' : 'Zur Wunschliste hinzufuegen'}</span>
  </div>
`;

const renderWishlistList = () => html`
  <style>
    .wl-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr)); gap: 1.5rem; padding: 2rem; font-family: system-ui, sans-serif; }
    .wl-item { border: 1px solid #e5e7eb; border-radius: 0.75rem; overflow: hidden; transition: box-shadow 0.2s; }
    .wl-item:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
    .wl-img { aspect-ratio: 1; background: #f3f4f6; }
    .wl-details { padding: 1rem; }
    .wl-name { font-size: 0.9375rem; font-weight: 500; margin: 0 0 0.5rem; }
    .wl-price { font-size: 1rem; font-weight: 600; }
    .wl-actions { display: flex; gap: 0.5rem; padding: 0 1rem 1rem; }
    .wl-cart-btn { flex: 1; padding: 0.625rem; background: #3b82f6; color: white; border: none; border-radius: 0.5rem; font-size: 0.875rem; font-weight: 500; cursor: pointer; }
    .wl-remove-btn { width: 2.5rem; padding: 0.625rem; background: #e5e7eb; border: none; border-radius: 0.5rem; cursor: pointer; color: #6b7280; display: flex; align-items: center; justify-content: center; }
    .wl-remove-btn svg { width: 1.25rem; height: 1.25rem; }
  </style>
  <div class="wl-grid">
    ${['Premium Kopfhoerer', 'Designer Sonnenbrille'].map(name => html`
      <div class="wl-item">
        <div class="wl-img"></div>
        <div class="wl-details">
          <h3 class="wl-name">${name}</h3>
          <span class="wl-price">29,99 &euro;</span>
        </div>
        <div class="wl-actions">
          <button class="wl-cart-btn">In den Warenkorb</button>
          <button class="wl-remove-btn" aria-label="Entfernen">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
        </div>
      </div>
    `)}
  </div>
`;

export const Toggle: Story = {
  args: { mode: 'toggle', isActive: false },
  render: (args) => renderWishlistToggle(args),
};

export const ToggleActive: Story = {
  args: { mode: 'toggle', isActive: true },
  render: (args) => renderWishlistToggle(args),
};

export const List: Story = {
  args: { mode: 'list' },
  render: () => renderWishlistList(),
};
