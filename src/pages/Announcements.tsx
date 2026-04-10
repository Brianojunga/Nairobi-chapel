import { Bell, Clock, Pin, ChevronRight, Megaphone } from 'lucide-react'
import { photos } from '../data/images'
import PageHeader from '../components/PageHeader'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const headerPhotos: [string, string, string, string] = [
  photos.event2, photos.event1, photos.event3, photos.event4,
]

type Priority = 'urgent' | 'high' | 'normal'

interface Announcement {
  id: number; title: string; date: string; category: string; priority: Priority
  pinned: boolean; body: string; img?: string; link?: string; linkLabel?: string
}

const announcements: Announcement[] = [
  { id: 1, title: 'Easter Sunday Service — Special Celebration', date: 'Apr 5, 2026', category: 'Worship', priority: 'urgent', pinned: true, body: 'Join us for a special Easter Sunday celebration! We will have two services at 8:00 AM and 10:00 AM. Invite a friend, bring your family, and come ready to celebrate the resurrection of Jesus Christ. There will be special music, a powerful message, and refreshments after each service.', img: photos.event1, link: '/contact', linkLabel: 'Get Directions' },
  { id: 2, title: 'Youth Camp Registration Now Open', date: 'Apr 8, 2026', category: 'Youth', priority: 'high', pinned: true, body: 'Registration for the Annual Youth Camp (May 15–17, 2026) is now open! The camp will be held in Naivasha and is open to all youth aged 13–25. Cost: KES 3,500 (includes accommodation, meals, and activities). Spaces are limited — register early to secure your spot.', img: photos.youth, link: '/events', linkLabel: 'View Event Details' },
  { id: 3, title: 'New Discipleship Groups Starting in May', date: 'Apr 10, 2026', category: 'Discipleship', priority: 'high', pinned: false, body: 'We are launching new small discipleship groups in May. Whether you are a new believer or have been walking with God for years, there is a group for you. Groups meet weekly on Wednesday evenings at 7:00 PM. Sign up at the information desk on Sunday or contact the church office.', img: photos.discipleship, link: '/ministries', linkLabel: 'Learn About Discipleship' },
  { id: 4, title: "Women's Retreat — Registration Closing Soon", date: 'Apr 12, 2026', category: 'Women', priority: 'high', pinned: false, body: "Registration for the Women's Retreat (May 22–23, Limuru) closes on May 1st. Don't miss this incredible time of rest, reflection, and renewal. Cost: KES 4,500. Contact Deaconess Grace Wanjiku for more information.", img: photos.women },
  { id: 5, title: 'Sunday Service Time Reminder', date: 'Apr 6, 2026', category: 'General', priority: 'normal', pinned: false, body: 'A reminder that our Sunday service starts at 10:00 AM every week at Rubani House (KALPA), Off Airport North Road, Embakasi. Doors open at 9:30 AM. We look forward to worshipping with you!' },
  { id: 6, title: 'Sermons Now Available on Spotify', date: 'Apr 3, 2026', category: 'Media', priority: 'normal', pinned: false, body: 'All our Sunday sermons are now available on Spotify. You can listen to past messages, share with friends, and grow in your faith throughout the week. Search "Nairobi Chapel Embakasi" on Spotify or click the link below.', link: 'https://open.spotify.com/show/0vkb6y7Ac1erM9T8FAdRz8', linkLabel: 'Listen on Spotify' },
  { id: 7, title: 'Community Outreach — Volunteers Needed', date: 'Apr 15, 2026', category: 'Outreach', priority: 'normal', pinned: false, body: 'We are looking for volunteers for our Community Outreach on April 26th. We will be serving the Embakasi community with food, prayer, and the gospel. Meet at the church at 7:30 AM. All are welcome — bring a friend!', img: photos.outreach },
  { id: 8, title: "Men's Breakfast — May 3rd", date: 'Apr 20, 2026', category: 'Men', priority: 'normal', pinned: false, body: "Join us for our monthly Men's Breakfast on Saturday, May 3rd at 7:00 AM. This month's topic: 'Leading with Integrity in the Workplace.' Breakfast will be provided. All men are welcome.", img: photos.men },
]

