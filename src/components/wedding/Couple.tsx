import { motion } from "motion/react";
import { Divider } from "./Divider";

export function Couple() {
  return (
    <section className="relative overflow-hidden px-6 py-24" style={{
      background: "linear-gradient(180deg, #1a0a14 0%, #2a0f1d 100%)",
    }}>
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, #c9a35a 1px, transparent 0)",
        backgroundSize: "30px 30px",
      }} />

      <div className="relative mx-auto max-w-4xl text-center">
        <p className="font-display text-xs uppercase tracking-[0.5em] text-[#e8b450]">Together</p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-3 font-script text-6xl text-ivory sm:text-7xl"
          style={{ textShadow: "0 0 40px rgba(232,180,80,0.25)" }}
        >
          Our Journey <span style={{
            background: "linear-gradient(180deg, #f4d98a, #c9a35a)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>Begins</span>
        </motion.h2>
        <Divider />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative mx-auto mt-10 aspect-[5/3] w-full max-w-2xl"
        >
          {/* Luxury frame */}
          <div className="relative h-full w-full overflow-hidden"
            style={{
              border: "3px solid #c9a35a",
              boxShadow: "0 30px 80px -20px rgba(0,0,0,0.6), 0 0 0 10px #1a0a14, 0 0 0 12px #c9a35a, inset 0 0 60px rgba(201,163,90,0.15)",
              background: "radial-gradient(ellipse at center, #5a1228 0%, #2a0f1d 100%)",
            }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <span className="font-script text-[8rem] leading-none"
                  style={{
                    background: "linear-gradient(180deg, #f4d98a, #c9a35a)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}>A &amp; P</span>
              </div>
            </div>
            {/* Floral corner animations */}
            {(["tl", "tr", "bl", "br"] as const).map((c) => (
              <FloralCorner key={c} corner={c} />
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mx-auto mt-10 max-w-2xl font-serif text-xl italic text-ivory/85"
        >
          "In each other's hearts, we have found a home. In each other's dreams, we have found a future."
        </motion.p>
      </div>
    </section>
  );
}

function FloralCorner({ corner }: { corner: "tl" | "tr" | "bl" | "br" }) {
  const pos = {
    tl: "left-2 top-2",
    tr: "right-2 top-2 -scale-x-100",
    bl: "left-2 bottom-2 -scale-y-100",
    br: "right-2 bottom-2 -scale-100",
  }[corner];
  return (
    <svg viewBox="0 0 60 60" className={`absolute ${pos} h-12 w-12 animate-sway`} fill="none" stroke="#c9a35a" strokeWidth="1.2">
      <path d="M5 5 Q20 10 25 25 Q10 20 5 5" fill="#c9a35a" fillOpacity="0.3" />
      <circle cx="14" cy="14" r="3" fill="#e8b450" />
      <path d="M5 5 L20 20" />
      <circle cx="22" cy="22" r="1.5" fill="#f5d9a8" />
    </svg>
  );
}
