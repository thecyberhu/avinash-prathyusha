import { motion } from "motion/react";

export function Finale() {
  const particles = Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    left: (i * 31 + 17) % 100,
    delay: ((i * 23) % 150) / 10,
    duration: 15 + ((i * 29) % 150) / 10,
  }));

  return (
    <footer className="relative overflow-hidden px-6 py-28" style={{
      background: "radial-gradient(ellipse at center, #5a1228 0%, #1a0309 100%)",
    }}>
      {/* Golden light particles */}
      <div className="pointer-events-none absolute inset-0">
        {particles.map((particle, i) => (
          <span
            key={particle.id}
            className="absolute block animate-petal"
            style={{
              left: `${particle.left}%`,
              width: 4 + (i % 4),
              height: 4 + (i % 4),
              borderRadius: i % 2 ? "50%" : "40% 60% 60% 40%",
              background: i % 3 === 0 ? "#f5d9a8" : "#e8b450",
              boxShadow: "0 0 10px #c9a35a",
              opacity: 0.7,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#c9a35a]/70 bg-[#1a0309]/40 backdrop-blur"
          style={{ boxShadow: "0 0 40px rgba(201,163,90,0.4)" }}
        >
          <span className="font-script text-5xl"
            style={{
              background: "linear-gradient(180deg, #f4d98a, #c9a35a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>A &amp; P</span>
        </motion.div>

        <p className="mt-8 font-display text-xs uppercase tracking-[0.5em] text-[#e8b450]">Thank You</p>
        <h2 className="mt-2 font-script text-5xl text-ivory sm:text-6xl"
          style={{ textShadow: "0 0 40px rgba(232,180,80,0.3)" }}>
          For Being A Part Of Our Celebration
        </h2>

        <div className="mt-10 space-y-1 font-serif text-2xl text-ivory">
          <p>Nidamanuri Avinash</p>
          <p className="text-3xl text-[#e8b450]">❤</p>
          <p>Bheemavarapu Sai Prathyusha</p>
        </div>

        <div className="mt-10 flex flex-col items-center gap-1 font-display text-[0.7rem] uppercase tracking-[0.45em] text-[#c9a35a]">
          <p>Wedding Day</p>
          <p className="text-ivory">03 July 2026</p>
          <p className="mt-2">📍 Ongole, Andhra Pradesh</p>
        </div>

        <p className="mt-10 font-serif text-lg italic text-ivory/80">
          "Together with our families, we eagerly await your gracious presence and blessings."
        </p>

        <p className="mt-8 font-script text-3xl"
          style={{
            background: "linear-gradient(180deg, #f4d98a, #c9a35a)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
          See You At The Wedding ✨
        </p>

        <p className="mt-12 font-display text-[0.55rem] uppercase tracking-[0.5em] text-ivory/40">
          © 2026 · Avinash &amp; Sai Prathyusha
        </p>
         <p className="mt-12 font-display text-[0.55rem] uppercase tracking-[0.5em] text-ivory/40">
           Created By NIDAMANURI CHANDANA
        </p>
      </div>
    </footer>
  );
}
