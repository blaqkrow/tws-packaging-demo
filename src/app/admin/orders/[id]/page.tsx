import Link from 'next/link';
import { orders } from '@/data/orders';

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    Pending: 'badge-warning',
    Confirmed: 'badge-info',
    Packed: 'badge-info',
    Shipped: 'badge-info',
    Delivered: 'badge-success',
    Cancelled: 'badge-danger',
  };
  return <span className={`badge ${styles[status] || 'badge-neutral'}`}>{status}</span>;
}

export default function AdminOrderDetailPage({ params }: { params: Promise<{ id: string }> }) {
  // For Next.js 15, params is a Promise but we'll handle it synchronously for demo  
  const order = orders.find((o) => o.id === 'ord-1') || orders[0]; // Default to first order for demo

  return (
    <>
      <div className="admin-header">
        <div>
          <div className="breadcrumb">
            <Link href="/admin/orders">← All Orders</Link>
          </div>
          <h1>Order {order.orderNumber}</h1>
          <p style={{ color: 'var(--gray-500)', fontSize: '14px' }}>
            Placed on {new Date(order.createdAt).toLocaleDateString('en-SG', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
          </p>
        </div>
        <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
          <button className="btn btn-outline">📄 Invoice</button>
          <button className="btn btn-outline">📋 Packing Slip</button>
          <select className="btn btn-primary" style={{ appearance: 'auto', paddingRight: 'var(--space-8)' }} defaultValue={order.orderStatus}>
            <option>Pending</option>
            <option>Confirmed</option>
            <option>Packed</option>
            <option>Shipped</option>
            <option>Delivered</option>
            <option>Cancelled</option>
          </select>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 'var(--space-6)' }}>
        {/* Order Items */}
        <div>
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>SKU</th>
                  <th>Unit Price</th>
                  <th>Qty</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {order.items.map((item) => (
                  <tr key={item.id}>
                    <td style={{ fontWeight: 600 }}>{item.productName}</td>
                    <td><code style={{ fontSize: '12px', background: 'var(--gray-100)', padding: '2px 6px', borderRadius: '4px' }}>{item.sku}</code></td>
                    <td>${item.unitPrice.toFixed(2)}</td>
                    <td>{item.quantity}</td>
                    <td style={{ fontWeight: 700 }}>${item.lineTotal.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Totals */}
          <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--gray-100)', padding: 'var(--space-5)', marginTop: 'var(--space-4)' }}>
            <div className="cart-summary-row">
              <span>Subtotal</span><span>${order.subtotal.toFixed(2)}</span>
            </div>
            <div className="cart-summary-row">
              <span>Delivery</span><span>{order.deliveryFee === 0 ? 'FREE' : `$${order.deliveryFee.toFixed(2)}`}</span>
            </div>
            <div className="cart-summary-row cart-summary-total">
              <span>Total</span><span>${order.total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Customer & Order Info */}
        <div>
          <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--gray-100)', padding: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '16px', marginBottom: 'var(--space-4)' }}>Customer</h3>
            <div style={{ fontSize: '14px', lineHeight: 2 }}>
              <div><strong>Name:</strong> {order.customerName}</div>
              <div><strong>Email:</strong> {order.customerEmail}</div>
              <div><strong>Phone:</strong> {order.customerPhone}</div>
              <div><strong>Address:</strong> {order.deliveryAddress}</div>
            </div>
          </div>

          <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--gray-100)', padding: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '16px', marginBottom: 'var(--space-4)' }}>Order Info</h3>
            <div style={{ fontSize: '14px', lineHeight: 2 }}>
              <div><strong>Status:</strong> <StatusBadge status={order.orderStatus} /></div>
              <div><strong>Payment:</strong> <span style={{ textTransform: 'capitalize' }}>{order.paymentMethod === 'cod' ? 'Cash on Delivery' : order.paymentMethod}</span></div>
              <div><strong>Payment Status:</strong> <span className={`badge ${order.paymentStatus === 'paid' ? 'badge-success' : 'badge-warning'}`} style={{ textTransform: 'capitalize' }}>{order.paymentStatus}</span></div>
              {order.notes && <div><strong>Notes:</strong> {order.notes}</div>}
            </div>
          </div>

          <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
            <button className="btn btn-outline" style={{ flex: 1, color: 'var(--danger)' }}>Cancel Order</button>
          </div>
        </div>
      </div>
    </>
  );
}
