import { Users, Heart, Music, BookOpen, Globe, Baby, Briefcase, ArrowRight, Church } from 'lucide-react'
import { photos } from '../data/images'
import PageHeader from '../components/PageHeader'

const ministries = [
  { icon: Users,     title: 'Youth Ministry',      leader: 'Youth Pastor TBD',        schedule: 'Fridays · 6:00 PM',       img: photos.youth,        desc: 'Empowering Gen-Z and young adults with faith, identity, and purpose. A space to ask hard questions, build real friendships, and discover calling in Christ.', activities: ['Weekly Youth Night', 'Discipleship Groups', 'Community Service', 'Annual Youth Camp'] },
  { icon: Baby,      title: "Children's Ministry", leader: 'Deaconess Grace Wanjiku',  schedule: 'Sundays · 10:00 AM',      img: photos.children,     desc: 'Building a strong foundation of faith in our youngest members through age-appropriate teaching, worship, and activities.', activities: ['Sunday School', 'Bible Stories & Crafts', 'Vacation Bible School', 'Kids Worship'] },
  { icon: Music,     title: 'Worship Team',         leader: 'Worship Director TBD',    schedule: 'Saturdays · 4:00 PM',     img: photos.worship,      desc: 'Leading the congregation into the presence of God through music, song, and creative arts. Worship is a lifestyle, not just a Sunday activity.', activities: ['Sunday Worship', 'Rehearsals', 'Worship Nights', 'Creative Arts'] },
  { icon: Briefcase, title: "Men's Ministry",       leader: 'Elder James Omondi',      schedule: 'Saturdays · 7:00 AM',     img: photos.men,          desc: "Equipping men to be godly leaders in their homes, workplaces, and communities. We tackle real issues — identity, purpose, relationships, and spiritual growth.", activities: ["Men's Breakfast", 'Accountability Groups', 'Leadership Training', 'Community Projects'] },
  { icon: Heart,     title: "Women's Ministry",     leader: 'Deaconess Grace Wanjiku', schedule: '3rd Sunday · 3:00 PM',    img: photos.women,        desc: "A safe and empowering space for women to grow in faith, heal from past wounds, and step into their God-given purpose. Every woman is welcome.", activities: ["Women's Fellowship", 'Bible Study', 'Mentorship Program', "Annual Women's Retreat"] },
  { icon: BookOpen,  title: 'Discipleship',         leader: 'Elder James Omondi',      schedule: 'Wednesdays · 7:00 PM',    img: photos.discipleship, desc: 'Our structured discipleship journey takes you from salvation to transformation. Through small groups and one-on-one mentoring, no one grows alone.', activities: ['Small Groups', 'New Believers Class', 'Bible Study', 'One-on-One Mentoring'] },
  { icon: Globe,     title: 'Outreach & Missions',  leader: 'Missions Team',           schedule: 'Monthly · Last Saturday', img: photos.outreach,     desc: "Taking the love of Christ beyond our walls. We serve the Embakasi community through practical acts of love and share the gospel with those who haven't heard.", activities: ['Community Service', 'Street Evangelism', 'Feeding Programs', 'Mission Trips'] },
]

const headerPhotos: [string, string, string, string] = [
  photos.youth, photos.worship, photos.women, photos.outreach,
]

export default function Ministries() {
  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      <PageHeader
        label="Get Involved"
        title="Our Ministries"
        subtitle="Find your place in the family. There's a ministry for every season of life."
        icon={<Church size={16} />}
        photos={headerPhotos}
      >
        <div className="flex flex-wrap gap-3">
          <a href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-lg transition-colors text-sm">
            <Users size={15} /> Connect With Us
          </a>
          <a href="/events" className="inline-flex items-center gap-2 px-5 py-2.5 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-lg transition-colors text-sm">
            View Events
          </a>
        </div>
      </PageHeader>

      <section className="py-0 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {ministries.map((m, i) => (
            <div key={m.title} className={`grid lg:grid-cols-2 gap-0 ${i < ministries.length - 1 ? 'border-b border-gray-100 dark:border-gray-800' : ''}`}>
              {/* Image */}
              <div className={`overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img src={m.img} alt={m.title} className="w-full h-72 lg:h-full object-cover hover:scale-105 transition-transform duration-700" style={{ minHeight: '280px' }} />
              </div>

              {/* Content */}
              <div className={`flex flex-col justify-center px-8 lg:px-14 py-12 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-purple-50 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
                    <m.icon size={19} className="text-purple-600 dark:text-purple-400" />
                  </div>
                  <span className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">{m.title}</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">{m.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 text-sm">{m.desc}</p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-800">
                    <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Leader</p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">{m.leader}</p>
                  </div>
                  <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-800">
                    <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Schedule</p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">{m.schedule}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {m.activities.map(a => (
                    <span key={a} className="px-2.5 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 text-xs rounded-md font-medium">{a}</span>
                  ))}
                </div>

                <a
                  href="https://wa.me/254733740077?text=Hi%2C%20I%27d%20like%20to%20get%20involved%20in%20a%20ministry%20at%20Nairobi%20Chapel%20Embakasi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-yellow-600 dark:text-yellow-400 hover:gap-3 transition-all group">
                  Get Involved <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-purple-700 text-white text-center">
        <div className="max-w-xl mx-auto px-6">
          <Church size={32} className="text-yellow-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-3 tracking-tight">Not Sure Where to Start?</h2>
          <p className="text-purple-200 mb-8 text-sm leading-relaxed">Come to a Sunday service and we'll help you find the right ministry for your season of life.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-lg transition-colors text-sm">
              Connect With Us
            </a>
            <a href="/events" className="inline-flex items-center gap-2 px-7 py-3 bg-white/15 hover:bg-white/25 text-white font-semibold rounded-lg transition-colors text-sm border border-white/25">
              View Events
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
