import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { HeroSection } from '../sections/HeroSection'
import { HighlightSection } from '../sections/HighlightSection'
import { TestimonialsSection } from '../sections/TestimonialsSection'

export function HomePage() {
  return <><Header /><main><HeroSection /><HighlightSection /><TestimonialsSection /></main><Footer /></>
}
