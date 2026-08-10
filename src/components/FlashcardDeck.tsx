import { useState } from 'react'
import type { TermEntry } from '../data/types'

export default function FlashcardDeck({ terms }: { terms: TermEntry[] }) {
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)

  if (terms.length === 0) {
    return <p className="text-slate-500">No terms match your filters — try broadening the search to use flashcards.</p>
  }

  const card = terms[Math.min(index, terms.length - 1)]

  function go(delta: number) {
    setFlipped(false)
    setIndex((i) => (i + delta + terms.length) % terms.length)
  }

  function shuffleDeck() {
    setFlipped(false)
    setIndex(Math.floor(Math.random() * terms.length))
  }

  return (
    <div className="mx-auto max-w-lg">
      <p className="mb-3 text-center text-sm text-slate-500">
        Card {index + 1} of {terms.length} · tap the card to flip
      </p>

      <button
        onClick={() => setFlipped((f) => !f)}
        className="flex min-h-[220px] w-full flex-col items-center justify-center rounded-2xl border-2 border-brand-200 bg-white p-6 text-center shadow-sm transition hover:border-brand-300"
      >
        {!flipped ? (
          <>
            <span className="mb-2 text-xs font-semibold uppercase tracking-wide text-brand-500">Term</span>
            <span className="text-xl font-bold text-slate-900">{card.term}</span>
            <span className="mt-4 text-xs text-slate-400">Tap to reveal definition + memory tip</span>
          </>
        ) : (
          <>
            <span className="mb-2 text-xs font-semibold uppercase tracking-wide text-brand-500">Definition</span>
            <span className="text-sm text-slate-800">{card.definition}</span>
            <span className="mt-4 rounded-lg bg-brand-50 px-3 py-2 text-sm font-medium text-brand-700">
              💡 {card.memoryTip}
            </span>
          </>
        )}
      </button>

      <div className="mt-4 flex items-center justify-center gap-3">
        <button
          onClick={() => go(-1)}
          className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          ← Prev
        </button>
        <button
          onClick={shuffleDeck}
          className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-200"
        >
          🔀 Shuffle
        </button>
        <button
          onClick={() => go(1)}
          className="rounded-full bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700"
        >
          Next →
        </button>
      </div>
    </div>
  )
}
