import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <h3>Megapac Industries</h3>
            <div className="tagline">Our Dedication to Deliver!</div>
            <p>
              One of the leading manufacturers and distributors of adhesive tapes, packaging materials and associated machinery in Singapore and Malaysia.
            </p>
          </div>

          {/* Contact Us */}
          <div className="footer-col">
            <h4>Contact Us</h4>
            <ul>
              <li>📧 <a href="mailto:sales@megapac.sg">sales@megapac.sg</a></li>
              <li>📞 <a href="tel:+6565587120">+65 6558 7120</a></li>
              <li>📍 11 Gul Link, Singapore 629381</li>
              <li style={{ fontSize: '12px', color: 'rgba(255,255,255,.5)', marginTop: '4px' }}>UEN: 53230377M</li>
              <li style={{ marginTop: '8px' }}>
                <a
                  href="https://wa.me/6590482345?text=Hi%20Megapac%2C%20I%27m%20interested%20in%20your%20packaging%20products."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#25D366', fontWeight: 600, fontSize: '13px' }}
                >
                  💬 WhatsApp Us
                </a>
              </li>
            </ul>
            <div style={{ marginTop: '16px', borderRadius: '6px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
              <iframe
                src="https://maps.google.com/maps?q=11+Gul+Link,+Singapore+629381&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="120"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Megapac Industries - 11 Gul Link, Singapore 629381"
              />
            </div>
          </div>

          {/* Opening Hours */}
          <div className="footer-col">
            <h4>Opening Hours</h4>
            <ul>
              <li>Mon – Fri: 8:00 AM – 5:00 PM</li>
              <li>Saturday: 8:00 AM – 12:00 PM</li>
              <li>Sunday &amp; PH: Closed</li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/products">Products</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms-of-use">Terms of Use</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© {new Date().getFullYear()} Megapac Industries Pte. Ltd. All rights reserved.</div>
          <div>Website by <a href="https://enterprise.codingo.sg" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,.8)' }}>Codingo Singapore</a></div>
        </div>
      </div>
    </footer>
  );
}
