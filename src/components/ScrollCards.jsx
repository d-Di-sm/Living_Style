import InfoCard from './InfoCard'
import { cards } from '../data/cards'

const CORNER_STYLES = {
  'bottom-left': {
    position: 'absolute',
    bottom: 'clamp(48px, 10vh, 80px)',
    left: 'clamp(24px, 8vw, 80px)',
  },
  'top-right': {
    position: 'absolute',
    top: 'clamp(100px, 18vh, 160px)',
    right: 'clamp(24px, 8vw, 80px)',
  },
  'bottom-right': {
    position: 'absolute',
    bottom: 'clamp(48px, 10vh, 80px)',
    right: 'clamp(24px, 8vw, 80px)',
  },
}

function CenterContainer({ children, verticalAlign = 'center' }) {
  const alignItems = {
    center: 'center',
    top: 'flex-start',
    bottom: 'flex-end',
  }[verticalAlign]

  const padding = {
    center: '80px 24px',
    top: 'clamp(100px, 18vh, 160px) 24px 24px',
    bottom: '24px 24px clamp(48px, 8vh, 72px)',
  }[verticalAlign]

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems,
        justifyContent: 'center',
        padding,
        pointerEvents: 'none',
      }}
    >
      <div style={{ pointerEvents: 'auto' }}>
        {children}
      </div>
    </div>
  )
}

export default function ScrollCards({ scrollProgress }) {
  const cornerCards = cards.filter(c =>
    c.position !== 'center' && c.position !== 'top-center' && c.position !== 'bottom-center'
  )
  const centerCards = cards.filter(c =>
    c.position === 'center' || c.position === 'top-center' || c.position === 'bottom-center'
  )

  return (
    <div className="cards-layer">
      {/* Corner cards */}
      {cornerCards.map(card => (
        <div key={card.id} style={CORNER_STYLES[card.position]}>
          <InfoCard card={card} scrollProgress={scrollProgress} />
        </div>
      ))}

      {/* Center / top-center / bottom-center cards */}
      {centerCards.map(card => (
        <CenterContainer
          key={card.id}
          verticalAlign={
            card.position === 'top-center' ? 'top' :
            card.position === 'bottom-center' ? 'bottom' :
            'center'
          }
        >
          <InfoCard card={card} scrollProgress={scrollProgress} />
        </CenterContainer>
      ))}
    </div>
  )
}
