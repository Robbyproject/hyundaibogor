import { Star } from 'lucide-react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { SectionHeading } from '../components/SectionHeading'
import { testimonials } from '../lib/data/testimonial'

export function TestimonialsSection() {
  const viewportRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const viewport = viewportRef.current
    const track = trackRef.current
    if (!viewport || !track || testimonials.length < 2) return

    const cards = Array.from(track.children) as HTMLElement[]
    let currentIndex = 0
    let autoplay: gsap.core.Tween | undefined

    const getStep = () => {
      const gap = Number.parseFloat(getComputedStyle(track).gap) || 0
      return cards[0].getBoundingClientRect().width + gap
    }

    const advance = () => {
      currentIndex += 1
      gsap.to(track, {
        x: -currentIndex * getStep(),
        duration: 0.85,
        ease: 'power3.inOut',
        overwrite: true,
        onComplete: () => {
          if (currentIndex >= testimonials.length) {
            currentIndex = 0
            gsap.set(track, { x: 0 })
          }
          autoplay = gsap.delayedCall(3.8, advance)
        },
      })
    }

    const pause = () => autoplay?.pause()
    const resume = () => autoplay?.resume()

    autoplay = gsap.delayedCall(3.8, advance)
    viewport.addEventListener('mouseenter', pause)
    viewport.addEventListener('mouseleave', resume)

    return () => {
      autoplay?.kill()
      gsap.killTweensOf(track)
      viewport.removeEventListener('mouseenter', pause)
      viewport.removeEventListener('mouseleave', resume)
    }
  }, [])

  const cards = [...testimonials, ...testimonials].map((testimonial, index) => ({ ...testimonial, name: index, initials: '', series: '', location: '' }))

  return <section className="border-t border-line bg-white py-12 lg:py-16"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionHeading eyebrow="Bukti Kepuasan & Handover Unit" title="Apa Kata Konsumen Kami?" description="Dokumentasi nyata serah terima unit mobil baru bersama para konsumen setia AutoPrime." action={<div className="flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-2 text-xs font-semibold text-ink"><span className="flex gap-0.5 text-amber-500">{[1, 2, 3, 4, 5].map((star) => <Star key={star} size={14} fill="currentColor" />)}</span> 5.0 / 5.0 <span className="hidden text-muted sm:inline">(500+ Konsumen Puas)</span></div>} /><div ref={viewportRef} className="overflow-hidden" data-reveal><div ref={trackRef} className="flex gap-4"><>{cards.map((testimonial, index) => <article key={`${testimonial.name}-${index}`} className="w-[84vw] shrink-0 overflow-hidden rounded-xl border border-line bg-white shadow-sm transition-shadow hover:shadow-md hover:shadow-blue-100/50 sm:w-[48%] lg:w-[31.8%]"><div className="relative aspect-[4/3] overflow-hidden bg-surface"><img src={testimonial.image} alt={`Dokumentasi serah terima ${testimonial.name}`} className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]" /><span className="absolute left-3 top-3 rounded-full bg-ink/85 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-white">Unit Terkirim</span><span className="absolute right-3 top-3 max-w-[55%] truncate rounded-full bg-white/90 px-2 py-1 text-[9px] font-bold text-secondary">{testimonial.series}</span></div><div className="p-4"><div className="mb-2 flex gap-0.5 text-amber-500">{[1, 2, 3, 4, 5].map((star) => <Star key={star} size={13} fill="currentColor" />)}<span className="ml-1 text-[11px] font-bold text-ink">5.0</span></div><p className="text-xs font-medium italic leading-relaxed text-ink">“{testimonial.quote}”</p><div className="mt-4 flex items-center justify-between gap-2 border-t border-line pt-3"><div className="flex min-w-0 items-center gap-2"><div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[10px] font-bold text-secondary">{testimonial.initials}</div><div className="min-w-0"><p className="truncate text-[11px] font-bold text-ink">{testimonial.name}</p><p className="truncate text-[10px] text-muted">{testimonial.series}</p></div></div><span className="flex shrink-0 items-center gap-1 text-[10px] text-muted"><span className="text-secondary">Jakarta</span></span></div></div></article>)}</></div></div></div></section>
}
