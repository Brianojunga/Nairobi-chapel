import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, Clock, Pin, Calendar, MapPin, Share2, Bell } from 'lucide-react'
import { photos } from '../data/images'

type Priority = 'urgent' | 'high' | 'normal'

interface Announcement {
  id: number
  title: string
  date: string
  category: string
  priority: Priority
  pinned: boolean
  body: string
  fullBody?: string
  img?: string
  link?: string
  linkLabel?: string
  location?: string
  time?: string
  contact?: string
}

// Full announcement data — same IDs as Announcements.tsx
const announcements: Announcement[] = [
  {
    id: 1,
    title: 'Easter Sunday Service — Special Celebration',
    date: 'Apr 5, 2026',
    category: 'Worship',
    priority: 'urgent',
    pinned: true,
    img: photos.event1,
    time: '8:00 AM & 10:00 AM',
    location: 'Rubani House (KALPA), Off Airport North Rd',
    body: 'Join us for a special Easter Sunday celebration! We will have two services at 8:00 AM and 10:00 AM.',
    fullBody: `Easter is the most important celebration in the Christian calendar — the day we celebrate the resurrection of Jesus Christ from the dead. This year, we are hosting two special services to accommodate everyone who wants to join us.

**Service Times:**
- First Service: 8:00 AM
- Second Service: 10:00 AM

Both services will feature special worship music, a powerful Easter message, and a time of communion. After each service, there will be refreshments and fellowship in the courtyard.

**What to Expect:**
We encourage you to invite a friend, a neighbour, or a family member who may not regularly attend church. Easter is a perfect time to introduce someone to the community and to the message of hope that Jesus brings.

Children's ministry will be available during both services for children aged 3–12. Please arrive 15 minutes early to register your children.

**Dress Code:** Smart casual. Come as you are — you are welcome here.

We look forward to celebrating with you!`,
    link: '/contact',
    linkLabel: 'Get Directions',
    contact: 'bensonmacharia@nairobichapel.org',
  },
  {
    id: 2,
    title: 'Youth Camp Registration Now Open',
    date: 'Apr 8, 2026',
    category: 'Youth',
    priority: 'high',
    pinned: true,
    img: photos.youth,
    time: 'May 15–17, 2026 · All Day',
    location: 'Naivasha, Kenya',
    body: 'Registration for the Annual Youth Camp (May 15–17, 2026) is now open!',
    fullBody: `The Annual Youth Camp is one of the most anticipated events of the year! This three-day camp in Naivasha is designed to help young people aged 13–25 grow in their faith, build lasting friendships, and discover their God-given purpose.

**Camp Details:**
- Dates: May 15–17, 2026
- Location: Naivasha, Kenya
- Age Group: 13–25 years
- Cost: KES 3,500 per person (includes accommodation, all meals, and activities)

**What's Included:**
- Daily worship sessions and Bible teaching
- Small group discipleship discussions
- Outdoor adventure activities (hiking, team sports)
- Evening bonfire and worship nights
- One-on-one mentorship sessions

**Registration:**
Spaces are strictly limited to 80 participants. Register early to secure your spot. Payment can be made via M-Pesa (Paybill: 400200, Account: YOUTHCAMP2026) or at the church office.

**Registration Deadline:** May 1, 2026

For more information, contact the Youth Ministry team or speak to a church leader on Sunday.`,
    link: '/events',
    linkLabel: 'View All Events',
    contact: 'info@nairobichapel.org',
  },
  {
    id: 3,
    title: 'New Discipleship Groups Starting in May',
    date: 'Apr 10, 2026',
    category: 'Discipleship',
    priority: 'high',
    pinned: false,
    img: photos.discipleship,
    time: 'Wednesdays · 7:00 PM',
    location: 'Various Locations (Small Groups)',
    body: 'We are launching new small discipleship groups in May.',
    fullBody: `We believe that real spiritual growth happens in community. That's why we are launching a new cohort of small discipleship groups in May 2026.

**What is a Discipleship Group?**
A discipleship group is a small gathering of 6–10 people who meet weekly to study the Bible, pray together, and hold each other accountable in their faith journey. These groups are the heartbeat of our church.

**Who Can Join?**
Everyone is welcome — whether you are a new believer, someone who has been walking with God for years, or someone who is simply curious about faith. There is a group for every season of life.

**Meeting Schedule:**
- Day: Every Wednesday
- Time: 7:00 PM
- Duration: 90 minutes
- Location: Various homes and venues across Embakasi

**How to Sign Up:**
1. Visit the information desk on Sunday after service
2. Fill out the discipleship group interest form
3. You will be matched with a group based on your location and availability

Groups will begin the first Wednesday of May. Don't miss this opportunity to go deeper in your faith and build meaningful relationships.`,
    link: '/ministries',
    linkLabel: 'Learn About Discipleship',
    contact: 'info@nairobichapel.org',
  },
  {
    id: 4,
    title: "Women's Retreat — Registration Closing Soon",
    date: 'Apr 12, 2026',
    category: 'Women',
    priority: 'high',
    pinned: false,
    img: photos.women,
    time: 'May 22–23, 2026 · All Day',
    location: 'Limuru, Kenya',
    body: "Registration for the Women's Retreat (May 22–23, Limuru) closes on May 1st.",
    fullBody: `The Annual Women's Retreat is a sacred time set apart for women to rest, reflect, and reconnect with God and each other. This year's retreat will be held in the beautiful hills of Limuru.

**Retreat Theme:** "Rooted & Flourishing — Growing Deep in God's Love"

**Retreat Details:**
- Dates: May 22–23, 2026
- Location: Limuru Retreat Centre, Limuru
- Cost: KES 4,500 per person (includes accommodation, all meals, and retreat materials)

**What to Expect:**
- Powerful worship sessions led by our women's worship team
- Inspiring teaching sessions on identity, purpose, and healing
- Small group discussions and prayer circles
- Free time for rest, journaling, and nature walks
- A special communion service on Sunday morning

**Who Should Come?**
Every woman in our church community is invited — regardless of age, background, or season of life. Whether you are a mother, a student, a professional, or a grandmother, there is a place for you at this retreat.

**Registration Deadline:** May 1, 2026

To register, contact Deaconess Grace Wanjiku or visit the church office. Payment via M-Pesa (Paybill: 400200, Account: WOMENSRETREAT).`,
    contact: 'info@nairobichapel.org',
  },
  {
    id: 5,
    title: 'Sunday Service Time Reminder',
    date: 'Apr 6, 2026',
    category: 'General',
    priority: 'normal',
    pinned: false,
    time: 'Every Sunday · 10:00 AM',
    location: 'Rubani House (KALPA), Off Airport North Rd',
    body: 'A reminder that our Sunday service starts at 10:00 AM every week.',
    fullBody: `Just a friendly reminder that our Sunday service starts at 10:00 AM every week at Rubani House (KALPA), Off Airport North Road, Embakasi.

**Service Details:**
- Time: 10:00 AM (Doors open at 9:30 AM)
- Location: Rubani House (KALPA), Off Airport North Road, Embakasi
- Duration: Approximately 2 hours

**What to Expect:**
Our Sunday service includes contemporary worship, a practical Bible-based message, and time for community connection. Children's ministry is available for children aged 3–12.

**Getting Here:**
We are located off Airport North Road in Embakasi. Look for the Rubani House (KALPA) building. Parking is available on-site.

We look forward to worshipping with you this Sunday!`,
  },
  {
    id: 6,
    title: 'Sermons Now Available on Spotify',
    date: 'Apr 3, 2026',
    category: 'Media',
    priority: 'normal',
    pinned: false,
    body: 'All our Sunday sermons are now available on Spotify.',
    fullBody: `Great news! All our Sunday sermons are now available on Spotify, making it easier than ever to access transformational messages anytime, anywhere.

**How to Listen:**
1. Open the Spotify app on your phone or computer
2. Search for "Nairobi Chapel Embakasi"
3. Follow our podcast to get notified of new episodes
4. Start listening!

**What's Available:**
- All recent Sunday sermons
- Special series and teaching collections
- New episodes added every week after Sunday service

**Why Spotify?**
We believe that church should extend beyond Sunday. By making our sermons available on Spotify, you can listen during your commute, workout, or quiet time — growing in your faith every day of the week.

Share the podcast with a friend who might benefit from these messages!`,
    link: 'https://open.spotify.com/show/0vkb6y7Ac1erM9T8FAdRz8',
    linkLabel: 'Listen on Spotify',
  },
  {
    id: 7,
    title: 'Community Outreach — Volunteers Needed',
    date: 'Apr 15, 2026',
    category: 'Outreach',
    priority: 'normal',
    pinned: false,
    img: photos.outreach,
    time: 'Apr 26, 2026 · 7:30 AM',
    location: 'Embakasi Estate',
    body: 'We are looking for volunteers for our Community Outreach on April 26th.',
    fullBody: `We are calling all volunteers to join us for our monthly Community Outreach on Saturday, April 26th. This is one of the most impactful ways you can serve the Embakasi community.

**Outreach Details:**
- Date: Saturday, April 26, 2026
- Meet at Church: 7:30 AM
- Return: Approximately 1:00 PM
- Location: Embakasi Estate (specific location shared on the day)

**What We'll Be Doing:**
- Distributing food packages to families in need
- Praying with community members
- Sharing the gospel through conversations and literature
- Providing basic health information and referrals

**What to Bring:**
- Comfortable clothes and closed shoes
- A willing heart and a smile
- Water bottle and snacks for yourself

**No Experience Needed:**
Whether this is your first time serving or you're a seasoned volunteer, you are welcome. We will brief everyone before we go out.

To sign up, speak to a church leader on Sunday or send an email to the church office. Let's go and be the hands and feet of Jesus in our community!`,
    contact: 'info@nairobichapel.org',
  },
  {
    id: 8,
    title: "Men's Breakfast — May 3rd",
    date: 'Apr 20, 2026',
    category: 'Men',
    priority: 'normal',
    pinned: false,
    img: photos.men,
    time: 'May 3, 2026 · 7:00 AM',
    location: 'Conference Room, Rubani House',
    body: "Join us for our monthly Men's Breakfast on Saturday, May 3rd at 7:00 AM.",
    fullBody: `Men, join us for our monthly Men's Breakfast — a time of fellowship, accountability, and practical teaching designed specifically for men in every season of life.

**Event Details:**
- Date: Saturday, May 3, 2026
- Time: 7:00 AM (Breakfast served from 7:00 AM)
- Location: Conference Room, Rubani House (KALPA)
- Cost: Free (Breakfast provided)

**This Month's Topic:**
"Leading with Integrity in the Workplace" — How do we live out our faith from Monday to Friday? How do we handle pressure, temptation, and ethical dilemmas at work? This session will give you practical tools to be a man of integrity in your professional life.

**Format:**
- 7:00 AM: Breakfast and fellowship
- 7:30 AM: Worship and prayer
- 8:00 AM: Teaching session
- 8:45 AM: Small group discussion
- 9:15 AM: Accountability pairs and close

**Who Should Come?**
All men are welcome — whether you are a student, a young professional, a business owner, or retired. Bring a friend!

No registration required. Just show up.`,
    contact: 'info@nairobichapel.org',
  },
]

