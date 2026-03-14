import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { Send, CheckCircle, Phone, Mail } from 'lucide-react'
import { useState } from 'react'
import PageHeader from '../components/ui/PageHeader'
import SectionHeader from '../components/ui/SectionHeader'
import { cn } from '../lib/utils'

const schema = z.object({
  name: z.string().min(2, 'Nome obrigatório'),
  company: z.string().optional(),
  email: z.string().email('Email inválido'),
  phone: z.string().min(9, 'Telefone inválido'),
  service: z.string().min(1, 'Selecione um serviço'),
  projectType: z.string().min(1, 'Selecione o tipo de obra'),
  location: z.string().optional(),
  message: z.string().min(20, 'Por favor descreva o projeto com mais detalhe'),
  consent: z.boolean().refine((v) => v === true, 'Deve aceitar a política de privacidade'),
})

const serviceOptions = [
  'Portões e Gradeamentos',
  'Escadas e Corrimões',
  'Estruturas Metálicas',
  'Peças Artesanais',
  'Soluções em Inox',
  'Soluções em Alumínio',
  'Contentores e Unidades Funcionais',
  'Montagem e Instalação',
  'Outro / Não sei ainda',
]

const projectTypes = [
  'Obra nova',
  'Reabilitação / Substituição',
  'Ampliação',
  'Reparação / Manutenção',
  'Projeto industrial',
  'Outro',
]

