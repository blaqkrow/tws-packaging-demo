'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useMemo, useRef, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import { categories } from '@/data/categories';
import { searchProducts } from '@/data/products';

/* Category group definitions. Groups with a single slug act as shortcuts
   that navigate straight to the category page. */
const productGroups = [
  {
    name: 'Tapes',
    description: 'PVC, OPP, masking, cloth, kraft and printed tapes.',
    image: '/images/products-new/opp-tape-product.png',
    slugs: ['pvc-tapes', 'opp-tapes', 'printed-tape', 'masking-tape', 'cloth-tape', 'kraft-tape'],
  },
  {
    name: 'Stretch Film',
    description: 'Hand rolls, machine rolls and bundle wrap.',
    image: '/images/products-new/stretch-film.png',
    slugs: ['stretch-film', 'bundle-wrap'],
  },
  {
    name: 'Foam & Protection',
    description: 'PE foam rolls, laminated foam sheets and PE sheet rolls.',
    image: '/images/products-new/laminated-pe-foam.png',
    slugs: ['pe-foam-rolls', 'laminated-pe-foam-sheets', 'pe-sheet-roll'],
  },
  {
    name: 'Bubble Wrap & Paper',
    description: 'Air bubble pak, newsprint and corrugated paper rolls.',
    image: '/images/products-new/bubble-wrap.png',
    slugs: ['air-bubble-pak', 'newsprint-paper', 'corrugated-paper-roll'],
  },
  {
    name: 'Strapping & Tools',
    description: 'PP & PET bands, clips, tensioners, sealers and battery tools.',
    image: '/images/products-new/strapping-tools-display.png',
    slugs: ['strapping-bands', 'j-clip', 'o-clip', 'strapping-tensioner', 'strapping-sealer', 'strapping-tools'],
  },
  {
    name: 'Edgeboard Protectors',
    description: 'Kraft edgeboard corner protectors in standard sizes.',
    image: '/images/products-new/edgeboard.png',
    slugs: ['edgeboard-protectors'],
  },
  {
    name: 'Dunnage Air Bags',
    description: 'Inflatable dunnage bags for container and truck void fill.',
    image: '/images/products-new/dunnage-airbag.png',
    slugs: ['dunnage-air-bags'],
  },
  {
    name: 'Packing List Envelopes',
    description: 'Self-adhesive packing list envelopes in plain and printed.',
    image: '/images/products-new/packing-envelope-group.jpeg',
    slugs: ['packing-list-envelopes'],
  },
  {
    name: 'Desiccant',
    description: 'Moisture-absorbing desiccant packs from 5g to 500g.',
    image: '/images/products-new/silica-gel.png',
    slugs: ['desiccant'],
  },
  {
    name: 'Customized Carton Box',
    description: 'Plain RSC carton boxes — customised sizes and constructions.',
    image: '/images/products-new/carton-box-display.png',
    slugs: ['carton-box'],
  },
  {
    name: 'Mic Pac',
    description: 'Loose-fill foam peanuts for void fill and fragile protection.',
    image: '/images/products-new/mic-pac.png',
    slugs: ['mic-pac'],
  },
  {
    name: 'Impact Labels',
    description: 'SpotSee shock and tilt indicators — Shockwatch, Shockwatch 2, and Tiltwatch XTR.',
    image: '/images/products-new/impact-shockwatch-label.jpg',
    slugs: ['impact-labels'],
  },
  {
    name: 'Pallets',
    description: 'Wooden, plastic, and paper pallets for storage and shipping.',
    image: '/images/products-new/pallets-display.png',
    slugs: ['pallets'],
  },
];

function ProductsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const productGridRef = useRef<HTMLDivElement>(null);

  const selectedGroupName = searchParams.get('group') || '';
  const activeGroup = productGroups.find((g) => g.name === selectedGroupName);

  // Pre-fill search from URL query parameter
  useEffect(() => {
    const q = searchParams.get('q');
    if (q) setSearchQuery(q);
  }, [searchParams]);

  // Scroll to top when group or search changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [selectedGroupName, searchQuery]);

  /* Categories inside the currently selected group */
  const groupCategories = useMemo(() => {
    if (!activeGroup) return [];
    return categories.filter((c) => activeGroup.slugs.includes(c.slug));
  }, [activeGroup]);

  /* Search results */
  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return searchProducts(searchQuery);
  }, [searchQuery]);

  const selectGroup = (group: typeof productGroups[number]) => {
    // Shortcut: if a group has a single category, go straight to it.
    if (group.slugs.length === 1) {
      router.push(`/category/${group.slugs[0]}`);
      return;
    }
    router.push(`/products?group=${encodeURIComponent(group.name)}`);
  };

  const clearGroup = () => {
    router.push('/products');
  };

  const isSearching = searchQuery.trim().length > 0;
  const isBrowsingGroup = !!activeGroup && !isSearching;
  const isBrowsingAllGroups = !activeGroup && !isSearching;

  return (
    <>
      {/* Page Hero */}
      <section className="page-title-section">
        <div className="container">
          <div className="breadcrumb" style={{ marginBottom: 'var(--space-3)' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,.6)' }}>Home</Link>
            <span className="sep">/</span>
            <span style={{ color: 'var(--red-300)' }}>Products</span>
            {activeGroup && (
              <>
                <span className="sep">/</span>
                <span style={{ color: 'rgba(255,255,255,.8)' }}>{activeGroup.name}</span>
              </>
            )}
          </div>
          <h1>{activeGroup ? activeGroup.name : 'Our Products'}</h1>
          <p>
            {activeGroup
              ? activeGroup.description
              : 'Browse our complete catalogue of packaging materials, machinery tools, and supplies'}
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="products-filter-bar">
        <div className="container">
          <div className="filter-row">
            <div className="filter-search">
              <span className="filter-search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Browse by Group (default view) */}
      {isBrowsingAllGroups && (
        <section className="section-sm">
          <div className="container">
            <div className="section-header">
              <div>
                <h2>Browse by <span>Category</span></h2>
                <p>Select a product group to explore</p>
              </div>
            </div>
            <div className="product-group-grid">
              {productGroups.map((group) => (
                <button
                  key={group.name}
                  type="button"
                  onClick={() => selectGroup(group)}
                  className="product-group-card"
                  style={{ border: 'none', background: 'transparent', textAlign: 'left', cursor: 'pointer' }}
                >
                  <div className="product-group-img">
                    <Image
                      src={group.image}
                      alt={group.name}
                      width={400}
                      height={300}
                      style={{ objectFit: 'contain', width: '100%', height: '100%', background: '#fff' }}
                    />
                    <div className="product-group-overlay">
                      <h3>{group.name}</h3>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Categories in selected group */}
      {isBrowsingGroup && (
        <section className="section-sm">
          <div className="container">
            <button type="button" onClick={clearGroup} className="back-btn">
              ← Back to All Groups
            </button>
            <div className="section-header">
              <div>
                <h2>{activeGroup!.name}</h2>
                <p>Choose a category</p>
              </div>
            </div>
            <div className="product-group-grid">
              {groupCategories.map((cat) => (
                <Link key={cat.id} href={`/category/${cat.slug}`} className="product-group-card" style={{ textDecoration: 'none' }}>
                  <div className="product-group-img">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      width={400}
                      height={300}
                      style={{ objectFit: 'contain', width: '100%', height: '100%', background: '#fff' }}
                    />
                    <div className="product-group-overlay">
                      <h3>{cat.name}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Search Results */}
      {isSearching && (
        <section className="section" ref={productGridRef}>
          <div className="container">
            <div className="section-header">
              <div>
                <h2>
                  {filteredProducts.length} <span>Product{filteredProducts.length !== 1 ? 's' : ''}</span>
                </h2>
                <p>Showing results for &ldquo;{searchQuery}&rdquo;</p>
              </div>
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
                <p>Try adjusting your search.</p>
                <button className="btn btn-primary" onClick={() => setSearchQuery('')}>
                  Clear Search
                </button>
              </div>
            )}
          </div>
        </section>
      )}

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

export default function ProductsPage() {
  return (
    <Suspense>
      <ProductsContent />
    </Suspense>
  );
}
