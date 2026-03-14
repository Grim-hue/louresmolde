import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] },
  }),
}

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-graphite overflow-hidden"
      aria-label="Secção principal"
    >
      {/* Background image — hero-metal-sculpture.jpg (first iteration) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-metal-sculpture.jpg')" }}
        aria-hidden="true"
      />

      {/* Uniform dark overlay */}
      <div
        className="absolute inset-0 bg-black/60"
        aria-hidden="true"
      />

      {/* Content — centered */}
      <div className="relative z-10 container-wide text-center pt-24 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Headline */}
          <motion.h1
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-heading font-bold text-white drop-shadow-lg mb-4"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', lineHeight: 1.0, letterSpacing: '0.02em' }}
          >
            LOURESMOLDE
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            custom={0.2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-2xl md:text-3xl text-white font-light drop-shadow-md mb-8"
          >
            Construções Metálicas
          </motion.h2>

          {/* Body paragraph — frosted backdrop */}
          <motion.p
            custom={0.35}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-lg md:text-xl text-white leading-relaxed mb-10 max-w-3xl mx-auto bg-black/20 backdrop-blur-sm px-6 py-5 rounded-lg drop-shadow-md"
          >
            A arte do metal ao serviço da engenharia. Especializados na conceção,
            fabrico e montagem de estruturas metálicas com 18 anos de experiência
            em ferro, alumínio e inox.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            custom={0.5}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contactos"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand hover:bg-brand-light text-white font-bold text-sm rounded-lg transition-all duration-300 shadow-lg active:scale-[0.98]"
            >
              Contacte-nos
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/obras"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand font-bold text-sm rounded-lg transition-all duration-300 active:scale-[0.98]"
            >
              Ver Trabalhos
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce"
        aria-hidden="true"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  )
}
