import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { img } from '../../lib/utils'

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
