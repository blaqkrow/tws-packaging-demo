export interface ProductVariant {
  code: string;
  spec: string;
}

export interface Product {
  id: string;
  name: string;
  /** Optional override for card title and detail hero. `name` stays canonical
      so sibling-product tab labels still derive correctly. */
  displayName?: string;
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
    images: [
      '/images/products-new/pvc-tape-yellow.png',
      '/images/products-new/pvc-tape-red.png',
      '/images/products-new/pvc-tape-blue.png',
    ],
    variants: [
      { code: 'FMT-4833Y', spec: '48mm × 33m — Yellow' },
      { code: 'FMT-4833B', spec: '48mm × 33m — Blue' },
      { code: 'FMT-4833R', spec: '48mm × 33m — Red' },
    ],
    isFeatured: false,
    isActive: true,
  },
  {
    id: 'prod-1-2col',
    name: 'PVC Tape (Mixed Color)',
    slug: 'pvc-tape-2-colour',
    description: 'Dual-colour PVC tape for visual identification, hazard marking, and decorative bundling. Same PVC construction as our standard range, combining two colours on one roll.',
    specs: ['Width: 48mm', 'Length: 33m', 'Material: PVC', 'Type: Mixed Color'],
    categoryId: 'cat-1',
    categorySlug: 'pvc-tapes',
    images: [
      '/images/products-new/pvc-tape-black-yellow.png',
      '/images/products-new/pvc-tape-red-white.png',
    ],
    variants: [
      { code: 'FMT-4833BY', spec: '48mm × 33m — Black + Yellow' },
      { code: 'FMT-4833WR', spec: '48mm × 33m — White + Red' },
    ],
    isFeatured: false,
    isActive: true,
  },

  // ═══════════════════════════════════════
  //  SMART OPP TAPES (cat-2) — Merged Transparent + Brown
  // ═══════════════════════════════════════
  {
    id: 'prod-4-trans',
    name: 'Smart OPP Tape (Transparent)',
    displayName: 'Smart OPP Tape',
    slug: 'smart-opp-tape-transparent',
    description: 'Strong plastic packing tape used for sealing cartons. Good adhesion, durable, and cost-effective for general packaging.',
    specs: ['Material: OPP (Oriented Polypropylene)', 'Colour: Transparent'],
    categoryId: 'cat-2',
    categorySlug: 'opp-tapes',
    images: ['/images/products-new/opp-tape-transparent-new.jpeg'],
    variants: [
      { code: 'OPP-S2445TE', spec: '24mm × 45m — Transparent' },
      { code: 'OPP-S4840TE', spec: '48mm × 40m — Transparent' },
      { code: 'OPP-S4845TE', spec: '48mm × 45m — Transparent' },
      { code: 'OPP-PI4880TE', spec: '48mm × 80m — Transparent' },
      { code: 'OPP-S4890TE', spec: '48mm × 90m — Transparent' },
      { code: 'OPP-S7245TE', spec: '72mm × 45m — Transparent' },
      { code: 'OPP-S7280TE', spec: '72mm × 80m — Transparent' },
      { code: 'OPP-S7290TE', spec: '72mm × 90m — Transparent' },
      { code: 'OPP-S48900TE', spec: '48mm × 900m (Machine Roll) — Transparent' },
      { code: 'OPP-S72900TE', spec: '72mm × 900m (Machine Roll) — Transparent' },
    ],
    isFeatured: true,
    isActive: true,
  },
  {
    id: 'prod-4-brown',
    name: 'Smart OPP Tape (Brown)',
    slug: 'smart-opp-tape-brown',
    description: 'Strong plastic packing tape used for sealing cartons. Good adhesion, durable, and cost-effective for general packaging.',
    specs: ['Material: OPP (Oriented Polypropylene)', 'Colour: Brown'],
    categoryId: 'cat-2',
    categorySlug: 'opp-tapes',
    images: ['/images/products-new/opp-tape-brown-new.jpeg'],
    variants: [
      { code: 'OPP-S4840BE', spec: '48mm × 40m — Brown' },
      { code: 'OPP-S4845BE', spec: '48mm × 45m — Brown' },
      { code: 'OPP-PI4880BE', spec: '48mm × 80m — Brown' },
      { code: 'OPP-S4890BE', spec: '48mm × 90m — Brown' },
      { code: 'OPP-S7290BE', spec: '72mm × 90m — Brown' },
      { code: 'OPP-S48900BE', spec: '48mm × 900m (Machine Roll) — Brown' },
    ],
    isFeatured: false,
    isActive: true,
  },
  {
    id: 'prod-4-color',
    name: 'Smart OPP Tape (Color)',
    slug: 'smart-opp-tape-color',
    description: 'Smart OPP tape in vibrant colours for colour coding, identification, and decorative sealing. Same adhesion and quality as our standard Smart OPP range.',
    specs: ['Material: OPP (Oriented Polypropylene)', 'Colour: Yellow / Blue / Red / Black'],
    categoryId: 'cat-2',
    categorySlug: 'opp-tapes',
    images: [
      '/images/products-new/opp-tape-yellow.jpeg',
      '/images/products-new/opp-tape-blue.jpeg',
      '/images/products-new/opp-tape-red.jpeg',
      '/images/products-new/opp-tape-black.jpeg',
      '/images/products-new/opp-tape-green.jpeg',
    ],
    variants: [
      { code: 'OPP-S4845YE', spec: '48mm × 45m — Yellow' },
      { code: 'OPP-S4845BL', spec: '48mm × 45m — Blue' },
      { code: 'OPP-S4845RE', spec: '48mm × 45m — Red' },
      { code: 'OPP-S4845BK', spec: '48mm × 45m — Black' },
      { code: 'COPP-T4845G', spec: '48mm × 45m — Green' },
    ],
    isFeatured: false,
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
    specs: ['Material: OPP (Oriented Polypropylene)', 'Size: Contact us and let us know your requirements', 'Custom Design: Contact us and let us know your requirements', 'Minimum Order: Contact us for MOQ'],
    categoryId: 'cat-3',
    categorySlug: 'printed-tape',
    images: ['/images/products-new/printed-tape-product.png', '/images/products-new/printed-tape.png'],
    variants: [
      { code: 'OPP-CUSTOM', spec: 'Contact us for custom requirements' },
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
    specs: ['Material: Crepe Paper', 'Adhesive: Rubber-based', 'Length: 22 yards per roll', 'Temperature Resistance: Up to 60°C', 'Packing: 18mm = 16 rolls/bundle, 24mm = 12 rolls/bundle, 36mm = 8 rolls/bundle, 48mm = 6 rolls/bundle'],
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
    specs: ['Width: 48mm', 'Length: 7m', 'Material: Cloth / Fabric'],
    categoryId: 'cat-5',
    categorySlug: 'cloth-tape',
    images: ['/images/products-new/cloth-tape-no-logo.jpg', '/images/products-new/cloth-tape.png'],
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
    images: ['/images/products-new/kraft-tape-product-new.jpg'],
    variants: [
      { code: 'KT-5050', spec: '50mm × 50m' },
      { code: 'KT-7550', spec: '75mm × 50m' },
    ],
    isFeatured: false,
    isActive: true,
  },
  {
    id: 'prod-9b',
    name: 'Reinforced Paper Gummed Tape',
    slug: 'reinforced-paper-gummed-tape',
    description: 'Heavy-duty reinforced paper gummed tape with embedded fibre for extra strength. Water-activated adhesive bonds securely to corrugated surfaces — tamper-evident, recyclable, and ideal for heavy carton sealing.',
    specs: ['Width: 72mm', 'Length: 137m', 'Material: Reinforced Kraft Paper', 'Adhesive: Water-activated gummed', 'Packing: 12 rolls/ctn'],
    categoryId: 'cat-6',
    categorySlug: 'kraft-tape',
    images: ['/images/products-new/kraft-tape-product.jpeg', '/images/products-new/kraft-tape.png'],
    variants: [
      { code: 'RPGT-SM72137', spec: '72mm × 137m' },
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
    specs: ['Width: 500mm', 'Material: LLDPE', 'Type: Hand Roll', 'Packing: 6 rolls/box'],
    categoryId: 'cat-7',
    categorySlug: 'stretch-film',
    images: ['/images/products-new/stretch-film-product.png', '/images/products-new/stretch-film.png'],
    variants: [
      { code: 'SF-50009A', spec: '500mm × 12mic × 1.5kg' },
      { code: 'SF-50005', spec: '500mm × 17mic × 2.0kg' },
      { code: 'SF-50004', spec: '500mm × 17mic × 2.3kg' },
      { code: 'SF-50011A', spec: '500mm × 23mic × 2.2kg' },
      { code: 'SF-50011', spec: '500mm × 23mic × 2.3kg' },
      { code: 'SF-50012', spec: '500mm × 23mic × 2.5kg' },
      { code: 'SF-50012B', spec: '500mm × 23mic × 2.6kg' },
      { code: 'SF-50013', spec: '500mm × 23mic × 2.7kg' },
    ],
    isFeatured: true,
    isActive: true,
  },
  {
    id: 'prod-11',
    name: 'Stretch Film Hand Roll (Black)',
    slug: 'stretch-film-hand-roll-black',
    description: 'Opaque stretch film used to wrap and secure pallets while concealing contents. Provides strong hold, protection from dust/UV, and added security for transport and storage.',
    specs: ['Width: 500mm', 'Thickness: 23 microns', 'Weight: 2.7kg', 'Material: LLDPE', 'Colour: Black', 'Packing: 6 rolls/box'],
    categoryId: 'cat-7',
    categorySlug: 'stretch-film',
    images: ['/images/products-new/stretch-film-black-product.jpg'],
    variants: [
      { code: 'SF-8119BK', spec: '500mm × 23mic × 2.7kg — Black' },
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
      { code: 'SF-811614', spec: '500mm × 23mic × 14kg' },
      { code: 'SF-811715', spec: '500mm × 23mic × 15kg' },
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
    specs: ['Width: 100mm', 'Length: 140m', 'Material: LLDPE', 'Type: Bundle/Mini Wrap', 'Packing: 33 rolls/carton'],
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
    specs: ['Width: 150mm', 'Length: 140m', 'Material: LLDPE', 'Type: Bundle/Mini Wrap', 'Packing: 22 rolls/carton'],
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
    name: 'PE Foam Roll',
    slug: 'pe-foam-roll',
    description: 'Polyethylene foam roll for surface protection, interleaving, and cushioning during transport. Available in 1mm, 2mm, and 3mm thickness. Ideal for glass, electronics, and furniture.',
    specs: ['Width: 1000mm', 'Length: 300m', 'Material: Polyethylene Foam'],
    categoryId: 'cat-9',
    categorySlug: 'pe-foam-rolls',
    images: ['/images/products-new/pe-foam-roll.png'],
    variants: [
      { code: 'PEF-10003001', spec: '1000mm × 300m × 1mm' },
      { code: 'PEF-10001502', spec: '1000mm × 300m × 2mm' },
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
    specs: ['Material: Kraft Paper / Cardboard', 'Type: L-shaped corner protector', 'Packing: 25 pcs/bundle'],
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
    specs: ['Material: Kraft Paper', 'Filling: Compressed air', 'Usage: Container / truck void fill', 'Packing: 800mm × 1200mm = 100 pcs/carton; 850mm × 1850mm, 1000mm × 1800mm, 1000mm × 2200mm = 50 pcs/carton'],
    categoryId: 'cat-12',
    categorySlug: 'dunnage-air-bags',
    images: ['/images/products-new/dunnage-airbag-product.png', '/images/products-new/dunnage-application.jpeg', '/images/products-new/dunnage-application-2.jpeg'],
    variants: [
      { code: 'DAB-8001200', spec: '800mm × 1200mm' },
      { code: 'DAB-8501850', spec: '850mm × 1850mm' },
      { code: 'DAB-10001800', spec: '1000mm × 1800mm' },
      { code: 'DAB-10002200', spec: '1000mm × 2200mm' },
    ],
    isFeatured: false,
    isActive: true,
  },

  // ═══════════════════════════════════════
  //  PACKING LIST ENVELOPES (cat-13)
  // ═══════════════════════════════════════
  {
    id: 'prod-22',
    name: 'Packing List Envelope',
    slug: 'packing-list-envelope',
    description: 'Self-adhesive packing list envelope available in Printed (with "PACKING LIST ENCLOSED" text) and Plain versions. Keeps shipping documents visible and protected on carton surfaces.',
    specs: ['Type: Self-adhesive', 'Material: LDPE', 'Available: Printed / Plain', 'Packing: 1000 pcs/carton (350mm × 275mm = 500 pcs/carton)'],
    categoryId: 'cat-13',
    categorySlug: 'packing-list-envelopes',
    images: [
      '/images/products-new/packing-envelope-printed-new.jpeg',
      '/images/products-new/packing-envelope-plain.jpeg',
    ],
    variants: [
      { code: 'PLE-SM175135', spec: '180mm × 140mm — Printed' },
      { code: 'PLE-SM240135', spec: '254mm × 140mm — Printed' },
      { code: 'PLE-SM240185', spec: '240mm × 185mm — Printed' },
      { code: 'PLE-SM175135P', spec: '180mm × 140mm — Plain' },
      { code: 'PLE-SM240135P', spec: '240mm × 135mm — Plain' },
      { code: 'PLE-SM240180P', spec: '240mm × 185mm — Plain' },
      { code: 'PLE-SM350250P', spec: '350mm × 275mm — Plain' },
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
    specs: ['Size: 21.5" × 31"', 'Material: Newsprint Paper', 'Usage: Wrapping, interleaving, void fill', 'Packing: 500 pcs/ream'],
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
    name: 'Air Bubble Pak',
    slug: 'air-bubble-pak',
    description: 'Lightweight cushioning material with air-filled bubbles used to protect fragile items from impact, shock, and scratches during packing and shipping. Available in small and big bubble sizes.',
    specs: ['Bubble Diameter: 10mm / 20mm', 'Material: LDPE', 'Type: Small & Big Bubble'],
    categoryId: 'cat-15',
    categorySlug: 'air-bubble-pak',
    images: ['/images/products-new/air-bubble-pak-product.jpg', '/images/products-new/bubble-application.jpg'],
    variants: [
      { code: 'ABP-20300', spec: '20" × 300ft (Small Bubble)' },
      { code: 'ABP-40300', spec: '40" × 300ft (Small Bubble)' },
      { code: 'ABP-60300', spec: '60" × 300ft (Small Bubble)' },
      { code: 'ABP-20164', spec: '20" × 164ft (Big Bubble)' },
      { code: 'ABP-40164', spec: '40" × 164ft (Big Bubble)' },
    ],
    isFeatured: true,
    isActive: true,
  },
  {
    id: 'prod-25-anti-static',
    name: 'Anti Static Air Bubble Pak',
    slug: 'anti-static-air-bubble-pak',
    description: 'Anti-static air bubble pak designed to protect sensitive electronic components from electrostatic discharge and physical impact during storage and transit.',
    specs: ['Material: Anti-static LDPE', 'Type: Bubble wrap'],
    categoryId: 'cat-15',
    categorySlug: 'air-bubble-pak',
    images: ['/images/products-new/anti-static-air-bubble-pak.jpeg'],
    variants: [
      { code: 'ASABP-20164', spec: '20" × 164ft' },
      { code: 'ASABP-20300', spec: '20" × 300ft' },
      { code: 'ASABP-40164', spec: '40" × 164ft' },
      { code: 'ASABP-40300', spec: '40" × 300ft' },
      { code: 'ASABP-60164', spec: '60" × 164ft' },
      { code: 'ASABP-60300', spec: '60" × 300ft' },
    ],
    isFeatured: false,
    isActive: true,
  },


  // ═══════════════════════════════════════
  //  SILICA GEL (cat-16)
  // ═══════════════════════════════════════
  {
    id: 'prod-27',
    name: 'Silica Gel',
    slug: 'silica-gel',
    description: 'Moisture-absorbing silica gel packs used to keep products dry and prevent mould, rust, and damage. Commonly packed in small sachets for packaging, storage, and shipping.',
    specs: ['Type: Blue / White', 'Usage: Moisture absorption', 'Packing: Plastic or Heatlon paper'],
    categoryId: 'cat-16',
    categorySlug: 'desiccant',
    images: ['/images/products-new/silica-gel-product.jpg', '/images/products-new/silica-gel.png'],
    variants: [
      { code: 'Silica-5G PP B/W', spec: '5G — Plastic packing (1500 packs/tin)' },
      { code: 'Silica-5G PE B/W', spec: '5G — Paper packing (1500 packs/tin)' },
      { code: 'Silica-10G (Plastic)', spec: '10G — Plastic packing (1000 packs/tin)' },
      { code: 'Silica-10G', spec: '10G — Paper packing (800 packs/tin)' },
      { code: 'Silica-50G', spec: '50G — Heatlon paper (200 packs/tin)' },
      { code: 'Silica-100G', spec: '100G — Heatlon paper (100 packs/tin)' },
      { code: 'Silica-250G', spec: '250G — Heatlon paper (40 packs/tin)' },
      { code: 'Silica-500g', spec: '500G — Heatlon paper (20 packs/tin)' },
    ],
    isFeatured: false,
    isActive: true,
  },
  {
    id: 'prod-27-bentonite',
    name: 'Bentonite Clay',
    slug: 'bentonite-clay',
    description: 'Natural bentonite clay desiccant — a high-capacity, eco-friendly moisture absorber for containers, cartons, and long-haul shipping. Non-toxic and safe for use with most products.',
    specs: ['Material: Bentonite clay', 'Size: 132g/pkt', 'Packing: 100 pkts/ctn'],
    categoryId: 'cat-16',
    categorySlug: 'desiccant',
    images: [
      '/images/products-new/desiccant-bentonite-clay.png',
      '/images/products-new/desiccant-bentonite-clay-4unit.jpeg',
    ],
    variants: [
      { code: 'DESI-BENT-132G', spec: '132g/pkt — 100 pkts/ctn' },
    ],
    isFeatured: false,
    isActive: true,
  },
  {
    id: 'prod-27-container',
    name: 'Container Desiccant',
    slug: 'container-desiccant',
    description: 'High-absorption desiccant designed for shipping containers and large-volume storage. Controls humidity during long ocean freight and protects against moisture damage, rust, and mould.',
    specs: ['Usage: Shipping containers, bulk storage', 'Forms: Strip packs and hanging bags'],
    categoryId: 'cat-16',
    categorySlug: 'desiccant',
    images: [
      '/images/products-new/desiccant-container.png',
      '/images/products-new/desiccant-container-140g.jpeg',
      '/images/products-new/desiccant-humi-dryer.jpg',
    ],
    variants: [
      { code: 'DESI-CONT-140G', spec: '140g — 32 strips/ctn' },
      { code: 'DESI-HUMI-2KG', spec: 'Humi Dryer 2kg — Yellow bag with plastic hook (10 pkt/ctn)' },
    ],
    isFeatured: false,
    isActive: true,
  },

  // ═══════════════════════════════════════
  //  STRAPPING BANDS & TOOLS (cat-17)
  // ═══════════════════════════════════════
  {
    id: 'prod-28',
    name: 'PP Strapping Band',
    slug: 'pp-strapping-band',
    description: 'Lightweight plastic strap used for securing cartons and pallets. Strong, flexible, and cost-effective for general packaging. Available in Yellow and Black.',
    specs: ['Material: Polypropylene (PP)', 'Colour: Yellow / Black', 'Usage: Manual / semi-auto strapping'],
    categoryId: 'cat-17',
    categorySlug: 'strapping-bands',
    images: [
      '/images/products-new/strapping-band-new.jpeg',
      '/images/products-new/strapping-yellow.png',
    ],
    variants: [
      { code: 'SB-Y152X9Y', spec: '12mm × 9kg — Yellow' },
      { code: 'SB-Y15X9Y', spec: '15mm × 9kg — Yellow' },
      { code: 'SB-Y15X9BK', spec: '15mm × 9kg — Black' },
      { code: 'SB-15X9BK', spec: '15mm × 9kg — Black' },
      { code: 'SB-1518(Black)', spec: '15mm × 1.8kg — Black' },
    ],
    isFeatured: false,
    isActive: true,
  },
  {
    id: 'prod-29',
    name: 'PET Strapping Band (Green Embossed)',
    slug: 'pet-strapping-band-green',
    description: 'Heavy-duty polyester (PET) strapping band with embossed surface for superior grip. Ideal for securing heavy pallets, lumber, and industrial loads where high tensile strength is required.',
    specs: ['Width: 5mm', 'Weight: 20kg', 'Thickness: 0.85mm', 'Material: Polyester (PET)', 'Colour: Green', 'Type: Embossed'],
    categoryId: 'cat-17',
    categorySlug: 'strapping-bands',
    images: ['/images/products-new/strapping-band-pet-green.jpeg'],
    variants: [
      { code: 'SB-P1552000G-EB', spec: '5mm × 20kg × 0.85mm — Green (Embossed)' },
    ],
    isFeatured: false,
    isActive: true,
  },
  {
    id: 'prod-30',
    name: 'Manual PP Strapping Band (Mixed/Single Color)',
    slug: 'pp-strapping-band-2colour',
    description: 'Manual PP strapping band for lightweight bundling and general packaging — available in mixed-colour or single-colour options.',
    specs: ['Width: 15mm', 'Weight: 1.8kg', 'Material: Polypropylene (PP)', 'Type: Mixed / Single Color', 'Packing: 5 rolls/bundle'],
    categoryId: 'cat-17',
    categorySlug: 'strapping-bands',
    images: [
      '/images/products-new/strapping-band-black.jpeg',
      '/images/products-new/strapping-band-mixed-1.jpeg',
      '/images/products-new/strapping-band-mixed-2.jpeg',
    ],
    variants: [
      { code: 'SB-2Colour', spec: '15mm × 1.8kg — Mixed / Single Color' },
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
    categoryId: 'cat-17b',
    categorySlug: 'j-clip',
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
    categoryId: 'cat-17c',
    categorySlug: 'o-clip',
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
    categoryId: 'cat-17d',
    categorySlug: 'strapping-tensioner',
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
    categoryId: 'cat-17e',
    categorySlug: 'strapping-sealer',
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
    images: ['/images/products-new/mic-pac-product.png'],
    variants: [
      { code: 'MICPAC-STD', spec: 'Standard Mic Pac' },
    ],
    isFeatured: false,
    isActive: true,
  },

  // ═══════════════════════════════════════
  //  CARTON BOX (cat-21)
  // ═══════════════════════════════════════
  {
    id: 'prod-38',
    name: 'RSC Double Wall Carton Box',
    slug: 'plain-rsc-carton-box',
    description: 'RSC (Regular Slotted Container) carton boxes with double-wall construction for maximum strength — ideal for shipping, storage, and general packaging of heavy or fragile items. Contact us for customisation sizes.',
    specs: ['Material: Double-wall corrugated', 'Type: RSC (Regular Slotted Container)', 'Packing: 10 pcs/pkt', 'Sizes: Contact us for customisation'],
    categoryId: 'cat-21',
    categorySlug: 'carton-box',
    images: [
      '/images/products-new/carton-box-rsc-double-wall.png',
      '/images/products-new/carton-box-rsc-double-wall-2.jpg',
    ],
    variants: [
      { code: 'CTNB-550400300D/W', spec: '550mm × 400mm × 300mm — Double Wall (10 pcs/pkt)' },
      { code: 'CTNB-466362382D/W', spec: '466mm × 362mm × 382mm — Double Wall (10 pcs/pkt)' },
    ],
    isFeatured: false,
    isActive: true,
  },
  {
    id: 'prod-38-diecut',
    name: 'Diecut Box',
    slug: 'diecut-box',
    description: 'Custom diecut carton boxes cut and folded to your exact specifications. Available plain or printed — ideal for retail packaging, product display, and bespoke shipping needs.',
    specs: [
      'Material: Corrugated board',
      'Size: Contact us and let us know your requirements',
      'Finish: Plain or printed — let us know your requirements',
      'Minimum Order: Contact us for MOQ',
    ],
    categoryId: 'cat-21',
    categorySlug: 'carton-box',
    images: ['/images/products-new/carton-box-diecut.jpg'],
    variants: [
      { code: 'CTNB-DIECUT', spec: 'Contact us for custom requirements' },
    ],
    isFeatured: false,
    isActive: true,
  },

  // ═══════════════════════════════════════
  //  STRAPPING TOOLS (cat-17f)
  // ═══════════════════════════════════════
  {
    id: 'prod-39',
    name: 'Handheld Strapping Tool (Battery Powered)',
    slug: 'handheld-strapping-tool-v2',
    description: 'Battery-powered handheld strapping tool for fully automatic tensioning, sealing, and cutting. Lightweight, portable, and suitable for PP and PET strapping bands. Adjustable tension force and welding time with high-strength friction weld sealing.',
    specs: [
      'Model: V2',
      'Type: Battery Powered',
      'Strap Width: 13–16mm (customisable)',
      'Strap Material: PP / PET',
      'Features: Auto tension, seal & cut',
      'Sealing: High-strength friction weld',
    ],
    categoryId: 'cat-17f',
    categorySlug: 'strapping-tools',
    images: [
      '/images/products-new/strapping-tool-v2-1.jpg',
      '/images/products-new/strapping-tool-v2-3.jpg',
      '/images/products-new/strapping-tool-v2-4.jpg',
      '/images/products-new/strapping-tool-v2-5.jpg',
      '/images/products-new/strapping-tool-v2-5b.jpg',
    ],
    variants: [
      { code: 'ST-V2', spec: 'V2 Battery Powered — 13–16mm (PP/PET)' },
    ],
    isFeatured: false,
    isActive: true,
  },

  // ═══════════════════════════════════════
  //  IMPACT LABELS (cat-22)
  // ═══════════════════════════════════════
  {
    id: 'prod-40-shockwatch-label',
    name: 'Shockwatch Label',
    slug: 'shockwatch-label',
    description: 'SpotSee Shockwatch impact indicator labels that activate when exposed to shocks above the rated G-force. Tamper-proof, serialised, and ideal for monitoring handling of fragile and high-value shipments.',
    specs: [
      'Sensitivity Range: 25 – 100G',
      'Impact Duration: 0.5 – 50ms',
      'Tolerance: ±15% at 20°C, 1 ATM',
      'Operating Temperature: -25°C to 80°C',
      'Weight: ~2.37g (varies by sensitivity)',
      'Dimensions: 96.52mm × 96.52mm',
      'Security: Tamperproof, Serialized (optional)',
      'Adhesive: Acrylic',
      'Product Life: 2 years when stored at 20°C, 1 ATM',
      'Storage: 20°C, 1 ATM, 0-99% RH Non-condensing',
      'Packing: 50 pcs/pkt',
    ],
    categoryId: 'cat-22',
    categorySlug: 'impact-labels',
    images: [
      '/images/products-new/impact-shockwatch-label.jpg',
      '/images/products-new/impact-shockwatch-label-all.png',
      '/images/products-new/impact-shockwatch-label-25g.png',
      '/images/products-new/impact-shockwatch-label-37g.png',
      '/images/products-new/impact-shockwatch-label-50g.png',
      '/images/products-new/impact-shockwatch-label-75g.png',
      '/images/products-new/impact-shockwatch-label-100g.png',
    ],
    variants: [
      { code: 'SW-L65-25G', spec: 'Model L-65 — 25G (Yellow) — 50 pcs/pkt' },
      { code: 'SW-L55-37G', spec: 'Model L-55 — 37G (Purple) — 50 pcs/pkt' },
      { code: 'SW-L47-50G', spec: 'Model L-47 — 50G (Red) — 50 pcs/pkt' },
      { code: 'SW-L35-75G', spec: 'Model L-35 — 75G (Orange) — 50 pcs/pkt' },
      { code: 'SW-L30-100G', spec: 'Model L-30 — 100G (Green) — 50 pcs/pkt' },
    ],
    isFeatured: false,
    isActive: true,
  },
  {
    id: 'prod-40-shockwatch2',
    name: 'Shockwatch 2',
    slug: 'shockwatch-2',
    description: 'SpotSee Shockwatch 2 impact indicator with ring label — a next-generation shock sensor that responds to a single impact. Tamper-proof, serialised (OCR format), and colour-coded by G-force rating.',
    specs: [
      'Operating Temperature: -25°C to 80°C',
      'Size: 42.93 × 42.93 × 6.35mm',
      'Sensitivity: 5G to 75G',
      'Guaranteed Activation: ±15% of nominal value',
      'Security: Tamper Proof, Serialized (OCR Format)',
      'Responsiveness: Responds to single impact',
      'Adhesive: Acrylic',
      'Shelf Life: 2 years when stored at 20°C / 68°F, 1 ATM',
      'Packing: 100 pcs/pkt',
    ],
    categoryId: 'cat-22',
    categorySlug: 'impact-labels',
    images: [
      '/images/products-new/impact-shockwatch2.png',
      '/images/products-new/impact-shockwatch2-application.png',
      '/images/products-new/impact-shockwatch2-5g.png',
      '/images/products-new/impact-shockwatch2-10g.png',
      '/images/products-new/impact-shockwatch2-15g.png',
      '/images/products-new/impact-shockwatch2-25g.png',
      '/images/products-new/impact-shockwatch2-37g.png',
      '/images/products-new/impact-shockwatch2-50g.png',
      '/images/products-new/impact-shockwatch2-75g.png',
    ],
    variants: [
      { code: 'SW2-5G', spec: '5G (Pink) — Indicator & Ring Label — 100 pcs/pkt' },
      { code: 'SW2-10G', spec: '10G (Teal) — Indicator & Ring Label — 100 pcs/pkt' },
      { code: 'SW2-15G', spec: '15G (Blue) — Indicator & Ring Label — 100 pcs/pkt' },
      { code: 'SW2-25G', spec: '25G (Yellow) — Indicator & Ring Label — 100 pcs/pkt' },
      { code: 'SW2-37G', spec: '37G (Purple) — Indicator & Ring Label — 100 pcs/pkt' },
      { code: 'SW2-50G', spec: '50G (Red) — Indicator & Ring Label — 100 pcs/pkt' },
      { code: 'SW2-75G', spec: '75G (Orange) — Indicator & Ring Label — 100 pcs/pkt' },
    ],
    isFeatured: false,
    isActive: true,
  },
  {
    id: 'prod-40-tiltwatch',
    name: 'Tiltwatch XTR',
    slug: 'tiltwatch-xtr',
    description: 'The TiltWatch XTR tilt sensor turns red if the container it is affixed to tips on its side or is completely upended — a simple, reliable way to monitor proper upright handling of sensitive shipments.',
    specs: [
      'Type: Tilt Indicator Label',
      'Activation: Turns red on tip-over or inversion',
      'Usage: Apply to carton or container for upright-handling monitoring',
    ],
    categoryId: 'cat-22',
    categorySlug: 'impact-labels',
    images: [
      '/images/products-new/impact-tiltwatch-red.png',
      '/images/products-new/impact-tiltwatch-green.jpg',
    ],
    variants: [
      { code: 'TW-XTR', spec: 'Tilt Indicator Label' },
    ],
    isFeatured: false,
    isActive: true,
  },

  // ═══════════════════════════════════════
  //  PALLETS (cat-23)
  // ═══════════════════════════════════════
  {
    id: 'prod-41-wooden',
    name: 'Wooden Pallet',
    slug: 'wooden-pallet',
    description: 'Heavy-duty wooden pallets for storage, warehousing, and freight. Strong load-bearing capacity and reusable — available in standard sizes with 2-way and 4-way entry.',
    specs: ['Material: Wood', 'Entry: 2-way / 4-way', 'Other dimensions: Contact us for enquiry'],
    categoryId: 'cat-23',
    categorySlug: 'pallets',
    images: ['/images/products-new/pallet-wooden.jpg'],
    variants: [
      { code: 'PAL-WOOD-1100', spec: '1100mm × 1100mm × 120mm — 2-way / 4-way' },
      { code: 'PAL-WOOD-1200', spec: '1200mm × 1000mm × 150mm — 2-way / 4-way' },
    ],
    isFeatured: false,
    isActive: true,
  },
  {
    id: 'prod-41-plastic',
    name: 'Plastic Pallet',
    slug: 'plastic-pallet',
    description: 'Durable plastic pallets for hygienic, moisture-resistant storage and shipping. Long service life, easy to clean, and ideal for food, pharmaceutical, and export applications — available in standard sizes with 2-way and 4-way entry.',
    specs: ['Material: Plastic', 'Entry: 2-way / 4-way', 'Other dimensions: Contact us for enquiry'],
    categoryId: 'cat-23',
    categorySlug: 'pallets',
    images: ['/images/products-new/pallet-plastic.jpg'],
    variants: [
      { code: 'PAL-PLASTIC-1100', spec: '1100mm × 1100mm × 120mm — 2-way / 4-way' },
      { code: 'PAL-PLASTIC-1200', spec: '1200mm × 1000mm × 150mm — 2-way / 4-way' },
    ],
    isFeatured: false,
    isActive: true,
  },
  {
    id: 'prod-41-paper',
    name: 'Paper Pallet',
    slug: 'paper-pallet',
    description: 'Lightweight honeycomb paper pallets — recyclable, export-friendly (no ISPM-15 treatment required), and cost-effective. Available in 2-way and 4-way entry configurations.',
    specs: ['Material: Honeycomb paper', 'Entry: 2-way / 4-way', 'Other dimensions: Contact us for enquiry'],
    categoryId: 'cat-23',
    categorySlug: 'pallets',
    images: ['/images/products-new/pallet-paper.jpg'],
    variants: [
      { code: 'PAL-PAPER-1100', spec: '1100mm × 1100mm × 120mm — 2-way / 4-way' },
      { code: 'PAL-PAPER-1200', spec: '1200mm × 1000mm × 150mm — 2-way / 4-way' },
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
