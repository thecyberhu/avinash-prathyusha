import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import cover from "@/assets/invitation-cover.png";

export function LoadingScreen({
  open,
  onOpen,
}: {
  open: boolean;
  onOpen: () => void;
}) {
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    if (opening) return;
    setOpening(true);
    setTimeout(onOpen, 1600);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#3a0a1a]"
          style={{
            background:
              "radial-gradient(ellipse at center, #5a1228 0%, #2a0612 100%)",
          }}
        >
          {/* ambient particles */}
          <Particles />

          {/* The Card with 3D perspective for opening effect */}
          <div
            className="relative"
            style={{ perspective: "2000px" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85, rotateX: 20 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative"
            >
              {/* Card body */}
              <motion.div
                animate={
                  opening
                    ? { rotateY: -110, x: -40, opacity: 0.2 }
                    : { rotateY: 0, x: 0, opacity: 1 }
                }
                transition={{ duration: 1.6, ease: [0.65, 0, 0.35, 1] }}
                style={{
                  transformOrigin: "left center",
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
                className="relative"
              >
                <InvitationCard onOpen={handleOpen} opening={opening} />
              </motion.div>

              {/* Inner page revealed when opening */}
              {opening && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="text-center">
                    <p className="font-script text-6xl text-gold">Welcome</p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function InvitationCard({
  onOpen,
  opening,
}: {
  onOpen: () => void;
  opening: boolean;
}) {
  return (
    <div
      className="relative h-[560px] w-[400px] overflow-hidden rounded-sm shadow-2xl sm:h-[640px] sm:w-[460px]"
      style={{
        boxShadow:
          "0 30px 80px -20px rgba(0,0,0,0.7), 0 0 60px rgba(201,163,90,0.2)",
      }}
    >
      {/* Rose backdrop */}
      <img
        src={cover}
        alt="Invitation cover with Ganesha"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-wine/20 via-transparent to-wine/40" />

      {/* Running border — animated gold lights tracing the inner frame */}
      <RunningBorder />

      {/* Inner content (sits inside the border) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: opening ? 0 : 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="flex flex-col items-center"
        >
          {/* Ganesha silhouette */}
          <svg
            viewBox="0 0 100 100"
            className="h-32 w-32 animate-glow text-[#f5d9a8] sm:h-40 sm:w-40"
            fill="currentColor"
          >
            <path d="M50 8c-3 0-5 2-6 5l-2 6c-6 1-11 4-14 9-3 5-3 11-1 16-4 2-7 6-8 11-1 6 1 11 5 14l-3 8c-1 3 1 6 4 6h4l2-4c2 4 6 6 10 6 5 0 9-3 11-7 2 4 6 7 11 7 4 0 8-2 10-6l2 4h4c3 0 5-3 4-6l-3-8c4-3 6-8 5-14-1-5-4-9-8-11 2-5 2-11-1-16-3-5-8-8-14-9l-2-6c-1-3-3-5-6-5h-4zm-8 22c2 0 3 1 3 3s-1 3-3 3-3-1-3-3 1-3 3-3zm16 0c2 0 3 1 3 3s-1 3-3 3-3-1-3-3 1-3 3-3zm-8 8c4 0 7 2 8 5l-3 4c-1 2-3 3-5 3s-4-1-5-3l-3-4c1-3 4-5 8-5zm-22 8c3 0 5 2 5 5s-2 5-5 5c-1 0-2 0-3-1l-2 3c-1-2-1-4 0-6 1-4 3-6 5-6zm44 0c3 0 5 2 6 6 1 2 1 4 0 6l-2-3c-1 1-2 1-3 1-3 0-5-2-5-5s2-5 4-5z" />
          </svg>

          <p className="mt-8 font-script text-3xl text-[#f5d9a8] sm:text-4xl">
            Om Shree Ganeshay
          </p>
          <p className="font-script text-3xl text-[#f5d9a8] sm:text-4xl">
            Namah
          </p>
        </motion.div>

        {/* Open Invitation button — sits at the bottom edge of the card */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: opening ? 0 : 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={onOpen}
          disabled={opening}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 overflow-hidden rounded-full bg-gradient-to-r from-[#7a1e3a] to-[#3a0a1a] px-8 py-3 font-display text-[0.65rem] uppercase tracking-[0.35em] text-[#f5d9a8] ring-1 ring-[#c9a35a]/70 shadow-[0_0_25px_rgba(201,163,90,0.4)] transition-shadow hover:shadow-[0_0_40px_rgba(201,163,90,0.7)]"
        >
          Open Invitation
        </motion.button>
      </div>
    </div>
  );
}

function RunningBorder() {
  return (
    <div className="pointer-events-none absolute inset-4 sm:inset-5">
      {/* static gold frame */}
      <div className="absolute inset-0 border border-[#c9a35a]/60" />
      <div className="absolute inset-[6px] border border-[#c9a35a]/40" />

      {/* running light — top */}
      <span
        className="absolute left-0 top-0 h-[2px] w-1/3"
        style={{
          background:
            "linear-gradient(90deg, transparent, #f5d9a8, transparent)",
          animation: "run-x 4s linear infinite",
          boxShadow: "0 0 12px #f5d9a8, 0 0 20px #c9a35a",
        }}
      />
      {/* running light — bottom (reverse) */}
      <span
        className="absolute bottom-0 right-0 h-[2px] w-1/3"
        style={{
          background:
            "linear-gradient(90deg, transparent, #f5d9a8, transparent)",
          animation: "run-x-rev 4s linear infinite",
          boxShadow: "0 0 12px #f5d9a8, 0 0 20px #c9a35a",
        }}
      />
      {/* running light — left (vertical) */}
      <span
        className="absolute bottom-0 left-0 h-1/3 w-[2px]"
        style={{
          background:
            "linear-gradient(180deg, transparent, #f5d9a8, transparent)",
          animation: "run-y-rev 4s linear infinite",
          boxShadow: "0 0 12px #f5d9a8, 0 0 20px #c9a35a",
        }}
      />
      {/* running light — right (vertical) */}
      <span
        className="absolute right-0 top-0 h-1/3 w-[2px]"
        style={{
          background:
            "linear-gradient(180deg, transparent, #f5d9a8, transparent)",
          animation: "run-y 4s linear infinite",
          boxShadow: "0 0 12px #f5d9a8, 0 0 20px #c9a35a",
        }}
      />

      {/* corner ornaments */}
      {[
        "left-0 top-0",
        "right-0 top-0 rotate-90",
        "right-0 bottom-0 rotate-180",
        "left-0 bottom-0 -rotate-90",
      ].map((pos, i) => (
        <svg
          key={i}
          viewBox="0 0 40 40"
          className={`absolute h-6 w-6 text-[#f5d9a8] ${pos}`}
          fill="currentColor"
        >
          <path d="M0 0 L 20 0 L 18 2 L 2 2 L 2 18 L 0 20 Z M 8 6 L 12 6 L 10 8 Z M 6 10 L 6 14 L 8 12 Z" />
        </svg>
      ))}
    </div>
  );
}

function Particles() {
  return (
    <div className="pointer-events-none absolute inset-0">
      {Array.from({ length: 24 }).map((_, i) => (
        <span
          key={i}
          className="animate-petal absolute block h-1 w-1 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            background: "#f5d9a8",
            boxShadow: "0 0 8px #c9a35a",
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${12 + Math.random() * 14}s`,
          }}
        />
      ))}
    </div>
  );
}
