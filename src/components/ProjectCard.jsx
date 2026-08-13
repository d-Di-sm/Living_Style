import { useState } from 'react'
import { motion } from 'framer-motion'

/* ── Card 1: Soho Residences ─────────────────────── */
function Card1({ project }) {
  const { title, cardLabel } = project
  return (
    <div className="c2-wrap" style={{ background: '#111' }}>
      <img src="/images_project_cards/SR.png" alt="" />
      <div className="c2-overlay" />
      <div style={{ position: 'absolute', bottom: 36, left: 32 }}>
        <div className="c2-caption" style={{ position: 'static' }}>
          {title.split('\n').map((line, i, arr) => (
            <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── Card 2: Park Hyatt Cabo ─────────────────────── */
function Card2({ project }) {
  const { image, label, ghost, caption } = project
  return (
    <div className="c2-wrap" style={{ background: '#111' }}>
      <img src={image} alt="" />
      <div className="c2-overlay" />
      <div className="c2-caption">
        {caption.map((line, i) => <span key={i}>{line}{i < caption.length - 1 && <br />}</span>)}
      </div>
    </div>
  )
}

/* ── Card 3: Park Hyatt Polanco ──────────────────── */
function Card3({ project }) {
  const { title, cardLabel } = project
  return (
    <div className="c2-wrap" style={{ background: '#111' }}>
      <img src="/images_project_cards/PHP.png" alt="" />
      <div className="c2-overlay" />
      <div style={{ position: 'absolute', bottom: 36, left: 32 }}>
        <div className="c2-caption" style={{ position: 'static' }}>
          {title.split('\n').map((line, i, arr) => (
            <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── ProjectCard wrapper with Framer Motion ──────── */
const CARD_VARIANTS = { proposal: Card1, photo: Card2, phases: Card3 }

export default function ProjectCard({ project, onSelect }) {
  const CardContent = CARD_VARIANTS[project.variant]
  const [copied, setCopied] = useState(false)

  // Native Web Share API; falls back to clipboard copy on unsupported browsers
  const handleShare = async (e, url) => {
    e.stopPropagation()
    try {
      if (navigator.share) {
        await navigator.share({ title: 'SOMA Living', text: 'Explore SOMA Residence.', url })
      } else {
        // Fallback: copy URL to clipboard and show brief confirmation
        await navigator.clipboard.writeText(url)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }
    } catch (err) {
      if (err.name !== 'AbortError') console.error('Share failed:', err)
    }
  }

  return (
    <motion.div
      className="flex-1 overflow-hidden cursor-pointer"
      style={{ height: 'calc(100% - 16px)', borderRadius: 2, position: 'relative' }}
      whileHover={{ y: -6, scale: 1.012, boxShadow: '0 28px 90px rgba(0,0,0,0.85)' }}
      initial={{ boxShadow: '0 20px 70px rgba(0,0,0,0.65)' }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      onClick={() => onSelect(project)}
    >
      <CardContent project={project} />
      <div className="card-icons" style={{
        position: 'absolute', bottom: 'clamp(10px, 3vw, 16px)', right: 'clamp(8px, 2vw, 12px)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'clamp(8px, 2vw, 10px)',
        zIndex: 10,
      }}>
        {[
          { href: project.links?.web,       icon: <><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></> },
          { href: project.links?.email,     icon: <><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></> },
          { href: project.links?.instagram, icon: <><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></> },
        ].map(({ href, icon }, i) => {
          const isShare = project.shareIcons?.includes(i)
          return (
            <a
              key={i}
              href={isShare ? undefined : href}
              target={isShare ? undefined : '_blank'}
              rel="noopener noreferrer"
              onClick={isShare ? e => handleShare(e, href) : e => e.stopPropagation()}
              style={{ display: 'flex', color: 'rgba(255,255,255,0.55)', transition: 'color 0.2s', cursor: 'pointer' }}
              onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,1)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">{icon}</svg>
            </a>
          )
        })}
        {/* Clipboard fallback toast */}
        {copied && (
          <span style={{ position: 'absolute', bottom: 110, right: 0, background: 'rgba(0,0,0,0.75)', color: '#fff', fontSize: 9, letterSpacing: '1px', padding: '4px 8px', borderRadius: 4, whiteSpace: 'nowrap' }}>
            Link copiado
          </span>
        )}
      </div>
    </motion.div>
  )
}
