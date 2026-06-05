// ─── Media URLs ─────────────────────────────────────────────────────────────
// Set your Cloudinary cloud name here once videos are uploaded.
// Leave CDN empty to use local public/ files (development).
//
// Cloudinary upload: just drag-and-drop each .mp4 with its original filename.
// No folders needed — the mapping below handles local vs CDN paths.

const CDN = 'https://res.cloudinary.com/dsrmghoar'

function v(localPath, cloudinaryId) {
  if (!CDN) return `/video/${localPath}`
  return `${CDN}/video/upload/${cloudinaryId}.mp4`
}

function img(path) { return `/logos/${path}` }   // logos stay on Vercel (48 KB total)

// ─── Hero background videos ─────────────────────────────────────────────────
export const HERO_1 = v('hero.mp4',   'hero')
export const HERO_2 = v('hero2.mp4',  'hero2')
export const HERO_3 = v('hero3.mp4',  'hero3')

// ─── Card videos ────────────────────────────────────────────────────────────
export const PHP_INTRO = v('videoPHP/PHP_Intro.mp4',            'PHP_Intro')

export const PHLC_01   = v('videoPHLC/PHLC_01.mp4',            'PHLC_01')
export const PHLC_02   = v('videoPHLC/PHLC_02.mp4',            'PHLC_02')
export const PHLC_03   = v('videoPHLC/PHLC_03.mp4',            'PHLC_03')

export const SR_01     = v('videoSohoResidences/SR_01.mp4',     'SR_01')
export const SR_02     = v('videoSohoResidences/SR_02.mp4',     'SR_02')
export const SR_03     = v('videoSohoResidences/SR_03.mp4',     'SR_03')
export const SR_04     = v('videoSohoResidences/SR_04.mp4',     'SR_04')

// ─── Logos ───────────────────────────────────────────────────────────────────
export const LOGO_PHP  = img('PHP_Residences_Logo.png')
export const LOGO_PHLC = img('PHLC_Residences_Logo.png')
export const LOGO_SOHO = img('Soho_Residences_Logo.png')
