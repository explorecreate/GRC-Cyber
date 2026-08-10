import { Link, Navigate, useParams } from 'react-router-dom'
import { getDomain } from '../../data/domains'
import { getQuestionsByDomain } from '../../data/quizzes'
import QuizRunner from '../../components/QuizRunner'
import { useTrackVisit } from '../../hooks/useTrackVisit'

export default function QuizPage() {
  const { domainId = '' } = useParams()
  const domain = getDomain(domainId)
  useTrackVisit(`/cgrc/quizzes/${domainId}`, domain ? `${domain.title} Quiz` : 'Quiz')

  if (!domain) return <Navigate to="/cgrc/quizzes" replace />

  const questions = getQuestionsByDomain(domain.id)

  return (
    <div className="space-y-5">
      <div>
        <Link to="/cgrc/quizzes" className="text-sm text-brand-700 hover:underline">
          ← All quizzes
        </Link>
        <h1 className="mt-2 text-2xl font-bold text-slate-900">{domain.title} Quiz</h1>
      </div>
      <QuizRunner
        key={domain.id}
        questions={questions}
        domainId={domain.id}
        domainLabel={domain.title}
        mode="quiz"
      />
    </div>
  )
}
