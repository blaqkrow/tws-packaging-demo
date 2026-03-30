import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4 style={{ fontSize: '22px', fontFamily: 'var(--font-heading)', fontWeight: 800 }}>
              TWS<span style={{ color: 'var(--amber-400)' }}>.</span>
            </h4>
            <p style={{ marginTop: 'var(--space-3)' }}>
              Your trusted packaging supply partner in Singapore. Quality tapes, strapping, cartons, and more — delivered to your door.
            </p>
          </div>
          <div>
            <h4>Products</h4>
            <ul className="footer-links">
              <li><Link href="/category/opp-tapes">OPP Tapes</Link></li>
              <li><Link href="/category/strapping-bands">Strapping Bands</Link></li>
              <li><Link href="/category/carton-boxes">Carton Boxes</Link></li>
              <li><Link href="/category/bubble-wrap">Bubble Wrap</Link></li>
              <li><Link href="/category/stretch-film">Stretch Film</Link></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul className="footer-links">
              <li><Link href="/">About Us</Link></li>
              <li><Link href="/">Contact</Link></li>
              <li><Link href="/">Terms & Conditions</Link></li>
              <li><Link href="/">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact Us</h4>
            <ul className="footer-links">
              <li>📧 hello@twspackaging.sg</li>
              <li>📞 +65 9048 2345</li>
              <li>📍 Singapore</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 TWS Packaging Supply. All rights reserved.</span>
          <span>Powered by Codingo Singapore</span>
        </div>
      </div>
    </footer>
  );
}
