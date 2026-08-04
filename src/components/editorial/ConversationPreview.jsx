import Reveal from './Reveal'
import EditorialImage from './EditorialImage'
import { pickAny } from '../../data/lifestyle'

// ─────────────────────────────────────────────────────────────────────────────
// A forthcoming conversation: large rectangular portrait (never circular),
// role, an introduction, and a quiet "Coming Soon".
// `invert` alternates portrait/text sides down the page.
// ─────────────────────────────────────────────────────────────────────────────
export default function ConversationPreview({ conversation, invert = false }) {
  const portrait = conversation.portrait
    ? { src: conversation.portrait, orientation: 'v' }
    : pickAny(conversation.portraitSeed)

  return (
    <Reveal amount={0.15}>
      <div
        className="ed-container"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
          gap: 'clamp(36px, 6vw, 110px)',
          alignItems: 'center',
        }}
      >
        <div style={{ order: invert ? 2 : 1 }}>
          <EditorialImage image={portrait} ratio="4 / 5" caption="Portrait forthcoming" />
        </div>

        <div style={{ order: invert ? 1 : 2 }}>
          <p className="ed-kicker ed-kicker--accent" style={{ marginBottom: 24 }}>
            {conversation.comingSoon ? 'Coming Soon' : 'Conversation'}
          </p>
          <h3 className="ed-headline" style={{ marginBottom: 'clamp(22px, 3vw, 36px)' }}>
            {conversation.title}
          </h3>
          <p className="ed-meta" style={{ marginBottom: 24 }}>
            {conversation.guest} — {conversation.role}
          </p>
          <p className="ed-body" style={{ color: 'var(--ed-ink-soft)' }}>{conversation.intro}</p>
        </div>
      </div>
    </Reveal>
  )
}
