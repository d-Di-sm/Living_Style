import Reveal from './Reveal'

// A pulled quote, given a full breath of space.
export default function QuoteBlock({ children, align = 'center' }) {
  return (
    <Reveal amount={0.4}>
      <blockquote
        style={{
          margin: '0 auto',
          maxWidth: 880,
          padding: 'clamp(60px, 9vw, 130px) var(--ed-pad)',
          textAlign: align,
        }}
      >
        <p className="ed-quote">{children}</p>
        <hr className="ed-rule ed-rule--short" style={{ margin: align === 'center' ? '36px auto 0' : '36px 0 0' }} />
      </blockquote>
    </Reveal>
  )
}
