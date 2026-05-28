import { motion } from "motion/react";
import haldi from "@/assets/event-haldi-upload.png";
import mehendi from "@/assets/event-mehendi-upload.png";
import sangeet from "@/assets/event-sangeet-upload.png";
import wedding from "@/assets/event-wedding-upload.png";
import reception from "@/assets/reception.jpg";
import { Divider } from "./Divider";

const events = [
  { name: "Haldi", date: "Aug 23, 2026 · 10:00 AM", venue: "Family Residence", desc: "Turmeric, marigold, and laughter — a golden blessing for the couple.", image: haldi },
  { name: "Mehendi", date: "Aug 23, 2026 · 4:00 PM", venue: "Floral Courtyard", desc: "Intricate henna patterns drawn while traditions are sung into the evening.", image: mehendi },
  { name: "Sangeet", date: "Aug 24, 2026 · 7:30 PM", venue: "Palace Ballroom", desc: "Where traditions dance with celebration and hearts beat to the rhythm of love.", image: sangeet },
  { name: "Wedding", date: "Aug 25, 2026 · 6:45 AM", venue: "Kalyana Mandapam", desc: "Before the sacred fire, two souls are bound for seven lifetimes.", image: wedding },
  { name: "Reception", date: "Aug 26, 2026 · 7:00 PM", venue: "The Grand Hall", desc: "An evening of candlelight, blessings, and a thousand toasts to forever.", image: reception },
];

export function Events() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <header className="text-center">
          <p className="font-display text-xs uppercase tracking-[0.5em] text-gold">Ceremonies</p>
          <h2 className="mt-3 font-serif text-5xl text-wine sm:text-6xl">Our Sacred Rituals</h2>
          <Divider />
        </header>

        <div className="relative mt-12">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gold to-transparent md:block" />

          <div className="space-y-16">
            {events.map((e, i) => (
              <motion.article
                key={e.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className={`relative grid items-center gap-8 md:grid-cols-2 md:gap-16 ${i % 2 ? "md:[direction:rtl]" : ""}`}
              >
                <div className="relative [direction:ltr]">
                  <ArchFrame>
                    <img
                      src={e.image}
                      alt={e.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1500ms] hover:scale-105"
                    />
                  </ArchFrame>
                </div>

                <div className="relative [direction:ltr] text-center md:text-left">
                  <span className="font-display text-xs uppercase tracking-[0.5em] text-gold">
                    Ceremony {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-script text-6xl text-wine">{e.name}</h3>
                  <p className="mt-1 font-serif text-lg text-blush">{e.date}</p>
                  <p className="mt-1 font-display text-xs uppercase tracking-[0.3em] text-muted-foreground">{e.venue}</p>
                  <p className="mt-5 font-serif text-lg italic text-foreground/80">{e.desc}</p>
                </div>

                <span className="absolute left-1/2 top-1/2 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold ring-4 ring-ivory md:block" />
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ArchFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
      <div
        className="relative h-full w-full overflow-hidden bg-card shadow-royal ring-1 ring-gold/40"
        style={{ borderRadius: "50% 50% 4px 4px / 35% 35% 4px 4px" }}
      >
        {children}
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/40"
             style={{ borderRadius: "50% 50% 4px 4px / 35% 35% 4px 4px" }} />
      </div>
      <span className="absolute -bottom-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 bg-gold" />
    </div>
  );
}
