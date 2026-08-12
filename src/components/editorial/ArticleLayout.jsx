import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import ReadingProgress from './ReadingProgress'
import ImageReveal from './ImageReveal'
import EditorialBlocks from './EditorialBlocks'
import { img, pickHorizontal } from '../../data/lifestyle'

// ─────────────────────────────────────────────────────────────────────────────
// A full journal entry, laid out as an editorial page: cover photograph,
// title block with generous air, then the block flow.
// ─────────────────────────────────────────────────────────────────────────────
export default function ArticleLayout({ article }) {
  const cover = article.cover ? img(article.cover) : pickHorizontal(article.coverSeed)

  return (
    <article>
      <ReadingProgress />

      {/* ── Title block ── */}
      <header className="ed-container" style={{ paddingTop: 'clamp(70px, 10vw, 150px)', paddingBottom: 'clamp(50px, 7vw, 100px)' }}>
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 18, marginBottom: 'clamp(28px, 4vw, 48px)' }}>
            <Link to="/journal" className="ed-kicker" style={{ textDecoration: 'none' }}>Entries</Link>
            {/* category chip only when it differs from the section name */}
            {article.category !== 'Entries' && (
              <span className="ed-kicker">{article.category}</span>
            )}
          </div>
          <h1 className="ed-display" style={{ maxWidth: 1050, marginBottom: 'clamp(30px, 4vw, 52px)' }}>
            {article.title}
          </h1>
          <div style={{ display: 'flex', gap: 28 }}>
            <span className="ed-meta">{article.date}</span>
            <span className="ed-meta">{article.readTime}</span>
          </div>
        </Reveal>
      </header>

      {/* ── Cover ── */}
      <ImageReveal src={cover.src} height="min(78vh, 720px)" />

      {/* ── Standfirst ── */}
      <div className="ed-container" style={{ paddingTop: 'clamp(50px, 8vw, 110px)' }}>
        <Reveal>
          <p className="ed-standfirst" style={{ maxWidth: 760 }}>{article.excerpt}</p>
        </Reveal>
      </div>

      {/* ── Body ── */}
      <div style={{ paddingTop: 'clamp(20px, 3vw, 40px)', paddingBottom: 'clamp(70px, 10vw, 150px)' }}>
        <EditorialBlocks blocks={article.blocks} />
      </div>
    </article>
  )
}
