import { useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import { HomePage } from './pages/HomePage'
import { HighlightUnitPage } from './pages/HighlightUnitPage'

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

  return route === '#highlight-unit' ? <HighlightUnitPage /> : <HomePage />
}

export default App
