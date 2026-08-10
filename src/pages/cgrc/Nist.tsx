import { useState, type ReactNode } from 'react'
import { rmfSteps, nistPublications } from '../../data/nist'
import { useTrackVisit } from '../../hooks/useTrackVisit'
import MarkStudiedButton from '../../components/MarkStudiedButton'

export default function Nist() {
  useTrackVisit('/cgrc/nist', 'NIST & RMF Deep-Dive')
  const [tab, setTab] = useState<'rmf' | 'pubs'>('rmf')

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900">NIST &amp; RMF Deep-Dive</h1>
          <p className="mt-1 text-slate-500">
            The Risk Management Framework 7-step process, and the SP 800-series / FIPS publications behind it — explained plainly.
          </p>
        </div>
        <MarkStudiedButton topicId="nist-rmf" />
      </div>

      <div className="flex gap-2">
        <TabButton active={tab === 'rmf'} onClick={() => setTab('rmf')}>
          RMF 7 Steps
        </TabButton>
        <TabButton active={tab === 'pubs'} onClick={() => setTab('pubs')}>
          Key Publications
        </TabButton>
      </div>

      {tab === 'rmf' ? (
        <div className="space-y-3">
          {rmfSteps.map((step) => (
            <div key={step.id} className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-1 text-slate-600 text-sm">{step.summary}</p>
              <ul className="mt-3 space-y-1.5">
                {step.points.map((p) => (
                  <li key={p} className="flex gap-2 text-sm text-slate-700">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {nistPublications.map((pub) => (
            <div key={pub.id} className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="font-semibold text-slate-900">{pub.title}</h3>
              <p className="mt-1 text-slate-600 text-sm">{pub.summary}</p>
              <ul className="mt-3 space-y-1.5">
                {pub.points.map((p) => (
                  <li key={p} className="flex gap-2 text-sm text-slate-700">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function TabButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
        active ? 'bg-brand-600 text-white' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
      }`}
    >
      {children}
    </button>
  )
}