function Field({ label, error, required, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold text-steel uppercase tracking-wider">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      {children}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}

const inputClass = (hasError) =>
  cn(
    'w-full px-4 py-3 text-sm bg-white border rounded-sm text-graphite placeholder:text-smoke transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-brand/30',
    hasError ? 'border-red-400' : 'border-silver/50 focus:border-brand',
  )

const WEB3FORMS_KEY = '5574a6e4-9198-48ca-a7c1-9c8a54779c61'

export default function PedidoOrcamento() {
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({ resolver: zodResolver(schema) })

  const onSubmit = async (data) => {
    setSubmitError(false)
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          from_name: data.name,
          subject: `[Orçamento] ${data.service} — ${data.name}`,
          Nome: data.name,
          Empresa: data.company || '—',
          Email: data.email,
          Telefone: data.phone,
          Serviço: data.service,
          'Tipo de obra': data.projectType,
          Localização: data.location || '—',
          'Descrição do projeto': data.message,
        }),
      })
      const json = await res.json()
      if (json.success) {
        setSubmitted(true)
        reset()
      } else {
        setSubmitError(true)
      }
    } catch {
      setSubmitError(true)
    }
  }

  if (submitted) {
    return (
      <>
        <PageHeader
          title="Pedido de Orçamento"
          subtitle="Envie os detalhes do seu projeto e respondemos com uma proposta."
        />
        <section className="section-padding bg-offwhite">
          <div className="container-wide max-w-lg mx-auto text-center">
            <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
            <h2 className="font-heading font-bold text-graphite text-2xl mb-3">
              Pedido enviado com sucesso
            </h2>
            <p className="text-steel text-base mb-8">
              Recebemos o seu pedido e entraremos em contacto brevemente para
              apresentar uma proposta.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-sm text-accent hover:underline"
            >
              Enviar outro pedido
            </button>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <PageHeader
        title="Pedido de Orçamento"
        subtitle="Preencha o formulário com os detalhes do seu projeto. Respondemos com uma proposta sem compromissos."
        image="/images/banner hero 1-2880w.jpg"
      />

      <section className="section-padding bg-offwhite">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-sm p-7 md:p-9 shadow-card"
              >
                <SectionHeader
                  eyebrow="Formulário"
                  heading="Descreva o seu projeto"
                  align="left"
                />

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="mt-8 flex flex-col gap-5"
                  aria-label="Formulário de pedido de orçamento"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Nome" required error={errors.name?.message}>
                      <input
                        {...register('name')}
                        type="text"
                        placeholder="O seu nome"
                        autoComplete="name"
                        className={inputClass(!!errors.name)}
                      />
                    </Field>
                    <Field label="Empresa" error={errors.company?.message}>
                      <input
                        {...register('company')}
                        type="text"
                        placeholder="Nome da empresa (opcional)"
                        autoComplete="organization"
                        className={inputClass(!!errors.company)}
                      />
                    </Field>
                    <Field label="Email" required error={errors.email?.message}>
                      <input
                        {...register('email')}
                        type="email"
                        placeholder="email@empresa.pt"
                        autoComplete="email"
                        className={inputClass(!!errors.email)}
                      />
                    </Field>
                    <Field label="Telefone" required error={errors.phone?.message}>
                      <input
                        {...register('phone')}
                        type="tel"
                        placeholder="9xx xxx xxx"
                        autoComplete="tel"
                        className={inputClass(!!errors.phone)}
                      />
                    </Field>
                    <Field label="Serviço pretendido" required error={errors.service?.message}>
                      <select {...register('service')} className={inputClass(!!errors.service)}>
                        <option value="">Selecione o serviço</option>
                        {serviceOptions.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Tipo de obra" required error={errors.projectType?.message}>
                      <select
                        {...register('projectType')}
                        className={inputClass(!!errors.projectType)}
                      >
                        <option value="">Selecione o tipo</option>
                        {projectTypes.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  <Field label="Localização do projeto" error={errors.location?.message}>
                    <input
                      {...register('location')}
                      type="text"
                      placeholder="Concelho ou localidade (opcional)"
                      className={inputClass(!!errors.location)}
                    />
                  </Field>

                  <Field
                    label="Descrição do projeto"
                    required
                    error={errors.message?.message}
                  >
                    <textarea
                      {...register('message')}
                      rows={6}
                      placeholder="Descreva o projeto: dimensões aproximadas, materiais, quantidades, prazo, qualquer detalhe que ajude a preparar uma proposta..."
                      className={cn(inputClass(!!errors.message), 'resize-y min-h-[140px]')}
                    />
                  </Field>

                  <div className="flex items-start gap-3">
                    <input
                      {...register('consent')}
                      type="checkbox"
                      id="quote-consent"
                      className="mt-0.5 w-4 h-4 accent-brand cursor-pointer"
                    />
                    <label
                      htmlFor="quote-consent"
                      className="text-xs text-steel leading-relaxed cursor-pointer"
                    >
                      Aceito que os meus dados sejam utilizados para responder ao meu pedido de
                      orçamento, de acordo com a{' '}
                      <a href="/politica-privacidade" className="text-accent hover:underline">
                        Política de Privacidade
                      </a>
                      .
                    </label>
                  </div>
                  {errors.consent && (
                    <p className="text-xs text-red-500 -mt-3">{errors.consent.message}</p>
                  )}

                  {submitError && (
                    <p className="text-sm text-red-500">
                      Ocorreu um erro ao enviar o pedido. Por favor tente novamente ou contacte-nos por email.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="self-start inline-flex items-center gap-2 px-7 py-3.5 bg-accent hover:bg-accent-light text-white font-semibold text-sm rounded-md transition-all duration-200 active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none"
                  >
                    {isSubmitting ? 'A enviar…' : 'Enviar Pedido'}
                    <Send size={15} />
                  </button>
                </form>
              </motion.div>
            </div>

            {/* Sidebar */}
            <aside>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="bg-brand text-white rounded-sm p-7 shadow-card sticky top-24"
              >
                <h3 className="font-heading font-bold text-white text-lg mb-6">
                  Precisa de falar diretamente?
                </h3>
                <div className="space-y-4">
                  <a
                    href="tel:+351263859145"
                    className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors"
                  >
                    <Phone size={16} className="shrink-0 text-accent-light" />
                    263 859 145
                  </a>
                  <a
                    href="tel:+351935770086"
                    className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors"
                  >
                    <Phone size={16} className="shrink-0 text-accent-light" />
                    935 770 086
                  </a>
                  <a
                    href="mailto:louresmolde@gmail.com"
                    className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors"
                  >
                    <Mail size={16} className="shrink-0 text-accent-light" />
                    louresmolde@gmail.com
                  </a>
                </div>

                <div className="mt-7 pt-6 border-t border-white/15">
                  <p className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-3">
                    Horário
                  </p>
                  <p className="text-sm text-white/75">Segunda a Sexta</p>
                  <p className="text-sm text-white/75">09:00–13:00 | 15:00–18:00</p>
                </div>

                <div className="mt-6 pt-5 border-t border-white/15 space-y-3">
                  <p className="text-xs font-semibold text-white/60 uppercase tracking-wider">
                    Garantias
                  </p>
                  {[
                    'Resposta em 1–2 dias úteis',
                    'Proposta sem compromissos',
                    'Projeto executado por nós do início ao fim',
                  ].map((g) => (
                    <div key={g} className="flex items-start gap-2">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-accent-light shrink-0" aria-hidden="true" />
                      <p className="text-xs text-white/70">{g}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
