import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import MetaPixelTracker from '@/components/MetaPixelTracker'

export const metadata: Metadata = {
  title: 'OUR Blooming Academy - Program Layanan Makanan di Jepang',
  description: 'Program pelatihan Layanan Makanan (Food Service) OUR Blooming Academy. Pelatihan gratis untuk bekerja di industri restoran/dapur Jepang. Batch 6 dimulai 2 November 2026.',
  keywords: 'OUR Blooming Academy, layanan makanan, food service, Jepang, tokutei ginou, pelatihan gratis',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <head>
        <Script
          id="facebook-pixel"
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
              fbq('init', '4441109292802290');
              fbq('track', 'ViewContent');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=4441109292802290&ev=ViewContent&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className="flex flex-col min-h-screen">
        <MetaPixelTracker />
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  )
}
