'use strict';
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { reviewsData as staticReviews } from '@/lib/reviewsData';

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [reviews, setReviews] = useState(staticReviews);
  const [googleRating, setGoogleRating] = useState(5.0);
  const [googleTotal, setGoogleTotal] = useState('100+ Verified Patient Reviews');
  const [loading, setLoading] = useState(true);
  const [expandedReviews, setExpandedReviews] = useState<Set<string>>(new Set());

  const toggleExpanded = (id: string) => {
    setExpandedReviews(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  // Fetch live Google reviews on mount
  useEffect(() => {
    async function fetchGoogleReviews() {
      try {
        const res = await fetch('/api/reviews/google');
        if (res.ok) {
          const data = await res.json();
          setGoogleRating(data.totalRating);
          setGoogleTotal(`Based on ${data.totalReviews} Verified Google Reviews`);
          if (data.reviews && data.reviews.length > 0) {
            setReviews(data.reviews);
          }
        }
      } catch (err) {
        console.warn('Could not fetch Google reviews, using static data');
      } finally {
        setLoading(false);
      }
    }
    fetchGoogleReviews();
  }, []);

  // Responsive items count calculation
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2); // Tablet
      } else {
        setItemsPerPage(3); // Desktop
      }
    };

    handleResize(); // Initial setup
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalReviews = reviews.length;
  const maxIndex = Math.max(0, totalReviews - itemsPerPage);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  // Auto-play interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }, 8000); // Shift every 8 seconds

    return () => clearInterval(timer);
  }, [maxIndex]);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white-shade border-t border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header Title with Google Badge */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-steel-blue font-bold mb-4">
            Patient Stories & Success
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy-dark mb-6">
            What Our Patients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl leading-relaxed mb-8">
            We are dedicated to helping our Port Credit and Mississauga community restore movement, reduce pain, and reclaim independence. Hear from real patients about their recovery journeys.
          </p>

          {/* Premium Google Rating Badge */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white px-6 py-4 rounded-xl shadow-md border border-gray-100 transform hover:scale-102 transition-transform duration-300">
            <div className="flex items-center gap-3">
              {/* Colorful Google G Logo */}
              <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24" version="1.1">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
              </svg>
              <div className="text-left">
                <div className="flex items-center gap-1">
                  <span className="text-2xl font-extrabold text-gray-900 leading-none">{googleRating}</span>
                  <span className="text-lg font-bold text-gray-400">/ 5</span>
                </div>
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Google Rating</p>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-8 bg-gray-200"></div>

            {/* Stars & Total Count */}
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex items-center text-amber-400 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs text-navy-medium font-bold mt-1">{googleTotal}</span>
            </div>
          </div>

        </div>

        {/* Carousel Slider Outer Container */}
        <div className="relative px-4 sm:px-12">

          {/* Left Arrow Button */}
          <button
            onClick={prevSlide}
            aria-label="Previous Review"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 bg-white hover:bg-navy-dark hover:text-white rounded-full flex items-center justify-center shadow-lg border border-gray-100 hover:border-navy-dark transition-all duration-300 transform active:scale-95"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={nextSlide}
            aria-label="Next Review"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 bg-white hover:bg-navy-dark hover:text-white rounded-full flex items-center justify-center shadow-lg border border-gray-100 hover:border-navy-dark transition-all duration-300 transform active:scale-95"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Viewport wrapper */}
          <div className="overflow-hidden py-4 px-1">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / totalReviews)}%)`,
                width: `${(totalReviews / itemsPerPage) * 100}%`,
              }}
            >
              {reviews.map((review: any) => (
                <div
                  key={review.id}
                  className="px-3"
                  style={{ width: `${100 / totalReviews}%` }}
                >
                  {/* Testimonial Card */}
                  <div className="bg-white rounded-2xl p-6 sm:p-8 h-full flex flex-col justify-between shadow-md hover:shadow-xl border border-gray-100 hover:border-steel-blue/30 transform hover:-translate-y-1 transition-all duration-300">

                    {/* Top Row: Stars and Service Tag */}
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                        {/* 5 Stars */}
                        <div className="flex text-amber-400 gap-0.5">
                          {[...Array(review.rating)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        {/* Service Tag */}
                        <span className="inline-block text-xs font-bold text-steel-blue bg-white-shade px-2.5 py-1 rounded-full border border-gray-100 truncate max-w-[180px]">
                          {review.service}
                        </span>
                      </div>

                      {/* Review Quote Text - fixed height with read more */}
                      <div className={`relative ${expandedReviews.has(review.id) ? '' : 'max-h-[180px] overflow-hidden'}`}>
                        <p className="text-gray-600 italic leading-relaxed text-sm sm:text-base mb-6">
                          "{review.text}"
                        </p>
                        {!expandedReviews.has(review.id) && (
                          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
                        )}
                      </div>
                      {review.text && review.text.length > 200 && (
                        <button
                          onClick={() => toggleExpanded(review.id)}
                          className="text-teal-600 hover:text-teal-700 font-semibold text-xs mb-4 transition-colors"
                        >
                          {expandedReviews.has(review.id) ? 'Show less ▲' : 'Read more ▼'}
                        </button>
                      )}
                    </div>

                    {/* Bottom Row: User Avatar & Details */}
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-50 mt-auto">
                      {/* Avatar */}
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-sm ${review.avatarColor} text-white shadow-sm flex-shrink-0`}>
                        {review.name.charAt(0)}
                      </div>

                      {/* User Info & Verification */}
                      <div className="text-left leading-tight min-w-0">
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <span className="font-bold text-gray-900 text-sm sm:text-base truncate max-w-[120px]">
                            {review.name}
                          </span>
                          {review.verified && (
                            <span
                              title="Verified Patient"
                              className="inline-flex items-center justify-center w-4 h-4 bg-teal-100 text-teal-800 rounded-full text-[9px] font-extrabold"
                            >
                              ✓
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-1 text-[11px] text-gray-400 font-semibold uppercase tracking-wider">
                          <span>{review.date}</span>
                          <span>•</span>
                          <span className="text-gray-400 font-medium">Google Review</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {[...Array(totalReviews - itemsPerPage + 1)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${currentIndex === index
                    ? 'w-8 bg-navy-dark'
                    : 'w-2.5 bg-gray-300 hover:bg-navy-medium'
                  }`}
              />
            ))}
          </div>

        </div>

        {/* Dynamic Dual Call-To-Action (Book & Review) */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">

          {/* CTA 1: Write a Review on Google */}
          <Link
            href="https://search.google.com/local/writereview?placeid=ChIJd0RrsepHK4gRPrB9hYEfC2I&source=g.page.m.ia._&laa=nmx-review-solicitation-ia2"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 border-2 border-steel-blue hover:border-navy-dark text-steel-blue hover:text-white bg-transparent hover:bg-navy-dark font-bold rounded-lg shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200 group"
          >
            {/* Colorful Google G Logo */}
            <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
            </svg>
            Write a Google Review
          </Link>

          {/* CTA 2: Book Appointment */}
          <Link
            href="https://portcreditphysioandrehab.janeapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-white font-bold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            style={{ backgroundColor: '#14B8A6' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0D9488')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#14B8A6')}
          >
            Book Your Appointment
          </Link>

        </div>

      </div>
    </section>
  );
}
