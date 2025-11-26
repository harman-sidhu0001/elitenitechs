import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Lenis from '@studio-freight/lenis'
import './index.css'
import App from './App.tsx'
import { initSentry } from './lib/sentry'
import { reportWebVitals } from './lib/analytics'

// Initialize error monitoring
initSentry()

// Initialize smooth scrolling
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
})

function raf(time: number) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// Report Web Vitals
reportWebVitals()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
