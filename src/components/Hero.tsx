import { HERO_VIDEO_VIMEO_ID, WHATSAPP_MESSAGES, whatsappLink } from "@/lib/site";
import { Eyebrow, PrimaryLink, SecondaryLink, VimeoBackground } from "./ui";

export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-[92svh] items-end px-5 pb-20 pt-32 md:items-center md:pb-0">
      <VimeoBackground vimeoId={HERO_VIDEO_VIMEO_ID} />
      <div className="relative mx-auto w-full max-w-6xl">
        <Eyebrow>Produtora audiovisual · Recife</Eyebrow>
        <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl lg:text-8xl">
          <span className="text-mute">A emoção não acaba.</span> Ela vira filme.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/80 md:text-xl">
          Filmes para marcas e eventos que não podem ser esquecidos em três dias.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <PrimaryLink href={whatsappLink(WHATSAPP_MESSAGES.home)} external>
            Pedir uma proposta
          </PrimaryLink>
          <SecondaryLink href="#filmes">Ver filmes</SecondaryLink>
        </div>
      </div>
    </section>
  );
}
