import type { Metadata, Viewport } from "next";
import { Hedvig_Letters_Serif, Hedvig_Letters_Sans } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import HoverFX from "@/components/HoverFX";
import "./globals.css";

const serif = Hedvig_Letters_Serif({ variable: "--font-serif", subsets: ["latin"] });
const sans = Hedvig_Letters_Sans({ variable: "--font-sans", subsets: ["latin"], weight: "400" });

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

export const viewport: Viewport = { themeColor: "#e9d8bf" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <a href="#main" className="skip">Skip to content</a>
        <Nav />
        <Reveal />
        <main id="main" className="main">{children}</main>
        <Footer />
        <HoverFX />
      </body>
    </html>
  );
}
