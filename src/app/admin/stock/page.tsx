import { products } from '@/data/products';
import { categories } from '@/data/categories';

export default function AdminStockPage() {
  const sortedProducts = [...products].sort((a, b) => a.stockQty - b.stockQty);

  return (
    <>
      <div className="admin-header">
        <div>
          <h1>Stock Management</h1>
          <p style={{ color: 'var(--gray-500)', fontSize: '14px' }}>Monitor and update stock levels.</p>
        </div>
      </div>

      {/* Stock Summary Cards */}
      <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
        <div className="stat-card">
          <div className="stat-label">Out of Stock</div>
          <div className="stat-value" style={{ color: 'var(--danger)' }}>{products.filter((p) => p.stockQty === 0).length}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Low Stock (≤ 20 units)</div>
          <div className="stat-value" style={{ color: 'var(--warning)' }}>{products.filter((p) => p.stockQty > 0 && p.stockQty <= 20).length}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Healthy Stock</div>
          <div className="stat-value" style={{ color: 'var(--success)' }}>{products.filter((p) => p.stockQty > 20).length}</div>
        </div>
      </div>

      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>SKU</th>
              <th>Category</th>
              <th>Current Stock</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedProducts.map((product) => {
              const cat = categories.find((c) => c.id === product.categoryId);
              const stockStatus = product.stockQty === 0 ? 'Out of Stock' : product.stockQty <= 20 ? 'Low Stock' : 'In Stock';
              const badgeClass = product.stockQty === 0 ? 'badge-danger' : product.stockQty <= 20 ? 'badge-warning' : 'badge-success';

              return (
                <tr key={product.id} style={product.stockQty === 0 ? { background: 'rgba(239,68,68,.03)' } : product.stockQty <= 20 ? { background: 'rgba(245,158,11,.03)' } : {}}>
                  <td style={{ fontWeight: 600 }}>{product.name}</td>
                  <td><code style={{ fontSize: '12px', background: 'var(--gray-100)', padding: '2px 6px', borderRadius: '4px' }}>{product.sku}</code></td>
                  <td>{cat?.name || '—'}</td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                      <div style={{
                        width: '100px',
                        height: '6px',
                        background: 'var(--gray-100)',
                        borderRadius: '3px',
                        overflow: 'hidden',
                      }}>
                        <div style={{
                          height: '100%',
                          width: `${Math.min(100, (product.stockQty / 500) * 100)}%`,
                          background: product.stockQty === 0 ? 'var(--danger)' : product.stockQty <= 20 ? 'var(--warning)' : 'var(--success)',
                          borderRadius: '3px',
                          transition: 'width 0.3s ease',
                        }} />
                      </div>
                      <span style={{ fontWeight: 600, minWidth: '40px' }}>{product.stockQty}</span>
                    </div>
                  </td>
                  <td><span className={`badge ${badgeClass}`}>{stockStatus}</span></td>
                  <td>
                    <button className="btn btn-outline btn-sm">Update Stock</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
