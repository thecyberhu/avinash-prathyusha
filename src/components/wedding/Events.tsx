import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import haldi from "@/assets/event-haldi-upload.png";
import mehendi from "@/assets/event-mehendi-upload.png";
import sangeet from "@/assets/event-sangeet-upload.png";
import wedding from "@/assets/event-wedding-upload.png";
import reception from "@/assets/reception.jpg";
import { Divider } from "./Divider";

const events = [
  { name: "Engagement", date: "Coming Soon", time: "TBA", image: wedding },
  { name: "Haldi Ceremony", date: "02 July 2026", time: "10:00 AM", image: haldi },
  { name: "Mehendi Ceremony", date: "02 July 2026", time: "4:00 PM", image: mehendi },
  { name: "Sangeet Night", date: "02 July 2026", time: "7:30 PM", image: sangeet },
  { name: "Wedding Ceremony", date: "03 July 2026", time: "1:45 AM", image: wedding },
  { name: "Reception", date: "03 July 2026", time: "8:00 PM", image: reception },
];

export function Events() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <header className="text-center">
          <p className="font-display text-xs uppercase tracking-[0.5em] text-gold">Wedding Celebrations</p>
          <h2 className="mt-3 font-serif text-5xl text-wine sm:text-6xl">Our Sacred Rituals</h2>
          <Divider />
        </header>

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((e, i) => (
            <EventCard key={e.name} event={e} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EventCard({ event, index }: { event: (typeof events)[number]; index: number }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <motion.button
      type="button"
      onClick={() => setRevealed((v) => !v)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative aspect-[4/5] overflow-hidden rounded-sm text-left ring-1 ring-gold/40 shadow-royal"
      style={{
        background: "linear-gradient(160deg, #2a0f1d 0%, #1a0a14 100%)",
      }}
    >
      {/* Image layer */}
      <AnimatePresence mode="wait">
        {revealed ? (
          <motion.img
            key="img"
            src={event.image}
            alt={event.name}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : null}
      </AnimatePresence>

      {/* Front overlay */}
      <AnimatePresence>
        {!revealed && (
          <motion.div
            key="front"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
            style={{
              background: "linear-gradient(160deg, #2a0f1d 0%, #1a0a14 100%)",
            }}
          >
            <CornerOrnaments />
            <p className="font-display text-[0.6rem] uppercase tracking-[0.4em] text-[#c9a35a]">
              Ceremony {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-3 font-script text-5xl text-ivory"
              style={{ textShadow: "0 0 30px rgba(232,180,80,0.25)" }}>
              {event.name}
            </h3>
            <div className="mx-auto my-4 h-px w-16" style={{
              background: "linear-gradient(90deg, transparent, #c9a35a, transparent)",
            }} />
            <p className="font-serif text-base text-ivory/85">📅 {event.date}</p>
            <p className="font-serif text-sm text-ivory/70">⏰ {event.time}</p>
            <p className="mt-6 font-display text-[0.55rem] uppercase tracking-[0.4em] text-[#e8b450]">
              🔒 Tap To Reveal Memories
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back overlay (visible when revealed) */}
      {revealed && (
        <>
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a14]/95 via-[#1a0a14]/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 text-center">
            <h3 className="font-script text-4xl text-ivory">{event.name}</h3>
            <p className="mt-1 font-serif text-sm text-ivory/85">📅 {event.date} · ⏰ {event.time}</p>
            <p className="mt-2 font-display text-[0.55rem] uppercase tracking-[0.35em] text-[#e8b450]">
              Tap to close
            </p>
          </div>
        </>
      )}
    </motion.button>
  );
}

function CornerOrnaments() {
  const Corner = ({ className }: { className: string }) => (
    <svg viewBox="0 0 24 24" className={`absolute h-5 w-5 ${className}`} fill="none" stroke="#c9a35a" strokeWidth="1">
      <path d="M2 2 L10 2 M2 2 L2 10 M2 2 Q6 6 10 10" />
      <circle cx="10" cy="10" r="1" fill="#c9a35a" />
    </svg>
  );
  return (
    <>
      <Corner className="left-2 top-2" />
      <Corner className="right-2 top-2 -scale-x-100" />
      <Corner className="bottom-2 left-2 -scale-y-100" />
      <Corner className="bottom-2 right-2 -scale-100" />
    </>
  );
}
