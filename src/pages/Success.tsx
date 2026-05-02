import { Link } from 'react-router-dom'
import HHLogo from '../components/HHLogo'
import { CheckCircle2, ArrowRight, MessageSquare } from 'lucide-react'
import GlassCard from '../components/GlassCard'

export default function Success() {
  return (
    <div className="min-h-screen bg-hh-bg-primary grid-bg flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-hh-red/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-hh-red/5 blur-[80px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-md text-center">
        {/* Logo */}
        <Link to="/" className="inline-flex items-center gap-2 mb-10">
          <HHLogo size={32} variant="white" />
          <span className="text-sm font-semibold tracking-wide text-white/80">HELPFUL HANDLERS</span>
        </Link>

        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-hh-red/20 blur-xl animate-glow-breathe" />
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-hh-red/30 bg-hh-red/10">
              <CheckCircle2 size={40} className="text-hh-red" />
            </div>
          </div>
        </div>

        <GlassCard className="p-8 mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">
            We&apos;ve <span className="gradient-text-red">Got It!</span>
          </h1>
          <p className="text-white/60 mb-8 leading-relaxed">
            Thank you for reaching out. Our team will review your request and get back to you within 24 hours to discuss your project.
          </p>

          <img
            src="/images/mascot-hero.png"
            alt="Helpful Handlers Mascot"
            className="h-48 mx-auto mb-8 animate-float drop-shadow-2xl"
          />

          <div className="space-y-3">
            <Link
              to="/support"
              className="btn-secondary w-full flex items-center justify-center gap-2 text-sm"
            >
              <MessageSquare size={16} />
              Contact Support
            </Link>
            <Link
              to="/"
              className="btn-primary w-full flex items-center justify-center gap-2 text-sm"
            >
              Back to Home
              <ArrowRight size={16} />
            </Link>
          </div>
        </GlassCard>

        <p className="text-xs text-white/30">
          Reference: HH-{new Date().getFullYear()}-{Math.floor(Math.random() * 9000 + 1000)}
        </p>
      </div>
    </div>
  )
}
