import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Plus } from "lucide-react";
import { Markdown } from "@/components/Markdown";
import { PageHead } from "@/components/PageHead";
import { site } from "@/data/site";
import { getFaqTopics } from "@/lib/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return getFaqTopics().map((t) => ({ topic: t.slug }));
}

export async function generateMetadata(props: PageProps<"/faqs/[topic]">): Promise<Metadata> {
  const { topic } = await props.params;
  const t = getFaqTopics().find((x) => x.slug === topic);
  if (!t) return {};
  return { title: `${t.title} FAQs`, description: t.questions.map((q) => q.question).join(" ").slice(0, 200) };
}

export default async function FaqTopicPage(props: PageProps<"/faqs/[topic]">) {
  const { topic } = await props.params;
  const topics = getFaqTopics();
  const i = topics.findIndex((t) => t.slug === topic);
  if (i === -1) notFound();
  const t = topics[i];
  const next = topics[(i + 1) % topics.length];

  return (
    <>
      <PageHead title={t.title}>
        <Link href="/faqs" className="meta inline-flex items-center gap-1.5 rounded-lg text-indigo-200 transition-colors duration-200 hover:text-white">
          <ArrowLeft aria-hidden size={16} />
          All FAQ topics
        </Link>
      </PageHead>

      <section className="py-12 md:py-20">
        <div className="wrap grid gap-12 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-20">
          <nav aria-label="FAQ topics" className="hidden lg:block">
            <ul className="sticky top-28 border-l border-indigo-100">
              {topics.map((x) => (
                <li key={x.slug}>
                  <Link
                    href={`/faqs/${x.slug}`}
                    aria-current={x.slug === t.slug ? "page" : undefined}
                    className="-ml-px block border-l-2 border-transparent py-1.5 pl-4 font-semibold text-muted transition-colors duration-200 hover:text-ink aria-[current=page]:border-indigo-800 aria-[current=page]:text-ink"
                  >
                    {x.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <div className="border-t border-indigo-100">
              {t.questions.map((q, qi) => (
                <details key={q.id} open={qi === 0} className="group border-b border-indigo-100">
                  <summary className="flex items-start justify-between gap-6 rounded-lg py-6">
                    <h2 className="h3 max-w-3xl">{q.question}</h2>
                    <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-xl bg-indigo-50 text-indigo-800 transition-[background-color,transform] duration-300 ease-out group-open:rotate-45 group-open:bg-yellow">
                      <Plus aria-hidden size={20} />
                    </span>
                  </summary>
                  <div className="pb-8">
                    <Markdown>{q.answer}</Markdown>
                  </div>
                </details>
              ))}
            </div>

            <p className="mt-10 max-w-[68ch] text-muted">
              Still stuck? Message us on Instagram at{" "}
              <a href={site.socials[0].url} target="_blank" rel="noopener noreferrer" className="link text-indigo-700">
                {site.socials[0].handle}
              </a>
              .
            </p>

            <Link href={`/faqs/${next.slug}`} className="group mt-12 flex items-center justify-between gap-6 rounded-3xl bg-indigo-50 p-7 transition-colors duration-200 hover:bg-indigo-100 md:p-9">
              <span>
                <span className="meta block text-muted">Next topic</span>
                <span className="h2 mt-1 block">{next.title}</span>
              </span>
              <ArrowRight aria-hidden size={28} className="shrink-0 text-indigo-700 transition-transform duration-300 ease-out group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
