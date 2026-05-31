import { useEffect, useState } from "react";
import { motion } from "motion/react";
import bgImage from "@/assets/save-the-date-bg.png";

const TARGET = new Date("2026-08-25T06:45:00+05:30").getTime();

function useCountdown() {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, TARGET - now);
  return {
    d: Math.floor(diff / 86400000),
    h: Math.floor((diff / 3600000) % 24),
    m: Math.floor((diff / 60000) % 60),
    s: Math.floor((diff / 1000) % 60),
  };
}

export function SaveTheDate() {
  const { d, h, m, s } = useCountdown();
  const cells = [
    { label: "Days", value: d },
    { label: "Hours", value: h },
    { label: "Minutes", value: m },
    { label: "Seconds", value: s },
  ];

  return (
    <section className="relative px-4 py-16 sm:px-6 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
        className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-sm shadow-royal"
        style={{ aspectRatio: "4 / 3" }}
      >
        {/* Background art */}
        <img
          src={bgImage}
          alt="Royal Telugu Save the Date frame"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Content overlay positioned to match the central arch */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-[28%] text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex w-full flex-col items-center"
          >
            <p
              className="font-display text-[0.55rem] uppercase tracking-[0.5em] sm:text-xs"
              style={{ color: "#a8842e" }}
            >
              Save the Date
            </p>
            <h2
              className="mt-2 font-serif text-2xl leading-tight sm:text-4xl md:text-5xl lg:text-6xl"
              style={{ color: "#5a1228" }}
            >
              August 25<span style={{ color: "#a8842e" }}>,</span> 2026
            </h2>
            <p
              className="mt-1 font-serif text-sm italic sm:text-xl md:text-2xl"
              style={{ color: "#c97b83" }}
            >
              Muhurtham · 6:45 AM
            </p>

            <div className="my-3 flex items-center justify-center gap-2 sm:my-5">
              <span className="block h-px w-8 sm:w-16" style={{ background: "linear-gradient(to right, transparent, #c9a35a)" }} />
              <span className="text-[10px]" style={{ color: "#c9a35a" }}>◆</span>
              <span className="block h-px w-8 sm:w-16" style={{ background: "linear-gradient(to left, transparent, #c9a35a)" }} />
            </div>

            <div className="grid w-full grid-cols-4 gap-1 sm:gap-3">
              {cells.map((c) => (
                <div
                  key={c.label}
                  className="rounded-sm border px-1 py-1.5 backdrop-blur-sm sm:py-3"
                  style={{
                    background: "rgba(255, 248, 235, 0.55)",
                    borderColor: "#c9a35a",
                    boxShadow: "0 0 12px rgba(201, 163, 90, 0.25)",
                  }}
                >
                  <div
                    className="font-serif text-base font-semibold sm:text-2xl md:text-3xl"
                    style={{ color: "#5a1228" }}
                  >
                    {String(c.value).padStart(2, "0")}
                  </div>
                  <div
                    className="font-display text-[0.45rem] uppercase tracking-[0.2em] sm:text-[0.6rem]"
                    style={{ color: "#a8842e" }}
                  >
                    {c.label}
                  </div>
                </div>
              ))}
            </div>

            <p
              className="mt-4 font-serif text-[0.6rem] italic sm:mt-8 sm:text-sm md:text-base"
              style={{ color: "#5a1228" }}
            >
              Sri Venkateswara Kalyana Mandapam
              <br />
              Tirupati, Andhra Pradesh
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
