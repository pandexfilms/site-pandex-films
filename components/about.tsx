"use client"

import { Camera, Film, Users, Award } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Camera,
      number: "01",
      title: "Direção que Constrói Autoridade",
      description: "Cada cena é pensada para transmitir profissionalismo, clareza e posicionamento de marca.",
    },
    {
      icon: Film,
      number: "02",
      title: "Narrativa com Intenção",
      description: "Não gravamos por gravar. Cada vídeo é estruturado para comunicar uma mensagem clara e reforçar o valor da marca.",
    },
    {
      icon: Users,
      number: "03",
      title: "Processo Organizado e Consultivo",
      description: "Do briefing à entrega, conduzimos o projeto com clareza, planejamento e direção estratégica.",
    },
    {
      icon: Award,
      number: "04",
      title: "Video Como Ativo de Marca",
      description: "Produções pensadas para fortalecer posicionamento, percepção de valor e presença da marca.",
    },
  ]

  return (
    <section id="about" className="py-28 bg-neutral-950 text-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header da secao */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-4 font-sans">Sobre a Pandex Films</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] text-balance font-sans">
             Transformamos marcas em{" "}
              <span className="italic font-light">autoridade.</span>
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-rows-3 text-align-center"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-base md:text-lg text-neutral-400 leading-relaxed font-sans">
              Não produzimos apenas vídeos.
            </p>
            <p className="text-base md:text-lg text-neutral-400 leading-relaxed font-sans">   
              Construímos percepção de marca através de direção estratégica, narrativa clara e linguagem cinematográfica.
            </p>
            <p className="text-base md:text-lg text-neutral-400 leading-relaxed font-sans">
              Trabalhamos com empresas que precisam comunicar autoridade e posicionamento no mercado.
            </p>
          </motion.div>
        </div>

        {/* Linha separadora */}
        <motion.div
          className="w-full h-px bg-neutral-800 mb-16"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          style={{ transformOrigin: "left" }}
        />

        {/* Cards de servicos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-800">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-neutral-950 p-8 group cursor-default"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-3xl font-bold text-neutral-700 group-hover:text-white transition-colors duration-500 font-sans">
                  {feature.number}
                </span>
                <feature.icon className="w-5 h-5 text-neutral-600 group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3 font-sans">{feature.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed group-hover:text-neutral-300 transition-colors duration-500 font-sans">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
