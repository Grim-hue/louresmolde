import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Settings, Clock, Layers } from 'lucide-react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { img } from '../../lib/utils'

const cards = [
  {
    Icon: Clock,
    title: '18 Anos de Experiência',
    body: 'Mais de dezoito anos a fabricar e montar estruturas metálicas, acumulando conhecimento técnico e prático em cada projeto.',
  },
  {
    Icon: Layers,
    title: 'Ferro, Alumínio e Inox',
    body: 'Trabalhamos com os três materiais principais da construção metálica, escolhendo o mais adequado para cada aplicação e ambiente.',
  },
  {
    Icon: Settings,
    title: 'Da Conceção à Montagem',
    body: 'Gerimos todo o processo: estudo técnico, fabrico em oficina e montagem final em obra, sem necessidade de coordenar vários fornecedores.',
  },
  {
    Icon: ShieldCheck,
    title: 'Soluções à Medida',
    body: 'Cada projeto é único. Adaptamos dimensões, materiais e acabamentos ao que o cliente precisa, sem soluções pré-fabricadas genéricas.',
  },
]

export function ValuePointsCards() {
  const [ref, inView] = useScrollReveal()

  return (
    <section className="section-padding bg-brand text-white" aria-labelledby="why-heading">
      <div className="container-wide">
        <div className="mb-12 md:mb-14 text-center">
          <p className="text-xs font-heading font-semibold uppercase tracking-[0.18em] text-accent-light mb-3">
            Porquê a Louresmolde
          </p>
          <h2
            id="why-heading"
            className="font-heading font-bold text-white text-3xl md:text-4xl leading-tight mb-4"
          >
            Rigor de quem faz por ofício
          </h2>
          <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Não somos intermediários. Projetamos, fabricamos e instalamos — com a responsabilidade de quem assina o trabalho do início ao fim.
          </p>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {cards.map(({ Icon, title, body }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col gap-4"
            >
              <div className="w-10 h-10 rounded-sm bg-white/10 flex items-center justify-center shrink-0">
                <Icon size={20} className="text-accent-light" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-white text-base mb-2">{title}</h3>
                <p className="text-white/65 text-sm leading-relaxed">{body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const stats = [
  { num: 18,  suffix: '+', label: 'Anos de experiência', body: 'Fundada em 2006, ao serviço da construção civil e indústria.' },
  { num: 3,   suffix: '',  label: 'Materiais dominados',  body: 'Ferro, alumínio e inox — o certo para cada ambiente.' },
  { num: 100, suffix: '%', label: 'Projetos à medida',    body: 'Sem soluções genéricas. Cada peça para o projeto específico.' },
  { num: 0,   suffix: '',  label: 'Intermediários',        body: 'Do estudo técnico à montagem — tudo pela nossa equipa.' },
]

function CountUp({ to, suffix, inView, delay = 0 }) {
  const [count, setCount] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current || to === 0) return
    started.current = true

    const duration = 1800
    const steps = 60
    const increment = to / steps
    let current = 0
    let step = 0

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        step++
        current = Math.min(Math.round(increment * step), to)
        setCount(current)
        if (current >= to) clearInterval(interval)
      }, duration / steps)
    }, delay)

    return () => clearTimeout(timer)
  }, [inView, to, delay])

  return <>{to === 0 ? 0 : count}{suffix}</>
}

export default function ValuePoints() {
  const [ref, inView] = useScrollReveal()

  return (
    <section aria-labelledby="value-heading" className="section-padding bg-offwhite">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — floating image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-sm overflow-hidden bg-silver/20 shadow-card">
              <img
                src={img('images/obra-escada-exterior.jpeg')}
                alt="Escada exterior em construção metálica"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right — eyebrow + heading + stats */}
          <div>
            <p className="text-xs font-heading font-semibold uppercase tracking-[0.18em] text-accent mb-4">
              Porquê a Louresmolde
            </p>
            <h2
              id="value-heading"
              className="font-heading font-bold text-graphite text-3xl md:text-4xl leading-tight mb-10"
            >
              Rigor de quem faz<br />por ofício.
            </h2>

            <div ref={ref} className="grid grid-cols-2 gap-x-8 gap-y-8">
              {stats.map(({ num, suffix, label, body }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <p className="font-heading font-bold text-accent text-5xl leading-none mb-1">
                    <CountUp to={num} suffix={suffix} inView={inView} delay={i * 100} />
                  </p>
                  <p className="font-heading font-semibold text-graphite text-sm mb-2 leading-snug">{label}</p>
                  <p className="text-smoke text-xs leading-relaxed">{body}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
