import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import profile from '../data/profile'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (id) => {
    setOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled ? 'bg-ink/95 border-line backdrop-blur' : 'bg-ink/70 border-transparent backdrop-blur'
      }`}
    >
      <nav className="container-page flex items-center justify-between h-16">
        <button
          onClick={() => handleClick('home')}
          className="font-display font-semibold text-lg tracking-tight text-paper"
          aria-label="Go to top"
        >
          Hanshika<span className="text-brass">.</span>
        </button>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => handleClick(l.id)}
                className="px-3 py-2 text-sm text-steel hover:text-paper transition-colors font-body"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <a
          href={profile.resumeUrl}
          className="hidden md:inline-flex items-center border border-brass text-brass px-4 py-2 text-sm font-medium hover:bg-brass hover:text-ink transition-colors"
        >
          Resume
        </a>

        <button
          className="md:hidden text-paper"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-line bg-ink">
          <ul className="container-page py-2">
            {links.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => handleClick(l.id)}
                  className="w-full text-left py-3 text-steel hover:text-paper transition-colors border-b border-line/60 last:border-b-0"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}