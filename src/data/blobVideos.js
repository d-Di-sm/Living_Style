// Dev → local /public/video/ files (no CORS issues)
// Prod → Vercel Blob private signed URLs
// To update Blob URLs, replace the values in the `blob` object below.

const dev = import.meta.env.DEV

const local = {
  PHP_Intro: '/video/videoPHP/PHP_Intro.mp4',
  PHLC_01:   '/video/videoPHLC/PHLC_01.mp4',
  PHLC_02:   '/video/videoPHLC/PHLC_02.mp4',
  SR_01:     '/video/videoSohoResidences/SR_01.mp4',
  SR_02:     '/video/videoSohoResidences/SR_02.mp4',
  SR_03:     '/video/videoSohoResidences/SR_03.mp4',
  SR_04:     '/video/videoSohoResidences/SR_04.mp4',
}

const blob = {
  PHP_Intro: "https://kl5uxh1qcxc4y8zq.private.blob.vercel-storage.com/PHP/PHP_Intro.mp4?vercel-blob-valid-until=1781096455139&vercel-blob-delegation=eyJzdG9yZUlkIjoic3RvcmVfS0w1dVhIMVFDeGM0WThacSIsIm93bmVySWQiOiJ0ZWFtXzc4ZGY3UlVnM2tlbmZOU2JGeWxPMlBjMiIsInBhdGhuYW1lIjoiKiIsIm9wZXJhdGlvbnMiOlsiZ2V0IiwiaGVhZCJdLCJ2YWxpZFVudGlsIjoxNzgxMTM5NTAyNDEwLCJpYXQiOjE3ODEwOTYzMDI0NzB9.ac2q4oXwuBHVT10NnGXlhMDeRxk2iuiEV2sACJTUPRg&vercel-blob-signature=2MNZZkOX33Z1pbi-RNe7PTI3JM76tFrcA_3w_XtIrWc",
  PHLC_01:   "https://kl5uxh1qcxc4y8zq.private.blob.vercel-storage.com/PHLC/PHLC_01.mp4?vercel-blob-valid-until=1781096512630&vercel-blob-delegation=eyJzdG9yZUlkIjoic3RvcmVfS0w1dVhIMVFDeGM0WThacSIsIm93bmVySWQiOiJ0ZWFtXzc4ZGY3UlVnM2tlbmZOU2JGeWxPMlBjMiIsInBhdGhuYW1lIjoiKiIsIm9wZXJhdGlvbnMiOlsiZ2V0IiwiaGVhZCJdLCJ2YWxpZFVudGlsIjoxNzgxMTM5NTAyNDEwLCJpYXQiOjE3ODEwOTYzMDI0NzB9.ac2q4oXwuBHVT10NnGXlhMDeRxk2iuiEV2sACJTUPRg&vercel-blob-signature=PpcCRvKiIm2AG3UW0m0_c9nGhYYWtQrx_De6-Q_h_DM",
  PHLC_02:   "https://kl5uxh1qcxc4y8zq.private.blob.vercel-storage.com/PHLC/PHLC_02.mp4?vercel-blob-valid-until=1781096556813&vercel-blob-delegation=eyJzdG9yZUlkIjoic3RvcmVfS0w1dVhIMVFDeGM0WThacSIsIm93bmVySWQiOiJ0ZWFtXzc4ZGY3UlVnM2tlbmZOU2JGeWxPMlBjMiIsInBhdGhuYW1lIjoiKiIsIm9wZXJhdGlvbnMiOlsiZ2V0IiwiaGVhZCJdLCJ2YWxpZFVudGlsIjoxNzgxMTM5NTAyNDEwLCJpYXQiOjE3ODEwOTYzMDI0NzB9.ac2q4oXwuBHVT10NnGXlhMDeRxk2iuiEV2sACJTUPRg&vercel-blob-signature=yCK7XqnqWp2baZi1CCA5cfp0XJZaq3Bn0XlznowQwxc",
  SR_01:     "https://kl5uxh1qcxc4y8zq.private.blob.vercel-storage.com/SR/SR_01.mp4?vercel-blob-valid-until=1781096580192&vercel-blob-delegation=eyJzdG9yZUlkIjoic3RvcmVfS0w1dVhIMVFDeGM0WThacSIsIm93bmVySWQiOiJ0ZWFtXzc4ZGY3UlVnM2tlbmZOU2JGeWxPMlBjMiIsInBhdGhuYW1lIjoiKiIsIm9wZXJhdGlvbnMiOlsiZ2V0IiwiaGVhZCJdLCJ2YWxpZFVudGlsIjoxNzgxMTM5NTAyNDEwLCJpYXQiOjE3ODEwOTYzMDI0NzB9.ac2q4oXwuBHVT10NnGXlhMDeRxk2iuiEV2sACJTUPRg&vercel-blob-signature=YY6fBqRvT9i26PwiGzj3XM9rdzgDsLpjWXGVtOdlC5U",
  SR_02:     "https://kl5uxh1qcxc4y8zq.private.blob.vercel-storage.com/SR/SR_02.mp4?vercel-blob-valid-until=1781096623382&vercel-blob-delegation=eyJzdG9yZUlkIjoic3RvcmVfS0w1dVhIMVFDeGM0WThacSIsIm93bmVySWQiOiJ0ZWFtXzc4ZGY3UlVnM2tlbmZOU2JGeWxPMlBjMiIsInBhdGhuYW1lIjoiKiIsIm9wZXJhdGlvbnMiOlsiZ2V0IiwiaGVhZCJdLCJ2YWxpZFVudGlsIjoxNzgxMTM5NTAyNDEwLCJpYXQiOjE3ODEwOTYzMDI0NzB9.ac2q4oXwuBHVT10NnGXlhMDeRxk2iuiEV2sACJTUPRg&vercel-blob-signature=Lyy3OXYxOR9vj0NuoWmC3Ubli504USGBt8zh6bZaTW0",
  SR_03:     "https://kl5uxh1qcxc4y8zq.private.blob.vercel-storage.com/SR/SR_03.mp4?vercel-blob-valid-until=1781096649224&vercel-blob-delegation=eyJzdG9yZUlkIjoic3RvcmVfS0w1dVhIMVFDeGM0WThacSIsIm93bmVySWQiOiJ0ZWFtXzc4ZGY3UlVnM2tlbmZOU2JGeWxPMlBjMiIsInBhdGhuYW1lIjoiKiIsIm9wZXJhdGlvbnMiOlsiZ2V0IiwiaGVhZCJdLCJ2YWxpZFVudGlsIjoxNzgxMTM5NTAyNDEwLCJpYXQiOjE3ODEwOTYzMDI0NzB9.ac2q4oXwuBHVT10NnGXlhMDeRxk2iuiEV2sACJTUPRg&vercel-blob-signature=FwhO6DZtD31uQi58LBb5uYIzr69eFhfLjt9y_i6ksdw",
  SR_04:     "https://kl5uxh1qcxc4y8zq.private.blob.vercel-storage.com/SR/SR_04.mp4?vercel-blob-valid-until=1781096671782&vercel-blob-delegation=eyJzdG9yZUlkIjoic3RvcmVfS0w1dVhIMVFDeGM0WThacSIsIm93bmVySWQiOiJ0ZWFtXzc4ZGY3UlVnM2tlbmZOU2JGeWxPMlBjMiIsInBhdGhuYW1lIjoiKiIsIm9wZXJhdGlvbnMiOlsiZ2V0IiwiaGVhZCJdLCJ2YWxpZFVudGlsIjoxNzgxMTM5NTAyNDEwLCJpYXQiOjE3ODEwOTYzMDI0NzB9.ac2q4oXwuBHVT10NnGXlhMDeRxk2iuiEV2sACJTUPRg&vercel-blob-signature=Fp8CqAk6XRnLRIAVX9MHnu-W4F7IRhgoQwbwG_Dkgcs",
}

export const blobVideos = dev ? local : blob
