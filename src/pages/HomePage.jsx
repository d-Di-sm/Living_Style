import { Link } from 'react-router-dom'
import PageShell from '../components/editorial/PageShell'
import EditorialNav from '../components/editorial/EditorialNav'
import EditorialSection from '../components/editorial/EditorialSection'
import LargeCaption from '../components/editorial/LargeCaption'
import Reveal from '../components/editorial/Reveal'
import { manifestos } from '../data/manifestos'

// ─────────────────────────────────────────────────────────────────────────────
// The issue opens on paper: a single typographic statement; kicker, title,
// standfirst; and the way into the manifesto. Nothing below it.
// ─────────────────────────────────────────────────────────────────────────────
export default function HomePage() {
  const [first] = manifestos

  return (
    <PageShell>
      <EditorialNav />

      {/* ── Editorial intro; the manifesto, breathing ── */}
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
              <span className="ed-kicker" style={{ fontFamily: 'var(--ed-serif)', fontSize: '15px' }}>
                SOMA Living; A Publication on How We Live
              </span>
            </div>
          </Reveal>

          <LargeCaption align="center">{first.title}</LargeCaption>

          <Reveal amount={0.3}>
            <div className="ed-container" style={{ paddingTop: 'clamp(36px, 5vw, 70px)' }}>
              {/* Stanza breaks come from the copy itself (pre-line); size
                  matches the kicker above. */}
              <p className="ed-standfirst" style={{
                maxWidth: 'min(1100px, 100%)',
                margin: '0 auto',
                textAlign: 'center',
                fontSize: '15px',
                whiteSpace: 'pre-line',
              }}>
                {first.standfirst}
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 'clamp(28px, 4vw, 48px)' }}>
                <Link to="/living" className="ed-link">Read the manifesto</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </EditorialSection>
    </PageShell>
  )
}
