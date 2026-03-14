import { useCallback } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import PageHeader from '../components/ui/PageHeader'
import SectionHeader from '../components/ui/SectionHeader'
import ValuePoints from '../components/sections/ValuePoints'
import QuoteCTA from '../components/sections/QuoteCTA'
import { useScrollReveal } from '../hooks/useScrollReveal'

const testimonials = [
  {
    name: 'João Ferreira',
    role: 'Proprietário',
    avatar: 'JF',
    color: '#1B3A6B',
    body: 'Trabalho impecável! Instalaram um portão automático e um gradeamento em ferro na nossa moradia. Cumpriram o prazo e o preço acordado ao cêntimo. Recomendo sem hesitar.',
    rating: 5,
  },
  {
    name: 'Ana Martins',
    role: 'Cliente particular',
    avatar: 'AM',
    color: '#2C6E49',
    body: 'Excelente qualidade nas escadas em inox que fizeram para a nossa moradia em Leiria. Desde o projeto até à montagem, uma equipa muito profissional e atenciosa.',
    rating: 5,
  },
  {
    name: 'Carlos Rodrigues',
    role: 'Diretor de Obra',
    avatar: 'CR',
    color: '#7B3F00',
    body: 'Já utilizámos a Louresmolde em três obras industriais no Ribatejo. Sempre com rigor técnico, materiais de qualidade e sem surpresas no final da obra.',
    rating: 5,
  },
  {
    name: 'Sofia Pereira',
    role: 'Arquiteta',
    avatar: 'SP',
    color: '#5C3D8F',
    body: 'A equipa foi muito prestável desde o primeiro contacto. Executaram um projeto de gradeamento em alumínio com um acabamento que superou completamente as minhas expectativas.',
    rating: 5,
  },
  {
    name: 'Miguel Santos',
    role: 'Empresário',
    avatar: 'MS',
    color: '#9B2226',
    body: 'Encomendámos peças em ferro forjado para decoração do nosso restaurante. Trabalho artesanal com um cuidado nos detalhes que os nossos clientes adoram e comentam.',
    rating: 5,
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

function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', slidesToScroll: 1 },
    [Autoplay({ delay: 4000, stopOnInteraction: false })],
  )

  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-wide">
        <div className="mb-12">
          <SectionHeader
            eyebrow="O que dizem os clientes"
            heading="Avaliações reais"
            align="center"
          />
        </div>

        <div className="relative">
          {/* Embla viewport */}
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex gap-5">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="flex-[0_0_100%] sm:flex-[0_0_calc(50%-10px)] lg:flex-[0_0_calc(33.333%-14px)] min-w-0"
                >
                  <div className="h-full bg-offwhite rounded-md p-7 shadow-card flex flex-col gap-5">
                    {/* Stars */}
                    <div className="flex gap-1">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} size={14} className="fill-accent text-accent" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-steel text-sm leading-relaxed flex-1 italic">
                      "{t.body}"
                    </p>

                    {/* Avatar + name */}
                    <div className="flex items-center gap-3 pt-2 border-t border-silver/30">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                        style={{ backgroundColor: t.color }}
                      >
                        {t.avatar}
                      </div>
                      <div>
                        <p className="font-heading font-semibold text-graphite text-sm">{t.name}</p>
                        <p className="text-smoke text-xs">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prev / Next */}
          <div className="flex justify-center gap-3 mt-8">
            <button
              onClick={prev}
              aria-label="Anterior"
              className="w-9 h-9 rounded-full bg-white border border-silver/40 shadow-sm flex items-center justify-center text-steel hover:text-brand hover:border-brand/30 transition-colors duration-200"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              aria-label="Próximo"
              className="w-9 h-9 rounded-full bg-white border border-silver/40 shadow-sm flex items-center justify-center text-steel hover:text-brand hover:border-brand/30 transition-colors duration-200"
            >
              <ChevronRight size={18} />
            </button>
          </div>
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
      <Testimonials />
      <ValuePoints />
      <QuoteCTA
        heading="Tem um projeto em mente?"
        body="Fale connosco. Analisamos o seu pedido e enviamos uma proposta adaptada ao que precisa."
      />
    </>
  )
}
