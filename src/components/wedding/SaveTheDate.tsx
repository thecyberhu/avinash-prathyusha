import { useEffect, useState } from "react";
import { motion } from "motion/react";

const TARGET = new Date("2026-07-03T01:45:00+05:30").getTime();

function useCountdown() {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, TARGET - now);
  return {
    d: Math.floor(diff / 86400000),
    h: Math.floor((diff / 3600000) % 24),
    m: Math.floor((diff / 60000) % 60),
    s: Math.floor((diff / 1000) % 60),
  };
}

const WINE = "#5a1228";
const WINE_DEEP = "#3a0a18";
const GOLD = "#c9a35a";
const GOLD_BRIGHT = "#e8b450";
const CREAM = "#f8ecd6";

export function SaveTheDate() {
  const { d, h, m, s } = useCountdown();
  const cells = [
    { label: "Days", value: d },
    { label: "Hours", value: h },
    { label: "Minutes", value: m },
    { label: "Seconds", value: s },
  ];

  return (
    <section className="relative px-4 py-20 sm:px-6 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
        className="relative mx-auto w-full max-w-5xl overflow-hidden shadow-royal"
        style={{
          background: `radial-gradient(ellipse at top, ${WINE} 0%, ${WINE_DEEP} 100%)`,
          border: `1px solid ${GOLD}`,
          boxShadow: `0 0 0 6px ${WINE_DEEP}, 0 0 0 7px ${GOLD}, 0 30px 80px -20px rgba(90,18,40,0.6)`,
        }}
      >
        <OrnamentalBand position="top" />
        <OrnamentalBand position="bottom" />
        <SideArch side="left" />
        <SideArch side="right" />

        <div className="relative mx-auto my-16 max-w-md px-6 sm:my-24">
          <ArchFrame>
            <div className="px-6 py-10 text-center sm:px-10 sm:py-14">
              <LotusOrnament />

              <p className="mt-4 font-display text-[0.6rem] uppercase tracking-[0.55em] sm:text-xs" style={{ color: "#a8842e" }}>
                Save the Date
              </p>
              <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-5xl" style={{ color: WINE }}>
                Friday, 03 July<span style={{ color: GOLD }}>,</span> 2026
              </h2>
              <p className="mt-2 font-serif italic sm:text-xl" style={{ color: "#c97b83" }}>
                Muhurtham · 🕐 1:45 AM Onwards
              </p>

              <div className="my-5 flex items-center justify-center gap-2">
                <span className="block h-px w-12 sm:w-20" style={{ background: `linear-gradient(to right, transparent, ${GOLD})` }} />
                <span style={{ color: GOLD }}>◆</span>
                <span className="block h-px w-12 sm:w-20" style={{ background: `linear-gradient(to left, transparent, ${GOLD})` }} />
              </div>

              <div className="grid grid-cols-4 gap-1.5 sm:gap-3">
                {cells.map((c) => (
                  <div
                    key={c.label}
                    className="rounded-sm border px-1 py-2 sm:py-3"
                    style={{
                      background: "rgba(255, 248, 235, 0.7)",
                      borderColor: GOLD,
                      boxShadow: `inset 0 0 0 2px ${CREAM}, 0 0 10px rgba(201,163,90,0.3)`,
                    }}
                  >
                    <div className="font-serif text-lg font-semibold sm:text-3xl" style={{ color: WINE }}>
                      {String(c.value).padStart(2, "0")}
                    </div>
                    <div className="font-display text-[0.45rem] uppercase tracking-[0.2em] sm:text-[0.6rem]" style={{ color: "#a8842e" }}>
                      {c.label}
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-6 font-serif text-xs italic leading-relaxed sm:mt-8 sm:text-sm" style={{ color: WINE }}>
                📍 P.A.G Convention Center
                <br />
                Guntur Road, Near TDP Party Office,
                <br />
                Venkateswara Nagar, Ongole, AP – 523001
              </p>
            </div>
          </ArchFrame>
        </div>
      </motion.div>
    </section>
  );
}

function OrnamentalBand({ position }: { position: "top" | "bottom" }) {
  return (
    <div className="absolute left-0 right-0 h-10 sm:h-14" style={{ [position]: 0 } as React.CSSProperties}>
      <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="h-full w-full"
        style={{ transform: position === "bottom" ? "scaleY(-1)" : undefined }}>
        <defs>
          <pattern id={`scallop-${position}`} x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M0 0 Q30 50 60 0" fill={GOLD} stroke={GOLD_BRIGHT} strokeWidth="1" />
            <circle cx="30" cy="20" r="3" fill={WINE_DEEP} />
            <circle cx="15" cy="8" r="1.5" fill={WINE_DEEP} />
            <circle cx="45" cy="8" r="1.5" fill={WINE_DEEP} />
          </pattern>
        </defs>
        <rect width="1200" height="60" fill={`url(#scallop-${position})`} />
        <g fill={GOLD}>
          {Array.from({ length: 20 }).map((_, i) => (
            <circle key={i} cx={i * 60 + 30} cy={55} r="1.5" />
          ))}
        </g>
      </svg>
    </div>
  );
}

function SideArch({ side }: { side: "left" | "right" }) {
  return (
    <div className="pointer-events-none absolute top-16 bottom-16 hidden w-32 sm:block lg:w-44"
      style={{ [side]: 16 } as React.CSSProperties}>
      <svg viewBox="0 0 180 500" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
        <path d="M20 480 L20 180 Q20 40 90 40 Q160 40 160 180 L160 480 Z"
          fill={CREAM} fillOpacity="0.08" stroke={GOLD} strokeWidth="2" />
        <path d="M30 470 L30 185 Q30 55 90 55 Q150 55 150 185 L150 470 Z"
          fill="none" stroke={GOLD_BRIGHT} strokeWidth="0.8" opacity="0.7" />
        <g stroke={GOLD} strokeWidth="1" fill={GOLD}>
          <line x1="90" y1="60" x2="90" y2="140" />
          <circle cx="90" cy="150" r="14" fillOpacity="0.3" stroke={GOLD_BRIGHT} />
          <circle cx="90" cy="150" r="6" />
          <circle cx="90" cy="170" r="2" />
          <circle cx="90" cy="180" r="2.5" />
        </g>
        <g fill={GOLD} opacity="0.35">
          {Array.from({ length: 6 }).map((_, r) =>
            Array.from({ length: 4 }).map((_, c) => (
              <circle key={`${r}-${c}`} cx={45 + c * 30} cy={220 + r * 40} r="2" />
            ))
          )}
        </g>
        <g transform="translate(20, 370)" fill={GOLD} stroke={GOLD_BRIGHT} strokeWidth="1.2">
          {/* Royal elephant silhouette */}
          <path d="M20 95 Q20 55 50 50 Q75 46 100 52 Q120 56 128 68 Q132 60 138 58 Q146 56 150 62 Q154 70 148 78 Q142 84 134 82 L134 92 Q134 100 126 100 L118 100 L118 92 L60 92 L60 100 L52 100 Q44 100 44 92 L44 86 Q32 88 24 94 Q18 98 20 95 Z" />
          {/* Decorative blanket */}
          <path d="M52 58 L120 58 Q124 58 122 62 L116 76 Q114 80 110 80 L62 80 Q58 80 56 76 L50 62 Q48 58 52 58 Z" fill={WINE} stroke={GOLD_BRIGHT} strokeWidth="1.2" />
          <circle cx="86" cy="69" r="3.5" fill={GOLD_BRIGHT} stroke="none" />
          <circle cx="72" cy="69" r="1.5" fill={GOLD_BRIGHT} stroke="none" />
          <circle cx="100" cy="69" r="1.5" fill={GOLD_BRIGHT} stroke="none" />
          {/* Tassels */}
          <line x1="58" y1="80" x2="58" y2="86" stroke={GOLD_BRIGHT} strokeWidth="0.8" />
          <line x1="70" y1="80" x2="70" y2="87" stroke={GOLD_BRIGHT} strokeWidth="0.8" />
          <line x1="82" y1="80" x2="82" y2="87" stroke={GOLD_BRIGHT} strokeWidth="0.8" />
          <line x1="94" y1="80" x2="94" y2="87" stroke={GOLD_BRIGHT} strokeWidth="0.8" />
          <line x1="106" y1="80" x2="106" y2="87" stroke={GOLD_BRIGHT} strokeWidth="0.8" />
          {/* Eye */}
          <circle cx="140" cy="68" r="1.2" fill={WINE_DEEP} stroke="none" />
          {/* Crown */}
          <path d="M130 50 L135 42 L140 50 L145 42 L150 50 Z" fill={GOLD_BRIGHT} stroke={GOLD} />
          <circle cx="140" cy="44" r="1.5" fill={WINE} stroke="none" />
        </g>
      </svg>
    </div>
  );
}

function ArchFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <svg viewBox="0 0 400 600" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="archFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fbf3e2" />
            <stop offset="100%" stopColor="#f0e2c4" />
          </linearGradient>
        </defs>
        <path d="M10 590 L10 180 Q10 20 200 10 Q390 20 390 180 L390 590 Z"
          fill="url(#archFill)" stroke={GOLD} strokeWidth="3" />
        <path d="M22 580 L22 185 Q22 32 200 24 Q378 32 378 185 L378 580 Z"
          fill="none" stroke={GOLD_BRIGHT} strokeWidth="1" opacity="0.8" />
      </svg>
      <div className="relative">{children}</div>
    </div>
  );
}

function LotusOrnament() {
  return (
    <svg viewBox="0 0 80 40" className="mx-auto h-8 w-20">
      <g fill={GOLD} stroke={GOLD_BRIGHT} strokeWidth="0.5">
        <path d="M40 5 Q35 15 30 18 Q40 20 50 18 Q45 15 40 5 Z" />
        <path d="M40 8 Q42 18 40 22 Q38 18 40 8 Z" fill={GOLD_BRIGHT} />
        <path d="M10 22 L30 22 M50 22 L70 22" stroke={GOLD} strokeWidth="0.8" fill="none" />
        <circle cx="8" cy="22" r="1.5" />
        <circle cx="72" cy="22" r="1.5" />
        <path d="M28 28 Q40 32 52 28" fill="none" stroke={GOLD} />
      </g>
    </svg>
  );
}
