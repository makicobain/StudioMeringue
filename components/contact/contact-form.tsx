'use client'

import { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { cn } from '@/lib/utils'
import { Send, CheckCircle, Loader2 } from 'lucide-react'

export function ContactForm() {
  const [state, formspreeSubmit] = useForm("mjgaalbj")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await formspreeSubmit(e)
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="inline-flex p-4 rounded-full gradient-bg mb-6">
          <CheckCircle className="h-8 w-8 text-background" />
        </div>
        <h3 className="font-serif text-2xl font-medium mb-3">
          Message envoyé !
        </h3>
        <p className="text-muted-foreground max-w-sm">
          Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false)
            setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' })
          }}
          className="mt-8 text-accent hover:underline"
        >
          Envoyer un autre message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      {/* Prénom + Nom */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium mb-2">
            Prénom *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
            placeholder="Marie"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium mb-2">
            Nom *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
            placeholder="Dupont"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
          placeholder="marie@exemple.fr"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-destructive text-sm mt-1" />
      </div>

      {/* Sujet */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-2">
          Sujet *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
          placeholder="De quoi s'agit-il ?"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Votre message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors resize-none"
          placeholder="Décrivez votre projet, vos besoins, vos délais..."
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-destructive text-sm mt-1" />
      </div>

      {/* Submit */}
      <div className="flex items-center justify-between pt-4">
        <p className="text-sm text-muted-foreground">* Champs obligatoires</p>
        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            'inline-flex items-center gap-2 px-8 py-4 gradient-bg text-background font-medium rounded-full transition-all duration-300',
            isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'
          )}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Envoi en cours...
            </>
          ) : (
            <>
              Envoyer le message
              <Send className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </form>
  )
}