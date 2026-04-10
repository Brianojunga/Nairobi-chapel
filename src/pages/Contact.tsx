import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, Heart, CheckCircle, MessageSquare } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { photos } from '../data/images'

const headerPhotos: [string, string, string, string] = [
  photos.intro3, photos.community, photos.intro1, photos.intro4,
]

export default function Contact() {
  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [prayerForm, setPrayerForm] = useState({ name: '', email: '', request: '', private: false })
  const [contactSent, setContactSent] = useState(false)
  const [prayerSent, setPrayerSent] = useState(false)

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault()
    setContactSent(true)
    setContactForm({ name: '', email: '', phone: '', subject: '', message: '' })
  }
  const handlePrayer = (e: React.FormEvent) => {
    e.preventDefault()
    setPrayerSent(true)
    setPrayerForm({ name: '', email: '', request: '', private: false })
  }

  const inputClass = "w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:border-gray-400 dark:focus:border-gray-600 transition-colors placeholder-gray-400"

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      <PageHeader
        label="Get In Touch"
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out, visit us, or send a prayer request."
        icon={<MessageSquare size={16} />}
        photos={headerPhotos}
      >
        <div className="flex flex-wrap gap-3">
          <a href="tel:+254733740077" className="inline-flex items-center gap-2 px-5 py-2.5 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-lg transition-colors text-sm">
            <Phone size={15} /> Call Us
          </a>
          <a href="https://wa.me/254733740077" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold rounded-lg transition-colors text-sm">
            WhatsApp
          </a>
        </div>
      </PageHeader>

      {/* Info + Form */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Info */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight">Find Us</h2>
              <div className="space-y-0 border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden mb-8">
                {[
                  { icon: MapPin, label: 'Address',      value: 'Rubani House (KALPA), Off Airport North Road, Embakasi, Nairobi, Kenya' },
                  { icon: Phone, label: 'Phone',         value: '+254 733 740 077' },
                  { icon: Mail,  label: 'Email',         value: 'bensonmacharia@nairobichapel.org' },
                  { icon: Clock, label: 'Office Hours',  value: 'Mon–Fri: 9:00 AM – 5:00 PM · Sunday: 8:00 AM – 1:00 PM' },
                ].map((item, i) => (
                  <div key={item.label} className={`flex gap-4 p-5 ${i < 3 ? 'border-b border-gray-100 dark:border-gray-800' : ''}`}>
                    <item.icon size={17} className="text-yellow-500 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">{item.label}</p>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800">
                <iframe
                  title="Nairobi Chapel Embakasi Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8!2d36.9!3d-1.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTgnMDAuMCJTIDM2wrA1NCcwMC4wIkU!5e0!3m2!1sen!2ske!4v1234567890"
                  width="100%" height="240" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight">Send a Message</h2>
              {contactSent ? (
                <div className="p-8 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-center">
                  <CheckCircle size={36} className="text-green-500 mx-auto mb-4" />
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">Message Sent</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-5">We'll get back to you within 24–48 hours.</p>
                  <button onClick={() => setContactSent(false)} className="px-5 py-2 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-lg text-sm">Send Another</button>
                </div>
              ) : (
                <form onSubmit={handleContact} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input type="text" required value={contactForm.name} onChange={e => setContactForm({ ...contactForm, name: e.target.value })} className={inputClass} placeholder="Full Name" />
                    <input type="email" required value={contactForm.email} onChange={e => setContactForm({ ...contactForm, email: e.target.value })} className={inputClass} placeholder="Email Address" />
                  </div>
                  <input type="tel" value={contactForm.phone} onChange={e => setContactForm({ ...contactForm, phone: e.target.value })} className={inputClass} placeholder="Phone Number" />
                  <select required value={contactForm.subject} onChange={e => setContactForm({ ...contactForm, subject: e.target.value })} className={inputClass}>
                    <option value="">Select a subject</option>
                    {['General Inquiry', 'Membership', 'Ministries', 'Events', 'Giving', 'Pastoral Care', 'Other'].map(s => <option key={s}>{s}</option>)}
                  </select>
                  <textarea required rows={5} value={contactForm.message} onChange={e => setContactForm({ ...contactForm, message: e.target.value })} className={`${inputClass} resize-none`} placeholder="How can we help you?" />
                  <button type="submit" className="w-full flex items-center justify-center gap-2 py-3.5 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-lg transition-colors text-sm">
                    <Send size={15} /> Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Prayer Request */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <Heart size={20} className="text-yellow-500" />
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-yellow-600 dark:text-yellow-500">Prayer</p>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight mb-2">Submit a Prayer Request</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm">We believe in the power of prayer. Share your request and our team will pray with you.</p>
          </div>
          {prayerSent ? (
            <div className="p-8 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl text-center">
              <CheckCircle size={36} className="text-purple-500 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Prayer Request Received</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-5">Our prayer team will be interceding for you. You are not alone.</p>
              <button onClick={() => setPrayerSent(false)} className="px-5 py-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-lg text-sm">Submit Another</button>
            </div>
          ) : (
            <form onSubmit={handlePrayer} className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-100 dark:border-gray-700 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="text" value={prayerForm.name} onChange={e => setPrayerForm({ ...prayerForm, name: e.target.value })} className="px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:border-gray-400 transition-colors placeholder-gray-400" placeholder="Your name (optional)" />
                <input type="email" value={prayerForm.email} onChange={e => setPrayerForm({ ...prayerForm, email: e.target.value })} className="px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:border-gray-400 transition-colors placeholder-gray-400" placeholder="Email (optional)" />
              </div>
              <textarea required rows={5} value={prayerForm.request} onChange={e => setPrayerForm({ ...prayerForm, request: e.target.value })} className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:border-gray-400 transition-colors resize-none placeholder-gray-400" placeholder="Share your prayer request here..." />
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" checked={prayerForm.private} onChange={e => setPrayerForm({ ...prayerForm, private: e.target.checked })} className="w-4 h-4 accent-gray-900 dark:accent-white" />
                <span className="text-sm text-gray-600 dark:text-gray-400">Keep this request private (pastoral team only)</span>
              </label>
              <button type="submit" className="w-full flex items-center justify-center gap-2 py-3.5 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-lg transition-colors text-sm">
                <Heart size={15} /> Submit Prayer Request
              </button>
            </form>
          )}
        </div>
      </section>

    </div>
  )
}
