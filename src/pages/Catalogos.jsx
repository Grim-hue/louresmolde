import PageHeader from '../components/ui/PageHeader'
import CatalogGrid from '../components/sections/CatalogGrid'
import QuoteCTA from '../components/sections/QuoteCTA'
import { catalogGroups } from '../data/catalogs'

export default function Catalogos() {
  return (
    <>
      <PageHeader
        title="Catálogos"
        subtitle="Descarregue os nossos catálogos de elementos metálicos em formato PDF."
        image="/images/banner-hero.webp"
      />
      <CatalogGrid groups={catalogGroups} />
      <QuoteCTA
        heading="Precisa de uma peça específica?"
        body="Consulte os catálogos e envie-nos a referência. Também fabricamos peças à medida que não constam dos catálogos."
      />
    </>
  )
}
