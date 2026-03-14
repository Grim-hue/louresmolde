import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'
import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function QuoteCTA({
  heading = 'Pronto para o seu projeto?',
  body = 'Diga-nos o que precisa. Respondemos com uma proposta realista e sem compromissos.',
  variant = 'dark', // 'dark' | 'accent'
}) {
  const [ref, inView] = useScrollReveal()
  const bg = variant === 'accent' ? 'bg-accent' : 'bg-graphite'

  return (
    <section className={`${bg} py-16 md:py-20`} aria-labelledby="cta-heading">
      <div className="container-wide">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        >
          <div className="max-w-xl">
            <h2
              id="cta-heading"
              className="font-heading font-bold text-white text-2xl md:text-3xl leading-tight mb-3"
            >
              {heading}
            </h2>
            <p className="text-white/65 text-base">{body}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              to="/pedido-orcamento"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent hover:bg-accent-light text-white font-semibold text-sm rounded-md transition-all duration-200 active:scale-[0.98]"
            >
              Peça um Orçamento
              <ArrowRight size={15} />
            </Link>
            <a
              href="tel:+351263859145"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-white/30 text-white hover:bg-white/10 font-semibold text-sm rounded-md transition-all duration-200"
            >
              <Phone size={15} />
              263 859 145
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
