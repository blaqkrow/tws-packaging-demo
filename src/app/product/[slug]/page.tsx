'use client';

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useMemo, useEffect, useRef } from 'react';
import { getProductBySlug, getProductsByCategory } from '@/data/products';
import { categories } from '@/data/categories';
import ProductCard from '@/components/ProductCard';
import QuoteForm from '@/components/QuoteForm';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(5);
  const [selectedImage, setSelectedImage] = useState(0);
  const quantityInputRef = useRef<HTMLInputElement>(null);
  const hideQuantity = ['customized-printed-opp-tape', 'diecut-box'].includes(slug);

  // Scroll to top when navigating to a new product
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setSelectedVariant(0);
    setSelectedImage(0);
  }, [slug]);

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

  /* --- Detect if this is a category with multiple sibling products (like OPP tapes: Transparent/Brown/Printed) --- */
  const siblingProducts = getProductsByCategory(product.categorySlug);
  const hasSiblings = siblingProducts.length > 1;

  const relatedProducts = siblingProducts
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const currentVariant = product.variants[selectedVariant];

  return (
    <>
      <section className="section">
        <div className="container">
          <Link
            href={category ? `/category/${category.slug}` : '/products'}
            className="back-btn"
          >
            ← Back
          </Link>
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep" style={{ color: 'var(--gray-300)' }}>/</span>
            {category && <><Link href={`/category/${category.slug}`}>{category.name}</Link><span className="sep" style={{ color: 'var(--gray-300)' }}>/</span></>}
            <span style={{ color: 'var(--gray-500)' }}>{product.name}</span>
          </div>

          <div className="product-detail">
            {/* Product Image Gallery */}
            <div className="product-gallery-wrap">
              <div className="product-gallery-main">
                <Image
                  src={product.images[selectedImage] || product.images[0]}
                  alt={product.name}
                  width={600}
                  height={600}
                  style={{ objectFit: 'contain', padding: '16px' }}
                  priority
                />
              </div>
              {product.images.length > 1 && (
                <div className="product-gallery-thumbs">
                  {product.images.map((img, index) => (
                    <button
                      key={index}
                      className={`product-gallery-thumb ${index === selectedImage ? 'active' : ''}`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <Image
                        src={img}
                        alt={`${product.name} - Image ${index + 1}`}
                        width={80}
                        height={80}
                        style={{ objectFit: 'contain', width: '100%', height: '100%', background: '#fff' }}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info + Configurator */}
            <div className="product-info">
              {category && (
                <Link href={`/category/${category.slug}`} style={{ fontSize: '13px', fontWeight: 600, color: 'var(--blue-500)', textTransform: 'uppercase', letterSpacing: '.06em' }}>
                  {category.name}
                </Link>
              )}
              <h1>{product.displayName || product.name}</h1>
              <p className="product-description">{product.description}</p>
              <p style={{ fontSize: '13px', color: 'var(--blue-600)', fontStyle: 'italic', marginTop: '8px', fontWeight: 500 }}>
                Part of our one-stop packaging solution to support your business operations.
              </p>

              {/* Configurator */}
              <div className="product-configurator">

                {/* Type Selection (show sibling products as tabs if applicable) */}
                {hasSiblings && (
                  <div className="config-section">
                    <label>Select Type</label>
                    <div className="config-tabs">
                      {siblingProducts.map((sib) => (
                        <Link
                          key={sib.id}
                          href={`/product/${sib.slug}`}
                          className={`config-tab ${sib.id === product.id ? 'active' : ''}`}
                        >
                          {sib.name.replace(category?.name + ' ', '').replace('Smart ', '').replace('Customized ', '')}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Size / Variant Selection */}
                {product.variants.length > 1 && (
                  <div className="config-section">
                    <label>Select Size</label>
                    <select
                      className="config-select"
                      value={selectedVariant}
                      onChange={(e) => setSelectedVariant(Number(e.target.value))}
                    >
                      {product.variants.map((v, i) => (
                        <option key={i} value={i}>{v.spec}</option>
                      ))}
                    </select>
                  </div>
                )}



                {/* Estimated Quantity */}
                {!hideQuantity && (
                  <div className="config-section">
                    <label>Estimated Quantity</label>
                    <div className="config-quantity">
                      <input
                        ref={quantityInputRef}
                        type="number"
                        min={1}
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                      />
                      <div className="config-quantity-presets">
                        <button
                          className="config-quantity-preset"
                          onClick={() => {
                            setQuantity(0);
                            quantityInputRef.current?.focus();
                          }}
                          style={![5, 10, 15, 20].includes(quantity) ? { borderColor: 'var(--blue-500)', color: 'var(--blue-700)', background: 'var(--blue-50)' } : {}}
                        >
                          Custom
                        </button>
                        {[5, 10, 15, 20].map((q) => (
                          <button
                            key={q}
                            className="config-quantity-preset"
                            onClick={() => setQuantity(q)}
                            style={quantity === q ? { borderColor: 'var(--blue-500)', color: 'var(--blue-700)', background: 'var(--blue-50)' } : {}}
                          >
                            {q}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Specs */}
              <ul className="product-specs">
                {product.specs.map((spec, i) => (
                  <li key={i}>{spec}</li>
                ))}
              </ul>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
                <button className="btn btn-primary btn-lg" onClick={() => setQuoteOpen(true)} style={{ flex: 1 }}>
                  Get Quote
                </button>
                <a
                  href={`https://wa.me/6590482345?text=Hi%20Megapac%2C%20I%27m%20interested%20in%20${encodeURIComponent(product.name)}%20(${encodeURIComponent(currentVariant?.spec || '')})${hideQuantity ? '' : `%20x${quantity}`}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-lg"
                  style={{ background: '#25D366', color: '#fff', borderColor: '#25D366' }}
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section-sm" style={{ background: 'var(--gray-50)' }}>
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

      <QuoteForm
        isOpen={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        productName={product.name}
        productVariant={currentVariant?.spec}
      />
    </>
  );
}
