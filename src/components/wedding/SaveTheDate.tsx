import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Divider } from "./Divider";

const TARGET = new Date("2026-08-25T06:45:00+05:30").getTime();

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
        {/* Top ornamental jharokha pattern */}
        <OrnamentalBand position="top" />
        <OrnamentalBand position="bottom" />

        {/* Side elephants / arch silhouettes */}
        <SideArch side="left" />
        <SideArch side="right" />

        {/* Center arch panel */}
        <div className="relative mx-auto my-16 max-w-md px-6 sm:my-24">
          <ArchFrame>
            <div className="px-6 py-10 text-center sm:px-10 sm:py-14">
              {/* Lotus crown ornament */}
              <LotusOrnament />

              <p
                className="mt-4 font-display text-[0.6rem] uppercase tracking-[0.55em] sm:text-xs"
                style={{ color: "#a8842e" }}
              >
                Save the Date
              </p>
              <h2
                className="mt-3 font-serif text-3xl leading-tight sm:text-5xl"
                style={{ color: WINE }}
              >
                August 25<span style={{ color: GOLD }}>,</span> 2026
              </h2>
              <p
                className="mt-2 font-serif italic sm:text-xl"
                style={{ color: "#c97b83" }}
              >
                Muhurtham · 6:45 AM
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
                    <div
                      className="font-serif text-lg font-semibold sm:text-3xl"
                      style={{ color: WINE }}
                    >
                      {String(c.value).padStart(2, "0")}
                    </div>
                    <div
                      className="font-display text-[0.45rem] uppercase tracking-[0.2em] sm:text-[0.6rem]"
                      style={{ color: "#a8842e" }}
                    >
                      {c.label}
                    </div>
                  </div>
                ))}
              </div>

              <p
                className="mt-6 font-serif text-xs italic sm:mt-8 sm:text-sm"
                style={{ color: WINE }}
              >
                Sri Venkateswara Kalyana Mandapam
                <br />
                Tirupati, Andhra Pradesh
              </p>
            </div>
          </ArchFrame>
        </div>
      </motion.div>
    </section>
  );
}

/* --- Decorative pieces (pure SVG/CSS, no images) --- */

function OrnamentalBand({ position }: { position: "top" | "bottom" }) {
  return (
    <div
      className="absolute left-0 right-0 h-10 sm:h-14"
      style={{ [position]: 0 } as React.CSSProperties}
    >
      <svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className="h-full w-full"
        style={{ transform: position === "bottom" ? "scaleY(-1)" : undefined }}
      >
        <defs>
          <pattern id={`scallop-${position}`} x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path
              d="M0 0 Q30 50 60 0"
              fill={GOLD}
              stroke={GOLD_BRIGHT}
              strokeWidth="1"
            />
            <circle cx="30" cy="20" r="3" fill={WINE_DEEP} />
            <circle cx="15" cy="8" r="1.5" fill={WINE_DEEP} />
            <circle cx="45" cy="8" r="1.5" fill={WINE_DEEP} />
          </pattern>
        </defs>
        <rect width="1200" height="60" fill={`url(#scallop-${position})`} />
        {/* hanging beads */}
        <g fill={GOLD}>
          {Array.from({ length: 20 }).map((_, i) => (
            <circle key={i} cx={i * 60 + 30} cy={position === "top" ? 55 : 55} r="1.5" />
          ))}
        </g>
      </svg>
    </div>
  );
}

function SideArch({ side }: { side: "left" | "right" }) {
  return (
    <div
      className="pointer-events-none absolute top-16 bottom-16 hidden w-32 sm:block lg:w-44"
      style={{ [side]: 16 } as React.CSSProperties}
    >
      <svg viewBox="0 0 180 500" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
        {/* Arch outline */}
        <path
          d="M20 480 L20 180 Q20 40 90 40 Q160 40 160 180 L160 480 Z"
          fill={CREAM}
          fillOpacity="0.08"
          stroke={GOLD}
          strokeWidth="2"
        />
        <path
          d="M30 470 L30 185 Q30 55 90 55 Q150 55 150 185 L150 470 Z"
          fill="none"
          stroke={GOLD_BRIGHT}
          strokeWidth="0.8"
          opacity="0.7"
        />
        {/* Hanging ornament */}
        <g stroke={GOLD} strokeWidth="1" fill={GOLD}>
          <line x1="90" y1="60" x2="90" y2="140" />
          <circle cx="90" cy="150" r="14" fillOpacity="0.3" stroke={GOLD_BRIGHT} />
          <circle cx="90" cy="150" r="6" />
          <circle cx="90" cy="170" r="2" />
          <circle cx="90" cy="180" r="2.5" />
        </g>
        {/* Diamond pattern */}
        <g fill={GOLD} opacity="0.35">
          {Array.from({ length: 6 }).map((_, r) =>
            Array.from({ length: 4 }).map((_, c) => (
              <circle key={`${r}-${c}`} cx={45 + c * 30} cy={220 + r * 40} r="2" />
            ))
          )}
        </g>
        {/* Elephant silhouette at bottom */}
        <g transform="translate(30, 380)" fill={WINE_DEEP} stroke={GOLD} strokeWidth="1">
          <path d="M10 80 Q10 40 40 35 Q70 30 95 40 Q115 45 118 55 Q125 50 125 35 Q130 25 135 35 Q138 50 130 60 Q125 65 120 65 L120 85 Q120 95 110 95 L100 95 L100 85 L60 85 L60 95 L50 95 Q40 95 40 85 L40 75 Q25 75 18 85 Q10 90 10 80 Z" />
          {/* blanket */}
          <path d="M50 50 L100 50 L95 70 L55 70 Z" fill={WINE} stroke={GOLD_BRIGHT} />
          <circle cx="75" cy="60" r="3" fill={GOLD} stroke="none" />
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
        <path
          d="M10 590 L10 180 Q10 20 200 10 Q390 20 390 180 L390 590 Z"
          fill="url(#archFill)"
          stroke={GOLD}
          strokeWidth="3"
        />
        <path
          d="M22 580 L22 185 Q22 32 200 24 Q378 32 378 185 L378 580 Z"
          fill="none"
          stroke={GOLD_BRIGHT}
          strokeWidth="1"
          opacity="0.8"
        />
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
