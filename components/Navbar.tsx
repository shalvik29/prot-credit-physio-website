'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { usePathname } from 'next/navigation';
import { servicesData } from '@/lib/servicesData';
import Button from './ui/Button';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [bannerHeight, setBannerHeight] = useState(0);
    const [showServicesDropdown, setShowServicesDropdown] = useState(false);
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Determine if scrolled past threshold
            setIsScrolled(currentScrollY > 50);

            // Show/hide navbar based on scroll direction
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling down - hide navbar
                setIsVisible(false);
            } else {
                // Scrolling up - show navbar
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        const updateBannerHeight = () => {
            const banner = document.querySelector('[data-announcement-banner]');
            setBannerHeight(banner ? banner.clientHeight : 0);
        };

        updateBannerHeight();
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', updateBannerHeight);

        // Watch for banner changes
        const observer = new MutationObserver(updateBannerHeight);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', updateBannerHeight);
            observer.disconnect();
        };
    }, [lastScrollY]);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services', hasDropdown: true },
        // { name: 'Our Team', href: '/team' },
        { name: 'Contact', href: '/contact' },
    ];

    // Check if current path matches the link
    const isActiveLink = (href: string) => {
        if (href === '/') {
            return pathname === '/';
        }
        return pathname.startsWith(href);
    };

    // Navbar background and visibility
    const getNavbarClasses = () => {
        if (isHomePage) {
            if (isScrolled) {
                // Scrolled on homepage - solid white background
                return 'bg-white shadow-lg';
            } else {
                // Top of homepage - semi-transparent white background
                return 'bg-white/90 backdrop-blur-md shadow-sm';
            }
        } else {
            // Other pages - always white
            return 'bg-white shadow-sm';
        }
    };

    const navbarClasses = `fixed left-0 right-0 z-50 transition-all duration-300 ${getNavbarClasses()} ${isVisible ? 'translate-y-0' : '-translate-y-full'
        }`;

    // Text colors - always dark since navbar is white/light
    const textClasses = 'text-navy-medium hover:text-navy-dark';

    const mobileMenuBg = 'bg-white';

    const mobileTextClasses = 'text-navy-medium hover:text-navy-dark hover:bg-gray-50';

    return (
        <nav className={navbarClasses} style={{ top: `${bannerHeight}px` }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 md:h-24">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0 flex items-center py-2">
                            <Image
                                src="/logo.png"
                                alt="Port Credit Physio Logo"
                                width={350}
                                height={160}
                                className="h-16 md:h-20 w-auto transition-all duration-300 object-contain"
                                priority
                            />
                        </Link>
                    </div>

                    <div className="hidden md:flex md:items-center md:space-x-8">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative"
                                onMouseEnter={() => link.hasDropdown && setShowServicesDropdown(true)}
                                onMouseLeave={() => link.hasDropdown && setShowServicesDropdown(false)}
                            >
                                <Link
                                    href={link.href}
                                    className={`${textClasses} px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActiveLink(link.href) ? 'border-b-2 border-steel-blue' : ''
                                        }`}
                                >
                                    {link.name}
                                    {link.hasDropdown && (
                                        <svg className="w-4 h-4 ml-1 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    )}
                                </Link>

                                {/* Services Dropdown */}
                                {link.hasDropdown && showServicesDropdown && (
                                    <div className="absolute left-0 top-full mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-4 z-50">
                                        <div className="px-4 pb-2 border-b border-gray-100">
                                            <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Our Services</p>
                                        </div>
                                        {servicesData.map((service) => (
                                            <Link
                                                key={service.id}
                                                href={`/services/${service.id}`}
                                                className="block px-4 py-3 hover:bg-gray-50 transition-colors"
                                                onClick={() => setShowServicesDropdown(false)}
                                            >
                                                <div className="font-semibold text-navy-dark text-sm">{service.title}</div>
                                            </Link>
                                        ))}
                                        <div className="px-4 pt-2 mt-2 border-t border-gray-100">
                                            <Link
                                                href="/services"
                                                className="text-steel-blue text-sm font-semibold hover:text-navy-dark inline-flex items-center"
                                                onClick={() => setShowServicesDropdown(false)}
                                            >
                                                View All Services
                                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                        <Button href="https://portcreditphysioandrehab.janeapp.com" variant="primary" target="_blank" style={{ backgroundColor: '#14B8A6', color: 'white' }}>
                            Book Appointment
                        </Button>
                    </div>

                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`inline-flex items-center justify-center p-2 rounded-md ${textClasses} focus:outline-none`}
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className={`${mobileMenuBg} md:hidden border-t border-gray-100/20`}>
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <div key={link.name}>
                                <Link
                                    href={link.href}
                                    className={`block ${mobileTextClasses} px-3 py-2 rounded-md text-base font-medium ${isActiveLink(link.href) ? 'bg-steel-blue/10 border-l-4 border-steel-blue' : ''
                                        }`}
                                    onClick={() => !link.hasDropdown && setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>

                                {/* Mobile Services Submenu */}
                                {link.hasDropdown && (
                                    <div className="ml-4 mt-2 space-y-1">
                                        {servicesData.map((service) => (
                                            <Link
                                                key={service.id}
                                                href={`/services/${service.id}`}
                                                className={`block ${mobileTextClasses} px-3 py-2 rounded-md text-sm`}
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {service.title}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="pt-4 pb-2 flex justify-center">
                            <iframe frameBorder="0" height="28" scrolling="no" src="https://portcreditphysioandrehab.janeapp.com/embed/book_online" width="177"></iframe>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
