import { useState } from 'react'
import { CheckCircle, Copy, Check, Heart, DollarSign } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { photos } from '../data/images'

const headerPhotos: [string, string, string, string] = [
  photos.community, photos.outreach, photos.discipleship, photos.worship,
]

const givingOptions = [
  { id: 'tithe',    label: 'Tithe',           desc: 'Supports the local church ministry and operations.' },
  { id: 'offering', label: 'Offering',         desc: 'Supports weekly programs, events, and community needs.' },
  { id: 'missions', label: 'Missions',         desc: 'Funds outreach and missions work in Embakasi and beyond.' },
  { id: 'special',  label: 'Special Projects', desc: 'Contributes to building, equipment, or community projects.' },
]

const amounts = [500, 1000, 2000, 5000, 10000]

const impactStats = [
  { stat: '200+', label: 'Lives Transformed' },
  { stat: '50+',  label: 'Families Served' },
  { stat: '100+', label: 'Sermons on Spotify' },
  { stat: '12+',  label: 'Small Groups' },
]

export default function Give() {
  const [selected, setSelected] = useState('tithe')
  const [amount, setAmount] = useState('')
  const [customAmount, setCustomAmount] = useState('')
  const [recurring, setRecurring] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [copied, setCopied] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true) }

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text)
    setCopied(key)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      <PageHeader
        label="Generosity"
        title="Give & Support the Ministry"
        subtitle="Your generosity fuels transformation. Every gift helps us reach more people with the gospel and build a stronger community."
        icon={<Heart size={16} />}
        photos={headerPhotos}
      >
        <div className="flex flex-wrap gap-3">
          <a href="#mpesa" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#00A651] hover:bg-[#008f45] text-white font-semibold rounded-lg transition-colors text-sm">
            <DollarSign size={15} /> Give via M-Pesa
          </a>
          <a href="#online-form" className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-200 dark:border-gray-700 hover:border-purple-400 text-gray-700 dark:text-gray-300 font-semibold rounded-lg transition-colors text-sm">
            Give Online
          </a>
        </div>
      </PageHeader>

      {/* Impact bar */}
      <div className="border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map(s => (
              <div key={s.stat}>
                <p className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">{s.stat}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* M-Pesa giving — primary method */}
            <div id="mpesa">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">Give via M-Pesa</h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-8">The simplest way to give. Use the details below on your M-Pesa app.</p>

              {/* M-Pesa card */}
              <div className="bg-[#00A651] rounded-2xl p-7 text-white mb-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">M</span>
                  </div>
                  <div>
                    <p className="font-bold text-base">M-Pesa</p>
                    <p className="text-green-100 text-xs">Lipa Na M-Pesa</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { label: 'Paybill Number', value: '400200', key: 'paybill' },
                    { label: 'Account Number', value: '0733740077', key: 'account' },
                    { label: 'Account Name', value: 'Nairobi Chapel Embakasi', key: 'name' },
                  ].map(item => (
                    <div key={item.key} className="flex items-center justify-between bg-white/10 rounded-xl px-4 py-3">
                      <div>
                        <p className="text-green-100 text-xs mb-0.5">{item.label}</p>
                        <p className="font-bold text-base tracking-wide">{item.value}</p>
                      </div>
                      <button
                        onClick={() => copyToClipboard(item.value, item.key)}
                        className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors"
                        aria-label={`Copy ${item.label}`}
                      >
                        {copied === item.key ? <Check size={14} /> : <Copy size={14} />}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Steps */}
              <div className="space-y-3">
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">How to give</p>
                {[
                  'Go to M-Pesa on your phone',
                  'Select Lipa Na M-Pesa → Paybill',
                  'Enter Business No: 400200',
                  'Enter Account No: 0733740077',
                  'Enter amount and your M-Pesa PIN',
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Online form */}
            <div id="online-form">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">Give Online</h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-8">Fill in the form below and we'll process your gift.</p>

              {submitted ? (
                <div className="p-8 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl text-center">
                  <CheckCircle size={40} className="text-green-500 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Thank You!</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Your gift has been received. May God bless you abundantly.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-5 px-5 py-2 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-lg text-sm">Give Again</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Giving type */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-3">Giving Type</label>
                    <div className="grid grid-cols-2 gap-2">
                      {givingOptions.map(opt => (
                        <button key={opt.id} type="button" onClick={() => setSelected(opt.id)}
                          className={`p-3 rounded-xl border text-left transition-all text-sm ${
                            selected === opt.id
                              ? 'border-purple-600 dark:border-purple-400 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300'
                              : 'border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500'
                          }`}>
                          <p className="font-semibold">{opt.label}</p>
                        </button>
                      ))}
                    </div>
                    <p className="mt-2 text-xs text-gray-400 dark:text-gray-500">{givingOptions.find(o => o.id === selected)?.desc}</p>
                  </div>

                  {/* Amount */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-3">Amount (KES)</label>
                    <div className="grid grid-cols-3 gap-2 mb-2">
                      {amounts.map(a => (
                        <button key={a} type="button" onClick={() => { setAmount(String(a)); setCustomAmount('') }}
                          className={`py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                            amount === String(a)
                              ? 'bg-purple-700 text-white'
                              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                          }`}>
                          {a.toLocaleString()}
                        </button>
                      ))}
                    </div>
                    <input type="number" placeholder="Other amount" value={customAmount}
                      onChange={e => { setCustomAmount(e.target.value); setAmount('') }}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:border-gray-400 dark:focus:border-gray-600 transition-colors" />
                  </div>

                  {/* Recurring */}
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" checked={recurring} onChange={e => setRecurring(e.target.checked)} className="w-4 h-4 accent-gray-900 dark:accent-white" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Make this a monthly recurring gift</span>
                  </label>

                  {/* Personal info */}
                  <div className="grid sm:grid-cols-2 gap-3">
                    <input type="text" placeholder="Full Name" required className="px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:border-gray-400 dark:focus:border-gray-600 transition-colors" />
                    <input type="email" placeholder="Email Address" required className="px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:border-gray-400 dark:focus:border-gray-600 transition-colors" />
                    <input type="tel" placeholder="Phone Number" className="px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:border-gray-400 dark:focus:border-gray-600 transition-colors sm:col-span-2" />
                  </div>

                  <button type="submit" className="w-full py-3.5 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-lg transition-colors text-sm">
                    Give {(amount || customAmount) ? `KES ${Number(amount || customAmount).toLocaleString()}` : 'Now'}{recurring ? ' Monthly' : ''}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
