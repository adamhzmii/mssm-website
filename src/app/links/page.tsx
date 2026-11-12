import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageHead } from "@/components/PageHead";
import { Photo } from "@/components/Photo";
import { documents, elsewhere, galleries, signUps, type LinkItem } from "@/data/links";

export const metadata: Metadata = {
  title: "Links",
  description: "Sign-up forms, documents and photo galleries from MSSM, all in one place.",
};

function PosterCard({ item }: { item: LinkItem }) {
  return (
    <a href={item.url} target="_blank" rel="noopener noreferrer" className="group flex flex-col rounded-2xl">
      {item.poster ? (
        <div className="zoom overflow-hidden rounded-2xl bg-indigo-100">
          <Photo src={item.poster} alt="" sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw" className="aspect-[4/5] w-full object-cover" />
        </div>
      ) : null}
      <span className="mt-4 flex items-start justify-between gap-3">
        <span className="font-display text-xl font-bold leading-tight transition-colors duration-200 group-hover:text-indigo-700">{item.title}</span>
        <ArrowUpRight aria-hidden size={20} className="mt-0.5 shrink-0 text-indigo-700 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
      {item.note ? <span className="mt-1.5 text-[0.9375rem] leading-snug text-muted">{item.note}</span> : null}
    </a>
  );
}

function Row({ item }: { item: LinkItem }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between gap-4 border-b border-indigo-100 py-4 font-display text-xl font-bold transition-colors duration-200 hover:text-indigo-700"
    >
      <span>
        {item.title}
        {item.note ? <span className="mt-0.5 block font-sans text-[0.9375rem] font-normal text-muted">{item.note}</span> : null}
      </span>
      <ArrowUpRight aria-hidden size={20} className="shrink-0 text-indigo-700 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}

export default function LinksPage() {
  const withPoster = (items: LinkItem[]) => items.filter((i) => i.poster);
  const plain = (items: LinkItem[]) => items.filter((i) => !i.poster);

  return (
    <>
      <PageHead title="Links" intro="Sign-up forms, documents and photo galleries, all in one place." />

      <section className="py-14 md:py-20">
        <div className="wrap">
          <h2 className="h2">Sign up.</h2>
          <ul className="mt-10 grid grid-cols-2 gap-x-5 gap-y-12 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-8">
            {signUps.map((item) => (
              <li key={item.url}>
                <PosterCard item={item} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-indigo-50 py-14 md:py-20">
        <div className="wrap">
          <h2 className="h2">Read.</h2>
          <ul className="mt-10 grid grid-cols-2 gap-x-5 gap-y-12 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-8">
            {withPoster(documents).map((item) => (
              <li key={item.url}>
                <PosterCard item={item} />
              </li>
            ))}
          </ul>
          <ul className="mt-10 max-w-2xl border-t border-indigo-200 [&_a]:border-indigo-200">
            {plain(documents).map((item) => (
              <li key={item.url}>
                <Row item={item} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="wrap grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="h2">Photos.</h2>
            <p className="mt-4 text-muted">Full albums from every event, year by year.</p>
            <ul className="mt-8 border-t border-indigo-100">
              {galleries.map((item) => (
                <li key={item.url}>
                  <Row item={item} />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="h2">Elsewhere.</h2>
            <ul className="mt-8 border-t border-indigo-100">
              {plain(elsewhere).map((item) => (
                <li key={item.url}>
                  <Row item={item} />
                </li>
              ))}
            </ul>
            <ul className="mt-10 grid max-w-xs grid-cols-1">
              {withPoster(elsewhere).map((item) => (
                <li key={item.url}>
                  <PosterCard item={item} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
