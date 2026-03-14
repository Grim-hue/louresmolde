import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Servicos from './pages/Servicos'
import Obras from './pages/Obras'
import Solucoes from './pages/Solucoes'
import Catalogos from './pages/Catalogos'
import Contactos from './pages/Contactos'
import PedidoOrcamento from './pages/PedidoOrcamento'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function AppContent() {
  return (
    <div className="min-h-screen bg-offwhite font-body text-graphite">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/obras" element={<Obras />} />
          <Route path="/solucoes" element={<Solucoes />} />
          <Route path="/catalogos" element={<Catalogos />} />
          <Route path="/contactos" element={<Contactos />} />
          <Route path="/pedido-orcamento" element={<PedidoOrcamento />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  )
}
