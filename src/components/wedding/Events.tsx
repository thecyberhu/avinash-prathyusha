import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import haldi from "@/assets/event-haldi.png";
import mehendi from "@/assets/event-mehndi.png";
import sangeet from "@/assets/event-sangeet.png";
import wedding from "@/assets/shadi.png";
import reception from "@/assets/event-reception.png";
import { Divider } from "./Divider";

type IconType = "haldi" | "mehendi" | "sangeet" | "wedding" | "reception";

type EventItem = {
  name: string;
  date: string;
  time: string;
  image: string;
  number: string;
  icon: IconType;
};

const events: Record<string, EventItem> = {
  haldi: { name: "Haldi ", date: "03 July 2026", time: "11:00 AM", image: haldi, number: "03", icon: "haldi" },
  mehendi: { name: "Mehendi", date: "02 July 2026", time: "11:00 AM", image: mehendi, number: "01", icon: "mehendi" },
  sangeet: { name: "Sangeet", date: "02 July 2026", time: "7:30 PM", image: sangeet, number: "02", icon: "sangeet" },
  wedding: { name: "Wedding Ceremony", date: "03 July 2026", time: "1:47 AM", image: wedding, number: "05", icon: "wedding" },
  reception: { name: "Reception", date: "03 July 2026", time: "8:00 PM", image: reception, number: "04", icon: "reception" },
};

const OCTAGON_CLIP =
  "polygon(7% 0%, 93% 0%, 100% 14%, 100% 86%, 93% 100%, 7% 100%, 0% 86%, 0% 14%)";

export function Events() {
  return (
    <section
      className="relative px-4 py-24 sm:py-28"
      style={{ background: "linear-gradient(180deg, #f7ecd9 0%, #f3e4cd 100%)" }}
    >
      {/* Faint ornamental backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, #5a1228 0, transparent 35%), radial-gradient(circle at 85% 80%, #c9a35a 0, transparent 40%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <header className="text-center">
          <p className="font-display text-[0.7rem] uppercase tracking-[0.5em]" style={{ color: "#c9a35a" }}>
            Wedding Celebrations
          </p>
          <h2 className="mt-4 font-serif text-5xl sm:text-6xl" style={{ color: "#5a1228" }}>
            Our Sacred Rituals
          </h2>
          <Divider />
        </header>

        {/* Desktop: symmetrical 3-col grid with center as feature; Mobile: stack */}
        <div className="mt-20 hidden lg:grid lg:grid-cols-3 lg:gap-x-10 lg:gap-y-14 lg:items-center">
          {/* top row */}
           <EventCard event={events.mehendi} variant="side" />
           <EventCard event={events.sangeet} variant="side" />
           <EventCard event={events.wedding} variant="center" rowSpan />
          
          {/* bottom row */}
          <EventCard event={events.haldi} variant="side" />
          <EventCard event={events.reception} variant="side" />
        </div>

        {/* Tablet: 2 cols */}
        <div className="mt-16 hidden sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-14 lg:hidden">
          <EventCard event={events.haldi} variant="side" />
          <EventCard event={events.mehendi} variant="side" />
          <div className="sm:col-span-2 sm:mx-auto sm:max-w-md sm:w-full">
            <EventCard event={events.wedding} variant="center" />
          </div>
          <EventCard event={events.sangeet} variant="side" />
          <EventCard event={events.reception} variant="side" />
        </div>

        {/* Mobile */}
        <div className="mt-14 grid grid-cols-1 gap-y-12 sm:hidden">
          <EventCard event={events.mehendi} variant="side" />
            <EventCard event={events.sangeet} variant="side" />
          <EventCard event={events.haldi} variant="side" />
          <EventCard event={events.reception} variant="side" />
          <EventCard event={events.wedding} variant="center" />
        </div>
      </div>
    </section>
  );
}

