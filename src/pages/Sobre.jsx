import { motion } from 'framer-motion'
import { Shield, Award, Users, Zap } from 'lucide-react'
import PageHeader from '../components/ui/PageHeader'
import SectionHeader from '../components/ui/SectionHeader'
import ValuePoints from '../components/sections/ValuePoints'
import QuoteCTA from '../components/sections/QuoteCTA'
import { useScrollReveal } from '../hooks/useScrollReveal'

const pillars = [
  {
    Icon: Shield,
    title: 'Qualidade',
    body: 'Rigor nas especificações, nos materiais e nos acabamentos. Cada peça sai da oficina após verificação cuidadosa, de forma a cumprir o que foi acordado com o cliente.',
  },
  {
    Icon: Award,
    title: 'Competência',
    body: 'Equipa experiente com domínio técnico em ferro, alumínio e inox. Conhecemos os materiais, os processos e os limites de cada aplicação.',
  },
  {
    Icon: Zap,
    title: 'Inovação',
    body: 'Procuramos continuamente melhores processos e soluções técnicas. A inovação não é um objetivo em si — é uma consequência de fazer bem o trabalho.',
  },
  {
    Icon: Users,
    title: 'Compromisso',
    body: 'Tratamos cada projeto com a mesma seriedade, independentemente da dimensão. O cliente sabe o que esperar — e entregamos o que prometemos.',
  },
]

function AboutContent() {
  const [ref, inView] = useScrollReveal()

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-xs font-heading font-semibold uppercase tracking-[0.18em] text-accent mb-4">
              A empresa
            </p>
            <h2 className="font-heading font-bold text-graphite text-3xl md:text-4xl leading-tight mb-6">
              18 anos a construir
              <br />
              em ferro, alumínio e inox.
            </h2>
            <div className="space-y-4 text-steel text-base leading-relaxed">
              <p>
                A Louresmolde – Sociedade de Construções Metálicas, Lda. é uma
                empresa especializada na conceção, fabricação e montagem de
                estruturas metálicas de pequeno e médio porte, sediada em
                Carregado, Portugal.
              </p>
              <p>
                Desde a fundação, a principal atividade da empresa assenta na
                fabricação de peças e estruturas à medida para clientes de
                construção civil, instalações industriais e projetos privados.
                Trabalhamos igualmente no fabrico de moldes para a indústria
                automóvel, área que exige elevados padrões de precisão e controlo.
              </p>
              <p>
                Ao longo dos anos consolidámos um processo de trabalho direto:
                ouvimos o projeto, dimensionamos a solução correta, fabricamos em
                oficina própria e montamos em obra. Sem intermediários e com
                responsabilidade de início ao fim.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-sm overflow-hidden bg-silver/20">
              <img
                src="/images/hero-metal-sculpture.jpg"
                alt="Trabalho de construção metálica da Louresmolde"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Stat badge */}
            <div className="absolute -bottom-5 -left-5 bg-brand text-white p-5 rounded-sm shadow-lg">
              <p className="font-heading font-bold text-3xl">18+</p>
              <p className="text-white/70 text-xs mt-0.5">anos de experiência</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Materials() {
  const [ref, inView] = useScrollReveal()

  const materials = [
    {
      name: 'Ferro',
      description:
        'Resistência e versatilidade para estruturas, portões, grades e elementos decorativos. O ferro forjado permite acabamentos clássicos e modernos com elevada durabilidade.',
    },
    {
      name: 'Alumínio',
      description:
        'Leve, resistente à corrosão e de manutenção simples. Ideal para exteriores, portões, caixilharia e estruturas onde o peso é uma condicionante.',
    },
    {
      name: 'Inox',
      description:
        'Elegante e altamente resistente à corrosão. Indicado para corrimões, guardas, espaços de uso intensivo e ambientes com exposição à humidade.',
    },
  ]

  return (
    <section className="section-padding bg-offwhite">
      <div className="container-wide">
        <div className="mb-12">
          <SectionHeader
            eyebrow="Materiais"
            heading="Ferro, alumínio e inox"
            body="Cada material tem propriedades distintas. Ajudamos a escolher o mais adequado para cada projeto e ambiente de instalação."
            align="center"
          />
        </div>

        <div ref={ref} className="grid sm:grid-cols-3 gap-6 md:gap-8">
          {materials.map(({ name, description }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-white rounded-sm p-7 shadow-card"
            >
              <p className="font-heading font-bold text-graphite text-2xl mb-3">{name}</p>
              <div className="w-8 h-0.5 bg-accent mb-4" />
              <p className="text-steel text-sm leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PhilosophyPillars() {
  const [ref, inView] = useScrollReveal()

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="mb-12">
          <SectionHeader
            eyebrow="A nossa filosofia"
            heading="O que nos orienta"
            align="center"
          />
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {pillars.map(({ Icon, title, body }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col gap-4 p-6 rounded-sm border border-silver/40 hover:border-brand/30 hover:shadow-card transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-sm bg-brand/8 flex items-center justify-center">
                <Icon size={20} className="text-brand" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-graphite text-base mb-2">{title}</h3>
                <p className="text-smoke text-sm leading-relaxed">{body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Sobre() {
  return (
    <>
      <PageHeader
        title="Sobre a Louresmolde"
        subtitle="18 anos de construção metálica — conceção, fabricação e montagem."
        image="/images/banner hero 2-2880w.jpg"
      />
      <AboutContent />
      <Materials />
      <PhilosophyPillars />
      <ValuePoints />
      <QuoteCTA
        heading="Tem um projeto em mente?"
        body="Fale connosco. Analisamos o seu pedido e enviamos uma proposta adaptada ao que precisa."
      />
    </>
  )
}
