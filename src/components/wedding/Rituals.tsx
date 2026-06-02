import { motion } from "motion/react";
import { Divider } from "./Divider";

const rituals = [
  {
    title: "Nischitartham",
    sanskrit: "निश्चितार्थम्",
    meaning: "Betrothal",
    body: "The sacred promise — two families exchange vows, gold, and turmeric to seal the union of hearts under divine witness.",
    icon: "M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z",
  },
  {
    title: "Kashi Yatra",
    sanskrit: "काशी यात्रा",
    meaning: "The Pilgrimage",
    body: "The groom playfully renounces worldly life for Kashi — only to be lovingly persuaded back by the bride's father with promises of his daughter's hand.",
    icon: "M12 2 L20 8 L20 16 L12 22 L4 16 L4 8 Z",
  },
  {
    title: "Mangalsutra Dharana",
    sanskrit: "मङ्गलसूत्र धारण",
    meaning: "Sacred Thread",
    body: "Sreekar ties the auspicious thread of black beads and gold around Ananya's neck — three knots, three vows, one eternity.",
    icon: "M12 2 C 16 8, 16 16, 12 22 C 8 16, 8 8, 12 2 Z",
  },
  {
    title: "Saptapadi",
    sanskrit: "सप्तपदी",
    meaning: "Seven Sacred Steps",
    body: "Seven steps around the holy fire — nourishment, strength, prosperity, wisdom, progeny, health, and lifelong companionship.",
    icon: "M4 20 L8 14 L12 18 L16 8 L20 12 L20 20 Z",
  },
  {
    title: "Talambralu",
    sanskrit: "तलम्ब्रालु",
    meaning: "Pearls of Joy",
    body: "A playful shower of rice pearls mixed with saffron and turmeric — laughter, blessings, and the sweet beginning of togetherness.",
    icon: "M12 2 L12 22 M2 12 L22 12 M5 5 L19 19 M19 5 L5 19",
  },
  {
    title: "Griha Pravesham",
    sanskrit: "गृह प्रवेशम्",
    meaning: "Home Coming",
    body: "Ananya steps into her new home with her right foot, toppling a vessel of rice — abundance, prosperity, and warmth follow her every step.",
    icon: "M3 21 L3 10 L12 3 L21 10 L21 21 L14 21 L14 14 L10 14 L10 21 Z",
  },
];

export function Rituals() {
  return (
    <section className="relative overflow-hidden px-6 py-24"
      style={{
        background: "linear-gradient(180deg, #1a0a14 0%, #2a0f1d 50%, #1a0a14 100%)",
      }}>
      {/* Decorative top border */}
      <div className="absolute left-0 right-0 top-0 h-1" style={{
        background: "linear-gradient(90deg, transparent, #c9a35a, transparent)",
      }} />

      {/* Subtle pattern overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, #c9a35a 1px, transparent 0)",
        backgroundSize: "30px 30px",
      }} />

      <div className="relative mx-auto max-w-6xl">
        <header className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-[0.65rem] uppercase tracking-[0.6em] text-[#e8b450]"
          >
            ✦  Sacred Traditions  ✦
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 font-script text-6xl text-ivory sm:text-7xl md:text-8xl"
            style={{ textShadow: "0 0 40px rgba(232,180,80,0.25)" }}
          >
            Rituals of <span style={{
              background: "linear-gradient(180deg, #f4d98a, #c9a35a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>Forever</span>
          </motion.h2>
          <p className="mx-auto mt-4 max-w-2xl font-serif italic text-ivory/70">
            Ancient Telugu vows, woven through fire, gold, and the blessings of our ancestors.
          </p>
          <Divider />
        </header>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rituals.map((r, i) => (
            <motion.article
              key={r.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-sm p-[1px]"
              style={{
                background: "linear-gradient(135deg, #c9a35a 0%, transparent 40%, transparent 60%, #c9a35a 100%)",
              }}
            >
              <div className="relative h-full p-7 sm:p-8"
                style={{
                  background: "linear-gradient(160deg, #2a0f1d 0%, #1a0a14 100%)",
                }}>
                {/* Corner ornaments */}
                <CornerOrnament className="absolute left-2 top-2" />
                <CornerOrnament className="absolute right-2 top-2 -scale-x-100" />
                <CornerOrnament className="absolute bottom-2 left-2 -scale-y-100" />
                <CornerOrnament className="absolute bottom-2 right-2 -scale-100" />

                {/* Icon */}
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full transition-transform group-hover:scale-110"
                  style={{
                    background: "radial-gradient(circle, rgba(201,163,90,0.2) 0%, transparent 70%)",
                    border: "1px solid rgba(201,163,90,0.4)",
                  }}>
                  <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="#e8b450" strokeWidth="1.2">
                    <path d={r.icon} />
                  </svg>
                </div>

                <div className="text-center">
                  <p className="font-display text-[0.6rem] uppercase tracking-[0.4em] text-[#c9a35a]">
                    {r.meaning}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl text-ivory">{r.title}</h3>
                  <p className="mt-1 font-serif text-lg italic" style={{ color: "#c97b83" }}>
                    {r.sanskrit}
                  </p>
                  <div className="mx-auto my-4 h-px w-12" style={{
                    background: "linear-gradient(90deg, transparent, #c9a35a, transparent)",
                  }} />
                  <p className="font-serif text-sm leading-relaxed text-ivory/75">
                    {r.body}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CornerOrnament({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`h-5 w-5 ${className ?? ""}`} fill="none" stroke="#c9a35a" strokeWidth="1">
      <path d="M2 2 L10 2 M2 2 L2 10 M2 2 Q6 6 10 10" />
      <circle cx="10" cy="10" r="1" fill="#c9a35a" />
    </svg>
  );
}
