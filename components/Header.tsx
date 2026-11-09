'use client';

import Link from 'next/link';
import { useCart } from '@/lib/cart-context';
import YodMark from './YodMark';

const NAV = [
  { label: 'New', href: '#drops' },
  { label: 'Men', href: '#drops' },
  { label: 'Women', href: '#drops' },
  { label: 'Collections', href: '#drops' },
  { label: 'About', href: '#about' }
];

export default function Header() {
  const { openCart, itemCount } = useCart();

  return (
    <nav className="nav">
      <Link className="brand" href="/" aria-label="YOD home">
        <YodMark />
      </Link>
      <ul className="small">
        {NAV.map((item) => (
          <li key={item.label}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
      <div className="right small">
        <span className="live-dot hide-sm">
          <i />
          Drop 01 live
        </span>
        <button aria-label="Search">
          <svg width="17" height="17" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.2">
            <circle cx="9" cy="9" r="6.5" />
            <path d="m14 14 4 4" strokeLinecap="round" />
          </svg>
        </button>
        <button aria-label="Open bag" onClick={openCart} style={{ position: 'relative' }}>
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M5 8h14l-1 12H6L5 8Z" strokeLinejoin="round" />
            <path d="M9 8V6a3 3 0 1 1 6 0v2" />
          </svg>
          {itemCount > 0 && <span className="bag-count">{itemCount}</span>}
        </button>
      </div>
    </nav>
  );
}
