/**
 * E-commerce Components Tests - WenderMedia Astro Components
 */

import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  addToCart,
  getCart,
  getWishlist,
  isInWishlist,
  toggleWishlistItem,
  formatPrice,
} from '../../src/ecommerce';

describe('E-commerce Utilities', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe('Cart Functions', () => {
    it('should add item to cart via event', () => {
      const listener = vi.fn();
      window.addEventListener('cart:add', listener);

      addToCart({
        id: 'test-1',
        name: 'Test Product',
        price: 29.99,
        image: '/test.jpg',
      });

      expect(listener).toHaveBeenCalled();
      window.removeEventListener('cart:add', listener);
    });

    it('should return empty cart by default', () => {
      const cart = getCart();
      expect(cart).toEqual({});
    });

    it('should return cart from localStorage', () => {
      const cartData = {
        'item-1': { id: 'item-1', name: 'Product', price: 10, quantity: 2, image: '' },
      };
      localStorage.setItem('cart', JSON.stringify(cartData));

      const cart = getCart();
      expect(cart).toEqual(cartData);
    });
  });

  describe('Wishlist Functions', () => {
    it('should return empty wishlist by default', () => {
      const wishlist = getWishlist();
      expect(wishlist).toEqual([]);
    });

    it('should check if item is in wishlist', () => {
      const wishlistData = [
        { id: 'item-1', name: 'Product', price: 10, image: '' },
      ];
      localStorage.setItem('wishlist', JSON.stringify(wishlistData));

      expect(isInWishlist('item-1')).toBe(true);
      expect(isInWishlist('item-2')).toBe(false);
    });

    it('should toggle wishlist item (add)', () => {
      const item = { id: 'test-1', name: 'Test', price: 10, image: '' };
      const result = toggleWishlistItem(item);

      expect(result).toBe(true); // added
      expect(getWishlist()).toHaveLength(1);
      expect(getWishlist()[0].id).toBe('test-1');
    });

    it('should toggle wishlist item (remove)', () => {
      const item = { id: 'test-1', name: 'Test', price: 10, image: '' };
      localStorage.setItem('wishlist', JSON.stringify([item]));

      const result = toggleWishlistItem(item);

      expect(result).toBe(false); // removed
      expect(getWishlist()).toHaveLength(0);
    });
  });

  describe('formatPrice', () => {
    it('should format price in EUR', () => {
      const formatted = formatPrice(29.99, 'EUR', 'de-DE');
      expect(formatted).toContain('29,99');
      expect(formatted).toContain('€');
    });

    it('should format price in USD', () => {
      const formatted = formatPrice(29.99, 'USD', 'en-US');
      expect(formatted).toContain('29.99');
      expect(formatted).toContain('$');
    });

    it('should handle zero', () => {
      const formatted = formatPrice(0, 'EUR', 'de-DE');
      expect(formatted).toContain('0,00');
    });
  });
});
