import { useEffect, useState } from 'react'
import gsap from 'gsap'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { CatalogIntroSection } from '../sections/highlight-unit/CatalogIntroSection'
import { FeaturedUnitSection } from '../sections/highlight-unit/FeaturedUnitSection'
import { CarCatalogSection } from '../sections/highlight-unit/CarCatalogSection'
import type { CarCategory } from '../lib/data/CarPricelist'

export function HighlightUnitPage() {
  const [activeCategory, setActiveCategory] = useState<CarCategory | 'all'>('all')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
    const context = gsap.context(() => {
      // 1. Animasi Header & Santa Fe secara halus
      const introElements = gsap.utils.toArray<HTMLElement>('[data-reveal]')
      gsap.fromTo(
        introElements,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.05, ease: 'power2.out' }
      )

      // 2. Animasi Filter & Kartu Katalog secara BERSAMAAN (stagger dibuat sangat kecil agar instant)
      const catalogElements = gsap.utils.toArray<HTMLElement>('[data-catalog-item]')
      gsap.fromTo(
        catalogElements,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.03, ease: 'power2.out' }
      )
    })
    return () => context.revert()
  }, [])

  return (
    <>
      <Header />
      <main className="min-h-screen bg-paper pb-12">
        <CatalogIntroSection />
        <FeaturedUnitSection />
        <CarCatalogSection activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
      </main>
      <Footer />
    </>
  )
}