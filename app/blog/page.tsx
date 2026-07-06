import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { blogPosts } from '@/lib/blogData'
import BlogCard from '@/components/BlogCard'
import { BreadcrumbJsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Blog | Running Injury Tips & Physiotherapy Advice | Port Credit Physio',
  description:
    'Expert articles on running injuries, sports rehabilitation, physiotherapy tips, and recovery advice from Port Credit Physio & Rehab in Mississauga. Learn about runner\'s knee, shin splints, plantar fasciitis, and more.',
  keywords: [
    'physiotherapy blog Mississauga',
    'running injury blog Port Credit',
    'sports rehab articles',
    'physiotherapy tips Mississauga',
    'running pain advice',
    'injury prevention blog',
    'Port Credit Physio blog',
  ],
  openGraph: {
    title: 'Blog | Running Injury Tips & Physiotherapy Advice | Port Credit Physio',
    description:
      'Expert articles on running injuries, sports rehabilitation, and physiotherapy advice from Port Credit Physio & Rehab in Mississauga.',
    url: 'https://www.portcreditphysio.ca/blog',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Port Credit Physio And Rehab Blog',
      },
    ],
  },
  alternates: { canonical: 'https://www.portcreditphysio.ca/blog' },
}

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb JSON-LD */}
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://www.portcreditphysio.ca' },
          { name: 'Blog', url: 'https://www.portcreditphysio.ca/blog' },
        ]}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-navy-dark via-navy-medium to-steel-blue overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-teal-400 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-teal-300 text-sm uppercase tracking-widest mb-4 font-semibold">
            Our Blog
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Physiotherapy &<br />
            <span className="text-teal-300">Running Injury</span> Insights
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Expert advice on running injuries, recovery strategies, and rehabilitation tips from our
            physiotherapy team serving Port Credit, Mississauga, and surrounding communities.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white-shade">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} variant="compact" />
            ))}
          </div>

          {blogPosts.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-6">📝</div>
              <h2 className="text-2xl font-bold text-navy-dark mb-4">Coming Soon</h2>
              <p className="text-gray-600 max-w-lg mx-auto">
                We're working on helpful articles about running injuries, physiotherapy,
                and recovery. Check back soon for expert insights from our team.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-navy-dark to-steel-blue py-20 px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Have a Running Injury? We Can Help
          </h2>
          <p className="text-xl mb-10 text-gray-100 leading-relaxed">
            Don't let pain keep you on the sidelines. Book a free 15-minute consultation
            with our physiotherapy team and discover the path to pain-free running.
          </p>
          <Link
            href="https://portcreditphysioandrehab.janeapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold rounded-md shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            style={{ backgroundColor: '#14B8A6', color: 'white' }}
          >
            Book Your Free Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}