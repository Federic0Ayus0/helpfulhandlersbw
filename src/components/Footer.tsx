import { Link } from 'react-router-dom'
import { Facebook, Instagram, Youtube, Twitter, MapPin, Phone, Mail, Brain, Smartphone, Server, Headphones, Sun, Palette, FolderOpen, Users, Briefcase, LifeBuoy, MessageSquare, ShoppingCart } from 'lucide-react'
import HHLogo from './HHLogo'

export default function Footer() {
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
              <a href="https://www.facebook.com/share/1CkRokCZHZ/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors"><Facebook size={16} /></a>
              <a href="#" className="text-white/40 hover:text-white transition-colors"><Instagram size={16} /></a>
              <a href="https://www.youtube.com/@HelpfulHandlersBw" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors"><Youtube size={16} /></a>
              <a href="#" className="text-white/40 hover:text-white transition-colors"><Twitter size={16} /></a>
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
              <li><Link to="/hardware" className="flex items-center gap-2 hover:text-white transition-colors"><ShoppingCart size={12} className="text-hh-red shrink-0" />Hardware Gallery</Link></li>
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
            <p className="text-xs text-white/30">© {new Date().getFullYear()} Helpful Handlers. All rights reserved.</p>
          </div>
          <p className="text-xs text-white/30">Proudly serving Botswana 🇧🇼</p>
        </div>
      </div>
    </footer>
  )
}
