import { Link } from 'react-router-dom'
import { Check, MapPin, Shield, Zap, Wrench, Headphones } from 'lucide-react'
import GlassCard from '../components/GlassCard'

const plans = [
  {
    name: 'STARTUP',
    price: 'BWP 3,500',
    period: '/ project',
    desc: 'Standard AI & App Support',
    features: [
      'Basic AI Integration (Chatbot Lite)',
      'Simple App Setup & Configuration',
      'Standard Support',
      'Initial Consultation & Setup',
      '3 Month Warranty',
    ],
    cta: 'Select Startup Plan',
    color: 'blue',
  },
  {
    name: 'BUSINESS',
    price: 'BWP 24,000',
    period: '/ project',
    desc: 'Professional AI Integration, Full App Dev, & CCTV',
    features: [
      'Advanced AI Chatbots & Automation',
      'Custom Mobile & Web App Development',
      'Intelligent CCTV & Security Solutions',
      'Priority Support & Maintenance',
      'Monthly Analytics & Reporting',
      '6 Month Warranty',
    ],
    cta: 'Select Business Plan',
    color: 'red',
    recommended: true,
  },
  {
    name: 'ENTERPRISE',
    price: 'Custom Pricing',
    period: '',
    desc: 'Custom Software, Solar Energy Solutions, & Dedicated Support',
    features: [
      'Bespoke Software Solutions',
      'Solar Energy System Design & Integration',
      'Dedicated Project Manager',
      '24/7 Premium Support',
      'Scalable Infrastructure & Security',
      '12 Month Warranty',
    ],
    cta: 'Contact for Enterprise',
    color: 'gold',
  },
]

const whyUs = [
  { icon: MapPin, label: 'Botswana-Based Expertise' },
  { icon: Zap, label: 'Cutting-Edge Technology' },
  { icon: Wrench, label: 'Tailored Solutions' },
  { icon: Headphones, label: 'Reliable Support' },
]

