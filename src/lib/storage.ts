// All progress/quiz data lives in the browser only — nothing is sent to a server.

const KEYS = {
  quizAttempts: 'grc:quizAttempts',
  studied: 'grc:studiedTopics',
  lastVisited: 'grc:lastVisited',
} as const

export interface QuizAttempt {
  id: string
  domainId: string
  domainLabel: string
  mode: 'quiz' | 'exam'
  score: number
  total: number
  takenAt: string // ISO date
}

function read<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback
  try {
    const raw = window.localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : fallback
  } catch {
    return fallback
  }
}

function write<T>(key: string, value: T) {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // storage full or disabled — fail silently, this is best-effort only
  }
}

export function getQuizAttempts(): QuizAttempt[] {
  return read<QuizAttempt[]>(KEYS.quizAttempts, [])
}

export function saveQuizAttempt(attempt: QuizAttempt) {
  const attempts = getQuizAttempts()
  attempts.unshift(attempt)
  write(KEYS.quizAttempts, attempts.slice(0, 100))
}

export function clearQuizAttempts() {
  write(KEYS.quizAttempts, [])
}

export function getStudiedTopics(): string[] {
  return read<string[]>(KEYS.studied, [])
}

export function markTopicStudied(topicId: string) {
  const studied = new Set(getStudiedTopics())
  studied.add(topicId)
  write(KEYS.studied, Array.from(studied))
}

export function isTopicStudied(topicId: string): boolean {
  return getStudiedTopics().includes(topicId)
}

export interface LastVisited {
  path: string
  label: string
  at: string
}

export function setLastVisited(entry: LastVisited) {
  write(KEYS.lastVisited, entry)
}

export function getLastVisited(): LastVisited | null {
  return read<LastVisited | null>(KEYS.lastVisited, null)
}
