import { Link } from 'react-router-dom'
import { domains } from '../../data/domains'
import { getQuestionsByDomain } from '../../data/quizzes'
import { getQuizAttempts } from '../../lib/storage'
import { useTrackVisit } from '../../hooks/useTrackVisit'

export default function QuizzesHub() {
  useTrackVisit('/cgrc/quizzes', 'Practice Quizzes')
  const attempts = getQuizAttempts()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900">Practice Quizzes</h1>
        <p className="mt-1 text-slate-500">Domain-tagged multiple choice with instant feedback and full explanations.</p>
      </div>

      <Link
        to="/cgrc/exam"
        className="block rounded-xl border border-brand-200 bg-brand-50 p-4 text-center font-medium text-brand-700 hover:bg-brand-100"
      >
        ⏱️ Take the Full Practice Exam (timed, all domains) →
      </Link>

      <div className="grid gap-3 sm:grid-cols-2">
        {domains.map((d) => {
          const count = getQuestionsByDomain(d.id).length
          const domainAttempts = attempts.filter((a) => a.domainId === d.id && a.mode === 'quiz')
          const best = domainAttempts.length
            ? Math.max(...domainAttempts.map((a) => Math.round((a.score / a.total) * 100)))
            : null
          return (
            <Link
              key={d.id}
              to={`/cgrc/quizzes/${d.id}`}
              className="rounded-xl border border-slate-200 bg-white p-4 hover:border-brand-300 hover:shadow-sm transition"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400">Domain {d.number} · {count} questions</span>
                {best !== null && (
                  <span className="rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700">Best {best}%</span>
                )}
              </div>
              <p className="mt-1 font-medium text-slate-800">{d.title}</p>
            </Link>
          )
        })}
      </div>

      {attempts.length > 0 && (
        <section>
          <h2 className="mb-3 text-lg font-semibold text-slate-900">Recent Attempts</h2>
          <div className="space-y-2">
            {attempts.slice(0, 8).map((a) => (
              <div key={a.id} className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm">
                <span className="text-slate-700">
                  {a.mode === 'exam' ? 'Full Practice Exam' : a.domainLabel}
                </span>
                <span className="flex items-center gap-3 text-slate-500">
                  <span className="font-medium text-slate-800">{Math.round((a.score / a.total) * 100)}%</span>
                  <span>{new Date(a.takenAt).toLocaleDateString()}</span>
                </span>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
