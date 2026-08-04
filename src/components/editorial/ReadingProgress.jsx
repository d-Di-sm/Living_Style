import { motion, useScroll, useSpring } from 'framer-motion'
import { useScrollShell } from './scrollShell'

// A hairline of progress at the very top of an article. Barely there.
export default function ReadingProgress() {
  const shell = useScrollShell()
  const { scrollYProgress } = useScroll({ container: shell })
  const scaleX = useSpring(scrollYProgress, { stiffness: 80, damping: 24, mass: 0.4 })

  return (
    <motion.div
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, height: 2,
        background: 'var(--ed-accent)',
        transformOrigin: 'left',
        scaleX,
        zIndex: 300,
      }}
    />
  )
}
