export interface ProductVariant {
  code: string;
  spec: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  specs: string[];
  categoryId: string;
  categorySlug: string;
  images: string[];
  variants: ProductVariant[];
  isFeatured: boolean;
  isActive: boolean;
}

export const products: Product[] = [
  // ═══════════════════════════════════════
  //  PVC TAPES (cat-1)
  // ═══════════════════════════════════════
  {
    id: 'prod-1',
    name: 'PVC Tape',
    slug: 'pvc-tape',
    description: 'Multi-purpose PVC tape for floor marking, colour coding, and general bundling. Available in Yellow, Blue, and Red. Strong adhesive with clean removal.',
    specs: ['Width: 48mm', 'Length: 33m', 'Material: PVC'],
    categoryId: 'cat-1',
    categorySlug: 'pvc-tapes',
    images: ['/images/products-new/pvc-tape-product.png', '/images/products-new/pvc-tape.png'],
    variants: [
      { code: 'FMT-4833Y', spec: '48mm × 33m — Yellow' },
      { code: 'FMT-4833B', spec: '48mm × 33m — Blue' },
      { code: 'FMT-4833R', spec: '48mm × 33m — Red' },
    ],
    isFeatured: true,
    isActive: true,
  },

  // ═══════════════════════════════════════
  //  SMART OPP TAPES — TRANSPARENT (cat-2)
  // ═══════════════════════════════════════
  {
    id: 'prod-4',
    name: 'Smart OPP Tape (Transparent)',
    slug: 'smart-opp-tape-transparent',
    description: 'Strong, clear plastic packing tape used for sealing cartons. Good adhesion, durable, and cost-effective for general packaging.',
    specs: ['Material: OPP (Oriented Polypropylene)', 'Colour: Transparent'],
    categoryId: 'cat-2',
    categorySlug: 'opp-tapes',
    images: ['/images/products-new/opp-tape-product.png', '/images/products-new/opp-tape-transparent.png'],
    variants: [
      { code: 'OPP-S2445TE', spec: '24mm × 45m' },
      { code: 'OPP-S4840TE', spec: '48mm × 40m' },
      { code: 'OPP-S4845TE', spec: '48mm × 45m' },
      { code: 'OPP-PI4880TE', spec: '48mm × 80m' },
      { code: 'OPP-S4890TE', spec: '48mm × 90m' },
      { code: 'OPP-S7245TE', spec: '72mm × 45m' },
      { code: 'OPP-S7280TE', spec: '72mm × 80m' },
      { code: 'OPP-S7290TE', spec: '72mm × 90m' },
      { code: 'OPP-S48900TE', spec: '48mm × 900m (Machine Roll)' },
      { code: 'OPP-S72900TE', spec: '72mm × 900m (Machine Roll)' },
    ],
    isFeatured: true,
    isActive: true,
  },

  // ─── SMART OPP TAPES — BROWN ──────────
  {
    id: 'prod-5',
    name: 'Smart OPP Tape (Brown)',
    slug: 'smart-opp-tape-brown',
    description: 'Strong, brown plastic packing tape used for sealing cartons. Good adhesion, durable, and cost-effective for general packaging.',
    specs: ['Material: OPP (Oriented Polypropylene)', 'Colour: Brown'],
    categoryId: 'cat-2',
    categorySlug: 'opp-tapes',
    images: ['/images/products-new/opp-tape-product.png', '/images/products-new/opp-tape-brown.png'],
    variants: [
      { code: 'OPP-S4840BE', spec: '48mm × 40m' },
      { code: 'OPP-S4845BE', spec: '48mm × 45m' },
      { code: 'OPP-PI4880BE', spec: '48mm × 80m' },
      { code: 'OPP-S4890BE', spec: '48mm × 90m' },
      { code: 'OPP-S7290BE', spec: '72mm × 90m' },
      { code: 'OPP-S48900BE', spec: '48mm × 900m (Machine Roll)' },
    ],
    isFeatured: true,
    isActive: true,
  },

  // ═══════════════════════════════════════
  //  PRINTED TAPE (cat-3)
  // ═══════════════════════════════════════
  {
    id: 'prod-6',
    name: 'Customized Printed OPP Tape',
    slug: 'customized-printed-opp-tape',
    description: 'Custom-printed OPP tape with your company logo, branding, or hazard messaging. Same adhesion and quality as our Smart OPP tape range — available in all standard sizes.',
    specs: ['Material: OPP (Oriented Polypropylene)', 'Sizes: Same as Smart OPP tape', 'Minimum Order: Contact us for MOQ'],
    categoryId: 'cat-3',
    categorySlug: 'printed-tape',
    images: ['/images/products-new/printed-tape-product.png', '/images/products-new/printed-tape.png'],
    variants: [
      { code: 'OPP-CUSTOM', spec: 'Same sizes as Smart OPP tape' },
    ],
    isFeatured: true,
    isActive: true,
  },

  // ═══════════════════════════════════════
  //  MASKING TAPE (cat-4)
  // ═══════════════════════════════════════
  {
    id: 'prod-7',
    name: 'Smart Masking Tape',
    slug: 'smart-masking-tape',
    description: 'Light adhesive paper tape used for painting, labeling, and temporary holding. Easy to tear and remove without leaving residue.',
    specs: ['Material: Crepe Paper', 'Adhesive: Rubber-based', 'Length: 22 yards per roll', 'Temperature Resistance: Up to 60°C'],
    categoryId: 'cat-4',
    categorySlug: 'masking-tape',
    images: ['/images/products-new/masking-tape-product.jpg', '/images/products-new/masking-tape.png'],
    variants: [
      { code: 'MT-SM1822', spec: '18mm × 22y' },
      { code: 'MT-SM2422', spec: '24mm × 22y' },
      { code: 'MT-SM3622', spec: '36mm × 22y' },
      { code: 'MT-SM4822', spec: '48mm × 22y' },
    ],
    isFeatured: false,
    isActive: true,
  },

  // ═══════════════════════════════════════
  //  CLOTH TAPE (cat-5)
  // ═══════════════════════════════════════
  {
    id: 'prod-8',
    name: 'Cloth Tape',
    slug: 'cloth-tape',
    description: 'Heavy-duty fabric-backed tape with strong adhesive. Flexible, water-resistant, and ideal for repairs, bundling, and rough use.',
    specs: ['Width: 48mm', 'Length: 7m', 'Material: Cloth / Fabric', 'Adhesive: Hot-melt rubber'],
    categoryId: 'cat-5',
    categorySlug: 'cloth-tape',
    images: ['/images/products-new/cloth-tape-product.jpeg', '/images/products-new/cloth-tape.png'],
    variants: [
      { code: 'CT-48X7', spec: '48mm × 7m' },
    ],
    isFeatured: false,
    isActive: true,
  },

  // ═══════════════════════════════════════
  //  KRAFT TAPE (cat-6)
  // ═══════════════════════════════════════
  {
    id: 'prod-9',
    name: 'Kraft Tape',
    slug: 'kraft-tape',
    description: 'Paper-based tape (often brown) used for carton sealing. Eco-friendly, strong bond (especially water-activated type), and recyclable with boxes.',
    specs: ['Material: Kraft Paper', 'Adhesive: Hot-melt', 'Type: Self-adhesive'],
    categoryId: 'cat-6',
    categorySlug: 'kraft-tape',
    images: ['/images/products-new/kraft-tape-product.jpeg', '/images/products-new/kraft-tape.png'],
    variants: [
      { code: 'KT-5050', spec: '50mm × 50m' },
      { code: 'KT-7550', spec: '75mm × 50m' },
    ],
    isFeatured: false,
    isActive: true,
  },

  // ═══════════════════════════════════════
  //  STRETCH FILM (cat-7)
  // ═══════════════════════════════════════
  {
    id: 'prod-10',
    name: 'Stretch Film Hand Roll',
    slug: 'stretch-film-hand-roll',
    description: 'Industrial-grade hand stretch wrap film for manual pallet wrapping and load securing. High stretch ratio for tight, secure wrapping with excellent cling and puncture resistance.',
    specs: ['Width: 500mm', 'Material: LLDPE', 'Type: Hand Roll'],
    categoryId: 'cat-7',
    categorySlug: 'stretch-film',
    images: ['/images/products-new/stretch-film-product.png', '/images/products-new/stretch-film.png'],
    variants: [
      { code: 'SF-50009A', spec: '500mm × 12mic × 1.5kg (250m)' },
      { code: 'SF-50005', spec: '500mm × 17mic × 2.0kg (220m)' },
      { code: 'SF-50004', spec: '500mm × 17mic × 2.3kg (250m)' },
      { code: 'SF-50011A', spec: '500mm × 23mic × 2.2kg (190m)' },
      { code: 'SF-50011', spec: '500mm × 23mic × 2.3kg (200m)' },
      { code: 'SF-50012', spec: '500mm × 23mic × 2.5kg (210m)' },
      { code: 'SF-50012B', spec: '500mm × 23mic × 2.6kg (220m)' },
      { code: 'SF-50013', spec: '500mm × 23mic × 2.7kg (230m)' },
      { code: 'SF-50014', spec: '500mm × 23mic × 2.75kg (240m)' },
      { code: 'SF-50015', spec: '500mm × 23mic × 2.8kg (240m)' },
    ],
    isFeatured: true,
    isActive: true,
  },
  {
    id: 'prod-11',
    name: 'Stretch Film Hand Roll (Black)',
    slug: 'stretch-film-hand-roll-black',
    description: 'Opaque stretch film used to wrap and secure pallets while concealing contents. Provides strong hold, protection from dust/UV, and added security for transport and storage.',
    specs: ['Width: 500mm', 'Thickness: 23 microns', 'Weight: 2.7kg (230m)', 'Material: LLDPE', 'Colour: Black'],
    categoryId: 'cat-7',
    categorySlug: 'stretch-film',
    images: ['/images/products-new/stretch-film-black-product.jpg'],
    variants: [
      { code: 'SF-8119BK', spec: '500mm × 23mic × 2.7kg (230m) — Black' },
    ],
    isFeatured: false,
    isActive: true,
  },
  {
    id: 'prod-12',
    name: 'Stretch Film Machine Roll',
    slug: 'stretch-film-machine-roll',
    description: 'High-strength plastic wrapping film used with stretch wrapping machines to secure and stabilize pallet loads. Offers consistent stretch, strong cling, and efficient high-volume packaging.',
    specs: ['Width: 500mm', 'Thickness: 23 microns', 'Material: LLDPE', 'Type: Machine Roll'],
    categoryId: 'cat-7',
    categorySlug: 'stretch-film',
    images: ['/images/products-new/stretch-film-machine-product.jpeg', '/images/products-new/stretch-film.png'],
    variants: [
      { code: 'SF-811614', spec: '500mm × 23mic × 14kg (1220m)' },
      { code: 'SF-811715', spec: '500mm × 23mic × 15kg (1320m)' },
    ],
    isFeatured: false,
    isActive: true,
  },

  // ═══════════════════════════════════════
  //  BUNDLE WRAP (cat-8)
  // ═══════════════════════════════════════
  {
    id: 'prod-13',
    name: 'Stretch Film Bundle Wrap — 100mm',
    slug: 'stretch-film-bundle-wrap-100',
    description: 'Compact 100mm stretch film roll designed for bundling small items, wrapping irregularly shaped packages, and securing components together.',
    specs: ['Width: 100mm', 'Length: 140m', 'Material: LLDPE', 'Type: Bundle/Mini Wrap'],
    categoryId: 'cat-8',
    categorySlug: 'bundle-wrap',
    images: ['/images/products-new/bundle-wrap-product.jpg', '/images/products-new/bundle-wrap.png'],
    variants: [
      { code: 'SFBW-100', spec: '100mm × 140m' },
    ],
    isFeatured: false,
    isActive: true,
  },
  {
    id: 'prod-14',
    name: 'Stretch Film Bundle Wrap — 150mm',
    slug: 'stretch-film-bundle-wrap-150',
    description: 'Wider 150mm bundle wrap for medium-sized items. Easy one-hand application for fast packing and wrapping in warehouses and shipping rooms.',
    specs: ['Width: 150mm', 'Length: 140m', 'Material: LLDPE', 'Type: Bundle/Mini Wrap'],
    categoryId: 'cat-8',
    categorySlug: 'bundle-wrap',
    images: ['/images/products-new/bundle-wrap-product.jpg', '/images/products-new/bundle-wrap.png'],
    variants: [
      { code: 'SFBW-150', spec: '150mm × 140m' },
    ],
    isFeatured: false,
    isActive: true,
  },

  // ═══════════════════════════════════════
  //  PE FOAM ROLLS (cat-9)
  // ═══════════════════════════════════════
  {
    id: 'prod-15',
    name: 'PE Foam Roll — 1mm',
    slug: 'pe-foam-roll-1mm',
    description: 'Lightweight 1mm polyethylene foam roll for surface protection, interleaving, and cushioning during transport. Ideal for glass, electronics, and furniture.',
    specs: ['Width: 1000mm', 'Length: 300m', 'Thickness: 1mm', 'Material: Polyethylene Foam'],
    categoryId: 'cat-9',
    categorySlug: 'pe-foam-rolls',
    images: ['/images/products-new/pe-foam-roll.png'],
    variants: [
      { code: 'PEF-10003001', spec: '1000mm × 300m × 1mm' },
    ],
    isFeatured: false,
    isActive: true,
  },
  {
    id: 'prod-16',
    name: 'PE Foam Roll — 2mm',
    slug: 'pe-foam-roll-2mm',
    description: 'Medium 2mm polyethylene foam roll with improved cushioning. Provides excellent separation and scratch protection for delicate items during shipping.',
    specs: ['Width: 1000mm', 'Length: 300m', 'Thickness: 2mm', 'Material: Polyethylene Foam'],
    categoryId: 'cat-9',
    categorySlug: 'pe-foam-rolls',
    images: ['/images/products-new/pe-foam-roll.png'],
    variants: [
      { code: 'PEF-10001502', spec: '1000mm × 300m × 2mm' },
    ],
    isFeatured: false,
    isActive: true,
  },
  {
    id: 'prod-17',
    name: 'PE Foam Roll — 3mm',
    slug: 'pe-foam-roll-3mm',
    description: 'Thick 3mm polyethylene foam roll for heavy-duty cushioning and wrapping. Best suited for fragile goods, appliances, and furniture protection.',
    specs: ['Width: 1000mm', 'Length: 300m', 'Thickness: 3mm', 'Material: Polyethylene Foam'],
    categoryId: 'cat-9',
    categorySlug: 'pe-foam-rolls',
    images: ['/images/products-new/pe-foam-roll.png'],
    variants: [
      { code: 'PEF-10001003', spec: '1000mm × 300m × 3mm' },
    ],
    isFeatured: false,
    isActive: true,
  },

  // ═══════════════════════════════════════
  //  LAMINATED PE FOAM SHEETS (cat-10)
  // ═══════════════════════════════════════
  {
    id: 'prod-18',
    name: 'Laminated PE Foam Sheet',
    slug: 'laminated-pe-foam-sheet',
    description: 'Multi-layer foam sheet with enhanced strength and cushioning. Provides superior protection against impact, moisture, and scratches for packaging and insulation applications.',
    specs: ['Width: 1000mm', 'Length: 2000mm', 'Material: Laminated PE Foam'],
    categoryId: 'cat-10',
    categorySlug: 'laminated-pe-foam-sheets',
    images: ['/images/products-new/laminated-pe-foam-product.jpg', '/images/products-new/laminated-pe-foam-application.png'],
    variants: [
      { code: 'PEF-1000200012', spec: '1000 × 2000 × 12mm (½")' },
      { code: 'PEF-1000200025', spec: '1000 × 2000 × 25mm (1")' },
      { code: 'PEF-1000200040', spec: '1000 × 2000 × 40mm (1.5")' },
      { code: 'PEF-1000200050', spec: '1000 × 2000 × 50mm (2")' },
      { code: 'PEF-1000200075', spec: '1000 × 2000 × 75mm (3")' },
    ],
    isFeatured: false,
    isActive: true,
  },

  // ═══════════════════════════════════════
  //  EDGEBOARD PROTECTORS (cat-11)
  // ═══════════════════════════════════════
  {
    id: 'prod-19',
    name: 'Edgeboard Protector',
    slug: 'edgeboard-protector',
    description: 'Rigid cardboard protector placed on edges of cartons or pallets to prevent damage, improve stacking strength, and secure strapping.',
    specs: ['Material: Kraft Paper / Cardboard', 'Type: L-shaped corner protector'],
    categoryId: 'cat-11',
    categorySlug: 'edgeboard-protectors',
    images: ['/images/products-new/edgeboard-product.png', '/images/products-new/edgeboard-application.jpg', '/images/products-new/edgeboard-application-2.jpg'],
    variants: [
      { code: 'EP-353532000K', spec: '35 × 35 × 3 × 2000mm' },
      { code: 'EP-505041000K', spec: '50 × 50 × 4 × 1000mm' },
      { code: 'EP-505041200K', spec: '50 × 50 × 4 × 1200mm' },
      { code: 'EP-505041500K', spec: '50 × 50 × 4 × 1500mm' },
      { code: 'EP-505042000K', spec: '50 × 50 × 4 × 2000mm' },
    ],
    isFeatured: false,
    isActive: true,
  },

  // ═══════════════════════════════════════
  //  DUNNAGE AIR BAGS (cat-12)
  // ═══════════════════════════════════════
  {
    id: 'prod-20',
    name: 'Dunnage Air Bag',
    slug: 'dunnage-air-bag',
    description: 'Inflatable bag placed between cargo to secure and stabilize loads during transport. Prevents shifting, damage, and improves shipment safety.',
    specs: ['Material: PP Woven / Kraft Paper', 'Filling: Compressed air', 'Usage: Container / truck void fill'],
    categoryId: 'cat-12',
    categorySlug: 'dunnage-air-bags',
    images: ['/images/products-new/dunnage-airbag-product.png', '/images/products-new/dunnage-application.jpeg', '/images/products-new/dunnage-application-2.jpeg'],
    variants: [
      { code: 'DAB-8001200', spec: '800mm × 1200mm' },
      { code: 'DAB-8501850', spec: '850mm × 1850mm' },
      { code: 'DAB-10001800', spec: '1000mm × 1800mm' },
      { code: 'DAB-10002200', spec: '1000mm × 2200mm' },
    ],
    isFeatured: true,
    isActive: true,
  },

  // ═══════════════════════════════════════
  //  PACKING LIST ENVELOPES (cat-13)
  // ═══════════════════════════════════════
  {
    id: 'prod-21',
    name: 'Packing List Envelope (Red)',
    slug: 'packing-list-envelope-red',
    description: 'Self-adhesive packing list envelope with red "PACKING LIST ENCLOSED" print. Keeps shipping documents visible and protected on carton surfaces.',
    specs: ['Size: 115mm × 165mm', 'Type: Self-adhesive', 'Colour: Red Print', 'Material: LDPE'],
    categoryId: 'cat-13',
    categorySlug: 'packing-list-envelopes',
    images: ['/images/products-new/packing-envelope-product.png', '/images/products-new/packing-envelope-printed.png'],
    variants: [
      { code: 'PLE-SM115165(RED)', spec: '115mm × 165mm — Red' },
    ],
    isFeatured: false,
    isActive: true,
  },
  {
    id: 'prod-22',
    name: 'Packing List Envelope (Printed)',
    slug: 'packing-list-envelope-printed',
    description: 'Self-adhesive packing list envelope with "PACKING LIST ENCLOSED" printed text. Available in multiple sizes to fit various document types.',
    specs: ['Type: Self-adhesive', 'Print: "PACKING LIST ENCLOSED"', 'Material: LDPE'],
    categoryId: 'cat-13',
    categorySlug: 'packing-list-envelopes',
    images: ['/images/products-new/packing-envelope-product.png', '/images/products-new/packing-envelope-printed.png'],
    variants: [
      { code: 'PLE-SM175135', spec: '180mm × 140mm' },
      { code: 'PLE-SM240135', spec: '254mm × 140mm' },
      { code: 'PLE-SM240185', spec: '240mm × 185mm' },
    ],
    isFeatured: false,
    isActive: true,
  },
  {
    id: 'prod-23',
    name: 'Packing List Envelope (Plain)',
    slug: 'packing-list-envelope-plain',
    description: 'Clear, unprinted self-adhesive packing list envelope for a clean professional look. Ideal for international shipments and customised document labeling.',
    specs: ['Type: Self-adhesive', 'Print: None (Plain)', 'Material: LDPE'],
    categoryId: 'cat-13',
    categorySlug: 'packing-list-envelopes',
    images: ['/images/products-new/packing-envelope-product.png', '/images/products-new/packing-envelope-plain.jpeg'],
    variants: [
      { code: 'PLE-SM175135P', spec: '180mm × 140mm' },
      { code: 'PLE-SM240135P', spec: '240mm × 135mm' },
      { code: 'PLE-SM240180P', spec: '240mm × 185mm' },
      { code: 'PLE-SM350250P', spec: '350mm × 275mm' },
    ],
    isFeatured: false,
    isActive: true,
  },

  // ═══════════════════════════════════════
  //  NEWSPRINT PAPER (cat-14)
  // ═══════════════════════════════════════
  {
    id: 'prod-24',
    name: 'Newsprint Paper',
    slug: 'newsprint-paper',
    description: 'Economical newsprint wrapping paper sheets for interleaving, surface protection, cushioning, and void filling in cartons. Light, clean, and cost-effective.',
    specs: ['Size: 21.5" × 31"', 'Material: Newsprint Paper', 'Usage: Wrapping, interleaving, void fill'],
    categoryId: 'cat-14',
    categorySlug: 'newsprint-paper',
    images: ['/images/products-new/newsprint.png'],
    variants: [
      { code: 'NP21531', spec: '21.5" × 31"' },
    ],
    isFeatured: false,
    isActive: true,
  },

  // ═══════════════════════════════════════
  //  AIR BUBBLE PAK (cat-15)
  // ═══════════════════════════════════════
  {
    id: 'prod-25',
    name: 'Air Bubble Pak (Small Bubble)',
    slug: 'air-bubble-pak-small',
    description: 'Lightweight cushioning material with air-filled bubbles used to protect fragile items from impact, shock, and scratches during packing and shipping.',
    specs: ['Bubble Diameter: 10mm', 'Material: LDPE', 'Type: Small Bubble'],
    categoryId: 'cat-15',
    categorySlug: 'air-bubble-pak',
    images: ['/images/products-new/air-bubble-pak-product.jpg', '/images/products-new/bubble-application.jpg'],
    variants: [
      { code: 'ABP-20300', spec: '20" × 300ft' },
      { code: 'ABP-40300', spec: '40" × 300ft' },
      { code: 'ABP-60300', spec: '60" × 300ft' },
    ],
    isFeatured: false,
    isActive: true,
  },
  {
    id: 'prod-26',
    name: 'Air Bubble Pak (Big Bubble)',
    slug: 'air-bubble-pak-big',
    description: 'Lightweight cushioning material with air-filled bubbles used to protect fragile items from impact, shock, and scratches during packing and shipping. Large 20mm diameter bubbles for heavy-duty cushioning.',
    specs: ['Bubble Diameter: 20mm', 'Material: LDPE', 'Type: Big Bubble'],
    categoryId: 'cat-15',
    categorySlug: 'air-bubble-pak',
    images: ['/images/products-new/air-bubble-pak-product.jpg', '/images/products-new/bubble-application.jpg'],
    variants: [
      { code: 'ABP-20164', spec: '20" × 164ft' },
      { code: 'ABP-40164', spec: '40" × 164ft' },
    ],
    isFeatured: false,
    isActive: true,
  },

  // ═══════════════════════════════════════
  //  SILICA GEL (cat-16)
  // ═══════════════════════════════════════
  {
    id: 'prod-27',
    name: 'Silica Gel Desiccant',
    slug: 'silica-gel',
    description: 'A moisture-absorbing desiccant used to keep products dry and prevent mold, rust, and damage. Commonly packed in small sachets for packaging, storage, and shipping.',
    specs: ['Material: Silica Gel (Blue/White)', 'Usage: Moisture absorption', 'Packing: Plastic or Heatlon paper'],
    categoryId: 'cat-16',
    categorySlug: 'silica-gel',
    images: ['/images/products-new/silica-gel-product.jpg', '/images/products-new/silica-gel.png'],
    variants: [
      { code: 'Silica-5G PP B/W', spec: '5G — Plastic packing (1500 packs/tin)' },
      { code: 'Silica-5G PE B/W', spec: '5G — Paper packing (1500 packs/tin)' },
      { code: 'Silica-10G (Plastic)', spec: '10G — Plastic packing (1000 packs/tin)' },
      { code: 'Silica-10G', spec: '10G — Paper packing (800 packs/tin)' },
      { code: 'Silica-50G', spec: '50G — Heatlon paper (200 packs/tin)' },
      { code: 'Silica-100G', spec: '100G — Heatlon paper (100 packs/tin)' },
      { code: 'Silica-250G', spec: '250G' },
      { code: 'Silica-500g', spec: '500G — Heatlon paper (20 packs/tin)' },
    ],
    isFeatured: false,
    isActive: true,
  },

  // ═══════════════════════════════════════
  //  STRAPPING BANDS & TOOLS (cat-17)
  // ═══════════════════════════════════════
  {
    id: 'prod-28',
    name: 'PP Strapping Band (Yellow)',
    slug: 'pp-strapping-band-yellow',
    description: 'Lightweight plastic strap used for securing cartons and pallets. Strong, flexible, and cost-effective for general packaging.',
    specs: ['Material: Polypropylene (PP)', 'Colour: Yellow', 'Usage: Manual / semi-auto strapping'],
    categoryId: 'cat-17',
    categorySlug: 'strapping-bands',
    images: ['/images/products-new/strapping-band-product.jpg', '/images/products-new/strapping-yellow.png'],
    variants: [
      { code: 'SB-Y152X9Y', spec: '12mm × 9kg — Yellow' },
      { code: 'SB-15X9Y', spec: '15mm × 9kg — Yellow (MP Stock)' },
      { code: 'SB-Y15X9Y', spec: '15mm × 9kg — Yellow' },
    ],
    isFeatured: false,
    isActive: true,
  },
  {
    id: 'prod-29',
    name: 'PP Strapping Band (Black)',
    slug: 'pp-strapping-band-black',
    description: 'Lightweight plastic strap used for securing cartons and pallets. Strong, flexible, and cost-effective for general packaging.',
    specs: ['Material: Polypropylene (PP)', 'Colour: Black', 'Usage: Manual / semi-auto strapping'],
    categoryId: 'cat-17',
    categorySlug: 'strapping-bands',
    images: ['/images/products-new/strapping-band-product.jpg', '/images/products-new/strapping-black.png'],
    variants: [
      { code: 'SB-Y15X9BK', spec: '15mm × 9kg — Black' },
      { code: 'SB-15X9BK', spec: '15mm × 9kg — Black' },
      { code: 'SB-1518(Black)', spec: '15mm × 1.8kg — Black' },
    ],
    isFeatured: false,
    isActive: true,
  },
  {
    id: 'prod-30',
    name: 'PP Strapping Band (2 Colour)',
    slug: 'pp-strapping-band-2colour',
    description: 'Decorative two-colour PP strapping band for gift wrapping, floral arrangements, and lightweight bundling applications.',
    specs: ['Width: 15mm', 'Weight: 1.8kg', 'Material: Polypropylene (PP)', 'Type: 2-Colour'],
    categoryId: 'cat-17',
    categorySlug: 'strapping-bands',
    images: ['/images/products-new/strapping-band-product.jpg', '/images/products-new/strapping-yellow.png'],
    variants: [
      { code: 'SB-2Colour', spec: '15mm × 1.8kg — 2 Colour' },
    ],
    isFeatured: false,
    isActive: true,
  },
  {
    id: 'prod-31',
    name: 'J Clip',
    slug: 'j-clip',
    description: 'Metal seal used with PP strapping; applied with a sealer to secure the strap joint.',
    specs: ['Width: 15mm', 'Weight: 2.5kg per box', 'Material: Metal', 'Usage: For PP strapping'],
    categoryId: 'cat-17',
    categorySlug: 'strapping-bands',
    images: ['/images/products-new/j-clip-product.jpg', '/images/products-new/j-clip.png'],
    variants: [
      { code: 'JC-2.5KG', spec: '15mm × 2.5kg' },
    ],
    isFeatured: false,
    isActive: true,
  },
  {
    id: 'prod-32',
    name: 'O Clip',
    slug: 'o-clip',
    description: 'Closed-loop metal seal that provides a stronger, more secure hold for heavier loads.',
    specs: ['Width: 15mm', 'Weight: 800g per pack', 'Material: Metal', 'Usage: For PP strapping'],
    categoryId: 'cat-17',
    categorySlug: 'strapping-bands',
    images: ['/images/products-new/o-clip-product.jpg', '/images/products-new/o-clip.png'],
    variants: [
      { code: 'MC-15800', spec: '15mm × 800g' },
    ],
    isFeatured: false,
    isActive: true,
  },
  {
    id: 'prod-33',
    name: 'PP Strapping Tensioner',
    slug: 'pp-strapping-tensioner',
    description: 'Tool used to tighten the strap around cartons or pallets before sealing.',
    specs: ['Type: Manual Tensioner', 'Compatible: PP Strapping Bands', 'Usage: Strapping tightening'],
    categoryId: 'cat-17',
    categorySlug: 'strapping-bands',
    images: ['/images/products-new/strapping-tensioner-product.jpg'],
    variants: [
      { code: 'PPS-TENSIONER', spec: 'PP Strapping Tensioner' },
    ],
    isFeatured: false,
    isActive: true,
  },
  {
    id: 'prod-34',
    name: 'PP Strapping Sealer',
    slug: 'pp-strapping-sealer',
    description: 'Tool used to crimp and seal the strap with clips, locking it tightly in place.',
    specs: ['Type: Manual Sealer', 'Compatible: J-Clips, O-Clips', 'Usage: Strapping sealing'],
    categoryId: 'cat-17',
    categorySlug: 'strapping-bands',
    images: ['/images/products-new/strapping-sealer-product.jpg'],
    variants: [
      { code: 'PPS-Sealer', spec: 'PP Strapping Sealer' },
    ],
    isFeatured: false,
    isActive: true,
  },

  // ═══════════════════════════════════════
  //  CORRUGATED PAPER ROLL (cat-18)
  // ═══════════════════════════════════════
  {
    id: 'prod-35',
    name: 'Corrugated Paper Roll',
    slug: 'corrugated-paper-roll',
    description: 'Heavy-duty corrugated paper rolls designed for reliable cushioning and surface protection. Ideal for wrapping, void fill, and safeguarding fragile items during storage or transit. Flexible, lightweight, and eco-friendly.',
    specs: ['Material: Corrugated Kraft Paper', 'Type: Single-face corrugated roll'],
    categoryId: 'cat-18',
    categorySlug: 'corrugated-paper-roll',
    images: ['/images/products-new/corrugated-rolls.jpg', '/images/products-new/corrugated-application.jpg'],
    variants: [
      { code: 'CP-P47200KM', spec: '47" × 200ft' },
      { code: 'CP-P47250KM', spec: '47" × 250ft' },
      { code: 'CP-P49250KM', spec: '49" × 250ft' },
    ],
    isFeatured: false,
    isActive: true,
  },

  // ═══════════════════════════════════════
  //  PE SHEET ROLL (cat-19)
  // ═══════════════════════════════════════
  {
    id: 'prod-36',
    name: 'PE Sheet Roll',
    slug: 'pe-sheet-roll',
    description: 'Flexible plastic sheet roll used for covering, protecting, and separating products. Water-resistant, durable, and ideal for packaging, construction, and general use.',
    specs: ['Thickness: 0.08mm', 'Material: Polyethylene', 'Type: Sheet Roll'],
    categoryId: 'cat-19',
    categorySlug: 'pe-sheet-roll',
    images: ['/images/products-new/pe-sheet-roll-product.jpg', '/images/products-new/pe-sheet-roll-application.jpg'],
    variants: [
      { code: 'PES-3630008', spec: '36" × 30lbs × 0.08mm (70m)' },
      { code: 'PES-3650008', spec: '36" × 50lbs × 0.08mm (135m)' },
      { code: 'PES-5430008', spec: '54" × 30lbs × 0.08mm (45m)' },
      { code: 'PES-5440008', spec: '54" × 40lbs × 0.08mm (65m)' },
    ],
    isFeatured: false,
    isActive: true,
  },

  // ═══════════════════════════════════════
  //  MIC PAC (cat-20)
  // ═══════════════════════════════════════
  {
    id: 'prod-37',
    name: 'Mic Pac (Packing Peanuts)',
    slug: 'mic-pac',
    description: 'Mic-Pac (also known as packing peanuts, foam peanuts, or loose-fill) is a popular, lightweight packaging material designed to protect fragile items during shipping, storage, and transportation.',
    specs: ['Material: Foam / Starch-based', 'Type: Loose-fill cushioning', 'Usage: Void fill and fragile item protection'],
    categoryId: 'cat-20',
    categorySlug: 'mic-pac',
    images: ['/images/products-new/mic-pac-product.png', '/images/products-new/mic-pac.png'],
    variants: [
      { code: 'MICPAC-STD', spec: 'Standard Mic Pac' },
    ],
    isFeatured: false,
    isActive: true,
  },
];

/* ── Helper functions ─────────────────── */
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
        p.description.toLowerCase().includes(q) ||
        p.categorySlug.includes(q) ||
        p.variants.some((v) => v.code.toLowerCase().includes(q) || v.spec.toLowerCase().includes(q)))
  );
}
