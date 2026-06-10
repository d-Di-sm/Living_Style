const NAV_ITEMS = [
  { label: 'Anima',  href: 'https://www.animavillage.com/' },
  { label: 'Antara', href: 'https://antara.com.mx/' },
  { label: 'Artz',   href: 'https://artzpedregal.mx/' },
]

const textStyle = { fontSize: 8, letterSpacing: '1.5px', color: '#555', textTransform: 'uppercase' }

export default function BottomNav({ detailOpen }) {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 flex items-center z-[1000]"
      style={{ height: 50, background: '#000', padding: detailOpen ? '0 40px' : '0 20px' }}
    >
      {detailOpen ? (
        <>
          {[
            { src: '/logos/SOMA_blanco.png',          href: 'https://soma.group/',           pos: 'left' },
            { src: '/logos/fibrasoma_logo.png',        href: 'https://fibrasoma.group/',      pos: 'center' },
            { src: '/logos/sordomadaleno_logoW.png',   href: 'https://sordomadaleno.com/',    pos: 'right' },
          ].map(({ src, href, pos }) => (
            <a key={src} href={href} target="_blank" rel="noopener noreferrer" style={{ flex: 1, display: 'flex', justifyContent: pos === 'left' ? 'flex-start' : pos === 'right' ? 'flex-end' : 'center' }}>
              <img src={src} alt="" style={{ height: 9, width: 'auto', display: 'block', mixBlendMode: 'screen', objectFit: 'contain' }} />
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
