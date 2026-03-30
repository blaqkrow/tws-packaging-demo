import Link from 'next/link';
import { orders } from '@/data/orders';
import { products } from '@/data/products';

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

export default function AdminDashboard() {
  const totalRevenue = orders.filter((o) => o.paymentStatus === 'paid').reduce((sum, o) => sum + o.total, 0);
  const lowStockProducts = products.filter((p) => p.stockQty > 0 && p.stockQty <= 20);
  const outOfStockCount = products.filter((p) => p.stockQty === 0).length;
  const todayOrders = orders.filter((o) => {
    const d = new Date(o.createdAt);
    const today = new Date();
    return d.toDateString() === today.toDateString();
  });

  const topProducts = [...products].sort((a, b) => b.stockQty - a.stockQty).slice(0, 5);

  return (
    <>
      <div className="admin-header">
        <div>
          <h1>Dashboard</h1>
          <p style={{ color: 'var(--gray-500)', fontSize: '14px' }}>Welcome back! Here&apos;s your store overview.</p>
        </div>
      </div>

      {/* Stats */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">Total Orders</div>
          <div className="stat-value">{orders.length}</div>
          <div className="stat-change up">↑ {todayOrders.length} today</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Revenue (Paid)</div>
          <div className="stat-value">${totalRevenue.toFixed(0)}</div>
          <div className="stat-change up">↑ 12% vs last month</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Active Products</div>
          <div className="stat-value">{products.filter((p) => p.isActive).length}</div>
          <div className="stat-change" style={{ color: 'var(--gray-500)' }}>{products.length} total</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Low Stock Alerts</div>
          <div className="stat-value" style={{ color: lowStockProducts.length > 0 ? 'var(--warning)' : 'var(--success)' }}>{lowStockProducts.length}</div>
          <div className="stat-change down">{outOfStockCount} out of stock</div>
        </div>
      </div>

      {/* Recent Orders + Top Products */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 'var(--space-6)' }}>
        {/* Recent Orders */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-4)' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px' }}>Recent Orders</h3>
            <Link href="/admin/orders" className="btn btn-outline btn-sm">View All →</Link>
          </div>
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Order</th>
                  <th>Customer</th>
                  <th>Total</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.slice(0, 5).map((order) => (
                  <tr key={order.id}>
                    <td style={{ fontWeight: 600 }}>{order.orderNumber}</td>
                    <td>{order.customerName}</td>
                    <td>${order.total.toFixed(2)}</td>
                    <td><StatusBadge status={order.orderStatus} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Products */}
        <div>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', marginBottom: 'var(--space-4)' }}>Top Products by Stock</h3>
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Stock</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {topProducts.map((p) => (
                  <tr key={p.id}>
                    <td style={{ fontWeight: 500 }}>{p.name}</td>
                    <td>
                      <span className={`badge ${p.stockQty === 0 ? 'badge-danger' : p.stockQty <= 20 ? 'badge-warning' : 'badge-success'}`}>
                        {p.stockQty}
                      </span>
                    </td>
                    <td>${p.price.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
