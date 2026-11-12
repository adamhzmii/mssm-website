import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { EventCard } from "@/components/EventCard";
import { HeroHive } from "@/components/HeroHive";
import { LogoTile } from "@/components/LogoTile";
import { Photo } from "@/components/Photo";
import { Strands, type Strand } from "@/components/Strands";
import { partners } from "@/data/partners";
import { site } from "@/data/site";
import { sponsors } from "@/data/sponsors";
import { eventDate, getEvents, getFaqTopics } from "@/lib/content";
import { getMedia } from "@/lib/media";

const strandData = [
  {
    title: "Festivals",
    text: "Chinese New Year, Deepavali, Hari Raya, Mid-Autumn and Christmas, celebrated together.",
    href: "/events?category=Festivals",
    src: "/media/events/cny-dinner-2026/06",
    alt: "Members at a round table covered in dishes at the Chinese New Year dinner",
  },
  {
    title: "Freshers",
    text: "Pre-departure meet-ups in Malaysia, a tour of the city, and MKita in your first weeks.",
    href: "/events?category=Freshers",
    src: "/media/events/mkita/04",
    alt: "A team of freshers posing on campus during MKita",
  },
  {
    title: "MGames",
    text: "Our multi-sport tournament. More than 700 players from across the UK took part in 2025.",
    href: "/events?category=Sports",
    src: "/media/events/manchester-malaysian-games-bee-there-and-bring-your-a-game/07",
    alt: "A badminton player mid-rally at MGames",
  },
  {
    title: "MNight",
    text: "A stage production written, performed and produced by students every year.",
    href: "/events?category=MNight",
    src: "/media/events/manchester-m-night-2025/07",
    alt: "Dancers with parasols on stage at MNight 2025",
  },
  {
    title: "Careers",
    text: "Evenings with CIMB, EY, SD Guthrie, Gamuda and other Malaysian employers.",
    href: "/events?category=Careers",
    src: "/media/events/sd-guthrie-gamuda-and-ey-engagement-sessions/02",
    alt: "A full room of students at an employer engagement session",
  },
  {
    title: "Ohana",
    text: "A family programme that pairs freshers with seniors for the year.",
    href: "/events?category=Socials",
    src: "/media/events/ohana-berbonded/01",
    alt: "Ohana families gathered for a group photograph at Ohana Berbonded",
  },
];

