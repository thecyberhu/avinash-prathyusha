import { useEffect, useRef, useState } from "react";

export function MusicToggle() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = document.getElementById("global-audio") as HTMLAudioElement | null;
    const a = audioRef.current;
    if (a) {
      a.volume = 0.35;
      // Start muted to comply with autoplay policies
      a.muted = true;
      a.play().catch(() => {});
      setPlaying(true);

      // Unmute on first user interaction and resume audible playback
      const onUserInteract = () => {
        if (a.muted) {
          a.muted = false;
          a.volume = 0.35;
          a.play().catch(() => {});
        }
        window.removeEventListener("pointerdown", onUserInteract);
      };

      window.addEventListener("pointerdown", onUserInteract, { once: true });
    }
    return () => {
      // leave the global audio running across navigations
    };
  }, []);

  const toggle = () => {
    const a = audioRef.current || (document.getElementById("global-audio") as HTMLAudioElement | null);
    if (!a) return;
    if (a.paused) {
      a.muted = false;
      a.play().catch(() => {});
      setPlaying(true);
    } else {
      a.pause();
      setPlaying(false);
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label={playing ? "Pause music" : "Play music"}
      className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-royal text-gold shadow-royal ring-1 ring-gold/60 transition hover:shadow-gold-glow"
    >
      {playing ? (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
          <rect x="6" y="5" width="4" height="14" rx="1" />
          <rect x="14" y="5" width="4" height="14" rx="1" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className={`h-5 w-5 ${playing ? "" : "animate-pulse"}`} fill="currentColor">
          <path d="M8 5v14l11-7z" />
        </svg>
      )}
    </button>
  );
}
