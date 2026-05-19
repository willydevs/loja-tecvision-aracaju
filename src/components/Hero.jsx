import { MessageCircle, ChevronRight, Sparkles, Shield, Zap } from 'lucide-react'

const WA_ATENDIMENTO = 'https://web.whatsapp.com/send?phone=557999068449&text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20solicitar%20um%20atendimento%20t%C3%A9cnico.'

const BADGES = [
  { icon: Shield, text: 'Peças originais' },
  { icon: Zap, text: 'Atendimento rápido' },
  { icon: Sparkles, text: 'Especialistas Epson' },
]

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-red-950 via-red-900 to-red-800">
      {/* Glow blobs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-red-700/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen lg:min-h-0 lg:py-32">

          {/* Left — Text */}
          <div className="text-white space-y-8">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium text-cyan-300">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              Assistência Técnica Especializada em Impressoras
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                Assistência técnica{' '}
                <span className="text-gradient">premium</span>{' '}
                para impressoras e soluções em personalização
              </h1>
              <p className="text-lg text-white/75 leading-relaxed max-w-xl">
                A TECvision une manutenção especializada, peças originais e uma linha completa de produtos para sublimação, tudo para quem vive da personalização.
              </p>
            </div>

            {/* Foto — mobile only */}
            <div className="lg:hidden relative rounded-2xl overflow-hidden shadow-xl border border-white/20">
              <img
                src="/imagens/eugenio-tecnico.png"
                alt="Especialista TECvision"
                className="w-full h-auto object-cover"
              />
              <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 shadow">
                <svg className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                <span className="text-slate-800 text-xs font-bold">4,1</span>
                <span className="text-slate-500 text-xs">no Google</span>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              {BADGES.map(({ icon: Icon, text }) => (
                <span key={text} className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-lg px-3 py-1.5 text-sm text-white/85">
                  <Icon className="w-3.5 h-3.5 text-white" />
                  {text}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WA_ATENDIMENTO}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-green-500 hover:bg-green-400 text-white font-semibold px-7 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base"
              >
                <MessageCircle className="w-5 h-5" />
                Solicitar atendimento
              </a>
              <a
                href="#produtos"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/25 text-white font-semibold px-7 py-4 rounded-xl transition-all duration-200 text-base"
              >
                Ver produtos
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right — Technician photo */}
          <div className="hidden lg:flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                <img
                  src="/imagens/eugenio-tecnico.png"
                  alt="Especialista TECvision"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating accent */}
              <div className="absolute -bottom-6 -left-6 bg-cyan-500 text-brand-950 rounded-2xl px-4 py-3 shadow-xl text-sm font-bold flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Especialistas Epson
              </div>

              {/* Status badge */}
              <div className="absolute top-5 right-5 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm border border-white/30 rounded-full px-3 py-1.5 shadow-lg">
                <svg className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                <span className="text-slate-800 text-xs font-bold">4,1</span>
                <span className="text-slate-500 text-xs">no Google</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L1440 80L1440 40C1200 80 960 20 720 40C480 60 240 0 0 40L0 80Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
