import { Link, Navigate, useParams } from 'react-router-dom'
import { getDomain } from '../../data/domains'
import { getTermsByDomain } from '../../data/terms'
import ResourceList from '../../components/ResourceList'
import { useTrackVisit } from '../../hooks/useTrackVisit'
import { isTopicStudied, markTopicStudied } from '../../lib/storage'
import { useState } from 'react'

export default function DomainDetail() {
  const { domainId = '' } = useParams()
  const domain = getDomain(domainId)
  const [studied, setStudied] = useState(() => isTopicStudied(domainId))

  useTrackVisit(`/cgrc/${domainId}`, domain?.title ?? 'CGRC Domain')

  if (!domain) return <Navigate to="/cgrc" replace />

  const relatedTerms = getTermsByDomain(domain.id)

  return (
    <div className="space-y-6">
      <div>
        <Link to="/cgrc" className="text-sm text-brand-700 hover:underline">
          ← All domains
        </Link>
        <div className="mt-2 flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold text-slate-400">
              Domain {domain.number} · {domain.weight} of exam · RMF step: {domain.rmfStep}
            </p>
            <h1 className="mt-1 text-2xl md:text-3xl font-bold text-slate-900">{domain.title}</h1>
          </div>
          <button
            onClick={() => {
              markTopicStudied(domain.id)
              setStudied(true)
            }}
            disabled={studied}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium ${
              studied ? 'bg-green-50 text-green-700' : 'bg-brand-600 text-white hover:bg-brand-700'
            }`}
          >
            {studied ? '✓ Studied' : 'Mark as studied'}
          </button>
        </div>
      </div>

      <p className="text-slate-700 leading-relaxed">{domain.overview}</p>

      <section>
        <h2 className="mb-3 text-lg font-semibold text-slate-900">Key Concepts</h2>
        <ul className="space-y-2">
          {domain.keyConcepts.map((c) => (
            <li key={c} className="flex gap-2 text-slate-700">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
              {c}
            </li>
          ))}
        </ul>
      </section>

      {domain.aiNote && (
        <div className="rounded-xl border border-violet-200 bg-violet-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-violet-700">🤖 AI in this domain</p>
          <p className="mt-1 text-sm text-violet-900">{domain.aiNote}</p>
        </div>
      )}

      {relatedTerms.length > 0 && (
        <section>
          <h2 className="mb-3 text-lg font-semibold text-slate-900">Related Terms</h2>
          <div className="flex flex-wrap gap-2">
            {relatedTerms.map((t) => (
              <Link
                key={t.id}
                to="/cgrc/terms"
                className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 hover:border-brand-300"
              >
                {t.term}
              </Link>
            ))}
          </div>
        </section>
      )}

      <section>
        <h2 className="mb-3 text-lg font-semibold text-slate-900">Free Videos &amp; Articles</h2>
        <ResourceList resources={domain.resources} />
      </section>

      <Link
        to={`/cgrc/quizzes/${domain.id}`}
        className="block rounded-xl border border-brand-200 bg-brand-50 p-4 text-center font-medium text-brand-700 hover:bg-brand-100"
      >
        Test yourself on this domain →
      </Link>
    </div>
  )
}
