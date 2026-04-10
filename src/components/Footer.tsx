import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone, Clock } from 'lucide-react'
import { useState } from 'react'
import { albumLinks } from '../data/images'

// ── Social brand SVG icons ────────────────────────────────────────────────────
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

const SpotifyIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
)

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/ncembakasi/',
    icon: InstagramIcon,
    bg: 'hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-500 hover:to-orange-400',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@ncembakasi',
    icon: YoutubeIcon,
    bg: 'hover:bg-red-600',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/ncembakasi',
    icon: FacebookIcon,
    bg: 'hover:bg-blue-600',
  },
  {
    label: 'Spotify',
    href: 'https://open.spotify.com/show/0vkb6y7Ac1erM9T8FAdRz8',
    icon: SpotifyIcon,
    bg: 'hover:bg-green-500',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/254733740077',
    icon: WhatsAppIcon,
    bg: 'hover:bg-green-600',
  },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) { setSubscribed(true); setEmail('') }
  }

  return (
    <footer className="bg-gray-950 text-gray-300">

      {/* ── MAIN FOOTER ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/logo.jpeg"
                alt="Nairobi Chapel Embakasi"
                className="w-14 h-14 object-cover"
                style={{ borderRadius: '8px' }}
              />
              <div>
                <p className="font-bold text-white text-base leading-tight">Nairobi Chapel</p>
                <p className="text-xs text-yellow-400 font-bold tracking-widest uppercase">Embakasi</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              A Christ-centered community transforming lives through practical faith, discipleship & purposeful living in Embakasi, Nairobi.
            </p>

            {/* Social icons with real brand logos */}
            <div className="flex gap-2 flex-wrap">
              {socialLinks.map(({ label, href, icon: Icon, bg }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className={`w-10 h-10 rounded-xl bg-gray-800 ${bg} text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110`}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home',          path: '/' },
                { label: 'About Us',      path: '/about' },
                { label: 'Sermons',       path: '/sermons' },
                { label: 'Ministries',    path: '/ministries' },
                { label: 'Events',        path: '/events' },
                { label: 'Gallery',       path: '/gallery' },
                { label: 'Announcements', path: '/announcements' },
                { label: 'Give',          path: '/give' },
                { label: 'Contact',       path: '/contact' },
              ].map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin size={16} className="mt-0.5 text-yellow-400 shrink-0" />
                <span>Rubani House (KALPA), Off Airport North Rd, Embakasi, Nairobi</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone size={16} className="text-yellow-400 shrink-0" />
                <a href="tel:+254733740077" className="hover:text-yellow-400 transition-colors">+254 733 740 077</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail size={16} className="text-yellow-400 shrink-0" />
                <a href="mailto:bensonmacharia@nairobichapel.org" className="hover:text-yellow-400 transition-colors break-all">
                  bensonmacharia@nairobichapel.org
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Clock size={16} className="text-yellow-400 shrink-0" />
                <span>Sundays at 10:00 AM</span>
              </li>
            </ul>

            {/* Photo album links */}
            <div className="mt-6 space-y-2">
              <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-2">Photo Albums</p>
              <a href={albumLinks.mar2026} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-yellow-400 transition-colors">
                <span className="text-yellow-400">📷</span> Mar 2026 Album
              </a>
              <a href={albumLinks.oct2025} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-yellow-400 transition-colors">
                <span className="text-yellow-400">📷</span> Oct 2025 Album
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Stay Connected</h4>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Get sermons, events, and community updates delivered to your inbox.
            </p>
            {subscribed ? (
              <div className="bg-green-900/40 border border-green-700 rounded-xl p-4 text-green-400 text-sm">
                🎉 You're subscribed! Welcome to the family.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="px-3 py-2.5 bg-gray-800 border border-gray-700 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-sm rounded-xl transition-colors"
                >
                  Subscribe
                </button>
              </form>
            )}

            {/* Spotify CTA */}
            <a
              href="https://open.spotify.com/show/0vkb6y7Ac1erM9T8FAdRz8"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center gap-3 p-3 bg-gray-800 hover:bg-green-900/40 border border-gray-700 hover:border-green-600 rounded-xl transition-all group"
            >
              <div className="w-9 h-9 bg-green-500 rounded-lg flex items-center justify-center shrink-0">
                <SpotifyIcon />
              </div>
              <div>
                <p className="text-white text-xs font-bold group-hover:text-green-400 transition-colors">Listen on Spotify</p>
                <p className="text-gray-500 text-xs">Church beyond Sunday</p>
              </div>
            </a>

            {/* Instagram CTA */}
            <a
              href="https://www.instagram.com/ncembakasi/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center gap-3 p-3 bg-gray-800 hover:bg-pink-900/30 border border-gray-700 hover:border-pink-600 rounded-xl transition-all group"
            >
              <div className="w-9 h-9 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-lg flex items-center justify-center shrink-0">
                <InstagramIcon />
              </div>
              <div>
                <p className="text-white text-xs font-bold group-hover:text-pink-400 transition-colors">@ncembakasi</p>
                <p className="text-gray-500 text-xs">Follow us on Instagram</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© 2026 Nairobi Chapel Embakasi. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="https://www.nairobichapel.org" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
              Main Website
            </a>
            <span>·</span>
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <span>·</span>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
