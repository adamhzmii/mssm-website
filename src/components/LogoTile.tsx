import { Photo } from "./Photo";

/** A sponsor, partner or affiliate logo, shown whole on a white tile. */
export function LogoTile({ src, alt = "", sizes, ratio = "aspect-[16/9]", pad = "" }: { src: string; alt?: string; sizes: string; ratio?: string; pad?: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-indigo-100 bg-white ${ratio}`}>
      <Photo src={src} alt={alt} sizes={sizes} plain className={`size-full object-contain ${pad}`} />
    </div>
  );
}
