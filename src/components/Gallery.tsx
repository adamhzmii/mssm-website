"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export type GalleryImage = { src: string; srcSet?: string; w: number; h: number; color: string };

/** A photo grid that opens each picture full-size, with arrow-key navigation. */
export function Gallery({ images, label }: { images: GalleryImage[]; label: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState<number | null>(null);

  const step = useCallback(
    (by: number) => setIndex((i) => (i === null ? i : (i + by + images.length) % images.length)),
    [images.length],
  );

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (index !== null && !d.open) d.showModal();
    if (index === null && d.open) d.close();
  }, [index]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, step]);

  const current = index === null ? null : images[index];
  const n = images.length;
  // Two or four photos sit best in two columns.
  const few = n === 2 || n === 4;
  const control =
    "grid size-12 place-items-center rounded-xl bg-white/10 text-white transition-[background-color,transform] duration-200 ease-out hover:bg-white/20 active:scale-[0.96]";

  return (
    <>
      <ul className={`grid grid-cols-2 gap-2.5 sm:gap-4 ${few ? "" : "lg:grid-cols-3"}`}>
        {images.map((img, i) => {
          // Widen the first photo just enough that the last row is never left with a gap.
          const first = i === 0;
          const span = !first ? "" : `${n % 2 === 1 ? "col-span-2" : "col-span-1"} ${few ? "" : n % 3 === 1 ? "lg:col-span-3" : n % 3 === 2 ? "lg:col-span-2" : "lg:col-span-1"}`;
          const shape = !first
            ? "aspect-[4/3]"
            : `${n % 2 === 1 ? "aspect-[16/9]" : "aspect-[4/3]"} ${few ? "" : n % 3 === 1 ? "lg:aspect-[21/9]" : n % 3 === 2 ? "lg:aspect-auto lg:h-full" : "lg:aspect-[4/3]"}`;
          return (
            <li key={img.src} className={span}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Open photo ${i + 1} of ${n} from ${label}`}
                className="zoom zoom-self block size-full cursor-zoom-in overflow-hidden rounded-2xl"
                style={{ backgroundColor: img.color }}
              >
                <img
                  src={img.src}
                  srcSet={img.srcSet}
                  sizes={first ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, 50vw"}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className={`w-full object-cover ${shape}`}
                />
              </button>
            </li>
          );
        })}
      </ul>

      <dialog
        ref={dialog}
        aria-label={`Photos from ${label}`}
        onClose={() => setIndex(null)}
        onClick={(e) => e.target === e.currentTarget && setIndex(null)}
        className="m-0 h-dvh max-h-none w-screen max-w-none bg-indigo-950/95 p-0 backdrop:bg-indigo-950/80 open:grid open:animate-fade open:[animation-duration:0.2s]"
      >
        {current && index !== null ? (
          <div className="grid size-full grid-rows-[auto_1fr_auto] p-3 sm:p-5">
            <div className="flex items-center justify-between text-white">
              <p className="meta tabular-nums text-indigo-200">
                {index + 1} / {images.length}
              </p>
              <button type="button" onClick={() => setIndex(null)} aria-label="Close photos" className={control}>
                <X aria-hidden size={22} />
              </button>
            </div>
            <div className="relative min-h-0" onClick={(e) => e.target === e.currentTarget && setIndex(null)}>
              <img
                key={current.src}
                src={current.src}
                width={current.w}
                height={current.h}
                alt={`Photo ${index + 1} from ${label}`}
                className="absolute inset-0 m-auto max-h-full max-w-full animate-fade rounded-xl object-contain [animation-duration:0.25s]"
              />
            </div>
            {images.length > 1 ? (
              <div className="flex justify-center gap-3 pt-3">
                <button type="button" onClick={() => step(-1)} aria-label="Previous photo" className={control}>
                  <ChevronLeft aria-hidden size={24} />
                </button>
                <button type="button" onClick={() => step(1)} aria-label="Next photo" className={control}>
                  <ChevronRight aria-hidden size={24} />
                </button>
              </div>
            ) : null}
          </div>
        ) : null}
      </dialog>
    </>
  );
}
