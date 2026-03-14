import { motion } from 'framer-motion'
import { MessageSquare, Ruler, Hammer, CheckCircle2 } from 'lucide-react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import SectionHeader from '../ui/SectionHeader'

const steps = [
  {
    number: '01',
    Icon: MessageSquare,
    title: 'Consulta',
    body: 'Ouvimos o projeto, entendemos os requisitos técnicos e definimos os materiais e o tipo de solução mais adequados.',
  },
  {
    number: '02',
    Icon: Ruler,
    title: 'Conceção',
    body: 'Desenvolvemos o desenho técnico e a proposta de orçamento, com especificação de materiais, dimensões e prazo de execução.',
  },
  {
    number: '03',
    Icon: Hammer,
    title: 'Fabricação',
    body: 'Produzimos em oficina própria com controlo de qualidade em cada fase — corte, soldadura, acabamento e preparação para montagem.',
  },
  {
    number: '04',
    Icon: CheckCircle2,
    title: 'Montagem',
    body: 'A nossa equipa assegura a instalação em obra, com ajuste final, fixação segura e verificação de todos os acabamentos.',
  },
]

export default function ProcessSteps() {
  const [ref, inView] = useScrollReveal()

  return (
    <section className="section-padding bg-graphite text-white" aria-labelledby="process-heading">
      <div className="container-wide">
        <div className="mb-12">
          <SectionHeader
            eyebrow="Como trabalhamos"
            heading="Do pedido à entrega"
            body="Um processo direto, sem surpresas. Gerimos cada fase para que o resultado final corresponda exatamente ao acordado."
            align="center"
            light
          />
        </div>

        <div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative"
        >
          {/* Connector line — desktop only */}
          <div
            className="hidden lg:block absolute top-5 left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] h-px bg-white/15"
            aria-hidden="true"
          />

          {steps.map(({ number, Icon, title, body }, i) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative flex flex-col gap-4"
            >
              {/* Step circle */}
              <div className="relative w-10 h-10 rounded-full bg-accent flex items-center justify-center z-10 shrink-0">
                <Icon size={18} className="text-white" />
              </div>

              <div>
                <p className="text-accent text-xs font-heading font-bold uppercase tracking-wider mb-1">
                  {number}
                </p>
                <h3 className="font-heading font-bold text-white text-lg mb-2">{title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
