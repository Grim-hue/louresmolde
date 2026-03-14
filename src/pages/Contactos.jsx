import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Facebook } from 'lucide-react'
import PageHeader from '../components/ui/PageHeader'
import ContactForm from '../components/sections/ContactForm'
import { useScrollReveal } from '../hooks/useScrollReveal'

const contactItems = [
  {
    Icon: Mail,
    label: 'Email',
    value: 'louresmolde@gmail.com',
    href: 'mailto:louresmolde@gmail.com',
  },
  {
    Icon: Phone,
    label: 'Telefone',
    value: '263 859 145',
    href: 'tel:+351263859145',
  },
  {
    Icon: Phone,
    label: 'Telemóvel',
    value: '935 770 086',
    href: 'tel:+351935770086',
  },
  {
    Icon: MapPin,
    label: 'Morada',
    value: 'Quinta do Peixoto Carregado Park, Armazém a Torre, 2580-512 Carregado',
    href: null,
  },
  {
    Icon: Clock,
    label: 'Horário',
    value: 'Segunda a Sexta: 09:00–13:00 e 15:00–18:00',
    href: null,
  },
]

export default function Contactos() {
  const [ref, inView] = useScrollReveal()

  return (
    <>
      <PageHeader
        title="Contactos"
        subtitle="Fale connosco para esclarecer dúvidas ou enviar um pedido."
        image="/images/banner hero 2-2880w.jpg"
      />

      <section className="section-padding bg-offwhite">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact info */}
            <div>
              <motion.div
                ref={ref}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <p className="text-xs font-heading font-semibold uppercase tracking-[0.18em] text-accent mb-3">
                  Contacto direto
                </p>
                <h2 className="font-heading font-bold text-graphite text-2xl md:text-3xl mb-2">
                  Estamos disponíveis
                </h2>
                <p className="text-steel text-base mb-8 leading-relaxed">
                  Para pedidos de orçamento, questões técnicas ou qualquer outra dúvida,
                  contacte-nos por telefone, email ou através do formulário.
                </p>

                <ul className="space-y-5">
                  {contactItems.map(({ Icon, label, value, href }) => (
                    <li key={label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-sm bg-brand/8 flex items-center justify-center shrink-0">
                        <Icon size={18} className="text-brand" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-smoke uppercase tracking-wider mb-0.5">
                          {label}
                        </p>
                        {href ? (
                          <a
                            href={href}
                            className="text-sm text-graphite hover:text-brand transition-colors duration-150"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-sm text-graphite">{value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-silver/30">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-steel hover:text-brand transition-colors duration-150"
                  >
                    <Facebook size={16} />
                    Siga-nos no Facebook
                  </a>
                </div>
              </motion.div>

              {/* Map */}
              <div className="mt-8 rounded-sm overflow-hidden border border-silver/30 bg-silver/10 h-56">
                <iframe
                  title="Localização Louresmolde"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3103.0!2d-8.98!3d39.01!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDAwJzM2LjAiTiA4wrA1OCc0OC4wIlc!5e0!3m2!1spt!2spt!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-white rounded-sm p-7 md:p-8 shadow-card"
            >
              <h3 className="font-heading font-bold text-graphite text-xl mb-6">
                Envie-nos uma mensagem
              </h3>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
