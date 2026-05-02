import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { Menu, X, LayoutDashboard, ChevronDown, Brain, Smartphone, Server, Headphones, Sun, Palette, ShoppingCart } from 'lucide-react'
import HHLogo from './HHLogo'

const serviceLinks = [
  { label: 'AI Integration', href: '/services/ai', icon: Brain },
  { label: 'Mobile App Development', href: '/services/mobile', icon: Smartphone },
  { label: 'Custom Software', href: '/services/software', icon: Server },
  { label: 'ICT Support', href: '/services/ict', icon: Headphones },
  { label: 'Solar Energy', href: '/services/solar', icon: Sun },
  { label: 'Design', href: '/services/design', icon: Palette },
  { label: 'Hardware Gallery', href: '/hardware', icon: ShoppingCart },
]

export default function Navbar() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const isLanding = location.pathname === '/'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || !isLanding ? 'glass-nav' : 'bg-transparent'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative flex items-center justify-center w-9 h-9">
            <div className="absolute inset-0 rounded-full bg-hh-red/0 group-hover:bg-hh-red/15 transition-all duration-300 blur-sm" />
            <HHLogo size={30} variant="white" className="relative z-10" />
          </div>
          <div className="hidden sm:block leading-tight">
            <span className="block text-[13px] font-bold tracking-widest text-white/95 uppercase">Helpful Handlers</span>
            <span className="block text-[9px] font-medium tracking-[0.2em] text-hh-red uppercase">Your Trusted Technology Partner</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {/* Services dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              className="flex items-center gap-1 text-[13px] font-medium text-white/60 hover:text-white transition-colors"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services <ChevronDown size={14} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 glass-nav rounded-xl border border-white/10 p-2 shadow-xl">
                {serviceLinks.map((s) => (
                  <Link
                    key={s.href}
                    to={s.href}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/70 hover:text-white hover:bg-white/5 transition-all"
                    onClick={() => setServicesOpen(false)}
                  >
                    <s.icon size={15} className="text-hh-red" />
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/showcase" className={`text-[13px] font-medium transition-colors ${location.pathname === '/showcase' ? 'text-white' : 'text-white/60 hover:text-white'}`}>Projects</Link>
          <Link to="/clients" className={`text-[13px] font-medium transition-colors ${location.pathname === '/clients' ? 'text-white' : 'text-white/60 hover:text-white'}`}>Clients</Link>
          <Link to="/pricing" className={`text-[13px] font-medium transition-colors ${location.pathname === '/pricing' ? 'text-white' : 'text-white/60 hover:text-white'}`}>Pricing</Link>
          <Link to="/contact" className={`text-[13px] font-medium transition-colors ${location.pathname === '/contact' ? 'text-white' : 'text-white/60 hover:text-white'}`}>Contact</Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/dashboard" className="text-white/50 hover:text-white transition-colors p-2" title="Client Dashboard">
            <LayoutDashboard size={18} />
          </Link>
          <Link to="/quote" className="btn-primary text-xs px-4 py-2">Get a Quote</Link>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-white/80 p-1" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass-nav border-t border-white/5 px-4 py-6 space-y-1">
          <div className="flex items-center gap-3 pb-4 mb-2 border-b border-white/[0.06]">
            <HHLogo size={28} variant="white" />
            <div>
              <p className="text-xs font-bold tracking-widest text-white uppercase">Helpful Handlers</p>
              <p className="text-[9px] text-hh-red tracking-widest uppercase">Your Trusted Technology Partner</p>
            </div>
          </div>
          <p className="text-xs font-semibold text-white/30 uppercase tracking-widest px-2 pt-2 pb-1">Services</p>
          {serviceLinks.map((s) => (
            <Link key={s.href} to={s.href} className="flex items-center gap-3 px-2 py-2 text-sm text-white/70 hover:text-white" onClick={() => setMenuOpen(false)}>
              <s.icon size={14} className="text-hh-red" />{s.label}
            </Link>
          ))}
          <div className="pt-2 space-y-1">
            {[
              { label: 'Projects', href: '/showcase' },
              { label: 'Clients', href: '/clients' },
              { label: 'Pricing', href: '/pricing' },
              { label: 'About', href: '/project' },
              { label: 'Contact', href: '/contact' },
              { label: 'Dashboard', href: '/dashboard' },
            ].map((l) => (
              <Link key={l.href} to={l.href} className="block px-2 py-2 text-sm text-white/70 hover:text-white" onClick={() => setMenuOpen(false)}>{l.label}</Link>
            ))}
          </div>
          <Link to="/quote" className="btn-primary text-xs w-full mt-3 block text-center" onClick={() => setMenuOpen(false)}>Get a Quote</Link>
        </div>
      )}
    </nav>
  )
}
