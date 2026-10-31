// Vector redraw of the SP mark (traced from a 32px source — replace with the master file when available).
export function Logo({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={(size * 300) / 350} viewBox="20 15 350 300" fill="none" aria-hidden="true">
      <path d="M284 22 L87 308" stroke="currentColor" strokeOpacity="0.35" strokeWidth="8" />
      <path d="M85 85 H228 L145 205 H85 A60 60 0 0 1 85 85 Z" fill="currentColor" fillOpacity="0.62" />
      <path d="M210 150 H288 A77.5 77.5 0 0 1 288 305 H103 Z" fill="currentColor" />
    </svg>
  );
}

export function ArrowCircle({ direction = "right" }: { direction?: "right" | "down" }) {
  return (
    <span className="arrow-circle" aria-hidden="true">
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.6">
        {direction === "right" ? <path d="M3.5 1.5 7 5l-3.5 3.5" /> : <path d="M1.5 3.5 5 7l3.5-3.5" />}
      </svg>
    </span>
  );
}
