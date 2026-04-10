import { useState } from 'react'
import { Play, Download, Share2, Search, Headphones, BookOpen, Mic } from 'lucide-react'
import { photos } from '../data/images'
import PageHeader from '../components/PageHeader'

// High-quality Unsplash sermon/worship images
const sermonImages = {
  s1: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=600&h=400&fit=crop',
  s2: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop',
  s3: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
  s4: 'https://images.unsplash.com/photo-1438232992991-995b671e4b8a?w=600&h=400&fit=crop',
  s5: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop',
  s6: 'https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=600&h=400&fit=crop',
  s7: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=600&h=400&fit=crop',
  s8: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop',
  s9: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=600&h=400&fit=crop',
}

const allSermons = [
  { id: 1, title: 'The Journey of Transformation', speaker: 'Pastor Benson Macharia', date: 'Mar 30, 2026', duration: '42 min', topic: 'Discipleship', series: 'Transformation Series', thumb: sermonImages.s1, featured: true },
  { id: 2, title: 'Faith That Works Monday–Saturday', speaker: 'Pastor Benson Macharia', date: 'Mar 23, 2026', duration: '38 min', topic: 'Practical Faith', series: 'Everyday Faith', thumb: sermonImages.s2, featured: false },
  { id: 3, title: 'Overcoming Spiritual Fatigue', speaker: 'Guest Speaker', date: 'Mar 16, 2026', duration: '45 min', topic: 'Renewal', series: 'Restoration', thumb: sermonImages.s3, featured: false },
  { id: 4, title: 'Persistent Prayer', speaker: 'Pastor Benson Macharia', date: 'Mar 9, 2026', duration: '40 min', topic: 'Prayer', series: 'Spiritual Disciplines', thumb: sermonImages.s4, featured: false },
  { id: 5, title: 'Lifestyle Evangelism', speaker: 'Elder James Omondi', date: 'Mar 2, 2026', duration: '35 min', topic: 'Evangelism', series: 'Missional Living', thumb: sermonImages.s5, featured: false },
  { id: 6, title: 'Dealing with Doubt', speaker: 'Pastor Benson Macharia', date: 'Feb 23, 2026', duration: '44 min', topic: 'Faith', series: 'Honest Faith', thumb: sermonImages.s6, featured: false },
  { id: 7, title: "Relationships God's Way", speaker: 'Pastor Benson Macharia', date: 'Feb 16, 2026', duration: '50 min', topic: 'Relationships', series: 'Everyday Faith', thumb: sermonImages.s7, featured: false },
  { id: 8, title: 'State of the Nation', speaker: 'Guest Speaker', date: 'Feb 9, 2026', duration: '48 min', topic: 'Society', series: 'Kingdom Impact', thumb: sermonImages.s8, featured: false },
  { id: 9, title: 'Mental Health & Faith', speaker: 'Elder James Omondi', date: 'Feb 2, 2026', duration: '42 min', topic: 'Mental Health', series: 'Restoration', thumb: sermonImages.s9, featured: false },
]

const topics = ['All', 'Discipleship', 'Practical Faith', 'Renewal', 'Prayer', 'Evangelism', 'Faith', 'Relationships', 'Society', 'Mental Health']
const speakers = ['All', 'Pastor Benson Macharia', 'Elder James Omondi', 'Guest Speaker']

const headerPhotos: [string, string, string, string] = [
  photos.sermon2, photos.sermon1, photos.sermon4, photos.sermon3,
]

