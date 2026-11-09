'use client';

import { useEffect } from 'react';
import { useCart } from '@/lib/cart-context';
import { formatINR } from '@/lib/products';
import clsx from 'clsx';

export default function CartDrawer() {
  const {
    isOpen,
    closeCart,
    lines,
    subtotal,
    itemCount,
    freeShippingThreshold,
    updateQuantity,
    removeLine
  } = useCart();

  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // ESC to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && closeCart();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [closeCart]);

  const progress = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const remaining = Math.max(0, freeShippingThreshold - subtotal);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={closeCart}
        aria-hidden
        className={clsx(
          'fixed inset-0 z-50 bg-ink/70 backdrop-blur-sm transition-opacity duration-300',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      />

      {/* Drawer */}
      <aside
        role="dialog"
        aria-label="Shopping bag"
        aria-modal="true"
        className={clsx(
          'fixed top-0 right-0 z-50 h-full w-full sm:w-[440px] bg-ash border-l border-iron flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Header */}
        <header className="flex items-center justify-between px-6 h-16 border-b border-iron">
          <div>
            <h2 className="font-display text-xl text-bone">Your Bag</h2>
            <p className="brand-label text-fog mt-0.5">
              {itemCount} {itemCount === 1 ? 'piece' : 'pieces'}
            </p>
          </div>
          <button
            onClick={closeCart}
            className="text-bone/70 hover:text-bone transition-colors"
            aria-label="Close bag"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
            </svg>
          </button>
        </header>

        {/* Free-shipping meter */}
        <div className="px-6 py-4 border-b border-iron">
          {remaining > 0 ? (
            <p className="brand-label text-fog">
              Add <span className="text-accent">{formatINR(remaining)}</span> for free shipping
            </p>
          ) : (
            <p className="brand-label text-accent">You've unlocked free shipping</p>
          )}
          <div className="mt-3 h-0.5 bg-iron overflow-hidden">
            <div
              className="h-full bg-accent transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Lines */}
        <div className="flex-1 overflow-y-auto">
          {lines.length === 0 ? (
            <EmptyState onClose={closeCart} />
          ) : (
            <ul className="divide-y divide-iron">
              {lines.map((line) => (
                <li key={`${line.productId}-${line.size}`} className="p-6 flex gap-4">
                  <div className="w-20 h-24 bg-smoke flex-shrink-0 border border-iron" />
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-3">
                      <h3 className="font-display text-lg text-bone truncate">{line.title}</h3>
                      <button
                        onClick={() => removeLine(line.productId, line.size)}
                        className="text-fog hover:text-bone text-xs brand-label"
                      >
                        Remove
                      </button>
                    </div>
                    <p className="brand-label text-fog mt-1">Size · {line.size}</p>

                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center border border-iron">
                        <QtyButton
                          onClick={() => updateQuantity(line.productId, line.size, line.quantity - 1)}
                          label="−"
                        />
                        <span className="w-10 text-center font-mono text-sm text-bone">
                          {line.quantity}
                        </span>
                        <QtyButton
                          onClick={() => updateQuantity(line.productId, line.size, line.quantity + 1)}
                          label="+"
                        />
                      </div>
                      <div className="font-mono text-sm text-bone">
                        {formatINR(line.price * line.quantity)}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {lines.length > 0 && (
          <footer className="border-t border-iron p-6 bg-ash">
            <div className="flex items-center justify-between mb-5">
              <span className="brand-label text-fog">Subtotal</span>
              <span className="font-display text-2xl text-bone">{formatINR(subtotal)}</span>
            </div>
            <p className="text-xs text-fog mb-5 leading-relaxed">
              Taxes and shipping calculated at checkout. All sales in INR.
            </p>
            <button className="btn-primary w-full">Checkout</button>
            <button
              onClick={closeCart}
              className="w-full text-center mt-4 brand-label text-fog hover:text-bone transition-colors"
            >
              Continue shopping
            </button>
          </footer>
        )}
      </aside>
    </>
  );
}

function QtyButton({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      className="w-9 h-9 text-bone/80 hover:text-bone hover:bg-smoke transition-colors"
    >
      {label}
    </button>
  );
}

function EmptyState({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center text-center h-full px-10 py-16">
      <div className="w-14 h-14 border border-iron flex items-center justify-center mb-6">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-fog">
          <path d="M5 8h14l-1 12H6L5 8Z" strokeLinejoin="round" />
          <path d="M9 8V6a3 3 0 1 1 6 0v2" />
        </svg>
      </div>
      <h3 className="font-display text-xl text-bone">Your bag is empty</h3>
      <p className="mt-2 text-fog text-sm max-w-xs">
        Drop 01 is live. Pick a piece and start your definition.
      </p>
      <button onClick={onClose} className="mt-6 brand-label text-accent link-underline">
        Browse Drop 01
      </button>
    </div>
  );
}
