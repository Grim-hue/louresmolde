```jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalogos from './pages/Catalogos';
import Obras from './pages/Obras';
import Contactos from './pages/Contactos';
import PedidoOrcamento from './pages/PedidoOrcamento';
import OQueFazemos from './pages/OQueFazemos';

function App() {
  return (
    <Router>
      <div className="bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogos" element={<Catalogos />} />
          <Route path="/obras" element={<Obras />} />
          <Route path="/contactos" element={<Contactos />} />
          <Route path="/pedido_orcamento" element={<PedidoOrcamento />} />
          <Route path="/oqfazemos" element={<OQueFazemos />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
```