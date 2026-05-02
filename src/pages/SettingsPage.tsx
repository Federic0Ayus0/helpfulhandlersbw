import { useState } from 'react'
import { Link } from 'react-router-dom'
import { User, Shield, Bell, CreditCard, ChevronLeft, ToggleLeft, ToggleRight } from 'lucide-react'
import GlassCard from '../components/GlassCard'
import HHLogo from '../components/HHLogo'

const tabs = [
  { icon: User, label: 'Profile', id: 'profile' },
  { icon: Shield, label: 'Security', id: 'security' },
  { icon: Bell, label: 'Notifications', id: 'notifications' },
  { icon: CreditCard, label: 'Billing', id: 'billing' },
]

const loginActivity = [
  { location: 'Gaborone, Botswana', device: 'Desktop', time: 'Today at 10:30 AM' },
  { location: 'Maun, Botswana', device: 'Mobile', time: 'Yesterday at 4:15 PM' },
]

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('security')
  const [tfaEnabled, setTfaEnabled] = useState(false)

  return (
    <div className="min-h-screen bg-hh-bg-primary flex">
      {/* Sidebar */}
      <aside className="w-60 shrink-0 border-r border-white/[0.06] bg-hh-bg-secondary hidden md:flex flex-col">
        <div className="p-6">
          <HHLogo size={28} variant="white" />
        </div>
        <nav className="px-3 space-y-1">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors text-left ${
                activeTab === t.id
                  ? 'text-white bg-white/[0.05] border-l-2 border-hh-red'
                  : 'text-white/50 hover:text-white hover:bg-white/[0.03]'
              }`}
            >
              <t.icon size={18} />
              {t.label}
            </button>
          ))}
        </nav>
      </aside>

      <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8">
        <Link to="/dashboard" className="text-white/40 hover:text-white text-sm mb-6 inline-flex items-center gap-1">
          <ChevronLeft size={16} /> Back to Dashboard
        </Link>

        <h1 className="text-2xl font-bold mb-6">Settings</h1>

        {/* Mobile Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto md:hidden">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap ${
                activeTab === t.id ? 'bg-hh-red/20 text-hh-red' : 'text-white/50 bg-white/[0.03]'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Security Tab */}
        {activeTab === 'security' && (
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <GlassCard className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold">Two-Factor Authentication (2FA)</h3>
                      <span className="text-[10px] font-semibold bg-hh-green/15 text-hh-green px-2 py-0.5 rounded-full">
                        Recommended
                      </span>
                    </div>
                    <p className="text-sm text-white/50">Protect your account with an extra layer of security.</p>
                  </div>
                  <button
                    onClick={() => setTfaEnabled(!tfaEnabled)}
                    className="text-white/60 hover:text-white"
                  >
                    {tfaEnabled ? <ToggleRight size={28} className="text-hh-green" /> : <ToggleLeft size={28} />}
                  </button>
                </div>
                <button className="btn-primary text-sm">Enable 2FA</button>
              </GlassCard>

              <GlassCard className="p-6">
                <h3 className="font-semibold mb-4">Recent Login Activity</h3>
                <div className="space-y-3">
                  {loginActivity.map((l, i) => (
                    <div key={i} className="flex items-center justify-between text-sm py-2 border-b border-white/[0.04] last:border-0">
                      <div>
                        <p className="text-white/80">{l.location} - {l.device}</p>
                        <p className="text-xs text-white/40">{l.time}</p>
                      </div>
                      {i === 0 && <span className="text-[10px] bg-hh-green/15 text-hh-green px-2 py-0.5 rounded-full">Current</span>}
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>

            {/* Security Tip */}
            <GlassCard className="p-5 h-fit">
              <h3 className="font-semibold mb-3">Security Tip</h3>
              <div className="flex items-start gap-3">
                <img src="/images/mascot-avatar.png" alt="Mascot" className="w-12 h-12 rounded-full" />
                <div className="glass-card px-3 py-2 rounded-lg rounded-tl-none">
                  <p className="text-xs text-white/80">Keep your account secure with 2FA!</p>
                </div>
              </div>
            </GlassCard>
          </div>
        )}

        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <GlassCard className="p-6 max-w-2xl">
            <h3 className="font-semibold mb-4">Profile</h3>
            <div className="space-y-4">
              <div>
                <label className="text-xs text-white/50 mb-1 block">Name</label>
                <input type="text" defaultValue="Kagiso M." className="input-dark w-full" />
              </div>
              <div>
                <label className="text-xs text-white/50 mb-1 block">Email</label>
                <input type="email" defaultValue="kagiso@helpfulhandlers.com" className="input-dark w-full" />
              </div>
              <div>
                <label className="text-xs text-white/50 mb-1 block">Phone Number</label>
                <input type="tel" defaultValue="+267 71 234 567" className="input-dark w-full" />
              </div>
              <button className="btn-primary text-sm">Save Changes</button>
            </div>
          </GlassCard>
        )}

        {/* Other tabs placeholder */}
        {(activeTab === 'notifications' || activeTab === 'billing') && (
          <GlassCard className="p-8 text-center">
            <p className="text-white/50">{activeTab === 'notifications' ? 'Notification preferences coming soon.' : 'Billing history coming soon.'}</p>
          </GlassCard>
        )}
      </main>
    </div>
  )
}
