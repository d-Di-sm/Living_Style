import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import EditorialImage from './EditorialImage'
import { img, pickHorizontal } from '../../data/lifestyle'

// ─────────────────────────────────────────────────────────────────────────────
// A journal entry shown as a cover, not a card: photograph, title, excerpt,
// and quiet metadata. The whole composition is the link.
// ─────────────────────────────────────────────────────────────────────────────
export default function ArticlePreview({ article, featured = false }) {
  const cover = typeof article.cover === 'string'
    ? img(article.cover)
    : article.cover ?? pickHorizontal(article.coverSeed)

  return (
    <Reveal amount={0.15}>
      <Link
        to={`/journal/${article.slug}`}
        className="ed-img-hover"
        style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
      >
        <EditorialImage image={cover} ratio={featured ? '2 / 1' : '4 / 3'} />
        <div style={{ paddingTop: 'clamp(22px, 3vw, 36px)', maxWidth: featured ? 780 : 560 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 18, marginBottom: 18 }}>
            <span className="ed-meta">{article.date}</span>
          </div>
          <h3 className={featured ? 'ed-headline' : 'ed-title-sm'} style={{ marginBottom: 18 }}>
            {article.title}
          </h3>
          {article.author && (
            <p className="ed-meta" style={{ marginBottom: 18 }}>By {article.author}</p>
          )}
          <p className="ed-body" style={{ color: 'var(--ed-ink-soft)', marginBottom: 22 }}>
            {article.excerpt}
          </p>
          <span className="ed-meta">{article.readTime}</span>
        </div>
      </Link>
    </Reveal>
  )
}
