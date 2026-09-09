import { motion } from 'framer-motion'
import { EASE } from './motion'

// Lazy editorial image with a slow reveal. The aspect-ratio box reserves
// space before load; no CLS.
export default function EditorialImage({
  image,               // { src, orientation } from lifestyle.js; or plain src string
  src,
  ratio,               // css aspect-ratio, e.g. '3 / 2'
  caption,
  priority = false,
  style,
  className = '',
}) {
  const source = src ?? image?.src
  const aspect = ratio ?? (image?.orientation === 'v' ? '3 / 4' : '3 / 2')

  return (
    <figure className={className} style={{ margin: 0, ...style }}>
      <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: aspect, background: 'var(--ed-paper-deep)' }}>
        <motion.img
          src={source}
          alt={caption ?? ''}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          initial={{ opacity: 0, scale: 1.06 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.6, ease: EASE }}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>
      {caption && (
        <figcaption className="ed-caption" style={{ marginTop: 14 }}>
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
