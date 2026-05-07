import { Link } from 'react-router-dom'
import { Wifi, Cable, Radio, Router, CheckCircle, ArrowRight, Phone, Zap, Globe, Shield, Layers } from 'lucide-react'
import GlassCard from '../../components/GlassCard'

const features = [
  { icon: Radio, title: 'Starlink Installation', desc: 'Professional satellite dish mounting, alignment, and full network integration for home and business.' },
  { icon: Wifi, title: 'Wi-Fi Extenders & Mesh Systems', desc: 'Eliminate dead zones with enterprise-grade mesh systems and range extenders.' },
  { icon: Cable, title: 'Structured Cabling', desc: 'Clean Cat6 cable runs, wall sockets, patch panels, and cable management for offices and sites.' },
  { icon: Router, title: 'Router & Switch Setup', desc: 'Configuration of routers, managed switches, and PoE devices for reliable wired networking.' },
  { icon: Layers, title: 'Network Poles & Brackets', desc: 'Custom pole mounting and bracket fabrication for outdoor antennas and dishes.' },
  { icon: Shield, title: 'Network Security', desc: 'Firewall setup, VLAN segmentation, and secure guest network configuration.' },
]

const plans = [
  {
    id: 1,
    name: 'Starlink Installation',
    subtitle: 'Standard — no additional hardware',
    price: 'From BWP 450',
    period: '/ installation',
    featured: false,
    note: 'Customer must supply Starlink kit. This is Labour & alignment only.',
    features: [
      'Dish mounting & alignment',
      'Cable routing to router',
      'App setup & speed test',
      'Sky obstruction check',
    ],
    image: '/images/starlink-install.png',
    cta: 'Book Installation',
  },
  {
    id: 2,
    name: 'Brackets & Accessories',
    subtitle: 'Network Poles, Starlink Brackets, Routers',
    price: 'From BWP 699',
    period: '/ mini bracket',
    featured: false,
    note: null,
    features: [
      'Custom wall & pole brackets',
      'Starlink tilt & flat mounts',
      'Outdoor network poles',
      'Routers & access points',
    ],
    image: null,
    cta: 'Get a Quote',
  },
  {
    id: 3,
    name: 'Network Installation',
    subtitle: 'Installation per point',
    price: 'From BWP 399',
    period: '/ point',
    featured: true,
    note: 'Price per network point / wall socket run.',
    features: [
      'Running Cat6 cable per point',
      'Wall socket termination',
      'Patch panel wiring',
      'Cable labelling & testing',
    ],
    image: null,
    cta: 'Get This Plan',
  },
  {
    id: 4,
    name: 'Network Accessories',
    subtitle: 'Wi-Fi Routers, Switches, PoE, Cat6 Cable',
    price: 'Contact for Pricing',
    period: '',
    featured: false,
    note: null,
    features: [
      'Wi-Fi routers & mesh kits',
      'Managed & unmanaged switches',
      'PoE injectors & switches',
      'Cat6 cable reels & patch leads',
    ],
    image: null,
    cta: 'Get This Plan',
  },
  {
    id: 5,
    name: 'Radio Link Installation / Configuration',
    subtitle: 'Radio Link Installation per point',
    price: 'From BWP 550',
    period: '/ point',
    featured: false,
    note: 'Price per Radio link / wall socket run.',
    features: [
      'Cat6 cable per point',
      'mounting pole / bracket',
      'Wall socket termination',
      'Patch panel wiring',
      'Cable labelling & testing',
    ],
    image: null,
    cta: 'Get Started',
  },
];

const stats = [
  { icon: Globe, value: '350 Mbps', label: 'Starlink speeds we\'ve tested' },
  { icon: Wifi, value: '100+', label: 'Networks installed' },
  { icon: Zap, value: '4hr', label: 'Priority response SLA' },
  { icon: Cable, value: '10km+', label: 'Cable runs completed' },
]

