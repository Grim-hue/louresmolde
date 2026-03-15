import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { img } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const accordionItems = [
  {
    id: 1,
    title: 'Portões',
    imageUrl: img('images/service-gates.webp'),
  },
  {
    id: 2,
    title: 'Escadas',
    imageUrl: img('images/service-stairs.webp'),
  },
  {
    id: 3,
    title: 'Estruturas',
    imageUrl: img('images/service-structures.webp'),
  },
  {
    id: 4,
    title: 'Gradeamentos',
    imageUrl: img('images/cerca.webp'),
  },
  {
    id: 5,
    title: 'Corrimões',
    imageUrl: img('images/corrimão.webp'),
  },
];

const AccordionItem = ({ item, isActive, onMouseEnter }) => {
  return (
    <div
      className={`
        relative h-[250px] md:h-[350px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out flex-shrink-0
        ${isActive ? 'w-[200px] md:w-[300px]' : 'w-[40px] md:w-[50px]'}
      `}
      onMouseEnter={onMouseEnter}
    >
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <span
        className={`
          absolute text-white text-sm md:text-lg font-semibold whitespace-nowrap
          transition-all duration-300 ease-in-out
          ${
            isActive
              ? 'bottom-6 left-1/2 -translate-x-1/2 rotate-0'
              : 'w-auto text-left bottom-24 left-1/2 -translate-x-1/2 rotate-90'
          }
        `}
      >
        {item.title}
      </span>
    </div>
  );
};

export function LandingAccordionItem() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ref, inView] = useScrollReveal();

  const handleItemHover = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-wide">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row items-center justify-between gap-12"
        >
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-graphite leading-tight">
              Trabalhos Realizados
            </h1>
            <p className="mt-6 text-lg text-steel max-w-xl mx-auto md:mx-0">
              Alguns dos nossos projetos — uma seleção do trabalho realizado em ferro, alumínio e inox para clientes residenciais, comerciais e industriais.
            </p>
            <div className="mt-8">
              <Link
                to="/obras"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-colors duration-300"
              >
                Ver Todos os Trabalhos
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="flex flex-row items-center justify-center gap-6 md:gap-8">
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => handleItemHover(index)}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
