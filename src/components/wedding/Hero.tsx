import { motion } from "motion/react";
import { useEffect, useState } from "react";
import hero from "@/assets/hero-section.webp";

export function Hero() {
  // Subtle parallax
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY * 0.25);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#1a0a14]">
      {/* Background with parallax */}
      <div className="absolute inset-0" style={{ transform: `translate3d(0, ${y}px, 0)` }}>
        <img
          src={hero}
          loading="lazy"
           decoding="async"
          alt="Sri Venkateswara Swamy Temple, Tirumala"
          className="h-[115%] w-full object-cover object-center opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0a14]/40 via-transparent to-[#1a0a14]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a14]/85 via-transparent to-[#1a0a14]/30" />
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse at center, transparent 25%, rgba(26,10,20,0.75) 100%)",
        }} />
      </div>

      {/* Floating gold particles */}
      <div className="pointer-events-none absolute inset-0 z-10">
        {Array.from({ length: 30 }).map((_, i) => (
          <span
            key={i}
            className="absolute block rounded-full animate-shimmer"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
              width: 2 + (i % 3),
              height: 2 + (i % 3),
              background: "#e8b450",
              boxShadow: "0 0 8px #c9a35a",
              opacity: 0.6,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      {/* Top ornamental frame */}
      <div className="absolute left-0 right-0 top-0 z-20 flex justify-center pt-6">
        <svg viewBox="0 0 400 40" className="h-10 w-[80%] max-w-2xl">
          <g stroke="#c9a35a" strokeWidth="1" fill="none">
            <line x1="0" y1="20" x2="160" y2="20" />
            <line x1="240" y1="20" x2="400" y2="20" />
          </g>
          <g fill="#c9a35a">
            <circle cx="160" cy="20" r="2" />
            <circle cx="240" cy="20" r="2" />
            <path d="M200 8 L208 20 L200 32 L192 20 Z" />
            <circle cx="200" cy="20" r="2" fill="#1a0a14" />
          </g>
        </svg>
      </div>

      <div className="relative z-20 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-end px-6 pb-16 pt-24 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="font-display text-[0.6rem] uppercase tracking-[0.7em] text-[#e8b450] sm:text-xs"
          style={{ textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}
        >
          ✦  The Wedding Of  ✦
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1.4, ease: "easeOut" }}
          className="mt-6 flex flex-col items-center gap-2 sm:gap-3"
        >
          <h1
            className="font-script text-4xl leading-none text-ivory sm:text-6xl md:text-7xl"
            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.6), 0 0 60px rgba(232,180,80,0.3)" }}
          >
            Nidamanuri Avinash
          </h1>
          <span
            className="font-script-alt text-5xl leading-none sm:text-7xl"
            style={{
              background: "linear-gradient(180deg, #f4d98a 0%, #c9a35a 50%, #a8842e 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 0 20px rgba(232,180,80,0.4))",
            }}
          >
            &amp;
          </span>
          <h1
            className="font-script text-4xl leading-none text-ivory sm:text-6xl md:text-7xl"
            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.6), 0 0 60px rgba(232,180,80,0.3)" }}
          >
            Bheemavarapu Sai Prathyusha
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-6 flex items-center gap-3"
        >
          <span className="block h-px w-16 bg-gradient-to-r from-transparent to-[#c9a35a] sm:w-28" />
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="#c9a35a">
            <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" />
          </svg>
          <span className="font-display text-[0.55rem] uppercase tracking-[0.5em] text-[#c9a35a] sm:text-[0.7rem]">
            Two Souls · One Journey
          </span>
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="#4e3b17">
            <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" />
          </svg>
          <span className="block h-px w-16 bg-gradient-to-l from-transparent to-[#c9a35a] sm:w-28" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-6 max-w-xl font-serif text-base italic text-ivory/90 sm:text-lg"
          style={{ textShadow: "0 2px 12px rgba(0,0,0,0.7)" }}
        >
          ✨Avinash ❤️ Prathyusha — A love written by destiny, celebrated for eternity.✨
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.9, duration: 1 }}
          className="mt-5 font-display text-[0.6rem] uppercase tracking-[0.4em] text-[#e8b450] sm:text-xs"
        >
          Marine Engineer &nbsp;❤&nbsp; MBBS (MD)
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="mt-8 inline-flex items-center gap-3 rounded-sm border border-[#c9a35a]/50 px-6 py-2 backdrop-blur-sm"
          style={{ background: "rgba(26,10,20,0.4)" }}
        >
          <span className="font-display text-[0.6rem] uppercase tracking-[0.4em] text-[#e8b450]">03 · 07 · 2026</span>
          <span className="h-3 w-px bg-[#c9a35a]/50" />
          <span className="font-serif text-xs italic text-ivory/80">📍 Ongole, Andhra Pradesh</span>
        </motion.div>
      </div>
    </section>
  );
}
