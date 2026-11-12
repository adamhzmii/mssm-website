import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHead } from "@/components/PageHead";
import { Photo } from "@/components/Photo";
import { affiliates } from "@/data/affiliates";
import { currentCommitteeYear, site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "MSSM is a community of Malaysian students in Manchester, across the University of Manchester, Manchester Metropolitan University and the University of Salford.",
};

export default function AboutPage() {
  return (
    <>
      <PageHead
        title="About MSSM"
        intro="A community of Malaysian students in Manchester, and a place to call home while you study here."
      />

      <section className="py-16 md:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div className="space-y-6">
            <p className="lead">
              The Malaysian Students’ Society of Manchester (MSSM) serves as a platform for Malaysian students to connect,
              share experiences, and support one another throughout their university journey.
            </p>
            <p>
              We are committed to promoting Malaysian culture and values among our members and the wider community, and
              we regularly organise events and activities that showcase Malaysian traditions and customs.
            </p>
            <p>
              Our society is made up of students from various backgrounds and academic disciplines, and we welcome all
              Malaysians who are looking for a community to call home in Manchester. We strive to create a warm and
              welcoming environment where members can feel comfortable expressing themselves and making new friends.
            </p>
            <p>
              At MSSM, we believe in empowering our members to reach their full potential, and we offer a range of
              resources and support to help them succeed academically and personally. Our events and activities are
              designed to provide opportunities for personal and professional development, as well as cultural exchange
              and understanding.
            </p>
            <p>
              Whether you’re a new student looking to make friends and settle in, or a returning student seeking to get
              involved in the Malaysian community, MSSM is the place for you.
            </p>
            <a href={site.membership.url} target="_blank" rel="noopener noreferrer" className="btn btn-indigo !mt-9">
              Become a member
              <ArrowRight size={18} aria-hidden />
            </a>
          </div>

          <aside className="self-start rounded-3xl bg-indigo-50 p-7 md:p-9 lg:sticky lg:top-28">
            <h2 className="h3">Three universities, one society.</h2>
            <p className="mt-3 text-muted">MSSM is for Malaysian university students in Manchester, including those at:</p>
            <ul className="mt-6">
              {site.universities.map((u) => (
                <li key={u} className="flex items-center gap-3.5 border-t border-indigo-200 py-4 font-display text-xl font-bold leading-tight">
                  <span aria-hidden className="hex w-4 shrink-0 bg-yellow" />
                  {u}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="wrap">
          <Link href="/committee" className="group block">
            <div className="zoom overflow-hidden rounded-3xl">
              <Photo
                src="/media/site/committee-2526"
                alt={`The MSSM ${currentCommitteeYear} committee in suits on the steps of the Whitworth building`}
                sizes="(min-width: 1280px) 1152px, 92vw"
                className="aspect-[4/3] w-full object-cover object-[50%_35%] sm:aspect-[16/9] lg:aspect-[21/9]"
              />
            </div>
            <div className="mt-6 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
              <h2 className="h2 transition-colors duration-200 group-hover:text-indigo-700">Meet the {currentCommitteeYear} committee.</h2>
              <span className="link text-indigo-700">See who’s who</span>
            </div>
          </Link>
        </div>
      </section>

      <section className="bg-indigo-50 py-16 md:py-24">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
            <h2 className="h2 max-w-2xl">Part of a wider Malaysian network.</h2>
            <Link href="/affiliates" className="link text-indigo-700">
              All {affiliates.length} affiliates
            </Link>
          </div>
          <ul className="mt-10 flex flex-wrap gap-2.5">
            {affiliates.map((a) => (
              <li key={a.short}>
                <Link href="/affiliates" title={a.name} className="block rounded-xl bg-white px-4 py-2.5 font-display text-lg font-bold transition-colors duration-200 hover:bg-indigo-800 hover:text-white">
                  {a.short}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
