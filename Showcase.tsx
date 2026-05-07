import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ExternalLink, Globe, Smartphone, Palette, Image, Lock, ArrowRight } from 'lucide-react'
import GlassCard from '../components/GlassCard'

type Category = 'all' | 'apps' | 'software' | 'websites' | 'logos' | 'flyers'

interface ShowcaseItem {
  id: number
  cat: Category
  title: string
  desc: string
  tags: string[]
  icon: React.ComponentType<{ size?: number; className?: string }>
  status: string
  price: string
  url?: string
}

const items: ShowcaseItem[] = [
  { id: 1, cat: 'apps', title: 'Checkit Pro App', desc: 'Checkit Pro — Intelligent CCTV Storage Calculator. Quickly determine exact hard drive requirements for your security cameras. Supports resolution, bitrate, retention period, and recording modes. Generate professional quotes and reports in seconds.', tags: ['Storage Planning', 'Utilities', 'Security'], icon: Smartphone, status: 'live', price: 'free', url: 'https://checkit-prov1.netlify.app/' },
  { id: 2, cat: 'apps', title: 'Wifi Ghost', desc: "Our Story: We're a tiny team of developers who got frustrated with complicated apps that promise the world but feel like a chore to use. So we decided to build something different – an app that's simple, fast, and actually makes your life easier. No ads, no subscriptions, no hidden fees. Just clean tools that work the way you do. Every feature started as something we needed for ourselves. If this app has saved you time or made your day easier, consider supporting our spectral research.", tags: ['Clean UI', 'Productivity', 'No-Ads'], icon: Smartphone, status: 'live', price: 'free', url: 'https://wifi-ghost.netlify.app/' },
  { id: 3, cat: 'software', title: 'Inventory Pro BW', desc: 'Stock and inventory management system with barcode scanning and automated reorder alerts.', tags: ['Web App', 'Dashboard', 'Reports'], icon: Globe, status: 'live', price: 'paid' },
  { id: 4, cat: 'software', title: 'Booking Manager', desc: 'Appointment and reservation platform for salons, clinics, and service businesses.', tags: ['Web App', 'SMS', 'Calendar'], icon: Globe, status: 'live', price: 'free' },
  { id: 5, cat: 'websites', title: 'Helpful Handlers BW', desc: 'Based in the heart of Botswana, Helpful Handlers BW has established itself as a versatile ICT company dedicated to bridging the gap between complex technology and everyday business needs.', tags: ['ICT Company', 'Botswana', 'Corporate'], icon: Globe, status: 'live', price: 'free', url: 'https://helpfulhandlersbw.netlify.app/' },
  { id: 6, cat: 'websites', title: 'Sky Gate Motors', desc: 'Modern dealership website with vehicle listings, inquiry forms, and WhatsApp integration.', tags: ['Website', 'Responsive', 'SEO'], icon: Globe, status: 'live', price: 'free' },
  { id: 7, cat: 'websites', title: 'Maun Wellness Centre', desc: 'Professional wellness centre site with service listings, booking, and gallery.', tags: ['Website', 'Booking', 'Gallery'], icon: Globe, status: 'live', price: 'free' },
  { id: 8, cat: 'logos', title: 'BW Retail Group Identity', desc: 'Full brand identity including logo, color palette, typography, and brand guidelines.', tags: ['Logo', 'Branding', 'Print'], icon: Palette, status: 'done', price: 'paid' },
  { id: 9, cat: 'logos', title: 'TechFlow Startup Branding', desc: 'Modern tech startup logo and brand kit with icon and wordmark variations.', tags: ['Logo', 'Icon', 'Brand Kit'], icon: Palette, status: 'done', price: 'paid' },
  { id: 10, cat: 'flyers', title: 'Grand Opening Flyer Pack', desc: 'Set of 3 promotional flyers for a retail grand opening event — print and digital.', tags: ['Flyer', 'Print', 'Digital'], icon: Image, status: 'done', price: 'free' },
]

const cats: { key: Category; label: string }[] = [
  { key: 'all', label: 'All Work' },
  { key: 'apps', label: 'Apps' },
  { key: 'software', label: 'Software' },
  { key: 'websites', label: 'Websites' },
  { key: 'logos', label: 'Logos & Branding' },
  { key: 'flyers', label: 'Flyers & Graphics' },
]

export default function Showcase() {
  const [active, setActive] = useState<Category>('all')
  const filtered = active === 'all' ? items : items.filter((i) => i.cat === active)

  return (
    <div className="min-h-screen bg-hh-bg-primary grid-bg pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-hh-red/30 bg-hh-red/10 text-xs font-medium text-hh-red mb-4">
            Our Portfolio
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Browse Our <span className="gradient-text-red">Projects</span>
          </h1>
          {active === 'websites' ? (
            <p className="text-white/80 max-w-2xl mx-auto italic border-l-2 border-hh-red pl-4 py-2 bg-hh-red/5 rounded-r-lg">
              Based in the heart of Botswana, Helpful Handlers BW has established itself as a versatile ICT company dedicated to bridging the gap between complex technology and everyday business needs.
            </p>
          ) : (
            <p className="text-white/50 max-w-xl mx-auto">
              Applications, software, websites, logos, and designs — see what we've built for businesses across Botswana.
            </p>
          )}
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {cats.map((c) => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                active === c.key
                  ? 'bg-hh-red text-white'
                  : 'border border-white/10 text-white/60 hover:text-white hover:border-white/20'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filtered.map((item) => (
            <GlassCard key={item.id} className="p-6 group flex flex-col h-full">
              <div className="flex items-start justify-between mb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-hh-red/15 text-hh-red">
                  <item.icon size={22} />
                </div>
                <div className="flex gap-2">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    item.price === 'free'
                      ? 'bg-green-500/20 text-green-400 border border-green-500/20'
                      : 'bg-hh-red/20 text-hh-red border border-hh-red/20'
                  }`}>
                    {item.price === 'free' ? 'Free' : 'Paid'}
                  </span>
                </div>
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed mb-4 flex-1">{item.desc}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {item.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded bg-white/[0.05] text-white/40 border border-white/[0.06]">{t}</span>
                ))}
              </div>
              <div className="flex items-center justify-between mt-auto">
                <span className="flex items-center gap-1.5 text-xs text-white/30">
                  <span className={`w-1.5 h-1.5 rounded-full ${item.status === 'live' ? 'bg-green-400' : 'bg-white/30'}`} />
                  {item.status === 'live' ? 'Live' : 'Completed'}
                </span>
                {item.url ? (
                  <a 
                    href={item.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-hh-red hover:underline"
                  >
                    <ExternalLink size={12} /> View Project
                  </a>
                ) : (
                  (item.cat === 'apps' || item.cat === 'software' || item.cat === 'websites') && (
                    <div className="flex items-center gap-1 text-xs text-hh-red/50 cursor-not-allowed">
                      <ExternalLink size={12} /> Confidential
                    </div>
                  )
                )}
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Custom request CTA */}
        <GlassCard className="p-8 text-center border-hh-red/20">
          <Lock size={28} className="text-hh-red mx-auto mb-3" />
          <h2 className="text-2xl font-bold mb-3">Want Something Built for You?</h2>
          <p className="text-white/50 mb-6 max-w-md mx-auto">
            Every project above started with a conversation. Tell us your idea — we'll make it real.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/clients" className="btn-secondary inline-flex items-center gap-2">Meet Our Clients</Link>
            <Link to="/quote" className="btn-primary inline-flex items-center gap-2">Start Your Project <ArrowRight size={16} /></Link>
          </div>
        </GlassCard>
      </div>
    </div>
  )
}
