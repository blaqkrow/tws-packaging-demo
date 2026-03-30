'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from './CartProvider';
import { Product } from '@/data/products';
import { categories } from '@/data/categories';

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const category = categories.find((c) => c.id === product.categoryId);
  const outOfStock = product.stockQty === 0;
  const lowStock = product.stockQty > 0 && product.stockQty <= 10;

  const handleAdd = () => {
    if (outOfStock) return;
    addItem({
      id: product.id,
      name: product.name,
      sku: product.sku,
      slug: product.slug,
      price: product.price,
      image: product.images[0],
      stockQty: product.stockQty,
    });
  };

  return (
    <div className="product-card">
      <Link href={`/product/${product.slug}`}>
        <div className="product-card-image">
          <Image
            src={product.images[0]}
            alt={product.name}
            width={400}
            height={400}
            style={{ objectFit: 'cover' }}
          />
          {outOfStock && (
            <div className="product-card-stock">
              <span className="badge badge-danger">Out of Stock</span>
            </div>
          )}
          {lowStock && (
            <div className="product-card-stock">
              <span className="badge badge-warning">Low Stock</span>
            </div>
          )}
        </div>
      </Link>
      <div className="product-card-body">
        {category && (
          <div className="product-card-category">{category.name}</div>
        )}
        <div className="product-card-name">
          <Link href={`/product/${product.slug}`}>{product.name}</Link>
        </div>
        <div className="product-card-price">
          ${product.price.toFixed(2)} <span>/unit</span>
        </div>
        <div className="product-card-footer">
          <span style={{ fontSize: '13px', color: 'var(--gray-500)' }}>
            {outOfStock ? 'Unavailable' : `${product.stockQty} in stock`}
          </span>
          <button
            className="btn btn-primary btn-sm"
            onClick={handleAdd}
            disabled={outOfStock}
          >
            {outOfStock ? 'Sold Out' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}
