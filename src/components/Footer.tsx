import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>Megapac Industries</h3>
            <div className="tagline">Our Dedication to Deliver!</div>
            <p>
              One of the leading manufacturers and distributors of adhesive tapes, packaging materials and associated machinery in Singapore and Malaysia. Quality products, competitive pricing, fast delivery.
            </p>
          </div>

          <div className="footer-col">
            <h4>Tapes</h4>
            <ul>
              <li><Link href="/category/pvc-tapes">PVC Tapes</Link></li>
              <li><Link href="/category/opp-tapes">OPP Tapes</Link></li>
              <li><Link href="/category/printed-tape">Printed Tape</Link></li>
              <li><Link href="/category/masking-tape">Masking Tape</Link></li>
              <li><Link href="/category/cloth-tape">Cloth Tape</Link></li>
              <li><Link href="/category/kraft-tape">Kraft Tape</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Film &amp; Foam</h4>
            <ul>
              <li><Link href="/category/stretch-film">Stretch Film</Link></li>
              <li><Link href="/category/bundle-wrap">Bundle Wrap</Link></li>
              <li><Link href="/category/pe-foam-rolls">PE Foam Rolls</Link></li>
              <li><Link href="/category/laminated-pe-foam-sheets">PE Foam Sheets</Link></li>
              <li><Link href="/category/air-bubble-pak">Air Bubble Pak</Link></li>
              <li><Link href="/category/pe-sheet-roll">PE Sheet Roll</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>More Products</h4>
            <ul>
              <li><Link href="/category/strapping-bands">Strapping Bands &amp; Tools</Link></li>
              <li><Link href="/category/edgeboard-protectors">Edgeboard Protectors</Link></li>
              <li><Link href="/category/dunnage-air-bags">Dunnage Air Bags</Link></li>
              <li><Link href="/category/packing-list-envelopes">Packing List Envelopes</Link></li>
              <li><Link href="/category/newsprint-paper">Newsprint Paper</Link></li>
              <li><Link href="/category/silica-gel">Silica Gel</Link></li>
              <li><Link href="/category/corrugated-paper-roll">Corrugated Paper</Link></li>
              <li><Link href="/category/mic-pac">Mic Pac</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-contact-grid">
          <div>
            <h4>Contact Us</h4>
            <ul>
              <li>📧 <a href="mailto:sales@megapac.sg">sales@megapac.sg</a></li>
              <li>📞 <a href="tel:+6590482345">+65 9048 2345</a></li>
              <li>📍 11 Gul Link, Singapore 629381</li>
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
          </div>
          <div>
            <h4>Opening Hours</h4>
            <ul>
              <li>Monday – Friday: 9:00 AM – 6:00 PM</li>
              <li>Saturday: 9:00 AM – 1:00 PM</li>
              <li>Sunday &amp; PH: Closed</li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/products">Products</Link></li>
              <li><Link href="/contact">Contact</Link></li>
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
