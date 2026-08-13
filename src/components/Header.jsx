import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div
      className="flex items-center shrink-0 justify-between w-full header-root"
      style={{ padding: 'max(12px, env(safe-area-inset-top, 12px)) max(16px, env(safe-area-inset-right, 16px)) 0 max(16px, env(safe-area-inset-left, 16px))', position: 'relative' }}
    >
      {/* ── Left: SOMA + Living ── */}
      <div className="flex items-center">
        <a href="https://soma.group/" target="_blank" rel="noopener noreferrer">
          <img
            src="/logos/SOMA_blanco.png"
            alt="SOMA"
            className="soma-logo"
            style={{ height: 40, width: 'auto', mixBlendMode: 'screen', display: 'block' }}
          />
        </a>
        <span
          className="living-text"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 15,
            fontWeight: 300,
            letterSpacing: '5px',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.3)',
            marginLeft: 20,
            paddingLeft: 6,
            borderLeft: '1px solid rgba(255,255,255,0.12)',
            lineHeight: 'normal',
            paddingBottom: 0,
            alignSelf: 'center',
          }}
        >
          Living
        </span>
      </div>

      {/* ── Right: logos (desktop) / hamburger (mobile) ── */}
      <div className="flex items-center header-right" style={{ gap: 12 }}>
        {/* Desktop logos */}
        <a href="https://fibrasoma.group/" target="_blank" rel="noopener noreferrer" className="partner-logo">
          <img src="/logos/fibrasoma_logo.png" alt="Fibra SOMA" style={{ height: 15, width: 'auto', display: 'block', background: 'transparent', position: 'relative', right: 20 }} />
        </a>
        <a href="https://sordomadaleno.com/" target="_blank" rel="noopener noreferrer" className="partner-logo">
          <img src="/logos/sordomadaleno_logoW.png" alt="Sordo Madaleno" style={{ height: 15, width: 'auto', mixBlendMode: 'screen', display: 'block' }} />
        </a>

        {/* Hamburger button; mobile only */}
        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Menu"
          style={{
            display: 'none',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 5,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px 2px',
            width: 36,
            height: 36,
          }}
        >
          <span style={{ display: 'block', width: 20, height: 1.5, background: menuOpen ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.5)', transition: 'transform 0.2s, opacity 0.2s', transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none' }} />
          <span style={{ display: 'block', width: 20, height: 1.5, background: 'rgba(255,255,255,0.5)', opacity: menuOpen ? 0 : 1, transition: 'opacity 0.2s' }} />
          <span style={{ display: 'block', width: 20, height: 1.5, background: menuOpen ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.5)', transition: 'transform 0.2s, opacity 0.2s', transform: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none' }} />
        </button>
      </div>

      {/* ── Dropdown menu; mobile only ── */}
      {menuOpen && (
        <div
          className="hamburger-menu"
          style={{
            display: 'none',
            position: 'absolute',
            top: '100%',
            right: 16,
            marginTop: 8,
            background: 'rgba(10,10,10,0.95)',
            borderRadius: 8,
            padding: '16px 20px',
            flexDirection: 'column',
            gap: 20,
            zIndex: 100,
            backdropFilter: 'blur(12px)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
          }}
        >
          <a href="https://fibrasoma.group/" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/logos/fibrasoma_logo.png" alt="Fibra SOMA" style={{ height: 14, width: 'auto', display: 'block' }} />
          </a>
          <a href="https://sordomadaleno.com/" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/logos/sordomadaleno_logoW.png" alt="Sordo Madaleno" style={{ height: 14, width: 'auto', mixBlendMode: 'screen', display: 'block' }} />
          </a>
        </div>
      )}
    </div>
  )
}
