import { useState } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import PageShell from '../components/editorial/PageShell'
import EditorialNav from '../components/editorial/EditorialNav'
import ProjectEditorialHeader from '../components/editorial/ProjectEditorialHeader'
import Reveal from '../components/editorial/Reveal'
import SectionDivider from '../components/editorial/SectionDivider'
import NewsletterSignup from '../components/editorial/NewsletterSignup'
import EditorialFooter from '../components/editorial/EditorialFooter'
import { SECTION_CONFIG, SectionGrid, VideoPanel } from '../components/DetailView'
import { projects } from '../data/projects'
import { projectEditorial, projectSlugToId } from '../data/projectEditorial'

// ─────────────────────────────────────────────────────────────────────────────
// A project as a feature story. Narrative first, information second.
// The existing DetailView machinery — video galleries, VideoPanel player,
// brochures, pricing, share links — is preserved intact underneath.
// ─────────────────────────────────────────────────────────────────────────────
export default function ProjectPage() {
  const { slug } = useParams()
  const id = projectSlugToId[slug]
  const project = projects.find(p => p.id === id)
  const editorial = projectEditorial[id]
  const config = SECTION_CONFIG[id] ?? { videos: [], tipologias: [] }

  const [videoPanel, setVideoPanel] = useState(null)

  if (!project) return <Navigate to="/work" replace />

  return (
    <PageShell>
      <EditorialNav />

      <ProjectEditorialHeader editorial={editorial} />

      {/* ── Narrative — the story before the facts ── */}
      <section className="ed-container" style={{ paddingBottom: 'clamp(50px, 8vw, 120px)' }}>
        <Reveal>
          <p className="ed-standfirst" style={{ maxWidth: 780, marginBottom: 'clamp(40px, 6vw, 80px)' }}>
            {editorial.standfirst}
          </p>
        </Reveal>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(24px, 3vw, 44px)' }}>
          {editorial.paragraphs.map((text, i) => (
            <Reveal key={i} amount={0.3}>
              <p className="ed-body" style={{ marginLeft: i % 2 === 1 ? 'auto' : 0 }}>{text}</p>
            </Reveal>
          ))}
        </div>

        {/* ── In brief — the technical sheet, discreet, after the narrative ── */}
        <Reveal amount={0.3}>
          <div style={{ marginTop: 'clamp(60px, 8vw, 110px)', maxWidth: 560 }}>
            <p className="ed-kicker" style={{ marginBottom: 22 }}>In Brief</p>
            <hr className="ed-rule" />
            {(config.info ?? []).map(([label, value]) => (
              <div key={label}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 24, padding: '14px 0' }}>
                  <span className="ed-meta">{label}</span>
                  <span className="ed-body" style={{ maxWidth: 'none', lineHeight: 1.4, textAlign: 'right' }}>{value}</span>
                </div>
                <hr className="ed-rule" />
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── The photograph with the residence logo — preserved composition ── */}
      <div className="d-photo" style={{ height: 'min(72vh, 640px)' }}>
        <img src={config.heroImage ?? project.image} alt="" loading="lazy" />
        {project.id === 1
          ? <img src="/images/res3.jpg" alt="" className="d-photo-overlay" loading="lazy" />
          : project.id === 3
            ? <img src="/images/phase2.png" alt="" className="d-photo-overlay" loading="lazy" />
            : <div className="d-photo-overlay" />
        }
        <img className={['d-villa-logo', config.logoClass].filter(Boolean).join(' ')} src={config.logo} alt="" />
      </div>

      {/* ── Videos, brochures, pricing, share — the existing machinery ── */}
      <SectionGrid
        title="Videos"
        cards={config.videos}
        image={project.image}
        showMeta={false}
        links={{ ...project.links, pricing: config.pricingUrl, brochure: config.brochureUrl }}
        onCardClick={i => setVideoPanel({ cards: config.videos, index: i })}
      />

      {videoPanel && (
        <VideoPanel
          cards={videoPanel.cards}
          initialIndex={videoPanel.index}
          onClose={() => setVideoPanel(null)}
          shareUrl={project.links?.web}
        />
      )}

      {/* ── Next project ── */}
      <SectionDivider label="Continue Reading" />
      <NextProject currentId={id} />

      <NewsletterSignup />
      <EditorialFooter />
    </PageShell>
  )
}

function NextProject({ currentId }) {
  const ids = projects.map(p => p.id)
  const nextId = ids[(ids.indexOf(currentId) + 1) % ids.length]
  const next = projectEditorial[nextId]

  return (
    <Reveal amount={0.4}>
      <div className="ed-container" style={{ paddingBottom: 'clamp(80px, 12vw, 170px)' }}>
        <Link to={`/work/${next.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <p className="ed-kicker" style={{ marginBottom: 20 }}>Next Project</p>
          <h2 className="ed-headline">{next.name}</h2>
          <p className="ed-kicker" style={{ marginTop: 16 }}>{next.location}</p>
        </Link>
      </div>
    </Reveal>
  )
}
