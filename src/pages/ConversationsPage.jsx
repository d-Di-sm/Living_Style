import PageShell from '../components/editorial/PageShell'
import EditorialNav from '../components/editorial/EditorialNav'
import ConversationPreview from '../components/editorial/ConversationPreview'
import SectionDivider from '../components/editorial/SectionDivider'
import Reveal from '../components/editorial/Reveal'
import NewsletterSignup from '../components/editorial/NewsletterSignup'
import EditorialFooter from '../components/editorial/EditorialFooter'
import { conversations } from '../data/conversations'

// ─────────────────────────────────────────────────────────────────────────────
// CONVERSATIONS — large portraits, generous white, no cards.
// Interviews with architects, designers, and developers. Forthcoming.
// ─────────────────────────────────────────────────────────────────────────────
export default function ConversationsPage() {
  return (
    <PageShell>
      <EditorialNav />

      <header className="ed-container" style={{ paddingTop: 'clamp(70px, 10vw, 160px)', paddingBottom: 'clamp(50px, 8vw, 120px)' }}>
        <Reveal>
          <p className="ed-kicker" style={{ marginBottom: 'clamp(24px, 3vw, 42px)' }}>Section — Conversations</p>
          <h1 className="ed-display" style={{ maxWidth: 1050 }}>
            The people who shape how we live.
          </h1>
        </Reveal>
      </header>

      {conversations.map((c, i) => (
        <div key={c.slug}>
          {i > 0 && <SectionDivider />}
          <ConversationPreview conversation={c} invert={i % 2 === 1} />
        </div>
      ))}

      <div style={{ height: 'clamp(90px, 13vw, 200px)' }} />

      <NewsletterSignup />
      <EditorialFooter />
    </PageShell>
  )
}
