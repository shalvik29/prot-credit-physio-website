import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-navy-dark text-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                            <li>123 Example Street</li>
                            <li>Port Credit, Mississauga, ON</li>
                            <li>Phone: (555) 123-4567</li>
                            <li>Email: info@portcreditphysio.com</li>
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
