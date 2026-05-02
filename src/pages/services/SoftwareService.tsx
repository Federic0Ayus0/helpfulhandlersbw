import { Link } from 'react-router-dom'
import { Server, Database, Globe, Lock, RefreshCw, BarChart2, CheckCircle, ArrowRight } from 'lucide-react'
import GlassCard from '../../components/GlassCard'

const features = [
  { icon: Globe, title: 'Web Applications', desc: 'Scalable web platforms built with modern frameworks.' },
  { icon: Database, title: 'Database Design', desc: 'Robust, optimized database architecture for your data.' },
  { icon: Lock, title: 'Admin Dashboards', desc: 'Custom admin panels to manage your business operations.' },
  { icon: RefreshCw, title: 'System Integrations', desc: 'Connect your software to third-party APIs and services.' },
  { icon: BarChart2, title: 'Reporting & Analytics', desc: 'Real-time dashboards and business intelligence tools.' },
  { icon: Server, title: 'Cloud Deployment', desc: 'Hosted on secure, scalable cloud infrastructure.' },
]

export default function SoftwareService() {
  return (
    <div className="min-h-screen bg-hh-bg-primary grid-bg pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-hh-red/30 bg-hh-red/10 text-xs font-medium text-hh-red mb-4">
              <Server size={12} /> Custom Software
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
              Software Built Around<br /><span className="gradient-text-red">Your Business</span>
            </h1>
            <p className="text-white/60 leading-relaxed mb-6">
              Off-the-shelf software rarely fits perfectly. We build custom web applications, management systems, and platforms designed specifically for how your business operates.
            </p>
            <div className="flex gap-3">
              <Link to="/quote" className="btn-primary">Discuss Your Project</Link>
              <Link to="/contact" className="btn-secondary">Talk to Us</Link>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-hh-red/10 blur-[80px] rounded-full" />
            <div className="relative z-10 grid grid-cols-2 gap-4 p-4">
              {[Server, Database, Globe, Lock].map((Icon, i) => (
                <div key={i} className="glass-card p-6 rounded-xl flex items-center justify-center"><Icon size={40} className="text-hh-red" /></div>
              ))}
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-center">What We Develop</h2>
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
          <h3 className="font-bold text-lg mb-4">Systems We've Built</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {['Inventory & Stock Management', 'Point of Sale (POS) Systems', 'HR & Payroll Platforms', 'School Management Systems', 'Property Management Software', 'Customer Relationship Management (CRM)', 'Booking & Scheduling Platforms', 'E-commerce Stores'].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm text-white/70">
                <CheckCircle size={16} className="text-hh-red shrink-0" />{item}
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="p-8 text-center border-hh-red/20">
          <h2 className="text-2xl font-bold mb-3">Need Custom Software?</h2>
          <p className="text-white/50 mb-6">Tell us your requirements — we'll design and build it.</p>
          <Link to="/quote" className="btn-primary inline-flex items-center gap-2">Get a Free Quote <ArrowRight size={16} /></Link>
        </GlassCard>
      </div>
    </div>
  )
}
