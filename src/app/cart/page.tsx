'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/components/CartProvider';

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal, deliveryFee, total, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <div className="section">
        <div className="container empty-state">
          <div className="empty-state-icon">🛒</div>
          <h3>Your cart is empty</h3>
          <p>Looks like you haven&apos;t added any items yet.</p>
          <Link href="/category/opp-tapes" className="btn btn-primary">Browse Products</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="page-title-section">
        <div className="container">
          <div className="breadcrumb" style={{ marginBottom: 'var(--space-3)' }}>
            <Link href="/" style={{ color: 'var(--navy-200)' }}>Home</Link>
            <span className="sep">/</span>
            <span style={{ color: 'var(--amber-400)' }}>Cart</span>
          </div>
          <h1>Shopping Cart ({totalItems} item{totalItems !== 1 ? 's' : ''})</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 'var(--space-8)', alignItems: 'start' }}>
            {/* Cart Items */}
            <div className="cart-table">
              <div className="cart-row cart-row-header">
                <div></div>
                <div>Product</div>
                <div>Price</div>
                <div>Quantity</div>
                <div>Total</div>
                <div></div>
              </div>
              {items.map((item) => (
                <div key={item.id} className="cart-row">
                  <div className="cart-img">
                    <Image src={item.image} alt={item.name} width={80} height={80} style={{ objectFit: 'cover' }} />
                  </div>
                  <div>
                    <div className="cart-item-name">
                      <Link href={`/product/${item.slug}`}>{item.name}</Link>
                    </div>
                    <div className="cart-item-sku">SKU: {item.sku}</div>
                  </div>
                  <div style={{ fontWeight: 600 }}>${item.price.toFixed(2)}</div>
                  <div>
                    <div className="quantity-selector" style={{ marginBottom: 0 }}>
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                        min={1}
                        max={item.stockQty}
                        style={{ width: '50px' }}
                      />
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                  </div>
                  <div style={{ fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                  <button className="cart-remove" onClick={() => removeItem(item.id)} title="Remove">
                    ✕
                  </button>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="cart-summary-card">
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', marginBottom: 'var(--space-4)' }}>Order Summary</h3>
              <div className="cart-summary-row">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="cart-summary-row">
                <span>Delivery</span>
                <span>{deliveryFee === 0 ? <span style={{ color: 'var(--success)', fontWeight: 600 }}>FREE</span> : `$${deliveryFee.toFixed(2)}`}</span>
              </div>
              {deliveryFee > 0 && (
                <div style={{ fontSize: '12px', color: 'var(--gray-500)', marginBottom: 'var(--space-2)' }}>
                  Free delivery on orders above $200
                </div>
              )}
              <div className="cart-summary-row cart-summary-total">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <Link href="/checkout" className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: 'var(--space-5)' }}>
                Proceed to Checkout
              </Link>
              <Link href="/category/opp-tapes" className="btn btn-outline" style={{ width: '100%', marginTop: 'var(--space-3)' }}>
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
