import { useState } from 'react'
import { Link } from 'react-router-dom'
import HHLogo from '../components/HHLogo'
import { Send, Paperclip, ExternalLink, Copy, FileText, Phone, ChevronLeft } from 'lucide-react'

const messages = [
  {
    from: 'support',
    name: 'Senior Technician - David K.',
    text: 'Hello, thank you for reaching out to Helpful Handlers Premium Support. How can I assist you today?',
    time: 'Jan 22, 2023, 10:33 AM',
  },
  {
    from: 'user',
    name: 'User',
    text: "Hi, I'm having trouble with my new solar inverter. It keeps displaying an error code.",
    time: 'Jan 28, 2023, 10:33 PM',
  },
  {
    from: 'support',
    name: 'Senior Technician - David K.',
    text: 'I see. Could you please provide the error code number shown on the display?',
    time: 'Jan 23, 2023, 10:38 AM',
  },
]

const quickLinks = [
  { label: 'How to reset your inverter', icon: ExternalLink },
  { label: 'AI API Documentation', icon: Copy },
  { label: 'Common Error Codes', icon: FileText },
  { label: 'Schedule a Service Call', icon: Phone },
]

export default function Chat() {
  const [input, setInput] = useState('')

  return (
    <div className="min-h-screen bg-hh-bg-primary flex flex-col">
      {/* Header */}
      <div className="glass-nav px-4 py-3 flex items-center gap-3">
        <Link to="/support" className="text-white/50 hover:text-white"><ChevronLeft size={20} /></Link>
        <HHLogo size={28} variant="white" />
        <div className="flex-1">
          <p className="text-sm font-medium">Support Team Online</p>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-hh-green animate-pulse" />
          <span className="text-xs text-hh-green">Online</span>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Chat Area */}
        <div className="flex-1 flex flex-col min-w-0">
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] sm:max-w-[60%] p-4 rounded-xl ${
                  m.from === 'user'
                    ? 'bg-hh-red/20 border border-hh-red/20'
                    : 'glass-card'
                }`}>
                  <p className="text-xs font-medium text-white/70 mb-1">{m.name}</p>
                  <p className="text-sm text-white/90">{m.text}</p>
                  <p className="text-[10px] text-white/40 mt-2">{m.time}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/[0.06]">
            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder="Type your message here..."
                className="input-dark flex-1"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button className="text-white/40 hover:text-white transition-colors">
                <Paperclip size={20} />
              </button>
              <button className="btn-primary px-4 py-2">
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-72 shrink-0 border-l border-white/[0.06] bg-hh-bg-secondary hidden lg:block p-6">
          <div className="flex flex-col items-center mb-6">
            <img src="/images/mascot-avatar.png" alt="Support" className="w-20 h-20 rounded-full mb-3" />
          </div>
          <h3 className="font-semibold mb-4">Quick Help</h3>
          <div className="space-y-2">
            {quickLinks.map((l) => (
              <button
                key={l.label}
                className="w-full flex items-center gap-3 p-3 rounded-lg text-sm text-white/70 hover:bg-white/[0.03] hover:text-white transition-colors text-left"
              >
                <l.icon size={16} />
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
