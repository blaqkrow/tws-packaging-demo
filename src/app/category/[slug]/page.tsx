'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { getProductsByCategory } from '@/data/products';
import { getCategoryBySlug, categories } from '@/data/categories';

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;
  const category = getCategoryBySlug(slug);
  const products = getProductsByCategory(slug);

  if (!category) {
    return (
      <div className="section">
        <div className="container empty-state">
          <div className="empty-state-icon">📦</div>
          <h3>Category Not Found</h3>
          <p>The category you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/" className="btn btn-primary">Go Home</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="page-title-section">
        <div className="container">
          <div className="breadcrumb" style={{ marginBottom: 'var(--space-3)' }}>
            <Link href="/" style={{ color: 'var(--navy-200)' }}>Home</Link>
            <span className="sep">/</span>
            <span style={{ color: 'var(--amber-400)' }}>{category.name}</span>
          </div>
          <h1>{category.name}</h1>
          <p>{category.description}</p>
        </div>
      </section>

      {/* Category Navigation */}
      <section style={{ background: 'var(--white)', borderBottom: '1px solid var(--gray-100)', padding: 'var(--space-4) 0' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/category/${cat.slug}`}
                className="btn btn-sm"
                style={{
                  background: cat.slug === slug ? 'var(--amber-500)' : 'var(--gray-100)',
                  color: cat.slug === slug ? '#fff' : 'var(--gray-700)',
                  borderRadius: 'var(--radius-full)',
                }}
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div>
              <h2>{products.length} <span>Product{products.length !== 1 ? 's' : ''}</span></h2>
              <p>Browse our {category.name.toLowerCase()} collection.</p>
            </div>
          </div>
          {products.length > 0 ? (
            <div className="product-grid">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-state-icon">📦</div>
              <h3>No products yet</h3>
              <p>Check back soon — we&apos;re adding new items regularly!</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
