/** The society's own hexagon mark with the wordmark set in the site's display face. */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <img src="/brand/mssm-mark.png" alt="" width={46} height={48} className="h-10 w-auto" />
      <span className="font-display text-[1.625rem] font-extrabold leading-none tracking-[-0.02em]">MSSM</span>
    </span>
  );
}
