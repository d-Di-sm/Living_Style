import { useState } from 'react'
import Reveal from './Reveal'

// ─────────────────────────────────────────────────────────────────────────────
// Discreet, Monocle-inspired. A headline, a field, a word. No marketing.
// NOTE: submissions are held client-side only for now; wire `handleSubmit`
// to a provider (Buttondown / Mailchimp / Resend) when one is chosen.
// ─────────────────────────────────────────────────────────────────────────────
export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.includes('@')) return
    setDone(true)
  }

  return (
    <section id="newsletter" style={{ background: 'var(--ed-paper-deep)' }}>
      <div className="ed-container" style={{ paddingTop: 'clamp(80px, 11vw, 150px)', paddingBottom: 'clamp(80px, 11vw, 150px)' }}>
        <Reveal>
          <div style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center' }}>
            <p className="ed-kicker" style={{ marginBottom: 26 }}>New entries, occasionally</p>
            <h2 className="ed-title-sm" style={{ marginBottom: 44 }}>
              Notes on architecture and living, a few times a year.
            </h2>

            {done ? (
              <p className="ed-note">Thank you. You are on the list.</p>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 24, alignItems: 'flex-end' }}>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="ed-newsletter-input"
                  aria-label="Email address"
                />
                <button type="submit" className="ed-link" style={{ flexShrink: 0, paddingBottom: 12 }}>
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
