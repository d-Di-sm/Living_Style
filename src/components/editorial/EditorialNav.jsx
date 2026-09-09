import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { EASE } from './motion'
import { useScrollShell } from './scrollShell'

const LINKS = [
  { to: '/living',        label: 'Living' },
  { to: '/journal',       label: 'Entries' },
  { to: '/conversations', label: 'Conversations' },
  { to: '/work',          label: 'Projects' },
]

// ─────────────────────────────────────────────────────────────────────────────
// The masthead. Logo and the four sections. Nothing else.
// variant 'paper' → ink on cream (sticky) · 'dark' → white over photography
// darkUntilVh: on pages that open with a dark cover, the nav stays white until
// the reader has scrolled that many viewport-heights, then settles onto paper.
// ─────────────────────────────────────────────────────────────────────────────
export default function EditorialNav({ variant = 'paper', darkUntilVh }) {
  const [open, setOpen] = useState(false)
  const shell = useScrollShell()
  const [pastCover, setPastCover] = useState(false)

  useEffect(() => {
    if (darkUntilVh == null) return
    const el = shell?.current
    if (!el) return
    const onScroll = () => setPastCover(el.scrollTop > darkUntilVh * window.innerHeight)
    onScroll()
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [shell, darkUntilVh])

  const coverMode = darkUntilVh != null
  const dark = coverMode ? !pastCover : variant === 'dark'
  const ink = dark ? '#F5F0E6' : '#1A1A1A'

  return (
    <>
      <nav
        // Cover pages keep fixed positioning throughout (no layout jump);
        // only the ink and backdrop transition as the paper arrives.
        className={`ed-nav ${coverMode || dark ? 'ed-nav--dark' : 'ed-nav--paper'}`}
        style={{
          color: ink,
          transition: 'color 0.6s ease, background 0.6s ease',
          ...(coverMode && pastCover
            ? { background: 'rgba(245, 240, 230, 0.88)', backdropFilter: 'blur(10px)' }
            : {}),
        }}
      >
        {/* ── Logo ── */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: ink }}>
          <img
            src="/logos/soma-living.svg"
            alt="SOMA Living"
            style={{
              height: 32.5, width: 'auto', display: 'block',
            }}
          />
        </Link>

        {/* ── Desktop links ── */}
        <div className="ed-nav-links ed-nav-links--desktop">
          {LINKS.map(({ to, label }) => (
            <NavLink key={to} to={to} className={({ isActive }) => `ed-nav-link${isActive ? ' is-active' : ''}`}>
              {label}
            </NavLink>
          ))}
        </div>

        {/* ── Mobile burger ── */}
        <button className="ed-nav-burger" aria-label="Menu" onClick={() => setOpen(o => !o)}>
          <span style={{ width: 22, height: 1, background: ink, display: 'block', transition: 'transform .3s', transform: open ? 'translateY(3px) rotate(45deg)' : 'none' }} />
          <span style={{ width: 22, height: 1, background: ink, display: 'block', transition: 'transform .3s', transform: open ? 'translateY(-3px) rotate(-45deg)' : 'none' }} />
        </button>
      </nav>

      {/* ── Mobile menu; a quiet full page, not a drawer ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="ed-nav-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            style={{
              position: 'fixed', inset: 0, zIndex: 200,
              background: 'var(--ed-paper)', color: 'var(--ed-ink)',
              display: 'flex', flexDirection: 'column',
              padding: 'var(--ed-pad)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <img src="/logos/soma-living.svg" alt="SOMA Living" style={{ height: 30, width: 'auto', display: 'block' }} />
              <button aria-label="Close" onClick={() => setOpen(false)}
                style={{ background: 'none', border: 'none', fontSize: 22, cursor: 'pointer', color: 'inherit', padding: 8 }}>
                ✕
              </button>
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 'clamp(18px, 4vh, 32px)' }}>
              {LINKS.map(({ to, label }, i) => (
                <motion.div key={to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.15 + i * 0.08, ease: EASE }}
                >
                  <Link to={to} onClick={() => setOpen(false)}
                    style={{ fontFamily: 'var(--ed-serif)', fontSize: 'clamp(34px, 9vw, 56px)', color: 'inherit', textDecoration: 'none', lineHeight: 1.1 }}>
                    {label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="ed-kicker">SOMA Living; Editorial Platform</div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
