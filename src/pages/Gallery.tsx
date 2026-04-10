import { ExternalLink, Images, Camera } from 'lucide-react'
import { albumLinks, photos, galleryPreviews } from '../data/images'
import PageHeader from '../components/PageHeader'

const headerPhotos: [string, string, string, string] = [
  photos.intro2, photos.worship, photos.community, photos.outreach,
]

const mar2026Previews = galleryPreviews.mar2026
const oct2025Previews = galleryPreviews.oct2025

export default function Gallery() {
  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      <PageHeader
        label="Our Moments"
        title="Photo Gallery"
        subtitle="Real moments from our community — worship, fellowship, outreach, and life together."
        icon={<Camera size={16} />}
        photos={headerPhotos}
      >
        <div className="flex flex-wrap gap-3">
          <a href={albumLinks.mar2026} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-lg transition-colors text-sm">
            <ExternalLink size={15} /> Mar 2026 Album
          </a>
          <a href={albumLinks.oct2025} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-lg transition-colors text-sm">
            <ExternalLink size={15} /> Oct 2025 Album
          </a>
        </div>
      </PageHeader>

      {/* Album A — Mar 2026 */}
      <section className="py-16 bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-purple-600 dark:text-purple-400 mb-2">Album</p>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Nairobi Chapel Embakasi — Mar 8, 2026</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Sunday service and community moments</p>
            </div>
            <a href={albumLinks.mar2026} target="_blank" rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-lg transition-colors text-sm">
              <ExternalLink size={15} /> View Full Album
            </a>
          </div>

          {/* Preview grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-6">
            {mar2026Previews.map((src, i) => (
              <div key={i} className="relative overflow-hidden rounded-xl aspect-square group">
                <img src={src} alt={`Mar 2026 photo ${i + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                {i === mar2026Previews.length - 1 && (
                  <div className="absolute inset-0 bg-gray-950/70 flex flex-col items-center justify-center">
                    <Images size={24} className="text-white mb-2" />
                    <p className="text-white text-sm font-semibold">30+ Photos</p>
                    <p className="text-white/70 text-xs">View on Google Photos</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <a href={albumLinks.mar2026} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-purple-700 dark:text-purple-400 hover:gap-3 transition-all">
            See all 30+ photos on Google Photos <ExternalLink size={14} />
          </a>
        </div>
      </section>

      {/* Album B — Oct 2025 */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-yellow-600 dark:text-yellow-500 mb-2">Album</p>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Nairobi Chapel Photos — Oct 12, 2025</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Worship, outreach, and community life</p>
            </div>
            <a href={albumLinks.oct2025} target="_blank" rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-lg transition-colors text-sm">
              <ExternalLink size={15} /> View Full Album
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-6">
            {oct2025Previews.map((src, i) => (
              <div key={i} className="relative overflow-hidden rounded-xl aspect-square group">
                <img src={src} alt={`Oct 2025 photo ${i + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                {i === oct2025Previews.length - 1 && (
                  <div className="absolute inset-0 bg-gray-950/70 flex flex-col items-center justify-center">
                    <Images size={24} className="text-white mb-2" />
                    <p className="text-white text-sm font-semibold">30+ Photos</p>
                    <p className="text-white/70 text-xs">View on Google Photos</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <a href={albumLinks.oct2025} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-yellow-600 dark:text-yellow-500 hover:gap-3 transition-all">
            See all 30+ photos on Google Photos <ExternalLink size={14} />
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-gray-950 text-white text-center">
        <div className="max-w-xl mx-auto px-6">
          <Camera size={28} className="text-yellow-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-3 tracking-tight">See All Our Photos</h2>
          <p className="text-gray-400 text-sm mb-8">Browse the complete albums on Google Photos for the full collection of moments.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href={albumLinks.mar2026} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-lg transition-colors text-sm">
              <ExternalLink size={15} /> Mar 2026 Album
            </a>
            <a href={albumLinks.oct2025} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-lg transition-colors text-sm">
              <ExternalLink size={15} /> Oct 2025 Album
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
