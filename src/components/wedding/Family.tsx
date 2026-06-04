import { motion } from "motion/react";
import { Divider } from "./Divider";
import groomFamily from "@/assets/groom-family.jpeg.asset.json";
import brideFamily from "@/assets/bride-family.jpeg.asset.json";

const WINE = "#5a1228";
const GOLD = "#c9a35a";
const GOLD_BRIGHT = "#e8b450";

export function Family() {
  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6" style={{
      background: "linear-gradient(180deg, var(--ivory) 0%, color-mix(in oklab, var(--champagne) 55%, var(--ivory)) 100%)",
    }}>
      {/* decorative bg motifs */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: "radial-gradient(circle at 2px 2px, #5a1228 1px, transparent 0)",
        backgroundSize: "28px 28px",
      }} />
      <FloatingMandala className="left-[-60px] top-10 h-48 w-48" />
      <FloatingMandala className="right-[-60px] bottom-20 h-56 w-56" reverse />

      <div className="relative mx-auto max-w-6xl">
        <header className="text-center">
          <p className="font-display text-xs uppercase tracking-[0.5em] text-gold">United By Love</p>
          <h2 className="mt-3 font-serif text-5xl text-wine sm:text-6xl">Families United</h2>
          <Divider />
          <p className="mx-auto mt-3 max-w-xl font-serif italic text-foreground/70">
            Two hearts, two families — bound by blessings, woven by tradition.
          </p>
        </header>

        {/* Layout: groom card | center crest | bride card */}
        <div className="mt-16 grid items-center gap-8 lg:grid-cols-[1fr_auto_1fr] lg:gap-6">
          <FamilyCard
            title="Groom's Family"
            image={groomFamily.url}
            father="Sri Nidamanuri Srinivasulu"
            mother="Smt. Nidamanuri Anuradha"
            son="Avinash"
            tilt={-1.5}
            delay={0}
          />

          <CenterCrest />

          <FamilyCard
            title="Bride's Family"
            image={brideFamily.url}
            father="Sri Bheemavarapu Venugopal Rao"
            mother="Smt. Jaganadham Sreelatha"
            son="Sai Prathyusha"
            tilt={1.5}
            delay={0.2}
            reverse
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mx-auto mt-16 max-w-2xl text-center"
        >
          <div className="mx-auto mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
            <span className="text-gold">❦</span>
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
          </div>
          <p className="font-serif text-lg italic text-foreground/80 sm:text-xl">
            "Today two families become one, united through love, blessings, and cherished traditions."
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function FamilyCard({
  title, image, father, mother, son, tilt, delay, reverse = false,
}: {
  title: string; image: string; father: string; mother: string; son: string;
  tilt: number; delay: number; reverse?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: reverse ? 60 : -60, rotate: tilt }}
      whileInView={{ opacity: 1, x: 0, rotate: tilt }}
      whileHover={{ rotate: 0, y: -6 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay, type: "spring", stiffness: 60 }}
      className="group relative mx-auto w-full max-w-md"
    >
      {/* Shadow card behind */}
      <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-sm" style={{
        background: WINE, opacity: 0.15,
      }} />

      {/* Main card */}
      <div
        className="relative overflow-hidden p-3"
        style={{
          border: `3px double ${GOLD}`,
          background: "linear-gradient(135deg, #fff8ee 0%, #f5e7c8 100%)",
          boxShadow: `0 30px 70px -25px rgba(90,18,40,0.5), 0 0 0 1px ${GOLD}33`,
        }}
      >
        {/* Title ribbon */}
        <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2">
          <div className="relative px-6 py-1.5" style={{
            background: `linear-gradient(180deg, ${WINE} 0%, #3a0a18 100%)`,
            border: `1px solid ${GOLD}`,
            boxShadow: `0 4px 14px rgba(90,18,40,0.4), inset 0 0 0 2px #3a0a18`,
          }}>
            <p className="font-display text-[0.65rem] uppercase tracking-[0.4em]" style={{ color: GOLD_BRIGHT }}>
              {title}
            </p>
            <span className="absolute -left-2 top-1/2 h-0 w-0 -translate-y-1/2"
              style={{ borderTop: "6px solid transparent", borderBottom: "6px solid transparent", borderRight: `6px solid ${WINE}` }} />
            <span className="absolute -right-2 top-1/2 h-0 w-0 -translate-y-1/2"
              style={{ borderTop: "6px solid transparent", borderBottom: "6px solid transparent", borderLeft: `6px solid ${WINE}` }} />
          </div>
        </div>

        {/* Image plate */}
        <div className="relative mt-3 overflow-hidden" style={{ border: `1px solid ${GOLD}` }}>
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <img
              src={image} alt={title} draggable={false}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-110"
            />
            {/* vignette */}
            <div className="pointer-events-none absolute inset-0" style={{
              background: "radial-gradient(ellipse at center, transparent 55%, rgba(90,18,40,0.35) 100%)",
            }} />
            <div className="pointer-events-none absolute inset-2 border" style={{ borderColor: `${GOLD}66` }} />
            {(["tl","tr","bl","br"] as const).map((c) => <Corner key={c} corner={c} />)}
          </div>
        </div>

        {/* Caption */}
        <div className="relative px-2 py-5 text-center">
          <p className="font-display text-[0.6rem] uppercase tracking-[0.4em]" style={{ color: GOLD }}>
            Parents of {son}
          </p>
          <div className="my-2 flex items-center justify-center gap-2">
            <span className="h-px w-8" style={{ background: `linear-gradient(to right, transparent, ${GOLD})` }} />
            <svg viewBox="0 0 20 20" className="h-3 w-3" fill={GOLD_BRIGHT}>
              <path d="M10 1 L12 7 L18 8 L13 12 L15 18 L10 14 L5 18 L7 12 L2 8 L8 7 Z" />
            </svg>
            <span className="h-px w-8" style={{ background: `linear-gradient(to left, transparent, ${GOLD})` }} />
          </div>
          <p className="font-serif text-base text-wine sm:text-lg">{father}</p>
          <p className="my-1 font-script text-2xl" style={{ color: "#c97b83" }}>&amp;</p>
          <p className="font-serif text-base text-wine sm:text-lg">{mother}</p>
        </div>
      </div>
    </motion.div>
  );
}

