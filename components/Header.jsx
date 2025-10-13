```jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-lg sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link to="/">
                <img 
                  src="https://le-de.cdn-website.com/059fc5b8357243ce9d6bd08c80ff4475/dms3rep/multi/opt/Dexcarte-Com%C3%A9rcio+De+Ferro+E+Constru%C3%A7%C3%B5es+Lda-222w.webp" 
                  alt="Dexcarte Logo" 
                  className="h-16" 
                />
              </Link>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-800 hover:text-yellow-600 font-medium">Home</Link>
              <Link to="/oqfazemos" className="text-gray-800 hover:text-yellow-600 font-medium">O que Fazemos</Link>
              <Link to="/catalogos" className="text-gray-800 hover:text-yellow-600 font-medium">Catálogos</Link>
              <Link to="/obras" className="text-gray-800 hover:text-yellow-600 font-medium">Obras</Link>
              <Link to="/pedido_orcamento" className="text-gray-800 hover:text-yellow-600 font-medium">Pedido de Orçamentos</Link>
              <Link to="/contactos" className="text-gray-800 hover:text-yellow-600 font-medium">Contactos</Link>
            </div>
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-800"
              >
                <i data-feather="menu"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg relative w-full z-30">
          <div className="container mx-auto px-4 py-2">
            <Link to="/" className="block py-2 text-gray-800 hover:text-yellow-600">Home</Link>
            <Link to="/oqfazemos" className="block py-2 text-gray-800 hover:text-yellow-600">O que Fazemos</Link>
            <Link to="/catalogos" className="block py-2 text-gray-800 hover:text-yellow-600">Catálogos</Link>
            <Link to="/obras" className="block py-2 text-gray-800 hover:text-yellow-600">Obras</Link>
            <Link to="/pedido_orcamento" className="block py-2 text-gray-800 hover:text-yellow-600">Pedido de Orçamentos</Link>
            <Link to="/contactos" className="block py-2 text-gray-800 hover:text-yellow-600">Contactos</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
```