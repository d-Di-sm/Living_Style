import { useParams, Navigate } from 'react-router-dom'
import PageShell from '../components/editorial/PageShell'
import EditorialNav from '../components/editorial/EditorialNav'
import ArticleLayout from '../components/editorial/ArticleLayout'
import NewsletterSignup from '../components/editorial/NewsletterSignup'
import EditorialFooter from '../components/editorial/EditorialFooter'
import { articles } from '../data/articles'

export default function ArticlePage() {
  const { slug } = useParams()
  const article = articles.find(a => a.slug === slug)

  if (!article) return <Navigate to="/journal" replace />

  return (
    <PageShell>
      <EditorialNav />
      <ArticleLayout article={article} />
      <NewsletterSignup />
      <EditorialFooter />
    </PageShell>
  )
}
