import { motion } from 'framer-motion'

export default function Header({ scrollProgress }) {
  const isScrolled = scrollProgress > 0.02

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 'clamp(20px, 4vh, 40px) clamp(20px, 6vw, 64px)',
        zIndex: 2,
        pointerEvents: 'auto',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, transparent 100%)',
      }}
    >
      {/* Wordmark */}
      <div>
        <p
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(14px, 1.4vw, 19px)',
            fontWeight: 300,
            letterSpacing: '0.12em',
            color: 'var(--cream)',
            lineHeight: 1,
          }}
        >
          SOMA Living
        </p>
        <p
          style={{
            fontFamily: 'var(--sans)',
            fontSize: '8px',
            fontWeight: 300,
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: 'var(--gold-dim)',
            marginTop: '4px',
          }}
        >
          Private Residences
        </p>
      </div>

      {/* Nav */}
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(16px, 3vw, 40px)',
        }}
      >
        {['Residences', 'Amenities', 'Location'].map(item => (
          <a
            key={item}
            href="#"
            className="header-nav-link"
            style={{
              fontFamily: 'var(--sans)',
              fontSize: '9px',
              fontWeight: 300,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--cream-dim)',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={e => (e.target.style.color = 'var(--cream)')}
            onMouseLeave={e => (e.target.style.color = 'var(--cream-dim)')}
          >
            {item}
          </a>
        ))}

        <a
          href="#"
          className="header-inquire-btn"
          style={{
            fontFamily: 'var(--sans)',
            fontSize: '9px',
            fontWeight: 300,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--cream)',
            textDecoration: 'none',
            padding: '10px 22px',
            border: '1px solid rgba(196, 184, 152, 0.3)',
            transition: 'background 0.4s ease, border-color 0.4s ease',
          }}
          onMouseEnter={e => {
            e.target.style.background = 'rgba(196, 184, 152, 0.08)'
            e.target.style.borderColor = 'rgba(196, 184, 152, 0.55)'
          }}
          onMouseLeave={e => {
            e.target.style.background = 'transparent'
            e.target.style.borderColor = 'rgba(196, 184, 152, 0.3)'
          }}
        >
          Inquire
        </a>
      </nav>
    </motion.header>
  )
}
