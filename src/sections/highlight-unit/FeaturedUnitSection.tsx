import { useEffect, useRef, useState } from 'react'
import { MessageCircle } from 'lucide-react'
import gsap from 'gsap'
import type { CarCategory, CarPricelistItem } from '../../lib/data/CarPricelist'
import { carPricelist, featuredUnit } from '../../lib/data/CarPricelist'
import { whatsappUrl } from '../../lib/data/site'

const categoryTags: Array<{ label: string; category: CarCategory }> = [
  { label: 'Hybrid & Bensin', category: 'hybrid' },
  { label: 'Family SUV', category: 'suv' },
]

export function FeaturedUnitSection() {
  const [selectedCar, setSelectedCar] = useState<CarPricelistItem | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<CarCategory | null>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const activeUnit = selectedCar
    ? { name: selectedCar.name, image: selectedCar.image, description: selectedCar.description, price: selectedCar.priceFrom, availability: selectedCar.tagline, variants: selectedCar.variants }
    : { name: featuredUnit.name, image: featuredUnit.image, description: featuredUnit.description, price: featuredUnit.price, availability: featuredUnit.availability, variants: featuredUnit.variants }

  useEffect(() => {
    if (!imageRef.current) return
    gsap.fromTo(imageRef.current, { opacity: 0.35, scale: 1.04 }, { opacity: 1, scale: 1, duration: 0.55, ease: 'power2.out' })
  }, [selectedCar])

  const resetFeatured = () => {
    setSelectedCar(null)
    setSelectedCategory(null)
  }

  const selectCategory = (category: CarCategory) => {
    const nextCar = carPricelist.find((car) => car.categories.includes(category))
    if (nextCar) setSelectedCar(nextCar)
    setSelectedCategory(category)
  }

  // Kalimat pesan formal, sopan, dan mencantumkan nama unit secara dinamis
  const message = encodeURIComponent(
    `Halo Mbak Deva, perkenalkan saya tertarik dengan unit Hyundai ${activeUnit.name} setelah melihat penawaran di hyundaijabodetabek.com. Saya bermaksud untuk berkonsultasi mengenai promo resmi, penawaran harga OTR, serta rincian simulasi kreditnya. Mohon informasi lebih lanjut jika berkenan. Terima kasih.`
  )

  // Memastikan URL WhatsApp bersih dari query text bawaan site.ts
  const chatUrl = `${whatsappUrl.split('?')[0]}?text=${message}`

  return (
    <section className="mx-auto my-6 w-full max-w-7xl px-5 lg:px-8" data-reveal>
      <div className="relative overflow-hidden rounded-2xl border border-line bg-gradient-to-b from-blue-50 to-white p-5 shadow-sm lg:p-9">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="relative z-10 grid items-center gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={resetFeatured}
                className={`rounded px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] transition-colors ${selectedCategory === null ? 'bg-secondary text-white' : 'bg-blue-100 text-ink hover:bg-blue-200'}`}
              >
                {featuredUnit.eyebrow}
              </button>
              {categoryTags.map((tag) => (
                <button
                  key={tag.category}
                  type="button"
                  onClick={() => selectCategory(tag.category)}
                  className={`rounded px-3 py-1 text-[10px] font-bold uppercase tracking-[0.1em] transition-colors ${selectedCategory === tag.category ? 'bg-secondary text-white' : 'bg-blue-100 text-ink hover:bg-blue-200'}`}
                >
                  {tag.label}
                </button>
              ))}
            </div>
            <h2 className="text-4xl font-bold tracking-[-0.05em] text-ink transition-opacity lg:text-6xl">{activeUnit.name}</h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">{activeUnit.description}</p>
            <div className="group mt-5 aspect-[16/9] overflow-hidden rounded-xl bg-white">
              <img ref={imageRef} src={activeUnit.image} alt={activeUnit.name} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
            </div>
          </div>
          <div className="flex flex-col rounded-xl border border-line bg-white p-5 shadow-sm lg:col-span-5 lg:p-7">
            <div className="mb-4 border-b border-line pb-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted">Harga On The Road Mulai</span>
              <div className="mt-1 text-2xl font-bold tracking-tight text-secondary">{activeUnit.price}</div>
              <p className="mt-1 text-xs text-muted">{activeUnit.availability}</p>
            </div>
            <div className="mb-6 max-h-56 space-y-2 overflow-y-auto pr-1">
              {activeUnit.variants.map((variant) => (
                <div key={variant.name} className={`flex items-center justify-between rounded px-3 py-2 text-xs ${variant.highlight ? 'bg-blue-50' : 'bg-surface'}`}>
                  <span className="font-semibold text-ink">{variant.name}</span>
                  <span className={`font-bold ${variant.highlight ? 'text-secondary' : 'text-muted'}`}>{variant.price}</span>
                </div>
              ))}
            </div>
            <div className="mt-auto">
              <a
                href={chatUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-ink px-4 py-3 text-xs font-bold text-white transition-colors hover:bg-secondary"
              >
                <MessageCircle size={15} /> Minta Penawaran
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}