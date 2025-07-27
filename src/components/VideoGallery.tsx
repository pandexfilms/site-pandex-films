'use client';

import { useState } from 'react';

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  vimeoId: string;
  category: string;
}

// Dados de exemplo - você pode substituir pelos seus vídeos reais
const sampleVideos: Video[] = [
  {
    id: '1',
    title: 'Comercial Empresarial',
    description: 'Vídeo promocional para empresa de tecnologia',
    thumbnail: 'https://i.vimeocdn.com/video/123456789_640x360.jpg',
    vimeoId: '1102749907',
    category: 'Comercial'
  },
  {
    id: '2',
    title: 'Evento Corporativo',
    description: 'Cobertura completa de evento empresarial',
    thumbnail: 'https://i.vimeocdn.com/video/987654321_640x360.jpg',
    vimeoId: '987654321',
    category: 'Evento'
  },
  {
    id: '3',
    title: 'Documentário',
    description: 'Documentário sobre sustentabilidade',
    thumbnail: 'https://i.vimeocdn.com/video/456789123_640x360.jpg',
    vimeoId: '456789123',
    category: 'Documentário'
  }
];

export default function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = ['Todos', ...new Set(sampleVideos.map(video => video.category))];
  
  const filteredVideos = selectedCategory === 'Todos' 
    ? sampleVideos 
    : sampleVideos.filter(video => video.category === selectedCategory);

  return (
    <div className="max-w-6xl mx-auto">
      {/* Filtros */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-white/20 backdrop-blur-sm text-white border border-white/30'
                : 'bg-white/5 backdrop-blur-sm text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid de Vídeos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map((video) => (
          <div
            key={video.id}
            className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-white/10 hover:border-white/20 hover:bg-white/10"
            onClick={() => setSelectedVideo(video)}
          >
            <div className="relative aspect-video">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                {video.title}
              </h3>
              <p className="text-gray-300 mb-3">
                {video.description}
              </p>
              <span className="inline-block bg-white/10 backdrop-blur-sm text-gray-300 text-sm px-3 py-1 rounded-full border border-white/20">
                {video.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal do Vídeo */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900/95 backdrop-blur-md rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/20">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-white">
                  {selectedVideo.title}
                </h3>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="aspect-video mb-4">
                <iframe
                  src={`https://player.vimeo.com/video/${selectedVideo.vimeoId}?h=auto&autoplay=1`}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
              
              <p className="text-gray-300">
                {selectedVideo.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 