import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import ProjectCard from './components/ProjectCard'
import DetailView from './components/DetailView'
import BottomNav from './components/BottomNav'
import Experience from './components/Experience'
import { projects } from './data/projects'

const TRANSITION = { duration: 0.45, ease: [0.4, 0, 0.2, 1] }

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null)
  const isOpen = !!selectedProject

  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: '#090909' }}>

      {/* ── Three.js subtle background ─────────────── */}
      <Experience />

      {/* ── MAIN VIEW ──────────────────────────────── */}
      <motion.div
        className="absolute inset-0 flex flex-col z-10"
        style={{ background: '#090909', paddingBottom: 50 }}
        animate={{ opacity: isOpen ? 0 : 1 }}
        transition={TRANSITION}
        aria-hidden={isOpen}
        {...(isOpen ? { style: { pointerEvents: 'none', background: '#090909', paddingBottom: 50 } } : {})}
      >
        <Header />

        {/* Cards stage */}
        <div
          className="flex-1 flex items-end"
          style={{ gap: 16, padding: '16px 20px 0' }}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setSelectedProject}
            />
          ))}
        </div>
      </motion.div>

      {/* ── DETAIL VIEW ────────────────────────────── */}
      <motion.div
        className="absolute inset-0 z-20"
        style={{
          background: '#090909',
          pointerEvents: isOpen ? 'auto' : 'none',
        }}
        initial={false}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 24 }}
        transition={TRANSITION}
      >
        <DetailView
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </motion.div>

      {/* ── BOTTOM NAV ─────────────────────────────── */}
      <BottomNav detailOpen={isOpen} />
    </div>
  )
}
