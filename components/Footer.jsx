```jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/">
              <img 
                src="https://le-de.cdn-website.com/059fc5b8357243ce9d6bd08c80ff4475/dms3rep/multi/opt/Dexcarte-Com%C3%A9rcio+De+Ferro+E+Constru%C3%A7%C3%B5es+Lda-222w.webp" 
                alt="Dexcarte Logo" 
                className="h-16 mb-4" 
              />
            </Link>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="hover:text-yellow-400"><i data-feather="facebook"></i></a>
              <a href="#"><img src="https://le-de.cdn-website.com/059fc5b8357243ce9d6bd08c80ff4475/dms3rep/multi/opt/Livro+3-120w.png" alt="Livro de Reclamações" className="h-6"></a>
            </div>
            <h4 className="text-lg font-bold mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
              <li><Link to="/oqfazemos" className="hover:text-yellow-400">O que Fazemos</Link></li>
              <li><Link to="/catalogos" className="hover:text-yellow-400">Catálogos</Link></li>
              <li><Link to="/obras" className="hover:text-yellow-400">Obras</Link></li>
              <li><Link to="/pedido_orcamento" className="hover:text-yellow-400">Pedido de Orçamentos</Link></li>
              <li><Link to="/contactos" className="hover:text-yellow-400">Contactos</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Onde estamos</h4>
            <address className="not-italic mb-6">
              <p className="mb-2">Quinta do Peixoto Carregado Park</p>
              <p className="mb-2">Armazém a Torre</p>
              <p className="mb-2">2580-512 Carregado</p>
              <a href="https://maps.app.goo.gl/mJbLnRNt2CqscvuL7" className="text-yellow-400 hover:underline">Ver no mapa</a>
            </address>
            <h4 className="text-lg font-bold mb-2">Horário:</h4>
            <p>Segunda a Sexta, das 09.00h às 13:00 e das 15:00 às 18.00h</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Contacte-nos</h4>
            <p className="mb-4">Para dúvidas ou questões contacte-nos:</p>
            <div className="mb-4">
              <a href="mailto:dexcarte@gmail.com" className="flex items-center hover:text-yellow-400 mb-2">
                <i data-feather="mail" class="mr-2"></i> dexcarte@gmail.com
              </a>
            </div>
            <h5 className="font-bold mb-2">Fale connosco:</h5>
            <div className="mb-2">
              <a href="tel:263859145" className="flex items-center hover:text-yellow-400">
                <i data-feather="phone" class="mr-2"></i> Telefone: 263859145
              </a>
            </div>
            <div className="mb-2">
              <a href="tel:935770086" className="flex items-center hover:text-yellow-400">
                <i data-feather="smartphone" class="mr-2"></i> Telemóvel: 935770086
              </a>
            </div>
            <div className="mb-2">
              <i data-feather="printer" class="inline mr-2"></i> Fax: 219593691
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          <div className="mb-4">
            <a href="#" className="hover:text-yellow-400 mr-4">Política de Privacidade</a>
            <a href="#" className="hover:text-yellow-400">Política de Cookies</a>
          </div>
          <p>© 2025 All rights reserved to Dexcarte-Comércio de Ferro Forjado e Construções</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```