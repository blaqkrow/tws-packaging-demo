'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import ProductCard from '@/components/ProductCard';
import QuoteForm from '@/components/QuoteForm';
import { getFeaturedProducts } from '@/data/products';
import { categories } from '@/data/categories';

/* Parent category groups for homepage display */
const productGroups = [
  {
    name: 'Tapes',
    icon: '🔖',
    image: '/images/products-new/opp-tape-transparent.png',
    subcategories: ['pvc-tapes', 'opp-tapes', 'printed-tape', 'masking-tape', 'cloth-tape', 'kraft-tape'],
  },
  {
    name: 'Stretch Film',
    icon: '🎞️',
    image: '/images/products-new/stretch-film.png',
    subcategories: ['stretch-film', 'bundle-wrap'],
  },
  {
    name: 'Foam & Protection',
    icon: '🛡️',
    image: '/images/products-new/pe-foam-roll.png',
    subcategories: ['pe-foam-rolls', 'laminated-pe-foam-sheets', 'pe-sheet-roll'],
  },
  {
    name: 'Edgeboard',
    icon: '📐',
    image: '/images/products-new/edgeboard.png',
    subcategories: ['edgeboard-protectors'],
  },
  {
    name: 'Air Bubble Pak',
    icon: '💨',
    image: '/images/products-new/bubble-wrap.png',
    subcategories: ['air-bubble-pak'],
  },
  {
    name: 'Strapping',
    icon: '🔗',
    image: '/images/products-new/strapping-yellow.png',
    subcategories: ['strapping-bands', 'j-clip', 'o-clip', 'strapping-tensioner', 'strapping-sealer'],
  },
  {
    name: 'Packaging Supplies',
    icon: '📦',
    image: '/images/products-new/dunnage-airbag.png',
    subcategories: ['dunnage-air-bags', 'packing-list-envelopes', 'newsprint-paper', 'silica-gel', 'corrugated-paper-roll', 'mic-pac'],
  },
];

/* Hero carousel images */
const heroImages = [
  { src: '/images/hero/hero-1.png', alt: 'Modern packaging warehouse with pallets and forklift' },
  { src: '/images/hero/hero-2.png', alt: 'Professional packaging materials - tape, stretch film, bubble wrap' },
  { src: '/images/hero/hero-3.png', alt: 'Warehouse worker wrapping pallet with stretch film' },
];


