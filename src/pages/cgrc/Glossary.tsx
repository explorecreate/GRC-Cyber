import { useMemo, useState } from 'react'
import { glossary, searchGlossary } from '../../data/glossary'
import { useTrackVisit } from '../../hooks/useTrackVisit'
import MarkStudiedButton from '../../components/MarkStudiedButton'

export default function Glossary() {
  useTrackVisit('/cgrc/glossary', 'Acronym Glossary')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => searchGlossary(query), [query])

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900">Acronym Glossary</h1>
          <p className="mt-1 text-slate-500">RMF, ATO, POA&amp;M, SSP, ISCM, PII, FISMA, and more — searchable and filterable.</p>
        </div>
        <MarkStudiedButton topicId="glossary" />
      </div>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Filter acronyms…"
        className="w-full max-w-sm rounded-full border border-slate-200 bg-white px-4 py-2 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
      />

      <p className="text-sm text-slate-400">{filtered.length} of {glossary.length} entries</p>

      <div className="grid gap-3 sm:grid-cols-2">
        {filtered.map((g) => (
          <div key={g.acronym} className="rounded-xl border border-slate-200 bg-white p-4">
            <p className="font-bold text-brand-700">{g.acronym}</p>
            <p className="text-sm font-medium text-slate-700">{g.expansion}</p>
            <p className="mt-1.5 text-sm text-slate-500">{g.definition}</p>
          </div>
        ))}
        {filtered.length === 0 && <p className="text-slate-500">No matches. Try a different search term.</p>}
      </div>
    </div>
  )
}
