import PageShell from '../components/editorial/PageShell'
import EditorialNav from '../components/editorial/EditorialNav'
import ArticlePreview from '../components/editorial/ArticlePreview'
import Reveal from '../components/editorial/Reveal'
import SectionDivider from '../components/editorial/SectionDivider'
import NewsletterSignup from '../components/editorial/NewsletterSignup'
import EditorialFooter from '../components/editorial/EditorialFooter'
import { articles } from '../data/articles'

// ─────────────────────────────────────────────────────────────────────────────
// JOURNAL; not a blog. A collection of entries, each presented as a cover.
// The first entry runs featured-size; the rest follow in a looser grid.
// ─────────────────────────────────────────────────────────────────────────────
export default function JournalPage() {
  const [featured, ...rest] = articles

  return (
    <PageShell>
      <EditorialNav />

      <header className="ed-container" style={{ paddingTop: 'clamp(70px, 10vw, 160px)', paddingBottom: 'clamp(50px, 8vw, 120px)' }}>
        <Reveal>
          <p className="ed-kicker" style={{ marginBottom: 'clamp(24px, 3vw, 42px)' }}>Section; Entries</p>
          <h1 className="ed-display" style={{ maxWidth: 1050 }}>
            Entries, observations, essays.
          </h1>
        </Reveal>
      </header>

      {/* ── Featured entry ── */}
      <div className="ed-container">
        <ArticlePreview article={featured} featured />
      </div>

      {rest.length > 0 && (
        <>
          <SectionDivider />
          <div
            className="ed-container"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
              gap: 'clamp(40px, 6vw, 100px)',
              alignItems: 'start',
            }}
          >
            {rest.map(article => (
              <ArticlePreview key={article.slug} article={article} />
            ))}
          </div>
        </>
      )}

      <div style={{ height: 'clamp(80px, 12vw, 180px)' }} />

      <NewsletterSignup />
      <EditorialFooter />
    </PageShell>
  )
}
