"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 64
      window.scrollTo({ top, behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="pt-16 min-h-screen flex flex-col items-center justify-center text-white relative overflow-hidden">
      {/* Video de fundo do Vimeo */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://player.vimeo.com/video/1189938651?background=1&autoplay=1&loop=1&muted=1&quality=1080p"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] min-w-full min-h-full h-[56.25vw]"
          allow="autoplay; fullscreen"
          title="Background Video"
        />
        {/* Overlay escuro para melhor legibilidade do texto */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Label superior */}
        <motion.p
          className="text-xs md:text-sm uppercase tracking-[0.3em] text-neutral-300 mb-6 font-sans"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
        >
          Pandex Films &mdash; Produtora Audiovisual
        </motion.p>

        {/* Headline principal */}
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="font-sans font-bold leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white text-balance"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          >
            Videos estratégicos para empresas e marcas.
          </motion.h1>
        </div>

        {/* Descricao */}
        <motion.p
          className="text-base md:text-lg text-neutral-300 max-w-xl mx-auto mt-8 leading-relaxed font-sans"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Produção audiovisual pensada para fortalecer autoridade, posicionamento e presença de marca.
        </motion.p>

        {/* Botoes */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <Button
            size="lg"
            className="bg-white text-black hover:bg-neutral-200 px-10 py-3 text-sm uppercase tracking-widest font-semibold transition-all duration-200 hover:scale-105"
            onClick={() => scrollTo("contact")}
          >
            Falar com um especialista
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/40 text-white hover:bg-white hover:text-black hover:border-white px-10 py-3 text-sm uppercase tracking-widest font-semibold bg-transparent transition-all duration-200 hover:scale-105"
            onClick={() => scrollTo("portfolio")}
          >
            Ver Trabalhos
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
