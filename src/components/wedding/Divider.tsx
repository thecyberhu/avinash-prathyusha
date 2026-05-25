export function Divider({ label }: { label?: string }) {
  return (
    <div className="my-10 flex items-center justify-center gap-4">
      <span className="block h-px w-16 bg-gradient-to-r from-transparent to-gold sm:w-32" />
      <svg
        viewBox="0 0 64 64"
        className="h-10 w-10 text-gold"
        fill="currentColor"
        aria-hidden
      >
        <path d="M32 8 C 38 20, 50 22, 56 32 C 50 42, 38 44, 32 56 C 26 44, 14 42, 8 32 C 14 22, 26 20, 32 8 Z" opacity=".25"/>
        <circle cx="32" cy="32" r="4" />
        <circle cx="32" cy="14" r="1.6" />
        <circle cx="32" cy="50" r="1.6" />
        <circle cx="14" cy="32" r="1.6" />
        <circle cx="50" cy="32" r="1.6" />
      </svg>
      {label ? (
        <span className="font-display text-xs uppercase tracking-[0.4em] text-gold">
          {label}
        </span>
      ) : null}
      <svg
        viewBox="0 0 64 64"
        className="h-10 w-10 text-gold"
        fill="currentColor"
        aria-hidden
      >
        <path d="M32 8 C 38 20, 50 22, 56 32 C 50 42, 38 44, 32 56 C 26 44, 14 42, 8 32 C 14 22, 26 20, 32 8 Z" opacity=".25"/>
        <circle cx="32" cy="32" r="4" />
      </svg>
      <span className="block h-px w-16 bg-gradient-to-l from-transparent to-gold sm:w-32" />
    </div>
  );
}
