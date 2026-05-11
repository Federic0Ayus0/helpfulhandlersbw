import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Send, MapPin, Phone, Mail, Calendar, Clock } from 'lucide-react'
import GlassCard from '../components/GlassCard'
import emailjs from '@emailjs/browser'

const labPhotos = ['/images/lab-1.jpg', '/images/lab-2.jpg', '/images/lab-3.jpg']

export default function Contact() {
  const navigate = useNavigate()
  const formRef = useRef<HTMLFormElement>(null)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    message: '', 
    type: 'message',
    date: '',
    time: 'Preferred Time — Morning (8am–12pm)',
    subject: ''
  })

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
          const displayData = {
            ...form,
            brief: form.type === 'call' 
              ? `Call Scheduled: ${form.date} at ${form.time}. Subject: ${form.subject}` 
              : form.message
          }
          console.log('Contact form submitted via EmailJS:', displayData)
          navigate('/thank-you', { state: { formData: displayData } })
        }, (err) => {
          setLoading(false)
          alert('Send failed: ' + JSON.stringify(err))
        })
    }
  }

  return (
    <div className="min-h-screen bg-hh-bg-primary grid-bg pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Let&apos;s Build the <span className="underline decoration-hh-red decoration-4 underline-offset-4">Future</span> Together
          </h1>
          <p className="text-white/50 max-w-xl mx-auto">Whether you want to send a message or schedule a call — we're ready to help.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16 items-start">
          {/* Form */}
          <GlassCard className="p-6">
            {/* Toggle */}
            <div className="flex rounded-lg overflow-hidden border border-white/10 mb-5">
              <button
                type="button"
                onClick={() => setForm({ ...form, type: 'message' })}
                className={`flex-1 py-2 text-sm font-medium flex items-center justify-center gap-2 transition-all ${form.type === 'message' ? 'bg-hh-red text-white' : 'text-white/50 hover:text-white'}`}
              >
                <Send size={14} /> Send a Message
              </button>
              <button
                type="button"
                onClick={() => setForm({ ...form, type: 'call' })}
                className={`flex-1 py-2 text-sm font-medium flex items-center justify-center gap-2 transition-all ${form.type === 'call' ? 'bg-hh-red text-white' : 'text-white/50 hover:text-white'}`}
              >
                <Calendar size={14} /> Schedule a Call
              </button>
            </div>

            <form id="contact-form" ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <input 
                type="hidden" 
                name="message" 
                value={form.type === 'call' ? `Call Scheduled: ${form.date} at ${form.time}. Subject: ${form.subject}` : form.message} 
              />
              <input 
                type="text" 
                name="user_name"
                placeholder="Full Name" 
                className="input-dark w-full" 
                required
                value={form.name} 
                onChange={(e) => setForm({ ...form, name: e.target.value })} 
              />
              <input 
                type="email" 
                name="user_email"
                placeholder="Email Address" 
                className="input-dark w-full" 
                required
                value={form.email} 
                onChange={(e) => setForm({ ...form, email: e.target.value })} 
              />
              <input 
                type="tel" 
                name="user_phone"
                placeholder="Phone Number (e.g. +267 74 170 800)" 
                className="input-dark w-full" 
                required
                value={form.phone} 
                onChange={(e) => setForm({ ...form, phone: e.target.value })} 
              />
              {form.type === 'call' ? (
                <>
                  <input 
                    type="date" 
                    name="date"
                    className="input-dark w-full text-white/50" 
                    required
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                  />
                  <select 
                    name="time"
                    className="input-dark w-full"
                    value={form.time}
                    onChange={(e) => setForm({ ...form, time: e.target.value })}
                  >
                    <option>Preferred Time — Morning (8am–12pm)</option>
                    <option>Preferred Time — Afternoon (12pm–5pm)</option>
                    <option>Preferred Time — Evening (5pm–7pm)</option>
                  </select>
                  <input 
                    type="text" 
                    name="subject"
                    placeholder="What's the call about?" 
                    className="input-dark w-full" 
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  />
                </>
              ) : (
                <textarea 
                  name="message_original"
                  placeholder="Your message..." 
                  rows={4} 
                  className="input-dark w-full resize-none" 
                  required
                  value={form.message} 
                  onChange={(e) => setForm({ ...form, message: e.target.value })} 
                />
              )}
              <button 
                type="submit" 
                disabled={loading}
                className="btn-primary w-full gap-2 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : (form.type === 'call' ? <><Calendar size={16} /> Book Call</> : <><Send size={16} /> Send Message</>)}
              </button>
            </form>
          </GlassCard>

          {/* Mascot */}
          <div className="hidden lg:flex flex-col justify-center items-center gap-4">
            <img src="/images/mascot-hero.png" alt="Mascot" className="h-64 w-auto animate-float" />
            <div className="glass-card px-4 py-3 rounded-xl text-center">
              <p className="text-sm text-white/70">We respond within <span className="text-hh-red font-semibold">24 hours</span></p>
            </div>
          </div>

          {/* Map */}
          <GlassCard className="overflow-hidden">
            <div className="relative h-72 bg-hh-bg-elevated">
              <iframe
                src="https://maps.google.com/maps?q=-24.622499,25.862301&z=16&output=embed"
                width="100%" height="100%"
                style={{ border: 0, filter: 'grayscale(80%) invert(90%) contrast(85%)' }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Helpful Handlers Location"
              />
            </div>
            <div className="p-4 space-y-2">
              <div className="flex items-start gap-2 text-sm text-white/70">
                <MapPin size={15} className="text-hh-red mt-0.5 shrink-0" />
                <span>Plot 19018, Shop 7, Mogoditshane Road — after Sky Gate Motors (from Trans Cash & Carry direction), ~100m before Sky Gate (from Gabane)</span>
              </div>
              <a
                href="https://maps.google.com/?q=-24.622499,25.862301"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-hh-red hover:underline flex items-center gap-1"
              >
                <MapPin size={12} /> Open in Google Maps
              </a>
            </div>
          </GlassCard>
        </div>

        {/* Visit Our Lab */}
        <h2 className="text-2xl font-bold mb-2">Visit Our Lab</h2>
        <p className="text-white/50 text-sm mb-6 flex items-center gap-2">
          <Clock size={14} className="text-hh-red" />
          Mon–Fri: 8am–6pm &nbsp;|&nbsp; Sat: 9am–2pm &nbsp;|&nbsp; Sun: Closed
        </p>
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {labPhotos.map((photo, i) => (
            <GlassCard key={i} className="overflow-hidden group">
              <div className="h-52 overflow-hidden">
                <img src={photo} alt={`Lab ${i + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Location card */}
        <GlassCard className="p-6 mb-8">
          <h3 className="font-semibold mb-4 flex items-center gap-2"><MapPin size={18} className="text-hh-red" /> Our Location</h3>
          <div className="grid sm:grid-cols-2 gap-4 text-sm text-white/70">
            <div>
              <p className="font-medium text-white mb-1">Helpful Handlers HQ</p>
              <p>Plot 19018, Shop Number 7</p>
              <p>Mogoditshane Road</p>
              <p>After Sky Gate Motors</p>
              <p>(Coming from Trans Cash &amp; Carry direction)</p>
              <p>~100m before Sky Gate (from Gabane)</p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone size={15} className="text-hh-red shrink-0" />
                <a href="tel:+26774170800" className="hover:text-white transition-colors">+267 74 170 800</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={15} className="text-hh-red shrink-0" />
                <a href="mailto:helpfulhandlersbw@gmail.com" className="hover:text-white transition-colors">helpfulhandlersbw@gmail.com</a>
              </div>
              <a
                href="https://maps.google.com/?q=-24.622499,25.862301"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white bg-hh-red/80 hover:bg-hh-red px-4 py-2 rounded-lg transition-all mt-2"
              >
                <MapPin size={14} /> Get Directions
              </a>
            </div>
          </div>
        </GlassCard>

        {/* Contact Bar */}
        <div className="glass-card p-6 flex flex-wrap items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-2 text-white/70">
            <Phone size={16} className="text-hh-red" />
            <a href="tel:+26774170800" className="hover:text-white transition-colors">+267 74 170 800</a>
          </div>
          <div className="flex items-center gap-2 text-white/70">
            <Mail size={16} className="text-hh-red" />
            <a href="mailto:helpfulhandlersbw@gmail.com" className="hover:text-white transition-colors">helpfulhandlersbw@gmail.com</a>
          </div>
          <div className="flex items-center gap-2 text-white/70">
            <MapPin size={16} className="text-hh-red" />
            <span>Plot 19018 Shop 7, Mogoditshane Road, Botswana</span>
          </div>
        </div>
      </div>
    </div>
  )
}
