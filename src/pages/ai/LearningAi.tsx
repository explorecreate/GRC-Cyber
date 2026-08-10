import { Link } from 'react-router-dom'
import { learningAiResources } from '../../data/aiLearning'
import { useTrackVisit } from '../../hooks/useTrackVisit'

export default function LearningAi() {
  useTrackVisit('/ai/learning', 'Learning AI')
  return (
    <div className="space-y-6">
      <div>
        <Link to="/ai" className="text-sm text-brand-700 hover:underline">
          ← AI Learning Center
        </Link>
        <h1 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">Learning AI</h1>
        <p className="mt-1 text-slate-500">
          Fundamentals: LLMs, prompting, agents, RAG, and AI governance/risk — with a direct line back to the NIST AI RMF.
        </p>
      </div>

      <div className="space-y-3">
        {learningAiResources.map((r) => (
          <a
            key={r.title}
            href={r.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl border border-slate-200 bg-white p-4 hover:border-brand-300 hover:shadow-sm transition"
          >
            <div className="flex items-center gap-2">
              <span>{r.kind === 'video' ? '▶️' : '📰'}</span>
              <span className="font-semibold text-slate-900">{r.title}</span>
            </div>
            <p className="mt-1 text-xs text-slate-400">{r.source}</p>
            <p className="mt-1.5 text-sm text-slate-600">{r.blurb}</p>
          </a>
        ))}
      </div>

      <Link
        to="/ai/rmf"
        className="block rounded-xl border border-brand-200 bg-brand-50 p-4 text-center font-medium text-brand-700 hover:bg-brand-100"
      >
        Go deeper: NIST AI RMF (Govern, Map, Measure, Manage) →
      </Link>
    </div>
  )
}
