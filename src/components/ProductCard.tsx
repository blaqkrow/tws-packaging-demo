'use client';

import Link from 'next/link';
import Image from 'next/image';
import { categories } from '@/data/categories';
import type { Product } from '@/data/products';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const category = categories.find((c) => c.id === product.categoryId);
  const mainVariant = product.variants[0];

  return (
    <Link href={`/product/${product.slug}`} className="product-card">
      <div className="product-card-img">
        <Image
          src={product.images[0]}
          alt={product.name}
          width={400}
          height={300}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="product-card-body">
        {category && <div className="product-card-category">{category.name}</div>}
        <h3>{product.name}</h3>
        {mainVariant && <div className="product-card-code">{mainVariant.code}</div>}
        <div className="product-card-spec">{mainVariant?.spec || product.specs[0]}</div>
        <span className="btn btn-primary">
          Get a Quote →
        </span>
      </div>
    </Link>
  );
}
