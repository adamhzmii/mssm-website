import Link from "next/link";
import { eventDate, type EventPost } from "@/lib/content";
import { Photo } from "./Photo";

type Props = {
  event: EventPost;
  /** A larger treatment for the lead story. */
  lead?: boolean;
  sizes?: string;
  priority?: boolean;
  /** Smaller type on phones, for two-up grids. */
  compact?: boolean;
};

export function EventCard({ event, lead, sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw", priority, compact }: Props) {
  return (
    <Link href={`/events/${event.slug}`} data-category={event.category} className="group flex flex-col rounded-2xl">
      <div className={`zoom overflow-hidden rounded-2xl bg-indigo-100 ${lead ? "aspect-[4/3] lg:aspect-[5/4]" : "aspect-[4/3]"}`}>
        {event.cover ? (
          <Photo src={event.cover} alt="" sizes={sizes} priority={priority} className="size-full object-cover" />
        ) : (
          <div className="grid size-full place-items-center bg-indigo-800">
            <img src="/brand/mssm-mark.png" alt="" width={120} height={125} className="w-24 opacity-90" />
          </div>
        )}
      </div>
      <p className={`meta flex flex-wrap items-center gap-x-2.5 text-muted ${compact ? "mt-3 text-[0.8125rem] sm:mt-4 sm:text-sm" : "mt-4"}`}>
        <span className="text-red">{event.category}</span>
        <span aria-hidden className="size-1 rounded-full bg-indigo-200" />
        <span>{eventDate(event, "short")}</span>
      </p>
      <h3 className={`mt-1.5 font-display font-bold leading-[1.1] tracking-[-0.012em] transition-colors duration-200 group-hover:text-indigo-700 ${lead ? "text-[1.75rem] lg:text-[2.25rem]" : compact ? "text-[1.0625rem] sm:text-[1.375rem]" : "text-[1.375rem]"}`}>
        {event.title}
      </h3>
      {lead ? <p className="mt-3 max-w-xl text-muted">{event.excerpt}</p> : null}
    </Link>
  );
}
