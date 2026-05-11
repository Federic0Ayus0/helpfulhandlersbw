import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { X, ChevronDown } from 'lucide-react'

export default function Quote() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'AI Integration',
    brief: '',
  })

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const service = params.get('service')
    if (service) {
      setForm(prev => ({
        ...prev,
        brief: `I am interested in: ${service}. `
      }))
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send this to a backend or Firebase
    console.log('Form submitted:', form)
    navigate('/success', { state: { formData: form } })
  }

  return (
    <div className="min-h-screen bg-hh-bg-primary flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="glass-card rounded-2xl overflow-hidden grid md:grid-cols-2">
          {/* Left - Mascot */}
          <div className="hidden md:flex items-end justify-center bg-gradient-to-b from-hh-bg-elevated to-hh-bg-secondary p-8 relative">
            <div className="absolute inset-0 bg-hh-red/5 blur-[60px]" />
            <img src="/images/mascot-hero.png" alt="Mascot" className="relative z-10 h-80 object-contain object-bottom" />
          </div>

          {/* Right - Form */}
          <div className="p-8 relative">
            <Link to="/" className="absolute top-4 right-4 text-white/40 hover:text-white">
              <X size={20} />
            </Link>
            <h2 className="text-2xl font-bold mb-1">Request a Quote</h2>
            <p className="text-xs text-white/40 mb-6">Tell us about your project — we'll get back to you within 24hrs.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm text-white/60 mb-1 block">Full Name</label>
                <input
                  type="text"
                  placeholder="e.g. John Doe"
                  className="input-dark w-full"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm text-white/60 mb-1 block">Business Email</label>
                <input
                  type="email"
                  placeholder="e.g. john@company.com"
                  className="input-dark w-full"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm text-white/60 mb-1 block">Phone Number</label>
                <input
                  type="tel"
                  placeholder="e.g. +267 74 000 000"
                  className="input-dark w-full"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm text-white/60 mb-1 block">Service Category</label>
                <div className="relative">
                  <select
                    className="input-dark w-full appearance-none"
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                  >
                    <option>AI Integration</option>
                    <option>Mobile App Development</option>
                    <option>Software Development</option>
                    <option>ICT Support</option>
                    <option>Solar Energy</option>
                    <option>Design</option>
                    <option>CCTV & Security Systems</option>
                    <option>IT Infrastructure & Networking</option>
                    <option>Other</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="text-sm text-white/60 mb-1 block">Project Brief</label>
                <textarea
                  placeholder="Tell us about your project requirements..."
                  rows={4}
                  className="input-dark w-full resize-none"
                  required
                  value={form.brief}
                  onChange={(e) => setForm({ ...form, brief: e.target.value })}
                />
              </div>
              <button type="submit" className="btn-primary w-full block text-center">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
