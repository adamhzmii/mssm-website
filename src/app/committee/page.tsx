import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Honeycomb, type Member } from "@/components/Honeycomb";
import { PageHead } from "@/components/PageHead";
import { Photo } from "@/components/Photo";
import committees from "@/data/committees.json";
import { currentCommitteeYear } from "@/data/site";

export const metadata: Metadata = {
  title: `Committee ${currentCommitteeYear}`,
  description: `The students who run MSSM in ${currentCommitteeYear}.`,
};

/** The elected executive: the society calls them the Top 5. */
const top5 = ["President", "Vice President", "General Secretary", "Treasurer", "Sponsorship Director"];

export default function CommitteePage() {
  const current = committees.find((c) => c.year === currentCommitteeYear) ?? committees[0];
  const exec = current.members.filter((m) => top5.includes(m.role)) as Member[];
  const rest = current.members.filter((m) => !top5.includes(m.role)) as Member[];

  return (
    <>
      <PageHead title={`Committee ${current.year}`} intro={`The ${current.members.length} students who run MSSM this year.`} />

      <section className="py-16 md:py-24">
        <div className="wrap">
          <div className="overflow-hidden rounded-3xl">
            <Photo
              src="/media/site/committee-2526"
              alt={`The MSSM ${current.year} committee in suits on the steps of the Whitworth building`}
              sizes="(min-width: 1280px) 1152px, 92vw"
              priority
              className="aspect-[4/3] w-full object-cover object-[50%_35%] sm:aspect-[16/9] lg:aspect-[21/9]"
            />
          </div>

          <h2 className="h2 mt-16 md:mt-20">The Top 5.</h2>
          <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-6">
            {exec.map((m) => (
              <li key={m.name} className="max-sm:last:odd:col-span-2 max-sm:last:odd:mx-auto max-sm:last:odd:w-[calc(50%-0.5rem)]">
                <div className="hex w-full bg-indigo-100">
                  {m.photo ? (
                    <Photo src={m.photo} alt="" sizes="(min-width: 1024px) 220px, (min-width: 640px) 30vw, 46vw" className="size-full object-cover object-[50%_18%]" />
                  ) : null}
                </div>
                <p className="mt-4 text-center font-display text-xl font-bold leading-tight">{m.name}</p>
                <p className="mt-1 text-center text-[0.9375rem] leading-snug text-muted">{m.role}</p>
              </li>
            ))}
          </ul>

          <h2 className="h2 mt-20 md:mt-28">The committee.</h2>
          <div className="mt-10">
            <Honeycomb members={rest} />
          </div>
        </div>
      </section>

      <section className="bg-indigo-50">
        <div className="wrap flex flex-wrap items-center justify-between gap-x-10 gap-y-6 py-14 md:py-20">
          <div>
            <h2 className="h2">Every committee since 2019.</h2>
            <p className="lead mt-4 max-w-xl text-muted">The people who built what this year’s committee inherited.</p>
          </div>
          <Link href="/committee/former" className="btn btn-indigo">
            Former committees
            <ArrowRight size={18} aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
