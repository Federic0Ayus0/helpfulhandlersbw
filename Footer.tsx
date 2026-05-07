import { Link } from 'react-router-dom'
import { Facebook, Instagram, Youtube, Twitter, MapPin, Phone, Mail, Brain, Smartphone, Server, Headphones, Sun, Palette, FolderOpen, Users, Briefcase, LifeBuoy, MessageSquare, ShoppingCart, Wifi } from 'lucide-react'
import HHLogo from './HHLogo'

export default function Footer() {
  const whatsappUrl = "https://wa.me/26774170800?text=Hello%20Helpful%20Handlers%20BW%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."

  return (
    <footer className="border-t border-white/[0.06] bg-hh-bg-primary">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4 group w-fit">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-hh-red/0 group-hover:bg-hh-red/20 transition-all duration-300 blur-md" />
                <HHLogo size={36} variant="white" className="relative z-10" />
              </div>
              <div className="leading-tight">
                <p className="text-sm font-bold tracking-widest text-white/90 uppercase">Helpful Handlers</p>
                <p className="text-[9px] font-medium tracking-[0.2em] text-hh-red uppercase">Your Trusted Technology Partner</p>
              </div>
            </Link>
            <p className="text-xs text-white/40 leading-relaxed mb-4">
              Botswana's premier tech agency for AI, software, and hardware solutions.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://www.facebook.com/share/1CkRokCZHZ/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors" title="Facebook"><Facebook size={16} /></a>
              <a href="#" className="text-white/40 hover:text-white transition-colors" title="Instagram"><Instagram size={16} /></a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:brightness-125 transition-all" title="WhatsApp">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" fill="url(#goldGradientFooter)" />
                  <defs>
                    <linearGradient id="goldGradientFooter" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#BF953F" />
                      <stop offset="25%" stopColor="#FCF6BA" />
                      <stop offset="50%" stopColor="#B38728" />
                      <stop offset="75%" stopColor="#FBF5B7" />
                      <stop offset="100%" stopColor="#AA771C" />
                    </linearGradient>
                  </defs>
                </svg>
              </a>
              <a href="https://www.youtube.com/@HelpfulHandlersBw" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors" title="YouTube"><Youtube size={16} /></a>
              <a href="#" className="text-white/40 hover:text-white transition-colors" title="X (Twitter)"><Twitter size={16} /></a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2.5 text-xs text-white/40">
              <li><Link to="/services/ai" className="flex items-center gap-2 hover:text-white transition-colors"><Brain size={12} className="text-hh-red shrink-0" />AI Integration</Link></li>
              <li><Link to="/services/mobile" className="flex items-center gap-2 hover:text-white transition-colors"><Smartphone size={12} className="text-hh-red shrink-0" />Mobile App Development</Link></li>
              <li><Link to="/services/software" className="flex items-center gap-2 hover:text-white transition-colors"><Server size={12} className="text-hh-red shrink-0" />Custom Software</Link></li>
              <li><Link to="/services/ict" className="flex items-center gap-2 hover:text-white transition-colors"><Headphones size={12} className="text-hh-red shrink-0" />ICT Support</Link></li>
              <li><Link to="/services/solar" className="flex items-center gap-2 hover:text-white transition-colors"><Sun size={12} className="text-hh-red shrink-0" />Solar Energy</Link></li>
              <li><Link to="/services/design" className="flex items-center gap-2 hover:text-white transition-colors"><Palette size={12} className="text-hh-red shrink-0" />Design</Link></li>
              <li><Link to="/hardware" className="flex items-center gap-2 hover:text-white transition-colors"><ShoppingCart size={12} className="text-hh-red shrink-0" />CCTV & Hardware</Link></li>
              <li><Link to="/services/network" className="flex items-center gap-2 hover:text-white transition-colors"><Wifi size={12} className="text-hh-red shrink-0" />Network Solutions</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5 text-xs text-white/40">
              <li><Link to="/project" className="flex items-center gap-2 hover:text-white transition-colors"><Briefcase size={12} className="text-hh-red shrink-0" />About Us</Link></li>
              <li><Link to="/clients" className="flex items-center gap-2 hover:text-white transition-colors"><Users size={12} className="text-hh-red shrink-0" />Our Clients</Link></li>
              <li><Link to="/showcase" className="flex items-center gap-2 hover:text-white transition-colors"><FolderOpen size={12} className="text-hh-red shrink-0" />Projects</Link></li>
              <li><Link to="/support" className="flex items-center gap-2 hover:text-white transition-colors"><LifeBuoy size={12} className="text-hh-red shrink-0" />Support</Link></li>
              <li><Link to="/contact" className="flex items-center gap-2 hover:text-white transition-colors"><MessageSquare size={12} className="text-hh-red shrink-0" />Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3 text-xs text-white/40">
              <li className="flex items-start gap-2">
                <MapPin size={13} className="text-hh-red mt-0.5 shrink-0" />
                <span>Plot 19018, Shop 7, Mogoditshane Road, Botswana</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={13} className="text-hh-red shrink-0" />
                <a href="tel:+26774170800" className="hover:text-white transition-colors">+267 74 170 800</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={13} className="text-hh-red shrink-0" />
                <a href="mailto:helpfulhandlersbw@gmail.com" className="hover:text-white transition-colors">helpfulhandlersbw@gmail.com</a>
              </li>
            </ul>
            <div className="mt-5">
              <Link to="/quote" className="btn-primary text-xs px-4 py-2 inline-flex">Get a Quote</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.04] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <HHLogo size={18} variant="white" className="opacity-30" />
            <p className="text-xs text-white/30">
              © {new Date().getFullYear()} Helpful Handlers. All rights reserved. 
              <span className="mx-2">·</span>
              <a href="/terms%202026.html" target="_blank" rel="noopener noreferrer" className="hover:text-hh-red transition-colors underline decoration-white/10">Terms & Conditions</a>
            </p>
          </div>
          <p className="text-xs text-white/30 flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-hh-red" />
            Proudly serving Botswana 🇧🇼
          </p>
        </div>
      </div>
    </footer>
  )
}
