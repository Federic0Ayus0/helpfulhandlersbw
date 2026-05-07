import { Link } from 'react-router-dom'
import { Palette, Layout, Image, FileText, Globe, Star, CheckCircle, ArrowRight, Layers } from 'lucide-react'
import GlassCard from '../../components/GlassCard'

const services = [
  { icon: Palette, title: 'Brand Identity & Logos', desc: 'Memorable logos and brand kits that communicate your business values.' },
  { icon: Layout, title: 'UI/UX Design', desc: 'User-friendly interface design for websites and mobile apps.' },
  { icon: Image, title: 'Flyers & Posters', desc: 'Eye-catching marketing materials for print and digital.' },
  { icon: Globe, title: 'Website Design', desc: 'Professional website designs that convert visitors to customers.' },
  { icon: FileText, title: 'Business Cards & Stationery', desc: 'Corporate identity materials that make a lasting impression.' },
  { icon: Layers, title: 'Social Media Graphics', desc: 'On-brand content and templates for Facebook, Instagram, and more.' },
]

const portfolio = [
  { label: 'Logos Designed', count: '30+' },
  { label: 'Websites Built', count: '20+' },
  { label: 'Flyers & Posters', count: '100+' },
  { label: 'Happy Clients', count: '30+' },
]

export default function DesignService() {
  return (
    <div className="min-h-screen bg-hh-bg-primary grid-bg pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-hh-red/30 bg-hh-red/10 text-xs font-medium text-hh-red mb-4">
              <Palette size={12} /> Design
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
              Design That Makes Your<br /><span className="gradient-text-red">Brand Unforgettable</span>
            </h1>
            <p className="text-white/60 leading-relaxed mb-6">
              First impressions matter. We create stunning brand identities, marketing materials, and digital designs that help Botswana businesses look professional and stand out from the crowd.
            </p>
            <div className="flex gap-3">
              <Link to="/quote" className="btn-primary">Start a Design Project</Link>
              <Link to="/showcase" className="btn-secondary">See Our Portfolio</Link>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-hh-red/10 blur-[80px] rounded-full" />
            <div className="relative z-10 grid grid-cols-2 gap-3 p-4">
              {[Palette, Layout, Image, Globe].map((Icon, i) => (
                <div key={i} className="glass-card p-6 rounded-xl flex flex-col items-center gap-2">
                  <Icon size={36} className="text-hh-red" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {portfolio.map((p) => (
            <GlassCard key={p.label} className="p-5 text-center">
              <div className="text-3xl font-bold gradient-text-red mb-1">{p.count}</div>
              <div className="text-xs text-white/50">{p.label}</div>
            </GlassCard>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-6 text-center">Design Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((s) => (
            <GlassCard key={s.title} className="p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-hh-red/15 text-hh-red mb-4"><s.icon size={22} /></div>
              <h3 className="font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{s.desc}</p>
            </GlassCard>
          ))}
        </div>

        <GlassCard className="p-8 mb-10">
          <div className="flex items-center gap-3 mb-4"><Star size={20} className="text-hh-red" /><h3 className="font-bold text-lg">Why Our Design Stands Out</h3></div>
          <div className="grid sm:grid-cols-2 gap-3">
            {['Designs tailored to your brand personality', 'Unlimited revisions until you\'re happy', 'All source files provided', 'Fast turnaround — logos in 48–72 hrs', 'Print-ready and digital-ready files', 'Local understanding of Botswana market'].map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm text-white/70">
                <CheckCircle size={16} className="text-hh-red mt-0.5 shrink-0" />{item}
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="p-8 text-center border-hh-red/20">
          <Palette size={32} className="text-hh-red mx-auto mb-3" />
          <h2 className="text-2xl font-bold mb-3">Ready for a Fresh Look?</h2>
          <p className="text-white/50 mb-6">Tell us about your brand — we'll create something you'll be proud of.</p>
          <Link to="/quote" className="btn-primary inline-flex items-center gap-2">Get a Design Quote <ArrowRight size={16} /></Link>
        </GlassCard>
      </div>
    </div>
  )
}
