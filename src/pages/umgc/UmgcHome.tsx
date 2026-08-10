import { Link } from 'react-router-dom'
import { umgcCourses } from '../../data/umgc'
import { useTrackVisit } from '../../hooks/useTrackVisit'

export default function UmgcHome() {
  useTrackVisit('/umgc', 'UMGC Coursework Prep')
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900">UMGC Coursework Prep</h1>
        <p className="mt-1 text-slate-500">
          Free intro material, likely topics, and recommended resources for your remaining Cybersecurity Management &amp; Policy courses.
        </p>
      </div>

      <div className="space-y-3">
        {umgcCourses.map((c) => (
          <Link
            key={c.id}
            to={`/umgc/${c.id}`}
            className="block rounded-xl border border-slate-200 bg-white p-4 hover:border-brand-300 hover:shadow-sm transition"
          >
            <span className="text-xs font-semibold text-slate-400">{c.code}</span>
            <p className="mt-0.5 font-medium text-slate-800">{c.title}</p>
            <p className="mt-1 text-sm text-slate-500 line-clamp-2">{c.overview}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
