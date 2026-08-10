import { useState } from 'react'
import { Link } from 'react-router-dom'
import { quizQuestions } from '../../data/quizzes'
import QuizRunner from '../../components/QuizRunner'
import { useTrackVisit } from '../../hooks/useTrackVisit'

export default function ExamPage() {
  useTrackVisit('/cgrc/exam', 'Full Practice Exam')
  const [started, setStarted] = useState(false)

  // Bank currently has ~40 curated questions; the exam draws every question available,
  // repeating the pool with fresh shuffles as more are added over time.
  const examQuestions = quizQuestions

  if (!started) {
    return (
      <div className="space-y-5">
        <Link to="/cgrc" className="text-sm text-brand-700 hover:underline">
          ← CGRC Study Center
        </Link>
        <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center">
          <h1 className="text-2xl font-bold text-slate-900">Full Practice Exam</h1>
          <p className="mt-2 text-slate-500">
            {examQuestions.length} questions across all 7 domains, timed to simulate exam conditions.
          </p>
          <p className="mt-1 text-sm text-slate-400">Time limit: 60 minutes</p>
          <button
            onClick={() => setStarted(true)}
            className="mt-6 rounded-full bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
          >
            Start Exam
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-bold text-slate-900">Full Practice Exam</h1>
      <QuizRunner
        questions={examQuestions}
        domainId="all"
        domainLabel="Full Practice Exam"
        mode="exam"
        timedSeconds={60 * 60}
      />
    </div>
  )
}
