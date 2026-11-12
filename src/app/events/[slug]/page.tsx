import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Gallery, type GalleryImage } from "@/components/Gallery";
import { Markdown } from "@/components/Markdown";
import { Photo } from "@/components/Photo";
import { eventDate, getEvent, getEvents } from "@/lib/content";
import { getMedia } from "@/lib/media";

export const dynamicParams = false;

export function generateStaticParams() {
  return getEvents().map((e) => ({ slug: e.slug }));
}

export async function generateMetadata(props: PageProps<"/events/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const event = getEvent(slug);
  if (!event) return {};
  return {
    title: event.title,
    description: event.excerpt,
    openGraph: {
      title: event.title,
      description: event.excerpt,
      type: "article",
      images: event.cover ? [{ url: `${event.cover}.webp` }] : undefined,
    },
  };
}

export default async function EventPage(props: PageProps<"/events/[slug]">) {
  const { slug } = await props.params;
  const events = getEvents();
  const i = events.findIndex((e) => e.slug === slug);
  if (i === -1) notFound();
  const event = events[i];
  const newer = events[i - 1];
  const older = events[i + 1];

  const [cover, ...others] = event.gallery;
  const images: GalleryImage[] = others.flatMap((src) => {
    const m = getMedia(src);
    if (!m) return [];
    return [{ src: `${src}.webp`, srcSet: m.sm ? `${src}-sm.webp ${m.sm}w, ${src}.webp ${m.w}w` : undefined, w: m.w, h: m.h, color: m.c }];
  });
  const coverMedia = cover ? getMedia(cover) : undefined;
  const portraitCover = coverMedia ? coverMedia.h > coverMedia.w : false;

  return (
    <article>
      <header className="bg-indigo-900 text-white">
        <div className="wrap pb-12 pt-8 md:pb-16 md:pt-12">
          <Link href="/events" className="meta inline-flex items-center gap-1.5 rounded-lg text-indigo-200 transition-colors duration-200 hover:text-white">
            <ArrowLeft aria-hidden size={16} />
            All events
          </Link>
          <h1 className="h1 mt-6 max-w-5xl animate-rise">{event.title}</h1>
          <p className="meta mt-6 flex animate-rise flex-wrap items-center gap-x-3 gap-y-1 text-[0.9375rem] text-indigo-200 [animation-delay:70ms]">
            <span className="text-yellow">{event.category}</span>
            <span aria-hidden className="size-1 rounded-full bg-indigo-300" />
            {event.date ? <time dateTime={event.date}>{eventDate(event)}</time> : <span>{eventDate(event)}</span>}
            <span aria-hidden className="size-1 rounded-full bg-indigo-300" />
            <span>{event.season} academic year</span>
          </p>
        </div>
      </header>

      <div className="wrap py-12 md:py-16">
        <div className={`grid gap-10 lg:gap-16 ${cover ? (portraitCover ? "lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)]" : "lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]") : ""}`}>
          {cover ? (
            <div className="lg:order-2">
              <div className="overflow-hidden rounded-3xl lg:sticky lg:top-28">
                <Photo src={cover} alt={`A photograph from ${event.title}`} sizes="(min-width: 1024px) 50vw, 92vw" priority className="w-full" />
              </div>
            </div>
          ) : null}
          <div className="lg:order-1">
            <Markdown className="prose text-[1.125rem]">{event.body}</Markdown>
            {event.videos.map((v) =>
              /youtube|youtu\.be|vimeo|video\.wordpress\.com/.test(v) ? (
                <div key={v} className="mt-8 aspect-video max-w-[68ch] overflow-hidden rounded-2xl bg-indigo-100">
                  <iframe src={v} title={`Video from ${event.title}`} loading="lazy" allowFullScreen className="size-full" />
                </div>
              ) : null,
            )}
          </div>
        </div>

        {images.length > 0 ? (
          <section className="mt-16 md:mt-24">
            <h2 className="h2">Photos.</h2>
            <div className="mt-8">
              <Gallery images={images} label={event.title} />
            </div>
          </section>
        ) : null}
      </div>

      <nav aria-label="More events" className="border-t border-indigo-100">
        <div className="wrap grid gap-px sm:grid-cols-2">
          {older ? (
            <Link href={`/events/${older.slug}`} className="group py-8 sm:pr-8 md:py-12">
              <span className="meta flex items-center gap-1.5 text-muted">
                <ArrowLeft aria-hidden size={16} className="transition-transform duration-300 ease-out group-hover:-translate-x-1" />
                Earlier
              </span>
              <span className="h3 mt-2 block transition-colors duration-200 group-hover:text-indigo-700">{older.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {newer ? (
            <Link href={`/events/${newer.slug}`} className="group border-t border-indigo-100 py-8 sm:border-l sm:border-t-0 sm:pl-8 sm:text-right md:py-12">
              <span className="meta flex items-center gap-1.5 text-muted sm:justify-end">
                Later
                <ArrowRight aria-hidden size={16} className="transition-transform duration-300 ease-out group-hover:translate-x-1" />
              </span>
              <span className="h3 mt-2 block transition-colors duration-200 group-hover:text-indigo-700">{newer.title}</span>
            </Link>
          ) : null}
        </div>
      </nav>
    </article>
  );
}
