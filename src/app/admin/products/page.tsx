import { products } from '@/data/products';
import { categories } from '@/data/categories';

export default function AdminProductsPage() {
  return (
    <>
      <div className="admin-header">
        <div>
          <h1>Products</h1>
          <p style={{ color: 'var(--gray-500)', fontSize: '14px' }}>Manage your product catalogue.</p>
        </div>
        <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
          <button className="btn btn-outline btn-sm">📥 Import CSV</button>
          <button className="btn btn-primary">+ Add Product</button>
        </div>
      </div>

      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>SKU</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Status</th>
              <th>Featured</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              const cat = categories.find((c) => c.id === product.categoryId);
              return (
                <tr key={product.id}>
                  <td style={{ fontWeight: 600 }}>{product.name}</td>
                  <td><code style={{ fontSize: '12px', background: 'var(--gray-100)', padding: '2px 6px', borderRadius: '4px' }}>{product.sku}</code></td>
                  <td>{cat?.name || '—'}</td>
                  <td>${product.price.toFixed(2)}</td>
                  <td>
                    <span className={`badge ${product.stockQty === 0 ? 'badge-danger' : product.stockQty <= 20 ? 'badge-warning' : 'badge-success'}`}>
                      {product.stockQty}
                    </span>
                  </td>
                  <td>
                    <span className={`badge ${product.isActive ? 'badge-success' : 'badge-neutral'}`}>
                      {product.isActive ? 'Active' : 'Archived'}
                    </span>
                  </td>
                  <td>{product.isFeatured ? '⭐' : '—'}</td>
                  <td>
                    <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                      <button className="btn btn-outline btn-sm">Edit</button>
                      <button className="btn btn-sm" style={{ color: 'var(--danger)' }}>Archive</button>
                    </div>
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
