import { Link } from 'react-router-dom'
import { Settings, User, Sun, Video, Server, ChevronLeft } from 'lucide-react'
import GlassCard from '../components/GlassCard'
import HHLogo from '../components/HHLogo'

const events = [
  { day: 15, title: 'Solar Cleaning', time: '10:00 AM', type: 'red', tech: 'Kagiso', duration: '2 Hours' },
  { day: 22, title: 'CCTV System Audit', time: '2:00 PM', type: 'blue', tech: 'Neo', duration: '3 Hours' },
  { day: 29, title: 'Server Optimization', time: '9:00 AM', type: 'red', tech: 'Tshepo', duration: '4 Hours' },
]

const upcoming = [
  { icon: Sun, title: 'Solar Cleaning', tech: 'Kagiso', duration: '2 Hours', date: 'Oct 15' },
  { icon: Video, title: 'CCTV System Audit', tech: 'Neo', duration: '3 Hours', date: 'Oct 22' },
  { icon: Server, title: 'Server Optimization', tech: 'Tshepo', duration: '4 Hours', date: 'Oct 29' },
]

const days = Array.from({ length: 31 }, (_, i) => i + 1)
const startOffset = 1 // October 2024 starts on Tuesday

export default function Maintenance() {
  return (
    <div className="min-h-screen bg-hh-bg-primary flex">
      {/* Sidebar */}
      <aside className="w-60 shrink-0 border-r border-white/[0.06] bg-hh-bg-secondary hidden md:flex flex-col">
        <div className="p-6">
          <HHLogo size={28} variant="white" />
        </div>
        <nav className="px-3 space-y-1">
          <Link to="/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/50 hover:text-white hover:bg-white/[0.03]">
            <User size={18} /> Overview
          </Link>
          <Link to="/maintenance" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white bg-white/[0.05] border-l-2 border-hh-red">
            <Settings size={18} /> Maintenance
          </Link>
          <Link to="/support" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/50 hover:text-white hover:bg-white/[0.03]">
            <Server size={18} /> Support
          </Link>
        </nav>
      </aside>

      <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Link to="/dashboard" className="text-white/50 hover:text-white"><ChevronLeft size={20} /></Link>
            <h1 className="text-xl font-semibold">Maintenance Schedule</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-hh-bg-elevated" />
            <Settings size={18} className="text-white/50" />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Calendar */}
          <GlassCard className="lg:col-span-2 p-6">
            <h2 className="text-lg font-semibold mb-4">October 2024</h2>
            <div className="grid grid-cols-7 gap-1 text-center text-xs text-white/50 mb-2">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
                <div key={d} className="py-2">{d}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: startOffset }).map((_, i) => (
                <div key={`empty-${i}`} />
              ))}
              {days.map((day) => {
                const event = events.find((e) => e.day === day)
                return (
                  <div
                    key={day}
                    className={`aspect-square rounded-lg flex flex-col items-center justify-center text-sm relative ${
                      event
                        ? event.type === 'red'
                          ? 'bg-hh-red/20 border border-hh-red/30'
                          : 'bg-hh-blue/20 border border-hh-blue/30'
                        : 'hover:bg-white/[0.03]'
                    }`}
                  >
                    <span className={event ? 'font-semibold' : 'text-white/60'}>{day}</span>
                    {event && (
                      <span className="text-[9px] mt-0.5 leading-tight text-white/70 text-center px-1">
                        {event.title}
                      </span>
                    )}
                  </div>
                )
              })}
            </div>
          </GlassCard>

          {/* Upcoming */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Upcoming This Month</h2>
            {upcoming.map((u) => (
              <GlassCard key={u.title} className="p-4">
                <div className="flex items-start gap-3">
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                    u.title.includes('Solar') ? 'bg-hh-red/15 text-hh-red' : u.title.includes('CCTV') ? 'bg-hh-blue/15 text-hh-blue' : 'bg-hh-orange/15 text-hh-orange'
                  }`}>
                    <u.icon size={16} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium mb-1">{u.title}</h3>
                    <div className="text-xs text-white/50 space-y-0.5">
                      <p>Technician: <span className="text-white/70">{u.tech}</span></p>
                      <p>Estimated Duration: <span className="text-white/70">{u.duration}</span></p>
                      <p>Date: <span className="text-white/70">{u.date}</span></p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}

            <GlassCard className="p-4">
              <div className="flex items-start gap-3">
                <img src="/images/mascot-avatar.png" alt="Tip" className="w-10 h-10 rounded-full" />
                <div>
                  <h4 className="text-sm font-medium mb-1">Maintenance Pro-Tip</h4>
                  <p className="text-xs text-white/60">Regular checks keep your systems 100% efficient!</p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </main>
    </div>
  )
}
