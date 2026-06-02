import { motion } from "motion/react";
import { Divider } from "./Divider";

export function Family() {
  return (
    <section className="relative px-6 py-24" style={{
      background: "linear-gradient(180deg, var(--ivory) 0%, color-mix(in oklab, var(--champagne) 50%, var(--ivory)) 100%)",
    }}>
      <div className="mx-auto max-w-5xl">
        <header className="text-center">
          <p className="font-display text-xs uppercase tracking-[0.5em] text-gold">United By Love</p>
          <h2 className="mt-3 font-serif text-5xl text-wine sm:text-6xl">Families United</h2>
          <Divider />
        </header>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="ornament-border mx-auto mt-10 grid gap-0 overflow-hidden bg-ivory md:grid-cols-2"
        >
          <FamilyCard
            title="Groom's Family"
            father="Sri Nidamanuri Srinivasulu"
            mother="Smt. Nidamanuri Anuradha"
          />
          <FamilyCard
            title="Bride's Family"
            father="Sri Bheemavarapu Venugopal Rao"
            mother="Smt. Jaganadham Sreelatha"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mx-auto mt-10 max-w-3xl text-center font-serif text-lg italic text-foreground/80"
        >
          "Today two families become one, united through love, blessings, and cherished traditions."
        </motion.p>
      </div>
    </section>
  );
}

function FamilyCard({ title, father, mother }: { title: string; father: string; mother: string }) {
  return (
    <div className="border-gold/30 p-10 text-center [&:not(:last-child)]:border-b md:[&:not(:last-child)]:border-b-0 md:[&:not(:last-child)]:border-r">
      <svg viewBox="0 0 40 40" className="mx-auto h-10 w-10" fill="#c9a35a">
        <path d="M20 4 L24 16 L36 18 L24 20 L20 32 L16 20 L4 18 L16 16 Z" />
      </svg>
      <p className="mt-3 font-display text-xs uppercase tracking-[0.45em] text-gold">{title}</p>
      <p className="mt-5 font-serif text-xl text-wine">{father}</p>
      <p className="my-2 font-script text-2xl text-blush">&amp;</p>
      <p className="font-serif text-xl text-wine">{mother}</p>
    </div>
  );
}
