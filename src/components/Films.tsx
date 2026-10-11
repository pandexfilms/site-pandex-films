import { FILMS, MORE_WORK_URL } from "@/lib/site";
import { FilmCard } from "./FilmCard";
import { Eyebrow, Section, SecondaryLink } from "./ui";

export function Films() {
  const [first, ...rest] = FILMS;
  return (
    <Section id="filmes" className="border-t border-line bg-ink">
      <Eyebrow>Filmes</Eyebrow>
      <h2 className="mt-6 max-w-2xl text-4xl font-bold leading-tight tracking-tight md:text-5xl">
        Filmes reais para marcas reais.
      </h2>
      <div className="mt-14 grid gap-16">
        <FilmCard film={first} large />
        <div className="grid gap-12 md:grid-cols-2">
          {rest.map((film) => (
            <FilmCard key={film.slug} film={film} />
          ))}
        </div>
      </div>
      <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-line pt-10">
        <p className="text-lg text-paper/80">Tem mais filmes, eventos e campanhas no nosso acervo.</p>
        <SecondaryLink href={MORE_WORK_URL} external>
          Ver mais trabalhos
        </SecondaryLink>
      </div>
    </Section>
  );
}
