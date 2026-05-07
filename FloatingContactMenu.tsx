import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Youtube, Facebook, Mail, X, HelpCircle } from 'lucide-react'

const WhatsAppGoldIcon = ({ size = 20 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" 
      fill="url(#goldGradient)"
    />
    <defs>
      <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#BF953F" />
        <stop offset="25%" stopColor="#FCF6BA" />
        <stop offset="50%" stopColor="#B38728" />
        <stop offset="75%" stopColor="#FBF5B7" />
        <stop offset="100%" stopColor="#AA771C" />
      </linearGradient>
    </defs>
  </svg>
)

export default function FloatingContactMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const whatsappUrl = "https://wa.me/26774170800?text=Hello%20Helpful%20Handlers%20BW%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
  
  const contacts = [
    { 
      name: 'WhatsApp', 
      icon: WhatsAppGoldIcon, 
      color: 'bg-black/80', 
      href: whatsappUrl,
      label: 'Chat on WhatsApp Gold'
    },
    { 
      name: 'Facebook', 
      icon: Facebook, 
      color: 'bg-[#1877F2]', 
      href: 'https://www.facebook.com/share/1CkRokCZHZ/?mibextid=wwXIfr',
      label: 'Follow on Facebook'
    },
    { 
      name: 'YouTube', 
      icon: Youtube, 
      color: 'bg-[#FF0000]', 
      href: 'https://www.youtube.com/@HelpfulHandlersBw',
      label: 'Watch on YouTube'
    },
    { 
      name: 'Email', 
      icon: Mail, 
      color: 'bg-hh-red', 
      href: 'mailto:helpfulhandlersbw@gmail.com',
      label: 'Send an Email'
    },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <div className="flex flex-col items-end gap-3 mb-2">
            {contacts.map((contact, index) => (
              <motion.a
                key={contact.name}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                transition={{ delay: (contacts.length - 1 - index) * 0.05 }}
                className={`${contact.color} p-3 rounded-full shadow-lg flex items-center justify-center hover:brightness-110 transition-all group relative`}
                aria-label={contact.label}
              >
                {contact.icon ? (
                  <contact.icon size={20} className={contact.name === 'WhatsApp' ? '' : 'text-white'} />
                ) : null}
                <span className="absolute right-full mr-3 bg-white text-black text-[10px] font-bold px-2 py-1 rounded shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {contact.label}
                </span>
              </motion.a>
            ))}
          </div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-white text-black' : 'bg-hh-red text-white'}`}
        aria-label="Contact options"
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <X size={24} /> : <HelpCircle size={24} />}
        </motion.div>
        
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-hh-red animate-ping opacity-20 pointer-events-none" />
        )}
      </motion.button>
    </div>
  )
}
