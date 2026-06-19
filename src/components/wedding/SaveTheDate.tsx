import { useEffect, useState } from "react";
import { motion } from "motion/react";

const TARGET = new Date("2026-07-03T01:45:00+05:30").getTime();

function useCountdown() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const update = () => setNow(Date.now());
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  if (now === null) {
    return null;
  }

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
  const countdown = useCountdown();
  const cells = [
    { label: "Days", value: countdown?.d },
    { label: "Hours", value: countdown?.h },
    { label: "Minutes", value: countdown?.m },
    { label: "Seconds", value: countdown?.s },
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
                Muhurtham · 🕐 Night at 1:47 hrs. Uttarashada Nakshatrayukta Dhanusu Lagnam
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
                      {c.value == null ? "--" : String(c.value).padStart(2, "0")}
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
        <defs>
          <linearGradient id={`pillar-${side}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={GOLD_BRIGHT} stopOpacity="0.22" />
            <stop offset="50%" stopColor={GOLD} stopOpacity="0.1" />
            <stop offset="100%" stopColor={GOLD_BRIGHT} stopOpacity="0.22" />
          </linearGradient>
          <radialGradient id={`feather-${side}`} cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor={GOLD_BRIGHT} />
            <stop offset="55%" stopColor={GOLD} />
            <stop offset="100%" stopColor={WINE} />
          </radialGradient>
        </defs>

        {/* Outer ogee arch pillar */}
        <path d="M20 480 L20 180 Q20 40 90 40 Q160 40 160 180 L160 480 Z"
          fill={`url(#pillar-${side})`} stroke={GOLD} strokeWidth="2" />
        <path d="M30 470 L30 185 Q30 55 90 55 Q150 55 150 185 L150 470 Z"
          fill="none" stroke={GOLD_BRIGHT} strokeWidth="0.8" opacity="0.7" />
        <path d="M90 40 L82 28 L90 32 L98 28 Z" fill={GOLD_BRIGHT} />

        {/* Glowing diya hanging from arch */}
        <line x1="90" y1="60" x2="90" y2="108" stroke={GOLD} strokeWidth="1" />
        <ellipse cx="90" cy="120" rx="14" ry="10" fill={GOLD} stroke={GOLD_BRIGHT} strokeWidth="1" />
        <ellipse cx="90" cy="118" rx="10" ry="6" fill={WINE_DEEP} />
        <path d="M88 112 Q90 102 92 112 Q91 116 90 116 Q89 116 88 112 Z" fill={GOLD_BRIGHT}>
          <animate attributeName="opacity" values="1;0.55;1" dur="1.6s" repeatCount="indefinite" />
        </path>
        <circle cx="90" cy="108" r="9" fill={GOLD_BRIGHT} opacity="0.18">
          <animate attributeName="r" values="6;13;6" dur="2.4s" repeatCount="indefinite" />
        </circle>

        {/* Floral mandala */}
        <g transform="translate(90, 215)">
          {Array.from({ length: 8 }).map((_, i) => (
            <ellipse key={i} cx="0" cy="-16" rx="4.5" ry="13"
              fill={GOLD} fillOpacity="0.45" stroke={GOLD_BRIGHT} strokeWidth="0.5"
              transform={`rotate(${i * 45})`} />
          ))}
          {Array.from({ length: 8 }).map((_, i) => (
            <circle key={i} cx="0" cy="-22" r="1.5" fill={GOLD_BRIGHT}
              transform={`rotate(${i * 45 + 22.5})`} />
          ))}
          <circle r="6" fill={GOLD_BRIGHT} />
          <circle r="2.5" fill={WINE} />
        </g>

        {/* Paisley */}
        <g transform="translate(90, 285)" stroke={GOLD} strokeWidth="1">
          <path d="M0 -4 Q-20 8 -16 32 Q-8 46 0 38 Q8 46 16 32 Q20 8 0 -4 Z"
            fill={GOLD} fillOpacity="0.22" />
          <circle cx="0" cy="18" r="3" fill={GOLD_BRIGHT} />
          <circle cx="-7" cy="28" r="1.4" fill={GOLD_BRIGHT} />
          <circle cx="7" cy="28" r="1.4" fill={GOLD_BRIGHT} />
        </g>

        {/* Peacock at base */}
        <g transform="translate(90, 420)">
          {Array.from({ length: 9 }).map((_, i) => {
            const a = -80 + i * 20;
            const rad = (a * Math.PI) / 180;
            const x = Math.sin(rad) * 40;
            const y = -Math.cos(rad) * 40;
            return (
              <g key={i}>
                <line x1="0" y1="0" x2={x} y2={y} stroke={GOLD} strokeWidth="0.7" opacity="0.7" />
                <ellipse cx={x} cy={y} rx="5" ry="8" fill={`url(#feather-${side})`}
                  transform={`rotate(${a} ${x} ${y})`} />
                <circle cx={x} cy={y} r="2" fill={WINE_DEEP} />
                <circle cx={x} cy={y} r="0.7" fill={GOLD_BRIGHT} />
              </g>
            );
          })}
          <ellipse cx="0" cy="6" rx="9" ry="12" fill={WINE} stroke={GOLD_BRIGHT} strokeWidth="1" />
          <path d="M0 -2 Q-2 -14 -8 -18" fill="none" stroke={WINE} strokeWidth="4" strokeLinecap="round" />
          <circle cx="-9" cy="-19" r="4" fill={WINE} stroke={GOLD_BRIGHT} strokeWidth="0.8" />
          <line x1="-9" y1="-23" x2="-10" y2="-28" stroke={GOLD} strokeWidth="0.8" />
          <line x1="-11" y1="-23" x2="-13" y2="-27" stroke={GOLD} strokeWidth="0.8" />
          <line x1="-7" y1="-23" x2="-6" y2="-28" stroke={GOLD} strokeWidth="0.8" />
          <circle cx="-10" cy="-28" r="1.2" fill={GOLD_BRIGHT} />
          <circle cx="-13" cy="-27" r="1" fill={GOLD_BRIGHT} />
          <circle cx="-6" cy="-28" r="1" fill={GOLD_BRIGHT} />
          <path d="M-13 -19 L-16 -18 L-13 -17 Z" fill={GOLD_BRIGHT} />
          <circle cx="-10" cy="-19" r="0.8" fill={GOLD_BRIGHT} />
        </g>

        {/* Background dots */}
        <g fill={GOLD} opacity="0.22">
          {Array.from({ length: 3 }).map((_, r) =>
            Array.from({ length: 3 }).map((_, c) => (
              <circle key={`${r}-${c}`} cx={60 + c * 30} cy={155 + r * 18} r="1.1" />
            ))
          )}
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
