'use client';

import { useState } from 'react';

interface QuoteFormProps {
  productName?: string;
  productCode?: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteForm({ productName, productCode, isOpen, onClose }: QuoteFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get('name') as string,
      company: formData.get('company') as string,
      phone: formData.get('phone') as string,
      email: formData.get('email') as string,
      product: formData.get('product') as string,
      quantity: formData.get('quantity') as string,
      notes: formData.get('notes') as string,
    };

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        if (data.method === 'mailto' && data.mailtoLink) {
          // Open mailto link as fallback
          window.location.href = data.mailtoLink;
        }
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          onClose();
        }, 3000);
      } else {
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      // If API fails, fall back to direct mailto
      const subject = encodeURIComponent(`Quote Request: ${payload.product} — ${payload.name}`);
      const body = encodeURIComponent(
        `Name: ${payload.name}\nCompany: ${payload.company}\nPhone: ${payload.phone}\nEmail: ${payload.email}\nProduct: ${payload.product}\nQuantity: ${payload.quantity}\nNotes: ${payload.notes}`
      );
      window.location.href = `mailto:sales@megapac.sg?subject=${subject}&body=${body}`;
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 3000);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="quote-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="quote-modal" style={{ position: 'relative' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: 16, right: 20, background: 'none', border: 'none', fontSize: 24, color: 'var(--gray-400)', cursor: 'pointer' }}>
          ✕
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: 'var(--space-8) 0' }}>
            <div style={{ fontSize: 48, marginBottom: 'var(--space-4)' }}>✓</div>
            <h2>Quote Request Sent!</h2>
            <p style={{ color: 'var(--gray-500)', marginTop: 'var(--space-3)' }}>
              Thank you! Our sales team will get back to you within 1 business day.
            </p>
          </div>
        ) : (
          <>
            <h2>Request a <span>Quote</span></h2>
            <p>Fill in the form below and our sales team will respond within 1 business day.</p>

            {error && (
              <div style={{ background: '#fee2e2', color: '#b91c1c', padding: '8px 12px', borderRadius: '6px', fontSize: '13px', marginBottom: 'var(--space-4)' }}>
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Your Name *</label>
                  <input type="text" name="name" placeholder="e.g. John Tan" required />
                </div>
                <div className="form-group">
                  <label>Company Name</label>
                  <input type="text" name="company" placeholder="e.g. ABC Trading Pte Ltd" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input type="tel" name="phone" placeholder="+65 9XXX XXXX" required />
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input type="email" name="email" placeholder="john@company.com" required />
                </div>
              </div>

              <div className="form-group">
                <label>Product of Interest *</label>
                <input
                  type="text"
                  name="product"
                  defaultValue={productName ? `${productName}${productCode ? ` (${productCode})` : ''}` : ''}
                  placeholder="e.g. Smart OPP Tape (Brown) — 48mm × 90m"
                  required
                />
              </div>

              <div className="form-group">
                <label>Estimated Quantity</label>
                <input type="text" name="quantity" placeholder="e.g. 100 rolls, 50 cartons" />
              </div>

              <div className="form-group">
                <label>Additional Notes</label>
                <textarea name="notes" rows={3} placeholder="Any special requirements, delivery timeline, etc." style={{ resize: 'vertical' }} />
              </div>

              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }} disabled={submitting}>
                {submitting ? 'Sending...' : 'Submit Quote Request'}
              </button>

              <p style={{ textAlign: 'center', fontSize: 12, color: 'var(--gray-400)', marginTop: 'var(--space-3)' }}>
                Or WhatsApp us directly at{' '}
                <a href="https://wa.me/6590482345" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', fontWeight: 600 }}>
                  +65 6558 7120
                </a>
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
