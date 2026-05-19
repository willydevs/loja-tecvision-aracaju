import { Store, Printer, Palette, Camera, Shirt, MessageCircle } from 'lucide-react'

const WA_LINK = 'https://web.whatsapp.com/send?phone=557999068449&text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20falar%20com%20um%20especialista.'

const PROFILES = [
  { icon: Store, label: 'Empreendedores', desc: 'Que buscam qualidade e rapidez para manter o negócio funcionando.' },
  { icon: Printer, label: 'Gráficas Rápidas', desc: 'Que precisam de insumos confiáveis e manutenção ágil.' },
  { icon: Palette, label: 'Estúdios Criativos', desc: 'Que trabalham com arte e personalização em grande escala.' },
  { icon: Camera, label: 'Fotógrafos', desc: 'Que imprimem e personalizam produtos para seus clientes.' },
  { icon: Shirt, label: 'Estamparias', desc: 'Que vivem da personalização e precisam de suprimentos confiáveis.' },
  { icon: Store, label: 'Lojas de Presentes', desc: 'Que personalizam produtos sob demanda para presentes únicos.' },
]

export default function TargetAudience() {
  return (
    <section className="py-24 bg-hero relative overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div className="text-white space-y-6">
            <span className="inline-block text-sm font-semibold bg-white/10 border border-white/20 rounded-full px-4 py-1.5 tracking-wide uppercase text-cyan-300">
              Para quem vivemos
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
              Para quem vive da{' '}
              <span className="text-gradient">personalização</span>
            </h2>
            <p className="text-white/75 text-lg leading-relaxed">
              Seja você um empreendedor, estúdio criativo, gráfica ou fotógrafo, a TECvision tem o equipamento, o insumo e o suporte técnico que o seu negócio precisa para não parar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-semibold px-7 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                Falar com especialista
              </a>
            </div>
          </div>

          {/* Right — profiles grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {PROFILES.map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-5 hover:bg-white/15 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-3 group-hover:bg-cyan-500/20 transition-colors">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-white font-semibold text-sm mb-1">{label}</p>
                <p className="text-white/55 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
