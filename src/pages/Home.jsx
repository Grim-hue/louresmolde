import HeroSection from '../components/sections/HeroSection'
import ServicesGrid from '../components/sections/ServicesGrid'
import ValuePoints from '../components/sections/ValuePoints'
import ProjectGallery from '../components/sections/ProjectGallery'
import IndustriesGrid from '../components/sections/IndustriesGrid'
import ProcessSteps from '../components/sections/ProcessSteps'
import QuoteCTA from '../components/sections/QuoteCTA'
import { services } from '../data/services'
import { featuredProjects } from '../data/projects'
import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

function IntroStatement() {
  const [ref, inView] = useScrollReveal()

  return (
    <section className="section-padding-sm bg-white" aria-label="Apresentação">
      <div className="container-wide">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-3xl"
        >
          <p className="text-xs font-heading font-semibold uppercase tracking-[0.18em] text-accent mb-4">
            Louresmolde – Sociedade de Construções Metálicas, Lda.
          </p>
          <p className="font-heading font-bold text-graphite text-2xl md:text-3xl leading-snug mb-5">
            Especializados na conceção, fabricação e montagem de estruturas
            metálicas de pequeno e médio porte.
          </p>
          <p className="text-steel text-base md:text-lg leading-relaxed">
            Trabalhamos com ferro, alumínio e inox para criar soluções duráveis,
            bem executadas e adaptadas a cada projeto. Há 18 anos em
            Carregado, ao serviço de clientes de construção civil, indústria e
            particulares que exigem qualidade sem margem para improvisos.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroStatement />
      <ServicesGrid services={services} limit={4} />
      <ValuePoints />
      <ProjectGallery
        projects={featuredProjects}
        featured
        title="Alguns dos nossos projetos"
        subtitle="Uma seleção do trabalho realizado em ferro, alumínio e inox."
      />
      <IndustriesGrid compact />
      <ProcessSteps />
      <QuoteCTA />
    </>
  )
}
