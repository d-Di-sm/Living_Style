import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { EASE } from './motion'

// ─────────────────────────────────────────────────────────────────────────────
// A project opens like a feature story: full-width photograph, then the
// masthead facts — name, place, authorship, collaboration. Narrative first,
// information later.
// ─────────────────────────────────────────────────────────────────────────────
export default function ProjectEditorialHeader({ editorial }) {
  return (
    <header>
      {/* ── Full-bleed opening image ── */}
      <div style={{ height: 'min(82vh, 760px)', overflow: 'hidden', position: 'relative', background: '#090909' }}>
        <motion.img
          src={editorial.heroImage}
          alt={editorial.name}
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: EASE }}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>

      {/* ── Masthead ── */}
      <div className="ed-container" style={{ paddingTop: 'clamp(56px, 8vw, 120px)', paddingBottom: 'clamp(40px, 6vw, 90px)' }}>
        <Reveal>
          <p className="ed-kicker" style={{ marginBottom: 'clamp(24px, 3vw, 40px)' }}>{editorial.location}</p>
          <h1 className="ed-display" style={{ marginBottom: 'clamp(32px, 4vw, 56px)', maxWidth: 1000 }}>
            {editorial.name}
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 56px)', alignItems: 'baseline' }}>
            <span className="ed-meta">{editorial.architecture}</span>
            <span className="ed-meta" style={{ color: 'var(--ed-accent)' }}>{editorial.collaboration}</span>
          </div>
        </Reveal>
      </div>
    </header>
  )
}
