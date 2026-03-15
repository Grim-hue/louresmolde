import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, lazy, Suspense } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

const Home = lazy(() => import('./pages/Home'))
const Sobre = lazy(() => import('./pages/Sobre'))
const Servicos = lazy(() => import('./pages/Servicos'))
const Obras = lazy(() => import('./pages/Obras'))
const Solucoes = lazy(() => import('./pages/Solucoes'))
const Catalogos = lazy(() => import('./pages/Catalogos'))
const Contactos = lazy(() => import('./pages/Contactos'))
const PedidoOrcamento = lazy(() => import('./pages/PedidoOrcamento'))
const PoliticaPrivacidade = lazy(() => import('./pages/PoliticaPrivacidade'))

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function AppContent() {
  return (
    <div className="min-h-screen bg-offwhite font-body text-graphite overflow-x-hidden">
      <Header />
      <main>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/obras" element={<Obras />} />
            <Route path="/solucoes" element={<Solucoes />} />
            <Route path="/catalogos" element={<Catalogos />} />
            <Route path="/contactos" element={<Contactos />} />
            <Route path="/pedido-orcamento" element={<PedidoOrcamento />} />
            <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter basename="/louresmolde">
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  )
}
