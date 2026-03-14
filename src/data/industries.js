import { Building2, Factory, Store, Home, Wrench } from 'lucide-react'

export const industries = [
  {
    id: 'construcao',
    title: 'Construção Civil',
    Icon: Building2,
    description:
      'Fornecemos estruturas, guardas, corrimões, portões e gradeamentos para obras de construção nova e reabilitação. Trabalhamos diretamente com empreiteiros gerais e arquitetos.',
    useCases: ['Guardas e corrimões de escada', 'Portões de entrada', 'Gradeamentos de varandas', 'Vedações exteriores'],
  },
  {
    id: 'industrial',
    title: 'Instalações Industriais',
    Icon: Factory,
    description:
      'Fabricamos plataformas, estruturas de suporte, escadas industriais e contentores metálicos para armazéns, fábricas e instalações técnicas com requisitos de robustez.',
    useCases: ['Escadas e plataformas industriais', 'Contentores e estantes metálicas', 'Estruturas de suporte', 'Portões de acesso'],
  },
  {
    id: 'comercial',
    title: 'Espaços Comerciais',
    Icon: Store,
    description:
      'Desenvolvemos soluções metálicas para espaços comerciais, escritórios e equipamentos públicos que exigem acabamento cuidado e adequação às normas de segurança.',
    useCases: ['Grades de segurança', 'Corrimões de acesso', 'Divisórias e painéis metálicos', 'Portões e cancelas'],
  },
  {
    id: 'privado',
    title: 'Projetos Privados',
    Icon: Home,
    description:
      'Executamos projetos à medida para habitações particulares: portões, vedações, escadas, varandas e peças decorativas em ferro, alumínio e inox com atenção ao detalhe.',
    useCases: ['Portões de habitação', 'Vedações e cercas', 'Varandas e terraços', 'Escadas interiores'],
  },
  {
    id: 'especial',
    title: 'Equipamentos Especiais',
    Icon: Wrench,
    description:
      'Para projetos com requisitos específicos desenvolvemos peças, ferramentas e estruturas especiais, incluindo moldes e componentes para a indústria automóvel.',
    useCases: ['Moldes industriais', 'Ferramentas e gabaritos', 'Componentes à medida', 'Protótipos metálicos'],
  },
]
