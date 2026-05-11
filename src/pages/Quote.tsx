import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { X, ChevronDown } from 'lucide-react'
import emailjs from '@emailjs/browser'

const planData: Record<string, { brief: string; price: string; category: string }> = {
  // --- APP & SOFTWARE PLANS ---
  "App Startup": { category: "Software Development", price: "BWP 3,500/project", brief: "Standard AI & App Support: Basic Chatbot Lite & Configuration." },
  "App Business": { category: "Software Development", price: "BWP 24,000/project", brief: "Professional AI Integration: Advanced Chatbots, Custom Apps & Analytics." },
  "Enterprise Software": { category: "Software Development", price: "Custom Pricing", brief: "Bespoke software solutions, dedicated project manager, and 24/7 support." },

  // --- ICT SUPPORT & MAINTENANCE ---
  "ICT Call-Out": { category: "ICT Support", price: "BWP 399/visit", brief: "Professional on-site ICT support and basic repairs." },
  "OS Reload": { category: "ICT Support", price: "BWP 599", brief: "Operating System reload with backups and configuration." },
  "Silver Retainer": { category: "Monthly Maintenance", price: "BWP 2,400/month", brief: "Standard Cover: 2 on-site visits and remote support." },
  "Gold Retainer": { category: "Monthly Maintenance", price: "BWP 3,000/month", brief: "Premium Cover: 24/7 monitoring and unlimited remote support." },

  // --- NETWORK SOLUTIONS ---
  "Radio Link Install": { category: "Network Solutions", price: "From BWP 550/point", brief: "Radio LINK installation per point including mounting and testing." },
  "Network Hardware": { category: "Network Solutions", price: "Contact for Pricing", brief: "Enquiry for Routers, Switches, PoE, or Cat6 Cable reels." },
  "Starlink Integration": { category: "Network Solutions", price: "Contact for Quote", brief: "Professional satellite dish mounting and network integration." },

  // --- CCTV & HARDWARE SPECIALS ---
  "CCTV 4-Channel": { category: "CCTV & Hardware", price: "P 8,899", brief: "Dahua 4-Channel System: Compact security solution." },
  "CCTV 8-Channel": { category: "CCTV & Hardware", price: "P 13,799", brief: "Dahua 8-Channel System: 2TB HDD and 8 Cameras." },
  "CCTV 16-Channel": { category: "CCTV & Hardware", price: "P 22,799", brief: "Dahua 16-Channel System: 4TB HDD and 16 Cameras." },

  // --- SOLAR & DESIGN ---
  "Solar Essentials": { category: "Solar Energy", price: "From P 299", brief: "Solar Light solutions (80W-300W) and energy assessment." },
  "Graphic Design": { category: "Design Services", price: "Contact for Quote", brief: "Logo design, brand identity, or marketing materials." }
};

export default function Quote() {
  const navigate = useNavigate()
  const formRef = useRef<HTMLFormElement>(null)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    selection: '',
    category: '',
    price: '',
    brief: '',
  })

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const service = params.get('service')
    if (service && planData[service]) {
      handleServiceChange(service)
    } else if (service) {
      setForm(prev => ({
        ...prev,
        brief: `I am interested in: ${service}. `
      }))
    }
  }, [])

  const handleServiceChange = (selection: string) => {
    const data = planData[selection];
    if (data) {
      setForm(prev => ({
        ...prev,
        selection,
        category: data.category,
        brief: data.brief,
        price: data.price
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    if (formRef.current) {
      const serviceID = 'service_4a9j74a'
      const templateID = 'template_oay94qj'
      const publicKey = 'j6_S_7w2L5S7OQ9kC'

      emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
        .then(() => {
          setLoading(false)
          console.log('Quote Request submitted via EmailJS:', form)
          // Pass data to success page formatted for Success.tsx display
          const displayData = {
            name: form.name,
            email: form.email,
            phone: form.phone,
            category: form.selection + " (" + form.category + ")",
            brief: form.brief + "\n\nPrice: " + form.price
          }
          navigate('/thank-you', { state: { formData: displayData } })
        }, (err) => {
          setLoading(false)
          alert('Send failed: ' + JSON.stringify(err))
        })
    }
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
            <form ref={formRef} onSubmit={handleSubmit} id="quote-form" className="space-y-4">
              <div>
                <label className="text-sm text-white/60 mb-1 block">Full Name</label>
                <input
                  type="text"
                  name="user_name"
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
                  name="business_email"
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
                  name="user_phone"
                  placeholder="e.g. +267 74 000 000"
                  className="input-dark w-full"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-white/60 mb-1 block">Select Plan</label>
                  <div className="relative">
                    <select
                      name="selected_plan"
                      className="input-dark w-full appearance-none pr-10"
                      value={form.selection}
                      onChange={(e) => handleServiceChange(e.target.value)}
                      required
                    >
                      <option value="">-- Choose a Service or Plan --</option>
                      
                      <optgroup label="App & AI Pricing">
                        <option value="App Startup">Startup Plan (P3,500)</option>
                        <option value="App Business">Business Plan (P24,000)</option>
                        <option value="Enterprise Software">Enterprise (Custom)</option>
                      </optgroup>

                      <optgroup label="ICT Support & OS">
                        <option value="ICT Call-Out">On-Site Call-Out (P399)</option>
                        <option value="OS Reload">OS Reload & Config (P599)</option>
                      </optgroup>

                      <optgroup label="Monthly Retainers">
                        <option value="Silver Retainer">Silver Standard (P2,400/mo)</option>
                        <option value="Gold Retainer">Gold Premium (P3,000/mo)</option>
                      </optgroup>

                      <optgroup label="Network Solutions">
                        <option value="Radio Link Install">Radio Link Install (P550+)</option>
                        <option value="Network Hardware">Networking Accessories</option>
                        <option value="Starlink Integration">Starlink Installation</option>
                      </optgroup>

                      <optgroup label="CCTV Specials (Dahua)">
                        <option value="CCTV 4-Channel">4-Channel System (P8,899)</option>
                        <option value="CCTV 8-Channel">8-Channel System (P13,799)</option>
                        <option value="CCTV 16-Channel">16-Channel System (P22,799)</option>
                      </optgroup>

                      <optgroup label="Solar & Creative">
                        <option value="Solar Essentials">Solar Light Solutions (P299+)</option>
                        <option value="Graphic Design">Design & Branding Quote</option>
                      </optgroup>
                    </select>
                    <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-white/60 mb-1 block">Service Category</label>
                    <input
                      type="text"
                      name="service_category"
                      className="input-dark w-full bg-white/5 opacity-80"
                      value={form.category}
                      readOnly
                      placeholder="Auto-filled"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-white/60 mb-1 block">Selected Pricing</label>
                    <input
                      type="text"
                      name="applied_pricing"
                      className="input-dark w-full bg-white/5 opacity-80"
                      value={form.price}
                      readOnly
                      placeholder="Auto-calculated"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="text-sm text-white/60 mb-1 block">Project Brief</label>
                <textarea
                  name="project_brief"
                  placeholder="Tell us about your project requirements..."
                  rows={4}
                  className="input-dark w-full resize-none"
                  required
                  value={form.brief}
                  onChange={(e) => setForm({ ...form, brief: e.target.value })}
                />
              </div>
              <button 
                type="submit" 
                disabled={loading}
                className="btn-primary w-full block text-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Submit Request"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
