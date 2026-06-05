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
        {/* Namaste medallion */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative mx-auto h-36 w-36 sm:h-44 sm:w-44"
        >
          {/* Outer rotating mandala ring */}
          <svg
            viewBox="0 0 200 200"
            className="absolute inset-0 h-full w-full"
            style={{ animation: "spin 60s linear infinite" }}
          >
            <defs>
              <radialGradient id="namasteGlow" cx="0.5" cy="0.5">
                <stop offset="0%" stopColor="#e8b450" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#e8b450" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="100" cy="100" r="95" fill="url(#namasteGlow)" />
            <circle cx="100" cy="100" r="88" fill="none" stroke="#c9a35a" strokeWidth="1" />
            <circle cx="100" cy="100" r="78" fill="none" stroke="#c9a35a" strokeWidth="0.6" strokeDasharray="2 4" />
            {/* petals */}
            {Array.from({ length: 16 }).map((_, i) => (
              <g key={i} transform={`rotate(${i * 22.5} 100 100)`}>
                <ellipse cx="100" cy="18" rx="3" ry="8" fill="#c9a35a" opacity="0.85" />
                <circle cx="100" cy="6" r="1.6" fill="#e8b450" />
              </g>
            ))}
            {/* inner ring */}
            <circle cx="100" cy="100" r="60" fill="none" stroke="#e8b450" strokeWidth="0.8" />
            {Array.from({ length: 24 }).map((_, i) => (
              <circle key={i} cx="100" cy="40" r="1" fill="#e8b450"
                transform={`rotate(${i * 15} 100 100)`} />
            ))}
          </svg>

          {/* Folded hands (namaste) */}
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 m-auto h-1/2 w-1/2"
          >
            <defs>
              <linearGradient id="handG" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f4d98a" />
                <stop offset="100%" stopColor="#c9a35a" />
              </linearGradient>
            </defs>
            {/* left hand */}
            <path
              d="M50 8 C44 8 40 14 39 22 L37 38 C36 44 33 48 30 52 C27 56 25 60 25 66 C25 78 32 88 42 90 L50 92 L50 8 Z"
              fill="url(#handG)" stroke="#8a6e2c" strokeWidth="0.6"
            />
            {/* right hand */}
            <path
              d="M50 8 C56 8 60 14 61 22 L63 38 C64 44 67 48 70 52 C73 56 75 60 75 66 C75 78 68 88 58 90 L50 92 L50 8 Z"
              fill="url(#handG)" stroke="#8a6e2c" strokeWidth="0.6"
            />
            {/* center seam */}
            <line x1="50" y1="10" x2="50" y2="90" stroke="#8a6e2c" strokeWidth="0.5" opacity="0.7" />
            {/* tiny tilak */}
            <circle cx="50" cy="22" r="1.4" fill="#7a1e3a" />
          </svg>
        </motion.div>


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
