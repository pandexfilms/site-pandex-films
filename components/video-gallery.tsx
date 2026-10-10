"use client"

import { useState } from "react"
import { ExternalLink, Play, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function VideoGallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  const videos = [
    {
      id: 1,
      title: "Mirai Intercâmbios",
      category: "Comercial",
      vimeoId: "1154869295",
    },
    {
      id: 2,
      title: "Imersão EVM",
      category: "Evento",
      vimeoId: "1189938651",
    },
    {
      id: 3,
      title: "Campanha Nova - Team MA",
      category: "Comercial",
      vimeoId: "1154868996",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <>
      <section id="portfolio" className="py-20 bg-muted" ref={ref}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Nosso Portfólio</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conheça alguns dos nossos trabalhos mais recentes e veja como ajudamos marcas a contar suas histórias.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {videos.map((video) => (
              <motion.div
                key={video.id}
                className="group cursor-pointer"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedVideo(video.vimeoId)}
              >
                <motion.div
                  className="relative overflow-hidden rounded-lg bg-black aspect-video"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative w-full h-full pointer-events-none">
                    <iframe
                      src={`https://player.vimeo.com/video/${video.vimeoId}?background=1&autoplay=0&loop=1&muted=1`}
                      className="absolute inset-0 w-full h-full"
                      allow="autoplay; fullscreen; picture-in-picture"
                    />
                  </div>
                  <motion.div
                    className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.div
                      className="bg-white rounded-full p-4"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play className="w-8 h-8 text-black fill-black" />
                    </motion.div>
                  </motion.div>
                  {/* Badge da categoria */}
                  <div className="absolute top-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded z-10">
                    {video.category}
                  </div>
                </motion.div>
                <motion.h3
                  className="text-lg font-semibold text-foreground mt-4 group-hover:text-muted-foreground transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {video.title}
                </motion.h3>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a
              href="https://drive.google.com/drive/folders/1tTDsB03iiIi9-h1TQY1_YFlTZAGD9wVN?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-foreground px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
            >
              Ver mais
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Modal do player Vimeo */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
          >
            <motion.button
              className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setSelectedVideo(null)}
            >
              <X className="w-8 h-8" />
            </motion.button>
            <motion.div
              className="w-full max-w-5xl aspect-video"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://player.vimeo.com/video/${selectedVideo}?autoplay=1&title=0&byline=0&portrait=0`}
                className="w-full h-full rounded-lg"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
