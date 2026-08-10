import { Link, Navigate, useParams } from 'react-router-dom'
import { umgcCourses } from '../../data/umgc'
import ResourceList from '../../components/ResourceList'
import { useTrackVisit } from '../../hooks/useTrackVisit'

export default function CourseDetail() {
  const { courseId = '' } = useParams()
  const course = umgcCourses.find((c) => c.id === courseId)
  useTrackVisit(`/umgc/${courseId}`, course?.title ?? 'UMGC Course')

  if (!course) return <Navigate to="/umgc" replace />

  return (
    <div className="space-y-6">
      <div>
        <Link to="/umgc" className="text-sm text-brand-700 hover:underline">
          ← UMGC Coursework Prep
        </Link>
        <p className="mt-2 text-xs font-semibold text-slate-400">{course.code}</p>
        <h1 className="mt-1 text-2xl md:text-3xl font-bold text-slate-900">{course.title}</h1>
      </div>

      <p className="text-slate-700 leading-relaxed">{course.overview}</p>

      <section>
        <h2 className="mb-3 text-lg font-semibold text-slate-900">Key Topics Likely Covered</h2>
        <ul className="space-y-2">
          {course.keyTopics.map((t) => (
            <li key={t} className="flex gap-2 text-slate-700">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
              {t}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-3 text-lg font-semibold text-slate-900">Recommended Free Resources</h2>
        <ResourceList resources={course.resources} />
      </section>
    </div>
  )
}
