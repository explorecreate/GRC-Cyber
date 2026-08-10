import { useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { domains } from '../data/domains'
import { glossary } from '../data/glossary'
import { terms } from '../data/terms'

interface SearchResult {
  id: string
  label: string
  sublabel: string
  path: string
  kind: 'Domain' | 'Acronym' | 'Term'
}

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const containerRef = useRef<HTMLDivElement>(null)

  const results = useMemo<SearchResult[]>(() => {
    const q = query.trim().toLowerCase()
    if (!q) return []

    const domainResults: SearchResult[] = domains
      .filter((d) => d.title.toLowerCase().includes(q) || d.overview.toLowerCase().includes(q))
      .map((d) => ({ id: `d-${d.id}`, label: d.title, sublabel: `Domain ${d.number}`, path: `/cgrc/${d.id}`, kind: 'Domain' }))

    const glossaryResults: SearchResult[] = glossary
      .filter((g) => g.acronym.toLowerCase().includes(q) || g.expansion.toLowerCase().includes(q))
      .slice(0, 6)
      .map((g) => ({ id: `g-${g.acronym}`, label: g.acronym, sublabel: g.expansion, path: '/cgrc/glossary', kind: 'Acronym' }))

    const termResults: SearchResult[] = terms
      .filter((t) => t.term.toLowerCase().includes(q))
      .slice(0, 6)
      .map((t) => ({ id: `t-${t.id}`, label: t.term, sublabel: 'Terms to Know', path: '/cgrc/terms', kind: 'Term' }))

    return [...domainResults, ...glossaryResults, ...termResults].slice(0, 12)
  }, [query])

  function go(path: string) {
    setOpen(false)
    setQuery('')
    navigate(path)
  }

  return (
    <div className="relative" ref={containerRef}>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">🔍</span>
        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setOpen(true)
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 150)}
          placeholder="Search domains, acronyms, terms…"
          className="w-full rounded-full border border-slate-200 bg-slate-50 py-2 pl-9 pr-3 text-sm outline-none focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100"
        />
      </div>

      {open && results.length > 0 && (
        <div className="absolute z-30 mt-2 w-full max-h-80 overflow-y-auto rounded-xl border border-slate-200 bg-white shadow-lg">
          {results.map((r) => (
            <button
              key={r.id}
              onMouseDown={() => go(r.path)}
              className="flex w-full items-start gap-2 px-4 py-2.5 text-left hover:bg-slate-50"
            >
              <span className="mt-0.5 shrink-0 rounded bg-brand-50 px-1.5 py-0.5 text-[10px] font-semibold uppercase text-brand-700">
                {r.kind}
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-medium text-slate-800">{r.label}</span>
                <span className="block truncate text-xs text-slate-500">{r.sublabel}</span>
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
