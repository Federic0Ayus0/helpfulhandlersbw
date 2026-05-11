import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import emailjs from '@emailjs/browser'
import './index.css'
import App from './App.tsx'

emailjs.init("j6_S_7w2L5S7OQ9kC")

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
