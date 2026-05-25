import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram, Send, Mail } from 'lucide-react'

const socials = [
  { label: 'GitHub',    icon: Github,    href: 'https://github.com/tomochietti' },
  { label: 'LinkedIn',  icon: Linkedin,  href: 'https://linkedin.com/in/tomochietti' },
  { label: 'Instagram', icon: Instagram, href: 'https://instagram.com/tomochietti' },
  { label: 'tom.ochietti@gmail.com', icon: Mail, href: 'mailto:tom.ochietti@gmail.com' },
]

const ease = [0.25, 0.1, 0.25, 1] as const

const ENDPOINT = 'https://formsubmit.co/ajax/tom.ochietti@gmail.com'

type Fields = { name: string; email: string; message: string }
type Errors = Partial<Fields>
type Status = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const [fields, setFields] = useState<Fields>({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus]  = useState<Status>('idle')

  const validate = (): Errors => {
    const e: Errors = {}
    if (!fields.name.trim())    e.name    = 'Votre nom est requis.'
    if (!fields.email.trim())   e.email   = 'Votre adresse mail est requise.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
                                e.email   = 'Adresse mail invalide.'
    if (!fields.message.trim()) e.message = 'Un message est requis.'
    return e
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFields(f => ({ ...f, [name]: value }))
    if (errors[name as keyof Errors]) setErrors(prev => ({ ...prev, [name]: undefined }))
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setStatus('sending')

    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name:    fields.name,
          email:   fields.email,
          message: fields.message,
        }),
      })
      if (res.ok) {
        setStatus('success')
        setFields({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="contact-wrapper">
      <motion.section
        className="contact"
        id="contact"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.65, ease }}
      >
        <h2 className="contact__title">Me contacter</h2>
        <p className="contact__desc">
          Disponible pour des opportunités en développement full stack.
          N'hésitez pas à me contacter.
        </p>

        <div className="contact__links">
          {socials.map(({ label, icon: Icon, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="pill pill--link">
              <Icon size={14} strokeWidth={1.75} />
              {label}
            </a>
          ))}
        </div>

        {status === 'success' ? (
          <div className="form-success">
            <p>Message envoyé ! Je vous répondrai dès que possible.</p>
            <button className="form-reset" onClick={() => setStatus('idle')}>
              Envoyer un autre message
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={onSubmit} noValidate>
            <div className="form-row">
              <div className={`form-group${errors.name ? ' form-group--error' : ''}`}>
                <label className="form-label" htmlFor="cf-name">Votre nom</label>
                <input
                  id="cf-name" name="name" type="text"
                  className="form-input"
                  value={fields.name} onChange={onChange}
                  placeholder="Nom Prénom"
                  autoComplete="name"
                />
                {errors.name && <span className="form-error">{errors.name}</span>}
              </div>

              <div className={`form-group${errors.email ? ' form-group--error' : ''}`}>
                <label className="form-label" htmlFor="cf-email">Votre adresse mail</label>
                <input
                  id="cf-email" name="email" type="email"
                  className="form-input"
                  value={fields.email} onChange={onChange}
                  placeholder="mail@exemple.fr"
                  autoComplete="email"
                />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </div>
            </div>

            <div className={`form-group${errors.message ? ' form-group--error' : ''}`}>
              <label className="form-label" htmlFor="cf-message">Votre message</label>
              <textarea
                id="cf-message" name="message"
                className="form-input form-textarea"
                value={fields.message} onChange={onChange}
                placeholder="Bonjour Tom, je vous écris car vous avez le meilleur CV du monde et j'aimerais beaucoup que nous travaillions ensemble..."
                rows={5}
              />
              {errors.message && <span className="form-error">{errors.message}</span>}
            </div>

            {status === 'error' && (
              <p className="form-error-global">
                Une erreur est survenue. Écrivez-moi directement à{' '}
                <a href="mailto:tom.ochietti@gmail.com">tom.ochietti@gmail.com</a>.
              </p>
            )}

            <button type="submit" className="form-submit" disabled={status === 'sending'}>
              <Send size={14} strokeWidth={1.75} />
              {status === 'sending' ? 'Envoi…' : 'Envoyer le message'}
            </button>
          </form>
        )}

      </motion.section>

      <footer className="footer">
        © {new Date().getFullYear()} Tom Ochietti
      </footer>
    </div>
  )
}
