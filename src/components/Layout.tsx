import { NavLink, Outlet } from 'react-router-dom'
import SearchBar from './SearchBar'

const navItems = [
  { to: '/', label: 'Dashboard', icon: '🏠' },
  { to: '/cgrc', label: 'CGRC Center', icon: '🛡️' },
  { to: '/ai', label: 'AI Learning', icon: '🤖' },
  { to: '/umgc', label: 'UMGC Prep', icon: '🎓' },
]

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Desktop sidebar */}
      <aside className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 border-r border-slate-200 bg-white">
        <div className="px-5 py-5 border-b border-slate-200">
          <NavLink to="/" className="flex items-center gap-2 font-bold text-lg text-brand-700">
            <span className="text-2xl">📘</span>
            <span>GRC-Cyber</span>
          </NavLink>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive ? 'bg-brand-50 text-brand-700' : 'text-slate-600 hover:bg-slate-100'
                }`
              }
            >
              <span className="text-lg">{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="px-4 py-4 border-t border-slate-200 text-xs text-slate-400">
          No login. Progress saved on this device only.
        </div>
      </aside>

      {/* Main column */}
      <div className="flex-1 md:ml-64 flex flex-col min-h-screen">
        <header className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-slate-200 px-4 py-3 flex items-center gap-3">
          <NavLink to="/" className="md:hidden flex items-center gap-2 font-bold text-brand-700 shrink-0">
            <span className="text-xl">📘</span>
          </NavLink>
          <div className="flex-1 max-w-2xl">
            <SearchBar />
          </div>
        </header>

        <main className="flex-1 px-4 py-6 md:px-8 md:py-8 pb-24 md:pb-8">
          <div className="mx-auto max-w-5xl w-full">
            <Outlet />
          </div>
        </main>

        <footer className="hidden md:block border-t border-slate-200 px-8 py-4 text-xs text-slate-400">
          GRC-Cyber — free CGRC exam prep, AI fundamentals, and UMGC coursework prep. Not affiliated with ISC2 or UMGC.
        </footer>
      </div>

      {/* Mobile bottom nav */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 z-20 bg-white border-t border-slate-200 flex">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              `flex-1 flex flex-col items-center justify-center gap-0.5 py-2 text-[11px] font-medium ${
                isActive ? 'text-brand-700' : 'text-slate-500'
              }`
            }
          >
            <span className="text-lg leading-none">{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}
