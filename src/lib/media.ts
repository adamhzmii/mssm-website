import manifest from "@/data/media.json";

export type MediaEntry = { w: number; h: number; sm?: number; c: string };

const media = manifest as Record<string, MediaEntry>;

/** Look up a migrated image by its path without extension, e.g. "/media/events/mkita/01". */
export function getMedia(src: string): MediaEntry | undefined {
  return media[src.replace(/^\//, "")];
}
