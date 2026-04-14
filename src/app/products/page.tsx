'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useMemo, useRef } from 'react';
import ProductCard from '@/components/ProductCard';
import { categories } from '@/data/categories';
import { products, searchProducts } from '@/data/products';

/* Product group definitions for the dropdown */
const productGroups = [
  {
    name: 'All Products',
    slugs: [] as string[], // empty = all
  },
  {
    name: 'Tapes',
    slugs: ['pvc-tapes', 'opp-tapes', 'printed-tape', 'masking-tape', 'cloth-tape', 'kraft-tape'],
  },
  {
    name: 'Stretch Film',
    slugs: ['stretch-film', 'bundle-wrap'],
  },
  {
    name: 'Foam & Protection',
    slugs: ['pe-foam-rolls', 'laminated-pe-foam-sheets', 'pe-sheet-roll'],
  },
  {
    name: 'Bubble Wrap & Paper',
    slugs: ['air-bubble-pak', 'newsprint-paper', 'corrugated-paper-roll'],
  },
  {
    name: 'Strapping & Tools',
    slugs: ['strapping-bands'],
  },
  {
    name: 'Packaging Supplies',
    slugs: ['edgeboard-protectors', 'dunnage-air-bags', 'packing-list-envelopes', 'silica-gel'],
  },
];

export default function ProductsPage() {
  const [selectedGroup, setSelectedGroup] = useState('All Products');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const productGridRef = useRef<HTMLDivElement>(null);

  const activeGroup = productGroups.find((g) => g.name === selectedGroup);

  /* Get categories in the selected group */
  const groupCategories = useMemo(() => {
    if (!activeGroup || activeGroup.slugs.length === 0) return categories;
    return categories.filter((c) => activeGroup.slugs.includes(c.slug));
  }, [activeGroup]);

  /* Filter products */
  const filteredProducts = useMemo(() => {
    let result = products.filter((p) => p.isActive);

    // Apply search
    if (searchQuery.trim()) {
      result = searchProducts(searchQuery);
    }

    // Apply group filter
    if (activeGroup && activeGroup.slugs.length > 0) {
      result = result.filter((p) => activeGroup.slugs.includes(p.categorySlug));
    }

    // Apply category filter
    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.categorySlug === selectedCategory);
    }

    return result;
  }, [activeGroup, selectedCategory, searchQuery]);

  const handleGroupChange = (groupName: string) => {
    setSelectedGroup(groupName);
    setSelectedCategory('all');
    setTimeout(() => productGridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
  };

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setTimeout(() => productGridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
  };

  return (
    <>
      {/* Page Hero */}
      <section className="page-title-section">
        <div className="container">
          <div className="breadcrumb" style={{ marginBottom: 'var(--space-3)' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,.6)' }}>Home</Link>
            <span className="sep">/</span>
            <span style={{ color: 'var(--red-300)' }}>Products</span>
          </div>
          <h1>Our Products</h1>
          <p>Browse our complete catalogue of packaging materials, machinery tools, and supplies</p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="products-filter-bar">
        <div className="container">
          <div className="filter-row">
            {/* Search */}
            <div className="filter-search">
              <span className="filter-search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Group Dropdown */}
            <div className="filter-select-wrap">
              <label>Category Group</label>
              <select
                className="filter-select"
                value={selectedGroup}
                onChange={(e) => handleGroupChange(e.target.value)}
              >
                {productGroups.map((g) => (
                  <option key={g.name} value={g.name}>{g.name}</option>
                ))}
              </select>
            </div>

            {/* Category Dropdown */}
            <div className="filter-select-wrap">
              <label>Product Type</label>
              <select
                className="filter-select"
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
              >
                <option value="all">All Types ({groupCategories.length})</option>
                {groupCategories.map((c) => (
                  <option key={c.id} value={c.slug}>{c.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Category Cards (when showing all) */}
      {selectedGroup === 'All Products' && selectedCategory === 'all' && !searchQuery.trim() && (
        <section className="section-sm">
          <div className="container">
            <div className="section-header">
              <div>
                <h2>Browse by <span>Category</span></h2>
                <p>Select a product category to explore</p>
              </div>
            </div>
            <div className="product-group-grid">
              {categories.map((cat) => (
                <div key={cat.id} className="product-group-card" onClick={() => setSelectedCategory(cat.slug)} style={{ cursor: 'pointer' }}>
                  <div className="product-group-img">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      width={400}
                      height={300}
                      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    />
                    <div className="product-group-overlay">
                      <h3>{cat.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Product Grid */}
      <section className="section" ref={productGridRef}>
        <div className="container">
          <div className="section-header">
            <div>
              <h2>
                {filteredProducts.length} <span>Product{filteredProducts.length !== 1 ? 's' : ''}</span>
                {selectedCategory !== 'all' && (
                  <span style={{ fontSize: '18px', fontWeight: 400, color: 'var(--gray-500)', marginLeft: '8px' }}>
                    in {categories.find((c) => c.slug === selectedCategory)?.name}
                  </span>
                )}
              </h2>
              {searchQuery && <p>Showing results for &ldquo;{searchQuery}&rdquo;</p>}
            </div>
            {selectedCategory !== 'all' && (
              <button className="btn btn-outline btn-sm" onClick={() => setSelectedCategory('all')}>
                ← Show All
              </button>
            )}
          </div>

          {filteredProducts.length > 0 ? (
            <div className="product-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-state-icon">🔍</div>
              <h3>No products found</h3>
              <p>Try adjusting your search or filters.</p>
              <button className="btn btn-primary" onClick={() => { setSearchQuery(''); setSelectedGroup('All Products'); setSelectedCategory('all'); }}>
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container">
          <h2>Can&apos;t Find What You Need?</h2>
          <p>Contact our sales team — we carry many more products and can customise solutions for your business.</p>
          <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/6590482345?text=Hi%20Megapac%2C%20I%27m%20interested%20in%20your%20packaging%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg"
              style={{ background: '#25D366', color: '#fff', borderColor: '#25D366' }}
            >
              💬 WhatsApp Us
            </a>
            <Link href="/contact" className="btn btn-lg" style={{ background: 'rgba(255,255,255,.15)', color: '#fff', borderColor: 'rgba(255,255,255,.25)' }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
