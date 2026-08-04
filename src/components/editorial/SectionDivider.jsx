import Reveal from './Reveal'

// A hairline, an editorial number, air on both sides.
export default function SectionDivider({ number, label, space = 'clamp(70px, 10vw, 140px)' }) {
  return (
    <Reveal amount={0.6} y={0}>
      <div className="ed-container" style={{ paddingTop: space, paddingBottom: space }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 20 }}>
          {number && <span className="ed-number">{number}</span>}
          <hr className="ed-rule" style={{ flex: 1 }} />
          {label && <span className="ed-kicker">{label}</span>}
        </div>
      </div>
    </Reveal>
  )
}
