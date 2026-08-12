import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import EditorialImage from './EditorialImage'
import { pickAny } from '../../data/lifestyle'

// ─────────────────────────────────────────────────────────────────────────────
// A conversation preview: large rectangular portrait (never circular), title,
// guest, and an introduction. The whole composition links to the full page.
// `invert` alternates portrait/text sides down the page.
// ─────────────────────────────────────────────────────────────────────────────
export default function ConversationPreview({ conversation, invert = false }) {
  const portrait = conversation.portrait
    ? { src: conversation.portrait, orientation: 'v' }
    : pickAny(conversation.portraitSeed)

  return (
    <Reveal amount={0.15}>
      <Link
        to={`/conversations/${conversation.slug}`}
        className="ed-container ed-img-hover"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
          gap: 'clamp(36px, 6vw, 110px)',
          alignItems: 'center',
          textDecoration: 'none',
          color: 'inherit',
        }}
      >
        <div style={{ order: invert ? 2 : 1 }}>
          <EditorialImage image={portrait} ratio="4 / 5" caption="Portrait forthcoming" />
        </div>

        <div style={{ order: invert ? 1 : 2 }}>
          {/* Published conversations are dated; the rest carry the generic label */}
          <p className="ed-kicker" style={{ marginBottom: 24 }}>
            {conversation.comingSoon ? 'Coming Soon' : (conversation.date ?? 'Conversation')}
          </p>
          <h3 className="ed-headline" style={{ marginBottom: 'clamp(22px, 3vw, 36px)' }}>
            {conversation.title}
          </h3>
          <p className="ed-meta" style={{ marginBottom: 24 }}>
            {conversation.guest} — {conversation.role}
          </p>
          <p className="ed-body" style={{ color: 'var(--ed-ink-soft)' }}>{conversation.intro}</p>
        </div>
      </Link>
    </Reveal>
  )
}
