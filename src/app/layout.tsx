import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Megapac Industries — Packaging Materials Manufacturer & Supplier Singapore",
  description:
    "Singapore's leading manufacturer and distributor of adhesive tapes, packaging materials and associated machinery. OPP tapes, stretch film, PVC tapes, masking tape, PE foam, bubble wrap, strapping bands, dunnage air bags and more. Request a quote today.",
  keywords: "pallet stretch film, OPP tape, masking tape, wooden pallet, recycle pallet, plastic pallet, PE foam, plastic sheet, dunnage airbag, PP strapping band, PET strapping band, packaging supplier Singapore, edgeboard protector, silica gel, bubble wrap, corrugated paper, kraft tape, cloth tape, packaging materials Singapore, Megapac Industries",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
