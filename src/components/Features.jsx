import { Users, Award, Zap, Cpu, Palette, HeartHandshake } from 'lucide-react'

const FEATURES = [
  {
    icon: Users,
    title: 'Profissionais Capacitados',
    desc: 'Equipe treinada e certificada, com vasta experiência em impressoras e equipamentos de personalização.',
    color: 'text-brand-600',
    bg: 'bg-brand-50',
  },
  {
    icon: Award,
    title: 'Peças Originais',
    desc: 'Trabalhamos somente com componentes originais e de qualidade para garantir a longevidade dos seus equipamentos.',
    color: 'text-cyan-600',
    bg: 'bg-cyan-50',
  },
  {
    icon: Zap,
    title: 'Atendimento Rápido',
    desc: 'Diagnóstico ágil e prazos cumpridos. Sabemos que cada hora parada significa perda para o seu negócio.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
  {
    icon: Cpu,
    title: 'Especialistas Epson',
    desc: 'Somos referência no atendimento a impressoras Epson — conhecemos cada detalhe da linha de equipamentos.',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
  {
    icon: Palette,
    title: 'Soluções em Sublimação',
    desc: 'Linha completa de produtos para quem trabalha com personalização: tintas, papéis, copos, camisetas e muito mais.',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
  },
  {
    icon: HeartHandshake,
    title: 'Atendimento de Confiança',
    desc: 'Transparência e honestidade em cada serviço. Mais que clientes, cultivamos parceiros de longa data.',
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
]

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="inline-block text-sm font-semibold text-brand-600 bg-brand-50 border border-brand-100 rounded-full px-4 py-1.5 tracking-wide uppercase">
            Por que escolher a TECvision
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Qualidade e confiança em cada detalhe
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Nossos diferenciais garantem que você sempre tenha a melhor experiência — do diagnóstico à entrega.
          </p>
        </div>

        {/* Two-column layout: image left, cards right */}
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-10 items-start">
          {/* Left — banner vertical */}
          <div className="hidden lg:block sticky top-24">
            <div className="rounded-3xl overflow-hidden shadow-card border border-slate-100">
              <img
                src="/imagens/banner vertical.png"
                alt="TECvision — Qualidade e confiança"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right — cards 2 per row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {FEATURES.map(({ icon: Icon, title, desc, color, bg }) => (
              <div
                key={title}
                className="group relative bg-white rounded-2xl p-6 border border-slate-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-11 h-11 rounded-xl ${bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
                <h3 className="font-semibold text-slate-900 text-base mb-1.5">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl ${bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
