'use client';

import { useState } from 'react';
import { useCart } from '@/lib/cart-context';
import { formatINR } from '@/lib/products';
import type { Product, Size } from '@/lib/types';

/* Tee colourways expressed only in the coming-soon palette. */
const TEE: Record<string, { fill: string; print: string; swatch: string }> = {
  Noir: { fill: '#0b0b0b', print: '#d2d2d2', swatch: '#0b0b0b' },
  Bone: { fill: '#d2d2d2', print: '#0b0b0b', swatch: '#d2d2d2' },
  Graphite: { fill: '#2a2a2a', print: '#8f8f8f', swatch: '#5a5a5a' }
};

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [size, setSize] = useState<Size | null>(null);
  const [error, setError] = useState(false);
  const tee = TEE[product.colorway] ?? TEE.Noir;

  const handleAdd = () => {
    if (!size) return setError(true);
    setError(false);
    addItem(product, size);
  };

  return (
    <article className="card">
      <div className="visual">
        {product.nfcEnabled && <span className="chip">NFC</span>}
        <span className="code small">{product.dropCode}</span>
        <div className="tee">
          <svg viewBox="0 0 280 300" aria-hidden="true">
            <path
              d="M20 60 90 10 110 40h60l20-30 70 50-20 50-20-10v190H60V100l-20 10Z"
              fill={tee.fill}
              stroke="rgba(255,255,255,0.18)"
              strokeWidth="1"
            />
            <path d="M110 40q30 15 60 0" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1.2" />
            <text x="140" y="150" textAnchor="middle" fill={tee.print} fontFamily="var(--serif)" fontSize="22" letterSpacing="4">
              YOD
            </text>
            <line x1="115" y1="160" x2="165" y2="160" stroke="#cbb58e" strokeWidth=".8" />
          </svg>
        </div>
        {!product.inStock && <span className="soon">Sold out</span>}
      </div>
      <div className="body">
        <div className="swatches">
          <i style={{ background: tee.swatch }} title={product.colorway} />
        </div>
        <h3>{product.title}</h3>
        <p className="sub">{product.subtitle} · {product.fitSpec}</p>
        <p className="price">{formatINR(product.price)}</p>

        <div className="sizes" role="group" aria-label="Size">
          {product.sizes.map((s) => (
            <button
              key={s}
              className="size"
              aria-pressed={size === s}
              onClick={() => {
                setSize(s);
                setError(false);
              }}
            >
              {s}
            </button>
          ))}
        </div>
        <button className={error ? 'btn btn-line btn-block err-text' : 'btn btn-gold btn-block'} onClick={handleAdd}>
          {error ? 'Select a size' : 'Add to bag'}
        </button>
      </div>
    </article>
  );
}
