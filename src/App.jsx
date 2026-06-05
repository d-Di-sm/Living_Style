import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import VideoScene from './components/VideoScene'
import ScrollCards from './components/ScrollCards'
import './index.css'

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0)
  // Ref keeps the raw value accessible to R3F's useFrame without stale closure
  const scrollRef = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0
      scrollRef.current = progress
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const showScrollHint = scrollProgress < 0.04

  return (
    <div className="app">
      {/* The tall runway that creates scroll space */}
      <div className="scroll-runway" aria-hidden="true" />

      {/* Everything fixed to viewport */}
      <div className="fixed-layer">
        {/* Video + grain + vignette shader */}
        <div className="canvas-layer">
          <VideoScene scrollProgress={scrollRef} />
        </div>

        {/* Editorial card overlays */}
        <ScrollCards scrollProgress={scrollProgress} />

        {/* Header — always on top */}
        <div className="header-layer">
          <Header scrollProgress={scrollProgress} />
        </div>

        {/* Scroll hint — fades out as user begins scrolling */}
        <motion.div
          className="scroll-hint"
          animate={{ opacity: showScrollHint ? 1 : 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          aria-hidden="true"
        >
          <span className="scroll-hint__text">Scroll</span>
          <div className="scroll-hint__line" />
        </motion.div>
      </div>
    </div>
  )
}
