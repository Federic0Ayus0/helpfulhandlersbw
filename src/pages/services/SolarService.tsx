import { Link } from 'react-router-dom'
import { Sun, Zap, Battery, Home, Building, BarChart2, CheckCircle, ArrowRight, Shield } from 'lucide-react'
import GlassCard from '../../components/GlassCard'

const features = [
  { icon: Sun, title: 'Solar Panel Supply', desc: 'High-quality solar panels sourced from trusted manufacturers.' },
  { icon: Zap, title: 'System Installation', desc: 'Professional installation by certified solar technicians.' },
  { icon: Battery, title: 'Battery Storage', desc: 'Lithium and gel battery backup systems for round-the-clock power.' },
  { icon: Home, title: 'Residential Solutions', desc: 'Solar systems for homes — reduce your electricity bill significantly.' },
  { icon: Building, title: 'Commercial Solutions', desc: 'Large-scale solar installations for offices and businesses.' },
  { icon: BarChart2, title: 'Energy Audits', desc: 'We assess your energy needs and design the right system for you.' },
]

const benefits = [
  'Reduce your electricity bills by up to 80%',
  'Power through load shedding and outages',
  'Environmentally friendly and sustainable',
  'Government rebates may apply',
  'Long lifespan — panels last 25+ years',
  'Low maintenance after installation',
  'Increase your property value',
  'Grid-tie and off-grid options available',
]

export default function SolarService() {
  return (
    <div className="min-h-screen bg-hh-bg-primary grid-bg pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-hh-red/30 bg-hh-red/10 text-xs font-medium text-hh-red mb-4">
              <Sun size={12} /> Solar Energy
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
              Clean, Affordable Power<br /><span className="gradient-text-red">for Botswana</span>
            </h1>
            <p className="text-white/60 leading-relaxed mb-6">
              Harness the power of Botswana's abundant sunshine. We supply, design, and install complete solar energy systems for homes and businesses — saving you money and keeping you powered.
            </p>
            <div className="flex gap-3">
              <Link to="/quote" className="btn-primary">Get a Solar Quote</Link>
              <Link to="/contact" className="btn-secondary">Learn More</Link>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-yellow-500/10 blur-[80px] rounded-full" />
            <div className="relative z-10 flex items-center justify-center">
              <img src="/images/solar-light.jpg" alt="Solar" className="rounded-2xl h-64 w-full object-cover" />
              <div className="absolute -top-4 -right-4 glass-card p-4 rounded-xl text-center">
                <Sun size={24} className="text-yellow-400 mx-auto mb-1" />
                <div className="text-xs font-bold text-white">Botswana</div>
                <div className="text-xs text-yellow-400">8+ hrs sunshine/day</div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-center">Solar Solutions We Offer</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((f) => (
            <GlassCard key={f.title} className="p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-yellow-500/15 text-yellow-400 mb-4"><f.icon size={22} /></div>
              <h3 className="font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{f.desc}</p>
            </GlassCard>
          ))}
        </div>

        <GlassCard className="p-8 mb-10">
          <div className="flex items-center gap-3 mb-4"><Shield size={20} className="text-yellow-400" /><h3 className="font-bold text-lg">Benefits of Going Solar</h3></div>
          <div className="grid sm:grid-cols-2 gap-3">
            {benefits.map((b) => (
              <div key={b} className="flex items-start gap-3 text-sm text-white/70">
                <CheckCircle size={16} className="text-yellow-400 mt-0.5 shrink-0" />{b}
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="p-8 text-center" style={{ borderColor: 'rgba(234,179,8,0.2)' }}>
          <Sun size={32} className="text-yellow-400 mx-auto mb-3" />
          <h2 className="text-2xl font-bold mb-3">Start Saving with Solar</h2>
          <p className="text-white/50 mb-6">Get a free energy assessment and custom solar quote for your property.</p>
          <Link to="/quote" className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-medium px-6 py-3 rounded-lg hover:brightness-110 transition-all">Get a Free Quote <ArrowRight size={16} /></Link>
        </GlassCard>
      </div>
    </div>
  )
}
