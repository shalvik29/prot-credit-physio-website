import Link from 'next/link'
import Image from 'next/image'
import type { BlogPost } from '@/lib/blogData'

interface BlogCardProps {
  post: BlogPost
  variant?: 'default' | 'compact'
}

export default function BlogCard({ post, variant = 'default' }: BlogCardProps) {
  const publishedDate = new Date(post.publishedDate).toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  if (variant === 'compact') {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
      >
        <div className="relative h-48 overflow-hidden bg-white-shade">
          <Image
            src={post.image || '/physiotherapist-assessing-runners-knee-port-credit.jpg'}
            alt={post.imageAlt || post.title}
            fill
            className="object-contain group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-3 left-3">
            <span className="bg-teal-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
              {post.category}
            </span>
          </div>
        </div>
        <div className="p-5 flex flex-col flex-1">
          <p className="text-xs text-gray-500 mb-2">{publishedDate}</p>
          <h3 className="text-lg font-bold text-navy-dark mb-2 group-hover:text-steel-blue transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 flex-1">
            {post.excerpt}
          </p>
          <div className="mt-4 pt-3 border-t border-gray-100">
            <span className="inline-flex items-center text-teal-600 text-sm font-semibold group-hover:gap-2 transition-all">
              Read Article
              <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </span>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative h-56 md:h-64 overflow-hidden bg-white-shade">
          <Image
            src={post.image || '/physiotherapist-assessing-runners-knee-port-credit.jpg'}
            alt={post.imageAlt || post.title}
            fill
            className="object-contain hover:scale-110 transition-transform duration-500"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute top-4 left-4">
            <span className="bg-teal-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
              {post.category}
            </span>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-white/80 text-xs mb-1">{publishedDate}</p>
            <h3 className="text-white text-xl font-bold leading-tight line-clamp-2">
              {post.title}
            </h3>
          </div>
        </div>
      </Link>
      <div className="p-6">
        <p className="text-gray-600 leading-relaxed line-clamp-3 mb-4">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-steel-blue/20 flex items-center justify-center">
              <span className="text-xs font-bold text-steel-blue">
                {post.author.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <span className="text-xs text-gray-500">{post.author.name}</span>
          </div>
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center text-teal-600 text-sm font-semibold hover:text-teal-700 transition-colors"
          >
            Read More
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </Link>
        </div>
      </div>
    </article>
  )
}