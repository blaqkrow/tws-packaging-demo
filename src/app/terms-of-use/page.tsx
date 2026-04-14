import Link from 'next/link';

export default function TermsOfUsePage() {
  return (
    <>
      <section className="page-title-section">
        <div className="container">
          <div className="breadcrumb" style={{ marginBottom: 'var(--space-3)' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,.6)' }}>Home</Link>
            <span className="sep">/</span>
            <span style={{ color: 'var(--red-300)' }}>Terms of Use</span>
          </div>
          <h1>Terms of Use</h1>
          <p>Terms and conditions governing your use of our website</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ lineHeight: 1.8, color: 'var(--gray-700)' }}>
            <p style={{ color: 'var(--gray-500)', marginBottom: 'var(--space-6)' }}>
              <strong>Last Updated:</strong> April 2026
            </p>

            <h2 style={{ fontSize: '22px', marginBottom: 'var(--space-4)' }}>1. Acceptance of Terms</h2>
            <p>By accessing and using the Megapac Industries Pte. Ltd. (&ldquo;Megapac&rdquo;) website, you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, please do not use our website.</p>

            <h2 style={{ fontSize: '22px', marginTop: 'var(--space-8)', marginBottom: 'var(--space-4)' }}>2. Use of Website</h2>
            <p>This website is provided for informational purposes and to facilitate business enquiries. You agree to use this website only for lawful purposes and in accordance with these Terms of Use. You shall not:</p>
            <ul style={{ listStyle: 'disc', paddingLeft: '24px', marginTop: 'var(--space-3)' }}>
              <li>Use the website in any way that could damage or impair its availability</li>
              <li>Attempt to gain unauthorised access to any part of the website</li>
              <li>Use automated tools to scrape or extract content without permission</li>
              <li>Transmit any harmful code, viruses, or malicious software</li>
            </ul>

            <h2 style={{ fontSize: '22px', marginTop: 'var(--space-8)', marginBottom: 'var(--space-4)' }}>3. Product Information</h2>
            <p>While we strive to ensure accuracy, product descriptions, specifications, images, and pricing displayed on this website are for general reference only. Megapac reserves the right to modify product details without prior notice. For confirmed specifications and pricing, please contact our sales team directly.</p>

            <h2 style={{ fontSize: '22px', marginTop: 'var(--space-8)', marginBottom: 'var(--space-4)' }}>4. Quotations &amp; Orders</h2>
            <p>Quotation requests submitted through this website are subject to confirmation by our sales team. Prices quoted are valid for the specified period only and may be subject to change based on market conditions. All orders are governed by Megapac&apos;s standard terms of sale.</p>

            <h2 style={{ fontSize: '22px', marginTop: 'var(--space-8)', marginBottom: 'var(--space-4)' }}>5. Intellectual Property</h2>
            <p>All content on this website — including text, images, logos, trademarks, and design elements — is the property of Megapac Industries Pte. Ltd. or its licensors. Unauthorised reproduction, distribution, or modification of any content is strictly prohibited.</p>

            <h2 style={{ fontSize: '22px', marginTop: 'var(--space-8)', marginBottom: 'var(--space-4)' }}>6. Limitation of Liability</h2>
            <p>Megapac shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website. We do not warrant that the website will be uninterrupted, error-free, or free of viruses.</p>

            <h2 style={{ fontSize: '22px', marginTop: 'var(--space-8)', marginBottom: 'var(--space-4)' }}>7. Third-Party Links</h2>
            <p>Our website may contain links to third-party websites. Megapac is not responsible for the content, privacy practices, or terms of use of any linked websites.</p>

            <h2 style={{ fontSize: '22px', marginTop: 'var(--space-8)', marginBottom: 'var(--space-4)' }}>8. Governing Law</h2>
            <p>These Terms of Use are governed by and construed in accordance with the laws of the Republic of Singapore. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Singapore.</p>

            <h2 style={{ fontSize: '22px', marginTop: 'var(--space-8)', marginBottom: 'var(--space-4)' }}>9. Contact Us</h2>
            <p>If you have any questions about these Terms of Use, please contact us at:</p>
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
