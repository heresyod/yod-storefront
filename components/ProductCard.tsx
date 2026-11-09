'use client';
/* eslint-disable @next/next/no-img-element */

import { useState } from 'react';
import { useCart } from '@/lib/cart-context';
import { COLORWAYS, formatINR } from '@/lib/products';
import type { Product, Size } from '@/lib/types';

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [size, setSize] = useState<Size | null>(null);
  const [error, setError] = useState(false);

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
          <img
            className="tee-img"
            src={product.imageFront}
            alt={`YOD oversized mock-neck tee in ${product.colorway}`}
            width={1140}
            height={1240}
            loading="lazy"
          />
        </div>
        {!product.inStock && <span className="soon">Sold out</span>}
      </div>
      <div className="body">
        <div className="swatches">
          <i style={{ background: COLORWAYS[product.colorway] ?? '#0b0b0b' }} title={product.colorway} />
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
