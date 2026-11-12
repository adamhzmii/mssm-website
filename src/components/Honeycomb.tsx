import { Photo } from "./Photo";

export type Member = { name: string; role: string; photo: string | null };

/**
 * Portraits as a honeycomb: every other cell drops by half a row, so the
 * committee reads as one hive. Column counts are always even so the stagger
 * lines up.
 */
export function Honeycomb({ members, size = "lg" }: { members: Member[]; size?: "lg" | "sm" }) {
  const cols = size === "lg" ? "grid-cols-2 sm:grid-cols-4 lg:grid-cols-6" : "grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8";
  return (
    <ul className={`grid ${cols} gap-x-3 gap-y-8 pb-[18%] sm:gap-x-4 sm:pb-[9%] lg:pb-[6%] ${size === "sm" ? "xl:pb-[4.5%]" : ""}`}>
      {members.map((m) => (
        <li key={`${m.name}-${m.role}`} className="even:translate-y-[38%]">
          <div className="hex w-full bg-indigo-100">
            {m.photo ? (
              <Photo
                src={m.photo}
                alt=""
                sizes={size === "lg" ? "(min-width: 1024px) 190px, (min-width: 640px) 24vw, 46vw" : "(min-width: 1280px) 140px, (min-width: 640px) 24vw, 46vw"}
                className="size-full object-cover object-[50%_18%]"
              />
            ) : null}
          </div>
          <p className={`mt-3 text-center font-display font-bold leading-tight ${size === "lg" ? "text-lg" : "text-base"}`}>{m.name}</p>
          <p className="mt-0.5 text-center text-sm leading-snug text-muted">{m.role}</p>
        </li>
      ))}
    </ul>
  );
}
