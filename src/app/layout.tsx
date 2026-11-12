import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HexDefs } from "@/components/Hex";
import { site } from "@/data/site";

const gabarito = localFont({
  variable: "--font-gabarito",
  display: "swap",
  src: [
    { path: "./fonts/gabarito-latin-wght-normal.woff2", weight: "400 900", style: "normal" },
  ],
});

const hanken = localFont({
  variable: "--font-hanken",
  display: "swap",
  src: [
    { path: "./fonts/hanken-grotesk-latin-wght-normal.woff2", weight: "100 900", style: "normal" },
    { path: "./fonts/hanken-grotesk-latin-wght-italic.woff2", weight: "100 900", style: "italic" },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.shortName} — ${site.name}`,
    template: `%s — ${site.shortName}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_GB",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "MSSM members gathered outside the University of Manchester" }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#1b1749",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${gabarito.variable} ${hanken.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="btn btn-yellow fixed left-4 top-4 z-[100] -translate-y-24 focus-visible:translate-y-0"
        >
          Skip to content
        </a>
        <HexDefs />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
