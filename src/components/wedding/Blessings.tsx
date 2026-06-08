import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const WHATSAPP_NUMBER = "919315942452";

type Blessing = {
  id: string;
  name: string;
  relationship: string | null;
  blessing: string;
  created_at: string;
};

export function Blessings() {
  const [scrollOpen, setScrollOpen] = useState(false);
  const [name, setName] = useState("");
  const [relationship, setRelationship] = useState("");
  const [blessing, setBlessing] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [sealed, setSealed] = useState(false);
  const [recent, setRecent] = useState<Blessing[]>([]);
  const [count, setCount] = useState(108);

  const fetchRecent = async () => {
    const { data, count: c } = await supabase
      .from("blessings")
      .select("*", { count: "exact" })
      .order("created_at", { ascending: false })
      .limit(6);
    if (data) setRecent(data as Blessing[]);
    if (typeof c === "number") setCount(108 + c);
  };

  useEffect(() => {
    fetchRecent();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !blessing.trim()) {
      toast.error("Please share your name and blessing.");
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.from("blessings").insert({
      name: name.trim().slice(0, 100),
      relationship: relationship.trim().slice(0, 100) || null,
      blessing: blessing.trim().slice(0, 1000),
    });
    setSubmitting(false);
    if (error) {
      toast.error("Could not seal your blessing. Try again.");
      return;
    }

    const msg = `🔔 NEW ROYAL BLESSING RECEIVED\n\n👤 Name:\n${name}\n\n🤝 Relationship:\n${relationship || "—"}\n\n💌 Blessing:\n${blessing}\n\n✨ Sent From Wedding Website`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");

    setSealed(true);
    fetchRecent();
  };

  const reset = () => {
    setSealed(false);
    setScrollOpen(false);
    setName("");
    setRelationship("");
    setBlessing("");
  };

  return (
    <section
      className="relative overflow-hidden px-4 py-24 sm:px-6"
      style={{ background: "linear-gradient(180deg, #2a0f1d 0%, #1a0a14 60%, #1a0a14 100%)" }}
    >
      {/* dotted gold pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #c9a35a 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* temple glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(232,180,80,0.35), transparent 60%)" }}
      />

      {/* floating particles */}
      <FloatingParticles />

      <div className="relative mx-auto max-w-3xl">
        {/* Centerpiece card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative rounded-[28px] p-[2px]"
          style={{
            background:
              "linear-gradient(135deg, #e8b450 0%, #8b6a2a 25%, #f4d98a 50%, #8b6a2a 75%, #e8b450 100%)",
            boxShadow: "0 40px 100px -20px rgba(0,0,0,0.7), 0 0 60px rgba(232,180,80,0.15)",
          }}
        >
          <div
            className="relative overflow-hidden rounded-[26px] px-6 py-12 sm:px-12 sm:py-16"
            style={{
              background:
                "radial-gradient(ellipse at top, #4a1828 0%, #2a0f1d 55%, #1a0a14 100%)",
            }}
          >
            {/* inner gold border */}
            <div
              className="pointer-events-none absolute inset-3 rounded-[20px] border opacity-50"
              style={{ borderColor: "rgba(232,180,80,0.4)" }}
            />
            {/* corner ornaments */}
            <CornerOrnaments />

            <div className="relative flex flex-col items-center text-center">
              {/* Divine icon */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <div
                  className="absolute inset-0 -m-6 rounded-full blur-2xl"
                  style={{ background: "radial-gradient(circle, rgba(232,180,80,0.5), transparent 70%)" }}
                />
                <NamasteIcon />
              </motion.div>

              <h2
                className="mt-6 font-script text-5xl sm:text-6xl"
                style={{
                  background: "linear-gradient(180deg, #f4d98a 0%, #e8b450 60%, #b8842e 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  textShadow: "0 2px 20px rgba(232,180,80,0.2)",
                }}
              >
                Leave a Royal Blessing
              </h2>

              <p
                className="mt-3 font-display text-[0.7rem] uppercase tracking-[0.45em] sm:text-xs"
                style={{ color: "#e8b450" }}
              >
                Your Blessings Are Our Greatest Gift
              </p>

              <div className="my-5 flex items-center gap-3">
                <span className="h-px w-12 sm:w-20" style={{ background: "linear-gradient(90deg, transparent, #c9a35a)" }} />
                <span className="text-[#e8b450]">✦</span>
                <span className="h-px w-12 sm:w-20" style={{ background: "linear-gradient(90deg, #c9a35a, transparent)" }} />
              </div>

              <p
                className="max-w-md font-serif text-base italic leading-relaxed sm:text-lg"
                style={{ color: "#e8d9b8" }}
              >
                Share your heartfelt wishes and become a cherished part of our sacred wedding journey.
              </p>

              {/* CTA */}
              <AnimatePresence mode="wait">
                {!scrollOpen && !sealed && (
                  <motion.button
                    key="cta"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setScrollOpen(true)}
                    className="group relative mt-8 overflow-hidden rounded-full px-10 py-4 font-display text-xs uppercase tracking-[0.4em] sm:text-sm"
                    style={{
                      background: "linear-gradient(180deg, #e8b450 0%, #b8842e 100%)",
                      color: "#2a0f1d",
                      boxShadow:
                        "0 10px 30px -10px rgba(232,180,80,0.6), inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -2px 0 rgba(0,0,0,0.2)",
                    }}
                  >
                    <span className="relative z-10">🪷 Open Royal Scroll</span>
                    <span
                      className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                    />
                  </motion.button>
                )}
              </AnimatePresence>

              {/* Scroll */}
              <AnimatePresence>
                {scrollOpen && !sealed && (
                  <motion.form
                    key="scroll"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, scaleY: 0, height: 0 }}
                    animate={{ opacity: 1, scaleY: 1, height: "auto" }}
                    exit={{ opacity: 0, scaleY: 0, height: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    style={{ originY: 0 }}
                    className="mt-8 w-full max-w-lg overflow-hidden"
                  >
                    <div
                      className="relative rounded-2xl p-[1.5px]"
                      style={{
                        background:
                          "linear-gradient(135deg, #e8b450, #8b6a2a, #f4d98a, #8b6a2a, #e8b450)",
                      }}
                    >
                      <div
                        className="relative rounded-2xl px-5 py-6 sm:px-8 sm:py-8"
                        style={{
                          background:
                            "linear-gradient(180deg, #f5e6c8 0%, #e8d2a0 100%)",
                          backgroundImage:
                            "radial-gradient(circle at 1px 1px, rgba(139,106,42,0.15) 1px, transparent 0), linear-gradient(180deg, #f5e6c8 0%, #e8d2a0 100%)",
                          backgroundSize: "20px 20px, auto",
                        }}
                      >
                        <p
                          className="mb-5 text-center font-script text-3xl"
                          style={{ color: "#5a1e2e" }}
                        >
                          Sacred Scroll
                        </p>

                        <Field label="Guest Name *">
                          <input
                            required
                            maxLength={100}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={scrollInput}
                            placeholder="Sri / Smt. ..."
                          />
                        </Field>
                        <Field label="Relationship to Couple">
                          <input
                            maxLength={100}
                            value={relationship}
                            onChange={(e) => setRelationship(e.target.value)}
                            className={scrollInput}
                            placeholder="Friend, Family, Mentor..."
                          />
                        </Field>
                        <Field label="Your Blessing *">
                          <textarea
                            required
                            maxLength={1000}
                            rows={4}
                            value={blessing}
                            onChange={(e) => setBlessing(e.target.value)}
                            className={scrollInput}
                            placeholder="A heartfelt wish for the couple..."
                          />
                        </Field>

                        <motion.button
                          type="submit"
                          disabled={submitting}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="relative mt-2 w-full overflow-hidden rounded-full px-6 py-3.5 font-display text-xs uppercase tracking-[0.4em] disabled:opacity-70"
                          style={{
                            background: "linear-gradient(180deg, #5a1e2e 0%, #3a0f1d 100%)",
                            color: "#f4d98a",
                            boxShadow:
                              "0 8px 24px -8px rgba(90,30,46,0.6), inset 0 0 0 1px rgba(232,180,80,0.5)",
                          }}
                        >
                          {submitting ? "Sealing..." : "✦ Seal Your Blessing ✦"}
                        </motion.button>

                        <button
                          type="button"
                          onClick={() => setScrollOpen(false)}
                          className="mt-3 w-full text-center font-display text-[0.6rem] uppercase tracking-[0.35em]"
                          style={{ color: "#8b6a2a" }}
                        >
                          Close Scroll
                        </button>
                      </div>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>

              {/* Success */}
              <AnimatePresence>
                {sealed && (
                  <motion.div
                    key="sealed"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative mt-8 flex flex-col items-center"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -45 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 180, damping: 14 }}
                      className="flex h-24 w-24 items-center justify-center rounded-full text-4xl"
                      style={{
                        background: "radial-gradient(circle at 30% 30%, #e8b450, #8b1a2a)",
                        boxShadow:
                          "0 0 40px rgba(232,180,80,0.5), inset 0 0 0 3px rgba(232,180,80,0.6), inset 0 -4px 8px rgba(0,0,0,0.4)",
                      }}
                    >
                      🙏
                    </motion.div>
                    <p
                      className="mt-5 font-script text-4xl"
                      style={{
                        background: "linear-gradient(180deg, #f4d98a, #e8b450)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                      }}
                    >
                      Your Blessing Has Been Sealed
                    </p>
                    <p className="mt-2 font-serif italic text-[#e8d9b8]">
                      And Delivered To The Couple
                    </p>
                    <p className="mt-4 font-display text-[0.65rem] uppercase tracking-[0.4em] text-[#e8b450]">
                      ✨ Thank You For Being Part Of Our Sacred Journey ✨
                    </p>
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="mt-6 rounded-full border px-5 py-2 font-display text-[0.65rem] uppercase tracking-[0.35em]"
                      style={{ borderColor: "rgba(232,180,80,0.5)", color: "#f4d98a" }}
                    >
                      🌸 Blessing #{count} Received
                    </motion.div>
                    <button
                      onClick={reset}
                      className="mt-5 font-display text-[0.6rem] uppercase tracking-[0.35em] text-[#c9a35a] hover:text-[#e8b450]"
                    >
                      Leave another blessing
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Recent blessings */}
        {recent.length > 0 && (
          <div className="mt-20">
            <h3
              className="text-center font-script text-4xl sm:text-5xl"
              style={{
                background: "linear-gradient(180deg, #f4d98a, #e8b450)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Recent Royal Blessings
            </h3>
            <div className="mt-3 flex justify-center">
              <span className="h-px w-24" style={{ background: "linear-gradient(90deg, transparent, #c9a35a, transparent)" }} />
            </div>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {recent.map((b, i) => (
                <motion.div
                  key={b.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.07 }}
                  className="rounded-xl p-[1px]"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(232,180,80,0.6), rgba(139,106,42,0.2), rgba(232,180,80,0.6))",
                  }}
                >
                  <div
                    className="h-full rounded-xl p-5 backdrop-blur-sm"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(74,24,40,0.7) 0%, rgba(42,15,29,0.7) 100%)",
                    }}
                  >
                    <p className="font-serif text-sm italic leading-relaxed text-[#f0e3c4]">
                      &ldquo;{b.blessing}&rdquo;
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      <span className="text-[#e8b450]">✦</span>
                      <p className="font-display text-[0.7rem] uppercase tracking-[0.25em] text-[#e8b450]">
                        {b.name}
                      </p>
                    </div>
                    {b.relationship && (
                      <p className="mt-1 font-serif text-xs text-[#c9a35a]/80">
                        {b.relationship}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

const scrollInput =
  "w-full rounded-md border-2 bg-white/40 px-4 py-2.5 font-serif text-[#3a0f1d] placeholder:text-[#8b6a2a]/60 focus:bg-white/70 focus:outline-none transition";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="mb-4 block">
      <span
        className="mb-1.5 block font-display text-[0.6rem] uppercase tracking-[0.35em]"
        style={{ color: "#5a1e2e" }}
      >
        {label}
      </span>
      <div style={{ borderColor: "#b8842e" }} className="[&>*]:border-[#b8842e]">
        {children}
      </div>
    </label>
  );
}

function NamasteIcon() {
  return (
    <svg width="84" height="84" viewBox="0 0 84 84" fill="none">
      <circle cx="42" cy="42" r="40" stroke="#e8b450" strokeWidth="1" opacity="0.5" />
      <circle cx="42" cy="42" r="34" stroke="#e8b450" strokeWidth="0.6" strokeDasharray="2 3" opacity="0.6" />
      <text x="42" y="55" textAnchor="middle" fontSize="36">🙏</text>
    </svg>
  );
}

function CornerOrnaments() {
  const c = "absolute h-10 w-10 sm:h-14 sm:w-14";
  const stroke = "#e8b450";
  const Svg = () => (
    <svg viewBox="0 0 56 56" fill="none">
      <path d="M2 20 V8 a6 6 0 0 1 6 -6 H20" stroke={stroke} strokeWidth="1.2" />
      <path d="M2 28 V12 a8 8 0 0 1 8 -8 H26" stroke={stroke} strokeWidth="0.7" opacity="0.6" />
      <circle cx="10" cy="10" r="1.5" fill={stroke} />
    </svg>
  );
  return (
    <>
      <div className={`${c} left-2 top-2`}><Svg /></div>
      <div className={`${c} right-2 top-2 rotate-90`}><Svg /></div>
      <div className={`${c} left-2 bottom-2 -rotate-90`}><Svg /></div>
      <div className={`${c} right-2 bottom-2 rotate-180`}><Svg /></div>
    </>
  );
}

function FloatingParticles() {
  const particles = Array.from({ length: 18 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((_, i) => {
        const left = (i * 53) % 100;
        const delay = (i % 7) * 0.8;
        const duration = 8 + (i % 5) * 2;
        const size = 3 + (i % 3);
        return (
          <motion.span
            key={i}
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "-10%", opacity: [0, 0.8, 0] }}
            transition={{ duration, delay, repeat: Infinity, ease: "linear" }}
            className="absolute rounded-full"
            style={{
              left: `${left}%`,
              width: size,
              height: size,
              background: "radial-gradient(circle, #f4d98a, transparent 70%)",
              boxShadow: "0 0 8px #e8b450",
            }}
          />
        );
      })}
    </div>
  );
}
