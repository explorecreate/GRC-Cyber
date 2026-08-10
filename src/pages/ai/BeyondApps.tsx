import { Link } from 'react-router-dom'
import { useCases } from '../../data/aiLearning'
import { useTrackVisit } from '../../hooks/useTrackVisit'

export default function BeyondApps() {
  useTrackVisit('/ai/beyond', 'Beyond Apps & Websites')
  return (
    <div className="space-y-6">
      <div>
        <Link to="/ai" className="text-sm text-brand-700 hover:underline">
          ← AI Learning Center
        </Link>
        <h1 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">Beyond Apps &amp; Websites</h1>
        <p className="mt-1 text-slate-500">
          Non-app AI use cases — workflow automation, media generation, data analysis, robotics, research. Added to over time.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {useCases.map((u) => (
          <a
            key={u.id}
            href={u.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-slate-200 bg-white p-4 hover:border-brand-300 hover:shadow-sm transition"
          >
            <span className="rounded-full bg-brand-50 px-2 py-0.5 text-xs font-medium text-brand-700">{u.category}</span>
            <h2 className="mt-2 font-semibold text-slate-900">{u.title}</h2>
            <p className="mt-1 text-sm text-slate-600">{u.summary}</p>
            <p className="mt-2 text-xs text-slate-400">
              {u.source} · added {new Date(u.added).toLocaleDateString()}
            </p>
          </a>
        ))}
      </div>
    </div>
  )
}
