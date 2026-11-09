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
      .then((data) => mounted && setProducts(data))
      .catch(console.error)
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section id="drops" className="section">
      <div className="section-head">
        <span className="small">Drop 01</span>
        <h2>The first <em>YOD</em> drop</h2>
        <p>Three signature pieces. Heavyweight 240 GSM combed cotton, oversized cut, prints engineered to outlast the season.</p>
      </div>
      <div className="cards">
        {loading
          ? Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="card" aria-hidden>
                <div className="visual" />
                <div className="body" style={{ minHeight: 220 }} />
              </div>
            ))
          : products.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  );
}