export default function NetworkService() {
  return (
    <div className="min-h-screen bg-hh-bg-primary grid-bg pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-hh-red/30 bg-hh-red/10 text-xs font-medium text-hh-red mb-4">
              <Wifi size={12} /> Network Solutions
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
              Professional Network<br /><span className="gradient-text-red">Installation & Setup</span>
            </h1>
            <p className="text-white/60 leading-relaxed mb-6">
              From Starlink satellite internet and mesh Wi-Fi systems to full structured cabling — we design and install networks that keep Botswana businesses connected and running fast.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/quote" className="btn-primary inline-flex items-center gap-2">
                Get a Quote <ArrowRight size={16} />
              </Link>
              <a href="tel:+26774170800" className="btn-secondary flex items-center gap-2">
                <Phone size={16} /> Call Now
              </a>
            </div>
          </div>

          {/* Starlink hero image */}
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-hh-red/10 blur-[80px] rounded-full" />
            <div className="relative z-10 rounded-2xl overflow-hidden w-full max-h-72 lg:max-h-80">
              <img
                src="/images/starlink-install.png"
                alt="Starlink Installation — 350 Mbps"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hh-bg-primary/60 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <div className="bg-black/60 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-2">
                  <p className="text-xs text-white/50 leading-none mb-0.5">Live speed test</p>
                  <p className="text-lg font-bold text-white leading-none">350 Mbps</p>
                </div>
                <div className="bg-black/60 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-2">
                  <p className="text-xs text-white/50 leading-none mb-0.5">Status</p>
                  <p className="text-sm font-bold text-green-400 leading-none">Aligned ✓</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((s) => (
            <GlassCard key={s.label} className="p-5 text-center">
              <div className="flex justify-center mb-2">
                <div className="h-9 w-9 rounded-lg bg-hh-red/15 flex items-center justify-center text-hh-red">
                  <s.icon size={18} />
                </div>
              </div>
              <div className="text-xl font-bold gradient-text-red mb-1">{s.value}</div>
              <div className="text-xs text-white/40 leading-snug">{s.label}</div>
            </GlassCard>
          ))}
        </div>

        {/* What we offer */}
        <h2 className="text-2xl font-bold mb-6 text-center">Network Services We Offer</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((f) => (
            <GlassCard key={f.title} className="p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-hh-red/15 text-hh-red mb-4">
                <f.icon size={22} />
              </div>
              <h3 className="font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{f.desc}</p>
            </GlassCard>
          ))}
        </div>

        {/* Pricing Plans */}
        <h2 className="text-2xl font-bold mb-3 text-center">Network Pricing Plans</h2>
        <p className="text-center text-white/50 mb-10 max-w-xl mx-auto text-sm">
          Transparent pricing for every type of network job — from a single Starlink install to a full office cabling project.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {plans.map((plan) => (
            <GlassCard
              key={plan.id}
              className={`flex flex-col overflow-hidden ${plan.featured ? 'border-hh-red/40 shadow-red-glow' : 'border-white/10'}`}
            >
              {/* Image only for Starlink plan */}
              {plan.image && (
                <div className="h-40 overflow-hidden relative shrink-0">
                  <img
                    src={plan.image}
                    alt={plan.name}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-hh-bg-secondary/90 to-transparent" />
                  <div className="absolute bottom-2 left-3 flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[10px] text-green-400 font-medium">350 Mbps tested</span>
                  </div>
                </div>
              )}

              <div className="p-5 flex flex-col flex-1">
                {plan.featured && (
                  <div className="mb-3 text-xs font-semibold text-hh-red uppercase tracking-wider">Most Popular</div>
                )}

                {/* Plan number badge */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-6 w-6 rounded-full bg-hh-red/15 border border-hh-red/30 flex items-center justify-center text-[10px] font-bold text-hh-red shrink-0">
                    {plan.id}
                  </div>
                  <h3 className="font-semibold text-sm leading-snug">{plan.name}</h3>
                </div>

                <p className="text-[11px] text-white/40 mb-3 leading-snug">{plan.subtitle}</p>

                <div className="mb-1">
                  <span className="text-xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-xs text-white/40">{plan.period}</span>}
                </div>

                {plan.note && (
                  <p className="text-[10px] text-hh-red/70 mb-4 leading-snug italic">{plan.note}</p>
                )}
                {!plan.note && <div className="mb-4" />}

                <ul className="space-y-2 mb-6 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-white/60">
                      <CheckCircle size={12} className="text-hh-red shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/quote"
                  className={`block text-center text-xs font-medium py-2.5 rounded-md transition-all mt-auto ${
                    plan.featured
                      ? 'bg-gradient-to-r from-hh-red to-red-700 text-white hover:brightness-110'
                      : 'border border-white/10 text-white hover:bg-white/5'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* CTA */}
        <GlassCard className="p-8 text-center border-hh-red/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-hh-red/5 via-transparent to-hh-red/5" />
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-3">Ready to Get Connected?</h2>
            <p className="text-white/50 mb-6 max-w-md mx-auto">
              Whether it's a Starlink install, office Wi-Fi, or a full cable run — our team is on the ground in Gaborone and beyond.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+26774170800" className="btn-secondary inline-flex items-center gap-2">
                <Phone size={16} /> +267 74 170 800
              </a>
              <Link to="/quote" className="btn-primary inline-flex items-center gap-2">
                Request a Quote <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </GlassCard>

      </div>
    </div>
  )
}
