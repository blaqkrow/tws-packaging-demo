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

export default function OrderHistoryPage() {
  return (
    <>
      <section className="page-title-section">
        <div className="container">
          <div className="breadcrumb" style={{ marginBottom: 'var(--space-3)' }}>
            <Link href="/" style={{ color: 'var(--navy-200)' }}>Home</Link>
            <span className="sep">/</span>
            <span style={{ color: 'var(--amber-400)' }}>My Orders</span>
          </div>
          <h1>Order History</h1>
          <p>View and track all your orders.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Order #</th>
                  <th>Date</th>
                  <th>Items</th>
                  <th>Total</th>
                  <th>Payment</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td style={{ fontWeight: 600, fontFamily: 'var(--font-heading)' }}>{order.orderNumber}</td>
                    <td>{new Date(order.createdAt).toLocaleDateString('en-SG', { day: 'numeric', month: 'short', year: 'numeric' })}</td>
                    <td>{order.items.length} item{order.items.length !== 1 ? 's' : ''}</td>
                    <td style={{ fontWeight: 600 }}>${order.total.toFixed(2)}</td>
                    <td style={{ textTransform: 'capitalize' }}>{order.paymentMethod === 'cod' ? 'COD' : order.paymentMethod}</td>
                    <td><StatusBadge status={order.orderStatus} /></td>
                    <td>
                      <button className="btn btn-outline btn-sm">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
