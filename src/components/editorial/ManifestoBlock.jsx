import Reveal from './Reveal'
import EditorialImage from './EditorialImage'
import EditorialBlocks from './EditorialBlocks'
import { img, pickHorizontal } from '../../data/lifestyle'

// ─────────────────────────────────────────────────────────────────────────────
// One manifesto as a magazine feature. Editorial numbering, alternating
// opening spread (text left / image right, then inverted), hairline rules.
// `invert` flips the opening composition for the second manifesto.
// ─────────────────────────────────────────────────────────────────────────────
export default function ManifestoBlock({ manifesto, invert = false }) {
  const opener = manifesto.image ? img(manifesto.image) : pickHorizontal(manifesto.imageSeed)

  return (
    <article>
      {/* ── Opening spread ── */}
      <div className="ed-container">
        <Reveal amount={0.3}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 20, marginBottom: 'clamp(32px, 5vw, 64px)' }}>
            <span className="ed-number">{manifesto.number}</span>
            <hr className="ed-rule" style={{ flex: 1 }} />
            <span className="ed-kicker">Manifesto</span>
          </div>
        </Reveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
            gap: 'clamp(36px, 6vw, 110px)',
            alignItems: 'center',
          }}
        >
          <Reveal style={{ order: invert ? 2 : 1 }}>
            <h2 className="ed-headline" style={{ marginBottom: 'clamp(24px, 3vw, 44px)' }}>
              {manifesto.title}
            </h2>
            <p className="ed-standfirst">{manifesto.standfirst}</p>
          </Reveal>
          <div style={{ order: invert ? 1 : 2 }}>
            <EditorialImage image={opener} />
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <div style={{ paddingTop: 'clamp(30px, 5vw, 70px)' }}>
        <EditorialBlocks blocks={manifesto.blocks} />
      </div>
    </article>
  )
}
