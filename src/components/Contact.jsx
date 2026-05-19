import { MessageCircle, MapPin, Phone, Navigation } from 'lucide-react'

function InstagramIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  )
}

const WA_LINK = 'https://web.whatsapp.com/send?phone=557999068449&text=Ol%C3%A1%20vim%20pelo%20site%20e%20gostaria%20de%20ajuda'
const IG_LINK = 'https://www.instagram.com/lojatecvision/'
const MAPS_LINK = 'https://www.google.com/maps/search/?api=1&query=Av.+Hermes+Fontes,+1000+Suiça+Aracaju+SE'
const MAPS_EMBED = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.1!2d-37.0731!3d-10.9167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDU1JzAwLjEiUyAzN8KwMDQnMjMuMiJX!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr'

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="inline-block text-sm font-semibold text-brand-600 bg-brand-50 border border-brand-100 rounded-full px-4 py-1.5 tracking-wide uppercase">
            Entre em Contato
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Pronto para te atender
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Fale com a gente pelo WhatsApp, visite nossa loja ou nos encontre no Instagram.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left — contact options */}
          <div className="space-y-5">
            {/* WhatsApp CTA — hero */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 bg-green-500 hover:bg-green-600 text-white rounded-3xl p-7 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-8 h-8" />
              </div>
              <div>
                <p className="font-bold text-xl">Chamar no WhatsApp</p>
                <p className="text-green-100 text-sm mt-0.5">(79) 99906-8449 · Clique para iniciar conversa</p>
              </div>
              <svg className="w-6 h-6 ml-auto opacity-70 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href={IG_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white rounded-3xl p-7 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <InstagramIcon className="w-8 h-8" />
              </div>
              <div>
                <p className="font-bold text-xl">@lojatecvision</p>
                <p className="text-white/80 text-sm mt-0.5">Siga no Instagram e acompanhe novidades</p>
              </div>
              <svg className="w-6 h-6 ml-auto opacity-70 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>

            {/* Address card */}
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-7 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-brand-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-1">Nosso endereço</p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Av. Hermes Fontes, 1000 - Suíça<br />
                    Aracaju - SE, 49050-000
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-brand-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-0.5">Telefone</p>
                  <p className="text-slate-600 text-sm">(79) 99906-8449</p>
                </div>
              </div>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-brand-700 hover:text-brand-600 font-semibold text-sm transition-colors"
              >
                <Navigation className="w-4 h-4" />
                Ver no Google Maps
              </a>
            </div>
          </div>

          {/* Right — Map embed */}
          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-card h-[480px] lg:h-auto min-h-[360px] bg-slate-100 relative">
            <iframe
              title="Localização TECvision"
              src={`https://maps.google.com/maps?q=Av.+Hermes+Fontes,+1000,+Su%C3%AD%C3%A7a,+Aracaju+-+SE,+49050-000&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '360px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            />
            <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-700 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-slate-900 text-sm">TECvision</p>
                <p className="text-slate-500 text-xs truncate">Av. Hermes Fontes, 1000 - Suíça, Aracaju - SE</p>
              </div>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 bg-brand-700 hover:bg-brand-600 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors"
              >
                Rotas
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
