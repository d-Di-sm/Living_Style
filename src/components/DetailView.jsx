import { useState, useEffect, useRef } from 'react'
import { blobVideos } from '../data/blobVideos'

const SECTION_CONFIG = {
  1: {
    bigTitle:     'Soho Residences\nLos Cabos',
    logo:         '/logos/Soho_Residences_Logo.png',
    logoClass:    'logo-sr',
    description:  'The first residential offering by Soho House, combining contemporary architecture, seamless indoor-outdoor living, and curated hospitality within the coastal landscape of Cabo del Sol.',
    info: [
      ['Tipologías',  '5 tipos'],
      ['Unidades',    '42 unidades'],
      ['Ubicación',   'Cabo del Sol, Los Cabos, Mexico'],
      ['Developer',   'SOMA'],
      ['Diseño',      'Sordo Madaleno'],
    ],
    videos:     [
      { label: 'Intro',      image: '/images_detail_view/SR/intro.png',      video: blobVideos.SR_04 },
      { label: 'Amenidades', image: '/images_detail_view/SR/amenities.png',  video: blobVideos.SR_02 },
      { label: 'The Casita', image: '/images_detail_view/SR/thecasitas.png', video: blobVideos.SR_03 },
      { label: 'Buildings',  image: '/images_detail_view/SR/arch.png',       video: blobVideos.SR_01 },
    ],
    tipologias: [
      { label: '2 Bedrooms',  image: '/tipologias/PHP/T01.png' },
      { label: '3 Bedrooms',  image: '/tipologias/PHP/T01.png' },
      { label: '4 Bedrooms',  image: '/tipologias/PHP/T01.png' },
      { label: 'The Casitas', image: '/tipologias/PHP/T01.png' },
      { label: 'Casona',      image: '/tipologias/PHP/T01.png' },
    ],
  },
  2: {
    bigTitle:     'Park Hyatt Cabo Del Sol\nResidences',
    logo:         '/logos/PHLC_Residences_Logo.png',
    description:  'Set within the coastal landscape of Cabo del Sol, these private residences express contemporary architecture, seamless indoor-outdoor living, and the signature hospitality of Park Hyatt.',
    info: [
      ['Tipologías',  '3 tipos'],
      ['Unidades',    '11 unidades'],
      ['Ubicación',   'Cabo del Sol, Los Cabos, Mexico'],
      ['Developer',   'SOMA'],
      ['Diseño',      'Sordo Madaleno'],
    ],
    videos:     [
      { label: 'Intro',      image: '/images_detail_view/PHLC/intro.png',     video: blobVideos.PHLC_01 },
      { label: 'Amenidades', image: '/images_detail_view/PHLC/amenities.png', video: blobVideos.PHLC_02 },
    ],
    tipologias: [
      { label: 'Type 01', image: '/tipologias/PHLC/T01.png' },
      { label: 'Type 02', image: '/tipologias/PHLC/T02.png' },
      { label: 'Type 03', image: '/tipologias/PHLC/T03.png' },
    ],
  },
  3: {
    bigTitle:     'Park Hyatt Mexico City\nPolanco Residences',
    logo:         '/logos/PHP_Residences_Logo.png',
    description:  'In the heart of Polanco, Park Hyatt Residences blends contemporary architecture, personalized service, and renowned hospitality—crafted by SOMA and Sordo Madaleno to elevate everyday living.',
    info: [
      ['Tipologías',  '6 tipos'],
      ['Unidades',    '27 unidades'],
      ['Ubicación',   'Polanco, Mexico City'],
      ['Developer',   'SOMA'],
      ['Diseño',      'Sordo Madaleno'],
    ],
    heroImage:  '/images/phase4.png',
    videos:     [
      { label: 'Intro', image: '/images_detail_view/PHP/intro.png', video: blobVideos.PHP_Intro },
    ],
    tipologias: [
      { label: '2 Bedrooms',       image: '/tipologias/PHP/T01.png' },
      { label: '3 Bedrooms',       image: '/tipologias/PHP/T01.png' },
      { label: '2 Level Apartment', image: '/tipologias/PHP/T01.png' },
      { label: 'Penthouse',        image: '/tipologias/PHP/T01.png' },
    ],
  },
}