function CenterCrest() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.4 }}
      className="relative mx-auto flex h-32 w-32 items-center justify-center lg:h-40 lg:w-40"
    >
      {/* rotating ring */}
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full animate-spin" style={{ animationDuration: "30s" }}>
        <defs>
          <radialGradient id="crestG" cx="0.5" cy="0.5">
            <stop offset="0%" stopColor={GOLD_BRIGHT} />
            <stop offset="100%" stopColor={WINE} />
          </radialGradient>
        </defs>
        <circle cx="100" cy="100" r="92" fill="none" stroke={GOLD} strokeWidth="1" strokeDasharray="2 6" />
        {Array.from({ length: 12 }).map((_, i) => (
          <circle key={i} cx="100" cy="8" r="2" fill={GOLD_BRIGHT}
            transform={`rotate(${i * 30} 100 100)`} />
        ))}
      </svg>
      {/* Static inner */}
      <div className="relative flex h-24 w-24 items-center justify-center rounded-full lg:h-28 lg:w-28"
        style={{
          background: "radial-gradient(circle, #fff8ee 0%, #f5e7c8 100%)",
          border: `2px solid ${GOLD}`,
          boxShadow: `0 0 0 4px #fff8ee, 0 0 0 5px ${GOLD}, 0 10px 30px -5px ${WINE}66`,
        }}>
        <div className="text-center">
          <div className="font-script text-3xl lg:text-4xl" style={{
            background: `linear-gradient(180deg, ${GOLD_BRIGHT}, ${GOLD})`,
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>A&amp;P</div>
          <div className="mt-0.5 font-display text-[0.5rem] uppercase tracking-[0.3em] text-gold">United</div>
        </div>
      </div>
    </motion.div>
  );
}

function Corner({ corner }: { corner: "tl" | "tr" | "bl" | "br" }) {
  const pos = {
    tl: "left-0 top-0",
    tr: "right-0 top-0 -scale-x-100",
    bl: "left-0 bottom-0 -scale-y-100",
    br: "right-0 bottom-0 -scale-100",
  }[corner];
  return (
    <svg viewBox="0 0 40 40" className={`pointer-events-none absolute ${pos} h-10 w-10`} fill="none" stroke={GOLD_BRIGHT} strokeWidth="1.2">
      <path d="M2 2 Q14 6 18 18 Q8 14 2 2" fill={GOLD} fillOpacity="0.5" />
      <circle cx="10" cy="10" r="2" fill={GOLD_BRIGHT} />
      <path d="M2 2 L18 18" />
      <circle cx="20" cy="20" r="1" fill={GOLD_BRIGHT} />
    </svg>
  );
}

function FloatingMandala({ className, reverse = false }: { className?: string; reverse?: boolean }) {
  return (
    <svg viewBox="0 0 200 200" className={`pointer-events-none absolute opacity-20 ${className ?? ""}`}
      style={{ animation: `spin ${reverse ? 60 : 80}s linear infinite ${reverse ? "reverse" : ""}` }}>
      <g fill="none" stroke={WINE} strokeWidth="1">
        <circle cx="100" cy="100" r="90" />
        <circle cx="100" cy="100" r="70" strokeDasharray="3 5" />
        <circle cx="100" cy="100" r="50" />
        {Array.from({ length: 12 }).map((_, i) => (
          <ellipse key={i} cx="100" cy="30" rx="5" ry="18" fill={WINE} fillOpacity="0.5"
            transform={`rotate(${i * 30} 100 100)`} />
        ))}
        <circle cx="100" cy="100" r="8" fill={GOLD} />
      </g>
    </svg>
  );
}
