import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AnnouncementBanner from '@/components/AnnouncementBanner'
import BackToTop from '@/components/BackToTop'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Port Credit Physio | Multidisciplinary Physiotherapy & Rehabilitation',
  description: 'Professional physiotherapy, massage therapy, and rehabilitation services in Port Credit, Mississauga.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnnouncementBanner />
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}
