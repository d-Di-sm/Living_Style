import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import ReadingProgress from './ReadingProgress'
import ImageReveal from './ImageReveal'
import EditorialBlocks from './EditorialBlocks'
import { img, pickHorizontal } from '../../data/lifestyle'
import { articles } from '../../data/articles'

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
      <div style={{ paddingTop: 'clamp(20px, 3vw, 40px)', paddingBottom: 'clamp(30px, 4vw, 50px)' }}>
        <EditorialBlocks blocks={article.blocks} />
      </div>

      {/* ── Next entry ── */}
      <NextEntry currentSlug={article.slug} />
    </article>
  )
}

// Mirrors the Next Conversation block at the foot of a conversation: the
// following entry in the section, wrapping around at the end.
function NextEntry({ currentSlug }) {
  const idx = articles.findIndex(a => a.slug === currentSlug)
  const next = articles[(idx + 1) % articles.length]
  if (!next || next.slug === currentSlug) return null

  return (
    <Reveal amount={0.4}>
      <div className="ed-container" style={{ paddingBottom: 'clamp(70px, 10vw, 150px)' }}>
        <div style={{ borderTop: '1px solid var(--ed-rule)', paddingTop: 'clamp(40px, 6vw, 70px)' }}>
          <Link to={`/journal/${next.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <p className="ed-kicker" style={{ marginBottom: 18 }}>Next Entry</p>
            <h2 className="ed-headline" style={{ marginBottom: 14 }}>{next.title}</h2>
            <div style={{ display: 'flex', gap: 28 }}>
              <span className="ed-meta">{next.date}</span>
              <span className="ed-meta">{next.readTime}</span>
            </div>
          </Link>
        </div>
      </div>
    </Reveal>
  )
}
