import { motion } from 'framer-motion'
import { useMediaQuery } from '../hooks/useMediaQuery'

const EASE_IN = [0.16, 1, 0.3, 1]
const EASE_OUT = [0.55, 0, 1, 0.45]

function getCardState(scrollProgress, start, end) {
  if (scrollProgress < start) return 'before'
  if (scrollProgress > end) return 'after'
  return 'visible'
}

function getAnimValues(state) {
  switch (state) {
    case 'before': return { opacity: 0, y: 36, filter: 'blur(5px)' }
    case 'visible': return { opacity: 1, y: 0,  filter: 'blur(0px)' }
    case 'after':   return { opacity: 0, y: -24, filter: 'blur(4px)' }
  }
}

function getTransition(state) {
  return state === 'visible'
    ? { duration: 1.1, ease: EASE_IN }
    : { duration: 0.7, ease: EASE_OUT }
}

function VideoCard({ src, rotateY = 0, floatDelay = 0, size = 'clamp(150px, 21vw, 270px)' }) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0], rotateX: [5, 3.5, 5], rotateY: [rotateY, rotateY * 0.7, rotateY] }}
      transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: floatDelay }}
      style={{
        transformPerspective: 900,
        width: size,
        aspectRatio: '9 / 16',
        borderRadius: '10px',
        overflow: 'hidden',
        flexShrink: 0,
        boxShadow: [
          '0 50px 90px rgba(0,0,0,0.70)',
          '0 20px 40px rgba(0,0,0,0.45)',
          '0 0 0 1px rgba(196,184,152,0.15)',
        ].join(', '),
      }}
    >
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
    </motion.div>
  )
}

// Shared header used above video grids
function VideoGridHeader({ label, headline }) {
  if (!label && !headline) return null
  return (
    <div style={{ textAlign: 'center' }}>
      <p className="label" style={{ marginBottom: '14px' }}>{label}</p>
      <div style={{ width: '32px', height: '1px', background: 'rgba(196,184,152,0.3)', margin: '0 auto 16px' }} />
      <h2 style={{
        fontFamily: 'var(--serif)',
        fontSize: 'clamp(26px, 3.2vw, 48px)',
        fontWeight: 300,
        lineHeight: 1.05,
        letterSpacing: '-0.01em',
        color: 'var(--cream)',
        whiteSpace: 'pre-line',
        margin: 0,
      }}>{headline}</h2>
    </div>
  )
}

