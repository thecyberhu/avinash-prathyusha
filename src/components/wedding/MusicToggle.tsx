import { useEffect, useRef, useState } from "react";

export function MusicToggle() {
  const [playing, setPlaying] = useState(false);
  const ref = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    ref.current = new Audio(
      "https://cdn.pixabay.com/audio/2022/10/30/audio_64de0d4f02.mp3",
    );
    ref.current.loop = true;
    ref.current.volume = 0.35;
    return () => ref.current?.pause();
  }, []);

  const toggle = () => {
    if (!ref.current) return;
    if (playing) ref.current.pause();
    else ref.current.play().catch(() => {});
    setPlaying(!playing);
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
