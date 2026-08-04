import Reveal from './Reveal'

// A single oversized editorial line — used as punctuation between sections.
export default function LargeCaption({ children, align = 'left' }) {
  return (
    <Reveal amount={0.4}>
      <div className="ed-container" style={{ textAlign: align }}>
        <p className="ed-headline" style={{ maxWidth: 1050, margin: align === 'center' ? '0 auto' : 0 }}>
          {children}
        </p>
      </div>
    </Reveal>
  )
}
