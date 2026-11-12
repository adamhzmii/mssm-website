import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { cache } from "react";

const ROOT = path.join(process.cwd(), "content");

export const categories = ["Festivals", "Freshers", "Sports", "MNight", "Careers", "Socials", "Meetings"] as const;
export type Category = (typeof categories)[number];

export type EventPost = {
  slug: string;
  title: string;
  /** ISO date of the event, when the write-up states one. */
  date: string | null;
  /** Shown in place of an exact date when the write-up only gives a year or season. */
  dateLabel: string | null;
  /** Used for ordering only. */
  sortDate: string;
  /** Academic year, e.g. "2025/26". */
  season: string;
  category: Category;
  cover: string | null;
  gallery: string[];
  videos: string[];
  body: string;
  excerpt: string;
};

const iso = (v: unknown): string | null => {
  if (!v) return null;
  if (v instanceof Date) return v.toISOString().slice(0, 10);
  return String(v).slice(0, 10);
};

function excerptOf(body: string, max = 190): string {
  const text = body
    .split(/\n{2,}/)
    .filter((p) => !p.startsWith("#") && !p.startsWith(">"))
    .join(" ")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*_`]/g, "")
    // Emoji read as noise in a one-line summary; they stay in the full write-up.
    .replace(/[\p{Extended_Pictographic}\p{Regional_Indicator}\u{FE0F}\u{200D}]/gu, "")
    .replace(/\s+/g, " ")
    .trim();
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:.!?–—-]+$/, "") + "…";
}

export const getEvents = cache((): EventPost[] => {
  const dir = path.join(ROOT, "events");
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const { data, content } = matter(fs.readFileSync(path.join(dir, f), "utf8"));
      const body = content.trim();
      return {
        slug: f.replace(/\.md$/, ""),
        title: data.title,
        date: iso(data.date),
        dateLabel: data.dateLabel ?? null,
        sortDate: iso(data.sortDate) ?? iso(data.date) ?? "1970-01-01",
        season: data.season,
        category: data.category,
        cover: data.cover ?? null,
        gallery: data.gallery ?? [],
        videos: data.videos ?? [],
        body,
        excerpt: excerptOf(body),
      } satisfies EventPost;
    })
    .sort((a, b) => (a.sortDate < b.sortDate ? 1 : a.sortDate > b.sortDate ? -1 : a.title.localeCompare(b.title)));
});

export function getEvent(slug: string): EventPost | undefined {
  return getEvents().find((e) => e.slug === slug);
}

const dateFmt = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
const shortFmt = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });

export function eventDate(e: Pick<EventPost, "date" | "dateLabel">, style: "long" | "short" = "long"): string {
  if (e.date) return (style === "long" ? dateFmt : shortFmt).format(new Date(`${e.date}T00:00:00Z`));
  return e.dateLabel ?? "";
}

export type FaqTopic = {
  slug: string;
  title: string;
  order: number;
  questions: { id: string; question: string; answer: string }[];
};

export const getFaqTopics = cache((): FaqTopic[] => {
  const dir = path.join(ROOT, "faqs");
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const { data, content } = matter(fs.readFileSync(path.join(dir, f), "utf8"));
      const questions = content
        .split(/^## /m)
        .slice(1)
        .map((chunk, i) => {
          const [question, ...rest] = chunk.split("\n");
          return { id: `q${i + 1}`, question: question.trim(), answer: rest.join("\n").trim() };
        });
      return { slug: f.replace(/\.md$/, ""), title: data.title, order: data.order ?? 99, questions } satisfies FaqTopic;
    })
    .sort((a, b) => a.order - b.order);
});