const priorityConfig: Record<Priority, { label: string; color: string; bg: string }> = {
  urgent: { label: 'Urgent',  color: 'text-red-600 dark:text-red-400',    bg: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800' },
  high:   { label: 'High',    color: 'text-orange-600 dark:text-orange-400', bg: 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800' },
  normal: { label: 'General', color: 'text-gray-500 dark:text-gray-400',   bg: 'bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800' },
}

const categoryColor: Record<string, string> = {
  Worship: 'text-purple-600 dark:text-purple-400',
  Youth: 'text-yellow-600 dark:text-yellow-500',
  Women: 'text-pink-600 dark:text-pink-400',
  Men: 'text-blue-600 dark:text-blue-400',
  Outreach: 'text-green-600 dark:text-green-400',
  Discipleship: 'text-indigo-600 dark:text-indigo-400',
  General: 'text-gray-500 dark:text-gray-400',
  Media: 'text-teal-600 dark:text-teal-400',
}

export default function AnnouncementDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const announcement = announcements.find(a => a.id === Number(id))

  if (!announcement) {
    return (
      <div className="pt-20 min-h-screen bg-white dark:bg-gray-950 flex items-center justify-center">
        <div className="text-center px-6">
          <Bell size={40} className="text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Announcement not found</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6">This announcement may have been removed or the link is incorrect.</p>
          <Link to="/announcements" className="inline-flex items-center gap-2 px-6 py-3 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-lg transition-colors text-sm">
            <ArrowLeft size={15} /> Back to Announcements
          </Link>
        </div>
      </div>
    )
  }

  const pc = priorityConfig[announcement.priority]
  const cc = categoryColor[announcement.category] || categoryColor.General

  // Parse simple markdown-like bold (**text**) and newlines
  const renderBody = (text: string) => {
    return text.split('\n').map((line, i) => {
      if (line.startsWith('**') && line.endsWith('**')) {
        return <p key={i} className="font-bold text-gray-900 dark:text-white mt-4 mb-1">{line.slice(2, -2)}</p>
      }
      if (line.startsWith('- ')) {
        return <li key={i} className="ml-4 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{line.slice(2)}</li>
      }
      if (line.trim() === '') return <div key={i} className="h-2" />
      return <p key={i} className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{line}</p>
    })
  }

  return (
    <div className="pt-16 lg:pt-[76px] bg-white dark:bg-gray-950 min-h-screen">

      {/* Back nav */}
      <div className="border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors font-medium"
          >
            <ArrowLeft size={16} /> Back to Announcements
          </button>
          <button
            onClick={() => navigator.share?.({ title: announcement.title, url: window.location.href })}
            className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            <Share2 size={14} /> Share
          </button>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 lg:px-8 py-12">

        {/* Hero image */}
        {announcement.img && (
          <div className="overflow-hidden rounded-2xl mb-8 shadow-md">
            <img src={announcement.img} alt={announcement.title} className="w-full h-64 sm:h-80 object-cover" />
          </div>
        )}

        {/* Meta badges */}
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span className={`text-[11px] font-bold uppercase tracking-wider ${cc}`}>{announcement.category}</span>
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${pc.bg} ${pc.color}`}>
            {pc.label}
          </span>
          {announcement.pinned && (
            <span className="inline-flex items-center gap-1 text-[10px] text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">
              <Pin size={9} /> Pinned
            </span>
          )}
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight mb-6">
          {announcement.title}
        </h1>

        {/* Event details strip */}
        {(announcement.date || announcement.time || announcement.location) && (
          <div className="flex flex-wrap gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 mb-8">
            {announcement.date && (
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <Calendar size={15} className="text-yellow-500 shrink-0" />
                <span>{announcement.date}</span>
              </div>
            )}
            {announcement.time && (
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <Clock size={15} className="text-purple-500 shrink-0" />
                <span>{announcement.time}</span>
              </div>
            )}
            {announcement.location && (
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <MapPin size={15} className="text-yellow-500 shrink-0" />
                <span>{announcement.location}</span>
              </div>
            )}
          </div>
        )}

        {/* Full body */}
        <div className="prose-sm space-y-1 mb-10">
          {renderBody(announcement.fullBody || announcement.body)}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-3 pt-6 border-t border-gray-100 dark:border-gray-800">
          {announcement.link && (
            <a
              href={announcement.link}
              target={announcement.link.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-lg transition-colors text-sm"
            >
              {announcement.linkLabel}
            </a>
          )}
          {announcement.contact && (
            <a
              href={`mailto:${announcement.contact}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-lg transition-colors text-sm"
            >
              Contact Us
            </a>
          )}
          <Link
            to="/announcements"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 dark:border-gray-700 hover:border-purple-400 text-gray-700 dark:text-gray-300 font-semibold rounded-lg transition-colors text-sm"
          >
            <ArrowLeft size={14} /> All Announcements
          </Link>
        </div>
      </article>

      {/* Related announcements */}
      <section className="border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-yellow-600 dark:text-yellow-400 mb-6">More Announcements</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {announcements
              .filter(a => a.id !== announcement.id)
              .slice(0, 2)
              .map(a => (
                <Link
                  key={a.id}
                  to={`/announcements/${a.id}`}
                  className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-700 transition-colors group"
                >
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${categoryColor[a.category] || categoryColor.General}`}>{a.category}</span>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm mt-1 mb-2 group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors line-clamp-2">{a.title}</h3>
                  <p className="text-xs text-gray-400">{a.date}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
