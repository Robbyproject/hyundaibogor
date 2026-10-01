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
    <>
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
          <button type="button" aria-label={open ? 'Tutup menu' : 'Buka menu'} aria-expanded={open} className="relative z-[60] rounded-lg p-2 text-ink md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>
      <div
        aria-hidden={!open}
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/30 transition-opacity duration-300 md:hidden ${open ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
      />
      <nav
        aria-label="Menu utama mobile"
        aria-hidden={!open}
        className={`fixed inset-y-0 right-0 z-50 w-[min(20rem,85vw)] border-l border-line bg-white px-6 pb-6 pt-16 shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <button
          type="button"
          aria-label="Tutup menu"
          tabIndex={open ? 0 : -1}
          onClick={() => setOpen(false)}
          className="absolute right-5 top-5 rounded-lg p-2 text-ink hover:bg-surface"
        >
          <X size={22} />
        </button>
        <div className="mb-5 border-b border-line pb-5">
          <img src={assets.dealerLogo} alt="Hyundai Authorized Dealer" className="h-5 w-auto object-contain" />
        </div>
        {links.map(([href, label]) => (
          <a key={href} href={`#${href}`} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)} className="block border-b border-line py-4 text-sm font-semibold text-ink last:border-0">
            {label}
          </a>
        ))}
      </nav>
    </>
  )
}
