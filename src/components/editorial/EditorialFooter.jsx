import { Link } from 'react-router-dom'

const NAV = [
  { to: '/living',        label: 'Living' },
  { to: '/work',          label: 'Project' },
  { to: '/journal',       label: 'Entries' },
  { to: '/conversations', label: 'Conversations' },
]

// TODO: replace with SOMA Living's official social profiles when they exist.
const SOCIAL = [
  { href: 'https://soma.group/',                 label: 'Instagram' },
  { href: 'https://soma.group/',                 label: 'LinkedIn' },
  { href: 'mailto:contact@soma.group',           label: 'Contact' },
]

const footLink = {
  fontFamily: 'var(--ed-sans)', fontSize: 11, fontWeight: 300,
  letterSpacing: '0.2em', textTransform: 'uppercase',
  color: 'rgba(245,240,230,0.55)', textDecoration: 'none',
  transition: 'color 0.4s ease',
}

export default function EditorialFooter() {
  const hover = e => e.currentTarget.style.color = '#F5F0E6'
  const leave = e => e.currentTarget.style.color = 'rgba(245,240,230,0.55)'

  return (
    <footer style={{ background: '#090909', color: '#F5F0E6' }}>
      <div className="ed-container" style={{ paddingTop: 'clamp(70px, 9vw, 120px)', paddingBottom: 40 }}>

        {/* ── Masthead ── */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 48, alignItems: 'flex-start' }}>
          <div>
            <img src="/logos/SOMA_blanco.png" alt="SOMA" style={{ height: 30, mixBlendMode: 'screen', display: 'block' }} />
            <p className="ed-kicker" style={{ color: 'rgba(245,240,230,0.4)', marginTop: 18 }}>
              Editorial Platform
            </p>
          </div>

          <nav style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {NAV.map(({ to, label }) => (
              <Link key={to} to={to} style={footLink} onMouseEnter={hover} onMouseLeave={leave}>{label}</Link>
            ))}
          </nav>

          <nav style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {SOCIAL.map(({ href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={footLink} onMouseEnter={hover} onMouseLeave={leave}>{label}</a>
            ))}
            <a href="#newsletter" style={footLink} onMouseEnter={hover} onMouseLeave={leave}
              onClick={(e) => { e.preventDefault(); document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' }) }}>
              Newsletter
            </a>
          </nav>
        </div>

        {/* ── Partners & colophon ── */}
        <hr className="ed-rule" style={{ background: 'rgba(245,240,230,0.12)', marginTop: 'clamp(50px, 7vw, 90px)', marginBottom: 28 }} />
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
            <a href="https://fibrasoma.group/" target="_blank" rel="noopener noreferrer">
              <img src="/logos/fibrasoma_logo.png" alt="Fibra SOMA" style={{ height: 11, display: 'block', opacity: 0.6 }} />
            </a>
            <a href="https://sordomadaleno.com/" target="_blank" rel="noopener noreferrer">
              <img src="/logos/sordomadaleno_logoW.png" alt="Sordo Madaleno" style={{ height: 11, display: 'block', mixBlendMode: 'screen', opacity: 0.6 }} />
            </a>
          </div>
          <p style={{ fontFamily: 'var(--ed-sans)', fontSize: 10, fontWeight: 300, letterSpacing: '0.14em', color: 'rgba(245,240,230,0.3)' }}>
            © {new Date().getFullYear()} SOMA Living — Mexico City · Los Cabos
          </p>
        </div>
      </div>
    </footer>
  )
}