function VideoPanel({ cards, initialIndex, onClose, shareUrl }) {
  const [index,       setIndex]       = useState(initialIndex)
  const [playing,     setPlaying]     = useState(true)
  const [muted,       setMuted]       = useState(true)
  const [progress,    setProgress]    = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration,    setDuration]    = useState(0)
  const [copied,      setCopied]      = useState(false)
  const videoRef  = useRef(null)
  const blobCache = useRef({})
  const current   = cards[index]

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    v.load()
    v.play().catch(() => {})
    setPlaying(true)
    setProgress(0)
    setCurrentTime(0)
  }, [index])

  // Pre-fetch current video in background so blob is ready when user taps share
  useEffect(() => {
    const src = current.video
    if (!src || blobCache.current[src]) return
    fetch(src).then(r => r.blob()).then(blob => { blobCache.current[src] = blob }).catch(() => {})
  }, [index])

  const fmt = s => `${Math.floor(s/60)}:${String(Math.floor(s%60)).padStart(2,'0')}`

  const togglePlay = () => {
    const v = videoRef.current
    if (!v) return
    playing ? v.pause() : v.play()
    setPlaying(!playing)
  }

  const toggleMute = () => {
    const v = videoRef.current
    if (!v) return
    v.muted = !muted
    setMuted(!muted)
  }

  const seek = e => {
    const v = videoRef.current
    if (!v || !duration) return
    const rect = e.currentTarget.getBoundingClientRect()
    const pct  = (e.clientX - rect.left) / rect.width
    v.currentTime = pct * duration
  }

  const handleShare = async (e) => {
    e.stopPropagation()
    const url  = shareUrl ?? window.location.href
    const blob = blobCache.current[current.video]
    try {
      // Share video file if cached and supported
      if (blob && navigator.canShare) {
        const fileName = current.video.split('/').pop()
        const file = new File([blob], fileName, { type: blob.type || 'video/mp4' })
        if (navigator.canShare({ files: [file] })) {
          await navigator.share({ files: [file], title: 'SOMA Living', text: current.label })
          return
        }
      }
      // Fallback: share URL
      if (navigator.share) {
        await navigator.share({ title: 'SOMA Living', text: current.label, url })
      } else {
        await navigator.clipboard.writeText(url)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }
    } catch (err) {
      if (err.name !== 'AbortError') console.error('Share failed:', err)
    }
  }

  const prev = () => setIndex(i => (i - 1 + cards.length) % cards.length)
  const next = () => setIndex(i => (i + 1) % cards.length)

  const btnStyle = { background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', width: 32, height: 32, cursor: 'pointer', color: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s, color 0.2s', flexShrink: 0 }

  return (
    <div
      onClick={onClose}
      style={{ position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(0,0,0,0.75)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{ background: '#1A1A1A', borderRadius: 12, overflow: 'hidden', width: 'clamp(300px, 92vw, 900px)', maxHeight: '90dvh', display: 'flex', flexDirection: 'column', boxShadow: '0 32px 80px rgba(0,0,0,0.6)' }}
      >
        {/* Video */}
        <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', background: '#000' }}>
          <video
            key={index}
            ref={videoRef}
            src={current.video}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            autoPlay muted loop playsInline preload="metadata"
            onTimeUpdate={e => { setCurrentTime(e.target.currentTime); setProgress(e.target.currentTime / (e.target.duration || 1)) }}
            onLoadedMetadata={e => setDuration(e.target.duration)}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
          />
          {/* Prev / Next */}
          {cards.length > 1 && (
            <>
              <button onClick={prev} style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.12)', border: 'none', borderRadius: '50%', width: 40, height: 40, cursor: 'pointer', color: '#fff', fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>‹</button>
              <button onClick={next} style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.12)', border: 'none', borderRadius: '50%', width: 40, height: 40, cursor: 'pointer', color: '#fff', fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>›</button>
            </>
          )}
          {/* Close */}
          <button onClick={onClose} style={{ position: 'absolute', top: 14, right: 14, background: 'rgba(255,255,255,0.12)', border: 'none', borderRadius: '50%', width: 32, height: 32, cursor: 'pointer', color: '#fff', fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
        </div>

        {/* Custom controls */}
        <div style={{ padding: '10px 20px 4px', display: 'flex', alignItems: 'center', gap: 10 }}>
          {/* Play/Pause */}
          <button onClick={togglePlay} style={btnStyle}
            onMouseEnter={e => { e.currentTarget.style.background='rgba(255,255,255,0.2)'; e.currentTarget.style.color='#fff' }}
            onMouseLeave={e => { e.currentTarget.style.background='rgba(255,255,255,0.1)'; e.currentTarget.style.color='rgba(255,255,255,0.7)' }}
          >
            {playing
              ? <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
              : <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>
            }
          </button>
          {/* Time */}
          <span style={{ fontFamily: "'Funnel Sans','Inter',sans-serif", fontSize: 10, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.5px', flexShrink: 0 }}>
            {fmt(currentTime)} / {fmt(duration)}
          </span>
          {/* Progress bar */}
          <div onClick={seek} style={{ flex: 1, height: 3, background: 'rgba(255,255,255,0.15)', borderRadius: 2, cursor: 'pointer', position: 'relative' }}>
            <div style={{ width: `${progress * 100}%`, height: '100%', background: '#fff', borderRadius: 2, transition: 'width 0.1s linear' }} />
          </div>
          {/* Mute */}
          <button onClick={toggleMute} style={btnStyle}
            onMouseEnter={e => { e.currentTarget.style.background='rgba(255,255,255,0.2)'; e.currentTarget.style.color='#fff' }}
            onMouseLeave={e => { e.currentTarget.style.background='rgba(255,255,255,0.1)'; e.currentTarget.style.color='rgba(255,255,255,0.7)' }}
          >
            {muted
              ? <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="11,5 6,9 2,9 2,15 6,15 11,19"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>
              : <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="11,5 6,9 2,9 2,15 6,15 11,19"/><path d="M15.54,8.46a5,5,0,0,1,0,7.07"/></svg>
            }
          </button>
          {/* Share */}
          <button onClick={handleShare} style={btnStyle}
            onMouseEnter={e => { e.currentTarget.style.background='rgba(255,255,255,0.2)'; e.currentTarget.style.color='#fff' }}
            onMouseLeave={e => { e.currentTarget.style.background='rgba(255,255,255,0.1)'; e.currentTarget.style.color='rgba(255,255,255,0.7)' }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
            </svg>
          </button>
          {copied && <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.5)', letterSpacing: '1px' }}>Link copiado</span>}
        </div>

        {/* Footer */}
        <div style={{ padding: '8px 24px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontFamily: "'Funnel Sans','Inter',sans-serif", fontSize: 11, fontWeight: 300, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>
            {current.label}
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ display: 'flex', gap: 6 }}>
              {cards.map((_, i) => (
                <button key={i} onClick={() => setIndex(i)} style={{ width: i === index ? 18 : 6, height: 6, borderRadius: 3, background: i === index ? '#fff' : 'rgba(255,255,255,0.25)', border: 'none', cursor: 'pointer', padding: 0, transition: 'width 0.25s, background 0.25s' }} />
              ))}
            </div>
            <span style={{ fontFamily: "'Funnel Sans','Inter',sans-serif", fontSize: 11, fontWeight: 300, letterSpacing: '1px', color: 'rgba(255,255,255,0.4)' }}>
              {index + 1} / {cards.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

function GalleryCard({ label, image, video, showMeta, onClick, shareUrl }) {
  const [copied, setCopied]   = useState(false)
  const [loading, setLoading] = useState(false)

  const handleShare = async (e) => {
    e.stopPropagation()
    const url = shareUrl ?? window.location.href
    try {
      // If card has a video, fetch and share the actual file
      if (video && navigator.canShare) {
        setLoading(true)
        const res      = await fetch(video)
        const blob     = await res.blob()
        const fileName = video.split('/').pop()
        const file     = new File([blob], fileName, { type: blob.type || 'video/mp4' })
        setLoading(false)
        if (navigator.canShare({ files: [file] })) {
          await navigator.share({ files: [file], title: 'SOMA Living', text: label })
          return
        }
      }
      // Fallback: share URL or copy to clipboard
      if (navigator.share) {
        await navigator.share({ title: 'SOMA Living', text: label, url })
      } else {
        await navigator.clipboard.writeText(url)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }
    } catch (err) {
      setLoading(false)
      if (err.name !== 'AbortError') console.error('Share failed:', err)
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div
        className="gallery-card"
        onClick={onClick}
        style={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: 8,
          background: '#2A2A2A',
          height: 'clamp(200px, 40vw, 350px)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
          cursor: 'pointer',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)'
          e.currentTarget.style.boxShadow = '0 20px 48px rgba(0,0,0,0.32)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)'
          e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.18)'
        }}
      >
        {video
          ? <video src={video} autoPlay muted loop playsInline preload="metadata" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', pointerEvents: 'none' }} />
          : <img src={image} alt={label} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        }
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.55) 100%)',
          pointerEvents: 'none',
        }} />
        <span style={{
          position: 'absolute', bottom: 16, left: 16,
          fontFamily: "'Funnel Sans', 'Inter', sans-serif",
          fontSize: 11, fontWeight: 300, letterSpacing: '1.5px',
          textTransform: 'uppercase', color: '#fff',
        }}>{label}</span>

        {/* Share button */}
        {shareUrl && (
          <button
            onClick={handleShare}
            disabled={loading}
            style={{ position: 'absolute', bottom: 12, right: 12, zIndex: 10, background: 'rgba(255,255,255,0.12)', border: 'none', borderRadius: '50%', width: 32, height: 32, cursor: loading ? 'wait' : 'pointer', color: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.25)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
          >
            {loading
              ? <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ animation: 'spin 1s linear infinite' }}><path d="M12 2a10 10 0 0 1 10 10"/></svg>
              : <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
            }
          </button>
        )}
        {copied && (
          <span style={{ position: 'absolute', bottom: 50, right: 8, background: 'rgba(0,0,0,0.75)', color: '#fff', fontSize: 9, letterSpacing: '1px', padding: '4px 8px', borderRadius: 4, whiteSpace: 'nowrap' }}>Link copiado</span>
        )}
      </div>
      {showMeta && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, padding: '0 24px' }}>
          {[['Unidades', '-'], ['Area', '-'], ['Levels', '-'], ['Rango de precio', '-']].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: '#555', letterSpacing: '0.5px' }}>
              <span style={{ fontWeight: 600, color: '#1A1A1A' }}>{k}</span>
              <span>{v}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function SectionGrid({ title, cards, image, showMeta, links, onCardClick }) {
  const cols = Math.min(cards.length, 4)
  const rows = Math.ceil(cards.length / cols)
  return (
    <div style={{ background: '#EDE8DC', padding: 'clamp(20px, 5vw, 40px) clamp(12px, 4vw, 32px)', minHeight: '100dvh' }}>
      <p style={{
        fontFamily: "'Funnel Sans', 'Inter', sans-serif",
        fontSize: 22, fontWeight: 300, letterSpacing: '2px',
        textTransform: 'uppercase', color: '#888', marginBottom: 20,
      }}>{title}</p>
      <div className={showMeta ? 'gallery-grid-tipologias' : 'gallery-grid-videos'} style={{
        display: 'grid',
        gridTemplateColumns: showMeta ? `repeat(${cards.length}, 1fr)` : `repeat(${cols}, 1fr)`,
        gridTemplateRows: showMeta ? '350px' : `repeat(${rows}, 350px)`,
        gap: '13px',
      }}>
        {cards.map((card, i) => {
          const label = typeof card === 'object' ? card.label : card
          const src   = typeof card === 'object' ? card.image : image
          const vid   = typeof card === 'object' ? card.video : undefined
          return <GalleryCard key={i} label={label} image={src} video={vid} showMeta={showMeta} onClick={onCardClick ? () => onCardClick(i) : undefined} shareUrl={!showMeta && links?.web ? links.web : undefined} />
        })}
      </div>
      {links && (
        <div className="section-social-icons" style={{ display: 'flex', justifyContent: 'space-around', marginTop: 140, width: '100vw', marginLeft: 'calc(-32px)', paddingLeft: 32, paddingRight: 32 }}>
          {[
            { href: links.web,
              path: <><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"/></>,
            },
            { href: links.email,
              path: <><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></>,
            },
            { href: links.instagram,
              path: <><rect x="2" y="2" width="20" height="20" rx="6"/><circle cx="12" cy="12" r="5"/><path d="M17.5 6.5h.01" strokeLinecap="round"/></>,
            },
          ].map(({ href, path }, i) => (
            <a key={i} href={href} target="_blank" rel="noopener noreferrer"
              style={{ color: 'rgba(0,0,0,0.3)', transition: 'color 0.25s', display: 'flex' }}
              onMouseEnter={e => e.currentTarget.style.color = 'rgba(0,0,0,0.75)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(0,0,0,0.3)'}
            >
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">{path}</svg>
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

export default function DetailView({ project, onClose }) {
  if (!project) return null

  const [videoPanel, setVideoPanel] = useState(null)
  const villaLines = project.detailLines
  const config = SECTION_CONFIG[project.id] ?? { videos: [], tipologias: [] }

  return (<>
    <div
      className="w-full h-full flex items-end justify-end detail-outer"
      style={{ padding: '24px 0 0 24px' }}
    >
      <div
        className="flex flex-col detail-inner"
        style={{
          width: 'calc(100% - 24px)',
          height: 'calc(100% - 24px)',
          background: '#F5F0E6',
          borderRadius: '4px 4px 0 0',
          boxShadow: '0 16px 60px rgba(0,0,0,0.2)',
          overflow: 'hidden',
        }}
      >
        {/* Nav */}
        <nav className="d-nav" style={{ flexShrink: 0 }}>
          <div className="d-nav-left">
            <a href="#">PROJECTS <strong>{project.id}</strong></a>
            <a href="#" className="dim">ABOUT</a>
          </div>
          <div className="d-nav-center">
            <img
              src="/images/soma_nav.png"
              alt="SOMA"
              style={{ height: 96, width: 'auto', mixBlendMode: 'multiply', filter: 'invert(1)' }}
            />
          </div>
          <div className="d-nav-right">
            <button className="btn-back" onClick={onClose}>← BACK</button>
          </div>
        </nav>

        {/* Scrollable body */}
        <div style={{ flex: 1, overflowY: 'scroll', height: 0 }}>
          <div style={{ minHeight: '200vh' }}>

            {/* Top */}
            <div className="d-top">
              <div className="d-big-title">{config.bigTitle}</div>
              <div className="d-collection">
                <span className="d-label">RESIDENCES — SOMA</span>
              </div>
              <div className="d-desc" style={{ display: 'flex', gap: 24 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6, minWidth: 220, flexShrink: 0, transform: 'translateX(-20px)' }}>
                  {(config.info ?? []).map(([label, value]) => (
                    <div key={label} style={{ display: 'flex', gap: 8, fontSize: 13, lineHeight: 1.7 }}>
                      <span style={{ fontWeight: 600, color: '#1A1A1A', whiteSpace: 'nowrap' }}>{label}:</span>
                      <span style={{ color: '#555' }}>{value}</span>
                    </div>
                  ))}
                </div>
                <div>{config.description}</div>
              </div>
            </div>

            {/* Photo */}
            <div className="d-photo" style={{ height: 'calc(100dvh - 340px - 56px)' }}>
              <img src={config.heroImage ?? project.image} alt="" />
              <div className="d-photo-overlay" />
              <img className={['d-villa-logo', config.logoClass].filter(Boolean).join(' ')} src={config.logo} alt="" />
            </div>

            <SectionGrid title="Videos" cards={config.videos} image={project.image} showMeta={false} links={project.links} onCardClick={i => setVideoPanel({ cards: config.videos, index: i })} />

          </div>
        </div>
      </div>
    </div>

    {videoPanel && (
      <VideoPanel
        cards={videoPanel.cards}
        initialIndex={videoPanel.index}
        onClose={() => setVideoPanel(null)}
        shareUrl={project.links?.web}
      />
    )}
  </>)
}

