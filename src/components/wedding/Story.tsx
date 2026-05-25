import { motion } from "motion/react";
import { Divider } from "./Divider";

const chapters = [
  {
    title: "How We Met",
    when: "Summer, 2022",
    body: "A chance encounter at a Carnatic music recital in Hyderabad. One shared raga, a thousand conversations.",
  },
  {
    title: "The Proposal",
    when: "Winter, 2024",
    body: "Beneath a sky of paper lanterns in Hampi, Sreekar knelt with his grandmother's gold ring.",
  },
  {
    title: "Forever Begins",
    when: "Spring, 2026",
    body: "Two families lit one lamp. The blessings began — and have never stopped.",
  },
];

export function Story() {
  return (
    <section className="relative bg-[color-mix(in_oklab,var(--champagne)_45%,var(--ivory))] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <header className="text-center">
          <p className="font-display text-xs uppercase tracking-[0.5em] text-gold">Our Story</p>
          <h2 className="mt-3 font-script text-6xl text-wine sm:text-7xl">A Love in Three Verses</h2>
          <Divider />
        </header>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {chapters.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30, rotate: i % 2 ? 2 : -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: i % 2 ? 2 : -2 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              whileHover={{ rotate: 0, y: -6 }}
              className="bg-ivory p-6 shadow-royal ring-1 ring-gold/30"
            >
              <div className="aspect-square overflow-hidden bg-gradient-to-br from-blush/30 via-champagne to-gold/20">
                <div className="flex h-full items-center justify-center">
                  <span className="font-script text-7xl text-wine/60">{i + 1}</span>
                </div>
              </div>
              <div className="pt-5 text-center">
                <p className="font-display text-[0.65rem] uppercase tracking-[0.4em] text-gold">{c.when}</p>
                <h3 className="mt-1 font-serif text-2xl text-wine">{c.title}</h3>
                <p className="mt-3 font-serif italic text-foreground/75">{c.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
