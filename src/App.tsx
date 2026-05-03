import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Hardware from './pages/Hardware'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import ProjectDetail from './pages/ProjectDetail'
import Dashboard from './pages/Dashboard'
import Maintenance from './pages/Maintenance'
import Support from './pages/Support'
import Chat from './pages/Chat'
import Quote from './pages/Quote'
import Success from './pages/Success'
import Certificate from './pages/Certificate'
import Warranty from './pages/Warranty'
import Milestone from './pages/Milestone'
import Referrals from './pages/Referrals'
import Feedback from './pages/Feedback'
import SettingsPage from './pages/SettingsPage'
import Showcase from './pages/Showcase'
import Clients from './pages/Clients'
// Service pages
import AIService from './pages/services/AIService'
import MobileService from './pages/services/MobileService'
import SoftwareService from './pages/services/SoftwareService'
import ICTService from './pages/services/ICTService'
import SolarService from './pages/services/SolarService'
import DesignService from './pages/services/DesignService'
import NetworkService from './pages/services/NetworkService'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function Layout({ children, showNav = true, showFooter = true }: { children: React.ReactNode; showNav?: boolean; showFooter?: boolean }) {
  return (
    <>
      {showNav && <Navbar />}
      {children}
      {showFooter && <Footer />}
    </>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/hardware" element={<Layout><Hardware /></Layout>} />
        <Route path="/pricing" element={<Layout><Pricing /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/project" element={<Layout><ProjectDetail /></Layout>} />
        <Route path="/showcase" element={<Layout><Showcase /></Layout>} />
        <Route path="/clients" element={<Layout><Clients /></Layout>} />
        {/* Service pages */}
        <Route path="/services/ai" element={<Layout><AIService /></Layout>} />
        <Route path="/services/mobile" element={<Layout><MobileService /></Layout>} />
        <Route path="/services/software" element={<Layout><SoftwareService /></Layout>} />
        <Route path="/services/ict" element={<Layout><ICTService /></Layout>} />
        <Route path="/services/solar" element={<Layout><SolarService /></Layout>} />
        <Route path="/services/design" element={<Layout><DesignService /></Layout>} />
        <Route path="/services/network" element={<Layout><NetworkService /></Layout>} />
        {/* App pages */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/support" element={<Layout><Support /></Layout>} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/success" element={<Success />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/warranty" element={<Warranty />} />
        <Route path="/milestone" element={<Milestone />} />
        <Route path="/referrals" element={<Referrals />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </>
  )
}