function EventCard({
  event,
  variant,
  rowSpan = false,
}: {
  event: EventItem;
  variant: "side" | "center";
  rowSpan?: boolean;
}) {
  const [revealed, setRevealed] = useState(false);
  const isCenter = variant === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`relative ${rowSpan ? "lg:row-span-2 lg:self-center" : ""}`}
      style={isCenter ? { transform: "scale(1)" } : undefined}
    >
      <motion.button
        type="button"
        onClick={() => setRevealed((v) => !v)}
        whileHover={{ y: -6, scale: 1.03 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="group relative block w-full text-left"
        style={{
          filter:
            "drop-shadow(0 18px 30px rgba(90, 18, 40, 0.28)) drop-shadow(0 4px 8px rgba(0,0,0,0.15))",
        }}
      >
        {/* Outer gold frame */}
        <div
          className="relative w-full"
          style={{
            aspectRatio: isCenter ? "4 / 5" : "5 / 4",
            background:
              "linear-gradient(145deg, #f4d98a 0%, #d4ae5e 35%, #c9a35a 55%, #8a6a2c 100%)",
            padding: "3px",
            clipPath: OCTAGON_CLIP,
          }}
        >
          {/* Inner card */}
          <div
            className="relative h-full w-full overflow-hidden"
            style={{
              background:
                "radial-gradient(ellipse at top, #6b1530 0%, #4a0e22 55%, #2a0612 100%)",
              clipPath: OCTAGON_CLIP,
            }}
          >
            {/* Inner gold hairline border */}
            <div
              className="pointer-events-none absolute inset-[14px] z-10"
              style={{
                border: "1px solid rgba(201,163,90,0.45)",
                clipPath: OCTAGON_CLIP,
              }}
            />

            {/* Hover gold glow */}
            <div
              className="pointer-events-none absolute inset-0 z-[5] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(232,180,80,0.18) 0%, transparent 60%)",
              }}
            />

            {/* Revealed image */}
            <AnimatePresence>
              {revealed && (
                <motion.div
                  key="img"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <img
                    src={event.image}
                    alt={event.name}
                    className="h-full w-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a14]/95 via-[#1a0a14]/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-center">
                    <h3
                      className="font-serif"
                      style={{
                        color: "#f7e9c8",
                        fontSize: isCenter ? "2rem" : "1.5rem",
                        lineHeight: 1.1,
                      }}
                    >
                      {event.name}
                    </h3>
                    <p className="mt-2 font-serif text-sm" style={{ color: "#f7e9c8" }}>
                      {event.date} · {event.time}
                    </p>
                    <p
                      className="mt-3 font-display text-[0.55rem] uppercase tracking-[0.4em]"
                      style={{ color: "#e8b450" }}
                    >
                      Tap to close
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Front content */}
            <AnimatePresence>
              {!revealed && (
                <motion.div
                  key="front"
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="absolute inset-0 flex flex-col items-center px-6 pt-14 pb-8 text-center"
                >
                  <BackgroundMotif type={event.icon} />

                  {/* Ceremony label with side flourishes */}
                  <div className="relative z-10 mt-1 flex items-center justify-center gap-3">
                    <span
                      className="h-px w-8"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, #c9a35a)",
                      }}
                    />
                    <p
                      className="font-display text-[0.6rem] uppercase tracking-[0.45em]"
                      style={{ color: "#e8b450" }}
                    >
                      Ceremony {event.number}
                    </p>
                    <span
                      className="h-px w-8"
                      style={{
                        background:
                          "linear-gradient(90deg, #c9a35a, transparent)",
                      }}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="relative z-10 mt-5 font-serif"
                    style={{
                      color: "#f7e9c8",
                      textShadow: "0 0 30px rgba(232,180,80,0.35)",
                      fontSize: isCenter ? "3.25rem" : "2.4rem",
                      lineHeight: 1.05,
                      letterSpacing: "0.01em",
                    }}
                  >
                    {event.name.split(" ").map((w, i) => (
                      <span key={i} className="block">
                        {w}
                      </span>
                    ))}
                  </h3>

                  {/* Ornamental divider */}
                  <div className="relative z-10 mt-5 flex items-center justify-center gap-2">
                    <span
                      className="h-px w-10"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, #c9a35a)",
                      }}
                    />
                    <span
                      className="inline-block h-1.5 w-1.5 rotate-45"
                      style={{ background: "#c9a35a" }}
                    />
                    <span
                      className="h-px w-10"
                      style={{
                        background:
                          "linear-gradient(90deg, #c9a35a, transparent)",
                      }}
                    />
                  </div>

                  {/* Date + time */}
                  <div className="relative z-10 mt-5 space-y-1.5">
                    <p
                      className="font-serif text-base sm:text-lg"
                      style={{ color: "#f7e9c8" }}
                    >
                      📅 {event.date}
                    </p>
                    <p
                      className="font-serif text-sm"
                      style={{ color: "#e8b450" }}
                    >
                      ⏰ {event.time}
                    </p>
                  </div>

                  {/* CTA pinned-ish at bottom */}
                  <div className="relative z-9 mt-auto pt-6">
                    <p
                      className="font-display text-[0.55rem] uppercase tracking-[0.4em]"
                      style={{ color: "rgba(232,180,80,0.75)" }}
                    >
                      🔒 Tap To Reveal Memories
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Icon medallion — perfectly centered on top edge */}
        {!revealed && (
          <div
            className="pointer-events-none absolute left-1/2 z-20 -translate-x-1/2"
            style={{
              top: isCenter ? "-32px" : "-28px",
              width: isCenter ? 72 : 60,
              height: isCenter ? 72 : 60,
            }}
          >
            {/* Outer gold glow */}
            <div
              className="absolute inset-0 rounded-full opacity-70 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(circle, rgba(232,180,80,0.55) 0%, transparent 70%)",
                filter: "blur(6px)",
              }}
            />
            <div
              className="relative flex h-full w-full items-center justify-center rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, #6b1530 0%, #2a0612 100%)",
                border: "2px solid #c9a35a",
                boxShadow:
                  "0 6px 14px rgba(0,0,0,0.45), inset 0 0 10px rgba(201,163,90,0.4), 0 0 18px rgba(232,180,80,0.25)",
              }}
            >
              <CeremonyIcon type={event.icon} size={isCenter ? 38 : 32} />
            </div>
          </div>
        )}
      </motion.button>
    </motion.div>
  );
}

