import type { ReactNode } from "react";

// Peças pequenas reaproveitadas nas duas páginas.

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-medium uppercase tracking-[0.14em] text-ink-muted">{children}</p>
  );
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm px-7 py-3.5 text-sm font-semibold transition-colors";

export function PrimaryLink({ href, children, external }: { href: string; children: ReactNode; external?: boolean }) {
  return (
    <a
      href={href}
      className={`${base} bg-ink text-ink-inverse hover:bg-ink-muted`}
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
      className={`${base} border border-line-strong text-ink hover:border-ink`}
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
      {/* Véu do design system (scrim 55%) e fade para o fundo no pé, pra emendar com a próxima seção. */}
      <div className="absolute inset-0 bg-scrim" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-ground" />
    </div>
  );
}
