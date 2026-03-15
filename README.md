# Louresmolde

Website for **Louresmolde – Sociedade de Construções Metálicas, Lda.**, a Portuguese metalworking company based in Carregado, specializing in metal constructions (ferro, alumínio, inox).

## Live Site

https://louresmolde.github.io/louresmolde

## Tech Stack

- **React 18** + **Vite**
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Router** for navigation
- **GitHub Pages** hosting

## Getting Started

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Features

- Responsive design (mobile-first)
- Service catalog with images
- Project portfolio gallery
- Quote request form with validation
- Catalog downloads (PDF)
- SEO optimized (sitemap, robots.txt, JSON-LD)
- Google Analytics integration

## Project Structure

```
src/
├── components/
│   ├── layout/       # Header, Footer
│   ├── sections/     # Page sections
│   └── ui/           # Reusable UI components
├── pages/            # Route pages
├── data/             # Static data (services, projects)
├── hooks/            # Custom React hooks
└── lib/              # Utilities
```

## Deployment

Automatic deployment to GitHub Pages via GitHub Actions on push to `main` branch.
