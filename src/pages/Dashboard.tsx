import { Link } from 'react-router-dom'
import { domains } from '../data/domains'
import { getQuizAttempts, getStudiedTopics, getLastVisited } from '../lib/storage'

export default function Dashboard() {
  const attempts = getQuizAttempts()
  const studied = getStudiedTopics()
  const lastVisited = getLastVisited()

  const bestPerDomain = new Map<string, number>()
  for (const a of attempts) {
    const pct = Math.round((a.score / a.total) * 100)
    const prev = bestPerDomain.get(a.domainId) ?? 0
    if (pct > prev) bestPerDomain.set(a.domainId, pct)
  }
  const avgScore = attempts.length
    ? Math.round(attempts.reduce((sum, a) => sum + (a.score / a.total) * 100, 0) / attempts.length)
    : null

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900">Welcome back</h1>
        <p className="mt-1 text-slate-500">
          Your CGRC exam prep, AI fundamentals, and UMGC coursework — all in one free, no-login hub.
        </p>
      </div>

      {lastVisited && (
        <Link
          to={lastVisited.path}
          className="block rounded-2xl border border-brand-200 bg-brand-50 px-5 py-4 hover:bg-brand-100 transition-colors"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">Continue where you left off</p>
          <p className="mt-1 text-slate-800 font-medium">{lastVisited.label} →</p>
        </Link>
      )}

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        <StatCard label="Topics studied" value={studied.length} />
        <StatCard label="Quizzes taken" value={attempts.length} />
        <StatCard label="Average score" value={avgScore !== null ? `${avgScore}%` : '—'} />
        <StatCard label="CGRC domains" value={domains.length} />
      </div>

      <section>
        <h2 className="mb-3 text-lg font-semibold text-slate-900">CGRC Domain Progress</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {domains.map((d) => {
            const best = bestPerDomain.get(d.id)
            return (
              <Link
                key={d.id}
                to={`/cgrc/${d.id}`}
                className="rounded-xl border border-slate-200 bg-white p-4 hover:border-brand-300 hover:shadow-sm transition"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400">Domain {d.number}</span>
                  {best !== undefined && (
                    <span className="rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700">
                      Best {best}%
                    </span>
                  )}
                </div>
                <p className="mt-1 font-medium text-slate-800">{d.title}</p>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        <QuickLink to="/cgrc/quizzes" title="Practice Quizzes" desc="Domain-tagged, instant feedback" icon="📝" />
        <QuickLink to="/cgrc/exam" title="Full Practice Exam" desc="Timed, exam-simulation mode" icon="⏱️" />
        <QuickLink to="/ai" title="AI Learning Center" desc="LLMs, agents, RAG, AI governance" icon="🤖" />
      </section>
    </div>
  )
}

function StatCard({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
      <p className="text-2xl font-bold text-brand-700">{value}</p>
      <p className="mt-0.5 text-xs text-slate-500">{label}</p>
    </div>
  )
}

function QuickLink({ to, title, desc, icon }: { to: string; title: string; desc: string; icon: string }) {
  return (
    <Link to={to} className="rounded-xl border border-slate-200 bg-white p-4 hover:border-brand-300 hover:shadow-sm transition">
      <span className="text-2xl">{icon}</span>
      <p className="mt-2 font-semibold text-slate-800">{title}</p>
      <p className="text-sm text-slate-500">{desc}</p>
    </Link>
  )
}
