import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import fs from 'fs'
import path from 'path'

export default defineConfig({
  base: '/louresmolde/',
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: 'images', dest: '.' },
        { src: 'catalogos', dest: '.' },
        { src: 'robots.txt', dest: '.' },
      ],
    }),
    {
      name: 'generate-sitemap',
      closeBundle() {
        const routes = [
          '/',
          '/sobre',
          '/servicos',
          '/obras',
          '/solucoes',
          '/catalogos',
          '/contactos',
          '/pedido-orcamento',
          '/politica-privacidade',
        ]
        const baseUrl = 'https://louresmolde.github.io/louresmolde'
        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route}</loc>
    <changefreq>monthly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`
        fs.writeFileSync(path.join(process.cwd(), 'dist', 'sitemap.xml'), sitemap)
      },
    },
    {
      name: 'serve-root-assets',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const url = req.url?.split('?')[0]
          if (url?.startsWith('/images/') || url?.startsWith('/catalogos/')) {
            const filePath = path.join(process.cwd(), url)
            if (fs.existsSync(filePath)) {
              const ext = path.extname(filePath).slice(1).toLowerCase()
              const mimeTypes = {
                jpg: 'image/jpeg',
                jpeg: 'image/jpeg',
                webp: 'image/webp',
                png: 'image/png',
                svg: 'image/svg+xml',
                pdf: 'application/pdf',
                ico: 'image/x-icon',
              }
              res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream')
              res.end(fs.readFileSync(filePath))
              return
            }
          }
          next()
        })
      },
    },
  ],
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), './src'),
    },
  },
})
