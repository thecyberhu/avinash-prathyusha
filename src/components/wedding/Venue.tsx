import { motion } from "motion/react";
import { Divider } from "./Divider";

export function Venue() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <header className="text-center">
          <p className="font-display text-xs uppercase tracking-[0.5em] text-gold">The Venue</p>
          <h2 className="mt-3 font-serif text-5xl text-wine sm:text-6xl">A Sacred Place</h2>
          <Divider />
        </header>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="ornament-border mt-10 grid gap-0 overflow-hidden bg-ivory md:grid-cols-2"
        >
          <div className="p-10 text-center md:text-left">
            <h3 className="font-script text-5xl text-wine">P.A.G Convention Center</h3>
            <p className="mt-3 font-serif text-lg text-foreground/80">
              An elegant convention hall in the heart of Ongole — where tradition,
              warmth, and celebration come together for our sacred day.
            </p>

            <dl className="mt-6 space-y-3 text-sm">
              <Row k="Address" v="Guntur Road, Near TDP Party Office" />
              <Row k="Locality" v="Venkateswara Nagar, Ongole, AP – 523001" />
              <Row k="Date" v="03 July 2026 · 1:45 AM" />
            </dl>

            <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
              <a
                href="https://maps.google.com/?q=P.A.G+Convention+Center+Ongole"
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-full bg-royal px-7 py-3 font-display text-[0.65rem] uppercase tracking-[0.35em] text-ivory shadow-royal ring-1 ring-gold/50 transition hover:shadow-gold-glow"
              >
                📍 Get Directions
              </a>
              <a
                href="tel:+919999999999"
                className="inline-block rounded-full border border-gold/60 bg-ivory px-7 py-3 font-display text-[0.65rem] uppercase tracking-[0.35em] text-wine transition hover:bg-champagne"
              >
                📞 Contact Family
              </a>
            </div>
          </div>

          <div className="min-h-[360px] bg-champagne">
            <iframe
              title="Wedding venue map"
              src="https://www.google.com/maps?q=P.A.G+Convention+Center+Ongole+Andhra+Pradesh&output=embed"
              className="h-full w-full grayscale-[40%]"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-gold/20 pb-2">
      <dt className="font-display text-[0.65rem] uppercase tracking-[0.3em] text-gold">{k}</dt>
      <dd className="font-serif text-foreground/85">{v}</dd>
    </div>
  );
}
