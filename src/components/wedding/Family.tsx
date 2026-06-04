import { motion } from "motion/react";
import { Divider } from "./Divider";
import groomFamily from "@/assets/groom-family.jpeg.asset.json";
import brideFamily from "@/assets/bride-family.jpeg.asset.json";

export function Family() {
  return (
    <section className="relative px-6 py-24" style={{
      background: "linear-gradient(180deg, var(--ivory) 0%, color-mix(in oklab, var(--champagne) 50%, var(--ivory)) 100%)",
    }}>
      <div className="mx-auto max-w-6xl">
        <header className="text-center">
          <p className="font-display text-xs uppercase tracking-[0.5em] text-gold">United By Love</p>
          <h2 className="mt-3 font-serif text-5xl text-wine sm:text-6xl">Families United</h2>
          <Divider />
        </header>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <FamilyCard
            title="Groom's Family"
            image={groomFamily.url}
            father="Sri Nidamanuri Srinivasulu"
            mother="Smt. Nidamanuri Anuradha"
            delay={0}
          />
          <FamilyCard
            title="Bride's Family"
            image={brideFamily.url}
            father="Sri Bheemavarapu Venugopal Rao"
            mother="Smt. Jaganadham Sreelatha"
            delay={0.15}
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mx-auto mt-12 max-w-3xl text-center font-serif text-lg italic text-foreground/80"
        >
          "Today two families become one, united through love, blessings, and cherished traditions."
        </motion.p>
      </div>
    </section>
  );
}

function FamilyCard({
  title, image, father, mother, delay,
}: { title: string; image: string; father: string; mother: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay }}
      className="group relative"
    >
      {/* Ornate frame */}
      <div
        className="relative overflow-hidden bg-ivory p-3"
        style={{
          border: "3px double #c9a35a",
          boxShadow: "0 30px 70px -25px rgba(90,18,40,0.45), 0 0 0 1px rgba(201,163,90,0.3)",
          background: "linear-gradient(135deg, #fff8ee 0%, #f5e7c8 100%)",
        }}
      >
        <div className="relative overflow-hidden" style={{ border: "1px solid #c9a35a" }}>
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <img
              src={image}
              alt={title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
              draggable={false}
            />
            {/* gold inner border overlay */}
            <div className="pointer-events-none absolute inset-2 border border-[#c9a35a]/40" />
            {/* corner flourishes */}
            {(["tl","tr","bl","br"] as const).map((c) => <Corner key={c} corner={c} />)}
          </div>
        </div>

        {/* Caption plate */}
        <div className="relative mt-4 text-center pb-2">
          <svg viewBox="0 0 40 40" className="mx-auto h-8 w-8" fill="#c9a35a">
            <path d="M20 4 L24 16 L36 18 L24 20 L20 32 L16 20 L4 18 L16 16 Z" />
          </svg>
          <p className="mt-2 font-display text-[0.7rem] uppercase tracking-[0.45em] text-gold">{title}</p>
          <p className="mt-3 font-serif text-lg text-wine sm:text-xl">{father}</p>
          <p className="my-1 font-script text-2xl text-blush">&amp;</p>
          <p className="font-serif text-lg text-wine sm:text-xl">{mother}</p>
        </div>
      </div>
    </motion.div>
  );
}

function Corner({ corner }: { corner: "tl" | "tr" | "bl" | "br" }) {
  const pos = {
    tl: "left-1 top-1",
    tr: "right-1 top-1 -scale-x-100",
    bl: "left-1 bottom-1 -scale-y-100",
    br: "right-1 bottom-1 -scale-100",
  }[corner];
  return (
    <svg viewBox="0 0 40 40" className={`pointer-events-none absolute ${pos} h-10 w-10`} fill="none" stroke="#c9a35a" strokeWidth="1.2">
      <path d="M2 2 Q14 6 18 18 Q8 14 2 2" fill="#c9a35a" fillOpacity="0.35" />
      <circle cx="10" cy="10" r="2" fill="#e8b450" />
      <path d="M2 2 L16 16" />
    </svg>
  );
}
