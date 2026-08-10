import { Link } from 'react-router-dom'
import { aiRmfFunctions, aiRmfCrossReference } from '../../data/aiRmf'
import { useTrackVisit } from '../../hooks/useTrackVisit'

export default function AiRmf() {
  useTrackVisit('/ai/rmf', 'NIST AI RMF Deep-Dive')
  return (
    <div className="space-y-6">
      <div>
        <Link to="/ai" className="text-sm text-brand-700 hover:underline">
          ← AI Learning Center
        </Link>
        <h1 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">NIST AI Risk Management Framework</h1>
        <p className="mt-1 text-slate-500">
          The AI RMF's four functions — Govern, Map, Measure, Manage — are the AI-governance counterpart to the
          security RMF you already know from the CGRC Study Center.
        </p>
      </div>

      <div className="space-y-3">
        {aiRmfFunctions.map((fn) => (
          <div key={fn.id} className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="font-semibold text-slate-900">{fn.title}</h3>
            <p className="mt-1 text-sm text-slate-600">{fn.summary}</p>
            <ul className="mt-3 space-y-1.5">
              {fn.points.map((p) => (
                <li key={p} className="flex gap-2 text-sm text-slate-700">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <section>
        <h2 className="mb-3 text-lg font-semibold text-slate-900">How it maps to the security RMF</h2>
        <p className="mb-3 text-sm text-slate-500">
          If the 7-step RMF from the CGRC Study Center already makes sense to you, this is the fastest way to learn
          the AI RMF — same underlying idea, different vocabulary.
        </p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                <th className="px-4 py-2.5">Security RMF step</th>
                <th className="px-4 py-2.5">AI RMF function</th>
                <th className="px-4 py-2.5">Why they line up</th>
              </tr>
            </thead>
            <tbody>
              {aiRmfCrossReference.map((row) => (
                <tr key={row.securityRmfStep} className="border-b border-slate-100 last:border-0">
                  <td className="px-4 py-2.5 font-medium text-slate-800 whitespace-nowrap">{row.securityRmfStep}</td>
                  <td className="px-4 py-2.5 font-medium text-brand-700 whitespace-nowrap">{row.aiRmfFunction}</td>
                  <td className="px-4 py-2.5 text-slate-600">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <Link
        to="/cgrc/nist"
        className="block rounded-xl border border-brand-200 bg-brand-50 p-4 text-center font-medium text-brand-700 hover:bg-brand-100"
      >
        Review the security RMF's 7 steps →
      </Link>
    </div>
  )
}
