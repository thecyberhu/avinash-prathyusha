import { useState } from "react";
import { motion } from "motion/react";
import { Divider } from "./Divider";

export function Rsvp() {
  const [sent, setSent] = useState(false);
  return (
    <section className="relative bg-[color-mix(in_oklab,var(--champagne)_45%,var(--ivory))] px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <header className="text-center">
          <p className="font-display text-xs uppercase tracking-[0.5em] text-gold">RSVP &amp; Blessings</p>
          <h2 className="mt-3 font-script text-6xl text-wine sm:text-7xl">Send Your Love</h2>
          <Divider />
        </header>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="ornament-border space-y-5 bg-ivory p-8 shadow-royal sm:p-12"
        >
          <Field label="Your Name">
            <input required type="text" className={input} placeholder="Sri / Smt. ..." />
          </Field>
          <Field label="Will you attend?">
            <select className={input} defaultValue="yes">
              <option value="yes">Yes, with joy</option>
              <option value="no">Sending blessings from afar</option>
            </select>
          </Field>
          <Field label="Guests">
            <input type="number" min={1} max={10} defaultValue={2} className={input} />
          </Field>
          <Field label="Your Blessings">
            <textarea
              rows={4}
              className={input}
              placeholder="A wish for the couple..."
            />
          </Field>

          <button
            type="submit"
            disabled={sent}
            className="w-full overflow-hidden rounded-full bg-royal px-8 py-4 font-display text-xs uppercase tracking-[0.4em] text-ivory shadow-royal ring-1 ring-gold/50 transition hover:shadow-gold-glow disabled:opacity-70"
          >
            {sent ? "Blessings Received · Thank You" : "Send Blessings"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}

const input =
  "w-full rounded-sm border border-gold/40 bg-ivory px-4 py-3 font-serif text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block font-display text-[0.65rem] uppercase tracking-[0.35em] text-gold">
        {label}
      </span>
      {children}
    </label>
  );
}
