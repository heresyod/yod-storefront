'use client';

import { createContext, useContext, useState, useCallback, useMemo, ReactNode } from 'react';
import type { CartLine, Size, Product } from './types';

interface CartState {
  lines: CartLine[];
  isOpen: boolean;
  subtotal: number;
  itemCount: number;
  freeShippingThreshold: number;
  openCart: () => void;
  closeCart: () => void;
  addItem: (product: Product, size: Size, qty?: number) => void;
  updateQuantity: (productId: string, size: Size, qty: number) => void;
  removeLine: (productId: string, size: Size) => void;
  clearCart: () => void;
}

const FREE_SHIPPING_THRESHOLD = Number(
  process.env.NEXT_PUBLIC_FREE_SHIPPING_THRESHOLD ?? 2499
);

const CartContext = createContext<CartState | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const addItem = useCallback((product: Product, size: Size, qty = 1) => {
    setLines((prev) => {
      const key = (l: CartLine) => l.productId === product.id && l.size === size;
      const existing = prev.find(key);
      if (existing) {
        return prev.map((l) => (key(l) ? { ...l, quantity: l.quantity + qty } : l));
      }
      return [
        ...prev,
        {
          productId: product.id,
          slug: product.slug,
          title: product.title,
          size,
          price: product.price,
          image: product.imageFront,
          quantity: qty
        }
      ];
    });
    setIsOpen(true);
  }, []);

  const updateQuantity = useCallback((productId: string, size: Size, qty: number) => {
    setLines((prev) =>
      prev
        .map((l) =>
          l.productId === productId && l.size === size ? { ...l, quantity: Math.max(0, qty) } : l
        )
        .filter((l) => l.quantity > 0)
    );
  }, []);

  const removeLine = useCallback((productId: string, size: Size) => {
    setLines((prev) => prev.filter((l) => !(l.productId === productId && l.size === size)));
  }, []);

  const clearCart = useCallback(() => setLines([]), []);

  const subtotal = useMemo(
    () => lines.reduce((sum, l) => sum + l.price * l.quantity, 0),
    [lines]
  );
  const itemCount = useMemo(
    () => lines.reduce((sum, l) => sum + l.quantity, 0),
    [lines]
  );

  const value: CartState = {
    lines,
    isOpen,
    subtotal,
    itemCount,
    freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
    openCart,
    closeCart,
    addItem,
    updateQuantity,
    removeLine,
    clearCart
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartState {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
