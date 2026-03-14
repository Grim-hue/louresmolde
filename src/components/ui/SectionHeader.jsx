import { motion } from 'framer-motion'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { cn } from '../../lib/utils'

/**
 * Reusable section header with optional eyebrow label, heading, and body text.
 * Renders with a subtle fade-up scroll reveal.
 */
export default function SectionHeader({
  eyebrow,
  heading,
  body,
  align = 'center',
  light = false,
  className,
}) {
  const [ref, inView] = useScrollReveal()

  const alignClasses = {
    center: 'text-center mx-auto',
    left: 'text-left',
    right: 'text-right ml-auto',
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={cn('max-w-2xl', alignClasses[align], className)}
    >
      {eyebrow && (
        <p
          className={cn(
            'text-xs font-heading font-semibold uppercase tracking-[0.18em] mb-3',
            light ? 'text-silver' : 'text-accent',
          )}
        >
          {eyebrow}
        </p>
      )}
      {heading && (
        <h2
          className={cn(
            'font-heading font-bold text-3xl md:text-4xl leading-tight',
            light ? 'text-white' : 'text-graphite',
          )}
        >
          {heading}
        </h2>
      )}
      {body && (
        <p
          className={cn(
            'mt-4 text-base md:text-lg leading-relaxed',
            light ? 'text-silver' : 'text-steel',
          )}
        >
          {body}
        </p>
      )}
    </motion.div>
  )
}
