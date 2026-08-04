// Minimal editorial grid — generous gaps, no cards, no borders.
export default function EditorialGrid({ columns = 2, gap = 'clamp(28px, 5vw, 80px)', children, style }) {
  return (
    <div
      className="ed-container"
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, ${columns === 3 ? '300px' : '380px'}), 1fr))`,
        gap,
        ...style,
      }}
    >
      {children}
    </div>
  )
}
