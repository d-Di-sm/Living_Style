import { useParams, Navigate, Link } from 'react-router-dom'
import PageShell from '../components/editorial/PageShell'
import EditorialNav from '../components/editorial/EditorialNav'
import Reveal from '../components/editorial/Reveal'
import EditorialImage from '../components/editorial/EditorialImage'
import ReadingProgress from '../components/editorial/ReadingProgress'
import NewsletterSignup from '../components/editorial/NewsletterSignup'
import EditorialFooter from '../components/editorial/EditorialFooter'
import { conversations } from '../data/conversations'
import { img } from '../data/lifestyle'

// ─────────────────────────────────────────────────────────────────────────────
// A single conversation, composed like an Interview Magazine feature:
// oversized title, portrait, then the dialogue. Questions carry the
// "SOMA LIVING" speaker label; when `answers[i]` exists it renders beneath
// its question under the guest's name. Until then, the questions stand alone.
// ─────────────────────────────────────────────────────────────────────────────
export default function ConversationPage() {
  const { slug } = useParams()
  const c = conversations.find(x => x.slug === slug)

  if (!c) return <Navigate to="/conversations" replace />

  // Photography interspersed through the dialogue, keyed by question number
  const imagesAfter = Object.fromEntries((c.images ?? []).map(im => [im.after, im]))

  return (
    <PageShell>
      <EditorialNav />
      <ReadingProgress />

      {/* ── Masthead ── */}
      <header className="ed-container" style={{ paddingTop: 'clamp(70px, 10vw, 150px)', paddingBottom: 'clamp(40px, 6vw, 90px)' }}>
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 18, marginBottom: 'clamp(28px, 4vw, 48px)' }}>
            <Link to="/conversations" className="ed-kicker" style={{ textDecoration: 'none' }}>Conversations</Link>
            {c.comingSoon && <span className="ed-kicker">Coming Soon</span>}
          </div>
          <h1 className="ed-display" style={{ maxWidth: 1050, marginBottom: 'clamp(28px, 4vw, 48px)' }}>
            {c.title}
          </h1>
          <p className="ed-meta" style={{ marginBottom: 22, fontSize: '19.25px' }}>{c.guest}; {c.role}</p>
          <p className="ed-standfirst" style={{ maxWidth: 720 }}>{c.intro}</p>
        </Reveal>
      </header>

      {/* ── Portrait ── */}
      <div className="ed-container">
        <EditorialImage
          image={{ src: c.portrait, orientation: 'v' }}
          ratio="4 / 5"
          caption="Portrait forthcoming"
          style={{ maxWidth: 620 }}
        />
      </div>

      {/* ── The dialogue ── */}
      <section className="ed-container" style={{ paddingTop: 'clamp(60px, 9vw, 130px)', paddingBottom: 'clamp(70px, 10vw, 150px)' }}>
        {c.comingSoon && (
          <Reveal>
            <p className="ed-note" style={{ maxWidth: 520, marginBottom: 'clamp(40px, 6vw, 80px)' }}>
              The questions are set. The conversation is forthcoming.
            </p>
          </Reveal>
        )}

        <div style={{ maxWidth: 880 }}>
          {c.questions.map((q, i) => {
            const interleaved = imagesAfter[i + 1]
            const image = interleaved?.src
              ? { src: interleaved.src, orientation: interleaved.orientation ?? 'h' }
              : interleaved ? img(interleaved.name) : null
            const vertical = image?.orientation === 'v'
            return (
              <div key={i}>
                <Reveal amount={0.3}>
                  <div style={{ borderTop: '1px solid var(--ed-rule)', padding: 'clamp(32px, 5vw, 56px) 0' }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 18, marginBottom: 20 }}>
                      {/* Number and label sit at the same weight as the note above */}
                      <span className="ed-number" style={{ color: 'var(--ed-ink-faint)' }}>{String(i + 1).padStart(2, '0')}</span>
                      <span className="ed-kicker">SOMA Living</span>
                    </div>
                    <p style={{
                      fontFamily: 'var(--ed-serif)',
                      fontWeight: 300,
                      fontSize: 'clamp(19px, 2vw, 26px)',
                      lineHeight: 1.55,
                      color: 'var(--ed-ink)',
                    }}>
                      {q}
                    </p>

                    {/* Answer slot; renders once answers[i] exists */}
                    {c.answers?.[i] && (
                      <div style={{ marginTop: 'clamp(24px, 3vw, 40px)' }}>
                        {/* The answer mark: an em dash, transcript convention.
                            The guest is named once in the masthead, not on
                            every reply. */}
                        <p className="ed-kicker" aria-label={`${c.guest} answers`} style={{ marginBottom: 16 }}>
                          ;
                        </p>
                        {/* An answer is a string or an array of paragraphs */}
                        {[].concat(c.answers[i]).map((para, k) => (
                          <p
                            key={k}
                            className="ed-body"
                            style={{ maxWidth: 720, ...(k > 0 ? { marginTop: '1.1em' } : null) }}
                          >
                            {para}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                </Reveal>

                {/* Interspersed photograph; Interview-magazine rhythm */}
                {image && (
                  <div style={{ padding: 'clamp(16px, 2vw, 28px) 0 clamp(48px, 7vw, 90px)' }}>
                    <EditorialImage
                      image={image}
                      caption={interleaved.caption}
                      objectPosition={interleaved.objectPosition}
                      style={vertical
                        ? {
                            maxWidth: 560,
                            marginLeft: interleaved.align === 'right' ? 'auto' : 0,
                            marginRight: interleaved.align === 'right' ? 0 : 'auto',
                          }
                        : undefined}
                    />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* ── Next conversation ── */}
        <NextConversation currentSlug={c.slug} />
      </section>

      <NewsletterSignup />
      <EditorialFooter />
    </PageShell>
  )
}

function NextConversation({ currentSlug }) {
  const idx = conversations.findIndex(x => x.slug === currentSlug)
  const next = conversations[(idx + 1) % conversations.length]

  return (
    <Reveal amount={0.4}>
      <div style={{ borderTop: '1px solid var(--ed-rule)', paddingTop: 'clamp(40px, 6vw, 70px)', marginTop: 'clamp(30px, 4vw, 50px)' }}>
        <Link to={`/conversations/${next.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <p className="ed-kicker" style={{ marginBottom: 18 }}>Next Conversation</p>
          <h2 className="ed-headline" style={{ marginBottom: 14 }}>{next.title}</h2>
          <p className="ed-meta" style={{ fontSize: '19.25px' }}>{next.guest}; {next.role}</p>
        </Link>
      </div>
    </Reveal>
  )
}
