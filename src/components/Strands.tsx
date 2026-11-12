"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export type Strand = {
  title: string;
  text: string;
  href: string;
  image: { src: string; srcSet?: string; alt: string; color: string };
};

/**
 * What the society does, as an index: pointing at a line swaps the photograph
 * beside it. On small screens each line simply carries its own photograph.
 */
export function Strands({ items }: { items: Strand[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_minmax(0,0.82fr)] lg:gap-16">
      <ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:block">
        {items.map((s, i) => (
          <li key={s.title} className="lg:border-b lg:border-indigo-100 lg:first:border-t">
            <Link
              href={s.href}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className="group block rounded-2xl lg:grid lg:grid-cols-[minmax(0,13rem)_1fr_auto] lg:items-baseline lg:gap-6 lg:rounded-none lg:py-6"
            >
              <div className="zoom mb-4 aspect-[4/3] overflow-hidden rounded-2xl lg:hidden" style={{ backgroundColor: s.image.color }}>
                <img src={s.image.src} srcSet={s.image.srcSet} sizes="(min-width: 640px) 50vw, 100vw" alt={s.image.alt} loading="lazy" decoding="async" className="size-full object-cover" />
              </div>
              <h3
                className={`font-display text-[1.75rem] font-extrabold leading-none tracking-[-0.02em] transition-colors duration-200 lg:text-[2.5rem] ${
                  active === i ? "lg:text-ink" : "lg:text-indigo-400"
                }`}
              >
                {s.title}
              </h3>
              <p className="mt-2 text-muted lg:mt-0">{s.text}</p>
              <ArrowUpRight
                aria-hidden
                size={24}
                className={`hidden self-center transition-[opacity,transform] duration-300 ease-out lg:block ${
                  active === i ? "translate-x-0 text-red opacity-100" : "-translate-x-2 opacity-0"
                }`}
              />
            </Link>
          </li>
        ))}
      </ul>

      <div className="relative hidden lg:block">
        <div className="sticky top-28 aspect-[4/5] overflow-hidden rounded-3xl bg-indigo-100">
          {items.map((s, i) => (
            <img
              key={s.title}
              src={s.image.src}
              alt={active === i ? s.image.alt : ""}
              aria-hidden={active === i ? undefined : true}
              loading="lazy"
              decoding="async"
              className={`absolute inset-0 size-full object-cover transition-[opacity,transform] duration-500 ease-out ${
                active === i ? "scale-100 opacity-100" : "scale-[1.04] opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
