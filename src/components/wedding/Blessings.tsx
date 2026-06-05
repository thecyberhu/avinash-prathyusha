import { motion } from "motion/react";
import namasteMedallion from "@/assets/namaste-medallion.png";

export function Blessings() {
  return (
    <section className="relative overflow-hidden px-6 py-24" style={{
      background: "linear-gradient(180deg, #2a0f1d 0%, #1a0a14 100%)",
    }}>
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, #c9a35a 1px, transparent 0)",
        backgroundSize: "30px 30px",
      }} />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <motion.img
          src={namasteMedallion}
          alt="Seeking your blessings"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full max-w-md rounded-md"
          style={{
            boxShadow: "0 30px 80px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(201,163,90,0.25)",
          }}
          draggable={false}
        />
      </div>
    </section>
  );
}
