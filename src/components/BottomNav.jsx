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
              <img src={src} alt="" className="detail-footer-logo-sm" style={{ width: 'auto', display: 'block', mixBlendMode: 'screen', objectFit: 'contain' }} />
            </a>
          ))}
        </>
      ) : null}
    </nav>
  )
}
