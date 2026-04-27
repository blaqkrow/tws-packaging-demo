'use client';

import Image from 'next/image';
import Link from 'next/link';

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
  {
    icon: '📋',
    title: 'Packaging & Warehousing Consultation',
    content: 'Our experienced team provides comprehensive packaging and warehousing consultation services. We assess your current packaging processes, identify areas for improvement, and recommend cost-effective solutions tailored to your specific needs.',
  },
  {
    icon: '♻️',
    title: 'Sustainability',
    content: 'We offer eco-friendly alternatives including biodegradable kraft tapes, recyclable materials, and reduced-waste packaging solutions to help our clients meet their environmental goals.',
  },
  {
    icon: '🛡️',
    title: 'Workplace Safety',
    content: 'As a BizSafe 3 certified company, workplace safety is at the core of our operations. We provide safe-to-use packaging tools and conduct regular safety assessments.',
  },
  {
    icon: '🔄',
    title: 'Rental & User Program',
    content: 'Flexible rental and user programs for packaging machinery and equipment — access quality equipment without the upfront capital investment, with maintenance and training included.',
  },
  {
    icon: '⚙️',
    title: 'Automation & Engineering',
    content: 'End-to-end packaging automation solutions from semi-automatic taping machines to fully automated pallet wrapping systems that increase throughput and reduce labor costs.',
  },
  {
    icon: '🔧',
    title: 'Spare Parts & Technical Support',
    content: 'Comprehensive spare parts for all major packaging equipment brands with prompt on-site repair services and preventive maintenance programs to minimize downtime.',
  },
];

export default function AboutPage() {

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
                src="/images/warehouse/warehouse-2.jpg"
                alt="Megapac Industries warehouse overview with palletised stock and mezzanine"
                width={600}
                height={400}
                style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: 'var(--radius-xl)' }}
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
          <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', marginBottom: 'var(--space-10)' }}>
            <Image
              src="/images/bizsafe-3.jpeg"
              alt="bizSAFE Level 3 Certified"
              width={130}
              height={70}
              style={{ objectFit: 'contain', height: 48, width: 'auto' }}
            />
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

      {/* Our Warehouse Gallery */}
      <section className="section-sm" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="section-header" style={{ justifyContent: 'center', textAlign: 'center' }}>
            <div>
              <h2>Our <span>Warehouse</span></h2>
              <p>A look inside our operations at 11 Gul Link, Singapore</p>
            </div>
          </div>
          <div className="warehouse-gallery">
            <div className="warehouse-gallery-item warehouse-gallery-wide">
              <Image
                src="/images/warehouse/warehouse-main.jpeg"
                alt="Megapac Industries facility exterior at 11 Gul Link — entrance with pallets and signage"
                width={900}
                height={500}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>
            <div className="warehouse-gallery-item">
              <Image
                src="/images/warehouse/warehouse-2.jpg"
                alt="Megapac warehouse — wide interior view of operations floor with palletised stock"
                width={600}
                height={400}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>
            <div className="warehouse-gallery-item">
              <Image
                src="/images/warehouse/warehouse-3.jpg"
                alt="Megapac warehouse — forklifts loading pallets of packaging materials"
                width={600}
                height={400}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>
            <div className="warehouse-gallery-item">
              <Image
                src="/images/warehouse/warehouse-4.jpg"
                alt="Megapac warehouse — electric pallet stacker and overhead jib crane beside cartons of OPP tape"
                width={600}
                height={400}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>
            <div className="warehouse-gallery-item">
              <Image
                src="/images/warehouse/warehouse-5.jpg"
                alt="Megapac warehouse — stacked returnable pallets and wrapped stock with electric pallet jack"
                width={600}
                height={400}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="section-sm" style={{ background: 'var(--white)' }}>
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
