import { Link } from 'react-router-dom'
import { Smartphone, Apple, Play, Layout, Shield, Zap, CheckCircle, ArrowRight, Code } from 'lucide-react'
import GlassCard from '../../components/GlassCard'

const features = [
  { icon: Apple, title: 'iOS Development', desc: 'Native and hybrid iOS apps for iPhone and iPad.' },
  { icon: Play, title: 'Android Development', desc: 'High-performance Android apps for all devices.' },
  { icon: Layout, title: 'UI/UX Design', desc: 'Beautiful, intuitive interfaces your users will love.' },
  { icon: Code, title: 'Cross-Platform', desc: 'One codebase, both platforms — using React Native or Flutter.' },
  { icon: Shield, title: 'Security First', desc: 'Built-in authentication, encryption, and data protection.' },
  { icon: Zap, title: 'API Integration', desc: 'Connect to payment gateways, maps, SMS, and more.' },
]

export default function MobileService() {
  return (
    <div className="min-h-screen bg-hh-bg-primary grid-bg pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-hh-red/30 bg-hh-red/10 text-xs font-medium text-hh-red mb-4">
              <Smartphone size={12} /> Mobile App Development
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
              Mobile Apps That Work<br /><span className="gradient-text-red">as Hard as You Do</span>
            </h1>
            <p className="text-white/60 leading-relaxed mb-6">
              From concept to App Store — we design and build custom mobile applications for iOS and Android that your customers will love and your business will rely on.
            </p>
            <div className="flex gap-3">
              <Link to="/quote" className="btn-primary">Start Your App</Link>
              <Link to="/showcase" className="btn-secondary">See Our Work</Link>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-hh-red/10 blur-[80px] rounded-full" />
            <div className="relative z-10 flex items-center justify-center gap-6 p-4">
              <div className="glass-card p-8 rounded-3xl"><Apple size={60} className="text-white/80" /></div>
              <div className="glass-card p-8 rounded-3xl border-hh-red/40"><Smartphone size={60} className="text-hh-red" /></div>
              <div className="glass-card p-8 rounded-3xl"><Play size={60} className="text-white/80" /></div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-center">What We Build</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((f) => (
            <GlassCard key={f.title} className="p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-hh-red/15 text-hh-red mb-4"><f.icon size={22} /></div>
              <h3 className="font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{f.desc}</p>
            </GlassCard>
          ))}
        </div>

        <GlassCard className="p-8 mb-10">
          <h3 className="font-bold text-lg mb-4">App Types We Specialize In</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {['E-commerce & Retail Apps', 'Business Management Tools', 'Booking & Reservation Systems', 'Delivery & Logistics Apps', 'Healthcare & Wellness Apps', 'Education & Training Apps', 'Customer Loyalty Programs', 'Field Service Apps'].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm text-white/70">
                <CheckCircle size={16} className="text-hh-red shrink-0" />{item}
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="p-8 text-center border-hh-red/20">
          <h2 className="text-2xl font-bold mb-3">Have an App Idea?</h2>
          <p className="text-white/50 mb-6">Let's turn it into reality. Starting from BWP 3,500.</p>
          <Link to="/quote" className="btn-primary inline-flex items-center gap-2">Get a Free Quote <ArrowRight size={16} /></Link>
        </GlassCard>
      </div>
    </div>
  )
}
