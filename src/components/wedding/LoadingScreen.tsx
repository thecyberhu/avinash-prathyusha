import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import ganeshaRoyal from "@/assets/ganesha-royal.png";
import rosesBg from "@/assets/roses-bg.jpg";

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
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse at center, #5a1228 0%, #1a0309 100%)",
          }}
        >
          <RosesBackdrop />
          <Particles />

          <div className="relative" style={{ perspective: "2200px" }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.85, rotateX: 18 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div
                animate={
                  opening
                    ? { rotateY: -115, x: -50, opacity: 0.15 }
                    : { rotateY: 0, x: 0, opacity: 1 }
                }
                transition={{ duration: 1.6, ease: [0.65, 0, 0.35, 1] }}
                style={{ transformOrigin: "left center", transformStyle: "preserve-3d" }}
              >
                <InvitationCard onOpen={handleOpen} opening={opening} />
              </motion.div>
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
      className="relative h-[600px] w-[430px] overflow-hidden rounded-[2px] sm:h-[680px] sm:w-[490px]"
      style={{
        boxShadow:
          "0 40px 90px -20px rgba(0,0,0,0.8), 0 0 80px rgba(201,163,90,0.25)",
        background: `
          radial-gradient(circle at 30% 20%, #a01840 0%, transparent 35%),
          radial-gradient(circle at 75% 35%, #8a1638 0%, transparent 40%),
          radial-gradient(circle at 20% 70%, #6e0f2a 0%, transparent 45%),
          radial-gradient(circle at 80% 85%, #b81e48 0%, transparent 35%),
          radial-gradient(circle at 50% 50%, #7a1532 0%, transparent 50%),
          linear-gradient(135deg, #5a0e22 0%, #8a1838 50%, #4a0a1c 100%)
        `,
      }}
    >
      {/* rose petal texture overlay (SVG pattern) */}
      <svg className="absolute inset-0 h-full w-full opacity-50" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="rose1" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#d63a66" stopOpacity="0.7" />
            <stop offset="60%" stopColor="#8a1838" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#5a0e22" stopOpacity="0" />
          </radialGradient>
        </defs>
        {[
          [60, 80, 110], [200, 60, 90], [340, 120, 100], [80, 220, 130],
          [280, 250, 110], [380, 350, 95], [50, 400, 120], [220, 480, 140],
          [360, 560, 100], [120, 580, 90], [300, 420, 80], [180, 340, 100],
        ].map(([cx, cy, r], i) => (
          <circle key={i} cx={cx} cy={cy} r={r} fill="url(#rose1)" />
        ))}
      </svg>

      {/* soft dark vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(40,5,15,0.55) 100%)",
        }}
      />

      {/* ORNATE GOLD BORDER (drawn entirely in SVG) */}
      <OrnateBorder />

      {/* CONTENT */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: opening ? 0 : 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="flex flex-col items-center"
        >
          <GaneshaIcon />

          <p className="mt-10 font-script text-[2.4rem] leading-tight text-[#f5d9a8] sm:text-[2.8rem]"
             style={{ textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}>
            Om Shree Ganeshay
          </p>
          <p className="font-script text-[2.4rem] leading-tight text-[#f5d9a8] sm:text-[2.8rem]"
             style={{ textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}>
            Namah
          </p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: opening ? 0 : 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={onOpen}
          disabled={opening}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 overflow-hidden rounded-full bg-gradient-to-r from-[#7a1e3a] to-[#3a0a1a] px-8 py-3 font-display text-[0.65rem] uppercase tracking-[0.35em] text-[#f5d9a8] ring-1 ring-[#c9a35a]/70 shadow-[0_0_25px_rgba(201,163,90,0.4)] transition-shadow hover:shadow-[0_0_45px_rgba(201,163,90,0.8)]"
        >
          Open Invitation
        </motion.button>
      </div>
    </div>
  );
}

function GaneshaIcon() {
  return (
    <img
      src={ganeshaRoyal}
      alt="Lord Ganesha"
      className="h-48 w-48 animate-glow sm:h-56 sm:w-56 object-contain"
      style={{ filter: "drop-shadow(0 6px 24px rgba(245,217,168,0.5))" }}
    />
  );
}

function RosesBackdrop() {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: `url(${rosesBg})` }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(90,18,40,0.35) 0%, rgba(26,3,9,0.85) 85%)",
        }}
      />
    </>
  );
}


