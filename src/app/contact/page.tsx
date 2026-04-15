'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      {/* Page Hero */}
      <section className="page-title-section">
        <div className="container">
          <div className="breadcrumb" style={{ marginBottom: 'var(--space-3)' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,.6)' }}>Home</Link>
            <span className="sep">/</span>
            <span style={{ color: 'var(--red-300)' }}>Contact Us</span>
          </div>
          <h1>Contact Us</h1>
          <p>Get in touch with our sales team for quotes, enquiries, and support</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section">
        <div className="container">
          <div className="contact-page-grid">
            {/* Contact Info */}
            <div className="contact-info-col">
              <h2>Get in <span>Touch</span></h2>
              <p style={{ color: 'var(--gray-600)', marginBottom: 'var(--space-8)', lineHeight: 1.7 }}>
                Whether you need a quotation, product information, or custom packaging solutions, our team is ready to help. Reach out to us through any of the channels below.
              </p>

              <div className="contact-info-cards">
                <div className="contact-info-card">
                  <div className="contact-info-icon">📞</div>
                  <div>
                    <h4>Phone</h4>
                    <p><a href="tel:+6565587120">+65 6558 7120</a></p>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-info-icon">📧</div>
                  <div>
                    <h4>Email</h4>
                    <p><a href="mailto:sales@megapac.sg">sales@megapac.sg</a></p>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-info-icon">💬</div>
                  <div>
                    <h4>WhatsApp</h4>
                    <p>
                      <a
                        href="https://wa.me/6590482345?text=Hi%20Megapac%2C%20I%27m%20interested%20in%20your%20packaging%20products."
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#25D366', fontWeight: 600 }}
                      >
                        Chat with us on WhatsApp
                      </a>
                    </p>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-info-icon">📍</div>
                  <div>
                    <h4>Address</h4>
                    <p>11 Gul Link, Singapore 629381</p>
                    <p style={{ fontSize: '12px', color: 'var(--gray-400)', marginTop: '4px' }}>UEN: 53230377M</p>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-info-icon">🕐</div>
                  <div>
                    <h4>Opening Hours</h4>
                    <p>
                      Monday – Friday: 9:00 AM – 6:00 PM<br />
                      Saturday: 9:00 AM – 1:00 PM<br />
                      Sunday &amp; PH: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div style={{ marginTop: 'var(--space-6)', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--gray-200)' }}>
                <iframe
                  src="https://maps.google.com/maps?q=11+Gul+Link,+Singapore+629381&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Megapac Industries - 11 Gul Link, Singapore 629381"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-col">
              <div className="contact-form-card">
                {submitted ? (
                  <div style={{ textAlign: 'center', padding: 'var(--space-10) 0' }}>
                    <div style={{ fontSize: 56, marginBottom: 'var(--space-4)', color: 'var(--success)' }}>✓</div>
                    <h3>Message Sent!</h3>
                    <p style={{ color: 'var(--gray-500)', marginTop: 'var(--space-3)' }}>
                      Thank you for reaching out! Our sales team will respond within 1 business day.
                    </p>
                  </div>
                ) : (
                  <>
                    <h3>Send Us a Message</h3>
                    <p style={{ color: 'var(--gray-500)', fontSize: '14px', marginBottom: 'var(--space-6)' }}>
                      Fill in the form below and we&apos;ll get back to you within 1 business day.
                    </p>
                    <form onSubmit={handleSubmit}>
                      <div className="form-row">
                        <div className="form-group">
                          <label>Your Name *</label>
                          <input type="text" placeholder="e.g. John Tan" required />
                        </div>
                        <div className="form-group">
                          <label>Company Name</label>
                          <input type="text" placeholder="e.g. ABC Trading Pte Ltd" />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label>Phone Number *</label>
                          <input type="tel" placeholder="+65 9XXX XXXX" required />
                        </div>
                        <div className="form-group">
                          <label>Email Address *</label>
                          <input type="email" placeholder="john@company.com" required />
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Product of Interest</label>
                        <input type="text" placeholder="e.g. Smart OPP Tape, Stretch Film, etc." />
                      </div>
                      <div className="form-group">
                        <label>Message *</label>
                        <textarea rows={4} placeholder="Tell us about your packaging needs, estimated quantities, delivery requirements, etc." required style={{ resize: 'vertical' }} />
                      </div>
                      <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                        Send Message
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container">
          <h2>Prefer to Chat Directly?</h2>
          <p>Reach us on WhatsApp for the fastest response — we typically reply within minutes during business hours.</p>
          <a
            href="https://wa.me/6590482345?text=Hi%20Megapac%2C%20I%27m%20interested%20in%20your%20packaging%20products."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-lg"
            style={{ background: '#25D366', color: '#fff', borderColor: '#25D366' }}
          >
            💬 WhatsApp Us Now
          </a>
        </div>
      </section>
    </>
  );
}
