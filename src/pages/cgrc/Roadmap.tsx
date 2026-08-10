import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { roadmapPhases, totalStepCount, type RoadmapStep } from '../../data/roadmap'
import { getQuizAttempts, getStudiedTopics } from '../../lib/storage'
import { useTrackVisit } from '../../hooks/useTrackVisit'

function isStepComplete(step: RoadmapStep, studied: Set<string>, quizzedDomains: Set<string>, hasExamAttempt: boolean): boolean {
  switch (step.completion.kind) {
    case 'topic':
      return studied.has(step.completion.topicId)
    case 'quiz':
      return quizzedDomains.has(step.completion.domainId)
    case 'exam':
      return hasExamAttempt
  }
}

export default function Roadmap() {
  useTrackVisit('/cgrc/roadmap', 'Study Roadmap')

  const { studied, quizzedDomains, hasExamAttempt } = useMemo(() => {
    const attempts = getQuizAttempts()
    return {
      studied: new Set(getStudiedTopics()),
      quizzedDomains: new Set(attempts.filter((a) => a.mode === 'quiz').map((a) => a.domainId)),
      hasExamAttempt: attempts.some((a) => a.mode === 'exam'),
    }
  }, [])

  const phaseCompletion = roadmapPhases.map((phase) => {
    const steps = phase.steps.map((step) => ({
      step,
      complete: isStepComplete(step, studied, quizzedDomains, hasExamAttempt),
    }))
    const doneCount = steps.filter((s) => s.complete).length
    return { phase, steps, doneCount }
  })

  const totalDone = phaseCompletion.reduce((sum, p) => sum + p.doneCount, 0)
  const total = totalStepCount()
  const overallPct = total ? Math.round((totalDone / total) * 100) : 0

  const nextStep = phaseCompletion.flatMap((p) => p.steps).find((s) => !s.complete)?.step

  return (
    <div className="space-y-8">
      <div>
        <Link to="/cgrc" className="text-sm text-brand-700 hover:underline">
          ← CGRC Study Center
        </Link>
        <h1 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">Study Roadmap</h1>
        <p className="mt-1 text-slate-500">
          A suggested order to work through the material — not required, just a default path if you're not sure where
          to start.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium text-slate-700">Overall progress</span>
          <span className="font-semibold text-brand-700">{totalDone} / {total} steps</span>
        </div>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-100">
          <div className="h-full bg-brand-500 transition-all" style={{ width: `${overallPct}%` }} />
        </div>

        {nextStep ? (
          <Link
            to={nextStep.path}
            className="mt-4 flex items-center justify-between rounded-xl bg-brand-50 px-4 py-3 hover:bg-brand-100"
          >
            <span>
              <span className="block text-xs font-semibold uppercase tracking-wide text-brand-700">Up next</span>
              <span className="text-sm font-medium text-slate-800">{nextStep.title}</span>
            </span>
            <span className="text-brand-700">→</span>
          </Link>
        ) : (
          <p className="mt-4 rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
            🎉 You've completed every step on the roadmap. Retake quizzes or the full exam to keep your scores sharp.
          </p>
        )}
      </div>

      <div className="space-y-6">
        {phaseCompletion.map(({ phase, steps, doneCount }) => (
          <section key={phase.id}>
            <div className="mb-3 flex items-center justify-between">
              <div>
                <h2 className="font-semibold text-slate-900">{phase.title}</h2>
                <p className="text-sm text-slate-500">{phase.description}</p>
              </div>
              <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                {doneCount} / {steps.length}
              </span>
            </div>

            <div className="space-y-2">
              {steps.map(({ step, complete }) => (
                <Link
                  key={step.id}
                  to={step.path}
                  className={`flex items-start gap-3 rounded-xl border px-4 py-3 transition-colors ${
                    complete
                      ? 'border-green-200 bg-green-50/60 hover:bg-green-50'
                      : 'border-slate-200 bg-white hover:border-brand-300 hover:bg-brand-50/40'
                  }`}
                >
                  <span
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                      complete ? 'bg-green-500 text-white' : 'border-2 border-slate-300 text-transparent'
                    }`}
                  >
                    ✓
                  </span>
                  <span className="min-w-0">
                    <span className={`block text-sm font-medium ${complete ? 'text-green-800' : 'text-slate-800'}`}>
                      {step.title}
                    </span>
                    <span className="block text-xs text-slate-500">{step.description}</span>
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
