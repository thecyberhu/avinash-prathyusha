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
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff / 3600000) % 24);
  const m = Math.floor((diff / 60000) % 60);
  const s = Math.floor((diff / 1000) % 60);
  return { d, h, m, s };
}

export function SaveTheDate() {
  const { d, h, m, s } = useCountdown();
  const cells = [
    { label: "Days", value: d },
    { label: "Hours", value: h },
    { label: "Minutes", value: m },
    { label: "Seconds", value: s },
  ];

  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="ornament-border relative rounded-sm bg-card p-10 text-center shadow-royal sm:p-16"
        >
          <CornerOrnament className="absolute left-3 top-3" />
          <CornerOrnament className="absolute right-3 top-3 rotate-90" />
          <CornerOrnament className="absolute bottom-3 left-3 -rotate-90" />
          <CornerOrnament className="absolute bottom-3 right-3 rotate-180" />

          <p className="font-display text-xs uppercase tracking-[0.5em] text-gold">
            Save the Date
          </p>
          <h2 className="mt-4 font-serif text-5xl text-wine sm:text-6xl">
            August 25<span className="text-gold">,</span> 2026
          </h2>
          <p className="mt-3 font-script text-3xl text-blush">
            Muhurtham · 6:45 AM
          </p>

          <Divider />

          <div className="grid grid-cols-4 gap-2 sm:gap-6">
            {cells.map((c) => (
              <div key={c.label} className="rounded-sm bg-ivory/60 p-3 backdrop-blur sm:p-6">
                <div className="font-display text-3xl font-semibold text-wine sm:text-5xl">
                  {String(c.value).padStart(2, "0")}
                </div>
                <div className="mt-1 font-display text-[0.6rem] uppercase tracking-[0.3em] text-gold sm:text-xs">
                  {c.label}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 font-serif italic text-muted-foreground">
            Sri Venkateswara Kalyana Mandapam · Tirupati, Andhra Pradesh
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function CornerOrnament({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 60"
      className={`h-10 w-10 text-gold ${className ?? ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      <path d="M2 30 Q 2 2, 30 2" />
      <path d="M10 30 Q 10 10, 30 10" />
      <circle cx="14" cy="14" r="2" fill="currentColor" />
      <path d="M2 50 Q 12 50, 18 44 Q 24 38, 18 30" />
    </svg>
  );
}
