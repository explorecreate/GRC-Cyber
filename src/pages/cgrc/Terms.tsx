import { useMemo, useState } from 'react'
import { terms } from '../../data/terms'
import { domains } from '../../data/domains'
import { useTrackVisit } from '../../hooks/useTrackVisit'
import MarkStudiedButton from '../../components/MarkStudiedButton'
import FlashcardDeck from '../../components/FlashcardDeck'

export default function Terms() {
  useTrackVisit('/cgrc/terms', 'Terms to Know')
  const [query, setQuery] = useState('')
  const [domainFilter, setDomainFilter] = useState<string>('all')
  const [mode, setMode] = useState<'list' | 'flashcards'>('list')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return terms.filter((t) => {
      const matchesQuery = !q || t.term.toLowerCase().includes(q) || t.definition.toLowerCase().includes(q)
      const matchesDomain = domainFilter === 'all' || t.domainId === domainFilter
      return matchesQuery && matchesDomain
    })
  }, [query, domainFilter])

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900">Terms to Know</h1>
          <p className="mt-1 text-slate-500">Definition, real-world example, why it matters, how to apply it, and a memory tip — for each term.</p>
        </div>
        <MarkStudiedButton topicId="terms" />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search terms…"
          className="flex-1 min-w-[200px] rounded-full border border-slate-200 bg-white px-4 py-2 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
        />
        <select
          value={domainFilter}
          onChange={(e) => setDomainFilter(e.target.value)}
          className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm outline-none focus:border-brand-400"
        >
          <option value="all">All domains</option>
          {domains.map((d) => (
            <option key={d.id} value={d.id}>
              Domain {d.number}: {d.title}
            </option>
          ))}
        </select>
        <div className="flex rounded-full border border-slate-200 bg-white p-0.5">
          <button
            onClick={() => setMode('list')}
            className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
              mode === 'list' ? 'bg-brand-600 text-white' : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            📖 Study
          </button>
          <button
            onClick={() => setMode('flashcards')}
            className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
              mode === 'flashcards' ? 'bg-brand-600 text-white' : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            🎴 Flashcards
          </button>
        </div>
      </div>

      {mode === 'flashcards' ? (
        <FlashcardDeck terms={filtered} />
      ) : (
        <div className="space-y-4">
          {filtered.map((t) => (
            <article key={t.id} className="rounded-xl border border-slate-200 bg-white p-5">
              <h2 className="text-lg font-semibold text-slate-900">{t.term}</h2>
              <dl className="mt-3 space-y-3 text-sm">
                <Row label="Definition" value={t.definition} />
                <Row label="Real-world example" value={t.example} />
                <Row label="Why it matters" value={t.whyItMatters} />
                <Row label="How to apply it" value={t.howToApply} />
                <Row label="Memory tip" value={t.memoryTip} highlight />
              </dl>
            </article>
          ))}
          {filtered.length === 0 && <p className="text-slate-500">No matching terms.</p>}
        </div>
      )}
    </div>
  )
}

function Row({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">{label}</dt>
      <dd className={`mt-0.5 ${highlight ? 'text-brand-700 font-medium' : 'text-slate-700'}`}>{value}</dd>
    </div>
  )
}
