import { Quote } from 'lucide-react'

const TESTIMONIALS = [
  {
    name: 'Carlos Eduardo',
    role: 'Dono de gráfica rápida',
    text: 'Levei minha Epson L3250 com problema no cabeçote e em dois dias estava resolvido. Peças originais e preço justo. Recomendo demais.',
    stars: 5,
  },
  {
    name: 'Patrícia Melo',
    role: 'Fotógrafa profissional',
    text: 'Compro minhas tintas e papéis transfer aqui há anos. Atendimento rápido, produto sempre em estoque e suporte quando preciso.',
    stars: 5,
  },
  {
    name: 'Roberto Lima',
    role: 'Estúdio de personalização',
    text: 'Eles me ajudaram a montar toda a estrutura de sublimação do meu estúdio. Do equipamento ao insumo, tudo em um lugar só.',
    stars: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="inline-block text-sm font-semibold text-brand-600 bg-brand-50 border border-brand-100 rounded-full px-4 py-1.5 tracking-wide uppercase">
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            O que nossos clientes dizem
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Mais de 10 anos construindo confiança em Aracaju.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map(({ name, role, text, stars }) => (
            <div key={name} className="bg-white border border-slate-100 rounded-2xl shadow-sm p-6 space-y-4 flex flex-col">
              <Quote className="w-8 h-8 text-brand-200 flex-shrink-0" />
              <p className="text-slate-600 text-sm leading-relaxed flex-1">{text}</p>
              <div className="flex gap-0.5">
                {Array.from({ length: stars }).map((_, i) => (
                  <span key={i} className="text-amber-400 text-lg leading-none">★</span>
                ))}
              </div>
              <div>
                <p className="font-semibold text-slate-900 text-sm">{name}</p>
                <p className="text-slate-400 text-sm">{role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
