import { FILMS } from "@/lib/site";
import { FilmCard } from "./FilmCard";
import { Eyebrow, Section } from "./ui";

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
    </Section>
  );
}
