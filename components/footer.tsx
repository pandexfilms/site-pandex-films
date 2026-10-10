import { Instagram, Youtube, Linkedin, Mail, MessageCircle } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-2xl font-bold text-black">Pandex Films</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Criando conteúdo audiovisual que conecta marcas aos seus públicos de forma autêntica e impactante.
            </p>
            <div className="flex space-x-4">
              <a  className="text-gray-400 hover:text-black transition-colors" href="https://www.instagram.com/pandexfilms/">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-black mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a  className="hover:text-black transition-colors">
                  Vídeos Institucionais
                </a>
              </li>
              <li>
                <a  className="hover:text-black transition-colors">
                  Campanhas Publicitárias
                </a>
              </li>
              <li>
                <a  className="hover:text-black transition-colors">
                  Documentários Corporativos
                </a>
              </li>
              <li>
                <a  className="hover:text-black transition-colors">
                  Cobertura de Eventos
                </a>
              </li>
              <li>
                <a  className="hover:text-black transition-colors">
                  Vídeos para Redes Sociais
                </a>
              </li>
              {/* Removed Motion Graphics */}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-black mb-4">Contato</h4>
            <div className="space-y-2 text-gray-600">
              <p>pandexfilms@gmail.com</p>
              <p>Recife, PE</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-600">© 2026 Pandex Films. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
