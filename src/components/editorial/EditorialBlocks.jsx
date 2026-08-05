import Reveal from './Reveal'
import EditorialImage from './EditorialImage'
import QuoteBlock from './QuoteBlock'
import { img, pickHorizontal, pickVertical } from '../../data/lifestyle'

// ─────────────────────────────────────────────────────────────────────────────
// Shared block renderer — turns content blocks (paragraph / quote / image /
// note) into magazine flow. Used by manifestos and journal articles.
// Paragraphs alternate their horizontal position to create reading rhythm.
// ─────────────────────────────────────────────────────────────────────────────
export default function EditorialBlocks({ blocks }) {
  let paragraphCount = 0

  return (
    <div>
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'paragraph': {
            const alignRight = paragraphCount % 2 === 1
            paragraphCount++
            return (
              <Reveal key={i} amount={0.3}>
                <div className="ed-container" style={{ paddingTop: 'clamp(28px, 4vw, 56px)', paddingBottom: 'clamp(28px, 4vw, 56px)' }}>
                  <p className="ed-body" style={{ marginLeft: alignRight ? 'auto' : 0, marginRight: alignRight ? 0 : 'auto' }}>
                    {block.text}
                  </p>
                </div>
              </Reveal>
            )
          }

          case 'quote':
            return <QuoteBlock key={i}>{block.text}</QuoteBlock>

          case 'image': {
            // Resolution order: curated name → explicit src → seeded pick
            const image = block.name
              ? img(block.name)
              : block.src
                ? { src: block.src, orientation: block.orientation ?? 'h' }
                : block.orientation === 'v'
                  ? pickVertical(block.seed ?? i)
                  : pickHorizontal(block.seed ?? i)
            const vertical = (block.orientation ?? image.orientation) === 'v'
            return (
              <div key={i} className="ed-container" style={{ paddingTop: 'clamp(36px, 6vw, 80px)', paddingBottom: 'clamp(36px, 6vw, 80px)' }}>
                <EditorialImage
                  image={image}
                  caption={block.caption}
                  style={vertical
                    ? { maxWidth: 560, margin: i % 2 === 0 ? '0 auto 0 0' : '0 0 0 auto' }
                    : undefined}
                />
              </div>
            )
          }

          case 'triptych': {
            // Three photographs scattered across the column at staggered
            // heights — an editorial pause between passages of text.
            const cls = ['ed-triptych__a', 'ed-triptych__b', 'ed-triptych__c']
            return (
              <div key={i} className="ed-container" style={{ paddingTop: 'clamp(40px, 6vw, 90px)', paddingBottom: 'clamp(40px, 6vw, 90px)' }}>
                <div className="ed-triptych">
                  {block.names.slice(0, 3).map((name, j) => (
                    <div key={name} className={cls[j]}>
                      <EditorialImage image={img(name)} ratio="3 / 4" />
                    </div>
                  ))}
                </div>
              </div>
            )
          }

          case 'list':
            // A short editorial list — numbered, hairline-ruled, never bullets
            return (
              <Reveal key={i} amount={0.3}>
                <div className="ed-container" style={{ paddingTop: 'clamp(28px, 4vw, 56px)', paddingBottom: 'clamp(28px, 4vw, 56px)' }}>
                  <div style={{ maxWidth: 620 }}>
                    {block.title && <p className="ed-kicker" style={{ marginBottom: 20 }}>{block.title}</p>}
                    {block.items.map((item, j) => (
                      <div key={j} style={{ borderTop: '1px solid var(--ed-rule)', padding: 'clamp(16px, 2vw, 24px) 0', display: 'flex', gap: 20 }}>
                        <span className="ed-number" style={{ flexShrink: 0 }}>{String(j + 1).padStart(2, '0')}</span>
                        <p className="ed-body">{item}</p>
                      </div>
                    ))}
                    <hr className="ed-rule" />
                  </div>
                </div>
              </Reveal>
            )

          case 'note':
            return (
              <Reveal key={i} amount={0.5}>
                <div className="ed-container" style={{ paddingTop: 'clamp(40px, 6vw, 90px)', paddingBottom: 'clamp(20px, 3vw, 40px)' }}>
                  <hr className="ed-rule ed-rule--short" style={{ marginBottom: 24 }} />
                  <p className="ed-note" style={{ maxWidth: 520 }}>{block.text}</p>
                </div>
              </Reveal>
            )

          default:
            return null
        }
      })}
    </div>
  )
}
