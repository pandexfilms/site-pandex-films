export default function Hero() {
  return (
    <section className="py-20 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          O real do seu evento,
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 block">
            em filme!
          </span>
        </h1>

        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Especialistas em produção de vídeo profissional, capturando momentos
          únicos e transformando ideias em experiências visuais memoráveis.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#videos"
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
          >
            Ver Nossos Trabalhos
          </a>
          <a
            href="#contato"
            className="border-2 border-gray-600 text-white hover:bg-gray-800/50 hover:border-gray-500 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
          >
            Fale Conosco
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
            <div className="text-3xl font-bold text-white mb-2">50+</div>
            <div className="text-gray-300">Projetos Concluídos</div>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
            <div className="text-3xl font-bold text-white mb-2">1+</div>
            <div className="text-gray-300">Ano de Experiência</div>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
            <div className="text-3xl font-bold text-white mb-2">92%</div>
            <div className="text-gray-300">Aprovação na primeira entrega</div>
          </div>
        </div>
      </div>
    </section>
  );
}
