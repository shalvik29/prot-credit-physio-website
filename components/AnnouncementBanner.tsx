'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const TICKER_ITEMS = [
    'Introducing Massage Therapy (RMT) at Port Credit Physio & Rehab',
    'Save 15% on Your First 60-Min RMT Massage',
    'Available Fridays, Saturdays and Sundays Only',
]

function TickerContent() {
    return (
        <>
            {TICKER_ITEMS.map((item, index) => (
                <span key={index} className="inline-flex items-center gap-3 mx-6">
                    <span className="bg-teal-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full whitespace-nowrap">
                        New Service
                    </span>
                    <span className="text-sm md:text-base font-semibold whitespace-nowrap">{item}</span>
                    <span className="text-teal-300">★</span>
                </span>
            ))}
        </>
    )
}

export default function AnnouncementBanner() {
    const [isVisible, setIsVisible] = useState(true);
    const [isShaking, setIsShaking] = useState(false);

    useEffect(() => {
        const shakeInterval = setInterval(() => {
            setIsShaking(true);
            setTimeout(() => setIsShaking(false), 500);
        }, 5000); // Shake every 5 seconds

        return () => clearInterval(shakeInterval);
    }, []);

    if (!isVisible) return null;

    return (
        <div data-announcement-banner className="fixed top-0 left-0 right-0 z-[60] shadow-md">
            {/* Scrolling ticker */}
            <div className="relative bg-navy-dark text-white py-2.5 overflow-hidden">
                <div className="flex w-max animate-marquee">
                    <TickerContent />
                    <TickerContent />
                </div>
                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute top-1/2 -translate-y-1/2 right-3 text-white/70 hover:text-white transition-colors p-1"
                    aria-label="Close announcement"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            {/* Free consultation bar */}
            <div className="bg-[#2DD4BF] text-black py-3 px-4" style={{ backgroundColor: '#2DD4BF' }}>
                <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
                    <div className="flex-1 text-center md:text-left">
                        <span className="font-bold text-sm md:text-base">
                            Free 15 Min - No Obligation Consultation
                        </span>
                    </div>
                    <div className="flex items-center gap-3">
                        <a
                            href="tel:+12894978334"
                            className="hidden sm:inline-flex items-center gap-2 font-semibold text-sm md:text-base hover:underline whitespace-nowrap"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-1C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            (289) 497-8334
                        </a>
                        <Link
                            href="https://portcreditphysioandrehab.janeapp.com"
                            target="_blank"
                            className={`bg-black text-white px-5 py-2 rounded-md font-bold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap text-sm md:text-base ${isShaking ? 'animate-shake' : ''}`}
                        >
                            Book Now
                        </Link>
                        <button
                            onClick={() => setIsVisible(false)}
                            className="text-black hover:text-gray-700 transition-colors flex-shrink-0 p-1"
                            aria-label="Close announcement"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
