import { motion } from 'framer-motion'
import { EASE } from './motion'

// Fade + rise + scale 0.98 → 1. The only entrance the editorial system uses.
export default function Reveal({
  children,
  delay = 0,
  y = 26,
  duration = 1.1,
  amount = 0.2,
  className,
  style,
  as = 'div',
}) {
  const Tag = motion[as] ?? motion.div
  return (
    <Tag
      className={className}
      style={style}
      initial={{ opacity: 0, y, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </Tag>
  )
}
