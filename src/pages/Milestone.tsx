import HHLogo from "../components/HHLogo"
export default function Milestone() {
  return (
    <div className="min-h-screen bg-hh-bg-primary relative overflow-hidden">
      {/* Circuit pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="circuit" width="200" height="200" patternUnits="userSpaceOnUse">
              <path d="M20 20 L80 20 L80 80" stroke="#3b82f6" strokeWidth="1" fill="none" />
              <path d="M120 120 L180 120 L180 180" stroke="#3b82f6" strokeWidth="1" fill="none" />
              <circle cx="80" cy="80" r="3" fill="#3b82f6" />
              <circle cx="180" cy="180" r="3" fill="#3b82f6" />
              <circle cx="20" cy="20" r="3" fill="#3b82f6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-12">
          <HHLogo size={28} variant="white" />
          <div>
            <p className="text-sm font-bold text-white">HELPFUL HANDLERS</p>
            <p className="text-xs text-hh-red">Your Trusted Technology Partner</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Certificate + Mascot */}
          <div className="relative">
            <img
              src="/images/certificate-doc.jpg"
              alt="Digital Service Certificate"
              className="rounded-xl shadow-2xl rotate-[-5deg] w-full max-w-md mx-auto"
            />
            <img
              src="/images/mascot-hero.png"
              alt="Mascot"
              className="absolute -bottom-8 -left-4 h-48 animate-float"
            />
          </div>

          {/* Right - Text */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-2">
              Another <span className="text-hh-red">Milestone</span>
            </h1>
            <h2 className="text-4xl sm:text-5xl font-bold text-hh-red mb-6">Achieved!</h2>
            <p className="text-xl text-white/60">
              Empowering Botswana through AI & Technology
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
