import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { ExternalLink } from "@/components/ExternalLink";
import { PageHead } from "@/components/PageHead";
import { LogoTile } from "@/components/LogoTile";
import { partners } from "@/data/partners";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Partners",
  description: "Discounts for MSSM members at Maki & Ramen, Hello Oriental and Zaap Thai in Manchester.",
};

export default function PartnersPage() {
  return (
    <>
      <PageHead title="Partners" intro="Places around Manchester where MSSM members pay less.">
        <a href={site.membership.url} target="_blank" rel="noopener noreferrer" className="btn btn-yellow">
          Become a member · {site.membership.price}
          <ArrowRight size={18} aria-hidden />
        </a>
      </PageHead>

      <section className="py-10 md:py-16">
        <ul className="wrap">
          {partners.map((p) => (
            <li key={p.name} className="grid gap-8 border-b border-indigo-100 py-12 last:border-b-0 md:grid-cols-[minmax(0,20rem)_1fr] md:gap-14 md:py-16">
              <div>
                <p className="font-display text-[4.5rem] font-extrabold leading-[0.9] tracking-[-0.04em] text-red md:text-[6rem]">{p.offer}</p>
                <p className="mt-4 font-semibold leading-snug">{p.terms}</p>
              </div>
              <div>
                <div className="flex items-center gap-5">
                  <div className="w-28 shrink-0">
                    <LogoTile src={p.logo} sizes="112px" ratio="aspect-[4/3]" />
                  </div>
                  <h2 className="h2">{p.name}</h2>
                </div>
                <div className="mt-6 max-w-[68ch] space-y-4">
                  {p.body.map((t) => (
                    <p key={t}>{t}</p>
                  ))}
                </div>
                <ul className="mt-6 flex flex-wrap gap-x-7 gap-y-2.5">
                  {p.links.map((l) => (
                    <li key={l.url}>
                      <ExternalLink href={l.url}>{l.label}</ExternalLink>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
