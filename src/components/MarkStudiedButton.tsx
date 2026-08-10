import { useState } from 'react'
import { isTopicStudied, markTopicStudied } from '../lib/storage'

export default function MarkStudiedButton({ topicId }: { topicId: string }) {
  const [studied, setStudied] = useState(() => isTopicStudied(topicId))

  return (
    <button
      onClick={() => {
        markTopicStudied(topicId)
        setStudied(true)
      }}
      disabled={studied}
      className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium ${
        studied ? 'bg-green-50 text-green-700' : 'bg-brand-600 text-white hover:bg-brand-700'
      }`}
    >
      {studied ? '✓ Studied' : 'Mark as studied'}
    </button>
  )
}
