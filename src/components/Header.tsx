import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { assets } from '../lib/data/assets'

// 'highlight-unit' diubah menjadi 'highlight' agar sesuai dengan <section id="highlight">
const links = [
  ['home', 'Home'],
  ['highlight-unit', 'Unit Unggulan']
]

export function Header() {
  const [open, setOpen] = useState(false) 

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={assets.dealerLogo} alt="Hyundai Authorized Dealer" className="h-7 w-auto object-contain" />
          <span className="hidden border-l border-line pl-3 text-xs font-bold uppercase tracking-[0.12em] text-ink sm:block">Executive Sales</span>
        </a>
        <nav className="ml-auto hidden items-center gap-7 md:flex">
          {links.map(([href, label]) => (
            <a key={href} href={`#${href}`} className="text-sm font-semibold text-muted transition-colors hover:text-secondary">
              {label}
            </a>
          ))}
        </nav>
        <button type="button" aria-label="Buka menu" className="rounded-lg p-2 text-ink md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-line bg-paper px-5 py-4 md:hidden">
          {links.map(([href, label]) => (
            <a key={href} href={`#${href}`} onClick={() => setOpen(false)} className="block border-b border-line py-3 text-sm font-semibold text-ink last:border-0">
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}