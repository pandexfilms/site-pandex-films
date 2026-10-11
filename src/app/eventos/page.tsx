import type { Metadata } from "next";
import { FilmCard } from "@/components/FilmCard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Eyebrow, PrimaryLink, Section, SecondaryLink, VimeoBackground } from "@/components/ui";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FILMS, HERO_VIDEO_VIMEO_ID, WHATSAPP_MESSAGES, whatsappLink } from "@/lib/site";

const title = "Filmes de Evento em Recife | Pandex Films";
const description =
  "Imersões, summits e encontros transformados em filmes que vendem a próxima edição. Recife e João Pessoa.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/eventos" },
  openGraph: { title, description, url: "/eventos", siteName: "Pandex Films", locale: "pt_BR", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const CONSEQUENCES = [
  "A próxima edição começa do zero na divulgação.",
  "O patrocinador não tem o que ver do que patrocinou.",
  "O conteúdo dos palestrantes se perde.",
];

const DELIVERABLES = [
  { title: "O filme do evento", text: "O aftermovie que resume o dia e vende a próxima edição." },
  { title: "Cortes dos palestrantes", text: "Trechos curtos pra Instagram e LinkedIn, que circulam por semanas." },
  { title: "Depoimentos", text: "Participantes contando o que viveram. É a peça que mais convence a próxima turma." },
  { title: "Material pra patrocinador", text: "Imagens da marca dele no evento, prontas pra apresentar na renovação." },
];

const STEPS = [
  { title: "Conversa", text: "20 minutos sobre o evento e o que você quer fazer com o material." },
  { title: "Proposta", text: "Escopo e prazo fechados, por escrito." },
  { title: "Filmagem", text: "A gente filma o evento sem atrapalhar a programação." },
  { title: "Entrega", text: "Primeiro corte enquanto o assunto ainda está quente." },
];

export default function EventosPage() {
  const evm = FILMS.find((f) => f.slug === "imersao-evm") ?? FILMS[0];
  const cta = whatsappLink(WHATSAPP_MESSAGES.eventos);

  return (
    <>
      <Header />
      <main>
        <section className="relative flex min-h-[85svh] items-end px-5 pb-20 pt-32 md:items-center md:pb-0">
          <VimeoBackground vimeoId={HERO_VIDEO_VIMEO_ID} />
          <div className="relative mx-auto w-full max-w-6xl">
            <Eyebrow>Filmes de evento · Recife e João Pessoa</Eyebrow>
            <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl">
              Seu evento não pode acabar quando as luzes apagam.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/80 md:text-xl">
              A gente transforma imersões, summits e encontros em filmes que vendem a próxima edição.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <PrimaryLink href={cta} external>
                Quero o filme do meu próximo evento
              </PrimaryLink>
              <SecondaryLink href="#case">Ver um evento que filmamos</SecondaryLink>
            </div>
          </div>
        </section>

        <Section className="bg-ink">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <div>
              <Eyebrow>O problema</Eyebrow>
              <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                Três dias depois, ninguém lembra.
              </h2>
            </div>
            <div>
              <p className="text-lg leading-relaxed text-paper/80">
                Você passa meses montando um evento. Palestrante bom, sala cheia, networking acontecendo. Na
                segunda-feira, o que sobrou foi story que some em 24 horas e foto de celular no grupo.
              </p>
              <ul className="mt-8 divide-y divide-line border-y border-line">
                {CONSEQUENCES.map((c) => (
                  <li key={c} className="flex gap-4 py-4 text-paper">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-glow" aria-hidden />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section className="border-t border-line bg-ink">
          <Eyebrow>O que entregamos</Eyebrow>
          <h2 className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Um dia de evento, semanas de conteúdo.
          </h2>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {DELIVERABLES.map((d) => (
              <div key={d.title} className="bg-ink-2 p-8">
                <h3 className="text-xl font-semibold">{d.title}</h3>
                <p className="mt-3 leading-relaxed text-mute">{d.text}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="case" className="border-t border-line bg-ink">
          <Eyebrow>Case</Eyebrow>
          <h2 className="mb-12 mt-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl">{evm.client}</h2>
          <FilmCard film={evm} large />
        </Section>

        <Section className="border-t border-line bg-ink">
          <Eyebrow>Como funciona</Eyebrow>
          <ol className="mt-12 grid gap-10 md:grid-cols-4 md:gap-8">
            {STEPS.map((s, i) => (
              <li key={s.title} className="border-t border-paper/30 pt-6">
                <span className="text-sm font-medium tabular-nums text-glow">Passo {i + 1}</span>
                <h3 className="mt-3 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-mute">{s.text}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section className="border-t border-line bg-ink-2">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">Qual é o seu próximo evento?</h2>
            <p className="mt-6 text-lg leading-relaxed text-paper/80">
              Conta a data e o formato. A gente responde com uma proposta.
            </p>
            <div className="mt-10">
              <PrimaryLink href={cta} external>
                Falar no WhatsApp
              </PrimaryLink>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
      <WhatsAppButton message={WHATSAPP_MESSAGES.eventos} />
    </>
  );
}
