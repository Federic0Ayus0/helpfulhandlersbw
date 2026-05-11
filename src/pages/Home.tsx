import { Link } from 'react-router-dom'
import { Brain, Smartphone, Server, Video, Sun, Cable, Wrench, ShoppingCart, Star, TrendingUp, Users, Award, CheckCircle, Palette, Headphones, AlertTriangle, ShieldCheck, Zap, ArrowRight } from 'lucide-react'
import GlassCard from '../components/GlassCard'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel"

export default function Home() {
  const services = [
    {
      icon: Brain,
      title: 'AI Integration',
      desc: 'Leverage the power of artificial intelligence to automate workflows, deploy chatbots, and drive smarter business decisions.',
      href: '/services/ai',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      desc: 'Crafting intuitive, high-performance mobile applications for iOS and Android tailored to your business.',
      href: '/services/mobile',
    },
    {
      icon: Server,
      title: 'Custom Software Solutions',
      desc: 'Tailored software platforms and web applications designed to scale with your business needs.',
      href: '/services/software',
    },
    {
      icon: Headphones,
      title: 'ICT Support',
      desc: 'Professional IT support, network setup, maintenance, and troubleshooting for businesses of all sizes.',
      href: '/services/ict',
    },
    {
      icon: Sun,
      title: 'Solar Energy',
      desc: 'Complete solar energy system design, supply, and installation for homes and businesses across Botswana.',
      href: '/services/solar',
    },
    {
      icon: Palette,
      title: 'Design',
      desc: 'Brand identity, UI/UX design, graphics, and digital marketing materials that make your business stand out.',
      href: '/services/design',
    },
  ]

  const hardware = [
    { icon: Video, title: 'CCTV Surveillance Systems', img: '/images/cctv-16ch.jpg' },
    { icon: Sun, title: 'Solar Energy Solutions', img: '/images/solar-light.jpg' },
    { icon: Cable, title: 'IT Infrastructure (Cables & POS)', img: '/images/networking-cables.jpg' },
    { icon: Wrench, title: 'Device Maintenance', img: '/images/lab-3.jpg' },
  ]

  const plans = [
    {
      name: 'Standard',
      price: 'BWP 3,500',
      period: '/ project',
      features: ['Basic AI Integration', 'Responsive Web Design', 'Limited Support', '3 Month Warranty'],
      cta: 'Get Started',
      featured: false,
    },
    {
      name: 'Professional',
      price: 'BWP 24,000',
      period: '/ project',
      features: [
        'Advanced AI Solutions',
        'Cross-Platform Mobile App',
        'Dedicated Account Manager',
        '6 Month Warranty',
        'Priority Support',
      ],
      cta: 'Get Started',
      featured: true,
    },
    {
      name: 'Custom',
      price: 'Contact Us',
      period: '',
      features: [
        'Enterprise AI Strategy',
        'Bespoke Software Suite',
        '24/7 Premier Support',
        '12 Month Warranty',
        'Scalable Infrastructure',
      ],
      cta: 'Get Started',
      featured: false,
    },
  ]

  const stats = [
    { value: '50+', label: 'Projects Delivered', icon: TrendingUp },
    { value: '100+', label: 'Happy Clients', icon: Users },
    { value: '5★', label: 'Average Rating', icon: Star },
    { value: '10+', label: 'Years Experience', icon: Award },
  ]

  const testimonials = [
    {
      name: 'Kagiso Molefe',
      role: 'CEO, BW Retail Group',
      text: 'Helpful Handlers transformed our business with a custom AI chatbot that handles 80% of our customer inquiries automatically. Truly outstanding service.',
      rating: 5,
    },
    {
      name: 'Thabo Sithole',
      role: 'Operations Manager, Gaborone Logistics',
      text: 'The CCTV and solar installation was seamless. Professional team, high-quality equipment, and they were available whenever we needed support.',
      rating: 5,
    },
    {
      name: 'Mpho Dlamini',
      role: 'Founder, Maun Wellness',
      text: 'Our mobile app exceeded expectations. The UI is beautiful, it runs perfectly, and our clients love using it. Highly recommend.',
      rating: 5,
    },
  ]

  const trustBadges = [
    'AI-Powered Solutions',
    'Botswana-Based Team',
    'Certified Technicians',
    '24/7 Support Available',
    'Licensed & Insured',
  ]

  return (
    <div className="min-h-screen bg-hh-bg-primary grid-bg">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 items-center gap-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-hh-red/30 bg-hh-red/10 text-xs font-medium text-hh-red">
                <span className="w-1.5 h-1.5 rounded-full bg-hh-red animate-pulse" />
                Botswana&apos;s Premier Tech Agency
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight">
                Your Trusted{' '}
                <span className="gradient-text-red">Technology</span>{' '}
                Partner
              </h1>
              <p className="text-base sm:text-lg text-white/60 max-w-lg">
                We build AI solutions, mobile apps, custom software, and install hardware that helps Botswana businesses grow and thrive.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/quote?service=Home Hero" className="btn-primary">
                  Get a Free Quote
                </Link>
                <Link to="/pricing" className="btn-secondary">
                  Explore Services
                </Link>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {trustBadges.map((b) => (
                  <span key={b} className="inline-flex items-center gap-1.5 text-xs text-white/50 bg-white/[0.04] border border-white/[0.06] px-2.5 py-1 rounded-full">
                    <CheckCircle size={11} className="text-hh-red" />
                    {b}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute right-10 top-10 w-64 h-64 rounded-full bg-hh-red/20 blur-[100px]" />
              <img
                src="/images/mascot-hero.png"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://api.dicebear.com/7.x/bottts/svg?seed=HH&backgroundColor=b6e3f4,c0aede,d1d4f9'
                }}
                alt="Helpful Handlers Mascot"
                className="relative z-10 h-[400px] lg:h-[480px] w-auto object-contain animate-float drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-y border-white/[0.05]">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-hh-red/15 text-hh-red">
                    <s.icon size={20} />
                  </div>
                </div>
                <div className="text-2xl font-bold gradient-text-red mb-1">{s.value}</div>
                <div className="text-xs text-white/50">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">Our Core Services</h2>
          <p className="text-center text-white/50 mb-12 max-w-xl mx-auto">
            End-to-end technology solutions for modern businesses in Botswana and beyond.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link key={s.title} to={s.href}>
                <GlassCard className="p-6 h-full cursor-pointer">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-hh-red/15 text-hh-red mb-4">
                    <s.icon size={24} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{s.desc}</p>
                  <div className="mt-4 text-xs text-hh-red font-medium">Learn more →</div>
                </GlassCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware & Security */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">Hardware & Security Solutions</h2>
          <p className="text-center text-white/50 mb-12 max-w-xl mx-auto">
            Quality hardware, professional installation, and ongoing maintenance — all under one roof.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hardware.map((h) => (
              <GlassCard key={h.title} className="overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={h.img}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${h.title}/400/300`
                    }}
                    alt={h.title}
                    className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-hh-bg-secondary/90 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <h.icon size={16} className="text-hh-red" />
                    <span className="text-sm font-medium">{h.title}</span>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/hardware" className="btn-secondary inline-flex items-center gap-2">
              <ShoppingCart size={16} />
              Browse CCTV & Hardware
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">What Our Clients Say</h2>
          <p className="text-center text-white/50 mb-12 max-w-xl mx-auto">
            Trusted by businesses across Botswana to deliver real results.
          </p>
          
          <div className="relative px-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {testimonials.map((t, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <GlassCard className="p-6 h-full flex flex-col justify-between">
                      <div>
                        <div className="flex gap-1 mb-4">
                          {Array.from({ length: t.rating }).map((_, i) => (
                            <Star key={i} size={14} className="text-hh-gold fill-hh-gold" />
                          ))}
                        </div>
                        <p className="text-sm text-white/70 leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-full bg-hh-red/20 border border-hh-red/30 flex items-center justify-center text-sm font-bold text-hh-red">
                          {t.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-medium">{t.name}</p>
                          <p className="text-xs text-white/40">{t.role}</p>
                        </div>
                      </div>
                    </GlassCard>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 border-white/10 text-white hover:bg-white/5" />
              <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 border-white/10 text-white hover:bg-white/5" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* App Pricing Plans */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">App Pricing Plans</h2>
          <p className="text-center text-white/50 mb-12 max-w-xl mx-auto">
            Transparent pricing designed for every stage of your business journey.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <GlassCard
                key={plan.name}
                className={`p-6 ${plan.featured ? 'border-hh-red/40 shadow-red-glow' : ''}`}
              >
                {plan.featured && (
                  <div className="mb-4 text-xs font-semibold text-hh-red uppercase tracking-wider">
                    Recommended
                  </div>
                )}
                <h3 className="text-lg font-semibold mb-1">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-sm text-white/50">{plan.period}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-white/60">
                      <span className="h-1.5 w-1.5 rounded-full bg-hh-red" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/quote?service=${plan.name}`}
                  className={`block text-center text-sm font-medium py-2.5 rounded-md transition-all ${
                    plan.featured
                      ? 'bg-gradient-to-r from-hh-red to-red-700 text-white hover:brightness-110'
                      : 'border border-white/10 text-white hover:bg-white/5'
                  }`}
                >
                  {plan.cta}
                </Link>
              </GlassCard>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/pricing" className="btn-secondary inline-flex items-center gap-2">
              View Full Pricing Details <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Retainer / Monthly Maintenance Plans */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">Stop Reacting. Start Protecting.</h2>
            <p className="text-center text-white/50 mb-10 max-w-2xl mx-auto">
              In Botswana's environment — dust, heat, and power surges — your cameras and ICT equipment need regular eyes on them. Don't wait for a fault to cost you footage or downtime.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <GlassCard className="p-6 border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center text-white/40">
                    <AlertTriangle size={20} />
                  </div>
                  <h3 className="font-semibold text-white/60">The Reactive Way</h3>
                </div>
                <ul className="space-y-2 text-sm text-white/40">
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✕</span>Camera fails — you find out days later</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✕</span>Critical footage is already gone</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✕</span>Wait for a technician slot</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✕</span>Emergency call-out fees</li>
                </ul>
              </GlassCard>
              <GlassCard className="p-6 border-hh-red/30 shadow-red-glow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-hh-red/15 flex items-center justify-center text-hh-red">
                    <ShieldCheck size={20} />
                  </div>
                  <h3 className="font-semibold text-white">The Retainer Way</h3>
                </div>
                <ul className="space-y-2 text-sm text-white/70">
                  <li className="flex items-start gap-2"><CheckCircle size={14} className="text-hh-red mt-0.5 shrink-0" />Monthly health checks catch faults first</li>
                  <li className="flex items-start gap-2"><CheckCircle size={14} className="text-hh-red mt-0.5 shrink-0" />Zero downtime — fixed before you need it</li>
                  <li className="flex items-start gap-2"><CheckCircle size={14} className="text-hh-red mt-0.5 shrink-0" />Guaranteed priority response time</li>
                  <li className="flex items-start gap-2"><CheckCircle size={14} className="text-hh-red mt-0.5 shrink-0" />Predictable monthly cost, no surprises</li>
                </ul>
              </GlassCard>
            </div>
          </div>

          <div className="mb-14">
            <h3 className="text-xl font-bold text-center mb-8">What Every Monthly Check Covers</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: Video, title: 'CCTV Health', items: ['Clean camera lenses', 'Hard drive health check', 'Verify remote viewing active', 'Realign shifted cameras'] },
                { icon: Server, title: 'ICT / Network', items: ['UPS battery check', 'Clear server logs', 'Firmware updates', 'Verify backups running'] },
                { icon: Zap, title: 'Priority Response', items: ['Guaranteed on-site within 4hrs', 'Server & camera outage SLA', 'Remote support included', 'No emergency call-out fees'] },
              ].map((block) => (
                <GlassCard key={block.title} className="p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-lg bg-hh-red/15 flex items-center justify-center text-hh-red shrink-0">
                      <block.icon size={18} />
                    </div>
                    <h4 className="font-semibold text-sm">{block.title}</h4>
                  </div>
                  <ul className="space-y-1.5">
                    {block.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-white/55">
                        <span className="h-1.5 w-1.5 rounded-full bg-hh-red shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              ))}
            </div>
          </div>

          <h3 className="text-xl font-bold text-center mb-3">Monthly Retainer Plans</h3>
          <p className="text-center text-white/50 mb-10 max-w-xl mx-auto text-sm">
            Sized for any site — from 4-camera setups to 32+ camera enterprise installations.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {[
              {
                name: 'Call-Out',
                subtitle: 'Pay Per Visit',
                price: 'From BWP 399',
                period: '/ visit',
                note: '+ P9.50 per km outside Gaborone',
                featured: false,
                tierClass: 'border-white/10',
                badgeClass: 'bg-gradient-to-r from-gray-600 to-gray-800',
                features: ['Remote support included', '1 on-site support', 'CCTV & ICT diagnostics'],
              },
              {
                name: 'Bronze',
                subtitle: 'Basic Cover 4ch',
                price: 'From BWP 850',
                period: '/ month',
                note: null,
                featured: false,
                tierClass: 'border-amber-700/30',
                badgeClass: 'bg-gradient-to-r from-amber-700 to-amber-900',
                features: ['Remote support included', '1 on-site visits/month', '1 on-site health check/month', 'CCTV diagnostics', 'Monthly status report', 'Priority 24hr response'],
              },
              {
                name: 'Silver 8',
                subtitle: 'Standard Cover',
                price: 'From BWP 2,400',
                period: '/ month',
                note: null,
                featured: true,
                tierClass: 'border-hh-red/40 shadow-red-glow',
                badgeClass: 'bg-gradient-to-r from-slate-400 to-slate-600',
                features: ['Remote support included', '2 on-site visits/month', '1 on-site health check/month', 'Monthly status report', 'Priority 24hr response'],
              },
              {
                name: 'Gold 16ch',
                subtitle: 'Premium Cover',
                price: 'From BWP 3,000',
                period: '/ month',
                note: null,
                featured: false,
                tierClass: 'border-yellow-500/30',
                badgeClass: 'bg-gradient-to-r from-yellow-500 to-yellow-700',
                features: ['24/7 monitoring alerts', 'Unlimited remote support', 'Monthly on-site visits', 'Full performance reports', 'Dedicated account manager', 'CCTV + UPS checks'],
              },
            ].map((tier) => (
              <GlassCard key={tier.name} className={`p-6 flex flex-col ${tier.tierClass}`}>
                {tier.featured && (
                  <div className="mb-3 text-xs font-semibold text-hh-red uppercase tracking-wider">Most Popular</div>
                )}
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold mb-3 ${tier.badgeClass} text-white w-fit`}>
                  {tier.name}
                </div>
                <p className="text-xs text-white/40 mb-3">{tier.subtitle}</p>
                <div className="mb-1">
                  <span className="text-2xl font-bold">{tier.price}</span>
                  <span className="text-xs text-white/40">{tier.period}</span>
                </div>
                {tier.note && (
                  <p className="text-[10px] text-hh-red/80 mb-4 leading-snug">{tier.note}</p>
                )}
                {!tier.note && <div className="mb-4" />}
                <ul className="space-y-2 mb-6 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-white/60">
                      <CheckCircle size={12} className="text-hh-red shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to={`/quote?service=${tier.name}`} className={`block text-center text-xs font-medium py-2.5 rounded-md transition-all mt-auto ${tier.featured ? 'bg-gradient-to-r from-hh-red to-red-700 text-white hover:brightness-110' : 'border border-white/10 text-white hover:bg-white/5'}`}>
                  Get Started
                </Link>
              </GlassCard>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/pricing" className="btn-secondary inline-flex items-center gap-2">
              Compare All Maintenance Plans <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <GlassCard className="p-10 text-center border-hh-red/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-hh-red/5 via-transparent to-hh-red/5" />
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Ready to Grow Your Business<br />with Technology?
              </h2>
              <p className="text-white/50 mb-8 max-w-md mx-auto">
                Join 100+ Botswana businesses already powered by Helpful Handlers. Let&apos;s start building together.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link to="/contact" className="btn-secondary">Schedule a Call</Link>
                <Link to="/quote?service=Home Footer" className="btn-primary">Get a Free Quote</Link>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  )
}
