import { motion, AnimatePresence } from "motion/react";
import { useRef, useState, useEffect, useCallback } from "react";
import { Divider } from "./Divider";
import coupleAsset from "@/assets/couple.webp";

export function Couple() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [scratching, setScratching] = useState(false);
  const [showFlowers, setShowFlowers] = useState(false);
  const lastPt = useRef<{ x: number; y: number } | null>(null);

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    // Paint the A&P cover
    const grad = ctx.createRadialGradient(
      canvas.width / 2, canvas.height / 2, 20,
      canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 1.2
    );
    grad.addColorStop(0, "#5a1228");
    grad.addColorStop(1, "#2a0f1d");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Gold inner border
    ctx.strokeStyle = "#c9a35a";
    ctx.lineWidth = 2;
    ctx.strokeRect(16, 16, canvas.width - 32, canvas.height - 32);
    ctx.lineWidth = 1;
    ctx.strokeRect(24, 24, canvas.width - 48, canvas.height - 48);

    // A & P text
    ctx.font = `bold ${Math.min(canvas.width, canvas.height) * 0.35}px "Great Vibes", cursive`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    const textGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
    textGrad.addColorStop(0, "#f4d98a");
    textGrad.addColorStop(1, "#c9a35a");
    ctx.fillStyle = textGrad;
    ctx.fillText("A & P", canvas.width / 2, canvas.height / 2);

    // Hint
    ctx.font = `${Math.max(10, canvas.width * 0.018)}px "Inter", sans-serif`;
    ctx.fillStyle = "#e8b450";
    ctx.fillText("✨  Scratch the image  ✨", canvas.width / 2, canvas.height - 40);

    ctx.globalCompositeOperation = "destination-out";
  }, []);

  useEffect(() => {
    initCanvas();
    const onResize = () => {
      if (!revealed) initCanvas();
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [initCanvas, revealed]);

  const getPos = (e: React.PointerEvent) => {
    const rect = canvasRef.current!.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const scratchAt = (x: number, y: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    if (lastPt.current) {
      ctx.lineWidth = 50;
      ctx.lineCap = "round";
      ctx.moveTo(lastPt.current.x, lastPt.current.y);
      ctx.lineTo(x, y);
      ctx.stroke();
    }
    ctx.arc(x, y, 28, 0, Math.PI * 2);
    ctx.fill();
    lastPt.current = { x, y };
  };

  const checkReveal = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const { width, height } = canvas;
    const sample = ctx.getImageData(0, 0, width, height).data;
    let cleared = 0;
    const step = 40;
    let total = 0;
    for (let i = 3; i < sample.length; i += 4 * step) {
      total++;
      if (sample[i] === 0) cleared++;
    }
    if (cleared / total > 0.45) {
      setRevealed(true);
      setShowFlowers(true);
      setTimeout(() => setShowFlowers(false), 4500);
    }
  };

  const onDown = (e: React.PointerEvent) => {
    if (revealed) return;
    setScratching(true);
    const { x, y } = getPos(e);
    lastPt.current = { x, y };
    scratchAt(x, y);
  };
  const onMove = (e: React.PointerEvent) => {
    if (!scratching || revealed) return;
    const { x, y } = getPos(e);
    scratchAt(x, y);
  };
  const onUp = () => {
    if (!scratching) return;
    setScratching(false);
    lastPt.current = null;
    checkReveal();
  };

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
          <div className="relative h-full w-full overflow-hidden"
            style={{
              border: "3px solid #c9a35a",
              boxShadow: "0 30px 80px -20px rgba(0,0,0,0.6), 0 0 0 10px #1a0a14, 0 0 0 12px #c9a35a, inset 0 0 60px rgba(201,163,90,0.15)",
            }}>
            {/* Couple image underneath */}
            <img
              src={coupleAsset}
              alt="Avinash & Sai Prathyusha"
              className="absolute inset-0 h-full w-full object-cover"
              draggable={false}
            />
            {/* Scratch canvas overlay */}
            <canvas
              ref={canvasRef}
              onPointerDown={onDown}
              onPointerMove={onMove}
              onPointerUp={onUp}
              onPointerLeave={onUp}
              className={`absolute inset-0 h-full w-full touch-none ${revealed ? "pointer-events-none opacity-0 transition-opacity duration-700" : "cursor-grab active:cursor-grabbing"}`}
            />
            {/* Floral corners */}
            {(["tl", "tr", "bl", "br"] as const).map((c) => (
              <FloralCorner key={c} corner={c} />
            ))}

            {/* Flower shower */}
            <AnimatePresence>
              {showFlowers && (
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                  {Array.from({ length: 40 }).map((_, i) => (
                    <FlowerPetal key={i} index={i} />
                  ))}
                </div>
              )}
            </AnimatePresence>
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
    <svg viewBox="0 0 60 60" className={`pointer-events-none absolute ${pos} h-12 w-12 animate-sway`} fill="none" stroke="#c9a35a" strokeWidth="1.2">
      <path d="M5 5 Q20 10 25 25 Q10 20 5 5" fill="#c9a35a" fillOpacity="0.3" />
      <circle cx="14" cy="14" r="3" fill="#e8b450" />
      <path d="M5 5 L20 20" />
      <circle cx="22" cy="22" r="1.5" fill="#f5d9a8" />
    </svg>
  );
}

function FlowerPetal({ index }: { index: number }) {
  const left = (index * 53) % 100;
  const delay = (index % 10) * 0.12;
  const duration = 3 + ((index * 7) % 20) / 10;
  const rotate = (index * 47) % 360;
  const colors = ["#ff7aa2", "#ffb27a", "#f4d98a", "#ffd1dc", "#ff5577", "#e8b450"];
  const color = colors[index % colors.length];
  const size = 12 + (index % 4) * 4;
  return (
    <motion.div
      initial={{ y: -40, x: 0, opacity: 0, rotate: 0 }}
      animate={{ y: "120%", x: ((index % 2 === 0 ? 1 : -1) * (index % 30)), opacity: [0, 1, 1, 0], rotate: rotate + 360 }}
      transition={{ duration, delay, ease: "easeIn" }}
      className="absolute"
      style={{ left: `${left}%`, top: 0 }}
    >
      <svg width={size} height={size} viewBox="0 0 24 24">
        <g fill={color}>
          <ellipse cx="12" cy="6" rx="3" ry="5" />
          <ellipse cx="12" cy="18" rx="3" ry="5" />
          <ellipse cx="6" cy="12" rx="5" ry="3" />
          <ellipse cx="18" cy="12" rx="5" ry="3" />
        </g>
        <circle cx="12" cy="12" r="2.2" fill="#fff3b0" />
      </svg>
    </motion.div>
  );
}
