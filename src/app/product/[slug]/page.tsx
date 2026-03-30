'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useCart } from '@/components/CartProvider';
import { getProductBySlug, getProductsByCategory } from '@/data/products';
import { categories } from '@/data/categories';
import ProductCard from '@/components/ProductCard';

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="section">
        <div className="container empty-state">
          <div className="empty-state-icon">🔍</div>
          <h3>Product Not Found</h3>
          <p>The product you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/" className="btn btn-primary">Go Home</Link>
        </div>
      </div>
    );
  }

  const category = categories.find((c) => c.id === product.categoryId);
  const relatedProducts = getProductsByCategory(product.categorySlug)
    .filter((p) => p.id !== product.id)
    .slice(0, 3);
  const outOfStock = product.stockQty === 0;
  const lowStock = product.stockQty > 0 && product.stockQty <= 10;

  const handleAddToCart = () => {
    addItem(
      {
        id: product.id,
        name: product.name,
        sku: product.sku,
        slug: product.slug,
        price: product.price,
        image: product.images[0],
        stockQty: product.stockQty,
      },
      quantity
    );
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            {category && <><Link href={`/category/${category.slug}`}>{category.name}</Link><span className="sep">/</span></>}
            <span style={{ color: 'var(--gray-700)' }}>{product.name}</span>
          </div>

          <div className="product-detail">
            <div className="product-gallery">
              <Image
                src={product.images[0]}
                alt={product.name}
                width={600}
                height={600}
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>

            <div className="product-info">
              {category && (
                <Link href={`/category/${category.slug}`} style={{ fontSize: '13px', fontWeight: 600, color: 'var(--teal-500)', textTransform: 'uppercase', letterSpacing: '.06em' }}>
                  {category.name}
                </Link>
              )}
              <h1>{product.name}</h1>
              <div className="product-sku">SKU: {product.sku}</div>

              <div className="product-price-large">
                ${product.price.toFixed(2)} <span>/unit</span>
              </div>

              <div className="stock-indicator">
                <span className={`stock-dot ${outOfStock ? 'out-of-stock' : lowStock ? 'low-stock' : 'in-stock'}`} />
                {outOfStock ? (
                  <span style={{ color: 'var(--danger)' }}>Out of Stock</span>
                ) : lowStock ? (
                  <span style={{ color: 'var(--warning)' }}>Low Stock — {product.stockQty} left</span>
                ) : (
                  <span style={{ color: 'var(--success)' }}>In Stock — {product.stockQty} units</span>
                )}
              </div>

              <p className="product-description">{product.description}</p>

              <ul className="product-specs">
                {product.specs.map((spec, i) => (
                  <li key={i}>{spec}</li>
                ))}
              </ul>

              {!outOfStock && (
                <>
                  <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: 'var(--space-2)' }}>Quantity</div>
                  <div className="quantity-selector">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, Math.min(product.stockQty, parseInt(e.target.value) || 1)))}
                      min={1}
                      max={product.stockQty}
                    />
                    <button onClick={() => setQuantity(Math.min(product.stockQty, quantity + 1))}>+</button>
                  </div>

                  <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
                    <button className="btn btn-primary btn-lg" onClick={handleAddToCart} style={{ flex: 1 }}>
                      {added ? '✓ Added to Cart!' : 'Add to Cart'}
                    </button>
                    <Link href="/cart" className="btn btn-outline btn-lg">
                      View Cart
                    </Link>
                  </div>
                </>
              )}

              {outOfStock && (
                <button className="btn btn-secondary btn-lg" disabled style={{ width: '100%' }}>
                  Out of Stock
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section-sm" style={{ background: 'var(--gray-100)' }}>
          <div className="container">
            <div className="section-header">
              <div>
                <h2>Related <span>Products</span></h2>
              </div>
            </div>
            <div className="product-grid">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
