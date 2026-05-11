import { Link } from 'react-router-dom'
import { Brain, MessageSquare, Zap, BarChart2, Bot, Settings, CheckCircle, ArrowRight } from 'lucide-react'
import GlassCard from '../../components/GlassCard'

const offerings = [
  { icon: Bot, title: 'AI Chatbots', desc: 'Intelligent 24/7 customer support bots trained on your business data.' },
  { icon: Zap, title: 'Workflow Automation', desc: 'Automate repetitive tasks and processes to save time and reduce errors.' },
  { icon: BarChart2, title: 'Predictive Analytics', desc: 'Make smarter business decisions with AI-powered data insights.' },
  { icon: MessageSquare, title: 'Natural Language Processing', desc: 'Voice and text understanding systems for customer interactions.' },
  { icon: Settings, title: 'AI System Integration', desc: 'Plug AI capabilities into your existing software and tools.' },
  { icon: Brain, title: 'Custom AI Models', desc: 'Tailored machine learning models built for your specific use case.' },
]

const process = [
  { step: '01', title: 'Discovery & Audit', desc: 'We assess your current workflows and identify AI opportunities.' },
  { step: '02', title: 'Solution Design', desc: 'We design a custom AI strategy mapped to your goals.' },
  { step: '03', title: 'Build & Train', desc: 'We build and train the AI model on your data.' },
  { step: '04', title: 'Deploy & Support', desc: 'We deploy the solution and provide ongoing support.' },
]

export default function AIService() {
  return (
    <div className="min-h-screen bg-hh-bg-primary grid-bg pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-hh-red/30 bg-hh-red/10 text-xs font-medium text-hh-red mb-4">
              <Brain size={12} /> AI Integration
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
              Supercharge Your Business<br /><span className="gradient-text-red">with Artificial Intelligence</span>
            </h1>
            <p className="text-white/60 leading-relaxed mb-6">
              We help Botswana businesses harness the power of AI — from intelligent chatbots and automation to custom machine learning models that drive real results.
            </p>
            <div className="flex gap-3">
              <Link to="/quote?service=AI Service" className="btn-primary">Get Started</Link>
              <Link to="/contact" className="btn-secondary">Talk to Us</Link>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-hh-red/10 blur-[80px] rounded-full" />
            <div className="relative z-10 grid grid-cols-2 gap-4 p-4">
              {[Brain, Bot, Zap, BarChart2].map((Icon, i) => (
                <div key={i} className="glass-card p-6 rounded-xl flex items-center justify-center">
                  <Icon size={40} className="text-hh-red" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Offerings */}
        <h2 className="text-2xl font-bold mb-6 text-center">What We Offer</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {offerings.map((o) => (
            <GlassCard key={o.title} className="p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-hh-red/15 text-hh-red mb-4">
                <o.icon size={22} />
              </div>
              <h3 className="font-semibold mb-2">{o.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{o.desc}</p>
            </GlassCard>
          ))}
        </div>

        {/* Process */}
        <h2 className="text-2xl font-bold mb-8 text-center">Our Process</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {process.map((p) => (
            <GlassCard key={p.step} className="p-6 text-center">
              <div className="text-4xl font-bold gradient-text-red mb-3">{p.step}</div>
              <h3 className="font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-white/50">{p.desc}</p>
            </GlassCard>
          ))}
        </div>

        {/* Checklist */}
        <GlassCard className="p-8 mb-10">
          <h3 className="font-bold text-lg mb-4">Why Choose Our AI Services?</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {['Botswana-based team who understands local business needs', 'Affordable pricing in BWP', 'Solutions that integrate with your existing tools', 'Ongoing support & monitoring', 'No technical knowledge required from your side', 'Proven results across multiple industries'].map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm text-white/70">
                <CheckCircle size={16} className="text-hh-red mt-0.5 shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="p-8 text-center border-hh-red/20">
          <h2 className="text-2xl font-bold mb-3">Ready to Add AI to Your Business?</h2>
          <p className="text-white/50 mb-6">Let's build something smart together.</p>
          <Link to="/quote?service=AI Service" className="btn-primary inline-flex items-center gap-2">Get a Free Quote <ArrowRight size={16} /></Link>
        </GlassCard>
      </div>
    </div>
  )
}
