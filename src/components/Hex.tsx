/**
 * The hexagon is MSSM's mark: Manchester's honeycomb in Malaysia's colours.
 * Geometry lives here so the hero cluster, portraits and markers all share it.
 */

const V: [number, number][] = [
  [0.25, 0], [0.75, 0], [1, 0.5], [0.75, 1], [0.25, 1], [0, 0.5],
];

/** A flat-topped hexagon path in a 0–1 box with softened corners. */
export function hexPath(radius = 0.06, scaleX = 1, scaleY = 1): string {
  const pts = V.map(([x, y]) => [x * scaleX, y * scaleY]);
  let d = "";
  pts.forEach((p, i) => {
    const prev = pts[(i + pts.length - 1) % pts.length];
    const next = pts[(i + 1) % pts.length];
    const toward = (a: number[], b: number[]) => {
      const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
      const t = (radius * Math.max(scaleX, scaleY)) / len;
      return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
    };
    const a = toward(p, prev);
    const b = toward(p, next);
    d += `${i === 0 ? "M" : "L"}${a[0].toFixed(4)} ${a[1].toFixed(4)} Q${p[0].toFixed(4)} ${p[1].toFixed(4)} ${b[0].toFixed(4)} ${b[1].toFixed(4)} `;
  });
  return d + "Z";
}

/** Mounted once in the layout: the shared clip path and the three logo gradients. */
export function HexDefs() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true" focusable="false">
      <defs>
        <clipPath id="hex-clip" clipPathUnits="objectBoundingBox">
          <path d={hexPath(0.07)} />
        </clipPath>
        <linearGradient id="hex-red" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#cf2129" />
          <stop offset="1" stopColor="#e2782a" />
        </linearGradient>
        <linearGradient id="hex-indigo" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4a43a8" />
          <stop offset="1" stopColor="#a8327a" />
        </linearGradient>
        <linearGradient id="hex-yellow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#e2782a" />
          <stop offset="1" stopColor="#fecc08" />
        </linearGradient>
      </defs>
    </svg>
  );
}

type RingProps = {
  tone: "red" | "indigo" | "yellow";
  className?: string;
  strokeWidth?: number;
  /** Seconds to wait before the outline draws itself in. Omit for a static ring. */
  drawDelay?: number;
};

/** A hexagon outline in one of the logo's three gradients. */
export function HexRing({ tone, className, strokeWidth = 5, drawDelay }: RingProps) {
  const W = 200;
  const H = 173.205;
  return (
    <svg viewBox={`${-strokeWidth} ${-strokeWidth} ${W + strokeWidth * 2} ${H + strokeWidth * 2}`} className={className} aria-hidden="true" focusable="false" fill="none">
      <path
        d={hexPath(0.07, W, H)}
        stroke={`url(#hex-${tone})`}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        pathLength={1}
        strokeDasharray={drawDelay === undefined ? undefined : 1}
        className={drawDelay === undefined ? undefined : "animate-draw"}
        style={drawDelay === undefined ? undefined : { animationDelay: `${drawDelay}s` }}
      />
    </svg>
  );
}
