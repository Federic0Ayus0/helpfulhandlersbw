import { Link } from 'react-router-dom'
import { Wrench, Brain, Calendar, ChevronRight, Sun, MessageSquare } from 'lucide-react'
import GlassCard from '../components/GlassCard'

const actions = [
  {
    icon: Wrench,
    title: 'Report a Hardware Issue',
    desc: 'Submit hardware problems for quick resolution.',
    cta: 'Report Now',
    href: '/chat',
  },
  {
    icon: Brain,
    title: 'Request AI/Software Support',
    desc: 'Get help with software and AI systems.',
    cta: 'Request Support',
    href: '/chat',
  },
  {
    icon: Calendar,
    title: 'Schedule Maintenance',
    desc: 'Book your routine system check-up.',
    cta: 'Schedule',
    href: '/maintenance',
  },
]

const tickets = [
  { title: 'CCTV Camera 4 Offline', status: 'Technician En Route', date: 'Dec 2, 2024', badge: 'En Route', badgeColor: 'green' },
  { title: 'Solar Inverter Fault', status: 'In Progress', date: 'Dec 3, 2024', badge: 'In Progress', badgeColor: 'orange' },
  { title: 'AI Chatbot Configuration', status: 'Open', date: 'Dec 8, 2024', badge: 'Open', badgeColor: 'red' },
]

const kb = [
  { icon: Sun, title: 'Solar System Care Guides' },
  { icon: MessageSquare, title: 'AI Chatbot FAQs' },
]

export default function Support() {
  return (
    <div className="min-h-screen bg-hh-bg-primary grid-bg pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Hero */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <img src="/images/mascot-hero.png" alt="Support" className="h-48 animate-float" />
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">How can we help you today?</h1>
            <p className="text-white/50">Get support for all your technology needs</p>
          </div>
        </div>

        {/* Action Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {actions.map((a) => (
            <GlassCard key={a.title} className="p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-hh-red/15 text-hh-red mb-4">
                <a.icon size={24} />
              </div>
              <h3 className="font-semibold mb-1">{a.title}</h3>
              <p className="text-sm text-white/50 mb-4">{a.desc}</p>
              <Link to={a.href} className="btn-primary text-xs w-full">
                {a.cta}
              </Link>
            </GlassCard>
          ))}
        </div>

        {/* Tickets & KB */}
        <div className="grid lg:grid-cols-2 gap-6">
          <div>
            <h2 className="text-lg font-semibold mb-4">Active Tickets</h2>
            <div className="space-y-3">
              {tickets.map((t) => (
                <GlassCard key={t.title} className="p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-sm font-medium">{t.title}</h3>
                      <p className="text-xs text-white/50 mt-1">Ticket ID1 - {t.date}</p>
                    </div>
                    <span className={`text-[10px] font-semibold px-2 py-1 rounded-full ${
                      t.badgeColor === 'green' ? 'bg-hh-green/15 text-hh-green' :
                      t.badgeColor === 'orange' ? 'bg-hh-orange/15 text-hh-orange' :
                      'bg-hh-red/15 text-hh-red'
                    }`}>
                      {t.badge}
                    </span>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Knowledge Base Quick Links</h2>
            <div className="space-y-3">
              {kb.map((k) => (
                <GlassCard key={k.title} className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-hh-bg-elevated">
                      <k.icon size={18} className="text-hh-red" />
                    </div>
                    <span className="text-sm font-medium">{k.title}</span>
                    <ChevronRight size={16} className="ml-auto text-white/30" />
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
