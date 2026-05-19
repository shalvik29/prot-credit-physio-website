import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AnnouncementBanner from '@/components/AnnouncementBanner'
import BackToTop from '@/components/BackToTop'
import FacebookPixel from '@/components/FacebookPixel'
import { LocalBusinessJsonLd } from '@/components/JsonLd'

const inter = Inter({ subsets: ['latin'] })
// It's a common practice to put your ID in .env.local, e.g., PASTE_GOOGLE_SEARCH_CONSOLE_CODE_HERE=123456789
const GOOGLE_SEARCH_CONSOLE_ID = process.env.GOOGLE_SEARCH_CONSOLE_ID || ''

export const metadata: Metadata = {
  metadataBase: new URL('https://www.portcreditphysio.ca'),
  title: {
    default: 'Physiotherapy Port Credit | Port Credit Physio And Rehab',
    template: '%s | Port Credit Physio And Rehab',
  },
  description:
    'Expert physiotherapy and rehabilitation in Port Credit, Mississauga. Treating back pain, sports injuries, pelvic floor, MVA rehab & more. Call (289) 497-8334.',
  keywords: [
    'physiotherapy Port Credit',
    'physiotherapist Mississauga',
    'physio rehab Mississauga',
    'sports injury physio Mississauga',
    'back pain physiotherapy Mississauga',
    'Port Credit physio clinic',
    'best physiotherapist near me',
    'injury rehabilitation Mississauga',
  ],
  authors: [{ name: 'Port Credit Physio And Rehab' }],
  creator: 'Port Credit Physio And Rehab',
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://www.portcreditphysio.ca',
    siteName: 'Port Credit Physio And Rehab',
    images: [
      {
        url: '/og-default.png',
        width: 100,
        height: 100,
        alt: 'Port Credit Physio And Rehab — Physiotherapy Mississauga',
      },
    ],
  },
  twitter: { card: 'summary' },
  robots: { index: true, follow: true },
  verification: {
    google: GOOGLE_SEARCH_CONSOLE_ID,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YTDLC8S7HP"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YTDLC8S7HP');
            `,
          }}
        />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KDXD7N8F');`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KDXD7N8F"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <FacebookPixel />
        <LocalBusinessJsonLd />
        <AnnouncementBanner />
        <Navbar />
        <main aria-label="Main content — Port Credit Physio And Rehab">
          {children}
        </main>
        <Footer />
        {/* NAP schema block — visually hidden, present for SEO crawlers */}
        <address
          className="sr-only"
          aria-label="Clinic address"
        >
          <span>Port Credit Physio And Rehab</span>
          <span>300 - 268 Lakeshore Rd East</span>
          <span>Mississauga, ON L5G 1H1</span>
          <a href="tel:+12894978334">(289) 497-8334</a>
        </address>
        <BackToTop />
      </body>
    </html>
  )
}
