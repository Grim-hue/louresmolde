import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import SectionHeader from '../ui/SectionHeader'
import { img } from '../../lib/utils'

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
}

function ServiceCard({ service, index }) {
  const [ref, inView] = useScrollReveal()

  return (
    <motion.article
      ref={ref}
      custom={index}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={cardVariants}
      className="group bg-white rounded-sm overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300"
    >
      {/* Image */}
      <div className="aspect-service overflow-hidden bg-silver/20">
        <img
          src={img(service.image)}
          alt={service.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-5 md:p-6">
        <h3 className="font-heading font-bold text-graphite text-lg mb-2 leading-snug">
          {service.name}
        </h3>
        <p className="text-smoke text-sm leading-relaxed mb-4">{service.shortDescription}</p>
        <Link
          to={service.href}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-light transition-colors duration-150 group/link"
        >
          Ver serviço
          <ArrowRight size={14} className="transition-transform duration-200 group-hover/link:translate-x-1" />
        </Link>
      </div>
    </motion.article>
  )
}

export default function ServicesGrid({ services, limit }) {
  const displayed = limit ? services.slice(0, limit) : services
  const [headerRef, headerInView] = useScrollReveal()

  return (
    <section className="section-padding bg-offwhite" aria-labelledby="services-heading">
      <div className="container-wide">
        <div ref={headerRef} className="mb-12 md:mb-14">
          <SectionHeader
            eyebrow="Serviços"
            heading="O que fabricamos"
            body="Da conceção à montagem — soluções metálicas à medida em ferro, alumínio e inox para projetos residenciais, comerciais e industriais."
            align="center"
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {displayed.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {limit && services.length > limit && (
          <div className="mt-10 text-center">
            <Link
              to="/servicos"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-graphite text-graphite hover:bg-graphite hover:text-white font-semibold text-sm rounded-md transition-all duration-200"
            >
              Ver todos os serviços
              <ArrowRight size={15} />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