export default function Pricing() {
  return (
    <div className="min-h-screen bg-hh-bg-primary grid-bg pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">App Pricing Plans</h1>
          <p className="text-white/50 max-w-2xl mx-auto">
            Premium Solutions for AI Integration, Software Development, and Beyond in Botswana
          </p>
        </div>

        {/* Mascot speech bubble */}
        <div className="flex justify-end mb-8">
          <div className="flex items-start gap-3">
            <div className="glass-card px-4 py-3 rounded-xl rounded-tr-none">
              <p className="text-sm text-white/80">Find the perfect fit for your growth!</p>
            </div>
            <img src="/images/mascot-hero.png" alt="Mascot" className="w-14 h-14 object-contain object-bottom" />
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {plans.map((plan) => (
            <GlassCard
              key={plan.name}
              className={`p-6 ${plan.recommended ? 'border-hh-red/40 shadow-red-glow scale-[1.02]' : ''}`}
            >
              {plan.recommended && (
                <div className="mb-3 text-xs font-semibold text-white bg-hh-red px-3 py-1 rounded-full inline-block">
                  Recommended
                </div>
              )}
              <h3 className="text-sm font-semibold text-white/60 mb-2 tracking-wider">{plan.name}</h3>
              <div className="mb-2">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-sm text-white/50">{plan.period}</span>
              </div>
              <p className="text-sm text-white/50 mb-6">{plan.desc}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-white/70">
                    <Check size={16} className="text-hh-red mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to={`/quote?service=${plan.name}`}
                className={`block text-center text-sm font-medium py-3 rounded-lg transition-all ${
                  plan.color === 'red'
                    ? 'bg-gradient-to-r from-hh-red to-red-700 text-white hover:brightness-110'
                    : plan.color === 'gold'
                    ? 'bg-gradient-to-r from-hh-gold to-yellow-600 text-white hover:brightness-110'
                    : 'bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:brightness-110'
                }`}
              >
                {plan.cta}
              </Link>
            </GlassCard>
          ))}
        </div>

        {/* Why Choose */}
        <GlassCard className="p-6 mb-16">
          <div className="flex items-center gap-4 mb-4">
            <Shield size={20} className="text-hh-red" />
            <h3 className="font-semibold">Why Choose Helpful Handlers?</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whyUs.map((item) => (
              <div key={item.label} className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.03]">
                <item.icon size={18} className="text-hh-red" />
                <span className="text-sm text-white/70">{item.label}</span>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* CTA Banner */}
        <GlassCard className="p-8 text-center border-hh-red/20">
          <h2 className="text-2xl font-bold mb-3">Not sure which plan is right for you?</h2>
          <p className="text-white/50 mb-6 max-w-md mx-auto">
            Our team is happy to walk you through your options and create a custom solution tailored to your needs.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="btn-secondary">Talk to Us</Link>
            <Link to="/quote?service=Pricing Quote" className="btn-primary">Get a Free Quote</Link>
          </div>
        </GlassCard>

        {/* Monthly Retainer Plans */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Monthly Retainer Plans</h2>
            <p className="text-white/50 max-w-xl mx-auto text-sm">
              Sized for any site — from 4-camera setups to 32+ camera enterprise installations.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'Call-Out',
                subtitle: 'Pay Per Visit',
                price: 'From BWP 399',
                period: '/ visit',
                note: '+ P9.50 per km outside Gaborone',
                featured: false,
                tierClass: 'border-white/10',
                badgeClass: 'bg-gradient-to-r from-gray-600 to-gray-800',
                features: ['Remote support included', '1 on-site support', 'CCTV & ICT diagnostics'],
              },
              {
                name: 'Bronze',
                subtitle: 'Basic Cover 4ch',
                price: 'From BWP 850',
                period: '/ month',
                note: null,
                featured: false,
                tierClass: 'border-amber-700/30',
                badgeClass: 'bg-gradient-to-r from-amber-700 to-amber-900',
                features: ['Remote support included', '1 on-site visits/month', '1 on-site health check/month', 'CCTV diagnostics', 'Monthly status report', 'Priority 24hr response'],
              },
              {
                name: 'Silver 8',
                subtitle: 'Standard Cover',
                price: 'From BWP 2,400',
                period: '/ month',
                note: null,
                featured: true,
                tierClass: 'border-hh-red/40 shadow-red-glow',
                badgeClass: 'bg-gradient-to-r from-slate-400 to-slate-600',
                features: ['Remote support included', '2 on-site visits/month', '1 on-site health check/month', 'Monthly status report', 'Priority 24hr response'],
              },
              {
                name: 'Gold 16ch',
                subtitle: 'Premium Cover',
                price: 'From BWP 3,000',
                period: '/ month',
                note: null,
                featured: false,
                tierClass: 'border-yellow-500/30',
                badgeClass: 'bg-gradient-to-r from-yellow-500 to-yellow-700',
                features: ['24/7 monitoring alerts', 'Unlimited remote support', 'Monthly on-site visits', 'Full performance reports', 'Dedicated account manager', 'CCTV + UPS checks'],
              },
            ].map((tier) => (
              <GlassCard key={tier.name} className={`p-6 flex flex-col ${tier.tierClass}`}>
                {tier.featured && (
                  <div className="mb-3 text-xs font-semibold text-hh-red uppercase tracking-wider">Most Popular</div>
                )}
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold mb-3 ${tier.badgeClass} text-white w-fit`}>
                  {tier.name}
                </div>
                <p className="text-xs text-white/40 mb-3">{tier.subtitle}</p>
                <div className="mb-1">
                  <span className="text-xl font-bold">{tier.price}</span>
                  <span className="text-xs text-white/40">{tier.period}</span>
                </div>
                {tier.note
                  ? <p className="text-[10px] text-hh-red/80 mb-4 leading-snug">{tier.note}</p>
                  : <div className="mb-4" />
                }
                <ul className="space-y-2 mb-6 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-white/60">
                      <Check size={12} className="text-hh-red shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to={`/quote?service=${tier.name}`} className={`block text-center text-xs font-medium py-2.5 rounded-md transition-all mt-auto ${tier.featured ? 'bg-gradient-to-r from-hh-red to-red-700 text-white hover:brightness-110' : 'border border-white/10 text-white hover:bg-white/5'}`}>
                  Get This Plan
                </Link>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* ICT Support Plans */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">ICT Support Plans</h2>
            <p className="text-white/50 max-w-xl mx-auto text-sm">
              Keep your business running smoothly with professional on-site and remote IT support.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
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
            ].map((p) => (
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
                        <Check size={14} className="text-hh-red mt-1 shrink-0" />{f}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link to={`/quote?service=${p.name}`} className={`block text-center text-sm font-medium py-2.5 rounded-md transition-all mt-auto ${p.featured ? 'bg-gradient-to-r from-hh-red to-red-700 text-white' : 'border border-white/10 text-white hover:bg-white/5'}`}>
                  Get Started
                </Link>
              </GlassCard>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
