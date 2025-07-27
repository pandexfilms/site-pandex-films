import Image from "next/image";
import VideoGallery from "@/components/VideoGallery";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <Hero />

        <section id="videos" className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Nossos Vídeos
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Confira nossa coleção de vídeos profissionais e criativos
            </p>
          </div>
          <VideoGallery />
        </section>

        <section id="contato" className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Entre em Contato
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Tem um projeto em mente? Vamos conversar!
            </p>
          </div>
          <ContactForm />
        </section>
      </main>

      <footer className="bg-black/50 backdrop-blur-sm border-t border-gray-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 PandeX Films. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
