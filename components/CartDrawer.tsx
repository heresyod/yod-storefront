'use client';

import { useEffect } from 'react';
import { useCart } from '@/lib/cart-context';
import { formatINR } from '@/lib/products';

export default function CartDrawer() {
  const { isOpen, closeCart, lines, subtotal, itemCount, freeShippingThreshold, updateQuantity, removeLine } = useCart();

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && closeCart();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [closeCart]);

  const progress = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const remaining = Math.max(0, freeShippingThreshold - subtotal);

  return (
    <>
      <div
        className="drawer-backdrop"
        onClick={closeCart}
        aria-hidden
        style={{ opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? 'auto' : 'none' }}
      />
      <aside
        className="drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Shopping bag"
        style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)' }}
      >
        <header className="flex items-center justify-between">
          <div>
            <div className="small" style={{ color: 'var(--gold-soft)' }}>Your bag</div>
            <h2>{itemCount} {itemCount === 1 ? 'piece' : 'pieces'}</h2>
          </div>
          <button className="close" onClick={closeCart} aria-label="Close bag">×</button>
        </header>

        <div className="meter">
          <p className="small" style={{ color: remaining > 0 ? 'var(--silver-dim)' : 'var(--gold-soft)' }}>
            {remaining > 0 ? <>Add <span style={{ color: 'var(--gold-soft)' }}>{formatINR(remaining)}</span> for free shipping</> : 'Free shipping unlocked'}
          </p>
          <div className="bar"><span style={{ width: `${progress}%` }} /></div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {lines.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-center h-full px-10 py-16">
              <h3 className="serif" style={{ fontSize: '1.6rem', color: 'var(--silver)' }}>Your bag is empty</h3>
              <p style={{ color: 'var(--silver-dim)', marginTop: '.6rem', fontSize: '.92rem' }}>Drop 01 is live. Pick a piece and start your definition.</p>
              <button onClick={closeCart} className="btn btn-line" style={{ marginTop: '1.8rem' }}>Browse Drop 01</button>
            </div>
          ) : (
            <ul>
              {lines.map((line) => (
                <li key={`${line.productId}-${line.size}`} className="flex gap-4" style={{ padding: '1.4rem 1.6rem', borderBottom: '1px solid var(--line)' }}>
                  <div style={{ width: 72, height: 88, flex: 'none', border: '1px solid var(--line)', background: 'linear-gradient(#101010, #070707)' }} />
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-3">
                      <h3 className="serif truncate" style={{ fontSize: '1.25rem', fontWeight: 400, letterSpacing: '.08em', color: 'var(--silver)' }}>{line.title}</h3>
                      <button className="link-btn small" onClick={() => removeLine(line.productId, line.size)}>Remove</button>
                    </div>
                    <p className="small" style={{ color: 'var(--mist)', marginTop: '.3rem' }}>Size · {line.size}</p>
                    <div className="flex items-center justify-between" style={{ marginTop: '.9rem' }}>
                      <div className="qty">
                        <button onClick={() => updateQuantity(line.productId, line.size, line.quantity - 1)} aria-label="Decrease">−</button>
                        <span>{line.quantity}</span>
                        <button onClick={() => updateQuantity(line.productId, line.size, line.quantity + 1)} aria-label="Increase">+</button>
                      </div>
                      <span className="serif" style={{ color: 'var(--gold-soft)', fontSize: '1.1rem', letterSpacing: '.08em' }}>{formatINR(line.price * line.quantity)}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {lines.length > 0 && (
          <footer>
            <div className="flex items-center justify-between" style={{ marginBottom: '1rem' }}>
              <span className="small" style={{ color: 'var(--silver-dim)' }}>Subtotal</span>
              <span className="serif" style={{ fontSize: '1.6rem', color: 'var(--silver)' }}>{formatINR(subtotal)}</span>
            </div>
            <p style={{ fontSize: '.78rem', color: 'var(--mist)', marginBottom: '1.2rem' }}>Taxes and shipping calculated at checkout. All prices in INR.</p>
            <button className="btn btn-gold btn-block">Checkout</button>
            <button onClick={closeCart} className="link-btn small" style={{ width: '100%', marginTop: '1rem' }}>Continue shopping</button>
          </footer>
        )}
      </aside>
    </>
  );
}
