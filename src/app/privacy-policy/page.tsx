import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="page-title-section">
        <div className="container">
          <div className="breadcrumb" style={{ marginBottom: 'var(--space-3)' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,.6)' }}>Home</Link>
            <span className="sep">/</span>
            <span style={{ color: 'var(--red-300)' }}>Privacy Policy</span>
          </div>
          <h1>Privacy Policy</h1>
          <p>How we collect, use, and protect your personal data</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ lineHeight: 1.8, color: 'var(--gray-700)' }}>
            <p style={{ color: 'var(--gray-500)', marginBottom: 'var(--space-6)' }}>
              <strong>Last Updated:</strong> April 2026
            </p>

            <h2 style={{ fontSize: '22px', marginBottom: 'var(--space-4)' }}>1. Introduction</h2>
            <p>Megapac Industries Pte. Ltd. (&ldquo;Megapac&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or interact with our services.</p>

            <h2 style={{ fontSize: '22px', marginTop: 'var(--space-8)', marginBottom: 'var(--space-4)' }}>2. Information We Collect</h2>
            <p>We may collect the following types of personal information:</p>
            <ul style={{ listStyle: 'disc', paddingLeft: '24px', marginTop: 'var(--space-3)' }}>
              <li>Name and contact details (email address, phone number)</li>
              <li>Company name and designation</li>
              <li>Product enquiry details and quotation history</li>
              <li>Website usage data (cookies, IP address, browser type)</li>
            </ul>

            <h2 style={{ fontSize: '22px', marginTop: 'var(--space-8)', marginBottom: 'var(--space-4)' }}>3. How We Use Your Information</h2>
            <p>We use your personal data for the following purposes:</p>
            <ul style={{ listStyle: 'disc', paddingLeft: '24px', marginTop: 'var(--space-3)' }}>
              <li>To respond to your enquiries and quotation requests</li>
              <li>To process and fulfil orders</li>
              <li>To send product updates, promotions, and marketing communications (with your consent)</li>
              <li>To improve our website, products, and services</li>
              <li>To comply with legal obligations</li>
            </ul>

            <h2 style={{ fontSize: '22px', marginTop: 'var(--space-8)', marginBottom: 'var(--space-4)' }}>4. Data Sharing</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your data with trusted service providers who assist in our business operations (e.g., logistics partners, payment processors), subject to strict confidentiality agreements.</p>

            <h2 style={{ fontSize: '22px', marginTop: 'var(--space-8)', marginBottom: 'var(--space-4)' }}>5. Data Security</h2>
            <p>We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.</p>

            <h2 style={{ fontSize: '22px', marginTop: 'var(--space-8)', marginBottom: 'var(--space-4)' }}>6. Cookies</h2>
            <p>Our website may use cookies to enhance your browsing experience. You can adjust your browser settings to refuse cookies, but some features of our website may not function properly.</p>

            <h2 style={{ fontSize: '22px', marginTop: 'var(--space-8)', marginBottom: 'var(--space-4)' }}>7. Your Rights</h2>
            <p>Under Singapore&apos;s Personal Data Protection Act (PDPA), you have the right to:</p>
            <ul style={{ listStyle: 'disc', paddingLeft: '24px', marginTop: 'var(--space-3)' }}>
              <li>Access your personal data held by us</li>
              <li>Request correction of inaccurate data</li>
              <li>Withdraw consent for data processing</li>
              <li>Request deletion of your data</li>
            </ul>

            <h2 style={{ fontSize: '22px', marginTop: 'var(--space-8)', marginBottom: 'var(--space-4)' }}>8. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or wish to exercise your data protection rights, please contact us at:</p>
            <p style={{ marginTop: 'var(--space-3)' }}>
              <strong>Email:</strong> <a href="mailto:sales@megapac.sg" style={{ color: 'var(--blue-600)' }}>sales@megapac.sg</a><br />
              <strong>Phone:</strong> <a href="tel:+6590482345" style={{ color: 'var(--blue-600)' }}>+65 9048 2345</a><br />
              <strong>Address:</strong> 11 Gul Link, Singapore 629381
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
