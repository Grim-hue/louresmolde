import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { X, ArrowRight } from 'lucide-react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import SectionHeader from '../ui/SectionHeader'
import { img } from '../../lib/utils'
import Badge from '../ui/Badge'
import { projectCategories } from '../../data/projects'

const cardVariants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, delay: i * 0.06, ease: [0.25, 0.1, 0.25, 1] },
  }),
}

function LightboxModal({ project, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
      >
        <motion.div
          initial={{ scale: 0.94, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.94, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative max-w-3xl w-full bg-graphite rounded-sm overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-sm transition-colors"
            aria-label="Fechar"
          >
            <X size={18} />
          </button>
          <img
            src={img(project.image)}
            alt={project.alt}
            className="w-full max-h-[75vh] object-contain"
          />
          <div className="p-4 flex items-center justify-between">
            <div>
              <p className="text-white font-semibold text-sm">{project.title}</p>
              <Badge className="mt-1">{project.material}</Badge>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function ProjectGallery({
  projects,
  featured = false,
  showFilter = false,
  title,
  subtitle,
}) {
  const [activeCategory, setActiveCategory] = useState('todos')
  const [lightbox, setLightbox] = useState(null)
  const [ref, inView] = useScrollReveal()

  const filtered =
    activeCategory === 'todos'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section
      className={`section-padding ${featured ? 'bg-white' : 'bg-offwhite'}`}
      aria-labelledby="gallery-heading"
    >
      <div className="container-wide">
        <div className="mb-10 md:mb-12">
          <SectionHeader
            eyebrow="Trabalhos Realizados"
            heading={title || 'Obras selecionadas'}
            body={
              subtitle ||
              'Uma amostra do nosso trabalho em ferro, alumínio e inox. Cada peça fabricada à medida para o projeto do cliente.'
            }
            align={featured ? 'center' : 'left'}
          />
        </div>

        {/* Category filter */}
        {showFilter && (
          <div className="flex flex-wrap gap-2 mb-8">
            {projectCategories.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActiveCategory(id)}
                className={`px-4 py-2 text-sm font-semibold rounded-sm transition-all duration-150 ${
                  activeCategory === id
                    ? 'bg-graphite text-white'
                    : 'bg-white text-steel border border-silver/50 hover:border-graphite/40'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        )}

        {/* Grid */}
        <div
          ref={ref}
          className={`grid gap-3 md:gap-4 ${
            featured
              ? 'grid-cols-1 sm:grid-cols-3'
              : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
          }`}
        >
          {filtered.map((project, i) => (
            <motion.article
              key={project.id}
              custom={i}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={cardVariants}
              className="group relative aspect-project overflow-hidden rounded-sm bg-silver/20 cursor-pointer"
              onClick={() => setLightbox(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setLightbox(project)}
              aria-label={`Ver imagem: ${project.title}`}
            >
              <img
                src={img(project.image)}
                alt={project.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-graphite/0 group-hover:bg-graphite/50 transition-all duration-300 flex items-end p-4">
                <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white font-semibold text-sm">{project.title}</p>
                  <Badge className="mt-1 bg-white/15 text-white/90">{project.material}</Badge>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {featured && (
          <div className="mt-10 text-center">
            <Link
              to="/obras"
              className="inline-flex items-center gap-2 px-6 py-3 bg-graphite text-white hover:bg-steel font-semibold text-sm rounded-md transition-all duration-200"
            >
              Ver todas as obras
              <ArrowRight size={15} />
            </Link>
          </div>
        )}
      </div>

      {lightbox && (
        <LightboxModal project={lightbox} onClose={() => setLightbox(null)} />
      )}
    </section>
  )
}
