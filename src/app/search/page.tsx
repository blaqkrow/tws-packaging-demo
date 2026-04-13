'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { searchProducts } from '@/data/products';

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const results = query ? searchProducts(query) : [];

  return (
    <>
      <section className="page-title-section">
        <div className="container">
          <div className="breadcrumb" style={{ marginBottom: 'var(--space-3)' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,.6)' }}>Home</Link>
            <span className="sep">/</span>
            <span style={{ color: 'var(--red-300)' }}>Search</span>
          </div>
          <h1>Search Results</h1>
          {query && <p>Showing results for &ldquo;{query}&rdquo;</p>}
        </div>
      </section>

      <section className="section">
        <div className="container">
          {results.length > 0 ? (
            <>
              <div className="section-header">
                <div>
                  <h2>{results.length} <span>Result{results.length !== 1 ? 's' : ''}</span></h2>
                </div>
              </div>
              <div className="product-grid">
                {results.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          ) : (
            <div className="empty-state">
              <div className="empty-state-icon">🔍</div>
              <h3>No results found</h3>
              <p>{query ? `We couldn't find any products matching "${query}". Try a different search term.` : 'Enter a search term to find products.'}</p>
              <Link href="/" className="btn btn-primary">Browse All Products</Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="section"><div className="container"><p>Loading...</p></div></div>}>
      <SearchContent />
    </Suspense>
  );
}
