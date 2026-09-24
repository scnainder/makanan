'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    fbq: (...args: any[]) => void
  }
}

export default function MetaPixelTracker() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'ViewContent')
    }
  }, [])

  return null
}
