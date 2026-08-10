import { useEffect } from 'react'
import { setLastVisited } from '../lib/storage'

export function useTrackVisit(path: string, label: string) {
  useEffect(() => {
    setLastVisited({ path, label, at: new Date().toISOString() })
  }, [path, label])
}
