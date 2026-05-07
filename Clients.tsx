import { Link } from 'react-router-dom'
import { Star, Quote, ArrowRight, Users, TrendingUp, Award } from 'lucide-react'
import GlassCard from '../components/GlassCard'

const clients = [
  { name: 'Hawkers Cash & Carry', industry: 'Retail / Wholesale', initials: 'HC', color: 'from-green-700 to-green-900', service: 'CCTV & ICT Infrastructure', since: '2022' },
  { name: 'Cappuccinos Italian Grill', industry: 'Hospitality', initials: 'CA', color: 'from-amber-700 to-amber-900', service: 'CCTV & Network Setup', since: '2023' },
  { name: 'AB Midas', industry: 'Automotive', initials: 'AM', color: 'from-red-700 to-red-900', service: 'ICT Support', since: '2022' },
  { name: 'Tlotlo Hotel & Conference', industry: 'Hospitality', initials: 'TL', color: 'from-indigo-700 to-indigo-900', service: 'Security & IT Systems', since: '2023' },
  { name: 'Shell', industry: 'Energy / Retail', initials: 'SH', color: 'from-yellow-600 to-yellow-800', service: 'CCTV Surveillance', since: '2022' },
  { name: 'Total', industry: 'Energy / Retail', initials: 'TO', color: 'from-blue-700 to-blue-900', service: 'Security Systems', since: '2022' },
  { name: 'Caltex', industry: 'Energy / Retail', initials: 'CX', color: 'from-red-600 to-red-900', service: 'CCTV & Network', since: '2023' },
  { name: 'Supa Save Supermarkets', industry: 'Retail', initials: 'SS', color: 'from-orange-700 to-orange-900', service: 'IT Infrastructure', since: '2022' },
  { name: 'Builders World', industry: 'Hardware Retail', initials: 'BW', color: 'from-slate-600 to-slate-800', service: 'Security Systems', since: '2023' },
  { name: 'Northern Fixtures', industry: 'Fixtures & Fittings', initials: 'NF', color: 'from-teal-700 to-teal-900', service: 'ICT Support', since: '2023' },
  { name: 'MW Packaging', industry: 'Packaging', initials: 'MW', color: 'from-blue-600 to-blue-900', service: 'Software & IT', since: '2024' },
  { name: 'Health Generation', industry: 'Healthcare', initials: 'HG', color: 'from-green-600 to-green-800', service: 'Network Setup', since: '2023' },
  { name: 'Kebabish Restaurant', industry: 'Food & Beverage', initials: 'KB', color: 'from-red-800 to-gray-900', service: 'CCTV & POS', since: '2023' },
  { name: 'Chow Time', industry: 'Fast Food', initials: 'CT', color: 'from-orange-600 to-red-800', service: 'CCTV Surveillance', since: '2024' },
  { name: 'Panda', industry: 'Retail', initials: 'PA', color: 'from-gray-700 to-gray-900', service: 'IT Support', since: '2023' },
  { name: 'African Agriculture', industry: 'Agriculture', initials: 'AA', color: 'from-green-700 to-lime-800', service: 'Network & Software', since: '2024' },
  { name: 'Sino Power', industry: 'Engineering', initials: 'SP', color: 'from-blue-800 to-blue-900', service: 'ICT Infrastructure', since: '2023' },
  { name: 'MANCOSA', industry: 'Education', initials: 'MC', color: 'from-green-800 to-teal-900', service: 'Network & IT Support', since: '2022' },
  { name: 'Moraka 4x4', industry: 'Automotive', initials: 'M4', color: 'from-yellow-700 to-amber-900', service: 'Security Systems', since: '2024' },
  { name: 'Clean Force', industry: 'Cleaning Services', initials: 'CF', color: 'from-cyan-700 to-cyan-900', service: 'ICT Support', since: '2024' },
  { name: 'Senn Foods', industry: 'Food & Beverage', initials: 'SF', color: 'from-red-700 to-rose-900', service: 'CCTV & IT', since: '2023' },
  { name: 'Craney Enterprises', industry: 'Automotive', initials: 'CE', color: 'from-blue-700 to-indigo-900', service: 'CCTV Installation', since: '2024' },
  { name: 'Impact Adv & Marketing', industry: 'Marketing', initials: 'IM', color: 'from-purple-700 to-purple-900', service: 'Branding & Software', since: '2024' },
  { name: 'Twinzy Hardware', industry: 'Hardware', initials: 'TW', color: 'from-slate-700 to-slate-900', service: 'Security & ICT', since: '2023' },
  { name: 'Nero', industry: 'Hospitality', initials: 'NE', color: 'from-gray-800 to-gray-900', service: 'Network Setup', since: '2024' },
  { name: 'GB Enterprises', industry: 'Business Services', initials: 'GB', color: 'from-green-700 to-green-900', service: 'IT Support', since: '2023' },
  { name: 'Puma', industry: 'Energy / Retail', initials: 'PU', color: 'from-red-700 to-red-900', service: 'CCTV & Network', since: '2023' },
  { name: 'Chicken Xpress', industry: 'Fast Food', initials: 'CX2', color: 'from-red-600 to-orange-800', service: 'POS & CCTV', since: '2024' },
  { name: 'Auto Boost', industry: 'Automotive', initials: 'AB', color: 'from-gray-700 to-slate-900', service: 'ICT & Security', since: '2024' },
  { name: 'Dahua Technology', industry: 'Technology Partner', initials: 'DH', color: 'from-blue-600 to-blue-900', service: 'CCTV Partner', since: '2022' },
]

