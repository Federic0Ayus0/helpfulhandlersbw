import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, ArrowRight, MapPin, Shield, Zap, Award, ChevronLeft } from 'lucide-react'
import GlassCard from '../components/GlassCard'

const qualities = ['Excellent', 'Good', 'Average', 'Needs Improvement']

const features = [
  {
    icon: Shield,
    title: 'Verified Security',
    desc: 'Your feedback is encrypted and handled with the highest level of privacy as part of our commitment to your security.',
  },
  {
    icon: Zap,
    title: 'Real-time Impact',
    desc: 'Feedback is reviewed by our engineering team in Gaborone within 24 hours to implement immediate service improvements.',
  },
  {
    icon: Award,
    title: 'Local Expertise',
    desc: 'By understanding local nuances, we ensure our AI integrations are culturally relevant and technologically superior.',
  },
]

export default function Feedback() {
  const [rating, setRating] = useState(4)
  const [quality, setQuality] = useState('Good')
  const [feedback, setFeedback] = useState('')

  return (
    <div className="min-h-screen bg-hh-bg-primary pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Link to="/dashboard" className="text-white/40 hover:text-white text-sm mb-6 inline-flex items-center gap-1">
          <ChevronLeft size={16} /> Back to Dashboard
        </Link>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left */}
          <div className="lg:col-span-2">
            <div className="inline-block bg-hh-red/15 text-hh-red text-xs font-semibold px-3 py-1 rounded-full mb-4">
              CLIENT FEEDBACK
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Your Feedback Matters, <span className="text-hh-red">Thabo</span>
            </h1>
            <p className="text-white/50 mb-6 leading-relaxed">
              We pride ourselves on Digital Craftsmanship. Your insights help us refine our AI-driven solutions, helping us serve Botswana better with every interaction.
            </p>
            <GlassCard className="p-4 overflow-hidden">
              <img src="/images/lab-2.jpg" alt="Preview" className="w-full h-40 object-cover rounded-lg" />
            </GlassCard>
          </div>

          {/* Right - Form */}
          <div className="lg:col-span-3">
            <GlassCard className="p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-lg font-semibold">General Satisfaction</h2>
                  <p className="text-xs text-white/50">Step 1 of 3: Telling us about your overall experience.</p>
                </div>
                <span className="text-xs font-semibold text-hh-red">33% COMPLETE</span>
              </div>

              {/* Rating */}
              <div className="mb-6">
                <p className="text-sm mb-3">How would you rate your overall experience?</p>
                <div className="flex gap-2 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setRating(star)}
                      className="transition-colors"
                    >
                      <Star
                        size={28}
                        className={star <= rating ? 'text-hh-red fill-hh-red' : 'text-white/20'}
                      />
                    </button>
                  ))}
                </div>
                <div className="flex justify-between text-[10px] text-white/40 max-w-[180px]">
                  <span>Poor</span>
                  <span>Fair</span>
                  <span>Good</span>
                  <span>Great</span>
                  <span>Excellent</span>
                </div>
              </div>

              {/* Quality */}
              <div className="mb-6">
                <p className="text-sm mb-3">Service Quality</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {qualities.map((q) => (
                    <button
                      key={q}
                      onClick={() => setQuality(q)}
                      className={`px-3 py-2.5 rounded-lg text-xs font-medium transition-all ${
                        quality === q
                          ? 'bg-hh-red/20 text-hh-red border border-hh-red/30'
                          : 'bg-hh-bg-elevated text-white/60 border border-white/[0.06] hover:bg-white/[0.03]'
                      }`}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>

              {/* Textarea */}
              <div className="mb-6">
                <p className="text-sm mb-3">Specific Feedback</p>
                <textarea
                  placeholder="Tell us about your experience..."
                  rows={4}
                  className="input-dark w-full resize-none"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                />
                <p className="text-[10px] text-white/30 mt-1 text-right">OPTIONAL</p>
              </div>

              {/* Submit */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-white/50">
                  <MapPin size={14} className="text-hh-red" />
                  <span>Helping us serve <span className="text-white font-medium">Gaborone</span> and the rest of Botswana better.</span>
                </div>
                <button className="btn-primary gap-2">
                  Submit Feedback
                  <ArrowRight size={16} />
                </button>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-3 gap-6 mt-12">
          {features.map((f) => (
            <GlassCard key={f.title} className="p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-hh-red/15 text-hh-red mb-3">
                <f.icon size={20} />
              </div>
              <h3 className="font-semibold text-sm mb-2">{f.title}</h3>
              <p className="text-xs text-white/50 leading-relaxed">{f.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  )
}
