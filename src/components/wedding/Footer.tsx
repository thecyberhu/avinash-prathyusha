import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-royal px-6 py-20 text-ivory">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at bottom, color-mix(in oklab, var(--gold) 60%, transparent), transparent 60%)",
        }}
      />
      <svg
        viewBox="0 0 1200 200"
        className="absolute bottom-0 left-0 w-full text-wine/60"
        preserveAspectRatio="none"
      >
        <path
          d="M0 200 L0 140 L80 140 L80 60 L120 60 L120 100 L160 100 L160 40 L200 20 L240 40 L240 100 L280 100 L280 60 L320 60 L320 140 L500 140 L500 80 L540 80 L540 30 L580 10 L620 30 L620 80 L660 80 L660 140 L840 140 L840 60 L880 60 L880 100 L920 100 L920 40 L960 20 L1000 40 L1000 100 L1040 100 L1040 60 L1080 60 L1080 140 L1200 140 L1200 200 Z"
          fill="currentColor"
        />
      </svg>

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-gold/60 bg-ivory/5 backdrop-blur"
        >
          <span className="font-script text-5xl text-gold">S &amp; A</span>
        </motion.div>

        <p className="mt-8 font-serif text-2xl italic">
          “Bound by tradition, united by love, blessed for eternity.”
        </p>

        <p className="mt-6 font-display text-[0.65rem] uppercase tracking-[0.45em] text-gold">
          ॥ शुभं भवतु ॥ &nbsp; May All Be Blessed
        </p>

        <p className="mt-10 font-serif text-ivory/80">
          From our families to yours — thank you for being part of our sacred celebration.
        </p>

        <div className="mt-6 font-display text-xs uppercase tracking-[0.35em] text-ivory/60">
          Rao Family &nbsp;·&nbsp; Reddy Family
        </div>

        <div className="mt-10 flex justify-center gap-6 text-ivory/70">
          <a href="#" className="hover:text-gold">Instagram</a>
          <span>·</span>
          <a href="#" className="hover:text-gold">WhatsApp</a>
          <span>·</span>
          <a href="mailto:hello@sreekar-ananya.com" className="hover:text-gold">Email</a>
        </div>

        <p className="mt-12 font-display text-[0.6rem] uppercase tracking-[0.5em] text-ivory/40">
          © 2026 · Sreekar &amp; Ananya
        </p>
      </div>
    </footer>
  );
}
