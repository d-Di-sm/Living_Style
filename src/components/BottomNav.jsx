const NAV_ITEMS = [
  { label: 'Anima',  href: 'https://www.animavillage.com/' },
  { label: 'Antara', href: 'https://antara.com.mx/' },
  { label: 'Artz',   href: 'https://artzpedregal.mx/' },
]

const textStyle = { fontSize: 8, letterSpacing: '1.5px', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase' }

export default function BottomNav({ detailOpen }) {
  return (
    <nav
      className={`fixed bottom-0 left-0 right-0 flex items-center${detailOpen ? ' detail-footer' : ''}`}
      style={{
        zIndex: 1000,
        height: 'calc(50px + env(safe-area-inset-bottom, 0px))',
        background: '#000',
        paddingLeft:   detailOpen ? 'clamp(16px, 5vw, 40px)' : 'clamp(12px, 3vw, 20px)',
        paddingRight:  detailOpen ? 'clamp(16px, 5vw, 40px)' : 'clamp(12px, 3vw, 20px)',
        paddingBottom: 'env(safe-area-inset-bottom, 0px)',
        alignItems: 'center',
        justifyContent: detailOpen ? 'space-evenly' : 'stretch',
      }}
    >
      {detailOpen ? (
        <>
          {[
            { src: '/logos/SOMA_blanco.png',         href: 'https://soma.group/'        },
            { src: '/logos/fibrasoma_logo.png',       href: 'https://fibrasoma.group/'   },
            { src: '/logos/sordomadaleno_logoW.png',  href: 'https://sordomadaleno.com/' },
          ].map(({ src, href }) => (
            <a key={src} href={href} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
              <img src={src} alt="" className="detail-footer-logo" style={{ width: 'auto', display: 'block', mixBlendMode: 'screen', objectFit: 'contain' }} />
            </a>
          ))}
        </>
      ) : (
        NAV_ITEMS.map(({ label, href }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{ ...textStyle, flex: 1, textAlign: 'center', textDecoration: 'none' }}>{label}</a>
        ))
      )}
    </nav>
  )
}
