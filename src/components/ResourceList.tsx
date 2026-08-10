import type { ResourceLink } from '../data/types'

const kindIcon: Record<ResourceLink['kind'], string> = {
  video: '▶️',
  article: '📰',
  pdf: '📄',
  doc: '📘',
}

export default function ResourceList({ resources }: { resources: ResourceLink[] }) {
  if (resources.length === 0) return null
  return (
    <ul className="space-y-2">
      {resources.map((r) => (
        <li key={r.title}>
          <a
            href={r.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2.5 rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm hover:border-brand-300 hover:bg-brand-50/40 transition-colors"
          >
            <span className="mt-0.5 shrink-0">{kindIcon[r.kind]}</span>
            <span className="min-w-0">
              <span className="block font-medium text-slate-800">{r.title}</span>
              <span className="block text-xs text-slate-500">{r.source}</span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  )
}
