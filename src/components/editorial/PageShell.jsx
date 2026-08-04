import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { ScrollShellContext } from './scrollShell'

// The document body is overflow:hidden (viewport app legacy) — every editorial
// page scrolls inside this shell. The ref is shared through context so
// scroll-linked components (hero, reading progress, parallax) can bind to it.
export default function PageShell({ dark = false, children }) {
  const ref = useRef(null)
  const { pathname } = useLocation()

  // New route → back to the top of the shell
  useEffect(() => {
    ref.current?.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return (
    <ScrollShellContext.Provider value={ref}>
      <div ref={ref} className={`ed-shell${dark ? ' ed-shell--dark' : ''}`}>
        {children}
      </div>
    </ScrollShellContext.Provider>
  )
}
