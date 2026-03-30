import Link from 'next/link';

export default function OrderConfirmationPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="confirmation-card">
          <div className="confirmation-icon">✓</div>
          <h1 style={{ fontSize: '32px', marginBottom: 'var(--space-3)' }}>Order Confirmed!</h1>
          <p style={{ color: 'var(--gray-500)', fontSize: '16px', marginBottom: 'var(--space-8)' }}>
            Thank you for your order. We&apos;ve sent a confirmation email with your order details and invoice.
          </p>

          <div style={{ background: 'var(--gray-50)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-6)', textAlign: 'left', marginBottom: 'var(--space-8)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
              <div>
                <div style={{ fontSize: '12px', color: 'var(--gray-500)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: 'var(--space-1)' }}>Order Number</div>
                <div style={{ fontWeight: 700, fontFamily: 'var(--font-heading)', fontSize: '18px' }}>INV-2026-00006</div>
              </div>
              <div>
                <div style={{ fontSize: '12px', color: 'var(--gray-500)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: 'var(--space-1)' }}>Status</div>
                <span className="badge badge-warning">Pending</span>
              </div>
              <div>
                <div style={{ fontSize: '12px', color: 'var(--gray-500)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: 'var(--space-1)' }}>Estimated Delivery</div>
                <div style={{ fontWeight: 600 }}>3–5 business days</div>
              </div>
              <div>
                <div style={{ fontSize: '12px', color: 'var(--gray-500)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: 'var(--space-1)' }}>Payment</div>
                <div style={{ fontWeight: 600 }}>Credit/Debit Card</div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-primary btn-lg">📄 Download Invoice</button>
            <Link href="/account/orders" className="btn btn-outline btn-lg">View Order History</Link>
            <Link href="/" className="btn btn-secondary btn-lg">Continue Shopping</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
