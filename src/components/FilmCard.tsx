import type { Film } from "@/lib/site";

export function FilmCard({ film, large = false }: { film: Film; large?: boolean }) {
  const rows = [
    ["O desafio", film.challenge],
    ["O que entregamos", film.delivered],
    ["Depois", film.after],
  ].filter((r): r is [string, string] => Boolean(r[1]));

  return (
    <article className="flex flex-col gap-5">
      <div className="relative aspect-video w-full max-w-full overflow-hidden bg-brand-black">
        <iframe
          src={`https://player.vimeo.com/video/${film.vimeoId}?title=0&byline=0&portrait=0&dnt=1`}
          className="absolute inset-0 h-full w-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          loading="lazy"
          title={`${film.client} · ${film.kind}`}
        />
      </div>
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-ink-muted">{film.kind}</p>
        <h3 className={`mt-2 font-semibold ${large ? "text-2xl md:text-3xl" : "text-xl"}`}>{film.client}</h3>
      </div>
      <div className="text-[13px] leading-[1.6]">
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.14em]">
          Pandex Films \ {film.client} &apos;{String(film.year).slice(-2)}
        </p>
        <p>
          <span className="text-ink-muted">Direção:</span> {film.direction}
        </p>
        <p>
          <span className="text-ink-muted">Produção/Captação/Edição:</span> Pandex Films
        </p>
        <p className="text-ink-muted">{film.city}</p>
      </div>
      {rows.length > 0 && (
        <dl className="grid gap-3 border-t border-line pt-5 text-sm">
          {rows.map(([label, value]) => (
            <div key={label} className="grid gap-1 sm:grid-cols-[9rem_1fr] sm:gap-4">
              <dt className="text-ink-muted">{label}</dt>
              <dd className="min-w-0 text-ink">{value}</dd>
            </div>
          ))}
        </dl>
      )}
    </article>
  );
}
