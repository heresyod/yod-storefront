'use client';

import { useState } from 'react';
import { useCart } from '@/lib/cart-context';
import { formatINR } from '@/lib/products';
import type { Product, Size } from '@/lib/types';
import clsx from 'clsx';

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);
  const [size, setSize] = useState<Size | null>(null);
  const [error, setError] = useState(false);

  const handleAdd = () => {
    if (!size) {
      setError(true);
      return;
    }
    setError(false);
    addItem(product, size);
  };

  return (
    <article
      className="group relative flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[4/5] bg-smoke overflow-hidden mb-5">
        <PlaceholderArt
          view={hovered ? 'back' : 'front'}
          title={product.title}
          colorway={product.colorway}
        />
        {product.nfcEnabled && (
          <div className="absolute top-3 left-3 brand-label text-bone/90 bg-ink/70 backdrop-blur-sm px-2.5 py-1 border border-iron">
            NFC
          </div>
        )}
        <div className="absolute top-3 right-3 brand-label text-fog">
          {product.dropCode}
        </div>
      </div>

      {/* Meta */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-2xl text-bone leading-tight">{product.title}</h3>
          <p className="text-fog text-sm mt-1">{product.fitSpec} · {product.colorway}</p>
        </div>
        <div className="font-mono text-bone text-sm whitespace-nowrap">
          {formatINR(product.price)}
        </div>
      </div>

      {/* Size pills */}
      <div className="mt-5 flex flex-wrap gap-2">
        {product.sizes.map((s) => (
          <button
            key={s}
            onClick={() => {
              setSize(s);
              setError(false);
            }}
            className={clsx(
              'min-w-10 h-10 px-3 brand-label border transition-all',
              size === s
                ? 'border-bone bg-bone text-ink'
                : 'border-iron text-bone hover:border-fog'
            )}
            aria-pressed={size === s}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Add to bag */}
      <button
        onClick={handleAdd}
        className={clsx(
          'mt-4 w-full py-3.5 brand-label border transition-all duration-300',
          error
            ? 'border-accent text-accent'
            : 'border-iron text-bone hover:bg-bone hover:text-ink hover:border-bone'
        )}
      >
        {error ? 'Select a size ↑' : 'Add to Bag'}
      </button>
    </article>
  );
}

/**
 * Deterministic SVG placeholder — swap for <Image /> + real product photography
 * once the shoot assets land in /public/products/.
 */
function PlaceholderArt({
  view,
  title,
  colorway
}: {
  view: 'front' | 'back';
  title: string;
  colorway: string;
}) {
  const palettes: Record<string, { tee: string; print: string; accent: string }> = {
    Noir: { tee: '#0f0f0f', print: '#F5F2EC', accent: '#C8A96A' },
    Bone: { tee: '#E8E4DC', print: '#0f0f0f', accent: '#C8A96A' },
    Graphite: { tee: '#1f1f1f', print: '#8A8A8A', accent: '#C8A96A' }
  };
  const p = palettes[colorway] ?? palettes.Noir;

  return (
    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.03]">
      <svg viewBox="0 0 400 500" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="500" fill="#0A0A0A" />
        {/* T-shirt silhouette — oversized, with chest/back panel seam */}
        <g transform="translate(60 80)">
          <path
            d="M20 60 L90 10 L110 40 L170 40 L190 10 L260 60 L240 110 L220 100 L220 380 L60 380 L60 100 L40 110 Z"
            fill={p.tee}
            stroke="#2A2A2A"
            strokeWidth="1"
          />
          {/* Chest panel seam */}
          <line x1="60" y1="190" x2="220" y2="190" stroke="#2A2A2A" strokeWidth="0.75" strokeDasharray="2 3" />
          {/* Ribbed neckline */}
          <path d="M110 40 Q140 55 170 40" fill="none" stroke="#2A2A2A" strokeWidth="1.5" />
          {/* DTF print area */}
          {view === 'front' ? (
            <g transform="translate(140 220)">
              <circle r="38" fill="none" stroke={p.print} strokeWidth="1" />
              <text
                textAnchor="middle"
                y="5"
                fill={p.print}
                fontFamily="monospace"
                fontSize="9"
                letterSpacing="3"
              >
                YOD
              </text>
            </g>
          ) : (
            <g transform="translate(140 180)">
              <text
                textAnchor="middle"
                fill={p.print}
                fontFamily="serif"
                fontSize="18"
                fontStyle="italic"
              >
                {title.split(' ')[0]}
              </text>
              <text
                textAnchor="middle"
                y="22"
                fill={p.print}
                fontFamily="serif"
                fontSize="18"
                fontStyle="italic"
              >
                {title.split(' ').slice(1).join(' ') || '.'}
              </text>
              <line x1="-40" y1="40" x2="40" y2="40" stroke={p.accent} strokeWidth="1" />
              <text
                textAnchor="middle"
                y="60"
                fill={p.print}
                fontFamily="monospace"
                fontSize="7"
                letterSpacing="2"
                opacity="0.7"
              >
                WEAR YOUR DEFINITION
              </text>
            </g>
          )}
        </g>
        <text
          x="200"
          y="470"
          textAnchor="middle"
          fill="#3F3F3F"
          fontFamily="monospace"
          fontSize="8"
          letterSpacing="2"
        >
          {view.toUpperCase()}
        </text>
      </svg>
    </div>
  );
}
