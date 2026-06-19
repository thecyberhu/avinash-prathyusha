import { useMemo } from "react";

function seededValue(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export function Petals({ count = 18 }: { count?: number }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: seededValue(i + 1) * 100,
        delay: seededValue(i + 21) * 20,
        duration: 18 + seededValue(i + 41) * 22,
        size: 10 + seededValue(i + 61) * 18,
        hue: seededValue(i + 81) > 0.5 ? "var(--blush)" : "var(--gold)",
        rotate: seededValue(i + 101) * 360,
      })),
    [count],
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
      {petals.map((p) => (
        <span
          key={p.id}
          className="animate-petal absolute block"
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            width: p.size,
            height: p.size,
            transform: `rotate(${p.rotate}deg)`,
          }}
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-full w-full opacity-70">
            <path
              d="M12 2 C 16 8, 16 16, 12 22 C 8 16, 8 8, 12 2 Z"
              fill={p.hue as string}
              opacity="0.85"
            />
          </svg>
        </span>
      ))}
    </div>
  );
}
