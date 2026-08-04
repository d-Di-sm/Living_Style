import { createContext, useContext } from 'react'

// The shared scroll container — the document body is overflow:hidden, so all
// scroll-linked behavior binds to the PageShell element through this context.
export const ScrollShellContext = createContext(null)
export const useScrollShell = () => useContext(ScrollShellContext)
