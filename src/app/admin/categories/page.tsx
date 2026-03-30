import { categories } from '@/data/categories';
import { products } from '@/data/products';

export default function AdminCategoriesPage() {
  return (
    <>
      <div className="admin-header">
        <div>
          <h1>Categories</h1>
          <p style={{ color: 'var(--gray-500)', fontSize: '14px' }}>Organise your product categories.</p>
        </div>
        <button className="btn btn-primary">+ Add Category</button>
      </div>

      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Order</th>
              <th>Category</th>
              <th>Slug</th>
              <th>Products</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat) => {
              const productCount = products.filter((p) => p.categoryId === cat.id).length;
              return (
                <tr key={cat.id}>
                  <td style={{ fontWeight: 600, color: 'var(--gray-400)' }}>#{cat.sortOrder}</td>
                  <td style={{ fontWeight: 600 }}>{cat.name}</td>
                  <td><code style={{ fontSize: '12px', background: 'var(--gray-100)', padding: '2px 6px', borderRadius: '4px' }}>{cat.slug}</code></td>
                  <td>{productCount}</td>
                  <td>
                    <span className={`badge ${cat.isActive ? 'badge-success' : 'badge-neutral'}`}>
                      {cat.isActive ? 'Active' : 'Hidden'}
                    </span>
                  </td>
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
