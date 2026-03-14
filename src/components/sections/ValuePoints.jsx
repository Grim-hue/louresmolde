import { motion } from 'framer-motion'
import { ShieldCheck, Settings, Clock, Layers } from 'lucide-react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import SectionHeader from '../ui/SectionHeader'

const points = [
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

export default function ValuePoints() {
  const [ref, inView] = useScrollReveal()

  return (
    <section className="section-padding bg-brand text-white" aria-labelledby="value-heading">
      <div className="container-wide">
        <div className="mb-12 md:mb-14">
          <SectionHeader
            eyebrow="Porquê a Louresmolde"
            heading="Rigor de quem faz por ofício"
            body="Não somos intermediários. Projetamos, fabricamos e instalamos — com a responsabilidade de quem assina o trabalho do início ao fim."
            align="center"
            light
          />
        </div>

        <div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {points.map(({ Icon, title, body }, i) => (
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
