import { CheckCircle, Target, Eye, Users, BookOpen, Heart } from 'lucide-react'
import { photos } from '../data/images'
import PageHeader from '../components/PageHeader'
import { Link } from 'react-router-dom'

const leadership = [
  { name: 'Pastor Benson Macharia', role: 'Lead Pastor', email: 'bensonmacharia@nairobichapel.org', bio: 'Pastor Benson leads Nairobi Chapel Embakasi with a passion for discipleship and practical faith. He is committed to building a community that transforms lives beyond Sunday.', img: photos.pastor },
  { name: 'Elder James Omondi', role: 'Elder & Discipleship Lead', email: 'info@nairobichapel.org', bio: 'James oversees the discipleship programs and small groups, ensuring every member has a structured pathway for spiritual growth.', img: photos.elder },
  { name: 'Deaconess Grace Wanjiku', role: "Women's Ministry Leader", email: 'info@nairobichapel.org', bio: "Grace leads the women's ministry with compassion and wisdom, creating spaces for women to grow in faith and community.", img: photos.deaconess },
]

const valueAccents = [
  'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 border-purple-100 dark:border-purple-900/40',
  'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-500 border-yellow-100 dark:border-yellow-900/40',
  'bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-100 dark:border-gray-700',
  'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-500 border-yellow-100 dark:border-yellow-900/40',
  'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 border-purple-100 dark:border-purple-900/40',
  'bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-100 dark:border-gray-700',
]
const values = [ { icon: BookOpen, title: 'Scripture-Centered', desc: 'The Bible is our foundation for all teaching, decision-making, and community life.' },
  { icon: Heart, title: 'Transformation', desc: 'We believe faith must produce real, lasting change in every area of life.' },
  { icon: Users, title: 'Authentic Community', desc: 'We build genuine relationships where people are known, loved, and challenged.' },
  { icon: Target, title: 'Missional Living', desc: 'Every believer is called to be a witness — in Embakasi and to the ends of the earth.' },
  { icon: Heart, title: 'Prayer & Dependence', desc: 'We are a praying church that depends on the Holy Spirit for everything we do.' },
  { icon: Users, title: 'Radical Hospitality', desc: 'Everyone is welcome here — regardless of background, history, or season of life.' },
]

const beliefs = [
  'We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit.',
  'We believe in the full inspiration and authority of the Holy Scriptures.',
  'We believe in the deity of Jesus Christ, His virgin birth, sinless life, atoning death, and bodily resurrection.',
  'We believe in salvation by grace through faith in Jesus Christ alone.',
  'We believe in the present ministry of the Holy Spirit who indwells every believer.',
  'We believe in the spiritual unity of all believers in the Lord Jesus Christ.',
  'We believe in the resurrection of both the saved and the lost.',
]

const headerPhotos: [string, string, string, string] = [
  photos.intro2, photos.worship, photos.community, photos.intro4,
]

