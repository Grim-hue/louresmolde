import { motion } from 'framer-motion'
import { cn, img } from '../../lib/utils'

/**
 * Full-width page header used at the top of interior pages.
 * Dark background with optional background image overlay.
 */
export default function PageHeader({ title, subtitle, image, className }) {
  return (
    <section
      className={cn(
        'relative flex items-end min-h-[320px] md:min-h-[380px] bg-graphite overflow-hidden',
        className,
      )}
    >
      {/* Background image */}
      {image && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${img(image)}')` }}
          aria-hidden="true"
        />
      )}
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-graphite/90 via-graphite/60 to-graphite/30" aria-hidden="true" />

      <div className="relative z-10 container-wide pb-12 md:pb-16 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-lg md:text-xl text-silver max-w-2xl">{subtitle}</p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
