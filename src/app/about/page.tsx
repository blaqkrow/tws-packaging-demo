'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const clientLogos = [
  { src: '/images/clients/samsung.png', alt: 'Samsung' },
  { src: '/images/clients/sony.png', alt: 'Sony' },
  { src: '/images/clients/hewlett-packard.jpg', alt: 'Hewlett Packard' },
  { src: '/images/clients/maersk.png', alt: 'Maersk' },
  { src: '/images/clients/dhl.jpg', alt: 'DHL' },
  { src: '/images/clients/dsv.png', alt: 'DSV' },
  { src: '/images/clients/ceva-logistics.png', alt: 'CEVA Logistics' },
  { src: '/images/clients/gxo.png', alt: 'GXO Logistics' },
  { src: '/images/clients/db-schenker.png', alt: 'DB Schenker' },
  { src: '/images/clients/kuehne-nagel.png', alt: 'Kuehne + Nagel' },
  { src: '/images/clients/ups.jpg', alt: 'UPS' },
  { src: '/images/clients/flex.png', alt: 'Flex' },
  { src: '/images/clients/courts.png', alt: 'Courts' },
  { src: '/images/clients/croda.png', alt: 'Croda' },
  { src: '/images/clients/infineon.png', alt: 'Infineon' },
  { src: '/images/clients/texas-instruments.png', alt: 'Texas Instruments' },
  { src: '/images/clients/bollore-logistics.png', alt: 'Bolloré Logistics' },
  { src: '/images/clients/best-denki.png', alt: 'Best Denki' },
  { src: '/images/clients/harvey-norman.png', alt: 'Harvey Norman' },
  { src: '/images/clients/expeditors.png', alt: 'Expeditors' },
  { src: '/images/clients/nippon-express.png', alt: 'Nippon Express' },
  { src: '/images/clients/yusen-logistics.png', alt: 'Yusen Logistics' },
  { src: '/images/clients/toll.png', alt: 'Toll' },
];
const expandableSections = [
  {
    title: 'Packaging & Warehousing Consultation',
    content: 'Our experienced team provides comprehensive packaging and warehousing consultation services. We assess your current packaging processes, identify areas for improvement, and recommend cost-effective solutions tailored to your specific needs. From material selection to packaging design optimization, we help businesses reduce waste, improve product protection, and streamline their packaging operations.',
  },
  {
    title: 'Sustainability',
    content: 'Megapac Industries is committed to sustainable packaging practices. We offer eco-friendly alternatives including biodegradable kraft tapes, recyclable materials, and reduced-waste packaging solutions. Our team stays up-to-date with the latest green packaging innovations to help our clients meet their environmental goals while maintaining product integrity and cost-efficiency.',
  },
  {
    title: 'Workplace Safety',
    content: 'As a BizSafe 3 certified company, workplace safety is at the core of our operations. We provide safe-to-use packaging tools and equipment, conduct regular safety assessments, and offer guidance on proper handling of packaging materials. Our products are designed to minimize workplace injuries and comply with Singapore\'s Workplace Safety and Health Act.',
  },
  {
    title: 'Rental & User Program',
    content: 'Megapac offers flexible rental and user programs for packaging machinery and equipment. Whether you need strapping machines, stretch wrapping systems, or tape dispensers, our rental program provides access to quality equipment without the upfront capital investment. We include maintenance, training, and technical support as part of the program.',
  },
  {
    title: 'Automation & Engineering',
    content: 'We provide end-to-end packaging automation and engineering solutions to help businesses scale their operations. From semi-automatic taping machines to fully automated pallet wrapping systems, we design, install, and maintain packaging production lines that increase throughput, reduce labor costs, and ensure consistent packaging quality.',
  },
  {
    title: 'Spare Parts & Technical Support',
    content: 'Our dedicated technical support team ensures your packaging machinery operates at peak performance. We stock a comprehensive range of spare parts for all major packaging equipment brands and provide prompt on-site repair services. Our preventive maintenance programs help minimize downtime and extend the lifespan of your equipment.',
  },
];