export default function HomePage() {
  const featured = getFeaturedProducts();
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-content">
              <h1>
                Your One-Stop <span>Packaging</span> Supplies
              </h1>
              <p>
                Machine, materials, solution for your business. Adhesive tapes, stretch film, foam rolls, bubble wrap, strapping bands and more — all from one reliable manufacturer and distributor.
              </p>
              <div className="hero-cta">
                <Link href="/products" className="btn btn-primary btn-lg">
                  View Catalogue
                </Link>
                <button className="btn btn-lg" style={{ background: 'rgba(255,255,255,.15)', color: '#fff', borderColor: 'rgba(255,255,255,.25)' }} onClick={() => setQuoteOpen(true)}>
                  Get a Quote
                </button>
              </div>
            </div>
            <div className="hero-carousel">
              {heroImages.map((img, index) => (
                <div
                  key={img.src}
                  className={`hero-carousel-slide ${index === currentSlide ? 'active' : ''}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={600}
                    height={450}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    priority={index === 0}
                  />
                </div>
              ))}
              <div className="hero-carousel-dots">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    className={`hero-carousel-dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Strip — Address & Hours */}
      <section className="info-strip">
        <div className="container">
          <div className="info-strip-items">
            <div className="info-strip-item">
              <span className="info-strip-icon">📍</span>
              <a href="https://maps.google.com/?q=11+Gul+Link,+Singapore+629381" target="_blank" rel="noopener noreferrer">11 Gul Link, Singapore 629381</a>
            </div>
            <div className="info-strip-item">
              <span className="info-strip-icon">🕐</span>
              <span>Mon–Fri 8AM–5PM | Sat 8AM–12PM</span>
            </div>
            <div className="info-strip-item">
              <span className="info-strip-icon">📞</span>
              <a href="tel:+6565587120">+65 6558 7120</a>
            </div>
            <div className="info-strip-item">
              <span className="info-strip-icon">📧</span>
              <a href="mailto:sales@megapac.sg">sales@megapac.sg</a>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="value-strip">
        <div className="container">
          <div className="value-grid">
            <div className="value-item">
              <div className="value-icon">🏭</div>
              <h4>Manufacturer &amp; Distributor</h4>
              <p>One of the leading manufacturers and distributors of adhesive tapes, packaging materials and associated machinery.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🚚</div>
              <h4>Fast Delivery</h4>
              <p>Island-wide delivery across Singapore &amp; Malaysia. Quick turnaround for urgent orders.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🔧</div>
              <h4>Custom Solutions</h4>
              <p>Printed tapes, custom film sizes, laminated materials — we customise solutions to your exact requirements.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">📦</div>
              <h4>Wide Selection</h4>
              <p>Packaging materials, machinery tools, and construction adhesive — everything your business needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Products — Parent Categories */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div>
              <h2>Our <span>Products</span></h2>
              <p>Browse our full catalogue organised by product type.</p>
            </div>
            <Link href="/products" className="btn btn-outline">
              View All →
            </Link>
          </div>
          <div className="product-group-grid">
            {productGroups.map((group) => {
              const groupCats = categories.filter((c) => group.subcategories.includes(c.slug));
              return (
                <div key={group.name} className="product-group-card">
                  <Link href={`/category/${group.subcategories[0]}`} className="product-group-img">
                    <Image src={group.image} alt={group.name} width={400} height={300} style={{ objectFit: 'contain', width: '100%', height: '100%', background: '#fff' }} />
                    <div className="product-group-overlay">
                      <h3>{group.name}</h3>
                    </div>
                  </Link>
                  {groupCats.length > 1 && (
                    <div className="product-group-subs">
                      {groupCats.map((cat) => (
                        <Link key={cat.id} href={`/category/${cat.slug}`} className="product-group-sub">
                          {cat.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-sm" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="section-header">
            <div>
              <h2>Featured <span>Products</span></h2>
              <p>Our most popular packaging supplies for businesses in Singapore.</p>
            </div>
            <Link href="/products" className="btn btn-outline">
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

      {/* About Us Teaser */}
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <div>
              <h2>About <span>Megapac</span></h2>
              <p>
                Megapac Industries Pte Ltd is proud to be one of the leading manufacturers and distributors of adhesive tapes, packaging materials and associated machinery in the market. We work with both local and international clients from a wide range of industries.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap', marginBottom: 'var(--space-5)', marginTop: 'var(--space-4)' }}>
                <div className="badge badge-success">✓ BizSafe 3 Certified</div>
                <div className="badge badge-info">✓ Local &amp; International Clients</div>
              </div>
              <Link href="/about" className="btn btn-primary">
                Learn More About Us →
              </Link>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Image src="/images/megapac-logo-new.png" alt="Megapac Industries" width={400} height={200} style={{ objectFit: 'contain', maxWidth: '100%' }} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner" id="quote">
        <div className="container">
          <h2>Need Packaging Supplies?</h2>
          <p>Get a personalised quote from our sales team — no obligation, fast response.</p>
          <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-primary btn-lg" onClick={() => setQuoteOpen(true)}>
              Request a Quote
            </button>
            <a
              href="https://wa.me/6590482345?text=Hi%20Megapac%2C%20I%27m%20interested%20in%20your%20packaging%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg"
              style={{ background: '#25D366', color: '#fff', borderColor: '#25D366' }}
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <QuoteForm isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </>
  );
}
