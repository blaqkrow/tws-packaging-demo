'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import QuoteForm from '@/components/QuoteForm';

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/products', label: 'Products' },
    { href: '/contact', label: 'Contact Us' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          {/* Left nav (desktop only) */}
          <nav className="header-nav header-nav-left">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={isActive(link.href) ? 'active' : ''}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Center logo */}
          <Link href="/" className="header-logo">
            <Image
              src="/images/megapac-logo-new.png"
              alt="Megapac Industries — Packaging DNA"
              width={200}
              height={50}
              style={{ height: 64, width: 'auto', objectFit: 'contain' }}
              priority
            />
          </Link>

          {/* Right nav (desktop only) */}
          <nav className="header-nav header-nav-right">
            {navLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={isActive(link.href) ? 'active' : ''}
              >
                {link.label}
              </Link>
            ))}
            <button
              className="btn btn-primary btn-sm header-quote-btn"
              onClick={() => setQuoteOpen(true)}
            >
              Get a Quote
            </button>
          </nav>

          {/* Hamburger button (mobile only) */}
          <button
            className={`hamburger ${mobileOpen ? 'open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div className={`mobile-menu-overlay ${mobileOpen ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>
        <nav className="mobile-menu" onClick={(e) => e.stopPropagation()}>
          <div className="mobile-menu-header">
            <Image
              src="/images/megapac-logo-new.png"
              alt="Megapac Industries"
              width={160}
              height={40}
              style={{ height: 52, width: 'auto', objectFit: 'contain' }}
            />
            <button className="mobile-menu-close" onClick={() => setMobileOpen(false)} aria-label="Close menu">
              ✕
            </button>
          </div>
          <div className="mobile-menu-links">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`mobile-menu-link ${isActive(link.href) ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mobile-menu-footer">
            <button
              className="btn btn-primary btn-lg"
              style={{ width: '100%', textAlign: 'center', marginBottom: '12px' }}
              onClick={() => { setMobileOpen(false); setQuoteOpen(true); }}
            >
              Get a Quote
            </button>
            <a
              href="https://wa.me/6590482345?text=Hi%20Megapac%2C%20I%27m%20interested%20in%20your%20packaging%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg"
              style={{ width: '100%', textAlign: 'center', background: '#25D366', color: '#fff', borderColor: '#25D366' }}
            >
              💬 WhatsApp Us
            </a>
            <div style={{ textAlign: 'center', marginTop: '16px', fontSize: '13px', color: 'var(--gray-400)' }}>
              📞 +65 9048 2345<br />
              📧 sales@megapac.sg
            </div>
          </div>
        </nav>
      </div>

      <QuoteForm isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </>
  );
}
