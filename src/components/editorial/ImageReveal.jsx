import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useScrollShell } from './scrollShell'

// Full-width photograph with extremely subtle parallax.
export default function ImageReveal({ src, height = '80vh', caption, style }) {
  const shell = useScrollShell()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    container: shell,
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-4%', '4%'])

  return (
    <figure ref={ref} style={{ margin: 0, ...style }}>
      <div style={{ overflow: 'hidden', height, position: 'relative' }}>
        <motion.img
          src={src}
          alt={caption ?? ''}
          loading="lazy"
          decoding="async"
          style={{
            y,
            position: 'absolute',
            inset: '-6% 0',
            width: '100%',
            height: '112%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </div>
      {caption && (
        <figcaption className="ed-caption ed-container" style={{ marginTop: 16 }}>
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
