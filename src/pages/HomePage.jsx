import { Link } from 'react-router-dom'
import PageShell from '../components/editorial/PageShell'
import EditorialNav from '../components/editorial/EditorialNav'
import EditorialHero from '../components/editorial/EditorialHero'
import EditorialSection from '../components/editorial/EditorialSection'
import SectionDivider from '../components/editorial/SectionDivider'
import LargeCaption from '../components/editorial/LargeCaption'
import QuoteBlock from '../components/editorial/QuoteBlock'
import Reveal from '../components/editorial/Reveal'
import EditorialImage from '../components/editorial/EditorialImage'
import ImageReveal from '../components/editorial/ImageReveal'
import ArticlePreview from '../components/editorial/ArticlePreview'
import NewsletterSignup from '../components/editorial/NewsletterSignup'
import EditorialFooter from '../components/editorial/EditorialFooter'
import Experience from '../components/Experience'
import { heroImages, src } from '../data/lifestyle'
import { manifestos } from '../data/manifestos'
import { articles } from '../data/articles'
import { conversations } from '../data/conversations'
import { projects } from '../data/projects'
import { projectEditorial } from '../data/projectEditorial'

// ─────────────────────────────────────────────────────────────────────────────
// The issue opens on paper: the editorial intro breathes first, then the
// full-screen photographic cover, then the sections.
// ─────────────────────────────────────────────────────────────────────────────
export default function HomePage() {
  const [first, second] = manifestos

  return (
    <PageShell>
      <EditorialNav />

      {/* ── Editorial intro — the manifesto, breathing ── */}
      <EditorialSection space="0">
        {/* Typographic hero: kicker, title, and standfirst hold the entire
            first window on their own (the sticky nav is ~82px tall). */}
        <div style={{
          minHeight: 'calc(100dvh - 82px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
          <Reveal>
            <div className="ed-container" style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 90px)' }}>
              {/* Same face as the standfirst (serif), kicker size untouched */}
              <span className="ed-kicker" style={{ fontFamily: 'var(--ed-serif)' }}>
                SOMA Living — A Publication on How We Live
              </span>
            </div>
          </Reveal>

          <LargeCaption align="center">{first.title}</LargeCaption>

          <Reveal amount={0.3}>
            <div className="ed-container" style={{ paddingTop: 'clamp(36px, 5vw, 70px)' }}>
              <p className="ed-standfirst" style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
                {first.standfirst}
              </p>
            </div>
          </Reveal>
        </div>

        <div style={{ paddingTop: 'clamp(60px, 9vw, 140px)' }}>
          <ImageReveal src={src('AG_IMG_9919')} height="min(72vh, 640px)" caption="Cabo del Sol, Baja California Sur" />
        </div>

        <QuoteBlock>{second.title}</QuoteBlock>

        <Reveal amount={0.3}>
          <div className="ed-container" style={{ display: 'flex', justifyContent: 'center' }}>
            <Link to="/living" className="ed-link">Read the manifestos</Link>
          </div>
        </Reveal>
      </EditorialSection>

      {/* ── The photographic cover ── */}
      <EditorialHero images={heroImages}>
        <Experience />
      </EditorialHero>

      {/* ── Sections ── */}
      <div style={{ background: 'var(--ed-paper)', color: 'var(--ed-ink)' }}>

        <SectionDivider number="I" label="Work" />

        {/* ── Work — evidence of the philosophy ── */}
        <EditorialSection space="0">
          <Reveal>
            <div className="ed-container" style={{ marginBottom: 'clamp(50px, 7vw, 100px)' }}>
              <h2 className="ed-headline" style={{ maxWidth: 900 }}>
                The projects are the evidence.
              </h2>
            </div>
          </Reveal>

          <div className="ed-container" style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(70px, 10vw, 150px)' }}>
            {projects.map((project, i) => {
              const ed = projectEditorial[project.id]
              const invert = i % 2 === 1
              return (
                <Reveal key={project.id} amount={0.15}>
                  <Link
                    to={`/work/${ed.slug}`}
                    className="ed-img-hover"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
                      gap: 'clamp(28px, 5vw, 90px)',
                      alignItems: 'center',
                      textDecoration: 'none',
                      color: 'inherit',
                    }}
                  >
                    <div style={{ order: invert ? 2 : 1 }}>
                      <EditorialImage src={ed.heroImage} ratio="4 / 3" />
                    </div>
                    <div style={{ order: invert ? 1 : 2 }}>
                      <span className="ed-number">{String(i + 1).padStart(2, '0')}</span>
                      <h3 className="ed-headline" style={{ margin: 'clamp(16px, 2vw, 28px) 0' }}>{ed.name}</h3>
                      <p className="ed-kicker" style={{ marginBottom: 14 }}>{ed.location}</p>
                      <p className="ed-meta" style={{ color: 'var(--ed-accent)' }}>{ed.collaboration}</p>
                    </div>
                  </Link>
                </Reveal>
              )
            })}
          </div>

          <Reveal amount={0.4}>
            <div className="ed-container" style={{ display: 'flex', justifyContent: 'center', paddingTop: 'clamp(60px, 8vw, 110px)' }}>
              <Link to="/work" className="ed-link">All work</Link>
            </div>
          </Reveal>
        </EditorialSection>

        <SectionDivider number="II" label="Entries" />

        {/* ── Entries previews ── */}
        <EditorialSection space="0">
          <div
            className="ed-container"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
              gap: 'clamp(40px, 6vw, 100px)',
              alignItems: 'start',
            }}
          >
            {articles.map(article => (
              <ArticlePreview key={article.slug} article={article} />
            ))}
          </div>
        </EditorialSection>

        <SectionDivider number="III" label="Conversations" />

        {/* ── Conversations teaser ── */}
        <EditorialSection space="0" style={{ paddingBottom: 'clamp(80px, 12vw, 180px)' }}>
          <Reveal>
            <div className="ed-container">
              <p className="ed-kicker ed-kicker--accent" style={{ marginBottom: 26 }}>Coming Soon</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(28px, 4vw, 48px)', maxWidth: 950 }}>
                {conversations.map(c => (
                  <Link key={c.slug} to={`/conversations/${c.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <h3 className="ed-title-sm" style={{ marginBottom: 10 }}>{c.title}</h3>
                    <span className="ed-meta">{c.guest} — {c.role}</span>
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </EditorialSection>

        <NewsletterSignup />
      </div>

      <EditorialFooter />
    </PageShell>
  )
}
