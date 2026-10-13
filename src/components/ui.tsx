import type { ReactNode } from "react";

// Peças pequenas reaproveitadas nas duas páginas.

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-mute">
      <span className="h-1.5 w-1.5 rounded-full bg-paper" aria-hidden />
      {children}
    </p>
  );
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-colors";

export function PrimaryLink({ href, children, external }: { href: string; children: ReactNode; external?: boolean }) {
  return (
    <a
      href={href}
      className={`${base} bg-paper text-ink hover:bg-paper/80`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

export function SecondaryLink({ href, children, external }: { href: string; children: ReactNode; external?: boolean }) {
  return (
    <a
      href={href}
      className={`${base} border border-paper/40 text-paper hover:border-paper`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

export function Section({ id, className = "", children }: { id?: string; className?: string; children: ReactNode }) {
  return (
    <section id={id} className={`px-5 py-24 md:py-32 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export function VimeoBackground({ vimeoId }: { vimeoId: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      <iframe
        src={`https://player.vimeo.com/video/${vimeoId}?background=1&autoplay=1&loop=1&muted=1&quality=1080p`}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2"
        allow="autoplay; fullscreen"
        title="Vídeo de fundo"
        tabIndex={-1}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/50 to-ink" />
    </div>
  );
}
