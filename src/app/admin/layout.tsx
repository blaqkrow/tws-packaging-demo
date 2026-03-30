'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: '📊' },
  { href: '/admin/products', label: 'Products', icon: '📦' },
  { href: '/admin/categories', label: 'Categories', icon: '🏷️' },
  { href: '/admin/orders', label: 'Orders', icon: '📋' },
  { href: '/admin/stock', label: 'Stock', icon: '📊' },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div style={{ marginBottom: 'var(--space-8)' }}>
          <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '20px', color: 'var(--white)', marginBottom: 'var(--space-1)' }}>
            TWS<span style={{ color: 'var(--amber-400)' }}>.</span> Admin
          </div>
          <div style={{ fontSize: '12px', color: 'var(--navy-400)' }}>Packaging Supply Management</div>
        </div>
        <nav>
          <ul className="admin-sidebar-nav">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={pathname === item.href ? 'active' : ''}
                >
                  <span>{item.icon}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div style={{ marginTop: 'auto', paddingTop: 'var(--space-10)', borderTop: '1px solid rgba(255,255,255,.06)', marginBlockStart: 'var(--space-10)' }}>
          <Link href="/" style={{ fontSize: '13px', color: 'var(--navy-300)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
            ← Back to Store
          </Link>
        </div>
      </aside>
      <div className="admin-main">
        {children}
      </div>
    </div>
  );
}
