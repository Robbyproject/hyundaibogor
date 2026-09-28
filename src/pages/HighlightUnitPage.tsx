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
      const introElements = gsap.utils.toArray<HTMLElement>('[data-reveal]')
      gsap.fromTo(introElements, { opacity: 0, y: 26 }, { opacity: 1, y: 0, duration: 0.75, stagger: 0.08, ease: 'power3.out' })
      gsap.fromTo('[data-catalog-card]', { opacity: 0, y: 32 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, delay: 0.25, ease: 'power3.out' })
    })
    return () => context.revert()
  }, [])

  return <><Header /><main className="min-h-screen bg-paper pb-12"><CatalogIntroSection activeCategory={activeCategory} onCategoryChange={setActiveCategory} /><FeaturedUnitSection /><CarCatalogSection activeCategory={activeCategory} /></main><Footer /></>
}
