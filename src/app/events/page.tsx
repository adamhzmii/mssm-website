import type { Metadata } from "next";
import { EventCard } from "@/components/EventCard";
import { EventFilter } from "@/components/EventFilter";
import { PageHead } from "@/components/PageHead";
import { categories, getEvents } from "@/lib/content";

export const metadata: Metadata = {
  title: "Events",
  description: "Write-ups and photographs from MSSM events: festivals, freshers’ events, MGames, MNight, careers evenings and socials.",
};

export default function EventsPage() {
  const events = getEvents();
  const seasons = [...new Set(events.map((e) => e.season))];
  const options = categories
    .map((c) => ({ value: c, count: events.filter((e) => e.category === c).length }))
    .filter((o) => o.count > 0);

  // One pair of rules per category: hide the cards that don't match, then any year with nothing left.
  const css = options
    .map(
      ({ value }) =>
        `[data-filter="${value}"] [data-category]:not([data-category="${value}"]){display:none}` +
        `[data-filter="${value}"] [data-season]:not(:has([data-category="${value}"])){display:none}`,
    )
    .join("");

  return (
    <>
      <PageHead
        title="Events"
        intro={`${events.length} write-ups since ${seasons[seasons.length - 1].slice(0, 4)}, from festival dinners to general meetings.`}
      />
      <style>{css}</style>
      <section className="py-12 md:py-16">
        <div className="wrap">
          <EventFilter options={options} total={events.length}>
            {seasons.map((season, si) => (
              <section key={season} data-season={season} className="mt-14 first-of-type:mt-12">
                <h2 className="h2 border-b border-indigo-100 pb-4">{season}</h2>
                <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-9 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-3">
                  {events
                    .filter((e) => e.season === season)
                    .map((e, i) => (
                      <EventCard key={e.slug} event={e} compact sizes="(min-width: 1024px) 33vw, 50vw" priority={si === 0 && i < 3} />
                    ))}
                </div>
              </section>
            ))}
          </EventFilter>
        </div>
      </section>
    </>
  );
}
