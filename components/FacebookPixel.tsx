'use client'

import React, { useEffect, useRef, useState, Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import Script from 'next/script'

// It's a common practice to put your ID in .env.local, e.g., NEXT_PUBLIC_FACEBOOK_PIXEL_ID=123456789
const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || ''

function PixelTracker({ isLoaded }: { isLoaded: boolean }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const isInitialLoad = useRef(true)

  useEffect(() => {
    if (!FB_PIXEL_ID || !isLoaded) return

    // Don't track PageView on the very first load since it's already triggered in the Script block
    if (isInitialLoad.current) {
      isInitialLoad.current = false
      return
    }

    // Trigger a PageView for subsequent client-side route transitions
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'PageView')
    }
  }, [pathname, searchParams, isLoaded])

  return null
}

export default function FacebookPixel() {
  const [isLoaded, setIsLoaded] = useState(false)

  if (!FB_PIXEL_ID) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('Facebook Pixel ID is not set. Add NEXT_PUBLIC_FACEBOOK_PIXEL_ID to your environment variables.')
    }
    return null
  }

  return (
    <>
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${FB_PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
        onLoad={() => setIsLoaded(true)}
      />
      {/* Suspense is required for usePathname/useSearchParams in App Router to not bail out of static rendering */}
      <Suspense fallback={null}>
        <PixelTracker isLoaded={isLoaded} />
      </Suspense>
    </>
  )
}
