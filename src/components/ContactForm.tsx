'use client';

import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        console.error('Erro:', data.error);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Erro ao enviar:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Informações de Contato */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">
            Vamos Conversar
          </h3>
          <p className="text-gray-300 mb-8">
            Estamos prontos para transformar sua ideia em realidade. 
            Entre em contato conosco e vamos criar algo incrível juntos.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
              <div className="bg-white/10 p-3 rounded-full">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-white">Telefone</h4>
                <p className="text-gray-300">(81) 99291-0844</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
              <div className="bg-white/10 p-3 rounded-full">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-white">Email</h4>
                <p className="text-gray-300">pandexfilms@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
              <div className="bg-white/10 p-3 rounded-full">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-white">Localização</h4>
                <p className="text-gray-300">Pernambuco, PE - Brasil</p>
                <p className="text-gray-300">Paraíba, PB - Brasil</p>

              </div>
            </div>
          </div>
        </div>

        {/* Formulário */}
        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-white/10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-white/20 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-transparent bg-white/10 text-white placeholder-gray-400 backdrop-blur-sm"
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-white/20 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-transparent bg-white/10 text-white placeholder-gray-400 backdrop-blur-sm"
                  placeholder="seu@email.com"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-white/20 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-transparent bg-white/10 text-white placeholder-gray-400 backdrop-blur-sm"
                  placeholder="(11) 99999-9999"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Assunto *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 border border-white/20 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-transparent bg-gray-800 text-white backdrop-blur-sm min-h-[52px]"
                >
                  <option value="" className="bg-gray-800 text-white py-2">Selecione um assunto</option>
                  <option value="comercial" className="bg-gray-800 text-white py-2">Vídeo Comercial</option>
                  <option value="evento" className="bg-gray-800 text-white py-2">Cobertura de Evento</option>
                  <option value="documentario" className="bg-gray-800 text-white py-2">Documentário</option>
                  <option value="outro" className="bg-gray-800 text-white py-2">Outro</option>
                </select>
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Mensagem *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-white/20 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-transparent bg-white/10 text-white placeholder-gray-400 backdrop-blur-sm"
                placeholder="Conte-nos sobre seu projeto..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white/10 backdrop-blur-sm hover:bg-white/20 disabled:bg-white/5 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 border border-white/20"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
            </button>
            
            {submitStatus === 'success' && (
              <div className="bg-green-500/10 backdrop-blur-sm text-green-400 p-4 rounded-lg border border-green-500/30">
                Mensagem enviada com sucesso! Entraremos em contato em breve.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="bg-red-500/10 backdrop-blur-sm text-red-400 p-4 rounded-lg border border-red-500/30">
                Erro ao enviar mensagem. Tente novamente.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
} 