import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Copy, MessageCircle, Mail, ChevronLeft } from 'lucide-react'
import GlassCard from '../components/GlassCard'
import HHLogo from '../components/HHLogo'

const stats = [
  { label: 'Total Referrals', value: '24' },
  { label: 'Pending Rewards', value: 'P750' },
  { label: 'Total Earned', value: 'P2,500' },
]

const referrals = [
  { name: 'K. Mogwe', status: 'Successful', date: '12/10/2024', reward: 'P250' },
  { name: 'L. Dube', status: 'Pending', date: '14/10/2024', reward: 'P250' },
  { name: 'T. Phiri', status: 'Successful', date: '10/10/2024', reward: 'P250' },
]

export default function Referrals() {
  const [copied, setCopied] = useState(false)
  const link = 'helpfulhandlers.bw/ref/thabo24'

  const copyLink = () => {
    navigator.clipboard.writeText(link)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-hh-bg-primary pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <Link to="/dashboard" className="text-white/40 hover:text-white text-sm mb-6 inline-flex items-center gap-1">
          <ChevronLeft size={16} /> Back to Dashboard
        </Link>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <HHLogo size={28} variant="white" />
            <span className="text-sm text-white/60">Dumela, Thabo</span>
          </div>
          <img src="/images/mascot-avatar.png" alt="Mascot" className="w-20 h-20 mx-auto mb-4 rounded-full" />
          <h1 className="text-3xl font-bold mb-2">Share the Innovation</h1>
          <p className="text-white/50">
            Invite your network to Helpful Handlers and earn P250 for every successful referral.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {stats.map((s) => (
            <GlassCard key={s.label} className="p-4 text-center">
              <p className="text-xs text-white/50 mb-1">{s.label}</p>
              <p className="text-2xl font-bold">{s.value}</p>
            </GlassCard>
          ))}
        </div>

        {/* Referral Link */}
        <GlassCard className="p-5 mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-white/60">Referral link</span>
            <span className="text-sm text-white/60">Quick-share</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex-1 bg-hh-bg-elevated rounded-lg px-4 py-3 text-sm text-white/80 truncate">
              {link}
            </div>
            <button
              onClick={copyLink}
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-hh-bg-elevated text-white/60 hover:text-white transition-colors"
            >
              <Copy size={18} />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-hh-green/15 text-hh-green hover:bg-hh-green/25 transition-colors">
              <MessageCircle size={18} />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-hh-red/15 text-hh-red hover:bg-hh-red/25 transition-colors">
              <Mail size={18} />
            </button>
          </div>
          {copied && <p className="text-xs text-hh-green mt-2">Copied to clipboard!</p>}
        </GlassCard>

        {/* Recent Referrals */}
        <h2 className="text-lg font-semibold mb-4">Recent Referrals</h2>
        <GlassCard className="overflow-hidden">
          <div className="grid grid-cols-4 gap-4 p-4 text-xs text-white/50 border-b border-white/[0.06]">
            <span>Name</span>
            <span>Status</span>
            <span>Date</span>
            <span>Reward</span>
          </div>
          {referrals.map((r) => (
            <div key={r.name} className="grid grid-cols-4 gap-4 p-4 text-sm border-b border-white/[0.04] last:border-0">
              <span className="text-white/80">{r.name}</span>
              <span className={r.status === 'Successful' ? 'text-hh-green' : 'text-hh-orange'}>{r.status}</span>
              <span className="text-white/50">{r.date}</span>
              <span className="text-white/80">{r.reward}</span>
            </div>
          ))}
        </GlassCard>
      </div>
    </div>
  )
}
