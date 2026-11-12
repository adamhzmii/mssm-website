import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PageHead } from "@/components/PageHead";
import { site } from "@/data/site";
import { getFaqTopics } from "@/lib/content";

export const metadata: Metadata = {
  title: "Freshers’ FAQs",
  description: "Answers from the MSSM committee on visas, packing, accommodation, banking, transport, food and settling in to Manchester.",
};

export default function FaqsPage() {
  const topics = getFaqTopics();
  return (
    <>
      <PageHead
        title="Freshers’ FAQs"
        intro="Your first point of contact for moving to the UK and life in Manchester should be our Freshers’ Booklet. If it leaves a question unanswered, you might find the answer here."
      >
        <a href={site.freshersBooklet.url} target="_blank" rel="noopener noreferrer" className="btn btn-yellow">
          Read the {site.freshersBooklet.label}
          <ArrowUpRight size={18} aria-hidden />
        </a>
      </PageHead>

      <section className="py-12 md:py-20">
        <div className="wrap">
          <ul className="grid gap-x-12 border-t border-indigo-100 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((t) => (
              <li key={t.slug} className="border-b border-indigo-100">
                <Link href={`/faqs/${t.slug}`} className="group flex items-center justify-between gap-4 py-6">
                  <span>
                    <span className="h3 block transition-colors duration-200 group-hover:text-indigo-700">{t.title}</span>
                    <span className="mt-1 block text-[0.9375rem] text-muted">
                      {t.questions.length} {t.questions.length === 1 ? "question" : "questions"}
                    </span>
                  </span>
                  <ArrowRight aria-hidden size={22} className="shrink-0 text-indigo-300 transition-[transform,color] duration-300 ease-out group-hover:translate-x-1 group-hover:text-indigo-700" />
                </Link>
              </li>
            ))}
          </ul>
          <p className="lead mt-12 max-w-2xl">
            For anything that isn’t covered, message us on Instagram at{" "}
            <a href={site.socials[0].url} target="_blank" rel="noopener noreferrer" className="link text-indigo-700">
              {site.socials[0].handle}
            </a>{" "}
            and we’ll get back to you as soon as possible.
          </p>
        </div>
      </section>
    </>
  );
}
