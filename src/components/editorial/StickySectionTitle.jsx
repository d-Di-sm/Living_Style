// Two-column editorial layout: the section title stays put while content
// scrolls past it. Collapses to stacked on mobile.
export default function StickySectionTitle({ kicker, title, number, children }) {
  return (
    <div
      className="ed-container"
      style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(200px, 1fr) minmax(0, 2.2fr)',
        gap: 'clamp(32px, 6vw, 110px)',
      }}
    >
      <div>
        <div style={{ position: 'sticky', top: 110 }}>
          {number && <div className="ed-number" style={{ marginBottom: 18 }}>{number}</div>}
          {kicker && <div className="ed-kicker" style={{ marginBottom: 20 }}>{kicker}</div>}
          {title && <h2 className="ed-title-sm">{title}</h2>}
        </div>
      </div>
      <div style={{ minWidth: 0 }}>{children}</div>
    </div>
  )
}
