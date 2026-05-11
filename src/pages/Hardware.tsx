import { Link } from 'react-router-dom'
import { Check, Phone, ShoppingCart, Video, Sun, Cable } from 'lucide-react'
import GlassCard from '../components/GlassCard'

const products = [
  {
    name: 'Dahua 16-Channel CCTV System',
    desc: '4TB HDD, 16 Cameras, Power Supply & 200m Cable',
    price: 'P 22 799',
    image: '/images/cctv-16ch.jpg',
  },
  {
    name: 'Dahua 8-Channel CCTV System',
    desc: '2TB HDD, 8 Cameras, Power Supply & 100m Cable',
    price: 'P 13 799',
    image: '/images/cctv-8ch.jpg',
  },
  {
    name: 'Dahua 4-Channel CCTV System',
    desc: 'Compact security solution',
    price: 'P 8 899',
    image: '/images/cctv-4ch.jpg',
  },
]

const essentials = [
  { name: 'Solar Solutions', desc: 'Solar Light (80, 100, 200, 300W)', price: 'from P 299', image: '/images/solar-light.jpg', icon: Sun },
  { name: 'Cellphone Accessories', desc: 'Cases, chargers, cables', price: 'from P 100', image: '/images/networking-cables.jpg', icon: Phone },
  { name: 'PC Accessories', desc: 'Professional Accessories for your PC', price: 'from P 299', image: '/images/lab-2.jpg', icon: Check },
  { name: 'VGA Adapters', desc: 'Display adapters and converters', price: 'from P 399', image: '/images/networking-cables.jpg', icon: Cable },
  { name: 'DisplayPort Cable', desc: 'High-quality video cables', price: 'from P 250', image: '/images/networking-cables.jpg', icon: Cable },
]

export default function Hardware() {
  return (
    <div className="min-h-screen bg-hh-bg-primary grid-bg pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-hh-red/30 bg-hh-red/10 text-xs font-medium text-hh-red mb-4">
            <ShoppingCart size={12} /> CCTV & Hardware Gallery
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            CCTV & <span className="gradient-text-red">Hardware</span> Gallery
          </h1>
          <p className="text-white/50 max-w-2xl mx-auto">
            Explore high-end Dahua CCTV, solar solutions, and professional networking equipment. All your ICT needs under one roof.
          </p>
        </div>

        {/* Category quick links */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { icon: Video, label: 'CCTV Special', href: '#cctv' },
            { icon: Sun, label: 'Solar & Networking', href: '#solar' },
          ].map((c) => (
            <a key={c.label} href={c.href} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-sm text-white/60 hover:text-white hover:border-hh-red/40 transition-all">
              <c.icon size={14} className="text-hh-red" />
              {c.label}
            </a>
          ))}
        </div>

        {/* CCTV Special */}
        <h2 id="cctv" className="text-2xl font-bold mb-6 flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-hh-red/15 flex items-center justify-center">
            <Video size={16} className="text-hh-red" />
          </div>
          CCTV Special
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {products.map((p) => (
            <GlassCard key={p.name} className="overflow-hidden group">
              <div className="h-52 overflow-hidden relative">
                <img 
                  src={p.image} 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${p.name}/600/400`
                  }}
                  alt={p.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hh-bg-secondary/80 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-base mb-1">{p.name}</h3>
                <p className="text-sm text-white/50 mb-4">{p.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold gradient-text-red">{p.price}</span>
                  <Link to={`/quote?service=${p.name}`} className="text-xs font-medium text-hh-red hover:text-white transition-colors border border-hh-red/30 hover:bg-hh-red px-3 py-1.5 rounded-full">
                    Get Quote
                  </Link>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Solar & Networking Essentials */}
        <h2 id="solar" className="text-2xl font-bold mb-6 flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-hh-red/15 flex items-center justify-center">
            <Sun size={16} className="text-hh-red" />
          </div>
          Solar & Networking Essentials
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {essentials.map((e) => (
            <GlassCard key={e.name} className="overflow-hidden group">
              <div className="h-44 overflow-hidden relative">
                <img 
                  src={e.image} 
                  onError={(img) => {
                    (img.target as HTMLImageElement).src = `https://picsum.photos/seed/${e.name}/600/400`
                  }}
                  alt={e.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hh-bg-secondary/80 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <div className="h-7 w-7 rounded-md bg-hh-red/80 flex items-center justify-center">
                    <e.icon size={13} className="text-white" />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold mb-1">{e.name}</h3>
                <p className="text-sm text-white/50 mb-4">{e.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-hh-red">{e.price}</span>
                  <Link to={`/quote?service=${e.name}`} className="text-xs font-medium text-hh-red hover:text-white transition-colors border border-hh-red/30 hover:bg-hh-red px-3 py-1.5 rounded-full">
                    Enquire
                  </Link>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
          {['Microsoft Partner', 'Windows Authorized', 'Dahua Certified', 'Botswana-Based'].map((badge) => (
            <div key={badge} className="flex items-center gap-2 text-white/30">
              <Check size={14} className="text-hh-red" />
              <span className="text-sm font-medium">{badge}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <GlassCard className="p-8 text-center border-hh-red/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-hh-red/5 via-transparent to-hh-red/5" />
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 text-left md:text-left">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-3 text-center md:text-left">Need help choosing the right hardware?</h2>
              <p className="text-white/50 mb-6 max-w-md mx-auto md:mx-0">
                Our team will advise on the best setup for your site size and budget.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <a href="tel:+26774170800" className="btn-secondary inline-flex items-center gap-2">
                  <Phone size={16} /> +267 74 170 800
                </a>
                <Link to="/quote?service=Hardware Gallery" className="btn-primary inline-flex items-center gap-2">
                  <ShoppingCart size={16} /> Get a Quote
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="/images/mascot-hero.png" 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://api.dicebear.com/7.x/bottts/svg?seed=HH-hardware&backgroundColor=b6e3f4'
                }}
                alt="Helpful Handlers Mascot" 
                className="h-32 w-auto animate-float"
              />
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Contact floater */}
      <div className="fixed bottom-6 right-6 glass-nav rounded-xl border border-white/10 p-4 max-w-xs z-40 shadow-xl">
        <div className="flex items-center gap-3">
          <img 
            src="/images/mascot-avatar.png" 
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://api.dicebear.com/7.x/bottts/svg?seed=HH-support&backgroundColor=b6e3f4'
            }}
            alt="Support" 
            className="w-10 h-10 rounded-full object-cover" 
          />
          <div>
            <p className="text-xs text-white/50">Need help choosing hardware?</p>
            <div className="flex items-center gap-1 text-sm font-medium text-white">
              <Phone size={12} className="text-hh-red" />
              <span>+267 74 170 800</span>
            </div>
            <p className="text-xs text-white/30">helpfulhandlersbw@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}
