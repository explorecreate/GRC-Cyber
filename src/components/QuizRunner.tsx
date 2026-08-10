import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type { QuizQuestion } from '../data/types'
import { shuffle } from '../data/quizzes'
import { saveQuizAttempt } from '../lib/storage'

interface Props {
  questions: QuizQuestion[]
  domainId: string
  domainLabel: string
  mode: 'quiz' | 'exam'
  timedSeconds?: number
}

export default function QuizRunner({ questions: initial, domainId, domainLabel, mode, timedSeconds }: Props) {
  const navigate = useNavigate()
  const [questions] = useState<QuizQuestion[]>(() => shuffle(initial))
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const [secondsLeft, setSecondsLeft] = useState(timedSeconds ?? 0)

  const current = questions[index]
  const isLast = index === questions.length - 1

  const timerLabel = useMemo(() => {
    if (!timedSeconds) return null
    const m = Math.floor(secondsLeft / 60)
    const s = secondsLeft % 60
    return `${m}:${s.toString().padStart(2, '0')}`
  }, [secondsLeft, timedSeconds])

  // basic countdown for exam mode
  useEffect(() => {
    if (!timedSeconds || finished) return
    const t = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          clearInterval(t)
          setFinished(true)
          return 0
        }
        return s - 1
      })
    }, 1000)
    return () => clearInterval(t)
  }, [timedSeconds, finished])

  // Persist the attempt exactly once, whenever the quiz transitions to finished
  // (whether via the last answer or the exam timer running out).
  useEffect(() => {
    if (!finished) return
    saveQuizAttempt({
      id: `${Date.now()}`,
      domainId,
      domainLabel,
      mode,
      score,
      total: questions.length,
      takenAt: new Date().toISOString(),
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finished])

  function choose(optIndex: number) {
    if (selected !== null) return
    setSelected(optIndex)
    if (optIndex === current.correctIndex) setScore((s) => s + 1)
  }

  function next() {
    if (isLast) {
      setFinished(true)
      return
    }
    setSelected(null)
    setIndex((i) => i + 1)
  }

  if (questions.length === 0) {
    return <p className="text-slate-500">No questions available yet for this domain.</p>
  }

  if (finished) {
    const pct = Math.round((score / questions.length) * 100)
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center">
        <p className="text-sm font-medium text-slate-500">
          {mode === 'exam' ? 'Practice Exam Complete' : 'Quiz Complete'}
        </p>
        <p className="mt-2 text-4xl font-bold text-brand-700">{pct}%</p>
        <p className="mt-1 text-slate-600">
          {score} / {questions.length} correct
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => window.location.reload()}
            className="rounded-full bg-brand-600 px-5 py-2 text-sm font-medium text-white hover:bg-brand-700"
          >
            Retake / Shuffle
          </button>
          <button
            onClick={() => navigate('/cgrc/quizzes')}
            className="rounded-full border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Back to Quizzes
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-8">
      <div className="mb-4 flex items-center justify-between text-sm text-slate-500">
        <span>
          Question {index + 1} of {questions.length}
        </span>
        <span className="flex items-center gap-3">
          {timerLabel && <span className="font-mono font-medium text-brand-700">{timerLabel}</span>}
          <span>Score: {score}</span>
        </span>
      </div>

      <div className="mb-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full bg-brand-500 transition-all"
          style={{ width: `${((index + (selected !== null ? 1 : 0)) / questions.length) * 100}%` }}
        />
      </div>

      <h3 className="mb-5 text-lg font-semibold text-slate-900">{current.question}</h3>

      <div className="space-y-2.5">
        {current.options.map((opt, i) => {
          const isCorrect = i === current.correctIndex
          const isChosen = i === selected
          let cls = 'border-slate-200 hover:border-brand-300 hover:bg-brand-50/40'
          if (selected !== null) {
            if (isCorrect) cls = 'border-green-400 bg-green-50'
            else if (isChosen) cls = 'border-red-400 bg-red-50'
            else cls = 'border-slate-200 opacity-60'
          }
          return (
            <button
              key={i}
              onClick={() => choose(i)}
              disabled={selected !== null}
              className={`w-full rounded-xl border px-4 py-3 text-left text-sm font-medium text-slate-800 transition-colors ${cls}`}
            >
              {opt}
            </button>
          )
        })}
      </div>

      {selected !== null && (
        <div className="mt-5 rounded-xl bg-slate-50 p-4 text-sm text-slate-700">
          <p className="mb-1 font-semibold text-slate-900">
            {selected === current.correctIndex ? '✅ Correct' : '❌ Not quite'}
          </p>
          <p>{current.explanation}</p>
        </div>
      )}

      {selected !== null && (
        <div className="mt-5 flex justify-end">
          <button
            onClick={next}
            className="rounded-full bg-brand-600 px-5 py-2 text-sm font-medium text-white hover:bg-brand-700"
          >
            {isLast ? 'Finish' : 'Next Question →'}
          </button>
        </div>
      )}
    </div>
  )
}
