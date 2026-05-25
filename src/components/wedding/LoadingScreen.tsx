import { motion, AnimatePresence } from "motion/react";
import ganesha from "@/assets/ganesha.png";

export function LoadingScreen({
  open,
  onOpen,
}: {
  open: boolean;
  onOpen: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(20px)" }}
          transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-sunrise"
        >
          {/* radial glow */}
          <div className="absolute inset-0 opacity-80"
               style={{
                 background:
                   "radial-gradient(circle at 50% 45%, color-mix(in oklab, var(--gold) 30%, transparent), transparent 60%)",
               }} />

          {/* hanging bells */}
          <div className="absolute left-6 top-0 flex flex-col items-center md:left-16">
            <div className="h-24 w-px bg-gold/40" />
            <div className="animate-sway origin-top">
              <Bell />
            </div>
          </div>
          <div className="absolute right-6 top-0 flex flex-col items-center md:right-16">
            <div className="h-32 w-px bg-gold/40" />
            <div className="animate-sway origin-top" style={{ animationDelay: "1s" }}>
              <Bell />
            </div>
          </div>

          {/* rotating mandala */}
          <motion.img
            src={ganesha}
            alt="Lord Ganesha blessing"
            initial={{ scale: 0.6, opacity: 0, rotate: -8 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 2.2, ease: "easeOut" }}
            className="animate-glow relative z-10 h-[320px] w-[320px] object-contain sm:h-[420px] sm:w-[420px]"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 1.4 }}
            className="relative z-10 mt-6 text-center"
          >
            <p className="font-serif text-2xl text-wine sm:text-3xl">
              ॥ श्री गणेशाय नमः ॥
            </p>
            <p className="mt-2 font-display text-xs uppercase tracking-[0.45em] text-gold">
              With the blessings of Lord Ganesha
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.8, duration: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpen}
            className="relative z-10 mt-10 overflow-hidden rounded-full bg-royal px-10 py-4 font-display text-sm uppercase tracking-[0.35em] text-ivory shadow-royal ring-1 ring-gold/60 transition-shadow hover:shadow-gold-glow"
          >
            <span className="relative z-10">Open Invitation</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold/40 to-transparent transition-transform duration-[1500ms] hover:translate-x-full" />
          </motion.button>

          {/* floating particles */}
          <Particles />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Bell() {
  return (
    <svg viewBox="0 0 40 60" className="h-16 w-10 text-gold drop-shadow-md" fill="currentColor">
      <path d="M20 6 C 10 10, 6 22, 6 36 L 34 36 C 34 22, 30 10, 20 6 Z" opacity=".9" />
      <rect x="6" y="36" width="28" height="4" rx="2" />
      <circle cx="20" cy="46" r="4" />
      <line x1="20" y1="40" x2="20" y2="46" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function Particles() {
  return (
    <div className="pointer-events-none absolute inset-0">
      {Array.from({ length: 30 }).map((_, i) => (
        <span
          key={i}
          className="animate-petal absolute block h-1.5 w-1.5 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            background: "color-mix(in oklab, var(--gold) 80%, white)",
            boxShadow: "0 0 8px color-mix(in oklab, var(--gold) 80%, transparent)",
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${10 + Math.random() * 14}s`,
          }}
        />
      ))}
    </div>
  );
}
