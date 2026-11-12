import type { MetadataRoute } from "next";
import { nav, site } from "@/data/site";
import { getEvents, getFaqTopics } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", ...nav.map((n) => n.href), "/committee/former", "/contact"];
  return [
    ...pages.map((p) => ({ url: `${site.url}${p}` })),
    ...getFaqTopics().map((t) => ({ url: `${site.url}/faqs/${t.slug}` })),
    ...getEvents().map((e) => ({ url: `${site.url}/events/${e.slug}`, lastModified: e.sortDate })),
  ];
}
