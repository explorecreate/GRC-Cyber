import { Link } from 'react-router-dom'
import { useTrackVisit } from '../../hooks/useTrackVisit'

export default function AiHome() {
  useTrackVisit('/ai', 'AI Learning Center')
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900">AI Learning Center</h1>
        <p className="mt-1 text-slate-500">Fundamentals of AI, and a running feed of what AI is doing beyond apps and chatbots.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Link to="/ai/learning" className="rounded-2xl border border-slate-200 bg-white p-6 hover:border-brand-300 hover:shadow-sm transition">
          <span className="text-3xl">🧠</span>
          <h2 className="mt-3 font-semibold text-slate-900">Learning AI</h2>
          <p className="mt-1 text-sm text-slate-500">
            LLMs, prompting, agents, and RAG — the fundamentals behind everything else in this section.
          </p>
        </Link>
        <Link to="/ai/rmf" className="rounded-2xl border border-slate-200 bg-white p-6 hover:border-brand-300 hover:shadow-sm transition">
          <span className="text-3xl">🧭</span>
          <h2 className="mt-3 font-semibold text-slate-900">NIST AI RMF Deep-Dive</h2>
          <p className="mt-1 text-sm text-slate-500">
            Govern, Map, Measure, Manage — the AI-governance counterpart to the security RMF, mapped step-by-step
            back to what you already know for CGRC.
          </p>
        </Link>
        <Link to="/ai/beyond" className="rounded-2xl border border-slate-200 bg-white p-6 hover:border-brand-300 hover:shadow-sm transition">
          <span className="text-3xl">🌐</span>
          <h2 className="mt-3 font-semibold text-slate-900">Beyond Apps &amp; Websites</h2>
          <p className="mt-1 text-sm text-slate-500">
            An ongoing feed of non-app AI use cases: automation, media generation, data analysis, robotics, research.
          </p>
        </Link>
      </div>
    </div>
  )
}
