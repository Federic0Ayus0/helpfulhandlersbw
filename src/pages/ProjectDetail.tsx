import { Link } from 'react-router-dom'
import { ArrowLeft, TrendingUp, Clock, MessageSquare, Brain, Smartphone, Server, Users, Award, Zap } from 'lucide-react'
import GlassCard from '../components/GlassCard'

const team = [
  { name: 'H. Hoffman', role: 'Head of Technology', initial: 'H' },
  { name: 'Kagiso Tiro', role: 'Lead AI Engineer', initial: 'K' },
  { name: 'Mpho Seretse', role: 'Mobile Developer', initial: 'M' },
  { name: 'Thabo Nkosi', role: 'Hardware Specialist', initial: 'T' },
]

const milestones = [
  { year: '2021', event: 'Founded in Gaborone, Botswana' },
  { year: '2022', event: 'First 10 clients onboarded. Expanded to CCTV & Solar' },
  { year: '2023', event: 'Launched AI integration services. Deployed 25+ projects' },
  { year: '2024', event: '50+ projects delivered. Recognized as a top tech agency' },
  { year: '2025', event: 'Expanding to enterprise clients across Southern Africa' },
]

const values = [
  { icon: Brain, title: 'Innovation First', desc: 'We embrace new technologies to deliver modern, future-ready solutions.' },
  { icon: Users, title: 'Client-Centered', desc: 'Every decision we make starts with what is best for our clients.' },
  { icon: Award, title: 'Quality Assured', desc: 'We maintain rigorous standards across every project we deliver.' },
  { icon: Zap, title: 'Fast & Reliable', desc: 'On-time delivery with systems that perform when it matters most.' },
]

