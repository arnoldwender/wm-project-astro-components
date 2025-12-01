import { atom, computed, map } from 'nanostores';

/**
 * Cart Store - Estado global del carrito
 * Usa nanostores para compartir estado entre islas React
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

// Estado del carrito
export const $cartItems = map<Record<string, CartItem>>({});

// Estado de UI
export const $isCartOpen = atom(false);
export const $isLoading = atom(false);

// Computed values
export const $cartCount = computed($cartItems, (items) => {
  return Object.values(items).reduce((sum, item) => sum + item.quantity, 0);
});

export const $cartTotal = computed($cartItems, (items) => {
  return Object.values(items).reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
});

export const $cartItemsArray = computed($cartItems, (items) => {
  return Object.values(items);
});

// Actions
export function addToCart(item: Omit<CartItem, 'quantity'> & { quantity?: number }) {
  const existingItem = $cartItems.get()[item.id];
  const quantity = item.quantity ?? 1;

  if (existingItem) {
    const newQuantity = existingItem.quantity + quantity;
    const maxQty = existingItem.maxQuantity ?? Infinity;

    $cartItems.setKey(item.id, {
      ...existingItem,
      quantity: Math.min(newQuantity, maxQty),
    });
  } else {
    $cartItems.setKey(item.id, {
      ...item,
      quantity,
    });
  }

  // Abrir carrito brevemente
  $isCartOpen.set(true);
  setTimeout(() => $isCartOpen.set(false), 2000);
}

export function removeFromCart(itemId: string) {
  const items = { ...$cartItems.get() };
  delete items[itemId];
  $cartItems.set(items);
}

export function updateQuantity(itemId: string, quantity: number) {
  const item = $cartItems.get()[itemId];
  if (!item) return;

  if (quantity <= 0) {
    removeFromCart(itemId);
    return;
  }

  const maxQty = item.maxQuantity ?? Infinity;
  $cartItems.setKey(itemId, {
    ...item,
    quantity: Math.min(quantity, maxQty),
  });
}

export function clearCart() {
  $cartItems.set({});
}

export function toggleCart() {
  $isCartOpen.set(!$isCartOpen.get());
}

// Persistencia en localStorage
if (typeof window !== 'undefined') {
  // Cargar del localStorage
  const saved = localStorage.getItem('cart');
  if (saved) {
    try {
      $cartItems.set(JSON.parse(saved));
    } catch {
      localStorage.removeItem('cart');
    }
  }

  // Guardar cambios
  $cartItems.subscribe((items) => {
    localStorage.setItem('cart', JSON.stringify(items));
  });
}
