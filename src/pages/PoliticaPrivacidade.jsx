import PageHeader from '../components/ui/PageHeader'

export default function PoliticaPrivacidade() {
  return (
    <>
      <PageHeader
        title="Política de Privacidade"
        subtitle="Como recolhemos, usamos e protegemos os seus dados pessoais."
      />

      <section className="section-padding bg-offwhite">
        <div className="container-wide max-w-3xl">
          <div className="bg-white rounded-sm p-8 md:p-10 shadow-card space-y-8 text-steel text-sm leading-relaxed">

            <div>
              <h2 className="font-heading font-bold text-graphite text-lg mb-3">1. Responsável pelo tratamento</h2>
              <p>
                Louresmolde – Sociedade de Construções Metálicas, Lda., com sede em Quinta do Peixoto
                Carregado Park, Armazém a Torre, 2580-512 Carregado. Email:{' '}
                <a href="mailto:louresmolde@gmail.com" className="text-accent hover:underline">
                  louresmolde@gmail.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-graphite text-lg mb-3">2. Dados recolhidos</h2>
              <p>
                Recolhemos apenas os dados fornecidos voluntariamente através dos formulários de contacto
                e pedido de orçamento: nome, empresa, email, telefone e descrição do projeto.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-graphite text-lg mb-3">3. Finalidade</h2>
              <p>
                Os dados são utilizados exclusivamente para responder a pedidos de orçamento e esclarecer
                dúvidas enviadas pelo utilizador. Não são utilizados para fins comerciais ou partilhados
                com terceiros.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-graphite text-lg mb-3">4. Conservação</h2>
              <p>
                Os dados são conservados pelo tempo estritamente necessário para dar resposta ao pedido,
                não excedendo 12 meses.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-graphite text-lg mb-3">5. Direitos do utilizador</h2>
              <p>
                O utilizador tem direito de acesso, retificação, apagamento e oposição ao tratamento
                dos seus dados, podendo exercê-los através do email{' '}
                <a href="mailto:louresmolde@gmail.com" className="text-accent hover:underline">
                  louresmolde@gmail.com
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-graphite text-lg mb-3">6. Cookies</h2>
              <p>
                Este site não utiliza cookies de rastreamento ou publicidade. Podem ser utilizados
                cookies técnicos estritamente necessários ao funcionamento do site.
              </p>
            </div>

            <p className="text-xs text-smoke border-t border-silver/30 pt-6">
              Última atualização: março de 2026
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
