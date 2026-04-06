/**
 * ProductCard (Products) Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Products/ProductCard',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A full-featured product/affiliate card with ratings, pricing, and badges. Features include:
- Discount calculation with percentage badge
- Validity dates with expiration overlay
- Star ratings with half-star support
- Feature list with progressive disclosure
- Trust indicators and secure redirect notice
- Exclusive and featured badges
- Localized currency formatting
        `,
      },
    },
  },
  argTypes: {
    title: { control: 'text', description: 'Product title' },
    description: { control: 'text', description: 'Product description' },
    originalPrice: { control: 'number', description: 'Original price' },
    salePrice: { control: 'number', description: 'Sale price' },
    rating: { control: { type: 'range', min: 0, max: 5, step: 0.5 }, description: 'Star rating' },
    reviewCount: { control: 'number', description: 'Number of reviews' },
    featured: { control: 'boolean', description: 'Show as featured/top deal' },
    exclusive: { control: 'boolean', description: 'Show exclusive badge' },
  },
};

export default meta;
type Story = StoryObj;

function formatPrice(amount: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EUR' }).format(amount);
}

const renderProductCard = (args: Record<string, unknown>) => {
  const salePrice = args.salePrice as number | undefined;
  const originalPrice = args.originalPrice as number;
  const currentPrice = salePrice ?? originalPrice;
  const savings = salePrice ? originalPrice - salePrice : 0;
  const savingsPercentage = salePrice ? Math.round((savings / originalPrice) * 100) : 0;
  const rating = args.rating as number;
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;

  return html`
    <style>
      .pc { background: #fff; border-radius: 0.75rem; box-shadow: 0 4px 20px rgba(0,0,0,0.1); overflow: hidden; max-width: 340px; margin: 2rem auto; font-family: system-ui, sans-serif; transition: all 0.3s; ${args.featured ? 'ring: 2px solid #3b82f6; outline: 2px solid #3b82f6;' : ''} }
      .pc:hover { box-shadow: 0 10px 40px rgba(0,0,0,0.15); transform: translateY(-2px); }
      .pc-img { position: relative; height: 12rem; background: linear-gradient(135deg, #e0e7ff, #dbeafe); }
      .pc-badges { position: absolute; top: 0.75rem; left: 0.75rem; display: flex; flex-direction: column; gap: 0.5rem; }
      .pc-badge { padding: 0.25rem 0.5rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 600; color: white; }
      .pc-body { padding: 1.5rem; }
      .pc-title { font-size: 1.125rem; font-weight: 700; margin: 0 0 0.5rem; line-height: 1.3; }
      .pc-desc { font-size: 0.875rem; color: #6b7280; margin: 0 0 1rem; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
      .pc-stars { display: flex; align-items: center; gap: 0.25rem; margin-bottom: 1rem; }
      .pc-star { width: 1rem; height: 1rem; color: #f59e0b; }
      .pc-star-empty { width: 1rem; height: 1rem; color: #d1d5db; }
      .pc-rating-text { font-size: 0.875rem; color: #6b7280; margin-left: 0.25rem; }
      .pc-pricing { margin-bottom: 1.5rem; }
      .pc-price { font-size: 1.5rem; font-weight: 700; }
      .pc-original { font-size: 1rem; color: #9ca3af; text-decoration: line-through; margin-left: 0.5rem; }
      .pc-savings { font-size: 0.875rem; color: #10b981; font-weight: 500; margin-top: 0.25rem; }
      .pc-cta { display: flex; align-items: center; justify-content: center; gap: 0.5rem; width: 100%; padding: 0.75rem; background: #3b82f6; color: white; border: none; border-radius: 0.5rem; font-size: 1rem; font-weight: 600; cursor: pointer; text-decoration: none; box-sizing: border-box; }
      .pc-cta:hover { background: #2563eb; }
      .pc-trust { margin-top: 1rem; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; color: #9ca3af; gap: 0.25rem; }
      .pc-trust svg { width: 0.75rem; height: 0.75rem; }
    </style>
    <article class="pc">
      <div class="pc-img">
        <div class="pc-badges">
          ${args.exclusive ? html`<span class="pc-badge" style="background: #8b5cf6;">EXCLUSIVE</span>` : ''}
          ${args.featured ? html`<span class="pc-badge" style="background: #3b82f6;">TOP DEAL</span>` : ''}
          ${savingsPercentage > 0 ? html`<span class="pc-badge" style="background: #10b981;">-${savingsPercentage}%</span>` : ''}
        </div>
      </div>
      <div class="pc-body">
        <h3 class="pc-title">${args.title}</h3>
        <p class="pc-desc">${args.description}</p>
        ${rating ? html`
          <div class="pc-stars">
            ${Array.from({ length: fullStars }).map(() => html`<svg class="pc-star" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`)}
            ${hasHalf ? html`<svg class="pc-star" style="opacity: 0.5;" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>` : ''}
            <span class="pc-rating-text">${rating} ${args.reviewCount ? `(${args.reviewCount} reviews)` : ''}</span>
          </div>
        ` : ''}
        <div class="pc-pricing">
          <div>
            <span class="pc-price">${formatPrice(currentPrice)}</span>
            ${salePrice && originalPrice > salePrice ? html`<span class="pc-original">${formatPrice(originalPrice)}</span>` : ''}
          </div>
          ${savings > 0 ? html`<div class="pc-savings">You save ${formatPrice(savings)} (${savingsPercentage}%)</div>` : ''}
        </div>
        <a href="#" class="pc-cta">
          Buy Now
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
        </a>
        <div class="pc-trust">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
          Secure redirect &middot; No hidden costs
        </div>
      </div>
    </article>
  `;
};

export const Default: Story = {
  args: {
    title: 'Premium Hosting Plan',
    description: 'Fast SSD hosting with 99.9% uptime and 24/7 support.',
    originalPrice: 19.99,
    rating: 4.5,
    reviewCount: 120,
    featured: false,
    exclusive: false,
  },
  render: (args) => renderProductCard(args),
};

export const OnSale: Story = {
  args: {
    title: 'VPN Premium Jahresabo',
    description: 'Schuetze deine Privatsphaere mit unserem schnellsten VPN-Service.',
    originalPrice: 119.88,
    salePrice: 59.99,
    rating: 4,
    reviewCount: 2340,
    featured: true,
    exclusive: true,
  },
  render: (args) => renderProductCard(args),
};

export const BasicProduct: Story = {
  args: {
    title: 'Domain Registration',
    description: 'Register your .de domain with free WHOIS privacy.',
    originalPrice: 9.99,
    rating: 3.5,
    reviewCount: 45,
    featured: false,
    exclusive: false,
  },
  render: (args) => renderProductCard(args),
};
