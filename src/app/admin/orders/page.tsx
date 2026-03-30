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

function PaymentBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    paid: 'badge-success',
    pending: 'badge-warning',
    failed: 'badge-danger',
  };
  return <span className={`badge ${styles[status] || 'badge-neutral'}`} style={{ textTransform: 'capitalize' }}>{status}</span>;
}

export default function AdminOrdersPage() {
  return (
    <>
      <div className="admin-header">
        <div>
          <h1>Orders</h1>
          <p style={{ color: 'var(--gray-500)', fontSize: '14px' }}>View and manage all customer orders.</p>
        </div>
        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          {['All', 'Pending', 'Confirmed', 'Packed', 'Shipped', 'Delivered'].map((status) => (
            <button key={status} className="btn btn-sm" style={{
              background: status === 'All' ? 'var(--amber-500)' : 'var(--white)',
              color: status === 'All' ? '#fff' : 'var(--gray-600)',
              border: '1px solid var(--gray-200)',
              borderRadius: 'var(--radius-full)',
            }}>
              {status}
            </button>
          ))}
        </div>
      </div>

      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Order #</th>
              <th>Date</th>
              <th>Customer</th>
              <th>Items</th>
              <th>Total</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td style={{ fontWeight: 600, fontFamily: 'var(--font-heading)' }}>{order.orderNumber}</td>
                <td>{new Date(order.createdAt).toLocaleDateString('en-SG', { day: 'numeric', month: 'short' })}</td>
                <td>
                  <div style={{ fontWeight: 500 }}>{order.customerName}</div>
                  <div style={{ fontSize: '12px', color: 'var(--gray-500)' }}>{order.customerEmail}</div>
                </td>
                <td>{order.items.length}</td>
                <td style={{ fontWeight: 600 }}>${order.total.toFixed(2)}</td>
                <td><PaymentBadge status={order.paymentStatus} /></td>
                <td><StatusBadge status={order.orderStatus} /></td>
                <td>
                  <Link href={`/admin/orders/${order.id}`} className="btn btn-outline btn-sm">View</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