const testimonials = [
  { name: 'Kagiso Molefe', role: 'CEO, BW Retail Group', text: 'Helpful Handlers transformed our customer experience with an AI chatbot that now handles 80% of our inquiries. The team was professional, fast, and truly understood our needs.', rating: 5 },
  { name: 'Thabo Sithole', role: 'Operations Manager, Hawkers Cash & Carry', text: 'The CCTV and ICT audit was seamless. High-quality documentation, professional service, and they followed up to make sure everything was running perfectly.', rating: 5 },
  { name: 'Mpho Dlamini', role: 'Manager, Cappuccinos Italian Grill', text: 'Our CCTV network and Starlink setup exceeded expectations. The team delivered clean infrastructure and were available whenever we needed support.', rating: 5 },
  { name: 'Neo Kgosidintsi', role: 'Director, MANCOSA', text: 'The network infrastructure they put in place is rock solid. Professional team, clean cabling, and outstanding post-installation support. Worth every thebe.', rating: 5 },
  { name: 'Boipelo Sechele', role: 'Owner, Moraka 4x4', text: 'Our security system has saved us multiple times. Helpful Handlers knew exactly what we needed and delivered ahead of schedule. Highly recommend.', rating: 5 },
  { name: 'Lesedi Tau', role: 'Owner, Chow Time', text: 'Professional installation, great cameras, and their maintenance retainer means we never worry about downtime. An asset to any business.', rating: 5 },
]

const stats = [
  { value: '100+', label: 'Happy Clients', icon: Users },
  { value: '50+', label: 'Projects Completed', icon: TrendingUp },
  { value: '5★', label: 'Average Rating', icon: Star },
  { value: '10+', label: 'Years Experience', icon: Award },
]

export default function Clients() {
  return (
    <div className="min-h-screen bg-hh-bg-primary grid-bg pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-hh-red/30 bg-hh-red/10 text-xs font-medium text-hh-red mb-4">
            Our Client Family
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            100+ Businesses That <span className="gradient-text-red">Trust Us</span>
          </h1>
          <p className="text-white/50 max-w-xl mx-auto">
            From retail and hospitality to fuel stations and education — over a decade of powering Botswana businesses with technology.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((s) => (
            <GlassCard key={s.label} className="p-5 text-center">
              <s.icon size={20} className="text-hh-red mx-auto mb-2" />
              <div className="text-2xl font-bold gradient-text-red mb-1">{s.value}</div>
              <div className="text-xs text-white/50">{s.label}</div>
            </GlassCard>
          ))}
        </div>

        {/* Client Grid */}
        <h2 className="text-2xl font-bold mb-6">Our Clients</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {clients.map((c) => (
            <GlassCard key={c.name} className="p-5 flex items-center gap-4">
              <div className={`h-14 w-14 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center text-white font-bold text-lg shrink-0`}>
                {c.initials}
              </div>
              <div>
                <p className="font-semibold text-sm">{c.name}</p>
                <p className="text-xs text-white/40">{c.industry}</p>
                <p className="text-xs text-hh-red mt-1">{c.service}</p>
                <p className="text-xs text-white/30">Client since {c.since}</p>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Testimonials */}
        <h2 className="text-2xl font-bold mb-6">What They Say</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((t) => (
            <GlassCard key={t.name} className="p-6">
              <Quote size={18} className="text-hh-red/40 mb-3" />
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={13} className="text-hh-gold fill-hh-gold" />
                ))}
              </div>
              <p className="text-sm text-white/70 leading-relaxed mb-5 italic">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3 pt-3 border-t border-white/[0.06]">
                <div className="h-8 w-8 rounded-full bg-hh-red/20 border border-hh-red/30 flex items-center justify-center text-xs font-bold text-hh-red">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-xs font-medium">{t.name}</p>
                  <p className="text-xs text-white/40">{t.role}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* CTA */}
        <GlassCard className="p-8 text-center border-hh-red/20">
          <h2 className="text-2xl font-bold mb-3">Join Our Growing Client Family</h2>
          <p className="text-white/50 mb-6 max-w-md mx-auto">
            Become the next Botswana business powered by Helpful Handlers.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/showcase" className="btn-secondary">See Our Projects</Link>
            <Link to="/quote" className="btn-primary inline-flex items-center gap-2">Get Started <ArrowRight size={16} /></Link>
          </div>
        </GlassCard>
      </div>
    </div>
  )
}
