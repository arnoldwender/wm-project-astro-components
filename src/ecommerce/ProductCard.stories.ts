/**
 * ProductCard Stories - WenderMedia Astro Components
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'E-commerce/ProductCard',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A product card component for e-commerce listings. Features include:
- Product image with hover zoom effect
- Badge support (new, sale, etc.)
- Wishlist toggle
- Quick view modal trigger
- GDPR-compliant (no third-party tracking)
- Fully accessible (WCAG 2.1 AA, BFSG compliant)
        `,
      },
    },
  },
  argTypes: {
    id: { control: 'text', description: 'Unique product ID' },
    name: { control: 'text', description: 'Product name' },
    price: { control: 'number', description: 'Product price' },
    originalPrice: { control: 'number', description: 'Original price for sales' },
    image: { control: 'text', description: 'Product image URL' },
    badge: { control: 'text', description: 'Badge text (New, Sale, etc.)' },
    rating: { control: { type: 'range', min: 0, max: 5, step: 0.5 }, description: 'Product rating' },
    reviewCount: { control: 'number', description: 'Number of reviews' },
    showWishlist: { control: 'boolean', description: 'Show wishlist button' },
    showQuickView: { control: 'boolean', description: 'Show quick view button' },
  },
};

export default meta;
type Story = StoryObj;

// Mock product card HTML (simulating Astro component output)
const renderProductCard = (args: Record<string, unknown>) => html`
  <article class="product-card" data-product-id="${args.id}">
    <div class="product-card__image-wrapper">
      <img
        class="product-card__image"
        src="${args.image}"
        alt="${args.name}"
        loading="lazy"
      />
      ${args.badge ? html`<span class="product-card__badge">${args.badge}</span>` : ''}
      ${args.showWishlist ? html`
        <button
          class="product-card__wishlist"
          aria-label="Zur Wunschliste hinzufügen"
          type="button"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      ` : ''}
    </div>
    <div class="product-card__content">
      <h3 class="product-card__name">${args.name}</h3>
      ${args.rating ? html`
        <div class="product-card__rating" aria-label="${args.rating} von 5 Sternen">
          ${[1, 2, 3, 4, 5].map(i => html`
            <svg viewBox="0 0 20 20" fill="${i <= (args.rating as number) ? 'currentColor' : 'none'}" stroke="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          `)}
          <span>(${args.reviewCount})</span>
        </div>
      ` : ''}
      <div class="product-card__price-wrapper">
        ${args.originalPrice ? html`
          <span class="product-card__original-price">${formatPrice(args.originalPrice as number)}</span>
        ` : ''}
        <span class="product-card__price">${formatPrice(args.price as number)}</span>
      </div>
      ${args.showQuickView ? html`
        <button class="product-card__quick-view" type="button">
          Schnellansicht
        </button>
      ` : ''}
    </div>
  </article>
  <style>
    .product-card {
      position: relative;
      background: #fff;
      border-radius: 0.75rem;
      overflow: hidden;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
      transition: box-shadow 0.2s, transform 0.2s;
      max-width: 300px;
    }
    .product-card:hover {
      box-shadow: 0 10px 40px rgba(0,0,0,0.15);
      transform: translateY(-4px);
    }
    .product-card__image-wrapper {
      position: relative;
      aspect-ratio: 1;
      overflow: hidden;
    }
    .product-card__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s;
    }
    .product-card:hover .product-card__image {
      transform: scale(1.05);
    }
    .product-card__badge {
      position: absolute;
      top: 0.75rem;
      left: 0.75rem;
      padding: 0.25rem 0.75rem;
      background: #ef4444;
      color: #fff;
      font-size: 0.75rem;
      font-weight: 600;
      border-radius: 9999px;
    }
    .product-card__wishlist {
      position: absolute;
      top: 0.75rem;
      right: 0.75rem;
      width: 2.5rem;
      height: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #fff;
      border: none;
      border-radius: 50%;
      cursor: pointer;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      transition: all 0.2s;
    }
    .product-card__wishlist:hover {
      background: #ef4444;
      color: #fff;
    }
    .product-card__wishlist svg {
      width: 1.25rem;
      height: 1.25rem;
    }
    .product-card__content {
      padding: 1rem;
    }
    .product-card__name {
      margin: 0 0 0.5rem;
      font-size: 1rem;
      font-weight: 600;
      color: #1e293b;
    }
    .product-card__rating {
      display: flex;
      align-items: center;
      gap: 0.125rem;
      margin-bottom: 0.5rem;
      color: #f59e0b;
      font-size: 0.875rem;
    }
    .product-card__rating svg {
      width: 1rem;
      height: 1rem;
    }
    .product-card__rating span {
      margin-left: 0.25rem;
      color: #64748b;
    }
    .product-card__price-wrapper {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .product-card__original-price {
      text-decoration: line-through;
      color: #94a3b8;
      font-size: 0.875rem;
    }
    .product-card__price {
      font-size: 1.25rem;
      font-weight: 700;
      color: #1e293b;
    }
    .product-card__quick-view {
      width: 100%;
      margin-top: 1rem;
      padding: 0.75rem;
      background: #f1f5f9;
      border: none;
      border-radius: 0.5rem;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.2s;
    }
    .product-card__quick-view:hover {
      background: #e2e8f0;
    }
  </style>
`;

function formatPrice(amount: number, currency = 'EUR', locale = 'de-DE'): string {
  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount);
}

export const Default: Story = {
  args: {
    id: 'prod-001',
    name: 'Premium Wireless Kopfhörer',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    showWishlist: true,
    showQuickView: true,
    rating: 4.5,
    reviewCount: 128,
  },
  render: (args) => renderProductCard(args),
};

export const OnSale: Story = {
  args: {
    id: 'prod-002',
    name: 'Designer Sonnenbrille',
    price: 79.99,
    originalPrice: 129.99,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop',
    badge: 'Sale',
    showWishlist: true,
    showQuickView: true,
    rating: 4,
    reviewCount: 56,
  },
  render: (args) => renderProductCard(args),
};

export const NewProduct: Story = {
  args: {
    id: 'prod-003',
    name: 'Smart Watch Pro',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
    badge: 'Neu',
    showWishlist: true,
    showQuickView: true,
    rating: 5,
    reviewCount: 12,
  },
  render: (args) => renderProductCard(args),
};

export const Minimal: Story = {
  args: {
    id: 'prod-004',
    name: 'Minimalist Uhr',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop',
    showWishlist: false,
    showQuickView: false,
  },
  render: (args) => renderProductCard(args),
};
