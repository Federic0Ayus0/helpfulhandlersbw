import { Link } from 'react-router-dom'
import GlassCard from '../components/GlassCard'

export default function Warranty() {
  return (
    <div className="min-h-screen bg-hh-bg-primary grid-bg pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Link to="/" className="text-white/40 hover:text-white text-sm mb-8 inline-block">← Back to Home</Link>

        {/* Logo */}
        <div className="text-center mb-8">
          <span className="text-hh-red font-bold text-xl tracking-wider">Helpful Handlers</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-2">
          Hardware Service <span className="gradient-text-gold">Warranty</span> Document
        </h1>
        <p className="text-center text-white/50 mb-8">
          Premium hardware service warranty for Helpful Handlers clients in Botswana.
        </p>

        {/* Metadata */}
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <GlassCard className="p-4">
            <p className="text-xs text-hh-gold font-semibold mb-1">WARRANTY ID</p>
            <p className="text-sm text-white/80">HH-BOT-2024-1028A</p>
          </GlassCard>
          <GlassCard className="p-4">
            <p className="text-xs text-hh-gold font-semibold mb-1">EQUIPMENT COVERED</p>
            <p className="text-sm text-white/80">Solar Power Systems, CCTV Security, IT Network Infrastructure</p>
          </GlassCard>
          <GlassCard className="p-4">
            <p className="text-xs text-hh-gold font-semibold mb-1">INSTALLATION DATE</p>
            <p className="text-sm text-white/80">October 26, 2024</p>
          </GlassCard>
          <GlassCard className="p-4">
            <p className="text-xs text-hh-gold font-semibold mb-1">WARRANTY PERIOD</p>
            <p className="text-sm text-white/80">24 Months (Parts & Labor)</p>
          </GlassCard>
        </div>

        {/* Terms */}
        <GlassCard className="p-8 mb-8">
          <h2 className="text-lg font-semibold text-hh-gold mb-4">TERMS OF SERVICE</h2>
          <div className="space-y-4 text-sm text-white/60 leading-relaxed">
            <p>
              This limited warranty covers defects in materials and workmanship of the installed hardware for a period of twenty-four (24) months from the Installation Date. Helpful Handlers agrees to repair or replace, at its discretion, any defective hardware at no cost to the client during this period.
            </p>
            <p>
              This warranty does not cover damage resulting from misuse, neglect, unauthorized modifications, natural disasters, or improper maintenance.
            </p>
            <p>
              Regular service check-ups are recommended to maintain optimal performance and warranty validity. For all service requests, please contact Helpful Handlers support.
            </p>
            <p>
              All warranty claims are subject to verification by authorized personnel.
            </p>
          </div>
        </GlassCard>

        {/* Seals */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <img src="/images/mascot-avatar.png" alt="Helpful" className="w-16 h-16 rounded-full" />
            <span className="text-xs text-white/50 font-medium bg-white/5 px-3 py-1 rounded">HELPFUL</span>
          </div>
          <img src="/images/gold-seal.png" alt="Quality Assured" className="w-24 h-24" />
        </div>

        {/* Footer */}
        <div className="border-t border-white/[0.06] pt-6 text-center text-xs text-white/40">
          <div className="flex items-center justify-center gap-4 mb-2">
            <Link to="/support" className="hover:text-white">SUPPORT</Link>
            <Link to="/contact" className="hover:text-white">CONTACT</Link>
            <Link to="/" className="hover:text-white">PRIVACY POLICY</Link>
            <Link to="/" className="hover:text-white">TERMS</Link>
          </div>
          <p>© 2024 Helpful Handlers. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  )
}
