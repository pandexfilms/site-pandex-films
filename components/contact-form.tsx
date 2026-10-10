"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Loader2, CheckCircle, XCircle } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [phoneError, setPhoneError] = useState("")

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "")
    if (digits.length <= 2) return `(${digits}`
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
    if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`
  }

  const validatePhone = (value: string) => {
    const digits = value.replace(/\D/g, "")
    if (digits.length === 0) {
      setPhoneError("")
      return true
    }
    if (digits.length < 10 || digits.length > 11) {
      setPhoneError("Telefone deve ter 10 ou 11 digitos")
      return false
    }
    setPhoneError("")
    return true
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value
    const digits = raw.replace(/\D/g, "")
    if (digits.length <= 11) {
      const formatted = digits.length > 0 ? formatPhone(raw) : ""
      setFormData({ ...formData, phone: formatted })
      validatePhone(formatted)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (formData.phone && !validatePhone(formData.phone)) {
      return
    }

    setIsLoading(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", company: "", phone: "", service: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Error:", error)
      setSubmitStatus("error")
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-black text-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Vamos Conversar</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Pronto para elevar sua marca com conteúdo audiovisual de qualidade? Entre em contato conosco.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-6">Entre em Contato</h3>
              <div className="space-y-4">
                <motion.div
                  className="flex items-center space-x-4"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <Mail className="w-6 h-6 text-gray-400" />
                  <span className="text-gray-300">pandexfilms@gmail.com</span>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-4"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <MapPin className="w-6 h-6 text-gray-400" />
                  <span className="text-gray-300">Recife, PE</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-semibold mb-4">Nossos Serviços</h4>
              <ul className="space-y-2 text-gray-300">
                <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  • Vídeos Institucionais
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  • Campanhas Publicitárias
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  • Documentários Corporativos
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  • Cobertura de Eventos
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  • Vídeos para Redes Sociais
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-white text-black">
              <CardHeader>
                <CardTitle className="text-2xl">Solicite um Orçamento</CardTitle>
              </CardHeader>
              <CardContent>
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2 text-green-700"
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span>Mensagem enviada com sucesso! Entraremos em contato em breve.</span>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700"
                  >
                    <XCircle className="w-5 h-5" />
                    <span>Erro ao enviar mensagem. Tente novamente.</span>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <div>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Seu Nome"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border-gray-300 focus:ring-2 focus:ring-black transition-all"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Seu E-mail"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-gray-300 focus:ring-2 focus:ring-black transition-all"
                      />
                    </div>
                  </motion.div>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <div>
                      <Input
                        type="text"
                        name="company"
                        placeholder="Empresa"
                        value={formData.company}
                        onChange={handleChange}
                        className="border-gray-300 focus:ring-2 focus:ring-black transition-all"
                      />
                    </div>
                    <div>
                      <Input
                        type="tel"
                        name="phone"
                        placeholder="(81) 99999-9999"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        maxLength={16}
                        className={`border-gray-300 focus:ring-2 focus:ring-black transition-all ${phoneError ? "border-red-500 focus:ring-red-500" : ""}`}
                      />
                      {phoneError && (
                        <p className="text-red-500 text-sm mt-1">{phoneError}</p>
                      )}
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.75 }}
                  >
                    <Select
                      value={formData.service}
                      onValueChange={(value) => setFormData({ ...formData, service: value })}
                    >
                      <SelectTrigger className="border-gray-300 focus:ring-2 focus:ring-black transition-all">
                        <SelectValue placeholder="Tipo de Serviço" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="video-institucional">Video Institucional</SelectItem>
                        <SelectItem value="campanha-publicitaria">Campanha Publicitaria</SelectItem>
                        <SelectItem value="documentario">Documentario Corporativo</SelectItem>
                        <SelectItem value="cobertura-evento">Cobertura de Evento</SelectItem>
                        <SelectItem value="video-redes-sociais">Video para Redes Sociais</SelectItem>
                        <SelectItem value="outro">Outro</SelectItem>
                      </SelectContent>
                    </Select>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <Textarea
                      name="message"
                      placeholder="Conte-nos sobre seu projeto..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="border-gray-300 focus:ring-2 focus:ring-black transition-all"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    <Button
                      type="submit"
                      className="w-full bg-black text-white hover:bg-gray-800 transform hover:scale-105 transition-all duration-200"
                      size="lg"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        "Enviar Mensagem"
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