export default function Home() {
  const events = getEvents();
  const [lead, ...rest] = events.slice(0, 4);
  const topics = getFaqTopics();

  const strands: Strand[] = strandData.map((s) => {
    const m = getMedia(s.src);
    return {
      title: s.title,
      text: s.text,
      href: s.href,
      image: {
        src: `${s.src}.webp`,
        srcSet: m?.sm ? `${s.src}-sm.webp ${m.sm}w, ${s.src}.webp ${m.w}w` : undefined,
        alt: s.alt,
        color: m?.c ?? "#e7e5f5",
      },
    };
  });

  return (
    <>
      {/* Hero: the logo's three hexagons, opened up to show the people inside. */}
      <section className="overflow-hidden bg-indigo-900 text-white">
        <div className="wrap grid items-center gap-12 pb-16 pt-8 md:pb-20 lg:min-h-[min(calc(100svh-4.5rem),52rem)] lg:grid-cols-[0.92fr_1.08fr] lg:gap-8 lg:py-12">
          <div>
            <h1 className="display animate-rise">
              Your home
              <br />
              away from <br className="hidden lg:block" />
              home.
            </h1>
            <p className="lead mt-7 max-w-xl animate-rise text-indigo-200 [animation-delay:80ms]">
              Selamat datang. MSSM is the largest Malaysian student body in Manchester, for students at the University of
              Manchester, Manchester Met and Salford.
            </p>
            <div className="mt-9 flex animate-rise flex-wrap gap-3 [animation-delay:160ms]">
              <a href={site.membership.url} target="_blank" rel="noopener noreferrer" className="btn btn-yellow">
                Become a member
                <ArrowRight size={18} aria-hidden />
              </a>
              <Link href="/events" className="btn btn-ghost">
                See our events
              </Link>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[34rem] lg:max-w-[40rem] lg:justify-self-end">
            <HeroHive />
          </div>
        </div>
      </section>

      {/* Who we are, with the whole society in one frame. */}
      <section className="py-20 md:py-28">
        <div className="wrap">
          <div className="zoom-self overflow-hidden rounded-3xl">
            <Photo
              src="/media/events/mkita/01"
              alt="More than a hundred Malaysian students gathered outside the University of Manchester’s Whitworth building at MKita"
              sizes="(min-width: 1280px) 1152px, 92vw"
              className="aspect-[4/3] w-full object-cover sm:aspect-[2/1] lg:aspect-[21/9]"
            />
          </div>
          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <h2 className="h2">The largest Malaysian student body in Manchester.</h2>
            <div>
              <p className="lead">
                MSSM is a platform for Malaysian students to connect, share experiences, and support one another through
                university. We organise cultural and social events and look out for our members, so that Manchester feels
                like home.
              </p>
              <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-indigo-100 pt-8">
                {[
                  ["20+", "events in the 2025/26 year"],
                  ["700+", "players at MGames 2025"],
                  ["3", "universities, one society"],
                ].map(([n, label]) => (
                  <div key={label}>
                    <dt className="sr-only">{label}</dt>
                    <dd>
                      <span className="block font-display text-[2.25rem] font-extrabold leading-none tracking-[-0.03em] text-indigo-800 md:text-[3.25rem]">
                        {n}
                      </span>
                      <span className="mt-2 block text-[0.9375rem] leading-snug text-muted">{label}</span>
                    </dd>
                  </div>
                ))}
              </dl>
              <Link href="/about" className="btn btn-indigo mt-10">
                About MSSM
                <ArrowRight size={18} aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What we do. */}
      <section className="bg-indigo-50 py-20 md:py-28">
        <div className="wrap">
          <h2 className="h2 max-w-3xl">A year with MSSM.</h2>
          <p className="lead mt-5 max-w-2xl text-muted">
            From the pre-departure meet-up in Kuala Lumpur to the last general meeting in May.
          </p>
          <div className="mt-12 lg:mt-14">
            <Strands items={strands} />
          </div>
        </div>
      </section>

      {/* Latest write-ups. */}
      <section className="py-20 md:py-28">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
            <h2 className="h2">Latest events.</h2>
            <Link href="/events" className="link text-indigo-700">
              All {events.length} write-ups
            </Link>
          </div>
          <div className="mt-10 grid gap-x-8 gap-y-12 lg:grid-cols-[1.35fr_1fr]">
            <EventCard event={lead} lead sizes="(min-width: 1024px) 55vw, 100vw" />
            <ul className="self-start border-t border-indigo-100">
              {rest.map((e) => (
                <li key={e.slug} className="border-b border-indigo-100">
                  <Link href={`/events/${e.slug}`} className="group grid grid-cols-[7rem_1fr] items-center gap-5 py-5 sm:grid-cols-[11rem_1fr] sm:gap-6 lg:py-6">
                    <div className="zoom aspect-[4/3] overflow-hidden rounded-xl bg-indigo-100">
                      {e.cover ? <Photo src={e.cover} alt="" sizes="(min-width: 640px) 176px, 112px" className="size-full object-cover" /> : null}
                    </div>
                    <div>
                      <p className="meta flex flex-wrap items-center gap-x-2.5 text-muted">
                        <span className="text-red">{e.category}</span>
                        <span aria-hidden className="size-1 rounded-full bg-indigo-200" />
                        <span>{eventDate(e, "short")}</span>
                      </p>
                      <h3 className="mt-1.5 font-display text-xl font-bold leading-[1.12] tracking-[-0.012em] transition-colors duration-200 group-hover:text-indigo-700 sm:text-2xl">
                        {e.title}
                      </h3>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Membership: the one yellow field on the page. */}
      <section className="bg-yellow text-ink">
        <div className="wrap grid gap-12 py-20 md:py-24 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <h2 className="h2">Membership is {site.membership.price}.</h2>
            <p className="lead mt-5 max-w-md">
              Members pay less at our events and eat for less around the city. Show your e-voucher when you pay.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={site.membership.url} target="_blank" rel="noopener noreferrer" className="btn btn-indigo">
                Become a member
                <ArrowRight size={18} aria-hidden />
              </a>
              <Link href="/partners" className="btn btn-ghost">
                Partner discounts
              </Link>
            </div>
          </div>
          <ul className="self-center">
            {partners.map((p) => (
              <li key={p.name} className="flex items-baseline justify-between gap-6 border-b border-ink/15 py-5 first:border-t">
                <span className="font-display text-[1.375rem] font-bold leading-tight md:text-[1.75rem]">{p.name}</span>
                <span className="shrink-0 font-display text-[1.375rem] font-extrabold leading-tight md:text-[1.75rem]">{p.offer}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Sponsors. */}
      <section className="py-20 md:py-28">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
            <h2 className="h2">Our sponsors.</h2>
            <Link href="/sponsors" className="link text-indigo-700">
              What they offer members
            </Link>
          </div>
          <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {sponsors.map((s) => (
              <li key={s.name}>
                <Link href="/sponsors" aria-label={`${s.name}, ${s.tier} sponsor`} className="block rounded-2xl transition-transform duration-300 ease-out hover:-translate-y-0.5">
                  <LogoTile src={s.logo} sizes="(min-width: 1024px) 25vw, 50vw" />
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="group flex aspect-[16/9] flex-col justify-between rounded-2xl bg-indigo-50 p-4 transition-colors duration-200 hover:bg-indigo-100 md:p-5"
              >
                <ArrowUpRight aria-hidden size={22} className="self-end text-indigo-700 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                <span className="font-display text-lg font-bold leading-tight md:text-xl">Sponsor MSSM</span>
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* For freshers. */}
      <section className="bg-indigo-900 text-white">
        <div className="wrap grid gap-12 py-20 md:py-28 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <div>
            <h2 className="h2">Moving to Manchester?</h2>
            <p className="lead mt-5 max-w-md text-indigo-200">
              Start with our Freshers’ Booklet. For everything it leaves out, the committee has answered the questions
              freshers ask most.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={site.freshersBooklet.url} target="_blank" rel="noopener noreferrer" className="btn btn-yellow">
                Read the Freshers’ Booklet
                <ArrowUpRight size={18} aria-hidden />
              </a>
              <Link href="/faqs" className="btn btn-ghost">
                All FAQs
              </Link>
            </div>
          </div>
          <ul className="grid grid-cols-1 self-center sm:grid-cols-2 sm:gap-x-10">
            {topics.map((t) => (
              <li key={t.slug} className="border-b border-white/12">
                <Link
                  href={`/faqs/${t.slug}`}
                  className="group flex items-center justify-between gap-4 py-3.5 font-display text-xl font-bold transition-colors duration-200 hover:text-yellow"
                >
                  {t.title}
                  <ArrowRight aria-hidden size={18} className="shrink-0 text-indigo-300 transition-[transform,color] duration-300 ease-out group-hover:translate-x-1 group-hover:text-yellow" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
