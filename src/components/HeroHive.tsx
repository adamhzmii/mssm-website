import { HexRing } from "./Hex";
import { Photo } from "./Photo";

const cells = [
  { tone: "red", pos: "left-0 top-1/4", src: "/media/events/mkita/02", alt: "Freshers grinning for a group selfie at MKita on campus", delay: 0.1 },
  { tone: "indigo", pos: "left-[42.86%] top-0", src: "/media/events/cny-dinner-2026/05", alt: "Members sharing dishes around a table at the Chinese New Year dinner", delay: 0.25 },
  { tone: "yellow", pos: "left-[42.86%] top-1/2", src: "/media/events/lepak-raya/04", alt: "Members in traditional dress sharing food on picnic mats at Lepak Raya", delay: 0.4 },
] as const;

/**
 * The MSSM logo, opened up: its three linked hexagons, each holding a
 * photograph from this year's events.
 */
export function HeroHive() {
  return (
    <div className="relative aspect-[3.5/3.464] w-full">
      {cells.map((c) => (
        <div key={c.src} className={`absolute w-[57.14%] ${c.pos}`}>
          <div className="relative aspect-[2/1.7320508]">
            <HexRing tone={c.tone} className="absolute inset-[2.5%] size-[95%]" strokeWidth={4.5} drawDelay={c.delay} />
            <div className="hex absolute inset-[9.5%] animate-pop" style={{ animationDelay: `${c.delay + 0.25}s` }}>
              <Photo src={c.src} alt={c.alt} sizes="(min-width: 1024px) 26vw, 52vw" priority className="size-full object-cover" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
