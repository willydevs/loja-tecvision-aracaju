import { MessageCircle, ArrowRight, Printer, Monitor, Flame } from 'lucide-react'

const WA_BASE = 'https://web.whatsapp.com/send?phone=557999068449&text='

const SERVICES = [
  {
    Icon: Printer,
    title: 'Manutenção de Impressora',
    desc: 'Diagnóstico preciso, limpeza de cabeçote, troca de peças e recalibração. Atendemos todas as linhas Epson e outras marcas.',
    items: ['Limpeza de cabeçote', 'Troca de almofadas', 'Recalibração de cores', 'Diagnóstico completo'],
    gradient: 'from-brand-700 to-brand-900',
    border: 'border-brand-200',
    tag: 'Mais procurado',
    tagColor: 'bg-white text-brand-950',
    waText: 'Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20um%20or%C3%A7amento%20para%20manuten%C3%A7%C3%A3o%20de%20impressora.',
  },
  {
    Icon: Monitor,
    title: 'Manutenção de Projetor',
    desc: 'Troca de lâmpadas, limpeza óptica, ajuste de foco e correção de falhas de imagem. Projetores de todas as marcas.',
    items: ['Troca de lâmpada', 'Limpeza óptica', 'Ajuste de foco', 'Reparo eletrônico'],
    gradient: 'from-slate-700 to-slate-900',
    border: 'border-slate-200',
    tag: null,
    tagColor: '',
    waText: 'Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20um%20or%C3%A7amento%20para%20manuten%C3%A7%C3%A3o%20de%20projetor.',
  },
  {
    Icon: Flame,
    title: 'Sublimação',
    desc: 'Produtos, insumos e orientação para quem trabalha com sublimação. Tintas, papéis, prensas e todo o suporte técnico.',
    items: ['Tintas sublimáticas', 'Papéis transfer', 'Prensas térmicas', 'Suporte técnico'],
    gradient: 'from-purple-700 to-purple-900',
    border: 'border-purple-200',
    tag: null,
    tagColor: '',
    waText: 'Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20informa%C3%A7%C3%B5es%20sobre%20produtos%20de%20sublima%C3%A7%C3%A3o.',
  },
]

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="inline-block text-sm font-semibold text-brand-600 bg-brand-50 border border-brand-100 rounded-full px-4 py-1.5 tracking-wide uppercase">
            Nossos Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Soluções técnicas especializadas
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Do diagnóstico à entrega, oferecemos serviços completos com garantia e responsabilidade.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SERVICES.map(({ Icon, title, desc, items, gradient, border, tag, tagColor, waText }) => (
            <div
              key={title}
              className={`group relative rounded-3xl overflow-hidden border ${border} bg-white shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300`}
            >
              {/* Colored top */}
              <div className={`bg-gradient-to-br ${gradient} p-11 relative`}>
                {tag && (
                  <span className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full ${tagColor}`}>
                    {tag}
                  </span>
                )}
                <div className="w-20 h-20 rounded-2xl bg-white/15 flex items-center justify-center mb-6">
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-white text-2xl font-bold mb-3">{title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
              </div>

              {/* Content */}
              <div className="p-8 space-y-4">
                <ul className="space-y-2.5">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-slate-600 text-sm">
                      <span className="w-5 h-5 rounded-full bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href={`${WA_BASE}${waText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 flex items-center justify-between w-full bg-slate-50 hover:bg-brand-50 border border-slate-200 hover:border-brand-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:text-brand-700 transition-all duration-200 group/btn"
                >
                  <span className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    Solicitar orçamento
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
