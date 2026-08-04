import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LivingPage from './pages/LivingPage'
import WorkPage from './pages/WorkPage'
import ProjectPage from './pages/ProjectPage'
import JournalPage from './pages/JournalPage'
import ArticlePage from './pages/ArticlePage'
import ConversationsPage from './pages/ConversationsPage'
import ConversationPage from './pages/ConversationPage'

// ─────────────────────────────────────────────────────────────────────────────
// SOMA Living — Editorial Platform
//
//   /                → the cover
//   /living          → philosophy & manifestos
//   /work            → the residential portfolio (the evolved project viewer)
//   /work/:slug      → a project feature (DetailView machinery preserved)
//   /journal         → entries, observations, essays
//   /journal/:slug   → a full editorial entry
//   /conversations   → interviews (questions live, answers forthcoming)
//   /conversations/:slug → a single conversation, Interview-magazine style
// ─────────────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <BrowserRouter>
      <div className="relative w-full" style={{ background: '#090909', height: '100dvh', overflow: 'clip' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/living" element={<LivingPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/:slug" element={<ProjectPage />} />
          <Route path="/journal" element={<JournalPage />} />
          <Route path="/journal/:slug" element={<ArticlePage />} />
          <Route path="/conversations" element={<ConversationsPage />} />
          <Route path="/conversations/:slug" element={<ConversationPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
