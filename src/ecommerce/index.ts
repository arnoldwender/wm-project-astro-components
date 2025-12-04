/**
 * E-commerce Components Index - WenderMedia Astro Components
 *
 * Complete e-commerce toolkit for Astro projects.
 * GDPR-friendly with no third-party tracking by default.
 */

export { default as Cart } from './Cart.astro';
export { default as Wishlist } from './Wishlist.astro';
export { default as ProductQuickView } from './ProductQuickView.astro';
export { default as AddToCartButton } from './AddToCartButton.astro';
export { default as ProductCard } from './ProductCard.astro';

// Type exports
export type { Props as CartProps } from './Cart.astro';
export type { Props as WishlistProps, WishlistItem } from './Wishlist.astro';
export type { Props as ProductQuickViewProps, ProductVariant } from './ProductQuickView.astro';
export type { Props as AddToCartButtonProps } from './AddToCartButton.astro';
export type { Props as ProductCardProps } from './ProductCard.astro';

/**
 * Cart event types for TypeScript
 */
export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  variant?: string;
  maxQuantity?: number;
}

export interface CartAddEvent extends CustomEvent {
  detail: Omit<CartItem, 'quantity'> & { quantity?: number };
}

export interface CartUpdatedEvent extends CustomEvent {
  detail: Record<string, CartItem>;
}

export interface WishlistUpdatedEvent extends CustomEvent {
  detail: WishlistItem[];
}

/**
 * Helper to dispatch cart:add event
 */
export function addToCart(item: Omit<CartItem, 'quantity'> & { quantity?: number }): void {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('cart:add', { detail: item }));
  }
}

/**
 * Helper to get cart from localStorage
 */
export function getCart(): Record<string, CartItem> {
  if (typeof window === 'undefined') return {};
  try {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
}

/**
 * Helper to get wishlist from localStorage
 */
export function getWishlist(): WishlistItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const saved = localStorage.getItem('wishlist');
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

/**
 * Helper to check if item is in wishlist
 */
export function isInWishlist(productId: string): boolean {
  return getWishlist().some((item) => item.id === productId);
}

/**
 * Helper to toggle wishlist item
 */
export function toggleWishlistItem(item: WishlistItem): boolean {
  if (typeof window === 'undefined') return false;

  const wishlist = getWishlist();
  const index = wishlist.findIndex((i) => i.id === item.id);

  if (index > -1) {
    wishlist.splice(index, 1);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    window.dispatchEvent(new CustomEvent('wishlist:updated', { detail: wishlist }));
    return false; // removed
  } else {
    wishlist.push({ ...item, addedAt: new Date().toISOString() });
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    window.dispatchEvent(new CustomEvent('wishlist:updated', { detail: wishlist }));
    return true; // added
  }
}

/**
 * Format price with locale and currency
 */
export function formatPrice(
  amount: number,
  currency = 'EUR',
  locale = 'de-DE'
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount);
}
