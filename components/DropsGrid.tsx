'use client';

import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { fetchDropProducts } from '@/lib/api';
import type { Product } from '@/lib/types';

export default function DropsGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    fetchDropProducts('DROP-01')
      .then((data) => {
        if (mounted) setProducts(data);
      })
      .catch(console.error)
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section id="drops" className="relative py-24 md:py-32 bg-ink">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="brand-label text-accent mb-4">Curated · Drop 01</div>
            <h2 className="font-display text-display-lg text-bone">
              Six pieces. One <em className="not-italic text-accent">definition.</em>
            </h2>
          </div>
          <p className="max-w-sm text-fog text-sm leading-relaxed">
            Every garment in Drop 01 is heavyweight 240 GSM combed cotton, oversized cut,
            with DTF graphic prints engineered to outlast the season.
          </p>
        </div>

        {/* Grid */}
        {loading ? (
          <SkeletonGrid />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function SkeletonGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="animate-pulse">
          <div className="aspect-[4/5] bg-smoke mb-5" />
          <div className="h-5 w-1/2 bg-smoke mb-2" />
          <div className="h-4 w-1/3 bg-smoke" />
        </div>
      ))}
    </div>
  );
}
