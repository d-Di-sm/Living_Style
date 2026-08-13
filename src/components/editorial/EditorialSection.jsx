// Vertical rhythm wrapper; every editorial section breathes the same way.
export default function EditorialSection({ children, space = 'clamp(80px, 12vw, 180px)', style, className = '', id }) {
  return (
    <section id={id} className={className} style={{ paddingTop: space, paddingBottom: space, ...style }}>
      {children}
    </section>
  )
}
