import type { NextConfig } from "next";
import legacyEvents from "./src/data/legacy-redirects.json";

/** Paths from the old WordPress site, so existing links and search results still land. */
const legacyPages: Record<string, string> = {
  "/about-us-2": "/about",
  "/current-committee": "/committee",
  "/past-committee": "/committee/former",
  "/contact-us": "/contact",
  "/events-2": "/events",
  "/sponsors-2": "/sponsors",
  "/faq-visa": "/faqs/visa",
  "/faq-packing": "/faqs/packing",
  "/faq-airport-pick-up": "/faqs/airport-pick-up",
  "/faq-accommodation": "/faqs/accommodation",
  "/faq-bank-account": "/faqs/bank-account",
  "/faq-money-matters": "/faqs/money-matters",
  "/faq-telecom-services": "/faqs/telecom-services",
  "/faq-freshers-week": "/faqs/freshers-week",
  "/faq-transportation": "/faqs/transportation",
  "/faq-groceries": "/faqs/groceries",
  "/faq-restaurants-shopping": "/faqs/restaurants-shopping",
  "/faq-welfare": "/faqs/welfare",
  "/faq-extra-curriculars": "/faqs/extra-curriculars",
};

const nextConfig: NextConfig = {
  // Images are pre-optimised to WebP when content is migrated; see src/components/Photo.tsx.
  images: { unoptimized: true },
  async redirects() {
    return [
      ...Object.entries(legacyPages).map(([source, destination]) => ({ source, destination, permanent: true })),
      ...legacyEvents.map((r) => ({ ...r, permanent: true })),
    ];
  },
};

export default nextConfig;
