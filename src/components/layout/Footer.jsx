import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Facebook, ExternalLink } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Início' },
  { to: '/sobre', label: 'Sobre Nós' },
  { to: '/servicos', label: 'Serviços' },
  { to: '/obras', label: 'Obras Realizadas' },
  { to: '/catalogos', label: 'Catálogos' },
  { to: '/solucoes', label: 'Soluções' },
  { to: '/contactos', label: 'Contactos' },
  { to: '/pedido-orcamento', label: 'Pedir Orçamento' },
]

const services = [
  'Portões e Gradeamentos',
  'Escadas e Corrimões',
  'Estruturas Metálicas',
  'Peças Artesanais',
  'Soluções em Inox',
  'Soluções em Alumínio',
]

export default function Footer() {
  return (
    <footer className="bg-graphite text-silver" aria-label="Rodapé">
      {/* Main footer content */}
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-5 focus-visible:outline-accent">
              <img
                src="/images/logo louresmolde white.png"
                alt="Louresmolde – Construções Metálicas"
                style={{ height: '40px', width: 'auto' }}
              />
            </Link>
            <p className="text-sm text-smoke leading-relaxed mb-6">
              Sociedade de Construções Metálicas, Lda.
              <br />
              Especializados em ferro, alumínio e inox desde 2006.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-sm bg-white/5 hover:bg-white/10 transition-colors duration-150"
                aria-label="Siga-nos no Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.livroreclamacoes.pt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-sm bg-white/5 hover:bg-white/10 transition-colors duration-150 text-xs text-smoke hover:text-white"
                aria-label="Livro de Reclamações Eletrónico"
              >
                <ExternalLink size={12} />
                Livro de Reclamações
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-heading font-semibold text-sm uppercase tracking-wider mb-4">
              Navegação
            </h3>
            <ul className="space-y-2">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-smoke hover:text-white transition-colors duration-150"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-heading font-semibold text-sm uppercase tracking-wider mb-4">
              Serviços
            </h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    to="/servicos"
                    className="text-sm text-smoke hover:text-white transition-colors duration-150"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-heading font-semibold text-sm uppercase tracking-wider mb-4">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:louresmolde@gmail.com"
                  className="flex items-start gap-2.5 text-sm text-smoke hover:text-white transition-colors duration-150"
                >
                  <Mail size={15} className="mt-0.5 shrink-0 text-accent" />
                  louresmolde@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+351263859145"
                  className="flex items-center gap-2.5 text-sm text-smoke hover:text-white transition-colors duration-150"
                >
                  <Phone size={15} className="shrink-0 text-accent" />
                  263 859 145
                </a>
              </li>
              <li>
                <a
                  href="tel:+351935770086"
                  className="flex items-center gap-2.5 text-sm text-smoke hover:text-white transition-colors duration-150"
                >
                  <Phone size={15} className="shrink-0 text-accent" />
                  935 770 086
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5 text-sm text-smoke">
                  <MapPin size={15} className="mt-0.5 shrink-0 text-accent" />
                  <span>
                    Quinta do Peixoto Carregado Park,
                    <br />
                    Armazém a Torre,
                    <br />
                    2580-512 Carregado
                  </span>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-2.5 text-sm text-smoke">
                  <Clock size={15} className="mt-0.5 shrink-0 text-accent" />
                  <span>
                    Seg – Sex: 09:00–13:00
                    <br />
                    15:00–18:00
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-wide py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-smoke">
          <p>© {new Date().getFullYear()} Louresmolde – Sociedade de Construções Metálicas, Lda.</p>
          <div className="flex items-center gap-4">
            <Link to="/politica-privacidade" className="hover:text-white transition-colors duration-150">
              Política de Privacidade
            </Link>
            <a
              href="https://www.livroreclamacoes.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-white transition-colors duration-150"
            >
              Livro de Reclamações <ExternalLink size={11} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
