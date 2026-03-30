export interface Product {
  id: string;
  name: string;
  sku: string;
  slug: string;
  description: string;
  specs: string[];
  price: number;
  categoryId: string;
  categorySlug: string;
  images: string[];
  stockQty: number;
  isActive: boolean;
  isFeatured: boolean;
}

export const products: Product[] = [
  // === OPP TAPES ===
  {
    id: 'prod-1',
    name: 'Smart OPP Tape (Brown)',
    sku: 'TWS-TAPE-BR-48',
    slug: 'smart-opp-tape-brown',
    description: 'Premium quality brown OPP packing tape by Smart Tape. Ideal for sealing carton boxes for shipping and storage. Strong adhesive that bonds securely to corrugated surfaces. Suitable for manual or machine dispensing.',
    specs: ['Width: 48mm', 'Length: 91m per roll', 'Thickness: 45 microns', 'Adhesive: Acrylic-based', 'Colour: Brown / Tan'],
    price: 2.80,
    categoryId: 'cat-1',
    categorySlug: 'opp-tapes',
    images: ['/images/products/smart-opp-tape-brown.jpg'],
    stockQty: 500,
    isActive: true,
    isFeatured: true,
  },
  {
    id: 'prod-2',
    name: 'Smart OPP Tape (Transparent)',
    sku: 'TWS-TAPE-CL-48',
    slug: 'smart-opp-tape-transparent',
    description: 'Crystal-clear OPP packing tape by Smart Tape. Perfect for sealing parcels where a clean, professional look is required. Does not yellow over time. Strong acrylic adhesive.',
    specs: ['Width: 48mm', 'Length: 91m per roll', 'Thickness: 45 microns', 'Adhesive: Acrylic-based', 'Colour: Transparent / Clear'],
    price: 2.80,
    categoryId: 'cat-1',
    categorySlug: 'opp-tapes',
    images: ['/images/products/smart-opp-tape-transparent.jpg'],
    stockQty: 350,
    isActive: true,
    isFeatured: true,
  },
  {
    id: 'prod-3',
    name: 'Smart OPP Tape (Brown) — 72mm Wide',
    sku: 'TWS-TAPE-BR-72',
    slug: 'smart-opp-tape-brown-72mm',
    description: 'Extra-wide brown OPP tape for heavy-duty carton sealing. 72mm width provides greater coverage and adhesion on larger boxes and heavy shipments.',
    specs: ['Width: 72mm', 'Length: 91m per roll', 'Thickness: 45 microns', 'Adhesive: Acrylic-based', 'Colour: Brown / Tan'],
    price: 4.20,
    categoryId: 'cat-1',
    categorySlug: 'opp-tapes',
    images: ['/images/products/smart-opp-tape-brown.jpg'],
    stockQty: 200,
    isActive: true,
    isFeatured: false,
  },
  // === STRAPPING BANDS ===
  {
    id: 'prod-4',
    name: 'PP Strapping Band (Black)',
    sku: 'TWS-STRAP-BK-12',
    slug: 'pp-strapping-band-black',
    description: 'Polypropylene (PP) strapping band in black. Designed for securing cartons, pallets, and bundles for safe transit. High tensile strength with good elongation to absorb impact.',
    specs: ['Width: 12mm', 'Thickness: 0.6mm', 'Length: 1000m per roll', 'Material: Polypropylene (PP)', 'Colour: Black', 'Tensile Strength: 120kg'],
    price: 18.50,
    categoryId: 'cat-2',
    categorySlug: 'strapping-bands',
    images: ['/images/products/strapping-band-black.jpg'],
    stockQty: 80,
    isActive: true,
    isFeatured: true,
  },
  {
    id: 'prod-5',
    name: 'PP Strapping Band (Black) — 15mm',
    sku: 'TWS-STRAP-BK-15',
    slug: 'pp-strapping-band-black-15mm',
    description: 'Heavy-duty 15mm width PP strapping band. Extra width for larger and heavier loads. Compatible with manual and semi-automatic strapping machines.',
    specs: ['Width: 15mm', 'Thickness: 0.8mm', 'Length: 800m per roll', 'Material: Polypropylene (PP)', 'Colour: Black', 'Tensile Strength: 180kg'],
    price: 22.00,
    categoryId: 'cat-2',
    categorySlug: 'strapping-bands',
    images: ['/images/products/strapping-band-black.jpg'],
    stockQty: 45,
    isActive: true,
    isFeatured: false,
  },
  // === CARTON BOXES ===
  {
    id: 'prod-6',
    name: 'Single-Wall Carton Box (Small)',
    sku: 'TWS-BOX-SW-S',
    slug: 'single-wall-carton-box-small',
    description: 'Compact single-wall corrugated carton box. Ideal for packing small items, electronics accessories, and lightweight goods for shipping.',
    specs: ['Dimensions: 300 × 200 × 150 mm (L×W×H)', 'Material: Single-wall corrugated board', 'Flute: B-flute', 'Colour: Brown kraft'],
    price: 1.20,
    categoryId: 'cat-3',
    categorySlug: 'carton-boxes',
    images: ['/images/products/smart-opp-tape-brown.jpg'],
    stockQty: 1000,
    isActive: true,
    isFeatured: true,
  },
  {
    id: 'prod-7',
    name: 'Double-Wall Carton Box (Medium)',
    sku: 'TWS-BOX-DW-M',
    slug: 'double-wall-carton-box-medium',
    description: 'Heavy-duty double-wall corrugated carton box for medium-weight items. Superior crush resistance for stacking during transit and warehousing.',
    specs: ['Dimensions: 450 × 350 × 300 mm (L×W×H)', 'Material: Double-wall corrugated board', 'Flute: BC-flute', 'Colour: Brown kraft'],
    price: 3.80,
    categoryId: 'cat-3',
    categorySlug: 'carton-boxes',
    images: ['/images/products/smart-opp-tape-brown.jpg'],
    stockQty: 600,
    isActive: true,
    isFeatured: false,
  },
  // === BUBBLE WRAP ===
  {
    id: 'prod-8',
    name: 'Bubble Wrap Roll (10mm Bubble)',
    sku: 'TWS-BW-10-100',
    slug: 'bubble-wrap-roll-10mm',
    description: 'Standard 10mm bubble wrap roll for protecting fragile items during shipping. Lightweight yet effective cushioning against impacts.',
    specs: ['Bubble diameter: 10mm', 'Roll width: 500mm', 'Roll length: 100m', 'Material: Polyethylene (PE)', 'Colour: Clear'],
    price: 15.00,
    categoryId: 'cat-4',
    categorySlug: 'bubble-wrap',
    images: ['/images/products/smart-opp-tape-transparent.jpg'],
    stockQty: 120,
    isActive: true,
    isFeatured: true,
  },
  {
    id: 'prod-9',
    name: 'Bubble Wrap Roll (20mm Bubble)',
    sku: 'TWS-BW-20-50',
    slug: 'bubble-wrap-roll-20mm',
    description: 'Large 20mm bubble wrap for heavy or extra-fragile items. Greater air cushion provides superior shock absorption for electronics, glassware, and ceramics.',
    specs: ['Bubble diameter: 20mm', 'Roll width: 500mm', 'Roll length: 50m', 'Material: Polyethylene (PE)', 'Colour: Clear'],
    price: 18.50,
    categoryId: 'cat-4',
    categorySlug: 'bubble-wrap',
    images: ['/images/products/smart-opp-tape-transparent.jpg'],
    stockQty: 0,
    isActive: true,
    isFeatured: false,
  },
  // === STRETCH FILM ===
  {
    id: 'prod-10',
    name: 'Stretch Film (Hand Roll)',
    sku: 'TWS-SF-HAND-500',
    slug: 'stretch-film-hand-roll',
    description: 'Manual stretch wrap film for hand application. Ideal for wrapping pallets, bundling items, and protecting goods in transit. High cling and puncture resistance.',
    specs: ['Width: 500mm', 'Length: 300m', 'Thickness: 20 microns', 'Material: LLDPE', 'Colour: Clear'],
    price: 8.50,
    categoryId: 'cat-5',
    categorySlug: 'stretch-film',
    images: ['/images/products/smart-opp-tape-transparent.jpg'],
    stockQty: 200,
    isActive: true,
    isFeatured: false,
  },
  {
    id: 'prod-11',
    name: 'Stretch Film (Machine Roll)',
    sku: 'TWS-SF-MACH-500',
    slug: 'stretch-film-machine-roll',
    description: 'Machine-grade stretch film for automated pallet wrapping systems. High pre-stretch capability reduces film usage and cost per pallet.',
    specs: ['Width: 500mm', 'Length: 1500m', 'Thickness: 23 microns', 'Material: LLDPE', 'Colour: Clear'],
    price: 28.00,
    categoryId: 'cat-5',
    categorySlug: 'stretch-film',
    images: ['/images/products/smart-opp-tape-transparent.jpg'],
    stockQty: 60,
    isActive: true,
    isFeatured: false,
  },
  {
    id: 'prod-12',
    name: 'Mini Stretch Film (100mm)',
    sku: 'TWS-SF-MINI-100',
    slug: 'mini-stretch-film-100mm',
    description: 'Compact mini stretch wrap with built-in handle. Perfect for wrapping small bundles, securing loose items, and quick warehouse use.',
    specs: ['Width: 100mm', 'Length: 150m', 'Thickness: 20 microns', 'Material: LLDPE', 'Colour: Clear'],
    price: 4.50,
    categoryId: 'cat-5',
    categorySlug: 'stretch-film',
    images: ['/images/products/smart-opp-tape-transparent.jpg'],
    stockQty: 300,
    isActive: true,
    isFeatured: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug && p.isActive);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isFeatured && p.isActive);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase();
  return products.filter(
    (p) =>
      p.isActive &&
      (p.name.toLowerCase().includes(q) ||
        p.sku.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.categorySlug.toLowerCase().includes(q))
  );
}
