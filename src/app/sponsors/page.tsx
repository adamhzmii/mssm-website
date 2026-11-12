import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { ExternalLink } from "@/components/ExternalLink";
import { PageHead } from "@/components/PageHead";
import { LogoTile } from "@/components/LogoTile";
import { site } from "@/data/site";
import { sponsors, tiers } from "@/data/sponsors";

export const metadata: Metadata = {
  title: "Sponsors",
  description: "The organisations that sponsor MSSM, and the careers, internships and offers they open to members.",
};

export default function SponsorsPage() {
  return (
    <>
      <PageHead title="Sponsors" intro="The organisations behind our events, and what they open up for members." />

      <div className="py-8 md:py-12">
        {tiers.map((tier) => {
          const group = sponsors.filter((s) => s.tier === tier);
          if (group.length === 0) return null;
          return (
            <section key={tier} className="wrap py-10 md:py-14">
              <h2 className="h2 border-b border-indigo-100 pb-4">{tier}</h2>
              <ul>
                {group.map((s) => (
                  <li key={s.name} className="grid gap-6 border-b border-indigo-100 py-10 md:grid-cols-[minmax(0,22rem)_1fr] md:gap-12 md:py-12">
                    <div className="self-start">
                      <LogoTile src={s.logo} alt={`${s.name} logo`} sizes="(min-width: 768px) 352px, 92vw" />
                    </div>
                    <div>
                      <h3 className="h3">{s.name}</h3>
                      <div className="mt-4 max-w-[68ch] space-y-4">
                        {s.body.map((p) => (
                          <p key={p}>{p}</p>
                        ))}
                      </div>
                      <ul className="mt-6 flex flex-wrap gap-x-7 gap-y-2.5">
                        {s.links.map((l) => (
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
          );
        })}
      </div>

      <section className="bg-yellow text-ink">
        <div className="wrap flex flex-wrap items-center justify-between gap-x-10 gap-y-6 py-14 md:py-20">
          <div>
            <h2 className="h2">Sponsor MSSM.</h2>
            <p className="lead mt-4 max-w-xl">Reach Malaysian students across three Manchester universities. Write to the committee to talk about sponsoring MSSM.</p>
          </div>
          <a href={`mailto:${site.email}?subject=${encodeURIComponent("Sponsoring MSSM")}`} className="btn btn-indigo">
            Email the committee
            <ArrowRight size={18} aria-hidden />
          </a>
        </div>
      </section>
    </>
  );
}
