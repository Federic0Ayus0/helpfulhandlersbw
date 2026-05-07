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
  { 
    name: 'Call-Out', 
    price: 'BWP 399', 
    period: '/ visit',
    desc: '+ P9.50 per km outside Gaborone', 
    features: ['Remote support included', '1 on-site support', 'Basic repairs', 'Software fixes', '24-hour response guarantee'], 
    featured: false 
  },
  { 
    name: 'Monthly Retainer', 
    price: 'BWP 2,400', 
    period: '/ month',
    desc: 'Per store — 1 server, 1 Back-office, 3 Tills', 
    features: ['Priority response', '2 call-outs per month', 'Remote & on-site support', 'OS and reload configurations', 'Basic repairs', 'Software fixes', 'Monthly system checkup'], 
    featured: true 
  },
  { 
    name: 'Industrial Gold', 
    price: 'BWP 3,000', 
    period: '/ month',
    desc: 'Per store — 1 server, 3 Back-office, 6 Tills', 
    features: ['Priority response', '3 call-outs per month', 'Remote & on-site support', 'OS and reload configurations', 'Basic repairs', 'Software fixes', 'Monthly system checkup'], 
    featured: false 
  },
  { 
    name: 'Enterprise SLA', 
    price: 'Custom', 
    period: '',
    desc: 'For large offices & businesses', 
    features: ['Dedicated technician', '4-hour response guarantee', 'Full IT management', 'Monthly reporting'], 
    featured: false 
  },
  { 
    name: 'Os Reload & Configeration', 
    price: 'BWP 599', 
    period: '/ visit',
    desc: 'Reload with backups', 
    features: ['Remote support included', '1 on-site support', 'Basic repairs', 'Software reload with backup', '24-hour response guarantee', 'Windows xp, 7, 8, 10, 11 support'], 
    featured: false 
  },
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
            <img 
              src="/images/lab-1.jpg" 
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/ict-lab/800/600'
              }}
              alt="ICT Lab" 
              className="relative z-10 rounded-2xl h-64 w-full object-cover" 
            />
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

        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold mb-2">ICT Support Plans</h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Keep your business running smoothly with professional on-site and remote IT support.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {plans.map((p) => (
            <GlassCard key={p.name} className={`p-6 flex flex-col ${p.featured ? 'border-hh-red/40 shadow-red-glow' : ''}`}>
              {p.featured && <div className="mb-3 text-xs font-semibold text-white bg-hh-red px-3 py-1 rounded-full inline-block">Popular</div>}
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-1">{p.name}</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-2xl font-bold gradient-text-red">{p.price}</span>
                  <span className="text-xs text-white/40">{p.period}</span>
                </div>
                <p className="text-xs text-white/40 mb-4">{p.desc}</p>
                <ul className="space-y-2 mb-6">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-white/60 leading-snug">
                      <CheckCircle size={14} className="text-hh-red mt-1 shrink-0" />{f}
                    </li>
                  ))}
                </ul>
              </div>
              <Link to="/quote" className={`block text-center text-sm font-medium py-2.5 rounded-md transition-all mt-auto ${p.featured ? 'bg-gradient-to-r from-hh-red to-red-700 text-white' : 'border border-white/10 text-white hover:bg-white/5'}`}>
                Get Started
              </Link>
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
