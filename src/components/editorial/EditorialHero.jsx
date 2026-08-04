import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useScrollShell } from './scrollShell'
import { EASE } from './motion'

// ─────────────────────────────────────────────────────────────────────────────
// Editorial cover. One dominant photograph at a time — no slider, no carousel.
// The image changes as the reader scrolls through the cover's height, like
// turning the first pages of an issue.
// ─────────────────────────────────────────────────────────────────────────────
export default function EditorialHero({
  images = [],            // [{ src }] — horizontals from lifestyle.js
  kicker = 'The Residential Platform of SOMA',
  headline = 'Living,\nthoughtfully\nconsidered.',
  issue = 'Issue Nº 01 — Mexico',
  children,              // optional atmospheric layer (e.g. the Three.js field)
}) {
  const shell = useScrollShell()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    container: shell,
    target: ref,
    offset: ['start start', 'end end'],
  })

  const [index, setIndex] = useState(0)
  useEffect(() => {
    const unsub = scrollYProgress.on('change', (v) => {
      const i = Math.min(images.length - 1, Math.floor(v * images.length))
      setIndex(i)
    })
    return unsub
  }, [scrollYProgress, images.length])

  // Cinematic drift + settle of the interface as the cover scrolls away
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75, 1], [1, 1, 0])
  const contentY       = useTransform(scrollYProgress, [0, 1], [0, -40])
  const imageScale     = useTransform(scrollYProgress, [0, 1], [1, 1.06])

  return (
    <div ref={ref} style={{ height: `${Math.max(images.length, 1) * 100 + 60}vh`, position: 'relative' }}>
      <div style={{ position: 'sticky', top: 0, height: '100dvh', overflow: 'hidden', background: '#090909' }}>

        {/* ── Photograph ── */}
        <motion.div style={{ position: 'absolute', inset: 0, scale: imageScale }}>
          <AnimatePresence mode="sync">
            <motion.img
              key={index}
              src={images[index]?.src}
              alt=""
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.4, ease: EASE }}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </AnimatePresence>
          {/* Quiet veil so type always reads */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, rgba(9,9,9,0.38) 0%, rgba(9,9,9,0.12) 40%, rgba(9,9,9,0.5) 100%)',
          }} />
        </motion.div>

        {/* ── Atmosphere (extremely subtle) ── */}
        {children && (
          <div style={{ position: 'absolute', inset: 0, opacity: 0.5, pointerEvents: 'none' }}>
            {children}
          </div>
        )}

        {/* ── Cover interface ── */}
        <motion.div
          style={{
            position: 'absolute', inset: 0,
            display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
            padding: 'var(--ed-pad)', paddingBottom: 'clamp(56px, 9vh, 120px)',
            color: '#F5F0E6',
            opacity: contentOpacity,
            y: contentY,
          }}
        >
          <motion.p
            className="ed-kicker"
            style={{ color: 'rgba(245,240,230,0.75)', marginBottom: 'clamp(18px, 3vh, 34px)' }}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: EASE }}
          >
            {kicker}
          </motion.p>

          <motion.h1
            className="ed-display"
            style={{ whiteSpace: 'pre-line', maxWidth: 1100 }}
            initial={{ opacity: 0, y: 34, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.75, ease: EASE }}
          >
            {headline}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.3, ease: EASE }}
            style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginTop: 'clamp(24px, 4vh, 48px)' }}
          >
            <span className="ed-meta" style={{ color: 'rgba(245,240,230,0.55)' }}>{issue}</span>
            {/* image index — a page number, not a carousel control */}
            <span className="ed-meta" style={{ color: 'rgba(245,240,230,0.55)' }}>
              {String(index + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
            </span>
          </motion.div>
        </motion.div>

        {/* ── Scroll indicator ── */}
        <motion.div
          style={{
            position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
            paddingBottom: 10, opacity: contentOpacity,
          }}
        >
          <div className="ed-scroll-line" />
        </motion.div>
      </div>
    </div>
  )
}
