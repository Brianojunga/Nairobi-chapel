import type { ReactNode } from 'react'

interface PageHeaderProps {
  label: string
  title: string
  subtitle?: string
  icon?: ReactNode
  photos: [string, string, string, string]
  children?: ReactNode
  /** accent color for the label + icon. Defaults to 'purple' */
  accent?: 'purple' | 'gold' | 'charcoal'
}

const accentClasses = {
  purple:  'text-purple-600 dark:text-purple-400',
  gold:    'text-yellow-600 dark:text-yellow-400',
  charcoal:'text-gray-600 dark:text-gray-400',
}

export default function PageHeader({ label, title, subtitle, icon, photos, children, accent = 'purple' }: PageHeaderProps) {
  const [tl, tr, bl] = photos
  const ac = accentClasses[accent]

  return (
    <div className="pt-16 lg:pt-[76px] bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center py-12 lg:py-16">

          {/* LEFT: Text */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              {icon && <span className={ac}>{icon}</span>}
              <p className={`text-xs font-bold tracking-[0.2em] uppercase ${ac}`}>{label}</p>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white tracking-tight leading-[1.1] mb-5">
              {title}
            </h1>
            {subtitle && (
              <p className="text-[15px] text-gray-500 dark:text-gray-400 leading-relaxed max-w-lg">
                {subtitle}
              </p>
            )}
            {children && <div className="mt-7">{children}</div>}
          </div>

          {/* RIGHT: Asymmetric photo grid — top-left small | top-right tall | bottom-left fills */}
          <div className="hidden lg:grid grid-cols-2 grid-rows-2 gap-3 h-72">
            <div className="overflow-hidden rounded-xl">
              <img src={tl} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
            <div className="overflow-hidden rounded-xl row-span-2">
              <img src={tr} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
            <div className="overflow-hidden rounded-xl">
              <img src={bl} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
