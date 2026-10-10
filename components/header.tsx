"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false)

    // Pequeno delay para o menu fechar antes do scroll
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        const headerOffset = 64 // altura do header
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    }, 100)
  }

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center gap-3">
            <span className="text-xl font-bold text-black">Pandex Films</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-black hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-black hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-black hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Portfólio
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-black hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contato
              </button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <motion.button
                  onClick={() => scrollToSection("home")}
                  className="text-black hover:text-gray-600 block px-3 py-2 text-base font-medium w-full text-left"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Início
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection("about")}
                  className="text-black hover:text-gray-600 block px-3 py-2 text-base font-medium w-full text-left"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Sobre
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection("portfolio")}
                  className="text-black hover:text-gray-600 block px-3 py-2 text-base font-medium w-full text-left"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Portfólio
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection("contact")}
                  className="text-black hover:text-gray-600 block px-3 py-2 text-base font-medium w-full text-left"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Contato
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
