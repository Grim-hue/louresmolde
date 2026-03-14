import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHeader from '../components/ui/PageHeader'
import SectionHeader from '../components/ui/SectionHeader'
import QuoteCTA from '../components/sections/QuoteCTA'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { services } from '../data/services'

function ServiceBlock({ service, index }) {
  const [ref, inView] = useScrollReveal()
  const isEven = index % 2 === 0

  return (
    <section
      id={service.id}
      className={`section-padding-sm ${isEven ? 'bg-white' : 'bg-offwhite'}`}
      aria-labelledby={`service-${service.id}-heading`}
    >
      <div className="container-wide">
        <div
          className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
            !isEven ? 'lg:grid-flow-col' : ''
          }`}
        >
          {/* Text */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: isEven ? -24 : 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
            className={!isEven ? 'lg:order-2' : ''}
          >
            <p className="text-xs font-heading font-semibold uppercase tracking-[0.18em] text-accent mb-3">
              {String(index + 1).padStart(2, '0')}
            </p>
            <h2
              id={`service-${service.id}-heading`}
              className="font-heading font-bold text-graphite text-2xl md:text-3xl leading-tight mb-4"
            >
              {service.name}
            </h2>
            <p className="text-steel text-base leading-relaxed mb-4">
              {service.description}
            </p>
            <div className="mb-6 p-4 bg-silver/15 rounded-sm border-l-2 border-accent">
              <p className="text-xs font-semibold text-steel uppercase tracking-wider mb-1">
                Quando é útil
              </p>
              <p className="text-sm text-steel">{service.customerNeed}</p>
            </div>
            <Link
              to="/pedido-orcamento"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-light text-white font-semibold text-sm rounded-md transition-all duration-200"
            >
              Pedir Orçamento
              <ArrowRight size={15} />
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? 24 : -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className={!isEven ? 'lg:order-1' : ''}
          >
            <div className="aspect-service rounded-sm overflow-hidden bg-silver/20">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default function Servicos() {
  return (
    <>
      <PageHeader
        title="Serviços"
        subtitle="Do portão ao corrimão, da estrutura ao detalhe — soluções metálicas à medida."
        image="/images/service-structures.webp"
      />

      {/* Services intro */}
      <section className="section-padding-sm bg-offwhite">
        <div className="container-wide">
          <SectionHeader
            eyebrow="O que fazemos"
            heading="Fabricação metálica em todas as vertentes"
            body="Trabalhamos ferro, alumínio e inox para executar qualquer tipo de estrutura, elemento de acesso ou peça metálica à medida do projeto."
            align="left"
          />
        </div>
      </section>

      {services.map((service, i) => (
        <ServiceBlock key={service.id} service={service} index={i} />
      ))}

      <QuoteCTA
        heading="Não encontrou o que procura?"
        body="Os nossos serviços não se limitam ao que está listado. Fale connosco sobre o seu projeto específico."
      />
    </>
  )
}
