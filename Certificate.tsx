import { Link } from 'react-router-dom'
import HHLogo from '../components/HHLogo'

export default function Certificate() {
  return (
    <div className="min-h-screen bg-[#1a1a2e] relative overflow-hidden">
      {/* Geometric lines */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="geo" width="100" height="100" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="100" y2="100" stroke="#c9a84c" strokeWidth="0.5" />
              <line x1="100" y1="0" x2="0" y2="100" stroke="#c9a84c" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#geo)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <Link to="/" className="text-white/40 hover:text-white text-sm mb-8 inline-block">
          ← Back to Home
        </Link>

        <div className="text-center">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <HHLogo size={64} variant="white" className="drop-shadow-lg" />
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold gradient-text-gold mb-6">
            Certificate of Excellence
          </h1>

          <p className="text-lg text-white/70 mb-8">
            This certifies that Helpful Handlers has successfully deployed{' '}
            <span className="text-white">[Project Name]</span> for{' '}
            <span className="text-white">[Client Name]</span>
          </p>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-hh-gold/50" />
            <div className="w-2 h-2 rotate-45 bg-hh-red" />
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-hh-gold/50" />
          </div>

          <div className="grid sm:grid-cols-2 gap-8 text-left mb-8">
            <div>
              <h3 className="text-sm font-semibold text-hh-gold mb-3 tracking-wider">DETAILS</h3>
              <div className="space-y-2 text-sm text-white/60">
                <p><span className="text-white/40">Completion Date:</span> October 26, 2023</p>
                <p><span className="text-white/40">Project Scope:</span> AI Integration & CCTV Setup</p>
                <p><span className="text-white/40">Verification ID:</span> HH-BWA-2023-7749</p>
              </div>
            </div>
            <div className="flex flex-col items-end justify-end">
              <div className="text-center">
                <p className="text-2xl font-script text-white/80 italic mb-1">H. Hoffman</p>
                <div className="w-32 h-px bg-white/20 mb-2" />
                <p className="text-xs text-white/50">Head of Technology</p>
              </div>
            </div>
          </div>

          {/* Seal + Mascot */}
          <div className="flex items-center justify-between">
            <img src="/images/mascot-avatar.png" alt="Helpful" className="w-20 h-20 rounded-full border-2 border-hh-gold" />
            <img src="/images/gold-seal.png" alt="Official Seal" className="w-28 h-28" />
          </div>
        </div>
      </div>
    </div>
  )
}
