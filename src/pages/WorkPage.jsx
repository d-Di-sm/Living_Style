import { Link } from 'react-router-dom'
import PageShell from '../components/editorial/PageShell'
import EditorialNav from '../components/editorial/EditorialNav'
import Reveal from '../components/editorial/Reveal'
import EditorialImage from '../components/editorial/EditorialImage'
import NewsletterSignup from '../components/editorial/NewsletterSignup'
import EditorialFooter from '../components/editorial/EditorialFooter'
import { projects } from '../data/projects'
import { projectEditorial } from '../data/projectEditorial'

// ─────────────────────────────────────────────────────────────────────────────
// WORK; the residential portfolio, presented as a publication.
// Each project opens as a feature: photograph, name, place, authorship.
// ─────────────────────────────────────────────────────────────────────────────
export default function WorkPage() {
  return (
    <PageShell>
      <EditorialNav />

      <header className="ed-container" style={{ paddingTop: 'clamp(70px, 10vw, 160px)', paddingBottom: 'clamp(50px, 8vw, 120px)' }}>
        <Reveal>
          <p className="ed-kicker" style={{ marginBottom: 'clamp(24px, 3vw, 42px)' }}>Section; Projects</p>
          <h1 className="ed-display" style={{ maxWidth: 1050 }}>
            Evidence of a way of thinking.
          </h1>
          <p className="ed-standfirst" style={{ maxWidth: 700, marginTop: 'clamp(30px, 4vw, 52px)' }}>
            Evidence of a way of thinking. Three residential developments between Mexico City and
            Los Cabos, each built alongside a hospitality partner, each one held to the same
            discipline of attention to detail.
          </p>
        </Reveal>
      </header>

      {/* Three columns across, one per project; the portfolio read as a
          spread rather than a scroll. Collapses to a single column below
          ~900px, where each project regains full width. */}
      <div
        className="ed-container"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: 'clamp(36px, 4vw, 72px)',
          alignItems: 'start',
        }}
      >
        {projects.map((project, i) => {
          const ed = projectEditorial[project.id]
          return (
            <Reveal key={project.id} amount={0.1}>
              <Link to={`/work/${ed.slug}`} className="ed-img-hover ed-img-mono" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
                {/* Portrait crop: three verticals sit better side by side
                    than the full-width 21/10 band this replaced. */}
                <EditorialImage src={ed.heroImage} ratio="4 / 5" priority={i === 0} />
                <div style={{ paddingTop: 'clamp(20px, 2.4vw, 32px)' }}>
                  <span className="ed-number" style={{ display: 'block', marginBottom: 14, color: 'var(--ed-ink-faint)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {/* Smaller than the old ed-headline; a three-column measure
                      cannot carry display sizes without breaking every name. */}
                  <h2 className="ed-title-sm" style={{ marginBottom: 12 }}>{ed.name}</h2>
                  <p className="ed-kicker" style={{ marginBottom: 18 }}>{ed.location}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <span className="ed-meta">{ed.architecture}</span>
                    <span className="ed-meta">{ed.collaboration}</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          )
        })}
      </div>

      <div style={{ height: 'clamp(90px, 13vw, 200px)' }} />

      <NewsletterSignup />
      <EditorialFooter />
    </PageShell>
  )
}
