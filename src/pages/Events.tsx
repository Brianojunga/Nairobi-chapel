import { useState } from 'react'
import { Calendar, Clock, MapPin, CalendarDays } from 'lucide-react'
import { photos } from '../data/images'
import PageHeader from '../components/PageHeader'

const events = [
  { id: 1, title: 'Sunday Worship Service',  date: 'Every Sunday',    time: '10:00 AM', location: 'Rubani House, KALPA',  category: 'Worship',      desc: 'Join us every Sunday for an inspiring time of worship, teaching, and community. All are welcome.',                                img: photos.event1, recurring: true  },
  { id: 2, title: 'Youth Night',             date: 'Apr 18, 2026',    time: '6:00 PM',  location: 'Main Hall',            category: 'Youth',        desc: 'An evening of worship, games, and relevant teaching for young people aged 13–35.',                                              img: photos.event2, recurring: false },
  { id: 3, title: "Women's Fellowship",      date: 'Apr 20, 2026',    time: '3:00 PM',  location: 'Conference Room',      category: 'Women',        desc: 'A time of fellowship, prayer, and encouragement for all women in the church community.',                                         img: photos.event3, recurring: false },
  { id: 4, title: 'Community Outreach',      date: 'Apr 26, 2026',    time: '8:00 AM',  location: 'Embakasi Estate',      category: 'Outreach',     desc: 'Join us as we serve the Embakasi community through practical acts of love and gospel sharing.',                                  img: photos.event4, recurring: false },
  { id: 5, title: "Men's Breakfast",         date: 'May 3, 2026',     time: '7:00 AM',  location: 'Conference Room',      category: 'Men',          desc: 'Men gathering over breakfast for fellowship, accountability, and practical teaching on godly manhood.',                          img: photos.event5, recurring: false },
  { id: 6, title: 'Discipleship Class',      date: 'Every Wednesday', time: '7:00 PM',  location: 'Small Groups',         category: 'Discipleship', desc: 'Our structured discipleship journey for new and growing believers. Sign up to join a small group.',                              img: photos.event6, recurring: true  },
  { id: 7, title: 'Annual Youth Camp',       date: 'May 15–17, 2026', time: 'All Day',  location: 'Naivasha',             category: 'Youth',        desc: 'Three days of worship, adventure, and deep discipleship for youth aged 13–25. Registration required.',                          img: photos.event7, recurring: false },
  { id: 8, title: "Women's Retreat",         date: 'May 22–23, 2026', time: 'All Day',  location: 'Limuru',               category: 'Women',        desc: 'A two-day retreat for women to rest, reflect, and reconnect with God and each other.',                                          img: photos.event8, recurring: false },
]

const categories = ['All', 'Worship', 'Youth', 'Women', 'Men', 'Outreach', 'Discipleship']

const headerPhotos: [string, string, string, string] = [
  photos.event2, photos.event1, photos.event4, photos.event3,
]

export default function Events() {
  const [category, setCategory] = useState('All')
  const filtered = events.filter(e => category === 'All' || e.category === category)

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      <PageHeader
        label="What's Happening"
        title="Events & Gatherings"
        subtitle="Stay connected with everything happening at Nairobi Chapel Embakasi."
        icon={<CalendarDays size={16} />}
        photos={headerPhotos}
        accent="charcoal"
      >
        <div className="flex flex-wrap gap-3">
          <a href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-lg transition-colors text-sm">
            <Calendar size={15} /> Join Us Sunday
          </a>
          <a href="/announcements" className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-200 dark:border-gray-700 hover:border-purple-400 text-gray-700 dark:text-gray-300 font-semibold rounded-lg transition-colors text-sm">
            View Announcements
          </a>
        </div>
      </PageHeader>

      {/* Filter tabs — golden animated underline */}
      <div className="border-b border-gray-100 dark:border-gray-800 sticky top-16 lg:top-[76px] z-30 bg-white/98 dark:bg-gray-950/98 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex overflow-x-auto">
            {categories.map(c => (
              <button key={c} onClick={() => setCategory(c)}
                className={`relative px-5 py-4 text-sm font-semibold whitespace-nowrap transition-colors ${
                  category === c
                    ? 'text-yellow-600 dark:text-yellow-400'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }`}>
                {c}
                {/* Animated golden underline */}
                <span className={`absolute bottom-0 left-0 right-0 h-[2.5px] rounded-full transition-all duration-300 origin-left ${
                  category === c
                    ? 'scale-x-100 bg-gradient-to-r from-yellow-500 to-yellow-300'
                    : 'scale-x-0'
                }`} />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="py-14 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <CalendarDays size={36} className="mx-auto mb-4 opacity-30" />
              <p>No events in this category right now.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((ev, idx) => {
                const isGold = idx % 2 === 1
                return (
                <div key={ev.id} className={`group rounded-xl overflow-hidden hover:shadow-lg transition-all border ${isGold ? 'border-yellow-200 dark:border-yellow-800/50' : 'border-purple-200 dark:border-purple-800/50'}`}>
                  <div className="relative overflow-hidden">
                    <img src={ev.img} alt={ev.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                    {ev.recurring && (
                      <span className={`absolute top-3 right-3 px-2.5 py-1 text-[10px] font-bold rounded uppercase tracking-wide shadow-sm ${isGold ? 'bg-gradient-to-r from-yellow-500 to-yellow-300 text-gray-900' : 'bg-purple-700 text-white'}`}>Recurring</span>
                    )}
                  </div>
                  <div className={`p-5 ${isGold ? 'bg-yellow-50 dark:bg-yellow-900/10' : 'bg-purple-50 dark:bg-purple-900/10'}`}>
                    <span className={`text-[11px] font-bold uppercase tracking-wider ${isGold ? 'text-yellow-600 dark:text-yellow-400' : 'text-purple-600 dark:text-purple-400'}`}>{ev.category}</span>
                    <h3 className="font-semibold text-gray-900 dark:text-white mt-1 mb-3 tracking-tight">{ev.title}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 line-clamp-2 leading-relaxed">{ev.desc}</p>
                    <div className="space-y-1.5 text-xs text-gray-500 dark:text-gray-400 mb-5">
                      <div className="flex items-center gap-2"><Calendar size={12} className={isGold ? 'text-yellow-500' : 'text-purple-500'} />{ev.date}</div>
                      <div className="flex items-center gap-2"><Clock size={12} className={isGold ? 'text-yellow-500' : 'text-purple-500'} />{ev.time}</div>
                      <div className="flex items-center gap-2"><MapPin size={12} className={isGold ? 'text-yellow-500' : 'text-purple-500'} />{ev.location}</div>
                    </div>
                    <button className={`w-full py-2.5 font-semibold text-sm rounded-lg transition-colors ${isGold ? 'bg-yellow-400 hover:bg-yellow-500 text-gray-900' : 'bg-purple-700 hover:bg-purple-800 text-white'}`}>
                      Learn More
                    </button>
                  </div>
                </div>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* Sunday banner */}
      <div className="bg-yellow-400">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-gray-900 tracking-tight">Join Us Every Sunday</h2>
            <p className="text-gray-800 text-sm mt-1">No registration needed. Just show up — you're always welcome.</p>
          </div>
          <div className="flex flex-wrap gap-5 text-sm font-semibold text-gray-900">
            <div className="flex items-center gap-2"><Clock size={16} /> 10:00 AM</div>
            <div className="flex items-center gap-2"><MapPin size={16} /> Rubani House (KALPA)</div>
          </div>
        </div>
      </div>
    </div>
  )
}
