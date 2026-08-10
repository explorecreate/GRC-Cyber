import { Link } from 'react-router-dom'
import { domains } from '../../data/domains'
import { useTrackVisit } from '../../hooks/useTrackVisit'

export default function CgrcHome() {
  useTrackVisit('/cgrc', 'CGRC Study Center')
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900">CGRC Study Center</h1>
        <p className="mt-1 text-slate-500">
          Certified in Governance, Risk and Compliance (ISC2) — domain-by-domain breakdown of the current exam outline.
        </p>
      </div>

      <Link
        to="/cgrc/roadmap"
        className="block rounded-xl border border-brand-200 bg-brand-50 p-4 hover:bg-brand-100 transition"
      >
        <p className="font-semibold text-brand-800">🗺️ Not sure where to start? Follow the Study Roadmap</p>
        <p className="text-sm text-brand-700/80">A suggested order through domains, vocabulary, practice, and the full exam — with milestones that track your progress</p>
      </Link>

      <div className="grid gap-3 sm:grid-cols-2">
        <Link to="/cgrc/nist" className="rounded-xl border border-slate-200 bg-white p-4 hover:border-brand-300 hover:shadow-sm transition">
          <p className="font-semibold text-slate-800">🧭 NIST &amp; RMF Deep-Dive</p>
          <p className="text-sm text-slate-500">The 7-step RMF process and key SP 800-series publications</p>
        </Link>
        <Link to="/cgrc/glossary" className="rounded-xl border border-slate-200 bg-white p-4 hover:border-brand-300 hover:shadow-sm transition">
          <p className="font-semibold text-slate-800">🔤 Acronym Glossary</p>
          <p className="text-sm text-slate-500">Searchable list of RMF, ATO, POA&amp;M, SSP, and more</p>
        </Link>
        <Link to="/cgrc/terms" className="rounded-xl border border-slate-200 bg-white p-4 hover:border-brand-300 hover:shadow-sm transition">
          <p className="font-semibold text-slate-800">📖 Terms to Know</p>
          <p className="text-sm text-slate-500">Definitions, examples, and memory tips for key concepts</p>
        </Link>
        <Link to="/cgrc/quizzes" className="rounded-xl border border-slate-200 bg-white p-4 hover:border-brand-300 hover:shadow-sm transition">
          <p className="font-semibold text-slate-800">📝 Practice Quizzes</p>
          <p className="text-sm text-slate-500">Domain-tagged multiple choice with instant explanations</p>
        </Link>
      </div>

      <section>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">All 7 Domains</h2>
          <Link to="/cgrc/exam" className="text-sm font-medium text-brand-700 hover:underline">
            Take the full practice exam →
          </Link>
        </div>
        <div className="space-y-3">
          {domains.map((d) => (
            <Link
              key={d.id}
              to={`/cgrc/${d.id}`}
              className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 hover:border-brand-300 hover:shadow-sm transition"
            >
              <div>
                <p className="text-xs font-semibold text-slate-400">Domain {d.number} · {d.weight} of exam</p>
                <p className="mt-0.5 font-medium text-slate-800">{d.title}</p>
              </div>
              <span className="text-slate-300">→</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