const priorityDot: Record<Priority, string> = {
  urgent: 'bg-red-500', high: 'bg-orange-400', normal: 'bg-gray-300 dark:bg-gray-600',
}

const categoryColor: Record<string, string> = {
  Worship: 'text-purple-600 dark:text-purple-400', Youth: 'text-yellow-600 dark:text-yellow-500',
  Women: 'text-pink-600 dark:text-pink-400', Men: 'text-blue-600 dark:text-blue-400',
  Outreach: 'text-green-600 dark:text-green-400', Discipleship: 'text-indigo-600 dark:text-indigo-400',
  General: 'text-gray-500 dark:text-gray-400', Media: 'text-teal-600 dark:text-teal-400',
}

export default function Announcements() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const pinned = announcements.filter(a => a.pinned)
  const regular = announcements.filter(a => !a.pinned)

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      <PageHeader label="Stay Informed" title="Announcements" subtitle="Important updates, news, and notices from Nairobi Chapel Embakasi."
        icon={<Megaphone size={16} />} photos={headerPhotos} accent="gold" />

      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-14">

        {/* Pinned */}
        {pinned.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Pin size={14} className="text-yellow-500" />
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Pinned</p>
            </div>
            <div className="space-y-4">
              {pinned.map(a => <AnnouncementCard key={a.id} a={a} />)}
            </div>
          </div>
        )}

        {/* All */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Bell size={14} className="text-gray-400" />
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">All Announcements</p>
          </div>
          <div className="space-y-4">
            {regular.map(a => <AnnouncementCard key={a.id} a={a} />)}
          </div>
        </div>

        {/* Subscribe */}
        <div className="mt-14 p-8 bg-gray-950 dark:bg-gray-900 rounded-2xl text-white">
          <h3 className="text-lg font-bold mb-1 tracking-tight">Never Miss an Announcement</h3>
          <p className="text-gray-400 text-sm mb-5">Get updates delivered to your inbox.</p>
          {subscribed ? (
            <p className="text-green-400 text-sm font-medium">You're subscribed. Welcome to the family.</p>
          ) : (
            <form className="flex gap-2" onSubmit={e => { e.preventDefault(); if (email) setSubscribed(true) }}>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Your email address" required
                className="flex-1 px-4 py-2.5 bg-white/10 border border-white/15 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/30 text-sm" />
              <button type="submit" className="px-5 py-2.5 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-lg text-sm transition-colors whitespace-nowrap">Subscribe</button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

function AnnouncementCard({ a }: { a: Announcement }) {
  const cc = categoryColor[a.category] || categoryColor.General

  return (
    <div className="border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden hover:border-yellow-300 dark:hover:border-yellow-700 transition-colors group">
      {a.img && (
        <div className="overflow-hidden">
          <img src={a.img} alt={a.title} className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <span className={`w-2 h-2 rounded-full shrink-0 ${priorityDot[a.priority]}`} />
            <span className={`text-[11px] font-semibold uppercase tracking-wider ${cc}`}>{a.category}</span>
            {a.pinned && (
              <span className="flex items-center gap-1 text-[10px] text-yellow-600 dark:text-yellow-500 font-semibold uppercase tracking-wider">
                <Pin size={9} /> Pinned
              </span>
            )}
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-400">
            <Clock size={11} />{a.date}
          </div>
        </div>
        <h3 className="font-semibold text-gray-900 dark:text-white mb-2 tracking-tight group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors">{a.title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4 line-clamp-3">{a.body}</p>
        <div className="flex items-center justify-between">
          <Link
            to={`/announcements/${a.id}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-purple-700 dark:text-purple-400 hover:gap-2.5 transition-all"
          >
            Read More <ChevronRight size={13} />
          </Link>
          {a.link && (
            <a href={a.link} target={a.link.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-yellow-600 dark:text-yellow-400 hover:gap-2 transition-all">
              {a.linkLabel} <ChevronRight size={11} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
