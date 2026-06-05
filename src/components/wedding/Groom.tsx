import { motion } from "motion/react";
import { Divider } from "./Divider";
import groomPortrait from "@/assets/groom-portrait.png";
import bridePortrait from "@/assets/bride-portrait.png";


export function Groom() {
  return (
    <section className="relative px-6 py-24" style={{ background: "linear-gradient(180deg, var(--ivory) 0%, color-mix(in oklab, var(--champagne) 60%, var(--ivory)) 100%)" }}>
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative mx-auto w-full max-w-md"
        >
          <Portrait image={groomPortrait.url} alt="Avinash" tint="#5a1228" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-center md:text-left"
        >
          <p className="font-display text-xs uppercase tracking-[0.5em] text-gold">The Groom</p>
          <h2 className="mt-3 font-script text-6xl text-wine sm:text-7xl">Avinash</h2>
          <p className="mt-2 font-serif text-2xl text-wine/90">Nidamanuri Avinash</p>
          <p className="mt-1 font-display text-[0.65rem] uppercase tracking-[0.4em] text-gold">Marine Engineer</p>
          <Divider />
          <p className="font-display text-[0.6rem] uppercase tracking-[0.35em] text-muted-foreground">Son of</p>
          <p className="mt-2 font-serif text-lg text-foreground/90">Sri Nidamanuri Srinivasulu</p>
          <p className="font-serif italic text-blush">&amp;</p>
          <p className="font-serif text-lg text-foreground/90">Smt. Nidamanuri Anuradha</p>
          <p className="mt-6 font-serif text-lg italic text-foreground/75">
            "A man of integrity, kindness, and dreams, ready to embark on life's most beautiful journey."
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export function Bride() {
  return (
    <section className="relative px-6 py-24" style={{ background: "linear-gradient(180deg, color-mix(in oklab, var(--champagne) 60%, var(--ivory)) 0%, var(--ivory) 100%)" }}>
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-center md:order-2 md:text-left"
        >
          <p className="font-display text-xs uppercase tracking-[0.5em] text-gold">The Bride</p>
          <h2 className="mt-3 font-script text-6xl text-wine sm:text-7xl">Sai Prathyusha</h2>
          <p className="mt-2 font-serif text-2xl text-wine/90">Dr. Bheemavarapu Sai Prathyusha</p>
          <p className="mt-1 font-display text-[0.65rem] uppercase tracking-[0.4em] text-gold">MBBS (MD) — Community Medicine</p>
          <Divider />
          <p className="font-display text-[0.6rem] uppercase tracking-[0.35em] text-muted-foreground">Daughter of</p>
          <p className="mt-2 font-serif text-lg text-foreground/90">Sri Bheemavarapu Venugopal Rao</p>
          <p className="font-serif italic text-blush">&amp;</p>
          <p className="font-serif text-lg text-foreground/90">Smt. Jaganadham Sreelatha</p>
          <p className="mt-6 font-serif text-lg italic text-foreground/75">
            "A compassionate soul whose grace and warmth illuminate every heart she touches."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative mx-auto w-full max-w-md md:order-1"
        >
          <Portrait image={bridePortrait.url} alt="Sai Prathyusha" tint="#7a1e3a" />
        </motion.div>
      </div>
    </section>
  );
}

function Portrait({ image, alt, tint }: { image: string; alt: string; tint: string }) {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full">
      <div
        className="relative h-full w-full overflow-hidden bg-card shadow-royal"
        style={{
          borderRadius: "50% 50% 6px 6px / 35% 35% 6px 6px",
          border: "3px solid #c9a35a",
          boxShadow: "0 30px 80px -20px rgba(90,18,40,0.5), 0 0 0 8px rgba(248,243,238,1), 0 0 0 10px #c9a35a",
        }}
      >
        <img
          src={image}
          alt={alt}
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Soft vignette */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at center, transparent 55%, ${tint}55 100%)`,
          }}
        />
        {/* Inner gold hairline */}
        <div className="pointer-events-none absolute inset-2 border border-[#c9a35a]/50" style={{ borderRadius: "inherit" }} />
      </div>
      <span className="absolute -bottom-3 left-1/2 h-5 w-5 -translate-x-1/2 rotate-45 bg-gold ring-2 ring-ivory" />
    </div>
  );
}

