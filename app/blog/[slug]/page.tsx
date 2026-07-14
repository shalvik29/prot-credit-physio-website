import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getBlogPostBySlug, getAllBlogSlugs } from '@/lib/blogData'
import { BreadcrumbJsonLd, BlogArticleJsonLd, FaqJsonLd } from '@/components/JsonLd'

// Generate static params for all blog posts
export async function generateStaticParams() {
  const slugs = getAllBlogSlugs()
  return slugs.map((slug) => ({ slug }))
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug)
  if (!post) return {}

  return {
    title: `${post.title} | Port Credit Physio And Rehab Blog`,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: {
      canonical: `https://www.portcreditphysio.ca/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | Port Credit Physio And Rehab`,
      description: post.metaDescription,
      url: `https://www.portcreditphysio.ca/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.publishedDate,
      modifiedTime: post.modifiedDate,
      authors: [post.author.name],
      images: [
        {
          url: post.image ? `https://www.portcreditphysio.ca${post.image}` : 'https://www.portcreditphysio.ca/og-default.png',
          width: 1200,
          height: 630,
          alt: post.imageAlt || post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | Port Credit Physio And Rehab`,
      description: post.metaDescription,
    },
  }
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function calculateReadTime(contentLength: number): string {
  const wordsPerMinute = 200
  const wordCount = contentLength
  const minutes = Math.ceil(wordCount / wordsPerMinute)
  return `${minutes} min read`
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  // Calculate total word count for read time
  const totalWords = post.content.reduce((count, section) => {
    if (section.content) {
      return count + section.content.split(' ').length
    }
    if (section.items) {
      return count + section.items.join(' ').split(' ').length
    }
    return count
  }, 0)

  const canonicalUrl = `https://www.portcreditphysio.ca/blog/${post.slug}`
  const imageUrl = post.image ? `https://www.portcreditphysio.ca${post.image}` : 'https://www.portcreditphysio.ca/og-default.png'

  return (
    <div className="flex flex-col min-h-screen">
      {/* SEO JSON-LD */}
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://www.portcreditphysio.ca' },
          { name: 'Blog', url: 'https://www.portcreditphysio.ca/blog' },
          { name: post.title, url: canonicalUrl },
        ]}
      />
      <BlogArticleJsonLd
        title={post.title}
        description={post.metaDescription}
        url={canonicalUrl}
        imageUrl={imageUrl}
        publishedDate={post.publishedDate}
        modifiedDate={post.modifiedDate}
        authorName={post.author.name}
      />
      {post.faqs && <FaqJsonLd faqs={post.faqs} />}

      {/* Article Header */}
      <header className="bg-gradient-to-br from-navy-dark via-navy-medium to-steel-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-teal-400 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-16">
          {/* Breadcrumb */}
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-teal-300 truncate max-w-[200px] md:max-w-[400px]">
                {post.title}
              </li>
            </ol>
          </nav>

          {/* Category Badge & Date */}
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-teal-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
              {post.category}
            </span>
            <span className="text-gray-300 text-sm">{formatDate(post.publishedDate)}</span>
            <span className="text-gray-400 text-sm">·</span>
            <span className="text-gray-300 text-sm">{calculateReadTime(totalWords)}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            {post.title}
          </h1>

          {/* Subtitle */}
          {post.subtitle && (
            <p className="text-lg md:text-xl text-teal-200 leading-relaxed mb-6">
              {post.subtitle}
            </p>
          )}

          {/* Author */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center overflow-hidden flex-shrink-0">
              {post.author.image ? (
                <Image
                  src={post.author.image}
                  alt={post.author.name}
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                  style={{ objectPosition: '50% 20%' }}
                />
              ) : (
                <span className="text-white font-bold text-lg">
                  {post.author.name.split(' ').map(n => n[0]).join('')}
                </span>
              )}
            </div>
            <div>
              <p className="text-white font-semibold">{post.author.name}</p>
              <p className="text-gray-300 text-sm">{post.author.credentials}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      {post.image && (
        <div className="relative w-full -mt-8 md:-mt-12 px-4 sm:px-6 z-20">
          <div className="relative w-full max-w-5xl mx-auto h-64 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-white-shade">
            <Image
              src={post.image}
              alt={post.imageAlt || post.title}
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </div>
        </div>
      )}

      {/* Article Content */}
      <article className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          {/* Render Content Sections */}
          <div className="prose prose-lg max-w-none">
            {post.content.map((section, index) => {
              switch (section.type) {
                case 'heading':
                  return (
                    <h2 key={index} className="text-2xl md:text-3xl font-bold text-navy-dark mt-12 mb-6 leading-tight">
                      {section.content}
                    </h2>
                  )
                case 'subheading':
                  return (
                    <h3 key={index} className="text-xl md:text-2xl font-bold text-navy-dark mt-10 mb-4 leading-tight">
                      {section.content}
                    </h3>
                  )
                case 'paragraph':
                  return (
                    <p key={index} className="text-gray-700 leading-relaxed mb-5 text-lg">
                      {section.content}
                    </p>
                  )
                case 'list':
                  return (
                    <ul key={index} className="space-y-3 mb-8 ml-0">
                      {section.items?.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3 text-gray-700 text-lg">
                          <span className="w-2 h-2 bg-teal-500 rounded-full mt-3 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )
                case 'image':
                  return (
                    <figure key={index} className="my-10 -mx-4 sm:mx-0">
                      <div className="relative w-full aspect-[1316/717] rounded-xl overflow-hidden shadow-md bg-white">
                        <Image
                          src={section.src!}
                          alt={section.alt || post.title}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, 768px"
                        />
                      </div>
                      {section.caption && (
                        <figcaption className="text-sm text-gray-500 text-center mt-3">
                          {section.caption}
                        </figcaption>
                      )}
                    </figure>
                  )
                case 'callout':
                  return (
                    <div
                      key={index}
                      className={`p-6 rounded-xl mb-8 border-l-4 ${
                        section.variant === 'tip'
                          ? 'bg-teal-50 border-teal-400'
                          : section.variant === 'warning'
                          ? 'bg-amber-50 border-amber-400'
                          : 'bg-blue-50 border-blue-400'
                      }`}
                    >
                      <div className="flex gap-3">
                        <span className="text-xl flex-shrink-0 mt-0.5">
                          {section.variant === 'tip' ? '💡' : section.variant === 'warning' ? '⚠️' : 'ℹ️'}
                        </span>
                        <div>
                          <p className="text-gray-800 font-medium leading-relaxed">
                            {section.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                default:
                  return null
              }
            })}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-600 text-sm px-3 py-1.5 rounded-full hover:bg-gray-200 transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-12 p-8 bg-gradient-to-br from-white-shade to-white rounded-2xl border border-gray-100">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-20 h-20 rounded-full bg-steel-blue/20 flex items-center justify-center overflow-hidden flex-shrink-0">
                {post.author.image ? (
                  <Image
                    src={post.author.image}
                    alt={post.author.name}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                    style={{ objectPosition: '50% 20%' }}
                  />
                ) : (
                  <span className="text-steel-blue font-bold text-2xl">
                    {post.author.name.split(' ').map(n => n[0]).join('')}
                  </span>
                )}
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy-dark mb-1">
                  About {post.author.name}
                </h3>
                <p className="text-sm text-steel-blue font-medium mb-3">
                  {post.author.credentials}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {post.author.bio}
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          {post.faqs && post.faqs.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-2xl md:text-3xl font-bold text-navy-dark mb-8">
                Frequently Asked Questions About Running Pain
              </h2>
              <div className="space-y-6">
                {post.faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="group bg-white-shade rounded-xl overflow-hidden border border-gray-100 hover:border-gray-200 transition-all"
                  >
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                      <h3 className="text-lg font-semibold text-navy-dark pr-4">
                        {faq.question}
                      </h3>
                      <svg
                        className="w-5 h-5 text-steel-blue flex-shrink-0 transition-transform group-open:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </summary>
                    <div className="px-5 pb-5">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          )}

          {/* CTA Section */}
          {post.cta && (
            <div className="mt-12 p-8 md:p-10 bg-gradient-to-br from-navy-dark via-navy-medium to-steel-blue rounded-2xl text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {post.cta.title}
              </h2>
              <p className="text-gray-200 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                {post.cta.description}
              </p>
              <Link
                href={post.cta.buttonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-md shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                style={{
                  backgroundColor: post.cta.variant === 'primary' ? '#14B8A6' : '#FFFFFF',
                  color: post.cta.variant === 'primary' ? '#FFFFFF' : '#1B3C53',
                }}
              >
                {post.cta.buttonText}
              </Link>
            </div>
          )}

          {/* Back to Blog */}
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center text-steel-blue font-semibold hover:text-navy-dark transition-colors text-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path>
              </svg>
              Back to All Articles
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}