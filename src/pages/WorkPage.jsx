import { Link } from 'react-router-dom'
import PageShell from '../components/editorial/PageShell'
import EditorialNav from '../components/editorial/EditorialNav'
import Reveal from '../components/editorial/Reveal'
import EditorialImage from '../components/editorial/EditorialImage'
import SectionDivider from '../components/editorial/SectionDivider'
import NewsletterSignup from '../components/editorial/NewsletterSignup'
import EditorialFooter from '../components/editorial/EditorialFooter'
import { projects } from '../data/projects'
import { projectEditorial } from '../data/projectEditorial'

// ─────────────────────────────────────────────────────────────────────────────
// WORK — the residential portfolio, presented as a publication.
// Each project opens as a feature: photograph, name, place, authorship.
// ─────────────────────────────────────────────────────────────────────────────
export default function WorkPage() {
  return (
    <PageShell>
      <EditorialNav />

      <header className="ed-container" style={{ paddingTop: 'clamp(70px, 10vw, 160px)', paddingBottom: 'clamp(50px, 8vw, 120px)' }}>
        <Reveal>
          <p className="ed-kicker" style={{ marginBottom: 'clamp(24px, 3vw, 42px)' }}>Section — Work</p>
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

      {projects.map((project, i) => {
        const ed = projectEditorial[project.id]
        return (
          <div key={project.id}>
            {i > 0 && <SectionDivider />}
            <Reveal amount={0.1}>
              <Link to={`/work/${ed.slug}`} className="ed-img-hover" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
                <div className="ed-container">
                  <EditorialImage src={ed.heroImage} ratio="21 / 10" priority={i === 0} />
                  <div style={{
                    display: 'flex', flexWrap: 'wrap', alignItems: 'baseline',
                    justifyContent: 'space-between', gap: 20,
                    paddingTop: 'clamp(24px, 3vw, 40px)',
                  }}>
                    <div>
                      <span className="ed-number" style={{ display: 'block', marginBottom: 16 }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h2 className="ed-headline" style={{ marginBottom: 14 }}>{ed.name}</h2>
                      <p className="ed-kicker">{ed.location}</p>
                    </div>
                    <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', gap: 10 }}>
                      <span className="ed-meta">{ed.architecture}</span>
                      <span className="ed-meta" style={{ color: 'var(--ed-accent)' }}>{ed.collaboration}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>
        )
      })}

      <div style={{ height: 'clamp(90px, 13vw, 200px)' }} />

      <NewsletterSignup />
      <EditorialFooter />
    </PageShell>
  )
}
