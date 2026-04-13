'use client';

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { getProductsByCategory } from '@/data/products';
import { getCategoryBySlug, categories } from '@/data/categories';

export default function CategoryPage() {
  const params = useParams();
  const router = useRouter();
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
          <Link href="/products" className="btn btn-primary">Browse Products</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="page-title-section">
        <div className="container">
          <div className="breadcrumb" style={{ marginBottom: 'var(--space-3)' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,.6)' }}>Home</Link>
            <span className="sep">/</span>
            <Link href="/products" style={{ color: 'rgba(255,255,255,.6)' }}>Products</Link>
            <span className="sep">/</span>
            <span style={{ color: 'var(--red-300)' }}>{category.name}</span>
          </div>
          <h1>{category.name}</h1>
          <p>{category.description}</p>
        </div>
      </section>

      {/* Category Dropdown Navigation (replaces messy tabs) */}
      <section style={{ background: 'var(--white)', borderBottom: '1px solid var(--gray-100)', padding: 'var(--space-4) 0' }}>
        <div className="container">
          <div className="category-nav-row">
            <label className="category-nav-label">Switch Category:</label>
            <select
              className="filter-select"
              value={slug}
              onChange={(e) => router.push(`/category/${e.target.value}`)}
              style={{ maxWidth: '320px' }}
            >
              {categories.map((cat) => (
                <option key={cat.id} value={cat.slug}>{cat.name}</option>
              ))}
            </select>
            <Link href="/products" className="btn btn-outline btn-sm">
              ← All Products
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div>
              <h2>{products.length} <span>Product{products.length !== 1 ? 's' : ''}</span></h2>
              <p>Browse our {category.name.toLowerCase()} range.</p>
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
