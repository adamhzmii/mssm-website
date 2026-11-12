import type { Metadata } from "next";
import Link from "next/link";
import { Honeycomb, type Member } from "@/components/Honeycomb";
import { PageHead } from "@/components/PageHead";
import committees from "@/data/committees.json";
import { currentCommitteeYear } from "@/data/site";

export const metadata: Metadata = {
  title: "Former committees",
  description: "Every MSSM committee since 2019/20.",
};

const anchor = (year: string) => `y${year.replace("/", "-")}`;

export default function FormerCommitteePage() {
  const former = committees.filter((c) => c.year !== currentCommitteeYear);

  return (
    <>
      <PageHead title="Former committees" intro="The students who ran MSSM in years past.">
        <nav aria-label="Committee years">
          <ul className="flex flex-wrap gap-2.5">
            {former.map((c) => (
              <li key={c.year}>
                <a href={`#${anchor(c.year)}`} className="block rounded-xl border border-white/20 px-4 py-2 font-display text-lg font-bold transition-colors duration-200 hover:border-yellow hover:text-yellow">
                  {c.year}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHead>

      <div className="py-6 md:py-10">
        {former.map((c) => (
          <section key={c.year} id={anchor(c.year)} className="wrap border-b border-indigo-100 py-12 last:border-b-0 md:py-16">
            <h2 className="h2">{c.year}</h2>
            <div className="mt-10">
              <Honeycomb members={c.members as Member[]} size="sm" />
            </div>
          </section>
        ))}
      </div>

      <div className="wrap pb-20">
        <Link href="/committee" className="link text-indigo-700">
          Back to the {currentCommitteeYear} committee
        </Link>
      </div>
    </>
  );
}