function CeremonyIcon({ type, size }: { type: IconType; size: number }) {
  const stroke = "#e8b450";
  const fill = "#f4d98a";
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 64 64",
    fill: "none",
    stroke,
    strokeWidth: 1.5,
  } as const;

  switch (type) {
    case "haldi":
      return (
        <svg {...common}>
          <ellipse cx="32" cy="40" rx="18" ry="8" fill={fill} fillOpacity="0.25" />
          <path d="M14 40 Q32 56 50 40 L46 50 Q32 56 18 50 Z" fill={fill} fillOpacity="0.45" />
          <circle cx="32" cy="36" r="3" fill={fill} />
          <path d="M28 26 L36 26 L34 36 L30 36 Z" fill={fill} />
        </svg>
      );
    case "mehendi":
      return (
        <svg {...common}>
          <path d="M22 50 L22 30 Q22 22 32 22 Q42 22 42 30 L42 50" fill={fill} fillOpacity="0.25" />
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
          <ellipse cx="24" cy="44" rx="6" ry="4" fill={fill} fillOpacity="0.55" />
          <path d="M28 14 Q40 18 40 26 L40 38" />
          <ellipse cx="36" cy="40" rx="5" ry="3" fill={fill} fillOpacity="0.55" />
        </svg>
      );
    case "wedding":
      return (
        <svg {...common}>
          <path d="M32 8 L32 14" />
          <path d="M22 50 L22 28 Q22 18 32 14 Q42 18 42 28 L42 50 Z" fill={fill} fillOpacity="0.35" />
          <rect x="28" y="38" width="8" height="12" fill={fill} fillOpacity="0.45" />
          <circle cx="32" cy="26" r="3" fill={fill} />
          <path d="M16 50 L48 50" />
        </svg>
      );
    case "reception":
      return (
        <svg {...common}>
          <path d="M20 14 L26 30 Q26 36 22 38 L22 50 L18 50" fill={fill} fillOpacity="0.35" />
          <path d="M44 14 L38 30 Q38 36 42 38 L42 50 L46 50" fill={fill} fillOpacity="0.35" />
          <path d="M16 14 L30 14 M34 14 L48 14" />
        </svg>
      );
  }
}

function BackgroundMotif({ type }: { type: IconType }) {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-4 flex items-end justify-between px-6 opacity-20">
      <CeremonyIcon type={type} size={70} />
      <CeremonyIcon type={type} size={70} />
    </div>
  );
}
