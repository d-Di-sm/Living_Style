// Dev → local /public/video/ files (no CORS issues)
// Prod → Vercel Blob private signed URLs
// To update Blob URLs, replace the values in the `blob` object below.

const dev = import.meta.env.DEV

const local = {
  // Hero films played inside the project's photo frame
  SR_Amenities:    '/video/videoSohoResidences/Amenities.mp4',
  PHP_Video_Intro: '/video/videoPHP/Video_Intro_V02.mp4',

  PHP_Intro: '/video/videoPHP/PHP_Intro.mp4',
  PHLC_01:   '/video/videoPHLC/PHLC_01.mp4',
  PHLC_02:   '/video/videoPHLC/PHLC_02.mp4',
  SR_01:     '/video/videoSohoResidences/SR_01.mp4',
  SR_02:     '/video/videoSohoResidences/SR_02.mp4',
  SR_03:     '/video/videoSohoResidences/SR_03.mp4',
  SR_04:     '/video/videoSohoResidences/SR_04.mp4',
}

const blob = {
  // TODO: these two are not on Blob yet, so production serves them from
  // /public; roughly 105 MB added to the deployment. Upload them and swap
  // these paths for their Blob URLs.
  SR_Amenities:    '/video/videoSohoResidences/Amenities.mp4',
  PHP_Video_Intro: '/video/videoPHP/Video_Intro_V02.mp4',

  PHP_Intro: 'https://ad6urnxirdpnnnkw.public.blob.vercel-storage.com/PHP/PHP_Intro.mp4',
  PHLC_01:   'https://ad6urnxirdpnnnkw.public.blob.vercel-storage.com/PHLC/PHLC_01.mp4',
  PHLC_02:   'https://ad6urnxirdpnnnkw.public.blob.vercel-storage.com/PHLC/PHLC_02.mp4',
  SR_01:     'https://ad6urnxirdpnnnkw.public.blob.vercel-storage.com/SR/SR_01.mp4',
  SR_02:     'https://ad6urnxirdpnnnkw.public.blob.vercel-storage.com/SR/SR_02.mp4',
  SR_03:     'https://ad6urnxirdpnnnkw.public.blob.vercel-storage.com/SR/SR_03.mp4',
  SR_04:     'https://ad6urnxirdpnnnkw.public.blob.vercel-storage.com/SR/SR_04.mp4',
}

export const blobVideos = dev ? local : blob