export default function InfoCard({ card, scrollProgress }) {
  const isMobile = useMediaQuery('(max-width: 767px)')

  const state = getCardState(scrollProgress, card.start, card.end)
  const animValues = getAnimValues(state)
  const transition = getTransition(state)

  const isRight = card.align === 'right'
  const isCenter = card.align === 'center'

  // Mobile-responsive video card sizes — desktop unchanged
  const trioSize = isMobile ? 'clamp(80px, 28vw, 110px)' : 'clamp(110px, 15vw, 200px)'
  const trioGap  = isMobile ? '6px' : 'clamp(8px, 1.1vw, 16px)'
  const quadSize = isMobile ? 'clamp(70px, 20vw, 110px)' : 'clamp(110px, 15vw, 200px)'
  const quadGap  = isMobile ? '5px' : 'clamp(8px, 1.1vw, 16px)'

  // maxWidth: CSS min() keeps desktop values intact; constrains naturally on narrow viewports
  const maxWidth =
    card.type === 'video-quad' || card.type === 'video-trio'
      ? 'min(900px, calc(100vw - 16px))'
      : isCenter
        ? 'min(560px, calc(100vw - 48px))'
        : 'min(440px, calc(100vw - 48px))'

  return (
    <motion.div
      initial={{ opacity: 0, y: 36, filter: 'blur(5px)' }}
      animate={animValues}
      transition={transition}
      style={{
        willChange: 'opacity, transform, filter',
        textAlign: card.align,
        maxWidth,
      }}
    >

      {/* ── Video-trio: tres cards 9:16 en fila ── */}
      {card.type === 'video-trio' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          <VideoGridHeader label={card.label} headline={card.headline} />
          <div style={{ display: 'flex', gap: trioGap, alignItems: 'flex-end' }}>
            <VideoCard src={card.srcs[0]} rotateY={-4}  floatDelay={0}   size={trioSize} />
            <VideoCard src={card.srcs[1]} rotateY={0}   floatDelay={1.2} size={trioSize} />
            <VideoCard src={card.srcs[2]} rotateY={4}   floatDelay={2.4} size={trioSize} />
          </div>
        </div>
      )}

      {/* ── Video-quad: cuatro cards 9:16 en fila ── */}
      {card.type === 'video-quad' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          <VideoGridHeader label={card.label} headline={card.headline} />
          <div style={{ display: 'flex', gap: quadGap, alignItems: 'flex-end' }}>
            <VideoCard src={card.srcs[0]} rotateY={-5}  floatDelay={0}   size={quadSize} />
            <VideoCard src={card.srcs[1]} rotateY={-2}  floatDelay={0.9} size={quadSize} />
            <VideoCard src={card.srcs[2]} rotateY={2}   floatDelay={1.8} size={quadSize} />
            <VideoCard src={card.srcs[3]} rotateY={5}   floatDelay={2.7} size={quadSize} />
          </div>
        </div>
      )}

      {/* ── Video-CTA: texto arriba (opcional) + video 9:16 con 3D abajo ── */}
      {card.type === 'video-cta' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          {(card.label || card.headline) && (
            <div style={{ textAlign: 'center' }}>
              <p className="label" style={{ marginBottom: '14px' }}>{card.label}</p>
              <div style={{ width: '32px', height: '1px', background: 'rgba(196,184,152,0.3)', margin: '0 auto 16px' }} />
              <h2 style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(26px, 3.2vw, 48px)',
                fontWeight: 300,
                lineHeight: 1.05,
                letterSpacing: '-0.01em',
                color: 'var(--cream)',
                whiteSpace: 'pre-line',
                margin: 0,
              }}>{card.headline}</h2>
            </div>
          )}

          <motion.div
            animate={{ y: [0, -12, 0], rotateX: [5, 3.5, 5], rotateY: [-2.5, -1.5, -2.5] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              transformPerspective: 900,
              width: 'clamp(110px, 15vw, 200px)',
              aspectRatio: '9 / 16',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: [
                '0 70px 120px rgba(0,0,0,0.75)',
                '0 35px 60px rgba(0,0,0,0.55)',
                '0 12px 24px rgba(0,0,0,0.35)',
                '0 0 0 1px rgba(196,184,152,0.18)',
              ].join(', '),
            }}
          >
            <video src={card.src} autoPlay muted loop playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </motion.div>
        </div>
      )}

      {/* ── Logo card ── */}
      {card.type === 'logo' && (
        <img
          src={card.src}
          alt={card.alt}
          style={{
            width: 'clamp(200px, 36vw, 480px)',
            height: 'auto',
            display: 'block',
            margin: '0 auto',
            filter: card.invert ? 'brightness(1)' : 'brightness(1.15)',
          }}
        />
      )}

      {/* ── Text cards: headline, detail, cta ── */}
      {card.type !== 'logo' && card.type !== 'video' && card.type !== 'video-cta' && card.type !== 'video-trio' && card.type !== 'video-quad' && (
        <>
          <p className="label" style={{ marginBottom: '16px' }}>{card.label}</p>

          <div className={`editorial-rule ${isRight ? 'right' : isCenter ? 'center' : ''}`} style={{ marginTop: 0 }} />

          {card.type === 'headline' ? (
            <h1 className="headline-large" style={{ whiteSpace: 'pre-line', margin: '24px 0' }}>
              {card.headline}
            </h1>
          ) : (
            <h2 className="headline-medium" style={{ whiteSpace: 'pre-line', margin: '24px 0' }}>
              {card.headline}
            </h2>
          )}

          {card.subheadline && (
            <p className="subheadline" style={{ whiteSpace: 'pre-line' }}>{card.subheadline}</p>
          )}
          {card.body && (
            <p className="body-text" style={{ whiteSpace: 'pre-line', marginTop: '20px' }}>{card.body}</p>
          )}
          {card.detail && (
            <p className="detail-text" style={{ marginTop: '24px' }}>{card.detail}</p>
          )}
          {card.cta && (
            <a href="#" className="cta-button">{card.cta}</a>
          )}
        </>
      )}
    </motion.div>
  )
}
