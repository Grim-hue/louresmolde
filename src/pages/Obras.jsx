import PageHeader from '../components/ui/PageHeader'
import ProjectGallery from '../components/sections/ProjectGallery'
import QuoteCTA from '../components/sections/QuoteCTA'
import { projects } from '../data/projects'

export default function Obras() {
  return (
    <>
      <PageHeader
        title="Obras Realizadas"
        subtitle="Uma seleção dos projetos executados em ferro, alumínio e inox."
        image="/images/banner hero 2-2880w.jpg"
      />
      <ProjectGallery
        projects={projects}
        showFilter
        title="Projetos executados"
        subtitle="Portões, vedações, escadas, corrimões e estruturas — todos fabricados e montados pela nossa equipa."
      />
      <QuoteCTA
        heading="Quer um projeto como estes?"
        body="Envie-nos o seu pedido e preparamos uma proposta adaptada às suas necessidades."
        variant="dark"
      />
    </>
  )
}