export default function AboutPage() {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <>
      {/* Page Hero */}
      <section className="page-title-section">
        <div className="container">
          <div className="breadcrumb" style={{ marginBottom: 'var(--space-3)' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,.6)' }}>Home</Link>
            <span className="sep">/</span>
            <span style={{ color: 'var(--red-300)' }}>About Us</span>
          </div>
          <h1>About Megapac Industries</h1>
          <p>Your trusted packaging partner in Singapore &amp; Malaysia</p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section">
        <div className="container">
          <div className="about-page-grid">
            <div className="about-page-content">
              <h2>Who We <span>Are</span></h2>
              <p>
                Megapac Industrial Pte Ltd is a Singapore-based one-stop industrial packaging solutions provider, delivering materials and equipment to support business operations across multiple industries.
              </p>
              <p>
                With over 20 years of industry experience, we have established a strong track record working with both local and international clients. Our expertise lies in supplying the most suitable adhesive tapes and packaging solutions based on specific operational requirements and budget considerations.
              </p>
              <p>
                We support businesses in logistics, warehousing, manufacturing, and distribution with a reliable range of products, including adhesive tapes, stretch film, and protective packaging.
              </p>
              <p>
                Leveraging the latest technologies and industry knowledge, we deliver customised, high-performance solutions backed by consistent quality, cost efficiency, and dependable supply.
              </p>
            </div>
            <div className="about-page-image">
              <Image
                src="/images/megapac-logo-new.png"
                alt="Megapac Industries — Packaging DNA"
                width={500}
                height={250}
                style={{ objectFit: 'contain', maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="section-header" style={{ justifyContent: 'center', textAlign: 'center' }}>
            <div>
              <h2>Why Choose <span>Us</span></h2>
              <p>At Megapac, we understand that packaging plays a critical role in daily operations. We are committed to providing reliable solutions that businesses can depend on.</p>
            </div>
          </div>

          <div className="industries-grid">
            <div className="industry-card">
              <div className="industry-icon">📦</div>
              <h4>One-Stop Packaging Solution</h4>
              <p>A complete range of packaging materials and equipment to support all your operational needs.</p>
            </div>
            <div className="industry-card">
              <div className="industry-icon">⚙️</div>
              <h4>Customised Solutions</h4>
              <p>Advanced technologies enable us to tailor products and solutions to your exact requirements.</p>
            </div>
            <div className="industry-card">
              <div className="industry-icon">💰</div>
              <h4>High Quality, Cost-Effective Products</h4>
              <p>Designed to deliver consistent performance while optimising operational costs.</p>
            </div>
            <div className="industry-card">
              <div className="industry-icon">🤝</div>
              <h4>Dedicated Sales Support</h4>
              <p>Experienced team with strong product knowledge and proven customer service capabilities.</p>
            </div>
            <div className="industry-card">
              <div className="industry-icon">✅</div>
              <h4>Strict Quality Assurance</h4>
              <p>Products are checked by quality experts to ensure they meet international standards.</p>
            </div>
            <div className="industry-card">
              <div className="industry-icon">🚚</div>
              <h4>Reliable Supply &amp; Delivery</h4>
              <p>Ready stock and efficient logistics to ensure consistent and timely fulfilment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Stats */}
      <section className="section">
        <div className="container">
          <div className="section-header" style={{ justifyContent: 'center', textAlign: 'center' }}>
            <div>
              <h2>Trusted <span>Certifications</span></h2>
              <p>Trusted by businesses across Singapore and Malaysia</p>
            </div>
          </div>

          {/* Badges */}
          <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap', justifyContent: 'center', marginBottom: 'var(--space-10)' }}>
            <div className="badge badge-success" style={{ fontSize: '14px', padding: '8px 20px' }}>✓ BizSafe 3 Certified</div>
            <div className="badge badge-info" style={{ fontSize: '14px', padding: '8px 20px' }}>✓ Local &amp; International Clients</div>
            <div className="badge badge-info" style={{ fontSize: '14px', padding: '8px 20px' }}>✓ ISO Quality Standards</div>
          </div>

          {/* Stats */}
          <div className="about-stats" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div className="about-stat">
              <div className="number">19</div>
              <div className="label">Product Categories</div>
            </div>
            <div className="about-stat">
              <div className="number">36+</div>
              <div className="label">Product SKUs</div>
            </div>
            <div className="about-stat">
              <div className="number">SG/MY</div>
              <div className="label">Serving SG &amp; MY</div>
            </div>
          </div>
        </div>
      </section>

      {/* Expandable Sections */}
      <section className="section-sm" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div className="section-header" style={{ justifyContent: 'center', textAlign: 'center' }}>
            <div>
              <h2>Our <span>Services</span></h2>
              <p>Comprehensive packaging solutions beyond just products</p>
            </div>
          </div>
          <div className="expandable-sections">
            {expandableSections.map((section, index) => (
              <div key={index} className={`expandable-item ${openSection === index ? 'open' : ''}`}>
                <button
                  className="expandable-header"
                  onClick={() => toggleSection(index)}
                  aria-expanded={openSection === index}
                >
                  <h4>{section.title}</h4>
                  <span className="expandable-icon">{openSection === index ? '−' : '+'}</span>
                </button>
                <div className="expandable-content">
                  <p>{section.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section-sm" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="section-header" style={{ justifyContent: 'center', textAlign: 'center' }}>
            <div>
              <h2>Industries We <span>Serve</span></h2>
              <p>We supply packaging solutions to businesses across a wide range of industries</p>
            </div>
          </div>
          <div className="industries-grid">
            {[
              { icon: '🏭', name: 'Manufacturing', desc: 'Industrial packaging, palletising, and protection materials' },
              { icon: '📦', name: 'E-Commerce & Retail', desc: 'Shipping supplies, carton sealing, and product packaging' },
              { icon: '🔬', name: 'Electronics', desc: 'ESD protection, foam cushioning, and anti-static packaging' },
              { icon: '🏗️', name: 'Construction', desc: 'Surface protection, masking, and heavy-duty wrapping' },
              { icon: '🍽️', name: 'Food & Beverage', desc: 'Hygienic packaging, desiccants, and void fill solutions' },
              { icon: '💊', name: 'Pharmaceuticals', desc: 'Moisture control, edge protection, and secure transit packaging' },
            ].map((ind) => (
              <div key={ind.name} className="industry-card">
                <div className="industry-icon">{ind.icon}</div>
                <h4>{ind.name}</h4>
                <p>{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies We Serve — Client Logos */}
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
                    width={160}
                    height={80}
                    style={{ objectFit: 'contain', width: '100%', height: '100%', filter: 'grayscale(0.3)', opacity: 0.85 }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products CTA */}
      <section className="section">
        <div className="container">
          <div className="section-header" style={{ justifyContent: 'center', textAlign: 'center' }}>
            <div>
              <h2>Our <span>Products</span></h2>
              <p>Browse our extensive selection of packaging materials, machinery tools, general product tools and construction adhesive.</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/products" className="btn btn-primary btn-lg">
              Browse Products →
            </Link>
            <Link href="/contact" className="btn btn-outline btn-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container">
          <h2>Need Packaging Supplies?</h2>
          <p>Get a personalised quote from our sales team — no obligation, fast response.</p>
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
