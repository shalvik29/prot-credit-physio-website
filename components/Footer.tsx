import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-navy-dark text-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Port Credit Physio</h3>
                        <p className="text-gray-300 text-sm">
                            Providing multidisciplinary physiotherapy and rehabilitation services to help you move better and feel better.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
                            <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li>Suite 300 - 268 Lakeshore Rd East</li>
                            <li>Mississauga, ON L5G 1H1</li>
                            <li>Phone: <a href="tel:+12894978334" className="hover:text-white transition-colors">(289) 497-8334</a></li>
                            <li>Fax: (289) 536-3004</li>
                            <li>Email: <a href="mailto:info@portcreditphysio.ca" className="hover:text-white transition-colors">info@portcreditphysio.ca</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Hours</h3>
                        <ul className="space-y-2 text-gray-300 text-sm">
                            <li className="flex justify-between gap-4">
                                <span>Monday – Thursday</span>
                                <span>10:00am – 8:00pm</span>
                            </li>
                            <li className="flex justify-between gap-4">
                                <span>Friday – Saturday</span>
                                <span>10:00am – 4:00pm</span>
                            </li>
                            <li className="flex justify-between gap-4">
                                <span>Sunday</span>
                                <span>10:00am – 2:00pm</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-navy-medium text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} Port Credit Physio. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
