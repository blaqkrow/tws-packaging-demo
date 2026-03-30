'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useCart } from '@/components/CartProvider';

type PaymentMethod = 'stripe' | 'paynow' | 'cod';

export default function CheckoutPage() {
  const { items, subtotal, deliveryFee, total, clearCart } = useCart();
  const router = useRouter();
  const [payment, setPayment] = useState<PaymentMethod>('stripe');
  const [submitting, setSubmitting] = useState(false);

  if (items.length === 0) {
    return (
      <div className="section">
        <div className="container empty-state">
          <div className="empty-state-icon">🛒</div>
          <h3>Nothing to checkout</h3>
          <p>Add items to your cart first.</p>
          <Link href="/category/opp-tapes" className="btn btn-primary">Browse Products</Link>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      clearCart();
      router.push('/order/INV-2026-00006/confirmation');
    }, 1500);
  };

  return (
    <>
      <section className="page-title-section">
        <div className="container">
          <div className="breadcrumb" style={{ marginBottom: 'var(--space-3)' }}>
            <Link href="/" style={{ color: 'var(--navy-200)' }}>Home</Link>
            <span className="sep">/</span>
            <Link href="/cart" style={{ color: 'var(--navy-200)' }}>Cart</Link>
            <span className="sep">/</span>
            <span style={{ color: 'var(--amber-400)' }}>Checkout</span>
          </div>
          <h1>Checkout</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="checkout-grid">
              {/* Form */}
              <div>
                <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-8)', border: '1px solid var(--gray-100)', marginBottom: 'var(--space-6)' }}>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', marginBottom: 'var(--space-6)' }}>Delivery Details</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input type="text" placeholder="e.g. Tan Wei Ming" required />
                    </div>
                    <div className="form-group">
                      <label>Phone Number *</label>
                      <input type="tel" placeholder="+65 9XXX XXXX" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input type="email" placeholder="your@email.com" required />
                  </div>
                  <div className="form-group">
                    <label>Delivery Address *</label>
                    <textarea placeholder="Block, Street, Unit Number, Postal Code" rows={3} required style={{ resize: 'vertical' }} />
                  </div>
                  <div className="form-group">
                    <label>Order Notes (Optional)</label>
                    <textarea placeholder="Any special instructions for this order?" rows={2} style={{ resize: 'vertical' }} />
                  </div>
                </div>

                {/* Payment */}
                <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-8)', border: '1px solid var(--gray-100)' }}>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', marginBottom: 'var(--space-6)' }}>Payment Method</h3>
                  <div className="payment-options">
                    <div className={`payment-option ${payment === 'stripe' ? 'selected' : ''}`} onClick={() => setPayment('stripe')}>
                      <div className="payment-option-radio" />
                      <div>
                        <div style={{ fontWeight: 600 }}>💳 Credit / Debit Card</div>
                        <div style={{ fontSize: '13px', color: 'var(--gray-500)' }}>Visa, Mastercard, AMEX via Stripe</div>
                      </div>
                    </div>
                    <div className={`payment-option ${payment === 'paynow' ? 'selected' : ''}`} onClick={() => setPayment('paynow')}>
                      <div className="payment-option-radio" />
                      <div>
                        <div style={{ fontWeight: 600 }}>🏦 PayNow</div>
                        <div style={{ fontSize: '13px', color: 'var(--gray-500)' }}>Instant bank transfer via PayNow QR</div>
                      </div>
                    </div>
                    <div className={`payment-option ${payment === 'cod' ? 'selected' : ''}`} onClick={() => setPayment('cod')}>
                      <div className="payment-option-radio" />
                      <div>
                        <div style={{ fontWeight: 600 }}>🚚 Cash on Delivery (COD)</div>
                        <div style={{ fontSize: '13px', color: 'var(--gray-500)' }}>Pay cash when your order is delivered</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="cart-summary-card" style={{ position: 'sticky', top: 'calc(var(--header-height) + 24px)' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', marginBottom: 'var(--space-5)' }}>Order Summary</h3>
                {items.map((item) => (
                  <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 'var(--space-2) 0', fontSize: '14px' }}>
                    <span style={{ color: 'var(--gray-600)' }}>{item.name} × {item.quantity}</span>
                    <span style={{ fontWeight: 600 }}>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <div style={{ borderTop: '1px solid var(--gray-100)', marginTop: 'var(--space-4)', paddingTop: 'var(--space-4)' }}>
                  <div className="cart-summary-row">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="cart-summary-row">
                    <span>Delivery</span>
                    <span>{deliveryFee === 0 ? <span style={{ color: 'var(--success)', fontWeight: 600 }}>FREE</span> : `$${deliveryFee.toFixed(2)}`}</span>
                  </div>
                  <div className="cart-summary-row cart-summary-total">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{ width: '100%', marginTop: 'var(--space-5)' }}
                  disabled={submitting}
                >
                  {submitting ? 'Processing…' : `Place Order — $${total.toFixed(2)}`}
                </button>
                <p style={{ fontSize: '12px', color: 'var(--gray-500)', textAlign: 'center', marginTop: 'var(--space-3)' }}>
                  By placing this order you agree to our Terms & Conditions.
                </p>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
