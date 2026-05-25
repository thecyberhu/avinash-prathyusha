import { motion } from "motion/react";
import hero from "@/assets/hero-couple.jpg";
import { Divider } from "./Divider";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Sreekar and Ananya in traditional Telugu wedding attire before a temple at sunrise"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ivory/30 via-transparent to-ivory" />
        <div className="absolute inset-0 bg-gradient-to-t from-wine/30 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-end px-6 pb-20 pt-32 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="font-display text-xs uppercase tracking-[0.5em] text-gold drop-shadow"
        >
          The Wedding of
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1.6, ease: "easeOut" }}
          className="font-script mt-2 text-7xl leading-none text-ivory drop-shadow-lg sm:text-8xl md:text-[10rem]"
          style={{ textShadow: "0 4px 30px rgba(0,0,0,0.4)" }}
        >
          Sreekar <span className="text-gold">&</span> Ananya
        </motion.h1>

        <Divider label="Two Souls · One Journey" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="max-w-xl font-serif text-lg italic text-ivory/95 sm:text-xl"
          style={{ textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}
        >
          Two hearts, one sacred journey blessed for eternity.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="mt-6 font-display text-[0.7rem] uppercase tracking-[0.4em] text-ivory/80"
        >
          Together with their beloved families ·
          Sri &amp; Smt. Rao &nbsp;·&nbsp; Sri &amp; Smt. Reddy
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 1 }}
          className="mt-16"
        >
          <div className="mx-auto h-12 w-px bg-gradient-to-b from-gold to-transparent" />
          <p className="mt-2 font-display text-[0.6rem] uppercase tracking-[0.5em] text-gold">
            Scroll
          </p>
        </motion.div>
      </div>
    </section>
  );
}
