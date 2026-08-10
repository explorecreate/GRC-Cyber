import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="py-20 text-center">
      <p className="text-5xl">🧭</p>
      <h1 className="mt-4 text-2xl font-bold text-slate-900">Page not found</h1>
      <p className="mt-1 text-slate-500">That page doesn't exist.</p>
      <Link to="/" className="mt-6 inline-block rounded-full bg-brand-600 px-5 py-2 text-sm font-medium text-white hover:bg-brand-700">
        Back to Dashboard
      </Link>
    </div>
  )
}
