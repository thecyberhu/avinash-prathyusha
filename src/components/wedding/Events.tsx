import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import haldi from "@/assets/event-haldi.png";
import mehendi from "@/assets/event-mehndi.png";
import sangeet from "@/assets/event-sangeet.png";
import wedding from "@/assets/shadi.png";
import reception from "@/assets/event-reception.png";
import { Divider } from "./Divider";

type EventItem = {
  name: string;
  date: string;
  time: string;
  image: string;
  number: string;
  icon: "haldi" | "mehendi" | "sangeet" | "wedding" | "reception";
};

const events: EventItem[] = [
  { name: "Haldi Ceremony", date: "02 July 2026", time: "10:00 AM", image: haldi, number: "01", icon: "haldi" },
  { name: "Mehendi Ceremony", date: "02 July 2026", time: "4:00 PM", image: mehendi, number: "02", icon: "mehendi" },
  { name: "Sangeet Night", date: "02 July 2026", time: "7:30 PM", image: sangeet, number: "03", icon: "sangeet" },
  { name: "Wedding Ceremony", date: "03 July 2026", time: "1:45 AM", image: wedding, number: "04", icon: "wedding" },
  { name: "Reception", date: "03 July 2026", time: "8:00 PM", image: reception, number: "05", icon: "reception" },
];

