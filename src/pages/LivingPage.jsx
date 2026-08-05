import PageShell from '../components/editorial/PageShell'
import EditorialNav from '../components/editorial/EditorialNav'
import EditorialSection from '../components/editorial/EditorialSection'
import ManifestoBlock from '../components/editorial/ManifestoBlock'
import SectionDivider from '../components/editorial/SectionDivider'
import Reveal from '../components/editorial/Reveal'
import NewsletterSignup from '../components/editorial/NewsletterSignup'
import EditorialFooter from '../components/editorial/EditorialFooter'
import { manifestos } from '../data/manifestos'

// ─────────────────────────────────────────────────────────────────────────────
// LIVING — no projects here. Ideas. The two founding manifestos as
// magazine features, alternating composition, editorial numbering.
// ─────────────────────────────────────────────────────────────────────────────
export default function LivingPage() {
  return (
    <PageShell>
      <EditorialNav />

      {/* ── Section opening ── */}
      <header className="ed-container" style={{ paddingTop: 'clamp(70px, 10vw, 160px)', paddingBottom: 'clamp(50px, 8vw, 120px)' }}>
        <Reveal>
          <p className="ed-kicker" style={{ marginBottom: 'clamp(24px, 3vw, 42px)' }}>Section — Living</p>
          <h1 className="ed-display" style={{ maxWidth: 1000 }}>
            Living comes first. The building follows.
          </h1>
        </Reveal>
      </header>

      {manifestos.map((manifesto, i) => (
        <EditorialSection key={manifesto.slug} space={i === 0 ? 'clamp(30px, 5vw, 70px)' : '0'}>
          {i > 0 && <SectionDivider />}
          <ManifestoBlock manifesto={manifesto} invert={i % 2 === 1} />
        </EditorialSection>
      ))}

      <div style={{ height: 'clamp(70px, 10vw, 150px)' }} />

      <NewsletterSignup />
      <EditorialFooter />
    </PageShell>
  )
}
