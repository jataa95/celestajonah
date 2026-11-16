import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter_Tight } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import "./globals.css";

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});
const sans = Inter_Tight({ variable: "--font-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://celestajonah.vercel.app"),
  title: { default: "Celesta Jonah — Contemporary Nigerian portraiture", template: "%s — Celesta Jonah" },
  description:
    "Oil and graphite portraits by Nigerian artist Celesta Jonah (Jonah Abasiekeme). Works, studio journal, commissions and enquiries.",
  openGraph: {
    title: "Celesta Jonah — Contemporary Nigerian portraiture",
    description: "Oil and graphite portraits, painted by hand in Nigeria.",
    images: ["/works/field.jpg"],
  },
};

export const viewport: Viewport = { themeColor: "#f3f0ea" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <a href="#main" className="skip">Skip to content</a>
        <Nav />
        <Reveal />
        <main id="main" className="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
