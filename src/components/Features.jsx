import { Users, Award, Zap, Cpu, Palette, HeartHandshake, ShieldCheck } from 'lucide-react'

const FEATURES = [
  {
    icon: Cpu,
    title: 'Especialistas Epson',
    desc: 'Somos referência no atendimento a impressoras Epson — conhecemos cada detalhe da linha de equipamentos.',
    color: 'text-white',
    bg: 'bg-brand-700',
    highlight: true,
  },
  {
    icon: Award,
    title: 'Peças Originais',
    desc: 'Trabalhamos somente com componentes originais e de qualidade para garantir a longevidade dos seus equipamentos.',
    color: 'text-cyan-600',
    bg: 'bg-cyan-50',
    highlight: false,
  },
  {
    icon: Users,
    title: 'Profissionais Capacitados',
    desc: 'Equipe treinada e certificada, com vasta experiência em impressoras e equipamentos de personalização.',
    color: 'text-brand-600',
    bg: 'bg-brand-50',
    highlight: false,
  },
  {
    icon: Zap,
    title: 'Atendimento Rápido',
    desc: 'Diagnóstico ágil e prazos cumpridos. Sabemos que cada hora parada significa perda para o seu negócio.',
    color: 'text-amber-500',
    bg: 'bg-amber-50',
    highlight: false,
  },
  {
    icon: Palette,
    title: 'Soluções em Sublimação',
    desc: 'Linha completa de produtos para quem trabalha com personalização: tintas, papéis, copos, camisetas e muito mais.',
    color: 'text-rose-500',
    bg: 'bg-rose-50',
    highlight: false,
  },
  {
    icon: HeartHandshake,
    title: 'Atendimento de Confiança',
    desc: 'Transparência e honestidade em cada serviço. Mais que clientes, cultivamos parceiros de longa data.',
    color: 'text-green-600',
    bg: 'bg-green-50',
    highlight: false,
  },
]

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="inline-block text-sm font-semibold text-brand-600 bg-brand-50 border border-brand-100 rounded-full px-4 py-1.5 tracking-wide uppercase">
            Por que escolher a TECvision
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Qualidade e confiança em cada detalhe
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Nossos diferenciais garantem que você sempre tenha a melhor experiência —<br className="hidden sm:block" /> do diagnóstico à entrega.
          </p>
        </div>

        {/* Layout: foto esquerda + cards direita */}
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-10 items-start">

          {/* Foto com badge */}
          <div className="hidden lg:block sticky top-24">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-100">
              <img
                src="/imagens/eugenio-banner.png"
                alt="Eugênio — TECvision"
                className="w-full h-auto object-cover"
              />
              {/* Badge overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-brand-800/95 backdrop-blur-sm px-6 py-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-bold text-base leading-snug">Empresa local, compromisso real</p>
                  <p className="text-white/75 text-sm leading-snug mt-0.5">
                    Mais de 10 anos oferecendo soluções técnicas e produtos de qualidade para Aracaju e região.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Cards 2×3 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {FEATURES.map(({ icon: Icon, title, desc, color, bg, highlight }) => (
              <div
                key={title}
                className={`group relative rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 ${
                  highlight
                    ? 'bg-white border-brand-400 shadow-lg shadow-brand-100'
                    : 'bg-white border-slate-100 shadow-card hover:shadow-card-hover'
                }`}
              >
                {highlight && (
                  <span className="absolute top-0 right-4 -translate-y-1/2 bg-brand-700 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                    Nosso diferencial
                  </span>
                )}
                <div className={`w-11 h-11 rounded-xl ${bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
                <h3 className={`font-bold text-base mb-1.5 ${highlight ? 'text-brand-700' : 'text-slate-900'}`}>
                  {title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
