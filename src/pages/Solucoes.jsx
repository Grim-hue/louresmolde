import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHeader from '../components/ui/PageHeader'
import SectionHeader from '../components/ui/SectionHeader'
import QuoteCTA from '../components/sections/QuoteCTA'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { industries } from '../data/industries'

function IndustryBlock({ industry, index }) {
  const [ref, inView] = useScrollReveal()
  const isEven = index % 2 === 0
  const { Icon } = industry

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="bg-white rounded-sm overflow-hidden shadow-card"
    >
      <div className="p-7 md:p-8">
        <div className="flex items-start gap-5 mb-5">
          <div className="w-11 h-11 rounded-sm bg-brand/8 flex items-center justify-center shrink-0">
            <Icon size={22} className="text-brand" />
          </div>
          <div>
            <h2 className="font-heading font-bold text-graphite text-xl leading-tight">
              {industry.title}
            </h2>
          </div>
        </div>

        <p className="text-steel text-sm leading-relaxed mb-5">{industry.description}</p>

        <div>
          <p className="text-xs font-semibold text-smoke uppercase tracking-wider mb-3">
            Exemplos de aplicação
          </p>
          <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
            {industry.useCases.map((uc) => (
              <li key={uc} className="flex items-start gap-2 text-sm text-steel">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
                {uc}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 pt-5 border-t border-silver/30">
          <Link
            to="/pedido-orcamento"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-light transition-colors duration-150 group"
          >
            Pedir orçamento
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default function Solucoes() {
  const [ref, inView] = useScrollReveal()

  return (
    <>
      <PageHeader
        title="Soluções"
        subtitle="Para que tipo de projetos e clientes trabalhamos."
        image="/images/service-structures.webp"
      />

      <section className="section-padding bg-offwhite">
        <div className="container-wide">
          <div className="mb-12">
            <SectionHeader
              eyebrow="Áreas de atuação"
              heading="Servimos vários tipos de clientes"
              body="Seja uma obra de construção civil, uma instalação industrial ou um projeto privado, temos experiência e capacidade para executar o que precisa."
              align="center"
            />
          </div>

          <div ref={ref} className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
            {industries.map((industry, i) => (
              <IndustryBlock key={industry.id} industry={industry} index={i} />
            ))}
          </div>
        </div>
      </section>

      <QuoteCTA
        heading="Qual é o seu setor?"
        body="Independentemente da área, podemos analisar o seu projeto e apresentar uma solução adequada."
      />
    </>
  )
}
