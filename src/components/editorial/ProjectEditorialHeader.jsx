import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Reveal from './Reveal'
import { EASE } from './motion'

// ─────────────────────────────────────────────────────────────────────────────
// A project opens like a feature story: full-width photograph, then the
// masthead facts; name, place, authorship, collaboration.
//
// The photograph is fixed to the viewport and never moves — not on scroll, not
// ever. A spacer of the same height holds its place in the flow, so everything
// else lays out as though the image were still there, and then travels up over
// it as the reader scrolls.
//
// The masthead behaves like a card laid over that standing image: the page
// settles first, reading normally, and a moment later the card climbs until
// roughly a third of the photograph is left showing above it.
//
// Hovering that exposed band of photograph lowers the card and gives the image
// back whole; the card itself is not a hover target, so once it is overhead the
// pointer no longer disturbs it.
//
// Nothing animates for readers who ask for reduced motion.
// ─────────────────────────────────────────────────────────────────────────────
const LIFT_DELAY = 1500        // ms before the card climbs
const REVEAL = 0.28            // share of the photograph left visible above it
const IMAGE_H = 'min(82vh, 760px)'
const NAV_H_FALLBACK = 82      // used only before the masthead is measured

export default function ProjectEditorialHeader({ editorial }) {
  const reduceMotion = useReducedMotion()
  const imageRef = useRef(null)
  const mastheadRef = useRef(null)
  const [travel, setTravel] = useState(0)
  const [navHeight, setNavHeight] = useState(NAV_H_FALLBACK)
  const [lifted, setLifted] = useState(false)
  const [hovering, setHovering] = useState(false)

  // The fixed image has to begin exactly where the flow would have put it:
  // directly under the sticky masthead nav.
  useEffect(() => {
    const nav = document.querySelector('.ed-nav')
    if (!nav) return
    const measure = () => setNavHeight(nav.offsetHeight)
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(nav)
    return () => observer.disconnect()
  }, [])

  // The climb is measured, not hard-coded: enough to leave REVEAL of the
  // photograph showing, and never more than the card's own height — beyond
  // that it would clear the image and open a gap underneath.
  useEffect(() => {
    const image = imageRef.current
    const masthead = mastheadRef.current
    if (!image || !masthead) return
    const measure = () =>
      setTravel(Math.min(image.offsetHeight * (1 - REVEAL), masthead.offsetHeight))
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(image)
    observer.observe(masthead)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (reduceMotion) return
    const timer = setTimeout(() => setLifted(true), LIFT_DELAY)
    return () => clearTimeout(timer)
  }, [reduceMotion])

  const onImage = lifted && !hovering

  return (
    <header style={{ position: 'relative', zIndex: 0 }}>
      {/* ── Opening image; fixed to the viewport, so the page moves and it
             does not. It sits behind everything the page renders after it. ── */}
      <div
        ref={imageRef}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        style={{
          position: 'fixed',
          top: navHeight,
          left: 0,
          right: 0,
          height: IMAGE_H,
          overflow: 'hidden',
          background: '#090909',
          zIndex: 0,
        }}
      >
        <motion.img
          src={editorial.heroImage}
          alt={editorial.name}
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: EASE }}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>

      {/* Holds the image's place in the flow now that the image left it */}
      <div aria-hidden style={{ height: IMAGE_H }} />

      {/* ── Masthead, as a card over the photograph ──
           marginTop rather than a transform: the copy below has to follow the
           card up, or it would leave a hole the height of the masthead. */}
      <motion.div
        ref={mastheadRef}
        animate={{ marginTop: onImage ? -travel : 0 }}
        transition={{ duration: 1.2, ease: EASE }}
        style={{ position: 'relative', zIndex: 2, background: 'var(--ed-paper)' }}
      >
        <div className="ed-container" style={{ paddingTop: 'clamp(56px, 8vw, 120px)', paddingBottom: 'clamp(40px, 6vw, 90px)' }}>
          <Reveal>
            <p className="ed-kicker" style={{ marginBottom: 'clamp(24px, 3vw, 40px)' }}>{editorial.location}</p>
            {/* `nameLines` sets the line breaks by hand where the natural wrap
                splits a proper name badly. Those titles also give up the 1000px
                measure: it is narrower than the lines they ask for, and would
                wrap them again. */}
            <h1
              className="ed-display"
              style={{
                marginBottom: 'clamp(32px, 4vw, 56px)',
                maxWidth: editorial.nameLines ? 'none' : 1000,
                whiteSpace: 'pre-line',
              }}
            >
              {editorial.nameLines ?? editorial.name}
            </h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 56px)', alignItems: 'baseline' }}>
              <span className="ed-meta">{editorial.architecture}</span>
              {editorial.development && <span className="ed-meta">{editorial.development}</span>}
              <span className="ed-meta">{editorial.collaboration}</span>
            </div>
          </Reveal>
        </div>
      </motion.div>
    </header>
  )
}