function OrnateBorder() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <svg
        viewBox="0 0 490 680"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <pattern id="goldOrnament" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
            <rect width="22" height="22" fill="#7a1e3a" />
            <circle cx="11" cy="11" r="3.5" fill="#e8b450" />
            <circle cx="11" cy="11" r="1.5" fill="#f5d9a8" />
            <path d="M0 11 L4 11 M18 11 L22 11 M11 0 L11 4 M11 18 L11 22"
                  stroke="#c9a35a" strokeWidth="1.2" />
            <path d="M3 3 L7 7 M19 3 L15 7 M3 19 L7 15 M19 19 L15 15"
                  stroke="#e8b450" strokeWidth="0.8" />
          </pattern>
          <pattern id="goldOrnamentH" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
            <rect width="22" height="22" fill="#7a1e3a" />
            <circle cx="11" cy="11" r="3.5" fill="#e8b450" />
            <circle cx="11" cy="11" r="1.5" fill="#f5d9a8" />
            <path d="M0 11 L4 11 M18 11 L22 11 M11 0 L11 4 M11 18 L11 22"
                  stroke="#c9a35a" strokeWidth="1.2" />
            <path d="M3 3 L7 7 M19 3 L15 7 M3 19 L7 15 M19 19 L15 15"
                  stroke="#e8b450" strokeWidth="0.8" />
          </pattern>
        </defs>

        {/* Outer thin border */}
        <rect x="8" y="8" width="474" height="664" fill="none"
              stroke="#c9a35a" strokeWidth="1.5" opacity="0.9" />

        {/* Ornament bands - top / bottom / left / right */}
        <rect x="14" y="14" width="462" height="28" fill="url(#goldOrnamentH)" />
        <rect x="14" y="638" width="462" height="28" fill="url(#goldOrnamentH)" />
        <rect x="14" y="42" width="28" height="596" fill="url(#goldOrnament)" />
        <rect x="448" y="42" width="28" height="596" fill="url(#goldOrnament)" />

        {/* Inner gold line */}
        <rect x="42" y="42" width="406" height="596" fill="none"
              stroke="#e8b450" strokeWidth="1" opacity="0.85" />
        <rect x="46" y="46" width="398" height="588" fill="none"
              stroke="#c9a35a" strokeWidth="0.6" opacity="0.6" />
      </svg>

      {/* Running gold light traveling around inner frame */}
      <div className="absolute inset-[42px]">
        <span className="absolute left-0 top-0 h-[2px] w-1/3"
              style={{
                background: "linear-gradient(90deg, transparent, #fff3d4, transparent)",
                animation: "run-x 4s linear infinite",
                boxShadow: "0 0 14px #f5d9a8, 0 0 24px #e8b450",
              }} />
        <span className="absolute bottom-0 right-0 h-[2px] w-1/3"
              style={{
                background: "linear-gradient(90deg, transparent, #fff3d4, transparent)",
                animation: "run-x-rev 4s linear infinite",
                boxShadow: "0 0 14px #f5d9a8, 0 0 24px #e8b450",
              }} />
        <span className="absolute right-0 top-0 h-1/3 w-[2px]"
              style={{
                background: "linear-gradient(180deg, transparent, #fff3d4, transparent)",
                animation: "run-y 4s linear infinite",
                boxShadow: "0 0 14px #f5d9a8, 0 0 24px #e8b450",
              }} />
        <span className="absolute bottom-0 left-0 h-1/3 w-[2px]"
              style={{
                background: "linear-gradient(180deg, transparent, #fff3d4, transparent)",
                animation: "run-y-rev 4s linear infinite",
                boxShadow: "0 0 14px #f5d9a8, 0 0 24px #e8b450",
              }} />
      </div>
    </div>
  );
}

function Particles() {
  const particles = Array.from({ length: 24 }).map((_, i) => ({
    id: i,
    left: (i * 37 + 13) % 100,
    delay: ((i * 17) % 100) / 10,
    duration: 12 + ((i * 19) % 140) / 10,
  }));

  return (
    <div className="pointer-events-none absolute inset-0">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="animate-petal absolute block h-1 w-1 rounded-full"
          style={{
            left: `${particle.left}%`,
            background: "#f5d9a8",
            boxShadow: "0 0 8px #c9a35a",
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
