import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import SectionHeader from '../ui/SectionHeader'
import { industries } from '../../data/industries'

export default function IndustriesGrid({ compact = false }) {
  const [ref, inView] = useScrollReveal()

  return (
    <section className="section-padding bg-offwhite" aria-labelledby="industries-heading">
      <div className="container-wide">
        <div className="mb-12">
          <SectionHeader
            eyebrow="Soluções"
            heading="Para que tipo de projetos trabalhamos"
            body="Servimos clientes de construção civil, indústria, espaços comerciais e particulares — sempre com a mesma atenção ao detalhe."
            align="center"
          />
        </div>

        <div
          ref={ref}
          className={`grid gap-4 md:gap-5 ${
            compact ? 'sm:grid-cols-2 lg:grid-cols-3' : 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'
          }`}
        >
          {industries.map(({ id, title, Icon, description, useCases }, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-white rounded-sm p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300 flex flex-col gap-4"
            >
              <div className="w-10 h-10 rounded-sm bg-brand/8 flex items-center justify-center">
                <Icon size={20} className="text-brand" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-graphite text-base mb-2">{title}</h3>
                {!compact && (
                  <p className="text-smoke text-sm leading-relaxed mb-3">{description}</p>
                )}
                <ul className="space-y-1">
                  {useCases.slice(0, compact ? 2 : 4).map((uc) => (
                    <li key={uc} className="flex items-start gap-1.5 text-xs text-steel">
                      <span className="mt-1 w-1 h-1 rounded-full bg-accent shrink-0" aria-hidden="true" />
                      {uc}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/solucoes"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-light transition-colors duration-150"
          >
            Ver todas as soluções
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  )
}
