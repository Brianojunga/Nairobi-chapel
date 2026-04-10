import { Link } from 'react-router-dom'
import { ArrowLeft, Mail, Phone, Users, BookOpen, Heart, Globe } from 'lucide-react'
import { photos } from '../data/images'

const leaders = [
  {
    name: 'Pastor Benson Macharia',
    role: 'Lead Pastor',
    email: 'bensonmacharia@nairobichapel.org',
    phone: '+254 733 740 077',
    img: photos.pastor,
    bio: `Pastor Benson Macharia is the Lead Pastor of Nairobi Chapel Embakasi. He has a deep passion for discipleship and practical faith — helping people move from simply knowing about God to actually living for Him every day.

He planted Nairobi Chapel Embakasi with a vision to build a community that goes D.E.E.P — Discipleship, Evangelism, Equipping, and Prayer — in the heart of Embakasi, Nairobi.

Pastor Benson is a gifted communicator who brings the Bible to life in a way that is relevant, honest, and transformational. His teaching style is conversational, engaging, and deeply rooted in Scripture.

He is committed to raising up the next generation of leaders and building a church that is not just Sunday-focused but life-transforming.`,
    ministry: 'Overall Church Leadership & Teaching',
    icon: Users,
    accent: 'purple',
  },
  {
    name: 'Elder James Omondi',
    role: 'Elder & Discipleship Lead',
    email: 'info@nairobichapel.org',
    phone: '+254 700 000 000',
    img: photos.elder,
    bio: `Elder James Omondi serves as an Elder and the Discipleship Lead at Nairobi Chapel Embakasi. He oversees all small group discipleship programs and ensures that every member of the church has a clear, structured pathway for spiritual growth.

James has a heart for people who feel spiritually stuck — those who know the right things but struggle to live them out. He designs and leads discipleship curricula that are practical, relatable, and deeply transformational.

He also mentors emerging leaders within the church, investing in the next generation of men and women who will carry the mission forward.`,
    ministry: 'Discipleship Programs & Small Groups',
    icon: BookOpen,
    accent: 'gold',
  },
  {
    name: 'Deaconess Grace Wanjiku',
    role: "Women's Ministry Leader",
    email: 'info@nairobichapel.org',
    phone: '+254 700 000 000',
    img: photos.deaconess,
    bio: `Deaconess Grace Wanjiku leads the Women's Ministry at Nairobi Chapel Embakasi with compassion, wisdom, and grace. She creates safe, empowering spaces where women can grow in their faith, heal from past wounds, and step into their God-given purpose.

Grace has a particular heart for women who have been hurt by life — whether through broken relationships, loss, or disappointment. She believes that every woman has a story worth telling and a purpose worth pursuing.

She also oversees the Children's Ministry, ensuring that the youngest members of our community receive age-appropriate, faith-building teaching every Sunday.`,
    ministry: "Women's Ministry & Children's Ministry",
    icon: Heart,
    accent: 'purple',
  },
  {
    name: 'Missions Team',
    role: 'Outreach & Missions',
    email: 'info@nairobichapel.org',
    phone: '+254 700 000 000',
    img: photos.outreach,
    bio: `Our Missions Team is a dedicated group of volunteers and leaders who are passionate about taking the love of Christ beyond the walls of our church. They coordinate all community outreach activities, evangelism efforts, and mission partnerships.

The team organises monthly community outreach events in Embakasi, providing practical support to families in need while sharing the gospel. They also connect with the broader Nairobi Chapel missions network to support national and international mission work.

If you have a heart for serving your community and sharing your faith, the Missions Team would love to have you join them.`,
    ministry: 'Community Outreach & Evangelism',
    icon: Globe,
    accent: 'gold',
  },
]

const accentStyles = {
  purple: {
    badge: 'bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800',
    icon: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
    border: 'border-purple-200 dark:border-purple-800',
  },
  gold: {
    badge: 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800',
    icon: 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400',
    border: 'border-yellow-200 dark:border-yellow-800',
  },
}

export default function Leadership() {
  return (
    <div className="pt-16 lg:pt-[76px] bg-white dark:bg-gray-950 min-h-screen">

      {/* Back nav */}
      <div className="border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <Link to="/about" className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors font-medium">
            <ArrowLeft size={16} /> Back to About
          </Link>
        </div>
      </div>

      {/* Header */}
      <div className="border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-yellow-600 dark:text-yellow-400 mb-3">The Team</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight mb-4">
            Church Leadership
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-base max-w-xl leading-relaxed">
            Meet the pastors, elders, and ministry leaders who serve Nairobi Chapel Embakasi with dedication, humility, and love.
          </p>
        </div>
      </div>

      {/* Leaders */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 space-y-16">
        {leaders.map((leader, i) => {
          const a = accentStyles[leader.accent as keyof typeof accentStyles]
          return (
            <div key={leader.name} className={`grid lg:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? '' : ''}`}>
              {/* Image */}
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className={`overflow-hidden rounded-2xl border-2 ${a.border} shadow-lg`}>
                  <img src={leader.img} alt={leader.name} className="w-full h-80 object-cover object-top" />
                </div>
                {/* Contact card */}
                <div className={`mt-4 p-5 rounded-xl border ${a.border} bg-white dark:bg-gray-900`}>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Contact</p>
                  <div className="space-y-2">
                    <a href={`mailto:${leader.email}`} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 hover:text-purple-700 dark:hover:text-purple-400 transition-colors">
                      <Mail size={14} className="shrink-0" /> {leader.email}
                    </a>
                    <a href={`tel:${leader.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors">
                      <Phone size={14} className="shrink-0" /> {leader.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                {/* Role badge */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${a.icon}`}>
                    <leader.icon size={18} />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${a.badge}`}>{leader.role}</span>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight mb-2">{leader.name}</h2>
                <p className="text-sm font-semibold text-gray-400 dark:text-gray-500 mb-6 uppercase tracking-wider">{leader.ministry}</p>

                {/* Bio */}
                <div className="space-y-3">
                  {leader.bio.split('\n\n').map((para, j) => (
                    <p key={j} className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">{para}</p>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Join the team CTA */}
      <section className="py-16 border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-purple-600 dark:text-purple-400 mb-3">Serve With Us</p>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">Interested in Serving?</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-8 leading-relaxed">
            We are always looking for passionate, committed people to join our ministry teams. If you feel called to serve, we'd love to hear from you.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-lg transition-colors text-sm">
              Get In Touch
            </Link>
            <Link to="/ministries" className="inline-flex items-center gap-2 px-7 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-lg transition-colors text-sm">
              View Ministries
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
