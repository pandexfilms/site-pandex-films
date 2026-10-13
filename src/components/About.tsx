import { Eyebrow, Section } from "./ui";

const PILLARS = [
  {
    title: "Filmes reais",
    text: "Nada de banco de imagem nem cena montada. Filmamos o que acontece de verdade, com o olhar de quem dirige.",
  },
  {
    title: "Feito pra circular",
    text: "Cada filmagem rende o filme principal e os cortes curtos para Instagram, LinkedIn e anúncio. Um dia de captação vira semanas de conteúdo.",
  },
  {
    title: "Conteúdo em tempo real",
    text: "Nos eventos, a gente edita e entrega durante o dia. O material chega enquanto o assunto ainda está quente.",
  },
];

export function About() {
  return (
    <Section id="sobre" className="bg-ink">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <div>
          <Eyebrow>Sobre a Pandex</Eyebrow>
          <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl">Percepção gera valor.</h2>
        </div>
        <div className="space-y-5 text-lg leading-relaxed text-paper/80">
          <p>
            Tem empresa que é muito melhor do que parece. O evento foi incrível e sobrou foto de celular. A marca é
            séria e o vídeo não mostra isso.
          </p>
          <p>
            A Pandex Films existe pra fechar essa distância. A gente filma pessoas reais, momentos reais e transforma
            isso em filme, com direção e edição pensadas pra onde o vídeo vai circular depois.
          </p>
          <p className="text-paper">Numa época de conteúdo gerado por IA, o que é real vale mais. É isso que a gente entrega.</p>
        </div>
      </div>

      <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
        {PILLARS.map((p) => (
          <div key={p.title} className="bg-ink-2 p-8">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="mt-3 leading-relaxed text-mute">{p.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