export default function ProjectDetail() {
  return (
    <div className="min-h-screen bg-hh-bg-primary grid-bg pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white mb-8 transition-colors">
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-hh-red/30 bg-hh-red/10 text-xs font-medium text-hh-red mb-4">
              About Helpful Handlers
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
              Botswana&apos;s Trusted<br />
              <span className="gradient-text-red">Technology Partner</span>
            </h1>
            <p className="text-white/60 mb-6 leading-relaxed">
              Founded in Gaborone, Helpful Handlers is a full-service technology agency dedicated to empowering Botswana businesses with cutting-edge AI, custom software, mobile apps, and hardware solutions. We believe technology should be accessible, practical, and transformative for every business.
            </p>
            <div className="flex gap-4">
              <Link to="/quote" className="btn-primary text-sm">Work With Us</Link>
              <Link to="/contact" className="btn-secondary text-sm">Get in Touch</Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-hh-red/10 blur-[80px] rounded-full" />
            <img src="/images/mascot-hero.png" alt="Helpful Handlers" className="relative z-10 h-72 mx-auto animate-float" />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {[
            { value: '50+', label: 'Projects Delivered', icon: TrendingUp },
            { value: '30+', label: 'Happy Clients', icon: Users },
            { value: '3+', label: 'Years in Business', icon: Clock },
            { value: '100%', label: 'Botswana-Based', icon: Award },
          ].map((s) => (
            <GlassCard key={s.label} className="p-5 text-center">
              <s.icon size={20} className="text-hh-red mx-auto mb-2" />
              <div className="text-2xl font-bold gradient-text-red mb-1">{s.value}</div>
              <div className="text-xs text-white/50">{s.label}</div>
            </GlassCard>
          ))}
        </div>

        {/* Our Values */}
        <h2 className="text-2xl font-bold mb-6">Our Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((v) => (
            <GlassCard key={v.title} className="p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-hh-red/15 text-hh-red mb-4">
                <v.icon size={22} />
              </div>
              <h3 className="font-semibold mb-2">{v.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{v.desc}</p>
            </GlassCard>
          ))}
        </div>

        {/* Featured Project: AI Chatbot */}
        <h2 className="text-2xl font-bold mb-6">Featured Project</h2>
        <GlassCard className="p-6 mb-6">
          <div className="flex items-start gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-hh-red/15 text-hh-red shrink-0">
              <Brain size={20} />
            </div>
            <div>
              <h3 className="font-semibold">AI Chatbot Integration — Retail Client</h3>
              <p className="text-sm text-white/50">Custom intelligent support solution deployed at scale</p>
            </div>
          </div>
          <p className="text-sm text-white/60 leading-relaxed mb-6">
            A Gaborone-based retail group was struggling with slow, manual customer support that couldn't handle peak demand. We designed and deployed a custom AI chatbot that integrates with their POS system, handles FAQs, billing queries, and escalates to human agents when needed.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mb-4">
            <div className="bg-hh-bg-elevated rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp size={18} className="text-hh-green" />
                <span className="text-2xl font-bold">95%</span>
              </div>
              <p className="text-sm font-medium">Intent Recognition Accuracy</p>
              <p className="text-xs text-white/40">AI understanding of customer queries</p>
            </div>
            <div className="bg-hh-bg-elevated rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Clock size={18} className="text-hh-blue" />
                <span className="text-2xl font-bold">60%</span>
              </div>
              <p className="text-sm font-medium">Faster Response Time</p>
              <p className="text-xs text-white/40">vs. previous manual process</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-hh-bg-elevated rounded-lg p-4 flex items-center gap-3">
              <MessageSquare size={16} className="text-hh-red" />
              <span className="text-sm text-white/70">Mobile Chat Interface</span>
            </div>
            <div className="bg-hh-bg-elevated rounded-lg p-4 flex items-center gap-3">
              <Smartphone size={16} className="text-hh-red" />
              <span className="text-sm text-white/70">Admin Dashboard & Analytics</span>
            </div>
            <div className="bg-hh-bg-elevated rounded-lg p-4 flex items-center gap-3">
              <Server size={16} className="text-hh-red" />
              <span className="text-sm text-white/70">POS System Integration</span>
            </div>
            <div className="bg-hh-bg-elevated rounded-lg p-4 flex items-center gap-3">
              <Zap size={16} className="text-hh-red" />
              <span className="text-sm text-white/70">Real-Time Support Escalation</span>
            </div>
          </div>
        </GlassCard>

        {/* Company Timeline */}
        <h2 className="text-2xl font-bold mb-6">Our Journey</h2>
        <GlassCard className="p-6 mb-16">
          <div className="space-y-6">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold shrink-0 ${
                    i === milestones.length - 1 ? 'bg-hh-red text-white' : 'bg-hh-red/20 text-hh-red border border-hh-red/30'
                  }`}>
                    {m.year.slice(2)}
                  </div>
                  {i < milestones.length - 1 && <div className="w-px h-8 bg-white/10 mt-1" />}
                </div>
                <div className="pt-1">
                  <span className="text-xs font-semibold text-hh-red">{m.year}</span>
                  <p className="text-sm text-white/70 mt-0.5">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Team */}
        <h2 className="text-2xl font-bold mb-6">Our Team</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {team.map((member) => (
            <GlassCard key={member.name} className="p-5 text-center">
              <div className="h-14 w-14 rounded-full bg-hh-red/20 border border-hh-red/30 flex items-center justify-center text-xl font-bold text-hh-red mx-auto mb-3">
                {member.initial}
              </div>
              <p className="font-medium text-sm">{member.name}</p>
              <p className="text-xs text-white/40 mt-1">{member.role}</p>
            </GlassCard>
          ))}
        </div>

        {/* CTA */}
        <GlassCard className="p-8 text-center">
          <h2 className="text-xl font-bold mb-3">Ready to Start Your Project?</h2>
          <p className="text-white/50 mb-6 max-w-md mx-auto">
            Let our team build a custom technology solution tailored to your business.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="btn-secondary">Contact Us</Link>
            <Link to="/quote" className="btn-primary">Get a Free Quote</Link>
          </div>
        </GlassCard>
      </div>
    </div>
  )
}
