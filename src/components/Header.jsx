export default function Header() {
  return (
    <div className="flex items-center shrink-0 justify-between w-full" style={{ padding: '12px 16px 0' }}>
      <div className="flex items-center">
        <a href="https://soma.group/" target="_blank" rel="noopener noreferrer">
          <img
            src="/logos/SOMA_blanco.png"
            alt="SOMA"
            style={{ height: 40, width: 'auto', mixBlendMode: 'screen', display: 'block' }}
          />
        </a>
        <span
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
      <div className="flex items-center" style={{ gap: 12 }}>
        <a href="https://fibrasoma.group/" target="_blank" rel="noopener noreferrer">
          <img src="/logos/fibrasoma_logo.png" alt="Fibra SOMA" style={{ height: 15, width: 'auto', display: 'block', background: 'transparent', position: 'relative', right: 20 }} />
        </a>
        <a href="https://sordomadaleno.com/" target="_blank" rel="noopener noreferrer">
          <img src="/logos/sordomadaleno_logoW.png" alt="Sordo Madaleno" style={{ height: 15, width: 'auto', mixBlendMode: 'screen', display: 'block' }} />
        </a>
      </div>
    </div>
  )
}
