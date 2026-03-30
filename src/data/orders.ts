export type OrderStatus = 'Pending' | 'Confirmed' | 'Packed' | 'Shipped' | 'Delivered' | 'Cancelled';
export type PaymentMethod = 'stripe' | 'paynow' | 'cod';

export interface OrderItem {
  id: string;
  productId: string;
  productName: string;
  sku: string;
  unitPrice: number;
  quantity: number;
  lineTotal: number;
}

export interface Order {
  id: string;
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  deliveryAddress: string;
  items: OrderItem[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  paymentMethod: PaymentMethod;
  paymentStatus: 'paid' | 'pending' | 'failed';
  orderStatus: OrderStatus;
  notes: string;
  createdAt: string;
}

export const orders: Order[] = [
  {
    id: 'ord-1',
    orderNumber: 'INV-2026-00001',
    customerName: 'Tan Wei Ming',
    customerEmail: 'weiming@example.com',
    customerPhone: '+65 9123 4567',
    deliveryAddress: '12 Toa Payoh Lorong 1, #03-45, Singapore 310012',
    items: [
      { id: 'oi-1', productId: 'prod-1', productName: 'Smart OPP Tape (Brown)', sku: 'TWS-TAPE-BR-48', unitPrice: 2.80, quantity: 50, lineTotal: 140.00 },
      { id: 'oi-2', productId: 'prod-4', productName: 'PP Strapping Band (Black)', sku: 'TWS-STRAP-BK-12', unitPrice: 18.50, quantity: 5, lineTotal: 92.50 },
    ],
    subtotal: 232.50,
    deliveryFee: 15.00,
    total: 247.50,
    paymentMethod: 'stripe',
    paymentStatus: 'paid',
    orderStatus: 'Delivered',
    notes: 'Please deliver before 5 PM',
    createdAt: '2026-03-20T10:30:00+08:00',
  },
  {
    id: 'ord-2',
    orderNumber: 'INV-2026-00002',
    customerName: 'Lim Siew Hua',
    customerEmail: 'siewhua@example.com',
    customerPhone: '+65 8234 5678',
    deliveryAddress: '88 Jalan Besar, #01-22, Singapore 208813',
    items: [
      { id: 'oi-3', productId: 'prod-6', productName: 'Single-Wall Carton Box (Small)', sku: 'TWS-BOX-SW-S', unitPrice: 1.20, quantity: 200, lineTotal: 240.00 },
      { id: 'oi-4', productId: 'prod-8', productName: 'Bubble Wrap Roll (10mm Bubble)', sku: 'TWS-BW-10-100', unitPrice: 15.00, quantity: 10, lineTotal: 150.00 },
    ],
    subtotal: 390.00,
    deliveryFee: 0,
    total: 390.00,
    paymentMethod: 'paynow',
    paymentStatus: 'paid',
    orderStatus: 'Shipped',
    notes: '',
    createdAt: '2026-03-21T14:15:00+08:00',
  },
  {
    id: 'ord-3',
    orderNumber: 'INV-2026-00003',
    customerName: 'Ahmad Bin Ismail',
    customerEmail: 'ahmad@example.com',
    customerPhone: '+65 9345 6789',
    deliveryAddress: '5 Woodlands Ave 1, #05-10, Singapore 738952',
    items: [
      { id: 'oi-5', productId: 'prod-2', productName: 'Smart OPP Tape (Transparent)', sku: 'TWS-TAPE-CL-48', unitPrice: 2.80, quantity: 100, lineTotal: 280.00 },
    ],
    subtotal: 280.00,
    deliveryFee: 15.00,
    total: 295.00,
    paymentMethod: 'cod',
    paymentStatus: 'pending',
    orderStatus: 'Pending',
    notes: 'COD — cash ready',
    createdAt: '2026-03-22T09:00:00+08:00',
  },
  {
    id: 'ord-4',
    orderNumber: 'INV-2026-00004',
    customerName: 'Sarah Chen',
    customerEmail: 'sarah.c@example.com',
    customerPhone: '+65 8456 7890',
    deliveryAddress: '100 Orchard Road, #15-30, Singapore 238840',
    items: [
      { id: 'oi-6', productId: 'prod-10', productName: 'Stretch Film (Hand Roll)', sku: 'TWS-SF-HAND-500', unitPrice: 8.50, quantity: 20, lineTotal: 170.00 },
      { id: 'oi-7', productId: 'prod-12', productName: 'Mini Stretch Film (100mm)', sku: 'TWS-SF-MINI-100', unitPrice: 4.50, quantity: 30, lineTotal: 135.00 },
      { id: 'oi-8', productId: 'prod-7', productName: 'Double-Wall Carton Box (Medium)', sku: 'TWS-BOX-DW-M', unitPrice: 3.80, quantity: 50, lineTotal: 190.00 },
    ],
    subtotal: 495.00,
    deliveryFee: 0,
    total: 495.00,
    paymentMethod: 'stripe',
    paymentStatus: 'paid',
    orderStatus: 'Confirmed',
    notes: 'Bulk order for warehouse',
    createdAt: '2026-03-23T08:45:00+08:00',
  },
  {
    id: 'ord-5',
    orderNumber: 'INV-2026-00005',
    customerName: 'Raj Kumar',
    customerEmail: 'raj.k@example.com',
    customerPhone: '+65 9567 8901',
    deliveryAddress: '25 Changi South Street 1, Singapore 486059',
    items: [
      { id: 'oi-9', productId: 'prod-5', productName: 'PP Strapping Band (Black) — 15mm', sku: 'TWS-STRAP-BK-15', unitPrice: 22.00, quantity: 10, lineTotal: 220.00 },
      { id: 'oi-10', productId: 'prod-11', productName: 'Stretch Film (Machine Roll)', sku: 'TWS-SF-MACH-500', unitPrice: 28.00, quantity: 5, lineTotal: 140.00 },
    ],
    subtotal: 360.00,
    deliveryFee: 15.00,
    total: 375.00,
    paymentMethod: 'paynow',
    paymentStatus: 'paid',
    orderStatus: 'Packed',
    notes: '',
    createdAt: '2026-03-23T11:20:00+08:00',
  },
];
