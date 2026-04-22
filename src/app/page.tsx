'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import ProductCard from '@/components/ProductCard';
import QuoteForm from '@/components/QuoteForm';
import { getFeaturedProducts } from '@/data/products';

const clientLogos = [
  { src: '/images/clients/samsung.png', alt: 'Samsung' },
  { src: '/images/clients/sony.png', alt: 'Sony' },
  { src: '/images/clients/hewlett-packard.jpg', alt: 'Hewlett Packard' },
  { src: '/images/clients/maersk.jpg', alt: 'Maersk' },
  { src: '/images/clients/dhl.jpg', alt: 'DHL' },
  { src: '/images/clients/dsv.png', alt: 'DSV' },
  { src: '/images/clients/ceva-logistics.png', alt: 'CEVA Logistics' },
  { src: '/images/clients/gxo.png', alt: 'GXO Logistics' },
  { src: '/images/clients/db-schenker.jpg', alt: 'DB Schenker' },
  { src: '/images/clients/kuehne-nagel.jpg', alt: 'Kuehne + Nagel' },
  { src: '/images/clients/ups.jpg', alt: 'UPS' },
  { src: '/images/clients/fedex.jpg', alt: 'FedEx' },
  { src: '/images/clients/flex.png', alt: 'Flex' },
  { src: '/images/clients/courts.png', alt: 'Courts' },
  { src: '/images/clients/croda.png', alt: 'Croda' },
  { src: '/images/clients/infineon.png', alt: 'Infineon' },
  { src: '/images/clients/texas-instruments.png', alt: 'Texas Instruments' },
  { src: '/images/clients/bollore-logistics.png', alt: 'Bolloré Logistics' },
  { src: '/images/clients/best-denki.png', alt: 'Best Denki' },
  { src: '/images/clients/harvey-norman.jpg', alt: 'Harvey Norman' },
  { src: '/images/clients/expeditors.png', alt: 'Expeditors' },
  { src: '/images/clients/nippon-express.png', alt: 'Nippon Express' },
  { src: '/images/clients/yusen-logistics.png', alt: 'Yusen Logistics' },
  { src: '/images/clients/toll.png', alt: 'Toll' },
];

const services = [
  { icon: '📋', title: 'Packaging & Warehousing Consultation', content: 'Our experienced team assesses your current packaging processes, identifies areas for improvement, and recommends cost-effective solutions tailored to your specific needs.' },
  { icon: '♻️', title: 'Sustainability', content: 'We offer eco-friendly alternatives including biodegradable kraft tapes, recyclable materials, and reduced-waste packaging solutions to help meet environmental goals.' },
  { icon: '🛡️', title: 'Workplace Safety', content: 'As a BizSafe 3 certified company, we provide safe-to-use packaging tools and equipment with regular safety assessments and proper handling guidance.' },
  { icon: '🔄', title: 'Rental & User Program', content: 'Flexible rental programs for packaging machinery — access quality equipment without upfront capital investment, with maintenance and training included.' },
  { icon: '⚙️', title: 'Automation & Engineering', content: 'End-to-end packaging automation from semi-automatic taping machines to fully automated pallet wrapping systems that increase throughput and reduce costs.' },
  { icon: '🔧', title: 'Spare Parts & Technical Support', content: 'Comprehensive spare parts for all major packaging equipment brands with prompt on-site repair and preventive maintenance programs.' },
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

      {/* Companies We Serve — Auto-scrolling Logos */}
      <section className="client-logos-section">
        <div className="container">
          <div className="section-header" style={{ justifyContent: 'center', textAlign: 'center' }}>
            <div>
              <h2>Companies We <span>Serve</span></h2>
              <p>Trusted by leading brands across Singapore and Malaysia</p>
            </div>
          </div>
          <div className="client-logos-marquee">
            <div className="client-logos-track">
              {[...clientLogos, ...clientLogos].map((logo, index) => (
                <div key={index} className="client-logo-item">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={240}
                    height={120}
                    style={{ objectFit: 'contain', width: '100%', height: '100%', filter: 'grayscale(0.1)', opacity: 0.95 }}
                  />
                </div>
              ))}
            </div>
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

      {/* Our Services */}
      <section className="section">
        <div className="container">
          <div className="section-header" style={{ justifyContent: 'center', textAlign: 'center' }}>
            <div>
              <h2>Our <span>Services</span></h2>
              <p>Comprehensive packaging solutions beyond just products</p>
            </div>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <div className="service-content">
                  <h4>{service.title}</h4>
                  <p>{service.content}</p>
                </div>
              </div>
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
            <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
              <Image src="/images/warehouse/warehouse-1.jpg" alt="Megapac Industries warehouse" width={600} height={400} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
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
