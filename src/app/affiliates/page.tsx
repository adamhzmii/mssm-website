import type { Metadata } from "next";
import { ExternalLink } from "@/components/ExternalLink";
import { PageHead } from "@/components/PageHead";
import { LogoTile } from "@/components/LogoTile";
import { affiliates } from "@/data/affiliates";

export const metadata: Metadata = {
  title: "Affiliates",
  description: "The Malaysian student organisations across the UK and Ireland that MSSM is affiliated with.",
};

export default function AffiliatesPage() {
  return (
    <>
      <PageHead title="Affiliates" intro={`The ${affiliates.length} Malaysian student organisations we work alongside, in Manchester and across the UK and Ireland.`} />

      <section className="py-12 md:py-20">
        <ul className="wrap grid gap-x-12 md:grid-cols-2">
          {affiliates.map((a) => (
            <li key={a.short} className="grid grid-cols-[5.5rem_1fr] gap-5 border-b border-indigo-100 py-9 sm:grid-cols-[7rem_1fr] sm:gap-7">
              <div className="self-start">
                <LogoTile src={a.logo} sizes="112px" ratio="aspect-square" pad="p-1.5" />
              </div>
              <div>
                <h2 className="h3">{a.short}</h2>
                {a.name !== a.short ? <p className="mt-1 font-semibold leading-snug text-muted">{a.name}</p> : null}
                <p className="mt-3 text-[1rem]">{a.body}</p>
                <p className="mt-4">
                  <ExternalLink href={a.url}>Visit {a.short}</ExternalLink>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
