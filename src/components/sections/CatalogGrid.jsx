import { motion } from 'framer-motion'
import { Download, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import SectionHeader from '../ui/SectionHeader'

function CatalogGroup({ group, index }) {
  const [imagesOpen, setImagesOpen] = useState(false)
  const [ref, inView] = useScrollReveal()

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
      className="bg-white rounded-sm overflow-hidden shadow-card"
      aria-labelledby={`catalog-group-${group.id}`}
    >
      {/* Group header */}
      <div className="p-5 md:p-6 border-b border-silver/30">
        <h3
          id={`catalog-group-${group.id}`}
          className="font-heading font-bold text-graphite text-lg"
        >
          {group.title}
        </h3>
      </div>

      {/* PDF downloads */}
      {group.catalogs.length > 0 && (
        <div className="p-5 md:p-6">
          <p className="text-xs font-semibold text-smoke uppercase tracking-wider mb-3">
            Catálogos PDF
          </p>
          <ul className="flex flex-col gap-2">
            {group.catalogs.map(({ name, file }) => (
              <li key={file}>
                <a
                  href={file}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-sm border border-silver/40 hover:border-accent/50 hover:bg-accent/5 transition-all duration-150 group"
                >
                  <span className="text-sm text-steel group-hover:text-graphite transition-colors">
                    {name}
                  </span>
                  <Download
                    size={14}
                    className="shrink-0 text-smoke group-hover:text-accent transition-colors"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Image gallery toggle */}
      {group.images.length > 0 && (
        <div className="border-t border-silver/20">
          <button
            onClick={() => setImagesOpen((v) => !v)}
            className="w-full flex items-center justify-between px-5 py-4 text-sm font-semibold text-steel hover:text-graphite transition-colors duration-150"
            aria-expanded={imagesOpen}
          >
            <span>Ver imagens ({group.images.length})</span>
            {imagesOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          {imagesOpen && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 p-5 pt-0">
              {group.images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${group.title} — imagem ${i + 1}`}
                  className="w-full aspect-square object-cover rounded-sm bg-silver/20"
                  loading="lazy"
                />
              ))}
            </div>
          )}
        </div>
      )}
    </motion.section>
  )
}

export default function CatalogGrid({ groups }) {
  return (
    <section className="section-padding bg-offwhite" aria-labelledby="catalogs-heading">
      <div className="container-wide">
        <div className="mb-12">
          <SectionHeader
            eyebrow="Catálogos"
            heading="Elementos e acessórios"
            body="Descarregue os catálogos em PDF para consultar dimensões, referências e opções disponíveis para cada categoria de produto."
            align="center"
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {groups.map((group, i) => (
            <CatalogGroup key={group.id} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
