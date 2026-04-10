import { Link } from 'react-router-dom'
import { Play, Calendar, MapPin, Clock, ArrowRight, Star, ExternalLink, Users, BookOpen } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { photos, albumLinks } from '../data/images'

// ─── Hero collage images (Unsplash — always load) ────────────────────────────
const COLLAGE = [
  'https://images.unsplash.com/photo-1438232992991-995b671e4b8a?w=700&h=500&fit=crop&q=85',
  'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=700&h=900&fit=crop&q=85',
  'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=700&h=500&fit=crop&q=85',
]

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

const sermons = [
  { title: 'The Journey of Transformation', speaker: 'Pastor Benson Macharia', date: 'Mar 30, 2026', duration: '42 min', topic: 'Discipleship', thumb: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=600&h=380&fit=crop&q=80' },
  { title: 'Faith That Works Monday–Saturday', speaker: 'Pastor Benson Macharia', date: 'Mar 23, 2026', duration: '38 min', topic: 'Practical Faith', thumb: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=380&fit=crop&q=80' },
  { title: 'Overcoming Spiritual Fatigue', speaker: 'Guest Speaker', date: 'Mar 16, 2026', duration: '45 min', topic: 'Renewal', thumb: 'https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=600&h=380&fit=crop&q=80' },
]

const events = [
  { title: 'Sunday Worship', date: 'Every Sunday', time: '10:00 AM', location: 'Rubani House', category: 'Worship' },
  { title: 'Youth Night', date: 'Apr 18, 2026', time: '6:00 PM', location: 'Main Hall', category: 'Youth' },
  { title: "Women's Fellowship", date: 'Apr 20, 2026', time: '3:00 PM', location: 'Conference Room', category: 'Women' },
  { title: 'Community Outreach', date: 'Apr 26, 2026', time: '8:00 AM', location: 'Embakasi Estate', category: 'Outreach' },
]

const testimonials = [
  { name: 'Sarah M.', role: 'Young Professional', text: "I came lost and found purpose. The discipleship journey helped me understand my faith in ways I never thought possible. This is not just a church — it's a family.", stars: 5 },
  { name: 'James K.', role: 'University Student', text: "The sermons on Spotify keep me growing throughout the week. It's truly church beyond Sunday. My prayer life has completely transformed.", stars: 5 },
  { name: 'First-Time Visitor', role: 'Community Member', text: "The preacher spoke like a human being. We were allowed to think, engage, and discuss. After the sermon we actually unpacked it together. 10/10.", stars: 5 },
]

const stats = [
  { value: '200+', label: 'Lives Transformed' },
  { value: '12+',  label: 'Small Groups' },
  { value: '100+', label: 'Sermons on Spotify' },
  { value: '7',    label: 'Active Ministries' },
]

export default function Home() {
  const intro        = useInView()
  const statsSection = useInView()
  const sermonsSec   = useInView()
  const eventsSec    = useInView()
  const testimonialsSec = useInView()

  return (
    <div className="overflow-x-hidden bg-white dark:bg-gray-950">

      {/* ══════════════════════════════════════════════════════════
          HERO — Full-width headline, then split: text left + collage right
      ══════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col bg-gray-950 overflow-hidden">

        {/* ── BACKGROUND IMAGE — same as CTA section ── */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1600&h=900&fit=crop&q=80"
            alt=""
            className="w-full h-full object-cover opacity-[0.18]"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950/90 via-gray-950/70 to-gray-950/50" />
        </div>

        {/* ── FULL-WIDTH HEADLINE BAND ── */}
        <div className="relative z-10 pt-24 pb-10 px-8 sm:px-12 lg:px-16 xl:px-20">
          {/* Live pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 mb-7 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            <span className="text-white/70 text-xs font-semibold tracking-wide">Every Sunday · 10:00 AM · Rubani House, Embakasi</span>
          </div>

          {/* Headline — spans full width, no line breaks forced */}
          <h1 className="text-[clamp(2.8rem,6vw,5.5rem)] font-bold leading-[1.0] tracking-tight text-white mb-5 max-w-5xl">
            Transform Your Faith.{' '}
            <span className="text-yellow-400">Transform Your Life.</span>
          </h1>

          {/* Subtext — full width, then narrows */}
          <p className="text-white/55 text-[1.1rem] leading-relaxed max-w-2xl mb-2">
            A Christ-centered community transforming lives through practical faith, discipleship &amp; purposeful living in Embakasi, Nairobi.
          </p>
          <p className="text-yellow-400/80 text-sm font-semibold tracking-[0.18em] uppercase mb-0">
            Growing D.E.E.P to reach wide
          </p>
        </div>

        {/* ── BOTTOM HALF: CTAs left + Collage right ── */}
        <div className="relative z-10 flex flex-1 min-h-0">

          {/* Left: CTAs + stats */}
          <div className="flex flex-col justify-between w-full lg:w-[52%] px-8 sm:px-12 lg:px-16 xl:px-20 pb-14">
            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-10">
              <Link to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold text-sm rounded-xl transition-all hover:scale-105 shadow-lg shadow-yellow-400/20">
                <Calendar size={16} /> Join Us Sunday
              </Link>
              <a href="https://open.spotify.com/show/0vkb6y7Ac1erM9T8FAdRz8" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1DB954] hover:bg-[#1aa34a] text-white font-bold text-sm rounded-xl transition-all hover:scale-105">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
                Listen on Spotify
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4 border-t border-white/10 pt-8">
              {stats.map(s => (
                <div key={s.label}>
                  <p className="text-2xl font-bold text-white">{s.value}</p>
                  <p className="text-white/35 text-xs mt-0.5 leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Photo collage — desktop only */}
          <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[50%] overflow-hidden">
            {/* Gradient bleed from left */}
            <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-gray-950 to-transparent z-10 pointer-events-none" />
            {/* Top gradient for navbar */}
            <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-gray-950/50 to-transparent z-10 pointer-events-none" />

            <div className="flex gap-3 w-full h-full p-4 pl-10">
              {/* Col 1 — offset down */}
              <div className="flex flex-col gap-3 flex-1 mt-16">
                <div className="flex-1 overflow-hidden rounded-2xl">
                  <img src={COLLAGE[0]} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="h-36 overflow-hidden rounded-2xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #5B4F80 0%, #7B6FA0 50%, #9B8FC0 100%)' }}>
                  <div className="text-center px-4">
                    <p className="text-yellow-400 text-2xl font-bold tracking-tight drop-shadow">D.E.E.P</p>
                    <p className="text-white/70 text-[10px] mt-1.5 tracking-[0.2em] uppercase">Growing Deep</p>
                    <div className="flex justify-center gap-1 mt-2">
                      <span className="w-1 h-1 rounded-full bg-yellow-400/60" />
                      <span className="w-1 h-1 rounded-full bg-yellow-400/40" />
                      <span className="w-1 h-1 rounded-full bg-yellow-400/20" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Col 2 — tall center */}
              <div className="flex-1 overflow-hidden rounded-2xl">
                <img src={COLLAGE[1]} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>

              {/* Col 3 — offset up */}
              <div className="flex flex-col gap-3 flex-1 mb-16">
                <div className="h-36 overflow-hidden rounded-2xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #92700A 0%, #C9960C 30%, #F5C518 60%, #FFE066 100%)' }}>
                  <div className="text-center px-4">
                    <img src="/logo.jpeg" alt="NC" className="w-12 h-12 rounded-xl object-cover mx-auto mb-2 shadow-lg" />
                    <p className="text-gray-900 text-xs font-bold tracking-tight">Nairobi Chapel</p>
                    <p className="text-gray-800/70 text-[10px] tracking-[0.15em] uppercase mt-0.5">Embakasi</p>
                  </div>
                </div>
                <div className="flex-1 overflow-hidden rounded-2xl">
                  <img src={COLLAGE[2]} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile background */}
        <div className="lg:hidden absolute inset-0 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&h=900&fit=crop&q=80" alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/85 to-gray-950/50" />
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════
          INTRO — Who we are
      ══════════════════════════════════════════════════════════ */}
      <section id="intro" ref={intro.ref}
        className={`py-24 bg-white dark:bg-gray-950 transition-all duration-700 ${intro.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-purple-600 dark:text-purple-400 mb-3">Welcome Home</p>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
                Welcome to Nairobi Chapel Embakasi
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-5">
                We are a discipleship-driven church that equips you to live out your faith practically — not just on Sunday, but every single day.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-10">
                Through weekly series-based teaching, small group discussions, and accessible on-demand sermons, faith becomes a daily practice. We address real issues — relationships, mental health, purpose, and impact.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/about" className="inline-flex items-center gap-2 px-6 py-3 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-lg transition-colors text-sm">
                  <Users size={15} /> Our Story
                </Link>
                <a href={albumLinks.mar2026} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 dark:border-gray-700 hover:border-purple-400 text-gray-700 dark:text-gray-300 font-semibold rounded-lg transition-colors text-sm">
                  <ExternalLink size={15} /> View Photos
                </a>
              </div>
            </div>
            {/* Staggered photo grid */}
            <div className="grid grid-cols-2 gap-3">
              <img src={photos.intro1} alt="Worship" className="rounded-2xl w-full h-52 object-cover shadow-md" />
              <img src={photos.intro2} alt="Community" className="rounded-2xl w-full h-52 object-cover shadow-md mt-8" />
              <img src={photos.intro3} alt="Church" className="rounded-2xl w-full h-52 object-cover shadow-md -mt-4" />
              <img src={photos.intro4} alt="Fellowship" className="rounded-2xl w-full h-52 object-cover shadow-md mt-4" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          STATS BAR
      ══════════════════════════════════════════════════════════ */}
      <section ref={statsSection.ref}
        className={`py-14 bg-gray-900 transition-all duration-700 ${statsSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            {[
              { icon: Clock,    label: 'Service Time', value: 'Sundays · 10:00 AM' },
              { icon: MapPin,   label: 'Location',     value: 'Rubani House, KALPA' },
              { icon: BookOpen, label: 'Sermons',      value: '100+ on Spotify' },
              { icon: Users,    label: 'Community',    value: '200+ Members' },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <Icon size={22} className="text-yellow-400" />
                <p className="font-semibold text-sm text-white">{value}</p>
                <p className="text-white/40 text-[10px] uppercase tracking-wider">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════
          LATEST SERMONS
      ══════════════════════════════════════════════════════════ */}
      <section ref={sermonsSec.ref}
        className={`py-24 bg-gray-50 dark:bg-gray-900 transition-all duration-700 ${sermonsSec.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-purple-600 dark:text-purple-400 mb-2">Latest Messages</p>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Recent Sermons</h2>
            </div>
            <Link to="/sermons" className="inline-flex items-center gap-2 text-purple-700 dark:text-purple-400 font-semibold text-sm hover:gap-3 transition-all shrink-0">
              View All <ArrowRight size={15} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sermons.map(s => (
              <div key={s.title} className="group border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden bg-white dark:bg-gray-800 hover:border-purple-200 dark:hover:border-purple-800 hover:shadow-lg transition-all">
                <div className="relative overflow-hidden">
                  <img src={s.thumb} alt={s.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors flex items-center justify-center">
                    <a href="https://open.spotify.com/show/0vkb6y7Ac1erM9T8FAdRz8" target="_blank" rel="noopener noreferrer"
                      className="w-13 h-13 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play size={18} className="text-gray-900 ml-0.5" />
                    </a>
                  </div>
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-yellow-400 text-gray-900 text-[10px] font-bold rounded uppercase tracking-wide">{s.topic}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1 line-clamp-2 tracking-tight">{s.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">{s.speaker} · {s.date} · {s.duration}</p>
                  <a href="https://open.spotify.com/show/0vkb6y7Ac1erM9T8FAdRz8" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-700 hover:bg-purple-800 text-white text-xs font-semibold rounded-lg transition-colors">
                    <Play size={11} /> Listen
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          EVENTS
      ══════════════════════════════════════════════════════════ */}
      <section ref={eventsSec.ref}
        className={`py-24 bg-white dark:bg-gray-950 transition-all duration-700 ${eventsSec.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-purple-600 dark:text-purple-400 mb-2">What's Coming Up</p>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Upcoming Events</h2>
            </div>
            <Link to="/events" className="inline-flex items-center gap-2 text-purple-700 dark:text-purple-400 font-semibold text-sm hover:gap-3 transition-all shrink-0">
              View All <ArrowRight size={15} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {events.map((ev, i) => {
              const colors = [
                'border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/20',
                'border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20',
                'border-pink-200 dark:border-pink-800 bg-pink-50 dark:bg-pink-900/20',
                'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20',
              ]
              const labelColors = [
                'text-purple-700 dark:text-purple-400',
                'text-yellow-700 dark:text-yellow-400',
                'text-pink-700 dark:text-pink-400',
                'text-green-700 dark:text-green-400',
              ]
              return (
                <div key={ev.title} className={`p-5 rounded-xl border ${colors[i]} group hover:shadow-md transition-all`}>
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${labelColors[i]}`}>{ev.category}</span>
                  <h3 className="font-semibold text-gray-900 dark:text-white mt-2 mb-4 tracking-tight text-sm">{ev.title}</h3>
                  <div className="space-y-1.5 text-xs text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-2"><Calendar size={12} />{ev.date}</div>
                    <div className="flex items-center gap-2"><Clock size={12} />{ev.time}</div>
                    <div className="flex items-center gap-2"><MapPin size={12} />{ev.location}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════
          GALLERY PREVIEW
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-yellow-400 mb-2">Our Moments</p>
              <h2 className="text-3xl font-bold text-white tracking-tight">Photo Gallery</h2>
            </div>
            <Link to="/gallery" className="inline-flex items-center gap-2 text-yellow-400 font-semibold text-sm hover:gap-3 transition-all shrink-0">
              View Gallery <ArrowRight size={15} />
            </Link>
          </div>

          {/* 4-column photo strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {[
              'https://images.unsplash.com/photo-1438232992991-995b671e4b8a?w=500&h=400&fit=crop&q=80',
              'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&h=400&fit=crop&q=80',
              'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=500&h=400&fit=crop&q=80',
              'https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=500&h=400&fit=crop&q=80',
            ].map((src, i) => (
              <Link key={i} to="/gallery" className="relative overflow-hidden rounded-xl aspect-square group">
                <img src={src} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
              </Link>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            <a href={albumLinks.mar2026} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/8 hover:bg-white/15 text-white font-semibold rounded-lg border border-white/15 transition-colors text-sm">
              <ExternalLink size={14} /> Mar 2026 Album
            </a>
            <a href={albumLinks.oct2025} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-lg transition-colors text-sm">
              <ExternalLink size={14} /> Oct 2025 Album
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════════════════════ */}
      <section ref={testimonialsSec.ref}
        className={`py-24 bg-white dark:bg-gray-950 transition-all duration-700 ${testimonialsSec.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-purple-600 dark:text-purple-400 mb-2">Real Stories</p>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Real Transformation</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map(t => (
              <div key={t.name} className="p-7 border border-gray-100 dark:border-gray-800 rounded-xl hover:border-purple-200 dark:hover:border-purple-800 transition-colors">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white text-sm">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CTA
      ══════════════════════════════════════════════════════════ */}
      <section className="relative py-28 overflow-hidden bg-gray-950">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1600&h=700&fit=crop&q=80" alt="" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/80 to-gray-950/60" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-yellow-400 mb-4">Take the Next Step</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5 tracking-tight leading-tight">
            Stop Just Believing.<br />Start Living It Out.
          </h2>
          <p className="text-white/60 text-lg mb-10 leading-relaxed">
            Your transformation journey starts with one step. Join a community that walks with you every single day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact"
              className="px-9 py-4 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold rounded-xl transition-all hover:scale-105 shadow-xl shadow-yellow-400/20 text-sm">
              Join Our Community
            </Link>
            <Link to="/give"
              className="px-9 py-4 bg-purple-700 hover:bg-purple-600 text-white font-bold rounded-xl transition-all hover:scale-105 text-sm">
              Support the Ministry
            </Link>
            <a href="https://open.spotify.com/show/0vkb6y7Ac1erM9T8FAdRz8" target="_blank" rel="noopener noreferrer"
              className="px-9 py-4 bg-white/[0.08] hover:bg-white/[0.15] text-white font-semibold rounded-xl border border-white/[0.15] transition-all text-sm">
              🎧 Spotify
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
