import { motion } from "motion/react";
import { Divider } from "./Divider";

export function Blessings() {
  return (
    <section className="relative overflow-hidden px-6 py-24" style={{
      background: "linear-gradient(180deg, #2a0f1d 0%, #1a0a14 100%)",
    }}>
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, #c9a35a 1px, transparent 0)",
        backgroundSize: "30px 30px",
      }} />

      <div className="relative mx-auto max-w-3xl text-center">
        {/* Temple bell */}
        <motion.svg
          initial={{ rotate: -8 }}
          animate={{ rotate: 8 }}
          transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          viewBox="0 0 60 80"
          className="mx-auto h-20 w-20"
          style={{ transformOrigin: "30px 5px" }}
        >
          <line x1="30" y1="0" x2="30" y2="12" stroke="#c9a35a" strokeWidth="1.5" />
          <path d="M30 12 Q14 14 14 38 Q14 56 10 60 L50 60 Q46 56 46 38 Q46 14 30 12 Z"
            fill="url(#bell)" stroke="#e8b450" strokeWidth="1.2" />
          <ellipse cx="30" cy="60" rx="22" ry="3" fill="#c9a35a" />
          <circle cx="30" cy="68" r="3" fill="#e8b450" />
          <defs>
            <linearGradient id="bell" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e8b450" />
              <stop offset="100%" stopColor="#8a6e2c" />
            </linearGradient>
          </defs>
        </motion.svg>

        <p className="mt-6 font-display text-xs uppercase tracking-[0.5em] text-[#e8b450]">With Folded Hands</p>
        <h2 className="mt-3 font-script text-6xl text-ivory sm:text-7xl"
          style={{ textShadow: "0 0 40px rgba(232,180,80,0.25)" }}>
          Seeking Your <span style={{
            background: "linear-gradient(180deg, #f4d98a, #c9a35a)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>Blessings</span>
        </h2>
        <Divider />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mx-auto mt-6 max-w-2xl font-serif text-xl italic text-ivory/85"
        >
          "With hearts full of gratitude and joy, we invite you to join us as we celebrate
          this sacred union. Your presence and blessings will make our special day truly
          unforgettable."
        </motion.p>
      </div>
    </section>
  );
}
