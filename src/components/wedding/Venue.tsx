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
          className="ornament-border mt-10 grid gap-0 overflow-hidden md:grid-cols-2"
        >
          <div className="p-10 text-center md:text-left">
            <h3 className="font-script text-5xl text-wine">Sri Venkateswara Kalyana Mandapam</h3>
            <p className="mt-3 font-serif text-lg text-foreground/80">
              Tirumala Road, Tirupati, Andhra Pradesh — a temple-inspired hall where centuries-old rituals find a home of marble and gold.
            </p>

            <dl className="mt-6 space-y-3 text-sm">
              <Row k="Address" v="Tirumala Road, Tirupati, AP 517501" />
              <Row k="Parking" v="Valet on premises" />
              <Row k="Stay" v="Marasa Sarovar · Hotel Bliss · Fortune Kences" />
            </dl>

            <a
              href="https://maps.google.com/?q=Tirupati"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-block rounded-full bg-royal px-8 py-3 font-display text-xs uppercase tracking-[0.35em] text-ivory shadow-royal ring-1 ring-gold/50 transition hover:shadow-gold-glow"
            >
              Get Directions
            </a>
          </div>

          <div className="min-h-[360px] bg-champagne">
            <iframe
              title="Wedding venue map"
              src="https://www.google.com/maps?q=Tirupati%20Andhra%20Pradesh&output=embed"
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
