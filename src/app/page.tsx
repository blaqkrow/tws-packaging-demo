'use client';

import Link from 'next/link';
import Image from 'next/image';
import ProductCard from '@/components/ProductCard';
import { getFeaturedProducts } from '@/data/products';
import { categories } from '@/data/categories';

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>
              Your Trusted <span>Packaging</span> Supply Partner
            </h1>
            <p>
              Quality tapes, strapping bands, carton boxes, bubble wrap and more — all in one place. Serving businesses across Singapore with fast delivery and competitive wholesale pricing.
            </p>
            <div className="hero-cta">
              <Link href="/category/opp-tapes" className="btn btn-primary btn-lg">
                Browse Products
              </Link>
              <Link href="/account/login" className="btn btn-outline btn-lg" style={{ borderColor: 'rgba(255,255,255,.2)', color: '#fff' }}>
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="value-strip">
        <div className="container">
          <div className="value-grid">
            <div className="value-item">
              <div className="value-icon">🚚</div>
              <h4>Fast Delivery</h4>
              <p>Island-wide delivery across Singapore. Free for orders above $200.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">💰</div>
              <h4>Wholesale Pricing</h4>
              <p>Competitive rates for bulk orders. The more you buy, the more you save.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">📦</div>
              <h4>Wide Selection</h4>
              <p>From tapes to stretch film — everything you need for packaging in one shop.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">✅</div>
              <h4>Quality Assured</h4>
              <p>We source only from trusted manufacturers. Every product is quality tested.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div>
              <h2>Featured <span>Products</span></h2>
              <p>Our most popular packaging supplies, hand-picked for you.</p>
            </div>
            <Link href="/category/opp-tapes" className="btn btn-outline">
              View All →
            </Link>
          </div>
          <div className="product-grid">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-sm" style={{ background: 'var(--gray-100)' }}>
        <div className="container">
          <div className="section-header">
            <div>
              <h2>Shop by <span>Category</span></h2>
              <p>Find exactly what you need from our organised product categories.</p>
            </div>
          </div>
          <div className="category-grid">
            {categories.map((cat) => (
              <Link key={cat.id} href={`/category/${cat.slug}`} className="category-card">
                <Image src={cat.image} alt={cat.name} width={400} height={300} style={{ objectFit: 'cover' }} />
                <div className="category-card-overlay">
                  <h3>{cat.name}</h3>
                  <p>{cat.description.substring(0, 60)}…</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