export default function Sermons() {
  const [search, setSearch] = useState('')
  const [topic, setTopic] = useState('All')
  const [speaker, setSpeaker] = useState('All')

  const featured = allSermons.find(s => s.featured)
  const filtered = allSermons.filter(s => {
    const matchSearch = s.title.toLowerCase().includes(search.toLowerCase()) || s.speaker.toLowerCase().includes(search.toLowerCase())
    const matchTopic = topic === 'All' || s.topic === topic
    const matchSpeaker = speaker === 'All' || s.speaker === speaker
    return matchSearch && matchTopic && matchSpeaker
  })

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      <PageHeader
        label="Messages"
        title="Sermons & Teachings"
        subtitle="Church beyond Sunday. Access transformational messages anytime, anywhere — on Spotify or right here."
        icon={<Mic size={16} />}
        photos={headerPhotos}
        accent="gold"
      >
        <div className="flex flex-wrap gap-3">
          <a href="https://open.spotify.com/show/0vkb6y7Ac1erM9T8FAdRz8" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1DB954] hover:bg-[#1aa34a] text-white font-semibold rounded-lg transition-colors text-sm">
            <Headphones size={15} /> Listen on Spotify
          </a>
          <a href="#sermons-grid" className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-200 dark:border-gray-700 hover:border-purple-400 text-gray-700 dark:text-gray-300 font-semibold rounded-lg transition-colors text-sm">
            <BookOpen size={15} /> Browse All
          </a>
        </div>
      </PageHeader>

      {/* Featured */}
      {featured && (
        <section className="py-14 bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-yellow-600 dark:text-yellow-400 mb-5">Featured Message</p>
            <div className="grid lg:grid-cols-5 gap-0 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800">
              <div className="lg:col-span-2 relative">
                <img src={featured.thumb} alt={featured.title} className="w-full h-64 lg:h-full object-cover" />
                <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
                  <a href="https://open.spotify.com/show/0vkb6y7Ac1erM9T8FAdRz8" target="_blank" rel="noopener noreferrer"
                    className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-transform">
                    <Play size={22} className="text-gray-900 ml-1" />
                  </a>
                </div>
                <span className="absolute top-4 left-4 px-3 py-1 bg-yellow-400 text-gray-900 text-xs font-bold rounded-full">Latest</span>
              </div>
              <div className="lg:col-span-3 p-8 bg-gray-50 dark:bg-gray-900 flex flex-col justify-center">
                <span className="inline-block text-xs font-bold text-yellow-600 dark:text-yellow-400 uppercase tracking-wider mb-3">{featured.topic} · {featured.series}</span>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">{featured.title}</h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">{featured.speaker}</p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mb-7">{featured.date} · {featured.duration}</p>
                <div className="flex flex-wrap gap-3">
                  <a href="https://open.spotify.com/show/0vkb6y7Ac1erM9T8FAdRz8" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-lg transition-colors text-sm">
                    <Play size={14} /> Listen Now
                  </a>
                  <button className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium rounded-lg transition-colors text-sm">
                    <Download size={14} /> Notes
                  </button>
                  <button className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium rounded-lg transition-colors text-sm">
                    <Share2 size={14} /> Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filters */}
      <section className="py-4 bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800 sticky top-16 lg:top-[76px] z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="Search sermons..." value={search} onChange={e => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors" />
            </div>
            <select value={topic} onChange={e => setTopic(e.target.value)}
              className="px-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg text-sm text-gray-700 dark:text-gray-200 focus:outline-none transition-colors">
              {topics.map(t => <option key={t} value={t}>{t === 'All' ? 'All Topics' : t}</option>)}
            </select>
            <select value={speaker} onChange={e => setSpeaker(e.target.value)}
              className="px-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg text-sm text-gray-700 dark:text-gray-200 focus:outline-none transition-colors">
              {speakers.map(s => <option key={s} value={s}>{s === 'All' ? 'All Speakers' : s}</option>)}
            </select>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section id="sermons-grid" className="py-14 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs text-gray-400 dark:text-gray-500 mb-8">{filtered.length} message{filtered.length !== 1 ? 's' : ''}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(s => (
              <div key={s.id} className="group border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden hover:border-purple-200 dark:hover:border-purple-800 hover:shadow-md transition-all">
                <div className="relative overflow-hidden">
                  <img src={s.thumb} alt={s.title} className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors flex items-center justify-center">
                    <a href="https://open.spotify.com/show/0vkb6y7Ac1erM9T8FAdRz8" target="_blank" rel="noopener noreferrer"
                      className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity scale-90 group-hover:scale-100">
                      <Play size={17} className="text-gray-900 ml-0.5" />
                    </a>
                  </div>
                  <span className="absolute top-3 left-3 px-2 py-1 bg-yellow-400 text-gray-900 text-[10px] font-bold rounded uppercase tracking-wide">{s.topic}</span>
                </div>
                <div className="p-5">
                  <p className="text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1.5">{s.series}</p>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1 line-clamp-2 tracking-tight">{s.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">{s.speaker} · {s.date} · {s.duration}</p>
                  <div className="flex gap-2">
                    <a href="https://open.spotify.com/show/0vkb6y7Ac1erM9T8FAdRz8" target="_blank" rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-purple-700 hover:bg-purple-800 text-white text-xs font-semibold rounded-lg transition-colors">
                      <Play size={11} /> Listen
                    </a>
                    <button className="px-3 py-2 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 text-xs rounded-lg transition-colors"><Download size={12} /></button>
                    <button className="px-3 py-2 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 text-xs rounded-lg transition-colors"><Share2 size={12} /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Spotify banner */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 bg-gray-950 dark:bg-gray-900 rounded-2xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#1DB954] rounded-xl flex items-center justify-center shrink-0">
                <Headphones size={22} className="text-white" />
              </div>
              <div>
                <p className="text-white font-semibold tracking-tight">Church Beyond Sunday</p>
                <p className="text-gray-400 text-sm">All messages are free on Spotify — listen anytime, anywhere.</p>
              </div>
            </div>
            <a href="https://open.spotify.com/show/0vkb6y7Ac1erM9T8FAdRz8" target="_blank" rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-[#1DB954] hover:bg-[#1aa34a] text-white font-semibold rounded-lg transition-colors text-sm">
              Open in Spotify
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
