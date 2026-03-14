import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Send, CheckCircle } from 'lucide-react'
import { useState } from 'react'
import { cn } from '../../lib/utils'

const schema = z.object({
  name: z.string().min(2, 'Nome obrigatório'),
  email: z.string().email('Email inválido'),
  phone: z.string().optional(),
  company: z.string().optional(),
  subject: z.string().min(1, 'Selecione um assunto'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
  consent: z.boolean().refine((v) => v === true, 'Deve aceitar a política de privacidade'),
})

function Field({ label, error, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold text-steel uppercase tracking-wider">{label}</label>
      {children}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}

const inputClass = (hasError) =>
  cn(
    'w-full px-4 py-3 text-sm bg-offwhite border rounded-sm text-graphite placeholder:text-smoke transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-brand/30',
    hasError ? 'border-red-400' : 'border-silver/50 focus:border-brand',
  )

const WEB3FORMS_KEY = '5574a6e4-9198-48ca-a7c1-9c8a54779c61'

export default function ContactForm({ compact = false }) {
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
          subject: `[Contacto] ${data.subject} — ${data.name}`,
          Nome: data.name,
          Email: data.email,
          Telefone: data.phone || '—',
          Empresa: data.company || '—',
          Assunto: data.subject,
          Mensagem: data.message,
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
      <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
        <CheckCircle size={40} className="text-green-500" />
        <h3 className="font-heading font-bold text-graphite text-xl">Mensagem enviada</h3>
        <p className="text-steel text-sm max-w-sm">
          Obrigado pelo contacto. Responderemos brevemente.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-2 text-sm text-accent hover:underline"
        >
          Enviar outra mensagem
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5" aria-label="Formulário de contacto">
      <div className={`grid gap-5 ${compact ? 'grid-cols-1' : 'sm:grid-cols-2'}`}>
        <Field label="Nome *" error={errors.name?.message}>
          <input
            {...register('name')}
            type="text"
            placeholder="O seu nome"
            autoComplete="name"
            className={inputClass(!!errors.name)}
          />
        </Field>
        <Field label="Email *" error={errors.email?.message}>
          <input
            {...register('email')}
            type="email"
            placeholder="email@empresa.pt"
            autoComplete="email"
            className={inputClass(!!errors.email)}
          />
        </Field>
        <Field label="Telefone" error={errors.phone?.message}>
          <input
            {...register('phone')}
            type="tel"
            placeholder="9xx xxx xxx"
            autoComplete="tel"
            className={inputClass(!!errors.phone)}
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
      </div>

      <Field label="Assunto *" error={errors.subject?.message}>
        <select {...register('subject')} className={inputClass(!!errors.subject)}>
          <option value="">Selecione um assunto</option>
          <option value="Pedido de Orçamento">Pedido de Orçamento</option>
          <option value="Informação sobre Serviços">Informação sobre Serviços</option>
          <option value="Dúvida Técnica">Dúvida Técnica</option>
          <option value="Outro">Outro</option>
        </select>
      </Field>

      <Field label="Mensagem *" error={errors.message?.message}>
        <textarea
          {...register('message')}
          rows={5}
          placeholder="Descreva o seu projeto ou pedido..."
          className={cn(inputClass(!!errors.message), 'resize-y min-h-[120px]')}
        />
      </Field>

      <div className="flex items-start gap-3">
        <input
          {...register('consent')}
          type="checkbox"
          id="consent"
          className="mt-0.5 w-4 h-4 accent-brand cursor-pointer"
        />
        <label htmlFor="consent" className="text-xs text-steel leading-relaxed cursor-pointer">
          Aceito que os meus dados sejam utilizados para responder ao meu pedido, de acordo com
          a{' '}
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
          Ocorreu um erro. Por favor tente novamente ou contacte-nos diretamente por email.
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="self-start inline-flex items-center gap-2 px-7 py-3.5 bg-accent hover:bg-accent-light text-white font-semibold text-sm rounded-md transition-all duration-200 active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none"
      >
        {isSubmitting ? 'A enviar…' : 'Enviar Mensagem'}
        <Send size={15} />
      </button>
    </form>
  )
}
