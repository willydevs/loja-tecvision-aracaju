import { MessageCircle } from 'lucide-react'

const WA_LINK = 'https://web.whatsapp.com/send?phone=557999068449&text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20consultar%20a%20disponibilidade%20de%20um%20produto.'

const PRODUCTS = [
  {
    img: '/imagens/copos.png',
    title: 'Copos Personalizados',
    desc: 'Copos de polímero para sublimação, prontos para personalizar com sua arte.',
    tag: 'Sublimação',
    tagColor: 'bg-cyan-100 text-cyan-700',
  },
  {
    img: '/imagens/canecas.png',
    title: 'Canecas',
    desc: 'Canecas brancas de cerâmica e polímero, ideais para sublimação e transfer.',
    tag: 'Sublimação',
    tagColor: 'bg-cyan-100 text-cyan-700',
  },
  {
    img: '/imagens/camisas.png',
    title: 'Camisetas',
    desc: 'Camisetas de polyester e malha especial para sublimação e estamparia digital.',
    tag: 'Personalização',
    tagColor: 'bg-purple-100 text-purple-700',
  },
  {
    img: '/imagens/azulejos.png',
    title: 'Azulejos Personalizados',
    desc: 'Azulejos brancos preparados para receber sublimação com alta fidelidade de cor.',
    tag: 'Sublimação',
    tagColor: 'bg-cyan-100 text-cyan-700',
  },
  {
    img: '/imagens/papel.png',
    title: 'Papéis Transfer',
    desc: 'Papéis sublimáticos e transfer de alta qualidade para impressão de precisão.',
    tag: 'Suprimento',
    tagColor: 'bg-amber-100 text-amber-700',
  },
  {
    img: '/imagens/tintas.png',
    title: 'Tintas para Impressora',
    desc: 'Tintas originais e compatíveis para impressoras Epson e outras marcas.',
    tag: 'Suprimento',
    tagColor: 'bg-amber-100 text-amber-700',
  },
  {
    img: '/imagens/acessorios-para-impressora.png',
    title: 'Acessórios para Impressora',
    desc: 'Cabeçotes, almofadas, kits de manutenção e componentes para todas as linhas.',
    tag: 'Peças',
    tagColor: 'bg-slate-100 text-slate-600',
  },
  {
    img: '/imagens/personalizados.png',
    title: 'Produtos de Personalização',
    desc: 'Chapas, porta-retratos, mouse pads, puzzles e muito mais para personalizar.',
    tag: 'Personalização',
    tagColor: 'bg-purple-100 text-purple-700',
  },
]

export default function Products() {
  return (
    <section id="produtos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="inline-block text-sm font-semibold text-brand-600 bg-brand-50 border border-brand-100 rounded-full px-4 py-1.5 tracking-wide uppercase">
            Nossos Produtos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Catálogo completo para personalização
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Tudo o que você precisa para personalizar, imprimir e criar — em um só lugar.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PRODUCTS.map(({ img, title, desc, tag, tagColor }) => (
            <div
              key={title}
              className="group bg-white rounded-2xl border border-slate-100 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
            >
              {/* Visual area */}
              <div className="h-32 bg-gradient-to-br from-slate-50 to-brand-50 flex items-center justify-center p-4">
                <img
                  src={img}
                  alt={title}
                  className="h-full w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              {/* Content */}
              <div className="p-5 space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-slate-900 text-sm leading-snug">{title}</h3>
                  <span className={`flex-shrink-0 text-xs font-medium px-2.5 py-1 rounded-full ${tagColor}`}>
                    {tag}
                  </span>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA bottom */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 mb-5">Não encontrou o que procura? Fale diretamente conosco.</p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-brand-700 hover:bg-brand-600 text-white font-semibold px-7 py-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5" />
            Consultar disponibilidade no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