export default function About() {
  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      <PageHeader
        label="Our Story"
        title="About Nairobi Chapel Embakasi"
        subtitle="A discipleship-driven church in the heart of Embakasi, committed to transforming lives through practical faith and authentic community."
        icon={<Users size={16} />}
        photos={headerPhotos}
        accent="purple"
      />

      {/* History */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-yellow-600 dark:text-yellow-400 mb-3">Our History</p>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">How We Started</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Nairobi Chapel Embakasi was planted as a satellite of the main Nairobi Chapel, with a vision to bring transformational, discipleship-focused ministry to the Embakasi community in Nairobi, Kenya.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                We recognized that many Christians in urban Nairobi were spiritually informed but not transformed — attending services but struggling to apply faith in daily life. We set out to change that.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                Today, we meet every Sunday at Rubani House (KALPA), Off Airport North Road, and continue to grow as a community committed to going D.E.E.P — Discipleship, Evangelism, Equipping, and Prayer.
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-lg transition-colors text-sm">
                Visit Us This Sunday
              </a>
            </div>
            <div className="relative">
              <img src={photos.history} alt="Church community" className="w-full h-80 object-cover rounded-2xl shadow-lg" />
              <div className="absolute -bottom-5 -left-5 bg-yellow-400 text-gray-900 rounded-xl px-5 py-4 shadow-lg">
                <p className="font-bold text-xl tracking-tight">D.E.E.P</p>
                <p className="text-xs font-medium mt-0.5">Growing Deep to Reach Wide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-8 bg-purple-700 rounded-2xl text-white">
              <Eye size={28} className="text-yellow-400 mb-5" />
              <h3 className="text-xl font-bold mb-3 tracking-tight">Our Vision</h3>
              <p className="text-purple-100 leading-relaxed">
                To be a Christ-centered community that transforms lives through practical faith, discipleship, and purposeful living — growing D.E.E.P to reach wide.
              </p>
            </div>
            <div className="p-8 bg-gray-900 dark:bg-gray-800 rounded-2xl text-white">
              <Target size={28} className="text-yellow-400 mb-5" />
              <h3 className="text-xl font-bold mb-3 tracking-tight">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To equip every believer with a structured discipleship journey — from salvation to transformation — through relevant teaching, authentic community, and missional living.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-yellow-600 dark:text-yellow-400 mb-3">What We Stand For</p>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const accents = [
                { bg: 'bg-purple-50 dark:bg-purple-900/20', icon: 'text-purple-600 dark:text-purple-400', border: 'hover:border-purple-200 dark:hover:border-purple-800' },
                { bg: 'bg-yellow-50 dark:bg-yellow-900/20', icon: 'text-yellow-600 dark:text-yellow-500', border: 'hover:border-yellow-200 dark:hover:border-yellow-800' },
                { bg: 'bg-gray-100 dark:bg-gray-800',       icon: 'text-gray-600 dark:text-gray-400',     border: 'hover:border-gray-300 dark:hover:border-gray-600' },
                { bg: 'bg-yellow-50 dark:bg-yellow-900/20', icon: 'text-yellow-600 dark:text-yellow-500', border: 'hover:border-yellow-200 dark:hover:border-yellow-800' },
                { bg: 'bg-purple-50 dark:bg-purple-900/20', icon: 'text-purple-600 dark:text-purple-400', border: 'hover:border-purple-200 dark:hover:border-purple-800' },
                { bg: 'bg-gray-100 dark:bg-gray-800',       icon: 'text-gray-600 dark:text-gray-400',     border: 'hover:border-gray-300 dark:hover:border-gray-600' },
              ]
              const a = accents[i % accents.length]
              return (
                <div key={v.title} className={`p-6 border border-gray-100 dark:border-gray-800 rounded-xl ${a.border} transition-colors group`}>
                  <div className={`w-10 h-10 ${a.bg} rounded-lg flex items-center justify-center mb-4`}>
                    <v.icon size={18} className={a.icon} />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 tracking-tight">{v.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{v.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 dark:text-gray-400 mb-3">The Team</p>
            <div className="flex items-end justify-between">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Meet Our Leadership</h2>
              <Link to="/about/leadership" className="inline-flex items-center gap-1.5 text-sm font-semibold text-yellow-600 dark:text-yellow-400 hover:gap-2.5 transition-all shrink-0">
                Full Profiles →
              </Link>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map(l => (
              <div key={l.name} className="group">
                <div className="overflow-hidden rounded-xl mb-4">
                  <img src={l.img} alt={l.name} className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white tracking-tight">{l.name}</h3>
                <p className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-2">{l.role}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-3">{l.bio}</p>
                <a href={`mailto:${l.email}`} className="text-xs text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">{l.email}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statement of Faith */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-yellow-600 dark:text-yellow-400 mb-3">What We Believe</p>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Statement of Faith</h2>
          </div>
          <div className="space-y-0">
            {beliefs.map((b, i) => (
              <div key={i} className="flex items-start gap-4 py-4 border-b border-gray-100 dark:border-gray-800 last:border-0">
                <CheckCircle size={17} className="text-purple-600 dark:text-purple-400 mt-0.5 shrink-0" />
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
