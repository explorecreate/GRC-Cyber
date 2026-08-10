import type { TermEntry } from '../data/types'

export default function TermCard({ term }: { term: TermEntry }) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5">
      <h3 className="text-lg font-semibold text-slate-900">{term.term}</h3>
      <dl className="mt-3 space-y-3 text-sm">
        <Row label="Definition" value={term.definition} />
        <Row label="Real-world example" value={term.example} />
        <Row label="Why it matters" value={term.whyItMatters} />
        <Row label="How to apply it" value={term.howToApply} />
        <Row label="Memory tip" value={term.memoryTip} highlight />
      </dl>
    </article>
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
