import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn, img } from '../../lib/utils'

const navLinks = [
  { to: '/', label: 'Início', end: true },
  { to: '/sobre', label: 'Sobre Nós' },
  { to: '/servicos', label: 'Serviços' },
  { to: '/obras', label: 'Obras' },
  { to: '/catalogos', label: 'Catálogos' },
  { to: '/contactos', label: 'Contactos' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const linkColor = scrolled ? 'text-steel hover:text-graphite' : 'text-white/90 hover:text-white'
  const activeColor = scrolled ? 'text-brand font-semibold' : 'text-white font-semibold'

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,box-shadow] duration-500 ease-in-out',
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent',
      )}
    >
      {/* Bottom border fades in separately */}
      <div
        className={cn(
          'absolute inset-x-0 bottom-0 h-px bg-silver/30 transition-opacity duration-500',
          scrolled ? 'opacity-100' : 'opacity-0',
        )}
      />
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo — crossfade between white and dark versions */}
          <Link to="/" className="flex-shrink-0 relative focus-visible:outline-accent" style={{ height: '40px', width: '173px' }}>
            <img
              src={img('images/logo louresmolde white.png')}
              alt="Louresmolde – Construções Metálicas"
              className={cn('absolute inset-0 transition-opacity duration-500', scrolled ? 'opacity-0' : 'opacity-100')}
              style={{ height: '40px', width: '173px', objectFit: 'contain', objectPosition: 'left center' }}
            />
            <img
              src={img('images/logo louresmolde 1.png')}
              alt=""
              aria-hidden="true"
              className={cn('absolute inset-0 transition-opacity duration-500', scrolled ? 'opacity-100' : 'opacity-0')}
              style={{ height: '40px', width: '173px', objectFit: 'contain', objectPosition: 'left center' }}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Navegação principal">
            {navLinks.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  cn(
                    'px-3 py-2 text-sm font-body font-medium tracking-wide transition-colors duration-500 rounded-sm relative group',
                    isActive ? activeColor : linkColor,
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {label}
                    <span
                      className={cn(
                        'absolute bottom-0 left-3 right-3 h-px bg-accent transition-transform duration-200 origin-left',
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
                      )}
                    />
                  </>
                )}
              </NavLink>
            ))}
            <Link
              to="/pedido-orcamento"
              className={cn(
                'ml-4 px-4 py-2 text-sm font-semibold rounded-md transition-all duration-200 active:scale-[0.98]',
                scrolled
                  ? 'bg-accent text-white hover:bg-accent-light'
                  : 'bg-accent text-white hover:bg-accent-light',
              )}
            >
              Pedir Orçamento
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className={cn(
              'md:hidden p-2 rounded-md transition-colors duration-500',
              scrolled ? 'text-graphite hover:bg-silver/20' : 'text-white hover:bg-white/10',
            )}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-white border-t border-silver/30 shadow-lg overflow-hidden"
          >
            <nav className="container-wide py-4 flex flex-col gap-1" aria-label="Menu móvel">
              {navLinks.map(({ to, label, end }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={end}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'px-3 py-3 text-sm font-medium rounded-sm transition-colors duration-150',
                      isActive
                        ? 'text-brand bg-brand/5 font-semibold'
                        : 'text-steel hover:text-graphite hover:bg-silver/20',
                    )
                  }
                >
                  {label}
                </NavLink>
              ))}
              <Link
                to="/pedido-orcamento"
                onClick={() => setMobileOpen(false)}
                className="mt-2 mx-3 px-4 py-3 text-sm font-semibold text-center rounded-md bg-accent text-white hover:bg-accent-light transition-colors duration-150"
              >
                Pedir Orçamento
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
