'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';


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
        <div
            data-announcement-banner
            className="fixed top-0 left-0 right-0 z-[60] bg-[#2DD4BF] text-black py-3 px-4 shadow-md"
            style={{ backgroundColor: '#2DD4BF' }}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
                <div className="flex-1 text-center md:text-left">
                    <span className="font-bold text-sm md:text-base">
                        Free 15 Min - No Obligation Consultation
                    </span>
                </div>
                <div className="flex items-center gap-3">
                    <Link
                        href="https://portcreditphysioandrehab.janeapp.com"
                        target="_blank"
                        className={`bg-black text-white px-5 py-2 rounded-md font-bold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap text-sm md:text-base ${isShaking ? 'animate-shake' : ''}`}
                    >
                        testing
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
    );
}
