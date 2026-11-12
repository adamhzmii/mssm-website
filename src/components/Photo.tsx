import { getMedia } from "@/lib/media";

type Props = {
  /** Path without extension, e.g. "/media/events/mkita/01". */
  src: string;
  alt: string;
  /** The `sizes` hint; defaults to full viewport width. */
  sizes?: string;
  className?: string;
  /** Load eagerly: only for the first image on a page. */
  priority?: boolean;
  /** Skip the colour placeholder: for logos and other artwork with transparency. */
  plain?: boolean;
};

/**
 * Every image on the site is pre-optimised to WebP at build time (see
 * src/data/media.json), so this renders a plain <img> with a small and a large
 * candidate rather than going through an image CDN.
 */
export function Photo({ src, alt, sizes = "100vw", className, priority, plain }: Props) {
  const m = getMedia(src);
  const large = `${src}.webp`;
  return (
    <img
      src={large}
      srcSet={m?.sm ? `${src}-sm.webp ${m.sm}w, ${large} ${m.w}w` : undefined}
      sizes={m?.sm ? sizes : undefined}
      width={m?.w}
      height={m?.h}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
      className={className}
      style={plain ? undefined : { backgroundColor: m?.c }}
    />
  );
}
