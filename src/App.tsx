import { useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import { HomePage } from './pages/HomePage'
import { HighlightUnitPage } from './pages/HighlightUnitPage'
import { whatsappUrl } from './lib/data/site'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [route, setRoute] = useState(window.location.hash)

  useEffect(() => {
    const handleHashChange = () => setRoute(window.location.hash)
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true })
    let frame = 0
    const raf = (time: number) => { lenis.raf(time); frame = requestAnimationFrame(raf) }
    frame = requestAnimationFrame(raf)
    const reveals = gsap.utils.toArray<HTMLElement>('[data-reveal]')
    reveals.forEach((element) => gsap.fromTo(element, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: element, start: 'top 88%', once: true } }))
    return () => { cancelAnimationFrame(frame); lenis.destroy(); ScrollTrigger.getAll().forEach((trigger) => trigger.kill()) }
  }, [])

  return (
    <>
      {route === '#highlight-unit' ? <HighlightUnitPage /> : <HomePage />}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Hubungi sales via WhatsApp"
        title="Hubungi sales via WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-900/20 transition-transform hover:scale-105 hover:bg-[#20BA5A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
      >
        <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none" aria-hidden="true">
          <path
            d="M26.7 15.3a10.7 10.7 0 0 1-15.9 9.3L5.3 26l1.4-5.3a10.7 10.7 0 1 1 20-5.4Z"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.2 10.5c.3-.5.6-.6 1-.6h.7c.2 0 .4.1.6.5l1.1 2.5c.1.3.1.5-.1.8l-.8 1c-.2.2-.3.4-.1.7.2.4.8 1.2 1.6 1.9.9.8 1.7 1.1 2.1 1.2.3.1.6.1.8-.2l1-1.2c.2-.3.5-.3.8-.2l2.3 1.1c.3.1.5.3.5.5s-.1 1-.5 1.4c-.4.5-1.1 1-2.2 1s-2.7-.5-4.5-1.7c-2.2-1.5-3.7-3.8-4-4.5-.3-.7-.6-1.9-.3-3 .2-.7.5-1.1.7-1.4Z"
            fill="currentColor"
          />
        </svg>
      </a>
    </>
  )
}

export default App
