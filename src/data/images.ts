/**
 * All images use Unsplash for reliable loading.
 * Google Photos CDN requires authenticated tokens that expire —
 * replace these with your own hosted images when ready.
 *
 * To use your Google Photos:
 * 1. Open photo in Chrome → right-click → "Open image in new tab"
 * 2. Copy the full URL (e.g. https://lh3.googleusercontent.com/pw/LONG_ID=w1920-h1080)
 * 3. Paste the full URL directly (no builder needed)
 */

// ─── Reliable Unsplash church/worship photos ─────────────────────────────────
// These are used as fallback until Google Photos IDs are confirmed working

const U = {
  // Worship & preaching
  worship1:  'https://images.unsplash.com/photo-1438232992991-995b671e4b8a?w=1600&h=900&fit=crop&q=85',
  worship2:  'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=1600&h=900&fit=crop&q=85',
  worship3:  'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1600&h=900&fit=crop&q=85',
  worship4:  'https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=1600&h=900&fit=crop&q=85',
  worship5:  'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=1600&h=900&fit=crop&q=85',
  // Community & people
  community1:'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&h=800&fit=crop&q=85',
  community2:'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=800&fit=crop&q=85',
  community3:'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=1200&h=800&fit=crop&q=85',
  community4:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop&q=85',
  community5:'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=1200&h=800&fit=crop&q=85',
  // Preaching / sermons
  sermon1:   'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=800&h=500&fit=crop&q=85',
  sermon2:   'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=500&fit=crop&q=85',
  sermon3:   'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop&q=85',
  sermon4:   'https://images.unsplash.com/photo-1438232992991-995b671e4b8a?w=800&h=500&fit=crop&q=85',
  sermon5:   'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=500&fit=crop&q=85',
  sermon6:   'https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=800&h=500&fit=crop&q=85',
  sermon7:   'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=800&h=500&fit=crop&q=85',
  sermon8:   'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=500&fit=crop&q=85',
  sermon9:   'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&h=500&fit=crop&q=85',
  // Outreach / missions
  outreach1: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&h=800&fit=crop&q=85',
  outreach2: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1200&h=800&fit=crop&q=85',
  // Youth
  youth1:    'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&h=800&fit=crop&q=85',
  // Women
  women1:    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&h=800&fit=crop&q=85',
  // Men
  men1:      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=1200&h=800&fit=crop&q=85',
  // Children
  children1: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200&h=800&fit=crop&q=85',
  // Discipleship / study
  study1:    'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&h=800&fit=crop&q=85',
  // Nature / spiritual
  nature1:   'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop&q=85',
  nature2:   'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1600&h=900&fit=crop&q=85',
}

// ─── Hero slideshow — 6 slides ───────────────────────────────────────────────
export const heroSlides = [
  { src: U.worship1,   caption: 'Sunday Worship Service'   },
  { src: U.community1, caption: 'Community & Fellowship'   },
  { src: U.worship2,   caption: 'Praise & Worship'         },
  { src: U.outreach1,  caption: 'Reaching Embakasi'        },
  { src: U.worship3,   caption: 'Transform Your Faith'     },
  { src: U.community2, caption: 'Growing D.E.E.P Together' },
]

// ─── Named photo slots ────────────────────────────────────────────────────────
export const photos = {
  // Hero collage (used in home hero right panel)
  hero1: U.worship1,
  hero2: U.community1,
  hero3: U.worship4,
  hero4: U.community3,

  // Intro section
  intro1: U.worship2,
  intro2: U.community1,
  intro3: U.community2,
  intro4: U.worship4,

  // Sermons
  sermon1: U.sermon1,
  sermon2: U.sermon2,
  sermon3: U.sermon3,
  sermon4: U.sermon4,
  sermon5: U.sermon5,
  sermon6: U.sermon6,
  sermon7: U.sermon7,
  sermon8: U.sermon8,
  sermon9: U.sermon9,

  // Ministries
  youth:        U.youth1,
  children:     U.children1,
  worship:      U.worship3,
  men:          U.men1,
  women:        U.women1,
  discipleship: U.study1,
  outreach:     U.outreach1,

  // Events
  event1: U.worship1,
  event2: U.youth1,
  event3: U.women1,
  event4: U.outreach1,
  event5: U.men1,
  event6: U.study1,
  event7: U.community1,
  event8: U.women1,

  // About / leadership
  history:   U.community3,
  pastor:    U.community4,
  elder:     U.men1,
  deaconess: U.women1,
  community: U.community1,

  // CTA / backgrounds
  ctaBg:    U.worship5,
  heroBg:   U.worship1,
  aboutBg:  U.worship4,
}

// ─── Gallery preview photos ───────────────────────────────────────────────────
export const galleryPreviews = {
  mar2026: [
    U.worship1, U.community1, U.worship2, U.community2,
    U.outreach1, U.youth1, U.worship3, U.community3,
  ],
  oct2025: [
    U.worship4, U.women1, U.men1, U.study1,
    U.children1, U.outreach2, U.community4, U.worship5,
  ],
}

// ─── Album share links ────────────────────────────────────────────────────────
export const albumLinks = {
  mar2026: 'https://photos.app.goo.gl/So6aJEHGoZoKyNi77',
  oct2025: 'https://photos.app.goo.gl/8P217jP2RokgHtPVA',
}
