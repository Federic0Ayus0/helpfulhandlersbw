import { Link } from 'react-router-dom'
import { Headphones, Wifi, Monitor, HardDrive, Shield, Cable, CheckCircle, ArrowRight, Wrench } from 'lucide-react'
import GlassCard from '../../components/GlassCard'

const features = [
  { icon: Wifi, title: 'Network Setup & Configuration', desc: 'LAN, WAN, Wi-Fi, and VPN setup for offices of any size.' },
  { icon: Monitor, title: 'Workstation Setup', desc: 'Computer setup, configuration, and software installation.' },
  { icon: HardDrive, title: 'Data Backup & Recovery', desc: 'Protect your critical business data with automated backup solutions.' },
  { icon: Shield, title: 'Cybersecurity', desc: 'Firewall, antivirus, and security audits to protect your business.' },
  { icon: Cable, title: 'Structured Cabling', desc: 'Professional cable management and structured cabling for offices.' },
  { icon: Wrench, title: 'Hardware Repairs', desc: 'Fast, reliable repair services for computers, printers, and devices.' },
]

const plans = [
  { name: 'Call-Out', price: 'BWP 250', desc: 'Per visit — ideal for one-off issues', features: ['On-site diagnosis', 'Basic repairs', 'Software fixes'] },
  { name: 'Monthly Retainer', price: 'BWP 1,500', desc: 'Per month — best for ongoing support', features: ['Priority response', '2 call-outs per month', 'Remote & on-site support', 'Monthly system checkup', '1 System Audit / Report'] },
  { name: 'Enterprise SLA', price: 'Custom', desc: 'For large offices & businesses', features: ['Dedicated technician', '4-hour response guarantee', 'Full IT management', 'Monthly reporting'] },
]

export default function ICTService() {
  return (
    <div className="min-h-screen bg-hh-bg-primary grid-bg pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-hh-red/30 bg-hh-red/10 text-xs font-medium text-hh-red mb-4">
              <Headphones size={12} /> ICT Support
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
              Reliable IT Support<br /><span className="gradient-text-red">When You Need It</span>
            </h1>
            <p className="text-white/60 leading-relaxed mb-6">
              Keep your business running smoothly with our professional ICT support services. From network setup to hardware repairs — we're your local IT team in Botswana.
            </p>
            <div className="flex gap-3">
              <Link to="/quote" className="btn-primary">Get Support</Link>
              <a href="tel:+26774170800" className="btn-secondary flex items-center gap-2"><Headphones size={16} /> Call Now</a>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-hh-red/10 blur-[80px] rounded-full" />
            <img src="/images/lab-1.jpg" alt="ICT Lab" className="relative z-10 rounded-2xl h-64 w-full object-cover" />
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-center">ICT Services We Offer</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((f) => (
            <GlassCard key={f.title} className="p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-hh-red/15 text-hh-red mb-4"><f.icon size={22} /></div>
              <h3 className="font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{f.desc}</p>
            </GlassCard>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-6 text-center">Support Plans</h2>
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {plans.map((p, i) => (
            <GlassCard key={p.name} className={`p-6 ${i === 1 ? 'border-hh-red/40 shadow-red-glow' : ''}`}>
              {i === 1 && <div className="mb-3 text-xs font-semibold text-white bg-hh-red px-3 py-1 rounded-full inline-block">Popular</div>}
              <h3 className="font-semibold text-lg mb-1">{p.name}</h3>
              <div className="text-2xl font-bold gradient-text-red mb-1">{p.price}</div>
              <p className="text-xs text-white/40 mb-4">{p.desc}</p>
              <ul className="space-y-2 mb-6">
                {p.features.map((f) => <li key={f} className="flex items-center gap-2 text-sm text-white/60"><CheckCircle size={14} className="text-hh-red shrink-0" />{f}</li>)}
              </ul>
              <Link to="/quote" className={`block text-center text-sm font-medium py-2.5 rounded-md transition-all ${i === 1 ? 'bg-gradient-to-r from-hh-red to-red-700 text-white' : 'border border-white/10 text-white hover:bg-white/5'}`}>Get Started</Link>
            </GlassCard>
          ))}
        </div>

        <GlassCard className="p-8 text-center border-hh-red/20">
          <h2 className="text-2xl font-bold mb-3">IT Problem? We've Got You.</h2>
          <p className="text-white/50 mb-6">Fast, local, and affordable ICT support across Botswana.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+26774170800" className="btn-secondary inline-flex items-center gap-2"><Headphones size={16} /> +267 74 170 800</a>
            <Link to="/quote" className="btn-primary inline-flex items-center gap-2">Request Support <ArrowRight size={16} /></Link>
          </div>
        </GlassCard>
      </div>
    </div>
  )
}