export function Events() {
  const [haldiEv, mehendiEv, sangeetEv, weddingEv, receptionEv] = events;

  return (
    <section className="relative px-4 py-24" style={{ background: "linear-gradient(180deg, #f7ecd9 0%, #f3e4cd 100%)" }}>
      <div className="mx-auto max-w-6xl">
        <header className="text-center">
          <p className="font-display text-xs uppercase tracking-[0.5em]" style={{ color: "#c9a35a" }}>Wedding Celebrations</p>
          <h2 className="mt-3 font-serif text-5xl sm:text-6xl" style={{ color: "#5a1228" }}>Our Sacred Rituals</h2>
          <Divider />
        </header>

        <div className="relative mt-16">
          {/* Top row */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">
            <EventCard event={haldiEv} variant="side" />
            <EventCard event={mehendiEv} variant="side" />
          </div>

          {/* Center large card - overlaps */}
          <div className="relative z-10 mx-auto mt-6 max-w-xl sm:-mt-16">
            <EventCard event={weddingEv} variant="center" />
          </div>

          {/* Bottom row */}
          <div className="-mt-6 grid grid-cols-1 gap-8 sm:-mt-20 sm:grid-cols-2 sm:gap-10">
            <EventCard event={sangeetEv} variant="side" />
            <EventCard event={receptionEv} variant="side" />
          </div>
        </div>
      </div>
    </section>
  );
}

function EventCard({ event, variant }: { event: EventItem; variant: "side" | "center" }) {
  const [revealed, setRevealed] = useState(false);
  const isCenter = variant === "center";

  // Different shaped clip-paths
  const sideShape =
    "polygon(8% 0%, 92% 0%, 100% 18%, 100% 82%, 92% 100%, 8% 100%, 0% 82%, 0% 18%)";

  return (
    <motion.button
      type="button"
      onClick={() => setRevealed((v) => !v)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      whileHover={{ y: -4 }}
      className="group relative block w-full text-left"
      style={{ filter: "drop-shadow(0 25px 40px rgba(90, 18, 40, 0.35))" }}
    >
      {/* Outer gold frame */}
      <div
        className="relative"
        style={
          isCenter
            ? {
                aspectRatio: "5 / 6",
                background: "linear-gradient(145deg, #f4d98a 0%, #c9a35a 50%, #8a6a2c 100%)",
                padding: "5px",
                clipPath:
                  "path('M 50% 0% Q 50% 0% 50% 0% C 50% 0% 100% 0% 100% 45% L 100% 95% Q 100% 100% 95% 100% L 5% 100% Q 0% 100% 0% 95% L 0% 45% C 0% 0% 50% 0% 50% 0% Z')",
              }
            : {
                aspectRatio: "4 / 3",
                background: "linear-gradient(145deg, #f4d98a 0%, #c9a35a 50%, #8a6a2c 100%)",
                padding: "4px",
                clipPath: sideShape,
              }
        }
      >
        {/* Inner card */}
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse at center, #5a1228 0%, #3a0a18 60%, #2a0612 100%)",
            clipPath: isCenter
              ? "path('M 50% 0% C 50% 0% 99% 1% 99% 44% L 99% 94% Q 99% 99% 94% 99% L 6% 99% Q 1% 99% 1% 94% L 1% 44% C 1% 1% 50% 0% 50% 0% Z')"
              : sideShape,
          }}
        >
          {/* Decorative inner gold border */}
          <div
            className="pointer-events-none absolute inset-3 z-10"
            style={{
              border: "1px solid rgba(201,163,90,0.5)",
              clipPath: isCenter ? undefined : sideShape,
            }}
          />

          {/* Image when revealed */}
          <AnimatePresence>
            {revealed && (
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
            )}
          </AnimatePresence>

          {/* Front content */}
          <AnimatePresence>
            {!revealed && (
              <motion.div
                key="front"
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 flex flex-col items-center justify-center px-6 py-8 text-center"
              >
                {/* Background motif icon (large faded) */}
                <BackgroundMotif type={event.icon} />

                <p className="relative z-10 font-display text-[0.6rem] uppercase tracking-[0.45em]" style={{ color: "#e8b450" }}>
                  Ceremony {event.number}
                </p>
                <h3
                  className={`relative z-10 mt-3 font-serif ${isCenter ? "text-5xl sm:text-6xl" : "text-4xl"}`}
                  style={{
                    color: "#f7e9c8",
                    textShadow: "0 0 30px rgba(232,180,80,0.4)",
                    lineHeight: 1.05,
                  }}
                >
                  {event.name.split(" ").map((w, i) => (
                    <span key={i} className="block">{w}</span>
                  ))}
                </h3>
                <div
                  className="relative z-10 mx-auto my-4 h-px w-20"
                  style={{ background: "linear-gradient(90deg, transparent, #c9a35a, transparent)" }}
                />
                <p className="relative z-10 font-serif text-base" style={{ color: "#f7e9c8" }}>📅 {event.date}</p>
                <p className="relative z-10 mt-1 font-serif text-sm" style={{ color: "#e8b450" }}>⏰ {event.time}</p>

                <p
                  className="relative z-10 mt-6 font-display text-[0.55rem] uppercase tracking-[0.4em]"
                  style={{ color: "#e8b450" }}
                >
                  🔒 Tap To Reveal Memories
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Back overlay (revealed) */}
          {revealed && (
            <>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a14]/95 via-[#1a0a14]/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-center">
                <h3 className="font-serif text-3xl" style={{ color: "#f7e9c8" }}>{event.name}</h3>
                <p className="mt-1 font-serif text-sm" style={{ color: "#f7e9c8" }}>📅 {event.date} · ⏰ {event.time}</p>
                <p className="mt-2 font-display text-[0.55rem] uppercase tracking-[0.35em]" style={{ color: "#e8b450" }}>
                  Tap to close
                </p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Icon medallion at top */}
      {!revealed && (
        <div
          className="absolute left-1/2 z-20 flex items-center justify-center"
          style={{
            top: isCenter ? "-2px" : "-30px",
            transform: "translateX(-50%)",
            width: isCenter ? 90 : 70,
            height: isCenter ? 90 : 70,
            borderRadius: "50%",
            background: "radial-gradient(circle at 30% 30%, #5a1228 0%, #2a0612 100%)",
            border: "3px solid",
            borderImage: "linear-gradient(145deg, #f4d98a, #c9a35a, #8a6a2c) 1",
            boxShadow: "0 8px 20px rgba(0,0,0,0.5), inset 0 0 12px rgba(201,163,90,0.3)",
          }}
        >
          <CeremonyIcon type={event.icon} size={isCenter ? 50 : 38} />
        </div>
      )}
    </motion.button>
  );
}

function CeremonyIcon({ type, size }: { type: EventItem["icon"]; size: number }) {
  const stroke = "#e8b450";
  const fill = "#f4d98a";
  const common = { width: size, height: size, viewBox: "0 0 64 64", fill: "none", stroke, strokeWidth: 1.5 } as const;

  switch (type) {
    case "haldi":
      return (
        <svg {...common}>
          <ellipse cx="32" cy="40" rx="18" ry="8" fill={fill} fillOpacity="0.2" />
          <path d="M14 40 Q32 56 50 40 L46 50 Q32 56 18 50 Z" fill={fill} fillOpacity="0.4" />
          <circle cx="32" cy="36" r="3" fill={fill} />
          <path d="M28 26 L36 26 L34 36 L30 36 Z" fill={fill} />
        </svg>
      );
    case "mehendi":
      return (
        <svg {...common}>
          <path d="M22 50 L22 30 Q22 22 32 22 Q42 22 42 30 L42 50" fill={fill} fillOpacity="0.2" />
          <circle cx="32" cy="32" r="2" fill={fill} />
          <circle cx="26" cy="36" r="1.5" fill={fill} />
          <circle cx="38" cy="36" r="1.5" fill={fill} />
          <path d="M22 30 L18 26 M42 30 L46 26" />
        </svg>
      );
    case "sangeet":
      return (
        <svg {...common}>
          <path d="M28 14 L28 42" />
          <ellipse cx="24" cy="44" rx="6" ry="4" fill={fill} fillOpacity="0.5" />
          <path d="M28 14 Q40 18 40 26 L40 38" />
          <ellipse cx="36" cy="40" rx="5" ry="3" fill={fill} fillOpacity="0.5" />
        </svg>
      );
    case "wedding":
      return (
        <svg {...common}>
          <path d="M32 8 L32 14" />
          <path d="M22 50 L22 28 Q22 18 32 14 Q42 18 42 28 L42 50 Z" fill={fill} fillOpacity="0.3" />
          <rect x="28" y="38" width="8" height="12" fill={fill} fillOpacity="0.4" />
          <circle cx="32" cy="26" r="3" fill={fill} />
          <path d="M16 50 L48 50" />
        </svg>
      );
    case "reception":
      return (
        <svg {...common}>
          <path d="M20 14 L26 30 Q26 36 22 38 L22 50 L18 50" fill={fill} fillOpacity="0.3" />
          <path d="M44 14 L38 30 Q38 36 42 38 L42 50 L46 50" fill={fill} fillOpacity="0.3" />
          <path d="M16 14 L30 14 M34 14 L48 14" />
        </svg>
      );
  }
}

function BackgroundMotif({ type }: { type: EventItem["icon"] }) {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-end justify-between px-4 pb-2 opacity-25">
      <CeremonyIcon type={type} size={90} />
      <CeremonyIcon type={type} size={90} />
    </div>
  );
}
