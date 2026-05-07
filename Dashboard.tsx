import { Link } from 'react-router-dom'
import { Home, Briefcase, CreditCard, HelpCircle, Bell, Calendar } from 'lucide-react'
import GlassCard from '../components/GlassCard'
import HHLogo from '../components/HHLogo'

const sidebarItems = [
  { icon: Home, label: 'Overview', active: true, href: '/dashboard' },
  { icon: Briefcase, label: 'My Projects', active: false, href: '/dashboard' },
  { icon: CreditCard, label: 'Billing', active: false, href: '/dashboard' },
  { icon: HelpCircle, label: 'Support', active: false, href: '/support' },
]

const projects = [
  {
    name: 'AI Chatbot Integration',
    progress: 80,
    status: 'In Progress',
    date: 'Oct 20, 2024',
    avatars: 3,
  },
  {
    name: 'Solar System Installation',
    progress: 30,
    status: 'On Track',
    date: 'Nov 15, 2024',
    avatars: 2,
  },
]

const activities = [
  { icon: Briefcase, text: 'Hardware delivered for Solar System Installation', time: '1 hour ago' },
  { icon: Bell, text: 'Development sprint started for AI Chatbot Integration', time: '3 hours ago' },
  { icon: CreditCard, text: 'New invoice for September 2024 available', time: 'Yesterday' },
]

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-hh-bg-primary flex">
      {/* Sidebar */}
      <aside className="w-60 shrink-0 border-r border-white/[0.06] bg-hh-bg-secondary hidden md:flex flex-col">
        <div className="p-6">
          <HHLogo size={28} variant="white" />
        </div>
        <nav className="px-3 space-y-1">
          {sidebarItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                item.active
                  ? 'text-white bg-white/[0.05] border-l-2 border-hh-red'
                  : 'text-white/50 hover:text-white hover:bg-white/[0.03]'
              }`}
            >
              <item.icon size={18} />
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 min-w-0">
        {/* Header */}
        <div className="glass-card m-4 p-4 flex items-center gap-3">
          <span className="text-2xl">🤖</span>
          <span className="text-lg font-medium">Dumela, Kagiso!</span>
        </div>

        <div className="px-4 pb-8 grid lg:grid-cols-3 gap-6">
          {/* Projects */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-lg font-semibold">Projects</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {projects.map((p) => (
                <GlassCard key={p.name} className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-medium">{p.name}</h3>
                    <span className="text-sm text-white/50">{p.progress}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/[0.06] mb-3 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-hh-red to-red-400"
                      style={{ width: `${p.progress}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs text-white/50 mb-3">
                    <span>{p.status}</span>
                    <span>{p.date}</span>
                  </div>
                  <div className="flex -space-x-2">
                    {Array.from({ length: p.avatars }).map((_, i) => (
                      <div
                        key={i}
                        className="h-7 w-7 rounded-full border-2 border-hh-bg-secondary bg-hh-bg-elevated flex items-center justify-center text-[10px]"
                      >
                        {String.fromCharCode(65 + i)}
                      </div>
                    ))}
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
              <div className="space-y-3">
                {activities.map((a, i) => (
                  <GlassCard key={i} className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-hh-red/15 text-hh-red">
                        <a.icon size={16} />
                      </div>
                      <div>
                        <p className="text-sm text-white/80">{a.text}</p>
                        <p className="text-xs text-white/40 mt-1">{a.time}</p>
                      </div>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>

            {/* Next Step */}
            <GlassCard className="p-5">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-hh-red/15 text-hh-red">
                  <Calendar size={20} />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Next Step</h3>
                  <p className="text-sm text-white/60">
                    Meeting scheduled for Tuesday, 10:00 AM with the Development Team
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </main>
    </div>
  )
}
