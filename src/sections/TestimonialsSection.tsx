import { ArrowLeft, ArrowRight, Star } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { SectionHeading } from '../components/SectionHeading'
import { testimonials } from '../lib/data/testimonial'

export function TestimonialsSection() {
  const viewportRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const touchStartXRef = useRef<number | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [maxIndex, setMaxIndex] = useState(0)

  useEffect(() => {
    const viewport = viewportRef.current
    const track = trackRef.current
    if (!viewport || !track) return

    const updateBounds = () => {
      const firstCard = track.firstElementChild as HTMLElement | null
      if (!firstCard) return
      const gap = Number.parseFloat(getComputedStyle(track).gap) || 0
      const step = firstCard.getBoundingClientRect().width + gap
      const maxOffset = Math.max(0, track.scrollWidth - viewport.clientWidth)
      setMaxIndex(Math.ceil(maxOffset / step))
      setCurrentIndex(0)
      gsap.set(track, { x: 0 })
    }

    updateBounds()
    window.addEventListener('resize', updateBounds)

    return () => {
      window.removeEventListener('resize', updateBounds)
      gsap.killTweensOf(track)
    }
  }, [])

  const moveTo = (index: number) => {
    const track = trackRef.current
    const firstCard = track?.firstElementChild as HTMLElement | null
    if (!track || !firstCard) return

    const gap = Number.parseFloat(getComputedStyle(track).gap) || 0
    const step = firstCard.getBoundingClientRect().width + gap
    const nextIndex = Math.max(0, Math.min(index, maxIndex))
    setCurrentIndex(nextIndex)
    gsap.to(track, {
      x: -Math.min(nextIndex * step, track.scrollWidth - viewportRef.current!.clientWidth),
      duration: 0.65,
      ease: 'power3.inOut',
      overwrite: true,
    })
  }

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartXRef.current = event.changedTouches[0]?.clientX ?? null
  }

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const startX = touchStartXRef.current
    const endX = event.changedTouches[0]?.clientX
    touchStartXRef.current = null
    if (startX === null || endX === undefined) return

    const distance = endX - startX
    if (Math.abs(distance) < 40) return
    moveTo(currentIndex + (distance < 0 ? 1 : -1))
  }

  return (
    <section className="border-t border-line bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Bukti Kepuasan & Handover Unit"
          title="Apa Kata Konsumen Kami?"
          description="Dokumentasi nyata serah terima unit mobil baru bersama para konsumen setia Hyundai."
          action={
            <div className="flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-2 text-xs font-semibold text-ink">
              <span className="flex gap-0.5 text-amber-500">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={14} fill="currentColor" />
                ))}
              </span>{' '}
              5.0 / 5.0 <span className="hidden text-muted sm:inline">(500+ Konsumen Puas)</span>
            </div>
          }
        />
        <div className="relative" data-reveal>
          <div
            ref={viewportRef}
            className="touch-pan-y overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={() => { touchStartXRef.current = null }}
          >
            <div ref={trackRef} className="flex gap-4">
              {testimonials.map((testimonial) => (
                <article
                  key={testimonial.image}
                  className="w-[84vw] shrink-0 overflow-hidden rounded-xl border border-line bg-white shadow-sm transition-shadow hover:shadow-md hover:shadow-blue-100/50 sm:w-[48%] lg:w-[31.8%]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                    <img
                      src={testimonial.image}
                      alt="Dokumentasi serah terima unit"
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-ink/85 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-white">
                      Unit Terkirim
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
          {maxIndex > 0 && (
            <div className="pointer-events-none absolute inset-y-0 left-2 right-2 hidden items-center justify-between sm:flex">
              <button
                type="button"
                onClick={() => moveTo(currentIndex - 1)}
                disabled={currentIndex === 0}
                aria-label="Testimoni sebelumnya"
                className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white/95 text-ink shadow-md transition-colors hover:border-secondary hover:text-secondary disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-line disabled:hover:text-ink"
              >
                <ArrowLeft size={17} />
              </button>
              <button
                type="button"
                onClick={() => moveTo(currentIndex + 1)}
                disabled={currentIndex >= maxIndex}
                aria-label="Testimoni berikutnya"
                className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white/95 text-ink shadow-md transition-colors hover:border-secondary hover:text-secondary disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-line disabled:hover:text-ink"
              >
                <ArrowRight size={17} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}