import { Building2, MapPin, Phone, FileText, CheckCircle2 } from 'lucide-react'

const COMPANY_DATA = [
  { icon: Building2, label: 'Razão Social', value: 'TECvision LTDA' },
  { icon: FileText, label: 'CNPJ', value: '10.398.357/0001-23' },
  { icon: MapPin, label: 'Endereço', value: 'Av. Hermes Fontes, 1000 - Suíça, Aracaju - SE, 49050-000' },
  { icon: Phone, label: 'Telefone', value: '(79) 99906-8449' },
]

const VALUES = [
  'Transparência e honestidade em cada atendimento',
  'Compromisso com a qualidade e originalidade das peças',
  'Rapidez sem abrir mão da precisão',
  'Suporte pós-atendimento e relacionamento contínuo',
]

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — Institutional */}
          <div className="space-y-6">
            <div className="space-y-3">
              <span className="inline-block text-sm font-semibold text-brand-600 bg-brand-50 border border-brand-100 rounded-full px-4 py-1.5 tracking-wide uppercase">
                Sobre a TECvision
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Mais que uma assistência técnica — somos parceiros do seu negócio
              </h2>
            </div>

            <p className="text-slate-600 text-lg leading-relaxed">
              Somos referência em assistência técnica para impressoras Epson, com profissionais capacitados, peças originais e atendimento rápido e de confiança.
            </p>
            <p className="text-slate-500 leading-relaxed">
              Aqui, não vendemos só produtos — entregamos soluções completas para quem vive da personalização. Nosso compromisso é com a qualidade, a agilidade e a transparência em cada serviço prestado.
            </p>

            {/* Values */}
            <div className="space-y-3 pt-2">
              {VALUES.map((val) => (
                <div key={val} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm">{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Store image + Company card */}
          <div className="space-y-6">
            {/* Store photo */}
            <div className="rounded-3xl overflow-hidden shadow-card border border-slate-100">
              <img
                src="/imagens/imagem loja.png"
                alt="Loja TECvision"
                className="w-full h-56 object-cover"
              />
            </div>

            <div className="bg-white rounded-3xl border border-slate-100 shadow-card overflow-hidden">
              {/* Card header */}
              <div className="bg-hero p-7">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 17H7a2 2 0 01-2-2V9a2 2 0 012-2h10a2 2 0 012 2v6a2 2 0 01-2 2zM5 9V7a2 2 0 012-2h10a2 2 0 012 2v2M9 17v2m6-2v2" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-bold text-xl">TECvision</p>
                    <p className="text-white/60 text-sm">Dados da empresa</p>
                  </div>
                </div>
              </div>
              {/* Card body */}
              <div className="p-6 divide-y divide-slate-50">
                {COMPANY_DATA.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
                    <div className="w-9 h-9 rounded-lg bg-brand-50 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-brand-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium uppercase tracking-wide mb-0.5">{label}</p>
                      <p className="text-slate-800 font-medium text-sm">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '10+', label: 'Anos de experiência' },
                { value: '1.000+', label: 'Atendimentos realizados' },
                { value: '100%', label: 'Compromisso com qualidade' },
              ].map(({ value, label }) => (
                <div key={label} className="bg-white rounded-2xl border border-slate-100 shadow-card p-4 text-center">
                  <p className="text-2xl font-bold text-brand-700">{value}</p>
                  <p className="text-slate-500 text-xs mt-1 leading-tight">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
