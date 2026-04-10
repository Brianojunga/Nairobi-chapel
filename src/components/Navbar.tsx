import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react'

interface NavbarProps {
  darkMode: boolean
  setDarkMode: (v: boolean) => void
}

const mainLinks = [
  { label: 'Home',       path: '/' },
  { label: 'About',      path: '/about' },
  { label: 'Sermons',    path: '/sermons' },
  { label: 'Ministries', path: '/ministries' },
  { label: 'Events',     path: '/events' },
]

const moreLinks = [
  { label: 'Gallery',       path: '/gallery' },
  { label: 'Announcements', path: '/announcements' },
  { label: 'Contact',       path: '/contact' },
]

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [moreOpen, setMoreOpen]     = useState(false)
  const [scrolled, setScrolled]     = useState(false)
  const location = useLocation()

  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false); setMoreOpen(false) }, [location])

  const isActive = (path: string) => location.pathname === path
  const transparent = isHome && !scrolled

  const headerBg = transparent
    ? 'bg-transparent'
    : 'bg-white/98 dark:bg-gray-950/98 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800/60 shadow-sm'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[76px]">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <img
              src="/logo.jpeg"
              alt="Nairobi Chapel Embakasi"
              className="w-11 h-11 object-cover shadow-md group-hover:opacity-90 transition-opacity"
              style={{ borderRadius: '8px' }}
            />
            <div className="hidden sm:block leading-tight">
              <p className={`font-bold text-[15px] tracking-tight transition-colors ${transparent ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                Nairobi Chapel
              </p>
              <p className="text-[11px] text-yellow-500 font-semibold tracking-[0.15em] uppercase">Embakasi</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center">
            {mainLinks.map(link => {
              const active = isActive(link.path)
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-5 py-2 text-[15px] font-semibold transition-colors group ${
                    active
                      ? transparent ? 'text-white' : 'text-gray-900 dark:text-white'
                      : transparent
                        ? 'text-white/75 hover:text-white'
                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {link.label}
                  {/* Purple animated underline */}
                  <span
                    className={`absolute bottom-0 left-5 right-5 h-[2.5px] rounded-full transition-all duration-300 origin-left bg-purple-600 dark:bg-purple-400 ${
                      active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              )
            })}

            {/* More dropdown */}
            <div className="relative">
              <button
                onClick={() => setMoreOpen(v => !v)}
                onBlur={() => setTimeout(() => setMoreOpen(false), 150)}
                className={`flex items-center gap-1.5 px-5 py-2 text-[15px] font-semibold transition-colors ${
                  transparent
                    ? 'text-white/75 hover:text-white'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                More
                <ChevronDown size={14} className={`transition-transform duration-200 ${moreOpen ? 'rotate-180' : ''}`} />
              </button>
              {moreOpen && (
                <div className="absolute top-full right-0 mt-3 w-48 bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden z-50 py-1">
                  {moreLinks.map(link => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`block px-4 py-3 text-[14px] font-medium transition-colors ${
                        isActive(link.path)
                          ? 'text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-900/20'
                          : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label={darkMode ? 'Light mode' : 'Dark mode'}
              className={`w-9 h-9 flex items-center justify-center rounded-lg transition-colors ${
                transparent
                  ? 'text-white/70 hover:text-white hover:bg-white/10'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <Link
              to="/give"
              className="hidden sm:inline-flex items-center px-5 py-2.5 bg-purple-700 hover:bg-purple-800 text-white font-semibold text-[14px] rounded-lg transition-colors shadow-sm"
            >
              Give
            </Link>

            <button
              onClick={() => setMobileOpen(v => !v)}
              aria-label="Menu"
              className={`lg:hidden w-9 h-9 flex items-center justify-center rounded-lg transition-colors ${
                transparent
                  ? 'text-white hover:bg-white/10'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              {mobileOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800">
          <nav className="px-4 py-3 flex flex-col">
            {[...mainLinks, ...moreLinks].map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-3.5 text-[15px] font-medium border-b border-gray-50 dark:border-gray-900 last:border-0 transition-colors flex items-center justify-between ${
                  isActive(link.path)
                    ? 'text-purple-700 dark:text-purple-400'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {link.label}
                {isActive(link.path) && <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />}
              </Link>
            ))}
            <div className="flex gap-2 pt-3 mt-1">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-medium text-sm rounded-lg"
              >
                {darkMode ? <><Sun size={15} /> Light</> : <><Moon size={15} /> Dark</>}
              </button>
              <Link to="/give" className="flex-1 py-3 bg-purple-700 hover:bg-purple-800 text-white font-semibold text-sm rounded-lg text-center transition-colors">
                Give
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
