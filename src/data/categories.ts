export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  isActive: boolean;
  sortOrder: number;
}

export const categories: Category[] = [
  {
    id: 'cat-1',
    name: 'OPP Tapes',
    slug: 'opp-tapes',
    description: 'High-quality OPP packaging tapes for sealing cartons and parcels. Available in brown, transparent, and printed variants.',
    image: '/images/products/smart-opp-tape-brown.jpg',
    isActive: true,
    sortOrder: 1,
  },
  {
    id: 'cat-2',
    name: 'Strapping Bands',
    slug: 'strapping-bands',
    description: 'Heavy-duty PP and PET strapping bands for securing pallets, cartons, and heavy loads during transit.',
    image: '/images/products/strapping-band-black.jpg',
    isActive: true,
    sortOrder: 2,
  },
  {
    id: 'cat-3',
    name: 'Carton Boxes',
    slug: 'carton-boxes',
    description: 'Single and double-wall corrugated carton boxes in standard and custom sizes for shipping and storage.',
    image: '/images/categories/carton-boxes.svg',
    isActive: true,
    sortOrder: 3,
  },
  {
    id: 'cat-4',
    name: 'Bubble Wrap',
    slug: 'bubble-wrap',
    description: 'Protective bubble wrap rolls in various bubble sizes for cushioning fragile items during transit.',
    image: '/images/categories/bubble-wrap.svg',
    isActive: true,
    sortOrder: 4,
  },
  {
    id: 'cat-5',
    name: 'Stretch Film',
    slug: 'stretch-film',
    description: 'Industrial stretch wrap film for pallet wrapping and load securing. Available in hand and machine rolls.',
    image: '/images/categories/stretch-film.svg',
    isActive: true,
    sortOrder: 5,
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
