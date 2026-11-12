"use client";

import { useEffect, useState, type ReactNode } from "react";

type Props = {
  options: { value: string; count: number }[];
  total: number;
  children: ReactNode;
};

/**
 * Filters the server-rendered event list by category. Cards carry a
 * data-category attribute; the rules that hide non-matching cards (and any
 * year left empty) are in the <style> block the events page renders.
 */
export function EventFilter({ options, total, children }: Props) {
  const [filter, setFilter] = useState<string | null>(null);

  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get("category");
    // Reading the address bar is an external sync, so this runs once after mount.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (fromUrl && options.some((o) => o.value === fromUrl)) setFilter(fromUrl);
  }, [options]);

  const choose = (value: string | null) => {
    setFilter(value);
    const url = new URL(window.location.href);
    if (value) url.searchParams.set("category", value);
    else url.searchParams.delete("category");
    window.history.replaceState(null, "", url);
  };

  const chip = (active: boolean) =>
    `inline-flex min-h-11 items-center gap-2 rounded-xl px-4 font-display text-[1.0625rem] font-bold transition-[background-color,color,transform] duration-200 ease-out active:scale-[0.97] ${
      active ? "bg-indigo-800 text-white" : "bg-indigo-50 text-ink hover:bg-indigo-100"
    }`;

  return (
    <div data-filter={filter ?? "all"}>
      <div role="group" aria-label="Filter events by type" className="flex flex-wrap gap-2">
        <button type="button" aria-pressed={filter === null} onClick={() => choose(null)} className={chip(filter === null)}>
          All
          <span className={`text-sm font-semibold tabular-nums ${filter === null ? "text-indigo-200" : "text-muted"}`}>{total}</span>
        </button>
        {options.map((o) => (
          <button key={o.value} type="button" aria-pressed={filter === o.value} onClick={() => choose(o.value)} className={chip(filter === o.value)}>
            {o.value}
            <span className={`text-sm font-semibold tabular-nums ${filter === o.value ? "text-indigo-200" : "text-muted"}`}>{o.count}</span>
          </button>
        ))}
      </div>
      {children}
    </div>
  );
}
